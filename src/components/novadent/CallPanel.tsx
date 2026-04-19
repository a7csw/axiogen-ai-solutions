import { Mic, PhoneOff, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { CallStatus } from "@/hooks/useNovaCall";

type Props = {
  status: CallStatus;
  duration: number;
  onStart: () => void;
  onEnd: () => void;
};

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

const CallPanel = ({ status, duration, onStart, onEnd }: Props) => {
  const { t } = useTranslation();

  const isConnecting = status === "connecting";
  const isActive = status === "active";
  const isEnded = status === "ended";

  const buttonLabel =
    isConnecting
      ? t("demo.novaDent.callButton.connecting")
      : isActive
        ? t("demo.novaDent.callButton.active")
        : isEnded
          ? t("demo.novaDent.callButton.ended")
          : t("demo.novaDent.callButton.idle");

  const statusText =
    status === "idle"
      ? t("demo.novaDent.callStatus.idle")
      : status === "connecting"
        ? t("demo.novaDent.callStatus.connecting")
        : status === "active"
          ? t("demo.novaDent.callStatus.active")
          : t("demo.novaDent.callStatus.ended");

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-card">
      <div className="relative">
        {isActive && (
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" aria-hidden />
        )}
        <button
          type="button"
          onClick={isActive ? onEnd : onStart}
          disabled={isConnecting}
          aria-label={buttonLabel}
          className={cn(
            "relative flex h-32 w-32 items-center justify-center rounded-full shadow-lg transition-all hover-scale",
            isActive
              ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
              : "bg-gradient-to-br from-primary to-accent text-white hover:opacity-95",
            isConnecting && "opacity-80 cursor-wait",
          )}
        >
          {isConnecting ? (
            <Loader2 className="h-12 w-12 animate-spin" />
          ) : isActive ? (
            <PhoneOff className="h-12 w-12" />
          ) : (
            <Mic className="h-12 w-12" />
          )}
        </button>
      </div>

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-lg font-semibold text-foreground">{buttonLabel}</p>
        <p className="text-sm text-muted-foreground">{statusText}</p>
      </div>

      {(isActive || isEnded) && (
        <Badge variant={isActive ? "default" : "secondary"} className="px-3 py-1 text-sm">
          <span className="tabular-nums">{formatDuration(duration)}</span>
        </Badge>
      )}

      {isActive && (
        <Button variant="outline" size="sm" onClick={onEnd} className="mt-1">
          <PhoneOff className="mr-2 h-4 w-4" />
          {t("demo.novaDent.endCallButton")}
        </Button>
      )}
    </div>
  );
};

export default CallPanel;
