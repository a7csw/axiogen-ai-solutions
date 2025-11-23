import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import CTABlock from "@/components/CTABlock";
import { MessageSquare, Calendar, Bell, FileText, BarChart3, Check } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-ai-mockup.jpg";
import bookingMockup from "@/assets/booking-system-mockup.jpg";
import followUpSystem from "@/assets/follow-up-system.jpg";
import patientIntake from "@/assets/patient-intake-mockup.jpg";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI WhatsApp Receptionist",
      description: "Deploy a 24/7 intelligent receptionist that handles patient communication through WhatsApp with human-like natural language understanding.",
      features: [
        "Instant automated responses to common inquiries",
        "Natural language processing for complex questions",
        "Smart routing for urgent matters to your team",
        "Multi-language support for diverse patient base",
        "Complete integration with your clinic system"
      ],
      image: whatsappMockup,
      imageAlt: "WhatsApp AI receptionist interface"
    },
    {
      icon: Calendar,
      title: "Appointment Booking Workflow",
      description: "Seamless appointment management that allows patients to book, reschedule, or cancel appointments through WhatsApp or your website, with automatic calendar synchronization.",
      features: [
        "Real-time availability checking",
        "Automated confirmation and reminder messages",
        "Easy rescheduling and cancellation",
        "Google Calendar & Outlook integration",
        "Waiting list management for cancellations"
      ]
    },
    {
      icon: Bell,
      title: "Follow-Up & Reminder System",
      description: "Reduce no-shows and improve patient engagement with intelligent reminder sequences that adapt to patient preferences and appointment types.",
      features: [
        "Automated pre-appointment reminders",
        "Post-treatment follow-up messages",
        "Customizable reminder schedules",
        "Two-way confirmation system",
        "No-show reduction analytics"
      ]
    },
    {
      icon: FileText,
      title: "Patient Intake Automation",
      description: "Streamline your patient registration process with automated digital forms that integrate directly with your practice management system.",
      features: [
        "Digital patient registration forms",
        "Medical history collection",
        "Consent form management",
        "Insurance information capture",
        "Automatic record creation in your system"
      ]
    },
    {
      icon: BarChart3,
      title: "Clinic Analytics Dashboard",
      description: "Gain valuable insights into your clinic's operations with comprehensive analytics covering appointments, patient engagement, and workflow efficiency.",
      features: [
        "Real-time appointment metrics",
        "Patient engagement tracking",
        "No-show rate analysis",
        "Revenue forecasting",
        "Custom reporting capabilities"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Automation Solutions for Clinics
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive AI-powered systems designed specifically for medical and dental practices
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="border-2 border-border">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-3xl mb-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`flex-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock 
        title="Ready to Modernize Your Healthcare Operations?"
        description="Partner with Axiogen to design custom healthcare SaaS platforms and intelligent automations — built for hospitals, clinics, universities, and medical institutions."
      />
    </div>
  );
};

export default Services;
