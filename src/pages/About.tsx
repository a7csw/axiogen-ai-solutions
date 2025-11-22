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
            Modernizing medical clinics through intelligent automation
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <p className="text-2xl text-center text-muted-foreground leading-relaxed">
            At Axiogen, we believe that medical professionals should spend their
            time on what matters most: providing exceptional patient care. Our
            mission is to eliminate the administrative burden that holds clinics
            back from reaching their full potential.
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
                  Axiogen is a specialized AI automation agency focused
                  exclusively on the medical industry. We combine deep
                  healthcare domain knowledge with cutting-edge automation
                  technology to create solutions that truly understand the
                  unique needs of medical practices. Our team consists of
                  automation experts, healthcare consultants, and AI specialists
                  who are passionate about transforming clinic operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">Why We Exist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We started Axiogen after witnessing firsthand how much time
                  medical professionals waste on repetitive administrative
                  tasks. Phone calls, appointment scheduling, follow-ups, and
                  data entry consume hours that could be spent with patients. We
                  exist to change that reality—to automate the mundane so
                  healthcare providers can focus on what they do best: healing
                  and caring for people.
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
                In healthcare, accuracy is paramount. Our automation systems are
                built with meticulous attention to detail, ensuring every
                interaction and data point is handled with the highest level of
                precision and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Efficiency</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're obsessed with eliminating waste. Every system we build is
                designed to maximize efficiency, reduce redundant work, and
                streamline operations so your clinic can do more with less
                effort.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Care</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At our core, we care deeply about improving healthcare delivery.
                We design our solutions with empathy—for the patients receiving
                care and the professionals providing it. Better automation means
                better care for everyone.
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
