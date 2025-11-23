import { TrendingUp, ShieldCheck, Calendar, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "65%",
      label: "Faster Administrative Processes",
      description: "Average improvement after modernizing manual workflows with integrated digital systems."
    },
    {
      icon: ShieldCheck,
      value: "90%",
      label: "Reduction in Data Errors",
      description: "Smart validation tools ensure clean, accurate patient records and safer clinical operations."
    },
    {
      icon: Calendar,
      value: "45%",
      label: "Increase in Confirmed Appointments",
      description: "Smarter scheduling systems reduce no-shows and optimize patient flow."
    },
    {
      icon: Target,
      value: "92%",
      label: "Patient Satisfaction",
      description: "Better booking experiences and faster turnaround times improve patient outcomes."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Results That Healthcare Teams Feel Immediately
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real improvements delivered through Axiogen-built SaaS platforms and AI-powered healthcare systems.
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
