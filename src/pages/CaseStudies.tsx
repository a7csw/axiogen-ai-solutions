import { useTranslation } from "react-i18next";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTABlock from "@/components/CTABlock";

const CaseStudies = () => {
  const { t } = useTranslation();
  const demoLabel = t("caseStudies.demoLabel");
  const caseStudies = [
    {
      title: t("caseStudies.noShowReduction.title"),
      description: t("caseStudies.noShowReduction.description"),
      tag: t("caseStudies.noShowReduction.tag"),
      slug: "dental-no-show-reduction",
    },
    {
      title: t("caseStudies.voiceReceptionist.title"),
      description: t("caseStudies.voiceReceptionist.description"),
      tag: t("caseStudies.voiceReceptionist.tag"),
      slug: "dental-voice-receptionist",
    },
    {
      title: t("caseStudies.patientReactivation.title"),
      description: t("caseStudies.patientReactivation.description"),
      tag: t("caseStudies.patientReactivation.tag"),
      slug: "derm-patient-reactivation",
    },
    {
      title: t("caseStudies.reviewAutomation.title"),
      description: t("caseStudies.reviewAutomation.description"),
      tag: t("caseStudies.reviewAutomation.tag"),
      slug: "cosmetic-review-automation",
    },
    {
      title: t("caseStudies.digitalIntake.title"),
      description: t("caseStudies.digitalIntake.description"),
      tag: t("caseStudies.digitalIntake.tag"),
      slug: "derm-digital-intake",
    },
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
              <div key={study.slug} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <CaseStudyCard {...study} demoLabel={demoLabel} />
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
