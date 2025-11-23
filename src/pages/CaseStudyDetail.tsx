import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Get case study data from translations
  const getCaseStudyData = (slug: string | undefined) => {
    if (!slug) return null;
    
    const caseStudyMap: Record<string, { detailKey: string; listKey: string }> = {
      "patient-intake-automation": { detailKey: "patientIntake", listKey: "dentalIntake" },
      "whatsapp-booking-automation": { detailKey: "whatsappBooking", listKey: "whatsappBooking" },
      "follow-up-automation": { detailKey: "followUp", listKey: "followUp" },
      "patient-analytics": { detailKey: "patientAnalytics", listKey: "analytics" },
      "clinic-saas-prototype": { detailKey: "clinicSaaS", listKey: "saas" }
    };
    
    const mapping = caseStudyMap[slug];
    if (!mapping) return null;
    
    const detailData = t(`caseStudies.detail.${mapping.detailKey}`, { returnObjects: true }) as any;
    return {
      title: t(`caseStudies.${mapping.listKey}.title`),
      tag: t(`caseStudies.${mapping.listKey}.tag`),
      intro: detailData.intro,
      problem: detailData.problem,
      solution: detailData.solution,
      solutionBullets: detailData.solutionBullets,
      tools: ["Make.com", "WhatsApp Business API", "Supabase", "Typeform", "Practice Management API", "Custom React Dashboard"],
      results: Object.values(detailData.results || {}),
      testimonial: detailData.testimonial
    };
  };
  
  const caseStudy = getCaseStudyData(slug);
    "whatsapp-booking-automation": {
      title: "WhatsApp Booking System Implementation",
      tag: "Medical",
      intro: "An AI-powered 24/7 booking system that captures appointments around the clock and integrates seamlessly with clinic calendars.",
      problem: "The clinic was missing potential bookings during off-hours and lunch breaks. Phone lines were often busy, leading to frustrated patients and lost revenue. Staff spent significant time handling routine scheduling calls that could be automated.",
      solution: "Axiogen deployed an AI-powered WhatsApp receptionist that handles appointment bookings, answers common questions, and integrates with the clinic's calendar system. The system can converse naturally, check availability in real-time, and confirm appointments instantly. The solution includes:\n\n• Natural language processing for conversational booking\n• Real-time calendar integration and availability checking\n• Multi-language support for diverse patient populations\n• Automated confirmation messages and reminders\n• Seamless handoff to human staff for complex inquiries",
      tools: ["Make.com", "WhatsApp Cloud API", "Google Calendar API", "OpenAI GPT-4", "Supabase", "Twilio"],
      results: [
        "45% increase in confirmed appointments",
        "70% reduction in phone call volume",
        "24/7 booking availability",
        "$15,000 additional monthly revenue"
      ],
      testimonial: {
        text: "We're now capturing bookings we would have completely missed before. The AI receptionist works around the clock and never takes a day off. It's like having three extra team members.",
        author: "Maria Rodriguez",
        role: "Clinic Manager"
      }
    },
    "follow-up-automation": {
      title: "Follow-Up Automation Success",
      tag: "Dental",
      intro: "A multi-channel reminder and follow-up system that dramatically reduces no-shows and improves patient retention.",
      problem: "The practice experienced an 18% no-show rate, costing thousands in lost revenue monthly. Manual reminder calls were time-consuming and inconsistent. Post-treatment follow-ups were frequently forgotten, leading to poor patient engagement and retention.",
      solution: "Axiogen created a multi-channel reminder system that sends automated appointment reminders via WhatsApp and SMS at optimal times. The system also handles post-treatment check-ins and re-engagement campaigns for lapsed patients. Features include:\n\n• Intelligent timing based on appointment type and patient history\n• Multi-channel delivery (WhatsApp, SMS, Email)\n• Automated post-treatment follow-up sequences\n• Re-engagement campaigns for lapsed patients\n• Integration with practice management systems for seamless workflow",
      tools: ["Make.com", "Twilio", "WhatsApp Business API", "Practice Management Integration", "Supabase"],
      results: [
        "35% improvement in patient retention",
        "18% to 7% no-show rate reduction",
        "92% positive response to automated follow-ups",
        "Saved 10 hours per week of staff time"
      ],
      testimonial: {
        text: "Our no-show rate dropped dramatically within the first month. Patients appreciate the convenient reminders, and we've reconnected with many patients who had fallen out of their regular care routine.",
        author: "Dr. James Chen",
        role: "Lead Dentist"
      }
    },
    "patient-analytics": {
      title: "AI-Powered Patient Analytics System",
      tag: "Clinic Ops",
      intro: "Smart analytics dashboards that transform patient data into actionable insights, reducing administrative burden and improving clinical decision-making.",
      problem: "Clinicians were spending excessive time on administrative tasks and data entry, reducing time available for patient care. The clinic lacked visibility into patient flow, appointment patterns, and operational efficiency. Manual reporting was time-consuming and often outdated by the time it was completed.",
      solution: "Axiogen developed a comprehensive patient analytics system with real-time dashboards that provide actionable insights into clinic operations. The system aggregates data from multiple sources, uses AI to identify patterns and trends, and presents information in intuitive visualizations. Key capabilities include:\n\n• Real-time patient flow and appointment analytics\n• Predictive insights for appointment scheduling optimization\n• Automated reporting and KPI tracking\n• Integration with existing clinic management systems\n• Customizable dashboards for different roles (clinicians, managers, administrators)\n• AI-powered anomaly detection for operational issues",
      tools: ["Supabase", "Custom React Dashboard", "Python Analytics Engine", "Chart.js", "PostgreSQL", "Make.com"],
      results: [
        "50% reduction in clinician admin time",
        "30% improvement in appointment utilization",
        "Real-time operational insights",
        "Automated daily/weekly reporting"
      ],
      testimonial: {
        text: "The analytics system has transformed how we operate. We can now see exactly where bottlenecks occur and make data-driven decisions. Our clinicians have more time for patients, and our operations run much more smoothly.",
        author: "Dr. Emily Watson",
        role: "Chief Medical Officer"
      }
    },
    "clinic-saas-prototype": {
      title: "Clinic Management SaaS Prototype",
      tag: "SaaS",
      intro: "An end-to-end SaaS platform that centralizes patient records, bookings, and clinic operations in one integrated system.",
      problem: "The clinic was using multiple disconnected systems for patient records, scheduling, billing, and operations. This fragmentation led to data silos, duplicate data entry, and inefficiencies. Staff had to switch between multiple applications, and patient information was scattered across different platforms.",
      solution: "Axiogen designed and built a comprehensive clinic management SaaS platform that consolidates all operations into a single, integrated system. The platform includes patient record management, appointment scheduling, billing integration, staff management, and reporting capabilities. The solution features:\n\n• Unified patient record system with secure data storage\n• Integrated appointment booking and calendar management\n• Automated billing and payment processing\n• Staff scheduling and task management\n• Comprehensive reporting and analytics\n• Mobile-responsive design for on-the-go access\n• API integrations with third-party services\n• Role-based access control for security",
      tools: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Stripe API", "Google Calendar API", "PostgreSQL", "Vite"],
      results: [
        "End-to-end system integration",
        "60% reduction in data entry time",
        "Single source of truth for all patient data",
        "Improved staff productivity and satisfaction"
      ],
      testimonial: {
        text: "Having everything in one place has revolutionized our operations. We no longer waste time switching between systems or searching for patient information. The platform is intuitive, fast, and has significantly improved our efficiency.",
        author: "Robert Kim",
        role: "Operations Director"
      }
    }
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">{t("caseStudies.detail.notFound")}</h1>
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
      <div className="py-6 px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild>
            <Link to="/case-studies">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rtl-flip' : ''} ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t("caseStudies.detail.backToCaseStudies")}
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
                <p className="mb-4">{caseStudy.solution}</p>
                {caseStudy.solutionBullets && (
                  <ul className={`list-disc space-y-2 ${isRTL ? 'list-inside' : 'ml-4'}`}>
                    {Object.values(caseStudy.solutionBullets).map((bullet: any, idx: number) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold mb-4">{t("caseStudies.detail.toolsTechnologies")}</h4>
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
            <p className="text-muted-foreground">{t("caseStudies.detail.workflowDiagram")}</p>
            <p className="text-sm text-muted-foreground mt-2">{t("caseStudies.detail.workflowDiagramDesc")}</p>
          </div>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{t("caseStudies.detail.measurableResults")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
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
            {t("caseStudies.detail.readyForResults")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("caseStudies.detail.discussAutomation")}
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
            <a href="https://cal.com/axiogen-8w3n8i/30min?overlayCalendar=true">{t("cta.bookACall")}</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
