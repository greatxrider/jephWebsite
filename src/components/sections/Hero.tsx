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
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-honey-gold/20 dark:bg-white/5 dark:border-honey-gold/15 rounded-full">
              <div className="w-2.5 h-2.5 bg-primary clip-hex" />
              <span className="text-primary text-sm font-medium tracking-wider">
                AI AUTOMATION SPECIALIST
              </span>
              <Cpu className="w-4 h-4 text-honey-gold" />
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1
                className="text-5xl md:text-6xl font-bold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                <span className="block text-primary">
                  AI-Powered
                </span>
                <span className="block">Business Automation</span>
              </h1>

              <p
                className="text-xl font-light leading-relaxed max-w-lg"
                style={{ color: "var(--text-color)" }}
              >
                Helping Businesses Scale With AI & Automation. Transform your
                business operations with intelligent workflows,
                <span className="text-primary font-medium">
                  {" "}
                  seamless integration
                </span>
                , and cutting-edge AI solutions.
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
            <div className="card-hex bg-white/80 backdrop-blur-sm dark:bg-white/5 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative overflow-hidden clip-hex-pointy">
                  <Image
                    src="/devTeam/jeph-logo.jpg"
                    alt="Jeph Daligdig"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Jeph Daligdig
                  </h3>
                  <p className="text-primary font-medium">
                    Software Engineer & Automation Specialist
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 clip-hex bg-green-500 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span style={{ color: "var(--text-color)" }}>
                    AI Workflow Automation Expert
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 clip-hex bg-green-500 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span style={{ color: "var(--text-color)" }}>
                    System & API Integration Specialist
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 clip-hex bg-green-500 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span style={{ color: "var(--text-color)" }}>
                    Business Process Automation
                  </span>
                </div>
              </div>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Workflow className="w-5 h-5 text-white" />,
                  title: "AI Workflow Automation",
                  desc: "Intelligent automation that adapts to your business needs.",
                },
                {
                  icon: <Link2 className="w-5 h-5 text-white" />,
                  title: "System & API Integration",
                  desc: "Seamless integration with leading platforms.",
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-white" />,
                  title: "Business Process Automation",
                  desc: "Streamline operations and boost efficiency.",
                },
                {
                  icon: <Brain className="w-5 h-5 text-white" />,
                  title: "AI-Powered Solutions",
                  desc: "Advanced AI models for predictive automation.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="card-hex bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary clip-hex flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-color)" }}>
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
