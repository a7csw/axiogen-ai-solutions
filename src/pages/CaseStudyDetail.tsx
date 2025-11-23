import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  // Get case study data from translations
  const getCaseStudyData = (slug: string | undefined) => {
    if (!slug) return null;
    
    const caseStudyMap: Record<string, string> = {
      "patient-intake-automation": "patientIntake",
      "whatsapp-booking-automation": "whatsappBooking",
      "follow-up-automation": "followUp",
      "patient-analytics": "analytics",
      "clinic-saas-prototype": "saas"
    };
    
    const key = caseStudyMap[slug];
    if (!key) return null;
    
    return {
      title: t(`caseStudies.detail.${key}.title`),
      tag: t(`caseStudies.detail.${key}.tag`),
      intro: t(`caseStudies.detail.${key}.intro`),
      problem: t(`caseStudies.detail.${key}.problem`),
      solution: t(`caseStudies.detail.${key}.solution`),
      tools: t(`caseStudies.detail.${key}.tools`, { returnObjects: true }) as string[],
      results: t(`caseStudies.detail.${key}.results`, { returnObjects: true }) as string[],
      testimonial: {
        text: t(`caseStudies.detail.${key}.testimonial.text`),
        author: t(`caseStudies.detail.${key}.testimonial.author`),
        role: t(`caseStudies.detail.${key}.testimonial.role`)
      }
    };
  };

  const caseStudy = getCaseStudyData(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">{t("caseStudies.detail.notFound")}</h1>
          <Button asChild>
            <Link to="/case-studies">{t("caseStudies.detail.back")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="py-6 px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" />
              {t("caseStudies.detail.back")}
            </Link>
          </Button>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            {caseStudy.tag}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {caseStudy.title}
          </h1>
          {caseStudy.intro && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {caseStudy.intro}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl space-y-12">
          {/* Problem */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("caseStudies.detail.challenge")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {caseStudy.problem}
              </p>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("caseStudies.detail.solution")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-muted-foreground leading-relaxed mb-6">
                {caseStudy.solution.split('\n\n').map((paragraph: string, idx: number) => {
                  const lines = paragraph.split('\n').filter(line => line.trim());
                  const hasBullets = lines.some(line => line.trim().startsWith('•'));
                  
                  if (hasBullets) {
                    // Separate regular text from bullet points
                    const regularText = lines.filter(line => !line.trim().startsWith('•'));
                    const bulletItems = lines.filter(line => line.trim().startsWith('•'));
                    
                    return (
                      <div key={idx} className="mb-4">
                        {regularText.length > 0 && (
                          <p className="mb-4">{regularText.join(' ')}</p>
                        )}
                        {bulletItems.length > 0 && (
                          <ul className="list-disc list-inside space-y-2 ml-4 rtl:ml-0 rtl:mr-4 rtl:list-inside">
                            {bulletItems.map((item, itemIdx) => (
                              <li key={itemIdx}>
                                {item.replace(/^•\s*/, '')}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold mb-4">{t("caseStudies.detail.tools")}</h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools.map((tool: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Workflow Diagram Placeholder */}
          <div className="bg-muted rounded-2xl p-12 text-center">
            <p className="text-muted-foreground">{t("caseStudies.detail.workflow")}</p>
            <p className="text-sm text-muted-foreground mt-2">{t("caseStudies.detail.workflowDesc")}</p>
          </div>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("caseStudies.detail.results")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 rtl:gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Testimonial */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <CardContent className="pt-8">
              <p className="text-xl italic text-foreground mb-6 leading-relaxed">
                "{caseStudy.testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("caseStudies.detail.ready")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("caseStudies.detail.discuss")}
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
            <a href="https://cal.com/axiogen-8w3n8i/30min?overlayCalendar=true">{t("caseStudies.detail.bookCall")}</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
