import CaseStudyCard from "@/components/CaseStudyCard";
import CTABlock from "@/components/CTABlock";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Automated Patient Intake for Dental Clinic",
      description: "How Axiogen automated patient intake, reducing form completion time by 60% and eliminating data entry errors for a busy dental practice.",
      tag: "Dental",
      slug: "dental-intake-automation"
    },
    {
      title: "WhatsApp Booking System Implementation",
      description: "Implementing a 24/7 AI receptionist that increased appointment bookings by 45% and reduced front desk phone call volume by 70%.",
      tag: "Medical",
      slug: "whatsapp-booking-system"
    },
    {
      title: "Follow-Up Automation Success Story",
      description: "Automated follow-up system that improved patient retention by 35% and reduced no-show rates from 18% to just 7%.",
      tag: "Dental",
      slug: "follow-up-automation"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Proven Results from Real Clinics
          </h1>
          <p className="text-xl text-muted-foreground">
            Real automation systems delivering measurable improvements in efficiency, revenue, and patient satisfaction
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock 
        title="Want Similar Results for Your Clinic?"
        description="Book a demo to see how Axiogen can transform your practice"
      />
    </div>
  );
};

export default CaseStudies;
