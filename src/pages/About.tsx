import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            {t("about.header.title")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("about.header.subtitle")}
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <p className="text-2xl text-center text-muted-foreground leading-relaxed">
            {t("about.mission")}
          </p>
        </div>
      </section>

      {/* Who We Are & Why We Exist */}
      <section className="py-16 px-6 lg:px-8 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">{t("about.whoWeAre.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.whoWeAre.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-3xl">{t("about.whyWeExist.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.whyWeExist.description")}
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
            {t("about.values.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t("about.values.precision.title")}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.values.precision.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t("about.values.efficiency.title")}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.values.efficiency.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t("about.values.care.title")}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.values.care.description")}
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
