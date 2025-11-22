import { Building2 } from "lucide-react";

const TrustLogos = () => {
  const logos = [
    "Premier Dental",
    "City Medical",
    "Smile Clinic",
    "Health Plus",
    "Care Center",
    "Wellness Clinic",
  ];

  return (
    <section className="py-16 px-6 lg:px-8 border-b border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Trusted by leading medical and dental clinics
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((name, i) => (
            <div
              key={i}
              className="h-20 bg-card rounded-xl flex flex-col items-center justify-center border border-border hover-scale group transition-all"
            >
              <Building2 className="w-8 h-8 text-muted-foreground/40 group-hover:text-primary transition-colors mb-2" />
              <span className="text-xs text-muted-foreground font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
