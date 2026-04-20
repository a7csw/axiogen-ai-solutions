import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, FlaskConical } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  tag: string;
  slug: string;
  demoLabel?: string;
}

const CaseStudyCard = ({ title, description, tag, slug, demoLabel }: CaseStudyCardProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Link to={`/case-studies/${slug}`}>
      <Card className="group hover-card cursor-pointer h-full border-2 border-border">
        <CardHeader className="p-4 md:p-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge className="bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
              {tag}
            </Badge>
            {demoLabel && (
              <Badge variant="outline" className="border-accent/40 text-accent bg-accent/5 gap-1">
                <FlaskConical className="w-3 h-3" />
                {demoLabel}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg md:text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
          <div className={`flex items-center text-primary font-medium transition-transform ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
            {t("common.readCaseStudy")} <ArrowRight className={`ml-2 w-4 h-4 ${isRTL ? 'rtl-flip' : ''}`} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
