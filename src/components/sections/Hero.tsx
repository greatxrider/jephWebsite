"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { HoneycombBackground } from "@/components/ui/HoneycombBackground";
import {
  Brain,
  ArrowRight,
  Network,
  Zap,
  Cpu,
  TrendingUp,
  CheckCircle,
  Workflow,
  Link2,
  Calendar,
} from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#FFFEF7] dark:bg-black overflow-hidden mb-20"
    >
      {/* Honeycomb Neural Hive Background */}
      <HoneycombBackground variant="neural-hive" density="medium" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-honey-gold/30 rounded-none clip-hex-pointy shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              <div className="w-2 h-2 bg-primary clip-hex animate-pulse-custom" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                AI AUTOMATION ARCHITECT
              </span>
              <Cpu className="w-3.5 h-3.5 text-honey-gold opacity-80" />
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1
                className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight uppercase"
                style={{ color: "var(--text-primary)" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-honey-gold to-orange-light animate-gradient-x">
                  Intelligent
                </span>
                <span className="block mt-2">Systems &</span>
                <span className="block text-3xl md:text-5xl mt-2 font-light tracking-widest text-honey-gold/80">Automation</span>
              </h1>

              <p
                className="text-lg md:text-xl font-light leading-relaxed max-w-xl border-l-2 border-primary/50 pl-6 py-2"
                style={{ color: "var(--text-color)" }}
              >
                Architecting autonomous workflows and scalable AI infrastructure. Transforming complex business logic into <span className="text-primary font-medium">seamless execution</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() =>
                  window.open("https://calendly.com/jeph", "_blank")
                }
                className="group bg-primary hover:bg-primary-dark text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>Book a Call</span>
                <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-honey-gold/40 dark:border-honey-gold/20 dark:text-white dark:hover:bg-honey-gold/5 dark:hover:border-honey-gold/40 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Network className="w-5 h-5 flex-shrink-0" />
                <span>View Services</span>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="card-hex backdrop-blur-xl border border-honey-gold/20 p-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className="w-20 h-20 relative overflow-hidden clip-hex-pointy border-2 border-honey-gold/50 p-1">
                  <div className="w-full h-full clip-hex-pointy overflow-hidden bg-white dark:bg-black">
                    <Image
                      src="/devTeam/jeph-logo.jpg"
                      alt="Jeph Daligdig"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div>
                  <h3
                    className="text-2xl font-bold tracking-wider uppercase mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Jeph Daligdig
                  </h3>
                  <p className="text-primary font-medium text-sm tracking-widest uppercase">
                    Principal AI Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 clip-hex bg-white dark:bg-black border border-honey-gold flex items-center justify-center group-hover/item:bg-honey-gold transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 text-honey-gold group-hover/item:text-black group-hover/item:dark:text-black" />
                  </div>
                  <span className="text-sm tracking-wide" style={{ color: "var(--text-color)" }}>
                    Neural Workflow Architecture
                  </span>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 clip-hex bg-white dark:bg-black border border-honey-gold flex items-center justify-center group-hover/item:bg-honey-gold transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 text-honey-gold group-hover/item:text-black group-hover/item:dark:text-black" />
                  </div>
                  <span className="text-sm tracking-wide" style={{ color: "var(--text-color)" }}>
                    Enterprise API Orchestration
                  </span>
                </div>
                <div className="flex items-center gap-4 group/item">
                  <div className="w-6 h-6 clip-hex bg-white dark:bg-black border border-honey-gold flex items-center justify-center group-hover/item:bg-honey-gold transition-colors duration-300">
                    <CheckCircle className="w-3 h-3 text-honey-gold group-hover/item:text-black group-hover/item:dark:text-black" />
                  </div>
                  <span className="text-sm tracking-wide" style={{ color: "var(--text-color)" }}>
                    Autonomous Agent Swarms
                  </span>
                </div>
              </div>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Workflow className="w-5 h-5 text-honey-gold" />,
                  title: "Neural Workflows",
                  desc: "Self-optimizing autonomous agent pipelines.",
                },
                {
                  icon: <Link2 className="w-5 h-5 text-honey-gold" />,
                  title: "API Orchestration",
                  desc: "Robust enterprise-grade system integrations.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-honey-gold" />,
                  title: "Process Scalability",
                  desc: "High-throughput automation architectures.",
                },
                {
                  icon: <Brain className="w-5 h-5 text-honey-gold" />,
                  title: "Cognitive Systems",
                  desc: "Advanced LLM and swarm intelligence deployments.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="card-ai border border-honey-gold/20 p-5 hover:bg-honey-gold/10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white dark:bg-black border border-honey-gold/30 clip-hex flex items-center justify-center mb-4 group-hover:border-honey-gold group-hover:bg-honey-gold/20 transition-all duration-300 shadow-[0_0_10px_rgba(255,215,0,0.05)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-xs font-bold mb-2 tracking-wider uppercase"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs font-light leading-relaxed opacity-70" style={{ color: "var(--text-color)" }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
