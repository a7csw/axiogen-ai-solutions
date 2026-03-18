import { useTranslation } from "react-i18next";
import CTABlock from "@/components/CTABlock";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare, Calendar, Bell, FileText, BarChart3, Check, LucideIcon } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-ai-mockup.jpg";
import bookingMockup from "@/assets/booking-system-mockup.jpg";
import followUpSystem from "@/assets/follow-up-system.jpg";
import patientIntake from "@/assets/patient-intake-mockup.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const Services = () => {
  const { t } = useTranslation();
  const headerRef = useScrollReveal<HTMLDivElement>();

  const services = [
    {
      icon: MessageSquare,
      title: t("services.communication.title"),
      description: t("services.communication.description"),
      features: [
        t("services.communication.features.1"),
        t("services.communication.features.2"),
        t("services.communication.features.3"),
        t("services.communication.features.4"),
        t("services.communication.features.5"),
      ],
      image: whatsappMockup,
      imageAlt: "WhatsApp AI receptionist interface",
    },
    {
      icon: Calendar,
      title: t("services.appointment.title"),
      description: t("services.appointment.description"),
      features: [
        t("services.appointment.features.1"),
        t("services.appointment.features.2"),
        t("services.appointment.features.3"),
        t("services.appointment.features.4"),
        t("services.appointment.features.5"),
      ],
      image: bookingMockup,
      imageAlt: "Appointment booking system",
    },
    {
      icon: Bell,
      title: t("services.engagement.title"),
      description: t("services.engagement.description"),
      features: [
        t("services.engagement.features.1"),
        t("services.engagement.features.2"),
        t("services.engagement.features.3"),
        t("services.engagement.features.4"),
        t("services.engagement.features.5"),
      ],
      image: followUpSystem,
      imageAlt: "Patient follow-up system",
    },
    {
      icon: FileText,
      title: t("services.intake.title"),
      description: t("services.intake.description"),
      features: [
        t("services.intake.features.1"),
        t("services.intake.features.2"),
        t("services.intake.features.3"),
        t("services.intake.features.4"),
        t("services.intake.features.5"),
      ],
      image: patientIntake,
      imageAlt: "Patient intake form interface",
    },
    {
      icon: BarChart3,
      title: t("services.analytics.title"),
      description: t("services.analytics.description"),
      features: [
        t("services.analytics.features.1"),
        t("services.analytics.features.2"),
        t("services.analytics.features.3"),
        t("services.analytics.features.4"),
        t("services.analytics.features.5"),
      ],
      image: analyticsDashboard,
      imageAlt: "Healthcare analytics dashboard",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/40">
        <div ref={headerRef} className="reveal container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t("services.title")}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-28">
            {services.map((service, index) => {
              const isReversed = index % 2 === 1;
              return (
                <ServiceRow
                  key={index}
                  service={service}
                  reversed={isReversed}
                />
              );
            })}
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
};

interface ServiceRowProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    image: string;
    imageAlt: string;
  };
  reversed: boolean;
}

const ServiceRow = ({ service, reversed }: ServiceRowProps) => {
  const contentRef = useScrollReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div
        ref={contentRef}
        className={`reveal ${reversed ? "lg:order-2" : ""}`}
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
          <service.icon className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{service.title}</h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {service.description}
        </p>
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-accent" />
              </span>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        className={`reveal reveal-delay-2 ${reversed ? "lg:order-1" : ""}`}
      >
        <div className="hover-image-zoom rounded-2xl overflow-hidden shadow-xl border border-border/50">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
