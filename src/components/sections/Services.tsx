"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Workflow,
  Brain,
  Link,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Bot,
  Zap,
  Settings,
  GitBranch,
  Database,
  MessageSquare,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "No-Code AI Automation",
      description:
        "Build powerful automation workflows using Make, Zapier, and n8n integrated with AI models like Claude, ChatGPT, and OpenAI for intelligent decision-making.",
      features: [
        "Make (Integromat) workflow development",
        "Zapier automation setup & optimization",
        "n8n custom workflow creation",
        "AI-powered decision trees",
        "Multi-platform integrations",
      ],
      benefits: [
        {
          icon: <Clock className="w-5 h-5" />,
          text: "Save 80+ hours per week on manual tasks",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Increase workflow efficiency by 400%",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          text: "99.9% uptime with error handling",
        },
      ],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Model Integration",
      description:
        "Seamlessly integrate Claude, ChatGPT, OpenAI, and Perplexity into your workflows for content generation, analysis, and intelligent automation.",
      features: [
        "OpenAI API integration & optimization",
        "Claude (Anthropic) workflow integration",
        "ChatGPT custom implementations",
        "Perplexity AI research automation",
        "AI prompt engineering & optimization",
      ],
      benefits: [
        {
          icon: <Clock className="w-5 h-5" />,
          text: "Instant AI-powered responses",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Improve content quality by 300%",
        },
        { icon: <Shield className="w-5 h-5" />, text: "Smart error recovery" },
      ],
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-500/10 to-purple-500/10",
    },
    {
      icon: <Link className="w-8 h-8" />,
      title: "API & System Integration",
      description:
        "Connect all your business tools through REST APIs, webhooks, and custom integrations for seamless data flow and automated processes.",
      features: [
        "REST API development & integration",
        "Webhook setup & management",
        "Database connections (SQL, NoSQL)",
        "Third-party app integrations",
        "Custom connector development",
      ],
      benefits: [
        {
          icon: <Clock className="w-5 h-5" />,
          text: "Real-time data synchronization",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Eliminate data silos completely",
        },
        {
          icon: <Shield className="w-5 h-5" />,
          text: "Enterprise-grade security",
        },
      ],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-500/10 to-teal-500/10",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Workflow Analysis",
      description:
        "Analyze your current processes and identify automation opportunities using Make, Zapier, or n8n for maximum efficiency.",
    },
    {
      step: "02",
      title: "AI Integration Strategy",
      description:
        "Design AI-powered automation using Claude, OpenAI, and other modern AI tools to enhance your workflow intelligence.",
    },
    {
      step: "03",
      title: "Build & Deploy",
      description:
        "Develop and deploy your automation workflows with comprehensive testing, error handling, and performance optimization.",
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description:
        "Continuous monitoring, performance tuning, and feature enhancement to ensure your automations deliver maximum ROI.",
    },
  ];

  const platforms = [
    {
      name: "Make (Integromat)",
      icon: "🔧",
      description: "Visual workflow builder with 1000+ integrations",
      specialties: ["Complex logic", "Data transformation", "API connections"],
    },
    {
      name: "Zapier",
      icon: "⚡",
      description: "Easy automation platform with 5000+ app integrations",
      specialties: ["Quick setup", "Business apps", "Simple workflows"],
    },
    {
      name: "n8n",
      icon: "🔄",
      description: "Open-source automation with unlimited customization",
      specialties: ["Custom code", "Self-hosted", "Advanced workflows"],
    },
    {
      name: "AI Models",
      icon: "🤖",
      description: "Claude, ChatGPT, OpenAI, Perplexity integration",
      specialties: ["Content generation", "Analysis", "Decision making"],
    },
  ];

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-bright/10 to-orange-gold/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-4 animate-neon-glow">
            <Sparkles size={16} className="animate-neural-pulse" />
            <span className="gradient-text-neon">AI Automation Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered Automation
            <span className="gradient-text-ai"> That Actually Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized automation solutions using Make, Zapier, n8n, and
            cutting-edge AI models to transform your business operations with
            intelligent workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="h-full card-ai">
              <CardHeader className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center text-white mb-4`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-white">
                    What I Deliver:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-white">
                    Results You'll See:
                  </h4>
                  <div className="space-y-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={benefitIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="text-orange-500">{benefit.icon}</div>
                        <span className="text-gray-300 text-sm">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platforms Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Automation{" "}
              <span className="gradient-text">Platforms I Master</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Expert-level proficiency in the leading automation platforms and
              AI tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center card-ai">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {platform.name}
                  </h4>
                  <p className="text-gray-300 mb-4 text-sm">
                    {platform.description}
                  </p>
                  <div className="space-y-1">
                    {platform.specialties.map((specialty, idx) => (
                      <div key={idx} className="text-orange-500 text-xs">
                        • {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My <span className="gradient-text">Automation Process</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for delivering AI-powered automation
              solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center card-ai">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto card-ai">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 gradient-text-ai">
                Ready to Automate with AI Intelligence?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let&apos;s build intelligent automation workflows using Make,
                Zapier, n8n, and modern AI tools that transform your business
                operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                  className="group btn-ai animate-neon-glow"
                >
                  Start Automation Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                  className=""
                >
                  View Automation Examples
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
