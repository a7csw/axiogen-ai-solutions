import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  // Mock data - in a real app this would come from an API or CMS
  const caseStudyData: Record<string, any> = {
    "dental-intake-automation": {
      title: "Automated Patient Intake for Dental Clinic",
      tag: "Dental",
      problem: "A growing dental practice was spending 15-20 minutes per patient on manual intake forms, leading to long wait times and staff frustration. The paper-based system resulted in incomplete data and frequent errors that required follow-up calls.",
      solution: "Axiogen implemented a comprehensive digital intake system that patients complete before arrival via WhatsApp or email. The system uses intelligent forms with conditional logic, automatic validation, and seamless integration with their practice management software.",
      tools: ["Make.com", "WhatsApp Business API", "Typeform", "Practice Management API"],
      results: [
        "60% reduction in intake processing time",
        "95% form completion rate before appointments",
        "80% decrease in data entry errors",
        "Eliminated 4 hours of admin work per day"
      ],
      testimonial: {
        text: "The automated intake system has been a game-changer for our practice. Patients love completing forms at their convenience, and our team can focus on providing excellent care instead of paperwork.",
        author: "Dr. Sarah Mitchell",
        role: "Practice Owner"
      }
    },
    "whatsapp-booking-system": {
      title: "24/7 WhatsApp AI Receptionist",
      tag: "Medical",
      problem: "The clinic was missing potential bookings during off-hours and lunch breaks. Phone lines were often busy, leading to frustrated patients and lost revenue. Staff spent significant time handling routine scheduling calls.",
      solution: "Axiogen deployed an AI-powered WhatsApp receptionist that handles appointment bookings, answers common questions, and integrates with the clinic's calendar system. The system can converse naturally, check availability in real-time, and confirm appointments instantly.",
      tools: ["Make.com", "WhatsApp Business API", "Google Calendar API", "OpenAI GPT-4"],
      results: [
        "45% increase in monthly appointments",
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
      title: "Intelligent Follow-Up & Reminder System",
      tag: "Dental",
      problem: "The practice experienced an 18% no-show rate, costing thousands in lost revenue monthly. Manual reminder calls were time-consuming and inconsistent. Post-treatment follow-ups were frequently forgotten.",
      solution: "Axiogen created a multi-channel reminder system that sends automated appointment reminders via WhatsApp and SMS at optimal times. The system also handles post-treatment check-ins and re-engagement campaigns for lapsed patients.",
      tools: ["Make.com", "Twilio", "WhatsApp Business API", "Practice Management Integration"],
      results: [
        "18% to 7% no-show rate reduction",
        "35% improvement in patient retention",
        "92% positive response to automated follow-ups",
        "Saved 10 hours per week of staff time"
      ],
      testimonial: {
        text: "Our no-show rate dropped dramatically within the first month. Patients appreciate the convenient reminders, and we've reconnected with many patients who had fallen out of their regular care routine.",
        author: "Dr. James Chen",
        role: "Lead Dentist"
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
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {caseStudy.solution}
              </p>
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
            <Link to="/contact">Book Your Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
