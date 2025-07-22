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

  const skills = [
    {
      category: "Automation Platforms",
      tools: [
        { name: "Make (Integromat)", icon: "🔧", level: 95 },
        { name: "Zapier", icon: "⚡", level: 92 },
        { name: "n8n", icon: "🔄", level: 90 },
        { name: "Power Automate", icon: "🏢", level: 85 },
      ],
    },
    {
      category: "AI Models & APIs",
      tools: [
        { name: "OpenAI API", icon: "🤖", level: 95 },
        { name: "Claude (Anthropic)", icon: "🧠", level: 93 },
        { name: "ChatGPT Integration", icon: "💬", level: 90 },
        { name: "Perplexity AI", icon: "🔍", level: 88 },
      ],
    },
    {
      category: "Integration & APIs",
      tools: [
        { name: "REST APIs", icon: "🔌", level: 96 },
        { name: "GraphQL", icon: "🔗", level: 88 },
        { name: "Webhooks", icon: "📡", level: 94 },
        { name: "JSON/XML", icon: "📄", level: 92 },
      ],
    },
    {
      category: "Development Stack",
      tools: [
        { name: "JavaScript/Node.js", icon: "🟨", level: 91 },
        { name: "Python", icon: "🐍", level: 89 },
        { name: "React/Next.js", icon: "⚛️", level: 88 },
        { name: "PostgreSQL", icon: "🐘", level: 86 },
      ],
    },
  ];

  const achievements = [
    "Built 100+ AI-powered automation workflows using n8n, Make & Zapier",
    "Integrated 50+ enterprise APIs with 99.9% uptime reliability",
    "Deployed Claude & OpenAI solutions saving 80+ hours weekly",
    "Automated complex business processes for 200+ satisfied clients",
    "Expert in REST API development and third-party integrations",
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-bright/10 to-orange-gold/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-4 animate-neon-glow">
              <Sparkles size={16} className="animate-neural-pulse" />
              <span className="gradient-text-neon">AI Automation Expert</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Connecting Intelligence with
              <span className="gradient-text-ai"> Automation Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I&apos;m a specialized AI Automation Engineer who transforms
              business operations using no-code platforms like Make, Zapier, and
              n8n, integrated with cutting-edge AI models from OpenAI, Claude,
              and modern automation tools.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="animate-on-scroll">
            <Card className="h-full card-ai">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-bright to-orange-deep rounded-full flex items-center justify-center animate-neural-pulse">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white gradient-text-ai">
                    AI Automation Specialist
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  My expertise lies in bridging the gap between powerful AI
                  models and practical business automation. I specialize in
                  creating seamless workflows using Make, Zapier, and n8n that
                  leverage Claude, ChatGPT, OpenAI, and Perplexity to deliver
                  intelligent automation solutions.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  From REST API integrations to complex multi-step automations,
                  I design systems that connect your favorite tools while adding
                  AI-powered decision making, content generation, and smart
                  routing. Every automation I build is focused on reducing
                  manual work and increasing operational efficiency.
                </p>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specializations */}
          <div className="animate-on-scroll">
            <Card className="h-full card-ai">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-gold to-orange-bright rounded-full flex items-center justify-center animate-neural-pulse">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white gradient-text-ai">
                    Core Specializations
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Workflow className="w-8 h-8 text-orange-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">
                      No-Code Automation
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Make, Zapier, n8n Expert
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-8 h-8 text-blue-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">
                      AI Integration
                    </h4>
                    <p className="text-gray-400 text-sm">
                      OpenAI, Claude, ChatGPT
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Link2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">
                      API Connections
                    </h4>
                    <p className="text-gray-400 text-sm">
                      REST, GraphQL, Webhooks
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <GitBranch className="w-8 h-8 text-purple-500" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">
                      Complex Workflows
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Multi-step Logic & Routing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll">
              <Card className="h-full card-ai">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-4 gradient-text-neon">
                    {category.category}
                  </h4>
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{tool.icon}</span>
                            <span className="text-sm text-gray-300">
                              {tool.name}
                            </span>
                          </div>
                          <span className="text-xs text-orange-500 font-medium">
                            {tool.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${tool.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-on-scroll">
          <Card className="max-w-2xl mx-auto card-ai">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 gradient-text-ai">
                Ready to Automate with AI Intelligence?
              </h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s connect your business tools with powerful AI
                automation using Make, Zapier, n8n, and cutting-edge AI models
                for maximum efficiency.
              </p>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
                className="btn-ai px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 group animate-neon-glow"
              >
                Start AI Automation Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
