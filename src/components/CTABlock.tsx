import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

interface CTABlockProps {
  title?: string;
  description?: string;
  showWhatsApp?: boolean;
}

const CTABlock = ({ 
  title,
  description,
  showWhatsApp = true
}: CTABlockProps) => {
  const { t } = useTranslation();
  const defaultTitle = t("common.readyToModernize");
  const defaultDescription = t("common.partnerDescription");
  
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title || defaultTitle}
        </h2>
        <p className="text-xl mb-10 opacity-90">
          {description || defaultDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-10 hover-scale" 
            asChild
          >
            <a href="https://cal.com/axiogen-8w3n8i/30min?overlayCalendar=true">
              <Calendar className="mr-2 rtl:mr-0 rtl:ml-2 w-5 h-5" />
              {t("common.bookCall")}
            </a>
          </Button>
          {showWhatsApp && (
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 bg-white/10 hover:bg-white/20 border-white/30 text-white hover-scale" 
              asChild
            >
              <a href="https://wa.me/+905353296589" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 rtl:mr-0 rtl:ml-2 w-5 h-5" />
                {t("common.contactWhatsApp")}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
