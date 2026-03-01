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
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Lead Generation & Qualification Automation",
      description:
        "Automates lead capture from ads, web forms, and scrapers, enriches data, scores with AI, and routes qualified leads to your CRM instantly.",
      features: [
        "Auto-scrape leads from various sources",
        "Connect lead forms (Facebook Ads, website, etc.) to CRMs like GoHighLevel or HubSpot",
        "Auto-qualify leads using AI or scoring logic and notify sales teams instantly",
      ],
      idealFor:
        "Real Estate Agents, SaaS Sales Teams, Digital Agencies, Mortgage Brokers, Coaches",
      gradient: "bg-orange-500",
    },
    {
      icon: Database,
      title: "CRM & Pipeline Automation",
      description:
        "Creates contacts, deals, and tasks automatically, triggers reminders and status updates, and keeps tools like Calendly, Zoom, email, and your CRM in sync.",
      features: [
        "Auto-create contacts, deals, and tasks in CRMs",
        "Trigger reminders, follow-ups, and status updates based on lead behavior or deal stage",
        "Sync tools like Calendly, Zoom, email, and CRMs into one flow",
      ],
      idealFor:
        "Real Estate, Sales Teams, Insurance Agencies, Coaches, Franchise Operations",
      gradient: "bg-orange-600",
    },
    {
      icon: Users,
      title: "Client Onboarding Workflows",
      description:
        "Orchestrates client onboarding from intake to welcome emails, calendar setup, e‑signatures, and auto-creates tasks and records in tools like Airtable or ClickUp.",
      features: [
        "Automate onboarding from intake form to welcome email, calendar setup, and document signing",
        "Automatically populate Airtable/ClickUp with client info and assign internal tasks",
      ],
      idealFor:
        "Agencies, Service Businesses, Real Estate Firms, E-commerce Brands",
      gradient: "bg-orange-700",
    },
    {
      icon: FileText,
      title: "Proposal, Quote, or Report Generation",
      description:
        "Generates tailored proposals, quotes, or reports from CRM/Airtable data using Documint or Google Docs and delivers PDFs automatically to clients.",
      features: [
        "Automatically generate customized proposals or reports using Documint or Google Docs from CRM/Airtable data",
        "Trigger PDF generation and email/send to clients automatically",
      ],
      idealFor:
        "Real Estate, Marketing Agencies, Mortgage Brokers, B2B Sales, SEO Agencies",
      gradient: "bg-blue-500",
    },
    {
      icon: Share2,
      title: "Content Repurposing & Social Posting Automation",
      description:
        "Transforms notes or long‑form content from forms, Notion, or Slack into polished social posts and schedules them across LinkedIn, Facebook, Instagram, and more.",
      features: [
        "Pull content from forms, Notion, or Slack, and convert to formatted social posts",
        "Auto-post or schedule to LinkedIn, Facebook, Instagram, etc.",
        "Use AI to summarize, rewrite, or repurpose long-form content",
      ],
      idealFor:
        "Social Media Agencies, Content Creators, Coaches, Real Estate Agents",
      gradient: "bg-purple-500",
    },
    {
      icon: CheckSquare,
      title: "Task & Team Workflow Automation",
      description:
        "Builds recurring workflows for task creation, project updates, reminders, and status checks, with Slack, email, or SMS notifications.",
      features: [
        "Set up automated workflows for recurring task creation, project updates, reminders, and status checks",
        "Integrate Slack, email, or text updates based on changes",
      ],
      idealFor: "Agencies, Franchise Ops, Recruitment Teams, SEO Firms",
      gradient: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email & Outreach Sequences",
      description:
        "Enrolls contacts into personalized cold, nurture, or reactivation sequences with data‑driven targeting and AI‑assisted copywriting.",
      features: [
        "Auto-enroll leads into tailored cold email, nurture, or reactivation sequences",
        "Personalize outreach with data enrichment and AI-powered copywriting tools",
      ],
      idealFor: "B2B Sales Teams, Marketing Agencies, Coaches, Recruiters",
      gradient: "bg-red-500",
    },
    {
      icon: FormInput,
      title: "Form-to-Workflow Automation",
      description:
        "Turns any intake form into a complete backend process—saving data to Airtable/CRM, notifying the team, and triggering onboarding or scheduling.",
      features: [
        "Save to Airtable or CRM",
        "Notify team on Slack/Email",
        "Trigger onboarding, scheduling, or enrichment",
      ],
      idealFor: "Real Estate, Coaches, Course Creators, Local Services",
      gradient: "bg-teal-500",
    },
    {
      icon: Star,
      title: "Review & Testimonial Automation",
      description:
        "Requests reviews automatically after milestones and routes positive feedback to marketing while escalating negative responses for follow‑up.",
      features: [
        "Automatically request Google/Facebook/Trustpilot reviews after project milestones",
        "Route good feedback to marketing, and negative to support/escalation",
      ],
      idealFor: "Local Services, Real Estate, E-commerce, Coaches",
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
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">AI Automation Services</span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Practical AI & Automation
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-honey-gold to-orange-light">
              for Everyday Business
            </span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-300 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed border-t border-b border-honey-gold/20 py-4 mt-6"
            style={{ color: "var(--text-color)" }}
          >
            I help businesses simplify their operations with automation and AI.
            My focus is on creating reliable workflows that reduce manual work,
            connect your tools, and make day-to-day tasks easier to manage.
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
                  Ready to Transform Your Business?
                </h3>
              </div>
              <p
                className="text-gray-400 mb-6 max-w-2xl mx-auto"
                style={{ color: "var(--text-color)" }}
              >
                Let's discuss how I can help you automate your processes,
                integrate AI into your workflows, and create solutions that
                drive real business value.
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
                    window.open("https://calendly.com/jeph", "_blank")
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
