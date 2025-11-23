import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CTABlock from "@/components/CTABlock";
import { MessageSquare, Calendar, Bell, FileText, BarChart3, Check } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-ai-mockup.jpg";
import bookingMockup from "@/assets/booking-system-mockup.jpg";
import followUpSystem from "@/assets/follow-up-system.jpg";
import patientIntake from "@/assets/patient-intake-mockup.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const Services = () => {
  const { t } = useTranslation();
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
        t("services.communication.features.5")
      ],
      image: whatsappMockup,
      imageAlt: "WhatsApp AI receptionist interface"
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
        t("services.appointment.features.5")
      ]
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
        t("services.engagement.features.5")
      ]
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
        t("services.intake.features.5")
      ]
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
        t("services.analytics.features.5")
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t("services.title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="border-2 border-border">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/20" />
                  </div>
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

export default Services;
