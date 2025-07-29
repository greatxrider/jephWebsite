"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Zap,
  Brain,
  Workflow,
  Database,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Bot,
  Link2,
  Settings,
  GitBranch,
  Cpu,
  TrendingUp,
  Shield,
} from "lucide-react";

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const specializations = [
    {
      icon: Workflow,
      title: "No-Code Automation",
      description: "Make, Zapier, n8n Expert",
      color: "from-orange-500 to-orange-400",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "OpenAI, Claude, ChatGPT",
      color: "from-orange-600 to-orange-500",
    },
    {
      icon: Link2,
      title: "API Connections",
      description: "REST, GraphQL, Webhooks",
      color: "from-orange-700 to-orange-600",
    },
    {
      icon: GitBranch,
      title: "Complex Workflows",
      description: "Multi-step Logic & Routing",
      color: "from-orange-800 to-orange-700",
    },
  ];

  const skills = [
    { name: "Make (Integromat)", level: 95 },
    { name: "Zapier", level: 92 },
    { name: "n8n", level: 90 },
    { name: "OpenAI API", level: 95 },
    { name: "Claude (Anthropic)", level: 93 },
    { name: "REST APIs", level: 96 },
  ];

  return (
    <section
      id="about"
      className="section-padding relative bg-gradient-to-br from-slate-900 via-slate-800 to-black mt-20 mb-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-500 text-sm font-medium mb-6">
              <Sparkles size={16} className="animate-pulse" />
              <span>AI Automation Expert</span>
            </div>

            {/* 2-Column Header Layout */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main Headline */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Connecting Intelligence with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                    {" "}
                    Automation Excellence
                  </span>
                </h2>
              </div>

              {/* Right Column - Description */}
              <div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I&apos;m a specialized AI Automation Engineer who transforms
                  business operations using no-code platforms integrated with
                  cutting-edge AI models.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Column 1 - Bio & Specializations */}
          <div className="space-y-6">
            <Card className="card-ai h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    AI Automation Specialist
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                  My expertise lies in creating seamless workflows using Make,
                  Zapier, and n8n that leverage Claude, ChatGPT, and OpenAI to
                  deliver intelligent automation solutions.
                </p>
                <div className="space-y-3">
                  {specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${spec.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <spec.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {spec.title}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Column 2 - Skills */}
          <div className="space-y-6">
            <Card className="card-ai h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Key Skills</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((tool, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">
                          {tool.name}
                        </span>
                        <span className="text-xs text-orange-500 font-medium">
                          {tool.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-400 h-1.5 rounded-full transition-all duration-1000"
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
