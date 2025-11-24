import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "../assets/axiogen.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.caseStudies"), path: "/case-studies" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={logo}
              alt="Axiogen"
              className="h-16 w-auto object-contain" // Adjusted size for balance
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Languages className="h-4 w-4" />
                  <span className="hidden sm:inline">{i18n.language === "ar" ? "العربية" : "English"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("en")} className="cursor-pointer">
                  <span className="flex-1">English</span>
                  {i18n.language === "en" && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("ar")} className="cursor-pointer">
                  <span className="flex-1">العربية</span>
                  {i18n.language === "ar" && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="ml-2 font-semibold shadow-sm">
              <a href="https://cal.com/axiogen-8w3n8i/30min?overlayCalendar=true">{t("nav.bookCall")}</a>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* This covers the whole screen instead of pushing content down */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-50 grid place-items-start bg-background p-6 animate-in slide-in-from-top-5 md:hidden h-[calc(100vh-5rem)] overflow-y-auto border-t">
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-4 py-3 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    isActive(link.path)
                      ? "bg-accent/50 text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 px-4 space-y-3">
              <div className="flex items-center justify-center mb-2">
                <ThemeToggle />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full text-lg h-12 justify-between">
                    <span>{i18n.language === "ar" ? "العربية" : "English"}</span>
                    <Languages className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-full">
                  <DropdownMenuItem onClick={() => changeLanguage("en")} className="cursor-pointer">
                    <span className="flex-1">English</span>
                    {i18n.language === "en" && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => changeLanguage("ar")} className="cursor-pointer">
                    <span className="flex-1">العربية</span>
                    {i18n.language === "ar" && <Check className="h-4 w-4" />}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild className="w-full text-lg h-12">
                <a href="https://cal.com/axiogen-8w3n8i/30min?overlayCalendar=true" onClick={() => setIsOpen(false)}>
                  {t("nav.bookCall")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
