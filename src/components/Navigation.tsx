import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages, Sun, Moon, Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import logo from "../assets/axiogen.png";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const options = [
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
    { value: "system", label: "System", Icon: Monitor },
  ] as const;

  const ActiveIcon = options.find((o) => o.value === theme)?.Icon ?? Monitor;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        aria-label="Toggle theme"
      >
        <ActiveIcon className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-border bg-background shadow-lg py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {options.map(({ value, label, Icon }) => (
            <button
              key={value}
              onClick={() => { setTheme(value); setOpen(false); }}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                theme === value
                  ? "text-primary font-medium bg-primary/8"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileThemeRow = () => {
  const { theme, setTheme } = useTheme();
  const options = [
    { value: "light", Icon: Sun },
    { value: "dark", Icon: Moon },
    { value: "system", Icon: Monitor },
  ] as const;
  return (
    <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-border">
      <span className="text-sm font-medium text-foreground">Theme</span>
      <div className="flex items-center gap-1">
        {options.map(({ value, Icon }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`p-2 rounded-md transition-colors ${
              theme === value
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted"
            }`}
            aria-label={value}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.caseStudies"), path: "/case-studies" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <img src={logo} alt="Axiogen" className="h-16 w-auto object-contain logo-glow" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(link.path)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {/* Active underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <ThemeToggle />
              <button
                onClick={() => changeLanguage(i18n.language === "ar" ? "en" : "ar")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Toggle language"
              >
                <Languages className="w-4 h-4" />
                <span>{i18n.language === "ar" ? "EN" : "AR"}</span>
              </button>
              <Button asChild className="font-semibold shadow-sm">
                <a href="https://cal.com/abdulrahman-alfaiadi-jrzs4m/30min" target="_blank" rel="noopener noreferrer">
                  {t("nav.bookACall")}
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-20 z-50 grid place-items-start bg-background/98 backdrop-blur-sm p-6 animate-in slide-in-from-top-5 md:hidden h-[calc(100vh-5rem)] overflow-y-auto border-t border-border/40">
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block rounded-lg px-4 py-3 text-lg font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary/8 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-2 px-2 space-y-3">
              {/* Theme selector row */}
              <MobileThemeRow />
              <button
                onClick={() => changeLanguage(i18n.language === "ar" ? "en" : "ar")}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors border border-border"
              >
                <Languages className="w-5 h-5" />
                <span>{i18n.language === "ar" ? "English" : "العربية"}</span>
              </button>
              <Button asChild className="w-full text-base h-12">
                <a href="https://cal.com/abdulrahman-alfaiadi-jrzs4m/30min" target="_blank" rel="noopener noreferrer">
                  {t("nav.bookACall")}
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
