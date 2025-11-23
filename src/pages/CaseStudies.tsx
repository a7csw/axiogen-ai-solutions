import CaseStudyCard from "@/components/CaseStudyCard";
import CTABlock from "@/components/CTABlock";
import { useTranslation } from "react-i18next";

const CaseStudies = () => {
  const { t } = useTranslation();
  const caseStudies = [
    {
      title: t("home.caseStudies.patientIntake.title"),
      description: t("home.caseStudies.patientIntake.description"),
      tag: t("home.caseStudies.patientIntake.tag"),
      slug: "patient-intake-automation"
    },
    {
      title: t("home.caseStudies.whatsappBooking.title"),
      description: t("home.caseStudies.whatsappBooking.description"),
      tag: t("home.caseStudies.whatsappBooking.tag"),
      slug: "whatsapp-booking-automation"
    },
    {
      title: t("home.caseStudies.followUpAuto.title"),
      description: t("home.caseStudies.followUpAuto.description"),
      tag: t("home.caseStudies.followUpAuto.tag"),
      slug: "follow-up-automation"
    },
    {
      title: t("home.caseStudies.analytics.title"),
      description: t("home.caseStudies.analytics.description"),
      tag: t("home.caseStudies.analytics.tag"),
      slug: "patient-analytics"
    },
    {
      title: t("home.caseStudies.saas.title"),
      description: t("home.caseStudies.saas.description"),
      tag: t("home.caseStudies.saas.tag"),
      slug: "clinic-saas-prototype"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t("caseStudies.header.title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("caseStudies.header.subtitle")}
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
        title={t("caseStudies.cta.title")}
        description={t("caseStudies.cta.description")}
      />
    </div>
  );
};

export default CaseStudies;
