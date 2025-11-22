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
    <Card className="group hover-lift cursor-pointer h-full border-2 border-border">
      <CardHeader>
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
          Learn more <span className="ml-2">→</span>
        </div>
      </CardContent>
    </Card>
  );

  return link ? <Link to={link}>{content}</Link> : content;
};

export default ServiceCard;
