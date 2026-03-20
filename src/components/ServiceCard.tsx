import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  const content = (
    <Card className="group hover-lift-accent cursor-pointer h-full border-2 border-border">
      <CardHeader className="p-4 md:p-6">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </div>
        <CardTitle className="text-xl md:text-2xl mb-2 md:mb-3 group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
        <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
          Learn more <span className="ml-2">→</span>
        </div>
      </CardContent>
    </Card>
  );

  return link ? <Link to={link}>{content}</Link> : content;
};

export default ServiceCard;
