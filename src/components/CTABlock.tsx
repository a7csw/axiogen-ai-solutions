import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Calendar } from "lucide-react";

interface CTABlockProps {
  title?: string;
  description?: string;
  showWhatsApp?: boolean;
}

const CTABlock = ({ 
  title = "Ready to Transform Your Clinic?",
  description = "Join leading medical practices that have automated their workflows with Axiogen",
  showWhatsApp = true
}: CTABlockProps) => {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl mb-10 opacity-90">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-10 hover-scale" 
            asChild
          >
            <Link to="/contact">
              <Calendar className="mr-2 w-5 h-5" />
              Book A Demo
            </Link>
          </Button>
          {showWhatsApp && (
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 bg-white/10 hover:bg-white/20 border-white/30 text-white hover-scale" 
              asChild
            >
              <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
