import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Info, Sparkles, Stethoscope } from "lucide-react";
import CTABlock from "@/components/CTABlock";
import CallPanel from "@/components/novadent/CallPanel";
import TranscriptPanel from "@/components/novadent/TranscriptPanel";
import BookingsPanel from "@/components/novadent/BookingsPanel";
import { useNovaCall } from "@/hooks/useNovaCall";
import type { NovaLanguage } from "@/lib/vapi/novaConfig";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import patientReactivationMockup from "@/assets/patient-reactivation-mockup.png";
import reviewRequestMockup from "@/assets/review-request-mockup.png";
import digitalIntakeMockup from "@/assets/digital-intake-mockup.png";

const IN_ACTION_MOCKUPS = [
  { image: patientReactivationMockup, captionKey: "demo.novaDent.inAction.reactivation.caption" },
  { image: reviewRequestMockup, captionKey: "demo.novaDent.inAction.review.caption" },
  { image: digitalIntakeMockup, captionKey: "demo.novaDent.inAction.intake.caption" },
] as const;

const LANGUAGES: { code: NovaLanguage; flag: string; labelKey: string }[] = [
  { code: "en", flag: "🇬🇧", labelKey: "demo.novaDent.languageSelector.english" },
  { code: "tr", flag: "🇹🇷", labelKey: "demo.novaDent.languageSelector.turkish" },
  { code: "ar", flag: "🇸🇦", labelKey: "demo.novaDent.languageSelector.arabic" },
];

const NovaDentDemo = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [language, setLanguage] = useState<NovaLanguage>("en");
  const { status, transcript, bookings, duration, error, startCall, endCall } = useNovaCall();

  const canChangeLanguage = status === "idle" || status === "ended";

  useEffect(() => {
    if (!error) return;
    if (error.kind === "mic") {
      toast({
        variant: "destructive",
        title: t("demo.novaDent.micError.title"),
        description: t("demo.novaDent.micError.description"),
      });
    } else if (error.kind === "missingKey") {
      toast({
        variant: "destructive",
        title: t("demo.novaDent.configError.title"),
        description: t("demo.novaDent.configError.description"),
      });
    } else {
      toast({
        variant: "destructive",
        title: t("demo.novaDent.genericError.title"),
        description: error.message || t("demo.novaDent.genericError.description"),
      });
    }
  }, [error, toast, t]);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="reveal bg-gradient-to-b from-background via-muted/30 to-background px-4 py-12 md:px-6 md:py-20 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <Stethoscope className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              {t("demo.novaDent.clinicName")}
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {t("demo.novaDent.heroHeadline")}
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            {t("demo.novaDent.heroSubheadline")}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-accent" />
            <span>{t("demo.novaDent.microcopy.micHint")}</span>
          </div>
        </div>
      </section>

      {/* Call interface */}
      <section className="reveal px-4 pb-12 md:px-6 md:pb-20 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            {/* Left column: language + call */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <p className="mb-3 text-sm font-semibold text-foreground">
                  {t("demo.novaDent.languageSelector.label")}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGES.map((lang) => {
                    const selected = language === lang.code;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        disabled={!canChangeLanguage}
                        onClick={() => setLanguage(lang.code)}
                        className={cn(
                          "flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-medium transition-all",
                          selected
                            ? "border-primary bg-primary/10 text-primary shadow-sm"
                            : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground",
                          !canChangeLanguage && "cursor-not-allowed opacity-50",
                        )}
                      >
                        <span className="text-2xl" aria-hidden>
                          {lang.flag}
                        </span>
                        <span>{t(lang.labelKey)}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <CallPanel
                status={status}
                duration={duration}
                onStart={() => startCall(language)}
                onEnd={endCall}
              />
            </div>

            {/* Right column: transcript + bookings */}
            <div className="flex flex-col gap-6">
              <TranscriptPanel transcript={transcript} language={language} />
              <BookingsPanel bookings={bookings} />
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="reveal px-4 pb-12 md:px-6 md:pb-20 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
              {t("demo.novaDent.inAction.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
              {t("demo.novaDent.inAction.subheading")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {IN_ACTION_MOCKUPS.map((mockup) => (
              <div
                key={mockup.captionKey}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
              >
                <div className="relative">
                  <img
                    src={mockup.image}
                    alt={t(mockup.captionKey)}
                    className="h-auto w-full"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 bg-background/80 px-3 py-1.5 backdrop-blur-sm">
                    <Info className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {t("demo.novaDent.inAction.sampleDataNote")}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{t(mockup.captionKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
};

export default NovaDentDemo;
