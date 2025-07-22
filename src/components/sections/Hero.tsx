"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-bright/10 to-orange-gold/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-8 animate-neon-glow">
            <Sparkles size={16} className="animate-neural-pulse" />
            <span className="gradient-text-neon">AI Agent Available</span>
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="gradient-text-ai">AI Automation</span>
          <br />
          <span className="text-white">Architect</span>
          <br />
          <span className="text-2xl md:text-3xl gradient-text-neon font-normal">
            Building Tomorrow's Intelligence
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Crafting intelligent systems that think, learn, and evolve.
          <br />
          <span className="gradient-text-ai text-lg md:text-xl">
            Where Human Vision Meets Machine Precision
          </span>
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="min-w-[200px] group"
          >
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="min-w-[200px]"
          >
            Let&apos;s Talk
          </Button>
        </div>

        <div
          className="flex flex-wrap justify-center gap-8 mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center group">
            <div className="text-2xl font-bold gradient-text-ai animate-neural-pulse">
              3+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-orange-bright transition-colors">
              Years of AI Innovation
            </div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold gradient-text-ai animate-neural-pulse">
              50+
            </div>
            <div className="text-gray-400 text-sm group-hover:text-orange-bright transition-colors">
              AI Systems Deployed
            </div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold gradient-text-ai animate-neural-pulse">
              100%
            </div>
            <div className="text-gray-400 text-sm group-hover:text-orange-bright transition-colors">
              Automation Success
            </div>
          </div>
          <div className="text-center group">
            <div className="text-2xl font-bold gradient-text-ai animate-neural-pulse">
              ∞
            </div>
            <div className="text-gray-400 text-sm group-hover:text-orange-bright transition-colors">
              Scalability Potential
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-bright rounded-full flex justify-center animate-neon-glow">
          <div className="w-1 h-3 bg-gradient-to-b from-orange-bright to-transparent rounded-full mt-2 animate-neural-pulse"></div>
        </div>
      </div>
    </section>
  );
};
