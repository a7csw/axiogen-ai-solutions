import { useTranslation } from "react-i18next";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABlock from "@/components/CTABlock";

const CaseStudies = () => {
  const { t } = useTranslation();
  const caseStudies = [
    {
      title: t("caseStudies.dentalIntake.title"),
      description: t("caseStudies.dentalIntake.description"),
      tag: t("caseStudies.dentalIntake.tag"),
      slug: "patient-intake-automation"
    },
    {
      title: t("caseStudies.whatsappBooking.title"),
      description: t("caseStudies.whatsappBooking.description"),
      tag: t("caseStudies.whatsappBooking.tag"),
      slug: "whatsapp-booking-automation"
    },
    {
      title: t("caseStudies.followUp.title"),
      description: t("caseStudies.followUp.description"),
      tag: t("caseStudies.followUp.tag"),
      slug: "follow-up-automation"
    },
    {
      title: t("caseStudies.analytics.title"),
      description: t("caseStudies.analytics.description"),
      tag: t("caseStudies.analytics.tag"),
      slug: "patient-analytics"
    },
    {
      title: t("caseStudies.saas.title"),
      description: t("caseStudies.saas.description"),
      tag: t("caseStudies.saas.tag"),
      slug: "clinic-saas-prototype"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t("caseStudies.title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("caseStudies.subtitle")}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABlock />
    </div>
  );
};

export default CaseStudies;
