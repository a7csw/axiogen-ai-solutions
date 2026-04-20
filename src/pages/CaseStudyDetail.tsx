import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, CheckCircle2, Wrench, FlaskConical, Info } from "lucide-react";

const TOOLS_BY_SLUG: Record<string, string[]> = {
  "dental-no-show-reduction":   ["Twilio SMS", "WhatsApp Business API", "n8n", "Supabase", "Practice Management API", "Google Calendar"],
  "dental-voice-receptionist":  ["Vapi", "OpenAI GPT-4o", "ElevenLabs", "Deepgram Nova-2", "Supabase", "Practice Management API"],
  "derm-patient-reactivation":  ["WhatsApp Business API", "Twilio SMS", "n8n", "Supabase", "Segment", "Custom React Dashboard"],
  "cosmetic-review-automation": ["Twilio SMS", "Google Business Profile API", "n8n", "Supabase", "Postmark", "Custom React Dashboard"],
  "derm-digital-intake":        ["Typeform", "Supabase", "Make.com", "E-Signature API", "Insurance Verification API", "EHR Integration"],
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const headerRef = useScrollReveal<HTMLDivElement>();
  const problemRef = useScrollReveal<HTMLDivElement>();
  const solutionRef = useScrollReveal<HTMLDivElement>();
  const resultsRef = useScrollReveal<HTMLDivElement>();

  const getCaseStudyData = (slug: string | undefined) => {
    if (!slug) return null;

    const caseStudyMap: Record<string, { key: string }> = {
      "dental-no-show-reduction":   { key: "noShowReduction" },
      "dental-voice-receptionist":  { key: "voiceReceptionist" },
      "derm-patient-reactivation":  { key: "patientReactivation" },
      "cosmetic-review-automation": { key: "reviewAutomation" },
      "derm-digital-intake":        { key: "digitalIntake" },
    };

    const mapping = caseStudyMap[slug];
    if (!mapping) return null;

    const detailData = t(`caseStudies.detail.${mapping.key}`, { returnObjects: true }) as Record<string, unknown>;
    const listData = t(`caseStudies.${mapping.key}`, { returnObjects: true }) as Record<string, string>;

    return {
      title: listData.title,
      tag: listData.tag,
      demoLabel: t("caseStudies.demoLabel"),
      intro: detailData.intro as string,
      problem: detailData.problem as string,
      solution: detailData.solution as string,
      solutionBullets: detailData.solutionBullets as Record<string, string> | undefined,
      tools: TOOLS_BY_SLUG[slug] ?? [],
      results: Object.values((detailData.results as Record<string, string>) || {}),
      disclaimer: t("caseStudies.detail.demoDisclaimer"),
    };
  };

  const caseStudy = getCaseStudyData(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-6">{t("caseStudies.detail.notFound")}</h1>
          <Button asChild>
            <Link to="/case-studies">{t("caseStudies.detail.backToCaseStudies")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="py-5 px-6 lg:px-8 border-b border-border/50 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
            <Link to="/case-studies">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? "rtl-flip ml-2" : "mr-2"}`} />
              {t("caseStudies.detail.backToCaseStudies")}
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-background to-muted/40">
        <div ref={headerRef} className="reveal container mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <Badge className="bg-primary/10 text-primary border-0 hover:bg-primary/20 text-sm px-3 py-1">
              {caseStudy.tag}
            </Badge>
            <Badge variant="outline" className="border-accent/40 text-accent bg-accent/5 text-sm px-3 py-1 gap-1">
              <FlaskConical className="w-3.5 h-3.5" />
              {caseStudy.demoLabel}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            {caseStudy.title}
          </h1>
          {caseStudy.intro && (
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {caseStudy.intro}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-10">
          {/* Challenge */}
          <div ref={problemRef} className="reveal rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{t("caseStudies.detail.challenge")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div ref={solutionRef} className="reveal rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">{t("caseStudies.detail.solution")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {caseStudy.solution}
            </p>
            {caseStudy.solutionBullets && (
              <ul className={`space-y-2 mb-8 ${isRTL ? "list-inside" : "ml-0"}`}>
                {Object.values(caseStudy.solutionBullets).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {/* Tools & Technologies */}
            <div className="bg-muted/60 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Wrench className="w-4 h-4 text-muted-foreground" />
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  {t("caseStudies.detail.toolsTechnologies")}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tools.map((tool, i) => (
                  <Badge key={i} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div ref={resultsRef} className="reveal rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">{t("caseStudies.detail.measurableResults")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Disclaimer */}
          <div className="reveal rounded-2xl border border-border/60 bg-muted/40 p-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {caseStudy.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            {t("caseStudies.detail.readyForResults")}
          </h2>
          <p className="text-xl mb-8 opacity-85 max-w-2xl mx-auto">
            {t("caseStudies.detail.discussAutomation")}
          </p>
          <Button size="lg" variant="secondary" className="text-base px-10 h-12 hover-scale" asChild>
            <a href="https://cal.com/abdulrahman-alfaiadi-jrzs4m/30min" target="_blank" rel="noopener noreferrer">
              {t("cta.bookACall")}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
