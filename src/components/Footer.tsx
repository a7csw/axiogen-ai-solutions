import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/axiogen.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <img
                src={logo}
                alt="Axiogen"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto md:mx-0">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.caseStudies")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-300">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">contact@getaxiogenai.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2 text-gray-300">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+90 535 329 6589</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 md:mt-12 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Axiogen. {t("footer.allRightsReserved")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
