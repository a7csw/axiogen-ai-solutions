import { TrendingUp, Clock, Users, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "70%",
      label: "Faster Workflows",
      description: "Average improvement in admin efficiency"
    },
    {
      icon: Clock,
      value: "35%",
      label: "Fewer Admin Hours",
      description: "Time saved on repetitive tasks"
    },
    {
      icon: Users,
      value: "45%",
      label: "More Bookings",
      description: "Increase in confirmed appointments"
    },
    {
      icon: Target,
      value: "92%",
      label: "Patient Satisfaction",
      description: "Average rating from clinic patients"
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real data from clinics using Axiogen automation systems
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
