import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import { MessageSquare, Calendar, Bell, TrendingUp, Clock, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              AI Automation Systems for Medical Clinics
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Axiogen builds intelligent workflows that reduce admin time, increase bookings, 
              and improve patient experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">Book A Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto max-w-6xl">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by leading medical clinics
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-50">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Clinic {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Why Clinics Choose Axiogen
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Reduce Manual Work</h3>
              <p className="text-muted-foreground text-lg">
                Automate repetitive administrative tasks and free up your team to focus on patient care. 
                Our systems handle routine queries, scheduling, and follow-ups automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Increase Patient Bookings</h3>
              <p className="text-muted-foreground text-lg">
                Never miss an opportunity with 24/7 availability. Our AI systems can handle bookings at any time, 
                converting more inquiries into confirmed appointments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Improve Clinic Workflow</h3>
              <p className="text-muted-foreground text-lg">
                Streamline operations with integrated systems that work seamlessly with your existing tools. 
                Reduce errors and improve efficiency across your entire practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover how AI can automate 80% of your clinic's admin work
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join leading clinics that have transformed their operations with intelligent automation
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10" asChild>
            <Link to="/contact">Book A Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
