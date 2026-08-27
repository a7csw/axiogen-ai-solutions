import { useTranslation } from "react-i18next";
import CTABlock from "@/components/CTABlock";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Phone, CalendarCheck, Users, Star, ClipboardList, TrendingUp, LucideIcon } from "lucide-react";

const Services = () => {
  const { t, i18n } = useTranslation();
  const headerRef = useScrollReveal<HTMLDivElement>();

  const statSource = (key: string) => (i18n.exists(key) ? t(key) : undefined);

  const services = [
    {
      icon: Phone,
      title: t("services.voiceReceptionist.title"),
      description: t("services.voiceReceptionist.description"),
      stat: t("services.voiceReceptionist.stat"),
      statSource: statSource("services.voiceReceptionist.statSource"),
    },
    {
      icon: CalendarCheck,
      title: t("services.reminders.title"),
      description: t("services.reminders.description"),
      stat: t("services.reminders.stat"),
      statSource: statSource("services.reminders.statSource"),
    },
    {
      icon: Users,
      title: t("services.reactivation.title"),
      description: t("services.reactivation.description"),
      stat: t("services.reactivation.stat"),
      statSource: statSource("services.reactivation.statSource"),
    },
    {
      icon: Star,
      title: t("services.reputation.title"),
      description: t("services.reputation.description"),
      stat: t("services.reputation.stat"),
      statSource: statSource("services.reputation.statSource"),
    },
    {
      icon: ClipboardList,
      title: t("services.intake.title"),
      description: t("services.intake.description"),
      stat: t("services.intake.stat"),
      statSource: statSource("services.intake.statSource"),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/40">
        <div ref={headerRef} className="reveal container mx-auto max-w-4xl text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t("services.title")}
          </h1>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCardItem key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
};

interface ServiceCardItemProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    stat: string;
    statSource?: string;
  };
  index: number;
}

const ServiceCardItem = ({ service, index }: ServiceCardItemProps) => {
  const cardRef = useScrollReveal<HTMLDivElement>();
  const isLastOdd = index === 4;

  return (
    <div
      ref={cardRef}
      className={`reveal h-full p-6 md:p-8 rounded-2xl border border-border bg-card shadow-sm hover-card transition-all ${
        isLastOdd ? "md:col-span-2 md:max-w-xl md:mx-auto" : ""
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
        <service.icon className="w-7 h-7 text-primary" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-tight">{service.title}</h2>
      <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm md:text-base font-semibold text-accent">
        <TrendingUp className="w-4 h-4" />
        <span>{service.stat}</span>
      </div>
      {service.statSource && (
        <p className="mt-2 text-xs text-muted-foreground/80">{service.statSource}</p>
      )}
    </div>
  );
};

export default Services;
