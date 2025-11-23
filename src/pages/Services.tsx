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
      title: "AI-Powered Patient Communication Platform",
      description: "Custom-built patient engagement system with intelligent multi-channel communication capabilities, enabling 24/7 automated responses and seamless integration with your existing healthcare infrastructure.",
      features: [
        "Multi-channel patient communication (WhatsApp, SMS, Email)",
        "Advanced NLP for medical query understanding",
        "Intelligent triage and escalation workflows",
        "HIPAA-compliant data handling and encryption",
        "Integration with EHR/EMR and practice management systems"
      ],
      image: whatsappMockup,
      imageAlt: "WhatsApp AI receptionist interface"
    },
    {
      icon: Calendar,
      title: "Healthcare Appointment Management System",
      description: "Enterprise-grade scheduling platform designed for medical institutions, featuring real-time availability management, automated workflows, and seamless calendar synchronization across departments.",
      features: [
        "Multi-provider and multi-location scheduling",
        "Real-time availability and resource management",
        "Automated appointment confirmations and reminders",
        "Bi-directional calendar sync (Google, Outlook, Apple)",
        "Intelligent waitlist management and rebooking automation"
      ]
    },
    {
      icon: Bell,
      title: "Patient Engagement & Follow-Up Platform",
      description: "Comprehensive engagement system that reduces no-shows, improves treatment adherence, and enhances patient satisfaction through intelligent, personalized communication sequences.",
      features: [
        "Customizable multi-touch reminder campaigns",
        "Post-procedure follow-up automation",
        "Patient satisfaction surveys and feedback collection",
        "Two-way communication with confirmation tracking",
        "Predictive analytics for no-show risk assessment"
      ]
    },
    {
      icon: FileText,
      title: "Digital Patient Intake & Registration System",
      description: "Streamlined digital onboarding platform that modernizes patient registration, reduces administrative burden, and ensures accurate data capture with direct EHR integration.",
      features: [
        "Customizable digital registration and intake forms",
        "Automated medical history and symptom collection",
        "E-signature for consent and HIPAA forms",
        "Insurance verification and eligibility checks",
        "Seamless integration with practice management systems"
      ]
    },
    {
      icon: BarChart3,
      title: "Healthcare Analytics & Reporting Dashboard",
      description: "Custom-built analytics platform providing actionable insights into clinical operations, patient flow, revenue cycles, and operational efficiency across your healthcare organization.",
      features: [
        "Real-time operational metrics and KPI tracking",
        "Patient journey and engagement analytics",
        "Revenue cycle and financial performance insights",
        "Predictive modeling for capacity planning",
        "Custom reporting with data visualization tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Healthcare SaaS Solutions & Platform Development
          </h1>
          <p className="text-xl text-muted-foreground">
            Custom-built software platforms and intelligent automation for hospitals, clinics, universities, and medical institutions
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
