import { Phone, Bell, Bot, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: Phone,  label: t("home.stats.booking") },
    { icon: Bell,   label: t("home.stats.reminders") },
    { icon: Bot,    label: t("home.stats.voice") },
    { icon: Zap,    label: t("home.stats.automation") },
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background dot-pattern">
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
              className="reveal-spring text-center p-8 bg-card rounded-2xl border border-border hover-lift"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="text-base font-medium text-foreground leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
