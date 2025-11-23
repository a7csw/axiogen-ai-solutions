import { TrendingUp, ShieldCheck, Calendar, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: TrendingUp,
      value: "65%",
      label: t("home.stats.fasterProcesses.label"),
      description: t("home.stats.fasterProcesses.description")
    },
    {
      icon: ShieldCheck,
      value: "90%",
      label: t("home.stats.dataErrors.label"),
      description: t("home.stats.dataErrors.description")
    },
    {
      icon: Calendar,
      value: "45%",
      label: t("home.stats.appointments.label"),
      description: t("home.stats.appointments.description")
    },
    {
      icon: Target,
      value: "92%",
      label: t("home.stats.satisfaction.label"),
      description: t("home.stats.satisfaction.description")
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("home.stats.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("home.stats.subtitle")}
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
