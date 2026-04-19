import { useCallback, useEffect, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { buildNovaAssistant, type NovaLanguage } from "@/lib/vapi/novaConfig";

export type CallStatus = "idle" | "connecting" | "active" | "ended";

export type TranscriptEntry = {
  id: string;
  role: "user" | "assistant";
  text: string;
};

export type Booking = {
  id: string;
  patientName: string;
  phoneNumber: string;
  appointmentType: string;
  date: string;
  time: string;
};

export type NovaCallError =
  | { kind: "missingKey" }
  | { kind: "mic" }
  | { kind: "generic"; message?: string };

type ParsedToolArgs = Record<string, unknown>;

function parseToolArgs(raw: unknown): ParsedToolArgs | null {
  if (!raw) return null;
  if (typeof raw === "string") {
    try {
      return JSON.parse(raw) as ParsedToolArgs;
    } catch {
      return null;
    }
  }
  if (typeof raw === "object") return raw as ParsedToolArgs;
  return null;
}

function extractBookingCalls(message: Record<string, unknown>): ParsedToolArgs[] {
  const bookings: ParsedToolArgs[] = [];

  const pushIfBooking = (name: unknown, args: unknown) => {
    if (name !== "save_booking") return;
    const parsed = parseToolArgs(args);
    if (
      parsed &&
      parsed.patient_name &&
      parsed.phone_number &&
      parsed.appointment_type &&
      parsed.appointment_date &&
      parsed.appointment_time
    ) {
      bookings.push(parsed);
    }
  };

  const type = message.type;

  if (type === "tool-calls") {
    const list = (message.toolCallList ?? message.toolCalls ?? []) as Array<
      Record<string, unknown>
    >;
    for (const tc of list) {
      const fn = (tc.function ?? tc) as Record<string, unknown>;
      pushIfBooking(fn.name, fn.arguments ?? fn.parameters);
    }
  } else if (type === "function-call") {
    const fc = (message.functionCall ?? {}) as Record<string, unknown>;
    pushIfBooking(fc.name, fc.parameters ?? fc.arguments);
  }

  return bookings;
}

export function useNovaCall() {
  const vapiRef = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<CallStatus>("idle");
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<NovaCallError | null>(null);

  const getVapi = useCallback((): Vapi | null => {
    if (vapiRef.current) return vapiRef.current;
    const key = import.meta.env.VITE_VAPI_PUBLIC_KEY as string | undefined;
    if (!key) {
      setError({ kind: "missingKey" });
      return null;
    }
    const instance = new Vapi(key);

    instance.on("call-start", () => setStatus("active"));
    instance.on("call-end", () => setStatus("ended"));
    instance.on("error", (e: unknown) => {
      const msg = (e as { message?: string } | null)?.message ?? "";
      const lower = msg.toLowerCase();
      if (lower.includes("microphone") || lower.includes("permission") || lower.includes("notallowed")) {
        setError({ kind: "mic" });
      } else {
        setError({ kind: "generic", message: msg });
      }
      setStatus("ended");
    });
    instance.on("message", (message: Record<string, unknown>) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const role = message.role === "user" ? "user" : "assistant";
        const text = String(message.transcript ?? "").trim();
        if (!text) return;
        setTranscript((prev) => [
          ...prev,
          { id: `${Date.now()}-${prev.length}`, role, text },
        ]);
      }

      const newBookings = extractBookingCalls(message);
      if (newBookings.length) {
        setBookings((prev) => [
          ...prev,
          ...newBookings.map((b, i) => ({
            id: `${Date.now()}-${prev.length + i}`,
            patientName: String(b.patient_name),
            phoneNumber: String(b.phone_number),
            appointmentType: String(b.appointment_type),
            date: String(b.appointment_date),
            time: String(b.appointment_time),
          })),
        ]);
      }
    });

    vapiRef.current = instance;
    return instance;
  }, []);

  useEffect(() => {
    if (status !== "active") return;
    const tick = setInterval(() => setDuration((d) => d + 1), 1000);
    return () => clearInterval(tick);
  }, [status]);

  useEffect(() => {
    return () => {
      const instance = vapiRef.current;
      if (instance) {
        try {
          instance.stop();
        } catch {
          // ignore cleanup errors
        }
        instance.removeAllListeners();
      }
    };
  }, []);

  const startCall = useCallback(
    async (language: NovaLanguage) => {
      setError(null);
      setTranscript([]);
      setBookings([]);
      setDuration(0);
      setStatus("connecting");
      const instance = getVapi();
      if (!instance) {
        setStatus("idle");
        return;
      }
      try {
        await instance.start(buildNovaAssistant(language));
      } catch (e) {
        const msg = (e as { message?: string } | null)?.message ?? "";
        const lower = msg.toLowerCase();
        if (lower.includes("microphone") || lower.includes("permission") || lower.includes("notallowed")) {
          setError({ kind: "mic" });
        } else {
          setError({ kind: "generic", message: msg });
        }
        setStatus("idle");
      }
    },
    [getVapi],
  );

  const endCall = useCallback(() => {
    const instance = vapiRef.current;
    if (!instance) return;
    try {
      instance.stop();
    } catch {
      // ignore
    }
    setStatus("ended");
  }, []);

  return { status, transcript, bookings, duration, error, startCall, endCall };
}
