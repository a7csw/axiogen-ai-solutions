import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { MessageSquare, Calendar } from "lucide-react";

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
  const defaultTitle = t("cta.title");
  const defaultDescription = t("cta.description");
  return (
    <section className="reveal py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-primary to-accent text-white cta-shimmer">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          {title || defaultTitle}
        </h2>
        <p className="text-base md:text-xl mb-8 md:mb-10 opacity-90">
          {description || defaultDescription}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="w-full sm:w-auto text-lg px-10 hover-scale btn-shimmer"
            asChild
          >
            <a href="https://cal.com/abdulrahman-alfaiadi-jrzs4m/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 w-5 h-5" />
              {t("cta.bookACall")}
            </a>
          </Button>
          {showWhatsApp && (
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-lg px-10 bg-white/10 hover:bg-white/20 border-white/30 text-white hover-scale btn-shimmer"
              asChild
            >
              <a href="https://wa.me/905353296589" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 w-5 h-5" />
                {t("cta.contactWhatsApp")}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
