import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import TrustLogos from "@/components/TrustLogos";
import StatsSection from "@/components/StatsSection";
import CTABlock from "@/components/CTABlock";
import {
  MessageSquare,
  Calendar,
  Bell,
  TrendingUp,
  Clock,
  Users,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import clinicStaff from "@/assets/clinic-staff-tablet.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                AI Automation for Medical Clinics
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10">
                Intelligent workflows that eliminate manual work, increase
                patient bookings by 45%, and streamline your entire
                practice—automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 hover-scale" asChild>
                  <Link to="/contact">Book A Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 hover-scale"
                  asChild
                >
                  <Link to="/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="animate-fade-in hover-image-zoom rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroDashboard}
                alt="Axiogen medical automation dashboard"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <TrustLogos />  YOU CAN ADD THIS LATER ON */}
      <StatsSection />

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Automation Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Streamline your clinic operations with AI-powered systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={MessageSquare}
              title="AI WhatsApp Receptionist"
              description="24/7 intelligent responses to patient inquiries, handling common questions and routing urgent matters appropriately."
              link="/services"
            />
            <ServiceCard
              icon={Calendar}
              title="Automated Appointment Booking"
              description="Seamless integration with your calendar system, allowing patients to book, reschedule, or cancel appointments instantly."
              link="/services"
            />
            <ServiceCard
              icon={Bell}
              title="Patient Follow-Up & Reminders"
              description="Automated reminder system that reduces no-shows and keeps patients engaged with their treatment plans."
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped clinics automate their workflows
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Automated Patient Intake for Dental Clinic"
              description="Reduced intake time by 60% with intelligent form automation"
              tag="Dental"
              slug="dental-intake-automation"
            />
            <CaseStudyCard
              title="WhatsApp Booking System Implementation"
              description="Increased bookings by 45% with 24/7 AI receptionist"
              tag="Medical"
              slug="whatsapp-booking-system"
            />
            <CaseStudyCard
              title="Follow-Up Automation Success"
              description="Improved patient retention by 35% with automated reminders"
              tag="Dental"
              slug="follow-up-automation"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Leading Clinics Choose Axiogen
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="hover-image-zoom rounded-2xl overflow-hidden shadow-xl">
              <img
                src={clinicStaff}
                alt="Medical professional using tablet"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Eliminate Manual Work
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Automate repetitive administrative tasks so your team can
                    focus entirely on patient care. Our AI handles routine
                    queries, scheduling, and follow-ups—24/7.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Increase Revenue
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Never miss a booking opportunity. Our 24/7 AI systems
                    capture every inquiry, converting more leads into confirmed
                    appointments.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Seamless Integration
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Works perfectly with your existing tools. Integrates with
                    Google Calendar, WhatsApp, clinic management systems—no
                    disruption to your workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABlock />
    </div>
  );
};

export default Home;
