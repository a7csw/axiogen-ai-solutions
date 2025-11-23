import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import TrustLogos from "@/components/TrustLogos";
import StatsSection from "@/components/StatsSection";
import CTABlock from "@/components/CTABlock";
import { useTranslation } from "react-i18next";
import {
  MessageSquare,
  Calendar,
  Bell,
  TrendingUp,
  Clock,
  Users,
  FileText,
  Zap,
  Plug,
} from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import clinicStaff from "@/assets/clinic-staff-tablet.jpg";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("home.hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              {t("home.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 hover-scale" asChild>
                  <a href="https://cal.com/axiogen-8w3n8i/30min?overlayCalendar=true">{t("home.hero.bookCall")}</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 hover-scale"
                  asChild
                >
                  <Link to="/case-studies">{t("home.hero.viewCaseStudies")}</Link>
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
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={MessageSquare}
              title={t("home.services.whatsapp.title")}
              description={t("home.services.whatsapp.description")}
              link="/services"
            />
            <ServiceCard
              icon={Calendar}
              title={t("home.services.booking.title")}
              description={t("home.services.booking.description")}
              link="/services"
            />
            <ServiceCard
              icon={Bell}
              title={t("home.services.followUp.title")}
              description={t("home.services.followUp.description")}
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
              {t("home.caseStudies.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("home.caseStudies.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <CaseStudyCard
              title={t("home.caseStudies.patientIntake.title")}
              description={t("home.caseStudies.patientIntake.description")}
              tag={t("home.caseStudies.patientIntake.tag")}
              slug="patient-intake-automation"
            />
            <CaseStudyCard
              title={t("home.caseStudies.whatsappBooking.title")}
              description={t("home.caseStudies.whatsappBooking.description")}
              tag={t("home.caseStudies.whatsappBooking.tag")}
              slug="whatsapp-booking-automation"
            />
            <CaseStudyCard
              title={t("home.caseStudies.followUpAuto.title")}
              description={t("home.caseStudies.followUpAuto.description")}
              tag={t("home.caseStudies.followUpAuto.tag")}
              slug="follow-up-automation"
            />
            <CaseStudyCard
              title={t("home.caseStudies.analytics.title")}
              description={t("home.caseStudies.analytics.description")}
              tag={t("home.caseStudies.analytics.tag")}
              slug="patient-analytics"
            />
            <CaseStudyCard
              title={t("home.caseStudies.saas.title")}
              description={t("home.caseStudies.saas.description")}
              tag={t("home.caseStudies.saas.tag")}
              slug="clinic-saas-prototype"
            />
          </div>
        </div>
      </section>

      {/* Why We Built Axiogen */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("home.whyWeBuilt.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.whyWeBuilt.subtitle")}
            </p>
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
              <div className="flex gap-6 rtl:gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {t("home.whyWeBuilt.reduceAdmin.title")}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {t("home.whyWeBuilt.reduceAdmin.description")}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 rtl:gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {t("home.whyWeBuilt.improveEfficiency.title")}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {t("home.whyWeBuilt.improveEfficiency.description")}
                  </p>
                </div>
              </div>
              <div className="flex gap-6 rtl:gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Plug className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {t("home.whyWeBuilt.integrate.title")}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {t("home.whyWeBuilt.integrate.description")}
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
