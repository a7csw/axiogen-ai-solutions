import type { FC } from "react";
import { Phone, MessageCircle, CalendarCheck, BarChart2, type LucideIcon } from "lucide-react";

// ── Palette locked to brand design system ──────────────────────────────────
// Card surface: brand navy hsl(213 52% 11%) → #0d1c32, lightened slightly
const CARD_BG = "#131d2e";
// Teal icon fill: brand primary lightened for dark bg legibility
const ICON_COLOR = "#5ec8bc";
// Muted label text on dark surface
const LABEL_COLOR = "#dce8f5";
// Status text — quieter
const STATUS_COLOR = "#5e7499";

// ── Card data ──────────────────────────────────────────────────────────────
interface CardDef {
  Icon: LucideIcon;
  label: string;
  status: string;
  dotColor: string;
  pulseDot: boolean;
  floatCls: string;
}

const CARDS: CardDef[] = [
  {
    Icon: Phone,
    label: "Nova AI Receptionist",
    status: "Answered 3 calls · just now",
    dotColor: "#22c55e",
    pulseDot: true,
    floatCls: "hf-1",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp Automation",
    status: "Appointment confirmed · 2m ago",
    dotColor: "#22c55e",
    pulseDot: true,
    floatCls: "hf-2",
  },
  {
    Icon: CalendarCheck,
    label: "Smart Booking System",
    status: "14 bookings today",
    dotColor: "#3b82f6",
    pulseDot: false,
    floatCls: "hf-3",
  },
  {
    Icon: BarChart2,
    label: "Clinic Operations",
    status: "0 missed inquiries this week",
    // brand primary teal, slightly lightened for dot legibility
    dotColor: "#0fb8a6",
    pulseDot: false,
    floatCls: "hf-4",
  },
];

// ── Single card ────────────────────────────────────────────────────────────
const HeroCard: FC<Omit<CardDef, "floatCls">> = ({
  Icon,
  label,
  status,
  dotColor,
  pulseDot,
}) => (
  <div
    className="flex items-start gap-3 rounded-xl px-3.5 py-3 transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(20,184,166,0.28)]"
    style={{
      background: CARD_BG,
      border: "1px solid rgba(20,184,166,0.16)",
      boxShadow:
        "0 6px 28px rgba(0,0,0,0.26), 0 2px 6px rgba(0,0,0,0.16), 0 0 0 1px rgba(20,184,166,0.06)",
    }}
  >
    {/* Icon container */}
    <div
      className="flex-shrink-0 mt-0.5 flex items-center justify-center rounded-[9px]"
      style={{
        width: 36,
        height: 36,
        background: "rgba(20,184,166,0.10)",
        border: "1px solid rgba(20,184,166,0.18)",
      }}
    >
      <Icon size={16} color={ICON_COLOR} strokeWidth={1.8} />
    </div>

    {/* Text content */}
    <div className="min-w-0 flex-1">
      <p
        className="text-[13px] font-medium leading-snug truncate"
        style={{ color: LABEL_COLOR }}
      >
        {label}
      </p>
      <div className="flex items-center gap-1.5 mt-[5px]">
        {/* Status indicator dot */}
        <span
          className={`flex-shrink-0 rounded-full${pulseDot ? " hf-dot-pulse" : ""}`}
          style={{
            width: 6,
            height: 6,
            background: dotColor,
          }}
        />
        <p
          className="text-[11px] leading-none truncate"
          style={{ color: STATUS_COLOR }}
        >
          {status}
        </p>
      </div>
    </div>
  </div>
);

// ── Composition ────────────────────────────────────────────────────────────
const HeroVisual: FC = () => (
  <div
    role="presentation"
    aria-hidden="true"
    className="relative w-full select-none py-4"
  >
    {/* Radial teal glow — depth behind the cards */}
    <div
      className="absolute pointer-events-none"
      style={{
        inset: "-10% 5% -10% 5%",
        background:
          "radial-gradient(ellipse 85% 70% at 50% 48%, rgba(20,184,166,0.08) 0%, transparent 100%)",
        zIndex: 0,
      }}
    />

    {/* Two-column staggered layout */}
    <div className="relative z-10 flex gap-3 sm:gap-4">
      {/* Column A — cards 1 & 3 */}
      <div className="flex flex-col gap-3 sm:gap-4 flex-1">
        <div className="hf-1">
          <HeroCard {...CARDS[0]} />
        </div>
        <div className="hf-3">
          <HeroCard {...CARDS[2]} />
        </div>
      </div>

      {/* Column B — cards 2 & 4, shifted down for visual stagger */}
      <div className="flex flex-col gap-3 sm:gap-4 flex-1 mt-8 sm:mt-10">
        <div className="hf-2">
          <HeroCard {...CARDS[1]} />
        </div>
        <div className="hf-4">
          <HeroCard {...CARDS[3]} />
        </div>
      </div>
    </div>
  </div>
);

export default HeroVisual;
