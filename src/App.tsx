import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle locale detection from URL (optional locale prefix)
const LocaleRouter = () => {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    // Check if URL has locale prefix (e.g., /ar/services)
    const localeMatch = path.match(/^\/(en|ar)(\/|$)/);
    
    if (localeMatch) {
      const locale = localeMatch[1];
      if (i18n.language !== locale) {
        i18n.changeLanguage(locale);
        localStorage.setItem("i18nextLng", locale);
      }
    }
    // If no locale in URL, language is managed by localStorage (handled by i18n config)
  }, [location.pathname, i18n]);

  return (
    <>
      <Navigation />
      <Routes>
        {/* Routes with optional locale prefix */}
        <Route path="/" element={<Home />} />
        <Route path="/:locale(en|ar)" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/:locale(en|ar)/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/:locale(en|ar)/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/:locale(en|ar)/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/:locale(en|ar)/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:locale(en|ar)/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LocaleRouter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
