import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CaseStudyCardProps {
  title: string;
  description: string;
  tag: string;
  slug: string;
}

const CaseStudyCard = ({ title, description, tag, slug }: CaseStudyCardProps) => {
  const { t } = useTranslation();
  return (
    <Link to={`/case-studies/${slug}`}>
      <Card className="group hover-lift cursor-pointer h-full border-2 border-border">
        <CardHeader>
          <Badge className="w-fit mb-3 bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {tag}
          </Badge>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-primary font-medium group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">
            {t("common.readCaseStudy")} <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
