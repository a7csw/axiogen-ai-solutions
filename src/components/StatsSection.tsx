import { TrendingUp, ShieldCheck, Calendar, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: TrendingUp,
      value: t("stats.faster.value"),
      label: t("stats.faster.label"),
      description: t("stats.faster.description")
    },
    {
      icon: ShieldCheck,
      value: t("stats.errors.value"),
      label: t("stats.errors.label"),
      description: t("stats.errors.description")
    },
    {
      icon: Calendar,
      value: t("stats.appointments.value"),
      label: t("stats.appointments.label"),
      description: t("stats.appointments.description")
    },
    {
      icon: Target,
      value: t("stats.satisfaction.value"),
      label: t("stats.satisfaction.label"),
      description: t("stats.satisfaction.description")
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("stats.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-2xl border border-border hover-lift"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
