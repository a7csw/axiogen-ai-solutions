import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CTABlock from "@/components/CTABlock";
import { MessageSquare, Calendar, Bell, FileText, BarChart3, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: MessageSquare,
      title: t("services.items.communication.title"),
      description: t("services.items.communication.description"),
      features: t("services.items.communication.features", { returnObjects: true }) as string[],
    },
    {
      icon: Calendar,
      title: t("services.items.appointment.title"),
      description: t("services.items.appointment.description"),
      features: t("services.items.appointment.features", { returnObjects: true }) as string[]
    },
    {
      icon: Bell,
      title: t("services.items.engagement.title"),
      description: t("services.items.engagement.description"),
      features: t("services.items.engagement.features", { returnObjects: true }) as string[]
    },
    {
      icon: FileText,
      title: t("services.items.intake.title"),
      description: t("services.items.intake.description"),
      features: t("services.items.intake.features", { returnObjects: true }) as string[]
    },
    {
      icon: BarChart3,
      title: t("services.items.analytics.title"),
      description: t("services.items.analytics.description"),
      features: t("services.items.analytics.features", { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t("services.header.title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("services.header.subtitle")}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2 rtl:lg:order-1' : 'rtl:lg:order-2'}`}>
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
                          <li key={i} className="flex items-start gap-3 rtl:gap-3">
                            <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1 rtl:lg:order-2' : 'rtl:lg:order-1'}`}>
                  <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock 
        title={t("services.cta.title")}
        description={t("services.cta.description")}
      />
    </div>
  );
};

export default Services;
