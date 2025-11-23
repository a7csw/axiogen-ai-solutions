import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-muted-foreground">
            Modernizing healthcare operations with intelligent SaaS platforms and AI-driven automation
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <p className="text-2xl text-center text-muted-foreground leading-relaxed">
            At Axiogen, we partner with healthcare organizations to build intelligent 
            software infrastructure that transforms clinical operations. Our mission is 
            to modernize medical institutions with custom SaaS platforms and AI-powered 
            automation that enhance patient care, streamline workflows, and drive 
            operational excellence.
          </p>
        </div>
      </section>

      {/* Who We Are & Why We Exist */}
      <section className="py-16 px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Who We Are</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Axiogen is a healthcare-focused SaaS and automation company 
                  specializing in custom software development for medical institutions. 
                  We design and build enterprise-grade digital platforms that address 
                  the complex operational challenges faced by hospitals, clinics, 
                  universities, and healthcare organizations. Our team brings together 
                  software engineers, healthcare workflow specialists, and AI experts 
                  who understand the nuances of medical operations and regulatory 
                  compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Why We Exist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Healthcare organizations face unprecedented operational complexity—
                  fragmented systems, administrative overload, and inefficient workflows 
                  that drain resources and impact patient care. We founded Axiogen to 
                  solve these systemic challenges through purpose-built software platforms 
                  and intelligent automation. Our goal is to empower medical institutions 
                  with modern technology infrastructure that reduces administrative burden, 
                  improves operational efficiency, and enables healthcare professionals to 
                  focus on delivering exceptional patient outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Precision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In healthcare, accuracy is non-negotiable. Every platform we build 
                is engineered with meticulous attention to detail, ensuring data 
                integrity, regulatory compliance, and reliable performance across 
                all clinical workflows and patient interactions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Efficiency</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We design software that eliminates operational friction. Every 
                platform and automation we build is optimized to streamline workflows, 
                reduce administrative overhead, and maximize resource utilization—
                enabling healthcare organizations to scale effectively while maintaining 
                quality of care.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Care & Empathy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We deeply understand the human side of healthcare. Our solutions 
                are designed with empathy for both patients and providers—creating 
                technology that enhances the care experience, reduces burnout, and 
                supports better health outcomes for everyone in the healthcare ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      {/* <section className="py-24 px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            A dedicated group of automation specialists, healthcare experts, and AI engineers 
            committed to transforming medical practice operations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background rounded-2xl p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">Team Member {i}</h3>
                <p className="text-sm text-muted-foreground">Role & Expertise</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
