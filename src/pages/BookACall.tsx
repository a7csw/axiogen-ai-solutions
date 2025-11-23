import { useEffect, useState } from "react";

const BookACall = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cal.com/embed.js";
    script.async = true;
    
    script.onload = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://cal.com/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Book a Call With Axiogen
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule a call with our team to discuss your healthcare SaaS or automation needs.
          </p>
        </div>
      </section>

      {/* Cal.com Embed */}
      <section className="py-16 px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {isLoading && (
            <div className="flex items-center justify-center h-[700px] text-muted-foreground">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p>Loading booking calendar...</p>
              </div>
            </div>
          )}
          <div
            className="cal-embed"
            style={{ width: "100%", height: "100vh" }}
            data-cal-link="axiogen-8w3n8i/30min"
            data-cal-namespace=""
            data-cal-origin="https://cal.com"
          />
        </div>
      </section>
    </div>
  );
};

export default BookACall;

