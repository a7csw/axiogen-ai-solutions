import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  // Mock data - in a real app this would come from an API or CMS
  const caseStudyData: Record<string, any> = {
    "patient-intake-automation": {
      title: "Automated Patient Intake for Dental Clinic",
      tag: "Dental",
      intro: "A comprehensive digital intake system that transforms patient onboarding and eliminates manual paperwork.",
      problem: "A growing dental practice was spending 15-20 minutes per patient on manual intake forms, leading to long wait times and staff frustration. The paper-based system resulted in incomplete data and frequent errors that required follow-up calls.",
      solution: "Axiogen implemented a comprehensive digital intake system that patients complete before arrival via WhatsApp or email. The system uses intelligent forms with conditional logic, automatic validation, and seamless integration with their practice management software. Key features include:\n\n• Pre-appointment form completion via multiple channels\n• Intelligent conditional logic that adapts questions based on patient responses\n• Automatic data validation and error prevention\n• Real-time sync with practice management systems\n• Secure patient data handling with HIPAA compliance",
      tools: ["Make.com", "WhatsApp Business API", "Supabase", "Typeform", "Practice Management API", "Custom React Dashboard"],
      results: [
        "65% faster administrative processes",
        "95% form completion rate before appointments",
        "90% reduction in data entry errors",
        "Eliminated 4 hours of admin work per day"
      ],
      testimonial: {
        text: "The automated intake system has been a game-changer for our practice. Patients love completing forms at their convenience, and our team can focus on providing excellent care instead of paperwork.",
        author: "Dr. Sarah Mitchell",
        role: "Practice Owner"
      }
    },
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

  const caseStudy = slug ? caseStudyData[slug] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen pt-32 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button asChild>
            <Link to="/case-studies">Back to Case Studies</Link>
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
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
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
              <CardTitle className="text-2xl">The Challenge</CardTitle>
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
              <CardTitle className="text-2xl">Our Solution</CardTitle>
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
                          <ul className="list-disc list-inside space-y-2 ml-4">
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
                <h4 className="font-semibold mb-4">Tools & Technologies Used:</h4>
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
            <p className="text-muted-foreground">Workflow Diagram</p>
            <p className="text-sm text-muted-foreground mt-2">Visual representation of the automation flow</p>
          </div>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Measurable Results</CardTitle>
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
            Ready for similar results?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can automate your clinic's workflows
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
            <Link to="/book-a-call">Book a Call</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
