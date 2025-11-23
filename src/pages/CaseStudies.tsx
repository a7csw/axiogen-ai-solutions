import CaseStudyCard from "@/components/CaseStudyCard";
import CTABlock from "@/components/CTABlock";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Automated Patient Intake for Dental Clinic",
      description: "Reduced intake time by 60% with intelligent form automation.",
      tag: "Dental",
      slug: "patient-intake-automation"
    },
    {
      title: "WhatsApp Booking System Implementation",
      description: "Increased bookings by 45% with AI-powered 24/7 scheduling.",
      tag: "Medical",
      slug: "whatsapp-booking-automation"
    },
    {
      title: "Follow-Up Automation Success",
      description: "Improved patient retention by 35% with automated reminders.",
      tag: "Dental",
      slug: "follow-up-automation"
    },
    {
      title: "AI-Powered Patient Analytics System",
      description: "Reduced clinician admin time by 50% through smart analytics dashboards.",
      tag: "Clinic Ops",
      slug: "patient-analytics"
    },
    {
      title: "Clinic Management SaaS Prototype",
      description: "End-to-end system for managing patient records, bookings, and operations.",
      tag: "SaaS",
      slug: "clinic-saas-prototype"
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
        title="Ready to Modernize Your Healthcare Operations?"
        description="Partner with Axiogen to design custom healthcare SaaS platforms and intelligent automations — built for hospitals, clinics, universities, and medical institutions."
      />
    </div>
  );
};

export default CaseStudies;
