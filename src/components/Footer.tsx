import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/axiogen.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <img
                src={logo}
                alt="Axiogen"
                className="h-16 w-auto object-contain" // Adjusted size for balance
              />
            </div>
            <p className="text-gray-300 max-w-md">
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
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.caseStudies")}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-primary transition-colors"
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
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <Mail className="w-4 h-4" />
                <span>{t("contact.email.value")}</span>
              </li>
              <li className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
                <Phone className="w-4 h-4" />
                <span>{t("contact.phone.value")}</span>
              </li>
            </ul>
            <div className="flex space-x-4 rtl:space-x-reverse mt-6"></div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Axiogen. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
