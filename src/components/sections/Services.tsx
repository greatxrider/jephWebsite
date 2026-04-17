"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { HoneycombBackground } from "@/components/ui/HoneycombBackground";
import Image from "next/image";
import {
  Workflow,
  Brain,
  Link,
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
  Target,
  Users,
  FileText,
  Share2,
  CheckSquare,
  Mail,
  FormInput,
  Star,
  Rocket,
  Award,
  Calendar,
  ArrowRight,
  Globe,
  Smartphone,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web & SaaS Development",
      description:
        "Full-stack web applications and SaaS platforms built with Next.js, React, and modern tech stacks. Scalable, responsive, and production-ready.",
      features: [
        "Next.js / React full-stack applications",
        "SaaS platforms with auth, billing, and dashboards",
        "Responsive design with Tailwind CSS and modern UI",
      ],
      idealFor:
        "Startups, SaaS Founders, Agencies, Enterprise Teams",
      gradient: "bg-orange-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications using React Native and modern frameworks. Native performance with shared codebase for iOS and Android.",
      features: [
        "React Native cross-platform apps",
        "Push notifications, offline support, and deep linking",
        "App Store and Google Play deployment",
      ],
      idealFor:
        "Startups, E-commerce, Healthcare, Service Businesses",
      gradient: "bg-orange-600",
    },
    {
      icon: Brain,
      title: "AI Receptionists & Chatbots",
      description:
        "Intelligent AI-powered virtual receptionists and chatbots that handle customer inquiries, book appointments, and qualify leads 24/7.",
      features: [
        "AI voice and chat receptionists for businesses",
        "Natural language understanding with GPT/Claude integration",
        "Appointment scheduling and CRM integration",
      ],
      idealFor:
        "Medical Offices, Law Firms, Real Estate, Service Businesses",
      gradient: "bg-orange-700",
    },
    {
      icon: Database,
      title: "Healthcare EMR/EHR Systems",
      description:
        "Custom electronic medical/health record systems designed for clinics, practices, and healthcare organizations with compliance and security built in.",
      features: [
        "Patient management and clinical documentation",
        "HIPAA-compliant architecture and data handling",
        "Lab integration, e-prescribing, and billing modules",
      ],
      idealFor:
        "Clinics, Private Practices, Hospitals, Telehealth Providers",
      gradient: "bg-blue-500",
    },
    {
      icon: Target,
      title: "Lead Generation & CRM Automation",
      description:
        "Automated lead capture, enrichment, scoring, and CRM pipeline management that turns prospects into customers on autopilot.",
      features: [
        "Auto-capture leads from ads, forms, and scrapers",
        "AI-powered lead scoring and qualification",
        "CRM sync with HubSpot, GoHighLevel, Salesforce",
      ],
      idealFor:
        "Real Estate, SaaS Sales Teams, Digital Agencies, Coaches",
      gradient: "bg-purple-500",
    },
    {
      icon: Workflow,
      title: "Business Process Automation",
      description:
        "End-to-end workflow automation using Make, Zapier, and n8n. Connect your tools, eliminate manual tasks, and scale operations efficiently.",
      features: [
        "Multi-platform automation (Make, Zapier, n8n)",
        "Client onboarding and task workflow automation",
        "Email sequences, reporting, and notification systems",
      ],
      idealFor: "Agencies, Franchise Ops, E-commerce, Service Businesses",
      gradient: "bg-green-500",
    },
    {
      icon: Bot,
      title: "AI Integration & Custom AI Solutions",
      description:
        "Integrate AI models into your existing systems. Custom AI agents, content generation, data analysis, and automated decision-making.",
      features: [
        "OpenAI, Claude, and custom LLM integrations",
        "AI-powered content generation and analysis",
        "Autonomous AI agent workflows and pipelines",
      ],
      idealFor: "Tech Companies, Content Teams, Data-Driven Businesses",
      gradient: "bg-red-500",
    },
    {
      icon: Share2,
      title: "API Development & Integration",
      description:
        "Custom REST/GraphQL API development and third-party integrations. Connect any system with clean, well-documented APIs.",
      features: [
        "Custom REST and GraphQL API development",
        "Third-party API integration and middleware",
        "Webhook systems and real-time data sync",
      ],
      idealFor: "SaaS Companies, Enterprise, Platform Builders",
      gradient: "bg-teal-500",
    },
    {
      icon: FileText,
      title: "Technical Consulting & Architecture",
      description:
        "Strategic technology consulting for startups and businesses. System architecture design, tech stack selection, and development roadmaps.",
      features: [
        "System architecture and tech stack planning",
        "Code review and performance optimization",
        "Development team augmentation and mentoring",
      ],
      idealFor: "Startups, CTOs, Non-Technical Founders, Growing Teams",
      gradient: "bg-yellow-500",
    },
  ];

  const platforms = [
    {
      name: "Make (Integromat)",
      logo: "/logo/make-logo.png",
      description: "Visual workflow builder with 1000+ integrations",
    },
    {
      name: "Zapier",
      logo: "/logo/Zapier_logo.svg.png",
      description: "Easy automation platform with 5000+ app integrations",
    },
    {
      name: "n8n",
      logo: "/logo/N8n-logo-new.svg.png",
      description: "Open-source automation with unlimited customization",
    },
    {
      name: "AI Models",
      logo: "/logo/ai-models-logo.png",
      description: "Claude, ChatGPT, OpenAI, Perplexity integration",
    },
  ];

  const aiModels = [
    {
      name: "OpenAI",
      logo: "/logo/OpenAI_Logo.svg.png",
      description: "GPT-4, DALL-E, Whisper integration",
    },
    {
      name: "Claude",
      logo: "/logo/Claude_AI_logo.svg.png",
      description: "Advanced reasoning & analysis",
    },
    {
      name: "ChatGPT",
      logo: "/logo/ChatGPT-Logo.svg.png",
      description: "Conversational AI integration",
    },
    {
      name: "Perplexity",
      logo: "/logo/Perplexity-Logo.png",
      description: "Research & information retrieval",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative mt-20 bg-[#FFFEF7] dark:bg-black overflow-hidden py-20"
    >
      {/* Honeycomb Background */}
      <HoneycombBackground variant="honeycomb" density="low" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-honey-gold/30 rounded-none clip-hex-pointy shadow-[0_0_15px_rgba(255,215,0,0.1)] mb-6 mx-auto">
            <Sparkles size={16} className="text-honey-gold" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Software & AI Services</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Full-Stack Development &
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-honey-gold to-orange-light">
              AI-Powered Solutions
            </span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-300 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed border-t border-b border-honey-gold/20 py-4 mt-6"
            style={{ color: "var(--text-color)" }}
          >
            Custom web apps, SaaS platforms, AI receptionists, mobile apps,
            and business automation. From startups to enterprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="w-full mb-16">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 justify-items-stretch">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group card-hex backdrop-blur-sm overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-honey-gold/10 flex flex-col w-full h-full"
              >
                {/* Icon Section */}

                {/* Content Section */}
                <div className="px-5 pb-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary clip-hex flex items-center justify-center shadow-md shadow-honey-gold/20">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className="text-base font-bold text-white dark:text-white text-left leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {service.title}
                    </h3>
                  </div>
                  <h3 className="sr-only">{service.title}</h3>
                  <p
                    className="text-gray-300 dark:text-gray-300 text-sm mb-4 leading-relaxed text-left"
                    style={{ color: "var(--text-color)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-on-scroll">
          <Card className="card-ai bg-primary/10 border-honey-gold/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 clip-hex bg-primary flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ color: "var(--text-primary)" }}
                >
                  Ready to Build Your Next Project?
                </h3>
              </div>
              <p
                className="text-gray-400 mb-6 max-w-2xl mx-auto"
                style={{ color: "var(--text-color)" }}
              >
                Let's discuss your web app, SaaS product, AI receptionist,
                or automation project. I'll scope it out and get you a plan.
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-honey-gold">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 text-honey-gold">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-honey-gold">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm font-medium">Ongoing Support</span>
                </div>
              </div>

              {/* Book a Call Button */}
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    window.open("https://calendar.app.google/6CJuytpfYx9vU49fA", "_blank")
                  }
                  className="group bg-primary hover:bg-primary-dark text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-honey-gold/25 hover:shadow-honey-gold/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 rounded-xl"
                >
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <span>Book a Call</span>
                  <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
