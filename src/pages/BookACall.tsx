import { useEffect } from "react";

const BookACall = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function(c,a,l){var d=c.createElement(a);d.src=l;d.async=true;
      var s=c.getElementsByTagName(a)[0];s.parentNode.insertBefore(d,s);})
      (document,"script","https://app.cal.com/embed/embed.js");
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
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
          <div
            style={{ width: "100%", height: "700px" }}
            data-cal-link="team/leftclick/discovery?source=linkedin"
            data-cal-namespace="axiogen"
            className="cal-embed"
          />
        </div>
      </section>
    </div>
  );
};

export default BookACall;

