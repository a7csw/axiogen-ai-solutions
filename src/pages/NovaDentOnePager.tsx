import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Languages, PhoneCall, CalendarCheck2, Rocket, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { LucideIcon } from "lucide-react";

const FEATURE_ICONS: LucideIcon[] = [Languages, PhoneCall, CalendarCheck2, Rocket];

const NovaDentOnePager = () => {
  const { t } = useTranslation();
  const heroRef = useScrollReveal<HTMLDivElement>();
  const howItWorksRef = useScrollReveal<HTMLDivElement>();
  const featuresRef = useScrollReveal<HTMLDivElement>();
  const audienceRef = useScrollReveal<HTMLDivElement>();

  const howItWorksSteps = t("novadentOnePager.howItWorks.steps", { returnObjects: true }) as {
    title: string;
    body: string;
  }[];

  const features = t("novadentOnePager.features", { returnObjects: true }) as {
    title: string;
    body: string;
  }[];

  const audienceItems = t("novadentOnePager.audience.items", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="px-4 py-12 md:px-6 md:py-20 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
        <div ref={heroRef} className="reveal container mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">
              {t("novadentOnePager.label")}
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {t("novadentOnePager.headline")}
          </h1>
          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg md:text-xl">
            {t("novadentOnePager.subheadline")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button size="lg" className="w-full min-h-[44px] text-base sm:w-auto hover-scale btn-shimmer" asChild>
              <Link to="/demo/novadent">
                {t("novadentOnePager.primaryCta")}
                <ArrowRight className="ms-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full min-h-[44px] text-base sm:w-auto hover-scale" asChild>
              <Link to="/contact">
                <MessageSquare className="me-2 h-5 w-5" />
                {t("novadentOnePager.secondaryCta")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 pb-12 md:px-6 md:pb-20 lg:px-8">
        <div ref={howItWorksRef} className="reveal container mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-xl font-bold text-foreground md:mb-12 md:text-2xl">
            {t("novadentOnePager.howItWorks.title")}
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm hover-card transition-all md:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <span className="text-lg font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="mb-1 text-base font-bold text-foreground md:text-lg">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-12 md:px-6 md:pb-20 lg:px-8">
        <div ref={featuresRef} className="reveal container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index] ?? Rocket;
              return (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm hover-card transition-all md:p-6"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-bold text-foreground md:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground md:text-base">{feature.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="px-4 pb-12 md:px-6 md:pb-20 lg:px-8">
        <div
          ref={audienceRef}
          className="reveal container mx-auto max-w-3xl rounded-2xl border border-border bg-muted/30 p-6 text-center md:p-10"
        >
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
            {t("novadentOnePager.audience.title")}
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {audienceItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovaDentOnePager;
