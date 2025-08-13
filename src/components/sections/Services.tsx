"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
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
  Target,
  Users,
  FileText,
  Share2,
  CheckSquare,
  Mail,
  FormInput,
  Star,
} from "lucide-react";

export const Services = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  // Enhanced AI Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Neural network nodes
    const nodes: Array<{ x: number; y: number; connections: number[] }> = [];
    const numNodes = 12;

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          node.connections.push(j);
        }
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Draw neural network connections
      ctx.strokeStyle = "rgba(255, 107, 53, 0.1)";
      ctx.lineWidth = 1;

      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const targetNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) +
              Math.pow(node.y - targetNode.y, 2)
          );

          if (distance < 200) {
            const opacity = Math.max(0, 0.1 - distance / 2000);
            ctx.strokeStyle = `rgba(255, 107, 53, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time + i) * 0.3 + 0.7;
        const size = 3 + pulse * 2;

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${0.3 + pulse * 0.2})`;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, size + 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${0.1 + pulse * 0.1})`;
        ctx.fill();
      });

      // Subtle grid pattern
      const gridSize = 80;
      ctx.strokeStyle = "rgba(255, 107, 53, 0.02)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Data flow particles
      for (let i = 0; i < 8; i++) {
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time + i) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Particle system for additional AI effect
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.01;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle when life reaches 1
        if (particle.life >= 1) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
        }

        // Draw particle
        const opacity = Math.sin(particle.life * Math.PI) * 0.3;
        const size = Math.sin(particle.life * Math.PI) * 2 + 1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const services = [
    {
      icon: Target,
      title: "Lead Generation & Qualification Automation",
      description:
        "Automatically scrape, collect, and enrich leads using tools like Apify, Clay, or Apollo.",
      features: [
        "Auto-scrape leads from various sources",
        "Connect lead forms (Facebook Ads, website, etc.) to CRMs like GoHighLevel or HubSpot",
        "Auto-qualify leads using AI or scoring logic and notify sales teams instantly",
      ],
      idealFor:
        "Real Estate Agents, SaaS Sales Teams, Digital Agencies, Mortgage Brokers, Coaches",
      gradient: "from-orange-500 to-orange-400",
    },
    {
      icon: Database,
      title: "CRM & Pipeline Automation",
      description:
        "Auto-create contacts, deals, and tasks in CRMs like HubSpot, GoHighLevel, ClickUp.",
      features: [
        "Auto-create contacts, deals, and tasks in CRMs",
        "Trigger reminders, follow-ups, and status updates based on lead behavior or deal stage",
        "Sync tools like Calendly, Zoom, email, and CRMs into one flow",
      ],
      idealFor:
        "Real Estate, Sales Teams, Insurance Agencies, Coaches, Franchise Operations",
      gradient: "from-orange-600 to-orange-500",
    },
    {
      icon: Users,
      title: "Client Onboarding Workflows",
      description:
        "Automate onboarding from intake form to welcome email, calendar setup, and document signing.",
      features: [
        "Automate onboarding from intake form to welcome email, calendar setup, and document signing",
        "Automatically populate Airtable/ClickUp with client info and assign internal tasks",
      ],
      idealFor:
        "Agencies, Service Businesses, Real Estate Firms, E-commerce Brands",
      gradient: "from-orange-700 to-orange-600",
    },
    {
      icon: FileText,
      title: "Proposal, Quote, or Report Generation",
      description:
        "Automatically generate customized proposals or reports (e.g., property investment reports, marketing audits) using Documint or Google Docs from CRM/Airtable data.",
      features: [
        "Automatically generate customized proposals or reports using Documint or Google Docs from CRM/Airtable data",
        "Trigger PDF generation and email/send to clients automatically",
      ],
      idealFor:
        "Real Estate, Marketing Agencies, Mortgage Brokers, B2B Sales, SEO Agencies",
      gradient: "from-blue-500 to-blue-400",
    },
    {
      icon: Share2,
      title: "Content Repurposing & Social Posting Automation",
      description:
        "Pull content from forms, Notion, or Slack, and convert to formatted social posts.",
      features: [
        "Pull content from forms, Notion, or Slack, and convert to formatted social posts",
        "Auto-post or schedule to LinkedIn, Facebook, Instagram, etc.",
        "Use AI to summarize, rewrite, or repurpose long-form content",
      ],
      idealFor:
        "Social Media Agencies, Content Creators, Coaches, Real Estate Agents",
      gradient: "from-purple-500 to-purple-400",
    },
    {
      icon: CheckSquare,
      title: "Task & Team Workflow Automation",
      description:
        "Set up automated workflows for recurring task creation, project updates, reminders, and status checks in ClickUp, Notion, or Trello.",
      features: [
        "Set up automated workflows for recurring task creation, project updates, reminders, and status checks",
        "Integrate Slack, email, or text updates based on changes",
      ],
      idealFor: "Agencies, Franchise Ops, Recruitment Teams, SEO Firms",
      gradient: "from-green-500 to-green-400",
    },
    {
      icon: Mail,
      title: "Email & Outreach Sequences",
      description:
        "Auto-enroll leads into tailored cold email, nurture, or reactivation sequences.",
      features: [
        "Auto-enroll leads into tailored cold email, nurture, or reactivation sequences",
        "Personalize outreach with data enrichment and AI-powered copywriting tools",
      ],
      idealFor: "B2B Sales Teams, Marketing Agencies, Coaches, Recruiters",
      gradient: "from-red-500 to-red-400",
    },
    {
      icon: FormInput,
      title: "Form-to-Workflow Automation",
      description:
        "Turn any intake form (Typeform, GHL, Jotform) into a fully automated backend process:",
      features: [
        "Save to Airtable or CRM",
        "Notify team on Slack/Email",
        "Trigger onboarding, scheduling, or enrichment",
      ],
      idealFor: "Real Estate, Coaches, Course Creators, Local Services",
      gradient: "from-teal-500 to-teal-400",
    },
    {
      icon: Star,
      title: "Review & Testimonial Automation",
      description:
        "Automatically request Google/Facebook/Trustpilot reviews after project milestones.",
      features: [
        "Automatically request Google/Facebook/Trustpilot reviews after project milestones",
        "Route good feedback to marketing, and negative to support/escalation",
      ],
      idealFor: "Local Services, Real Estate, E-commerce, Coaches",
      gradient: "from-yellow-500 to-yellow-400",
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
      className="section-padding relative mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black dark:from-slate-900 dark:via-slate-800 dark:to-black light:from-gray-200 light:via-gray-100 light:to-gray-50 overflow-hidden py-20"
    >
      {/* Enhanced AI Background Effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-black/80 dark:from-slate-900/70 dark:via-slate-800/50 dark:to-black/80 light:from-gray-200/70 light:via-gray-100/50 light:to-gray-50/80" />

      {/* Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-600/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-700/10 to-orange-600/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 dark:bg-white/5 dark:border-white/10 light:bg-gray-100/50 light:border-gray-200/50 rounded-full text-orange-500 text-sm font-medium mb-6 mx-auto">
            <Sparkles size={16} className="animate-pulse" />
            <span>AI Automation Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
            AI-Powered Automation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              {" "}
              That Actually Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
            Specialized automation solutions using Make, Zapier, n8n, and
            cutting-edge AI models to transform your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 h-full flex flex-col"
              >
                {/* Header Section */}
                <div
                  className={`bg-gradient-to-br ${service.gradient} p-8 relative`}
                >
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Technologies / Apps */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Technologies / Apps
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        const techs =
                          index === 0
                            ? ["Python", "OpenAI API", "Zapier", "HubSpot"]
                            : index === 1
                            ? ["Node.js", "Salesforce API", "Pipedrive", "AWS"]
                            : index === 2
                            ? ["React", "AWS Lambda", "Document AI", "Stripe"]
                            : index === 3
                            ? ["Make.com", "Google Sheets", "Slack", "Email"]
                            : index === 4
                            ? ["Buffer API", "ChatGPT", "Instagram", "LinkedIn"]
                            : index === 5
                            ? ["ClickUp", "Notion", "Trello", "Slack"]
                            : index === 6
                            ? ["Mailchimp", "Constant Contact", "Zapier", "CRM"]
                            : index === 7
                            ? ["Typeform", "Airtable", "Calendly", "SMS"]
                            : [
                                "Google Reviews",
                                "Trustpilot",
                                "Facebook",
                                "Email",
                              ];

                        return techs.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-xs font-medium border border-orange-500/30"
                          >
                            {tech}
                          </span>
                        ));
                      })()}
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-lg text-xs font-medium border border-orange-500/30">
                        +1
                      </span>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-sm font-semibold text-white mb-3">
                      Key Results
                    </h4>
                    <div className="space-y-2">
                      {(() => {
                        const results =
                          index === 0
                            ? [
                                "300% increase in lead capture",
                                "95% qualification accuracy",
                                "24/7 automation",
                              ]
                            : index === 1
                            ? [
                                "100% data accuracy",
                                "Real-time sync",
                                "Reduced manual work by 80%",
                              ]
                            : index === 2
                            ? [
                                "50% faster onboarding",
                                "Zero manual errors",
                                "100% compliance",
                              ]
                            : index === 3
                            ? [
                                "85% time savings",
                                "Automated reporting",
                                "Real-time updates",
                              ]
                            : index === 4
                            ? [
                                "10x content output",
                                "90% engagement boost",
                                "Cross-platform sync",
                              ]
                            : index === 5
                            ? [
                                "70% efficiency gain",
                                "Automated workflows",
                                "Team collaboration",
                              ]
                            : index === 6
                            ? [
                                "3x open rates",
                                "Personalized campaigns",
                                "Automated sequences",
                              ]
                            : index === 7
                            ? [
                                "Instant notifications",
                                "Zero data loss",
                                "Seamless integration",
                              ]
                            : [
                                "5x more reviews",
                                "Automated requests",
                                "Reputation management",
                              ];

                        return results.map((result, resultIndex) => (
                          <div
                            key={resultIndex}
                            className="flex items-start gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">
                              {result}
                            </span>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>

                  {/* Ideal For Section */}
                  <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600/50 mb-4">
                    <p className="text-xs text-orange-400 font-medium mb-1">
                      Ideal for:
                    </p>
                    <p className="text-gray-300 text-xs">{service.idealFor}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-auto"
                    onClick={() =>
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      })
                    }
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Automation Platforms Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Automation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Platforms I Master
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expert-level proficiency in the leading automation platforms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="text-center card-ai bg-white/10 backdrop-blur-sm"
              >
                <CardContent className="p-4">
                  <div className="w-12 h-12 mx-auto mb-3 relative">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {platform.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Models Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Models & Technologies
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cutting-edge AI models integrated into your workflows
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiModels.map((model, index) => (
              <Card
                key={index}
                className="text-center card-ai bg-white/10 backdrop-blur-sm"
              >
                <CardContent className="p-4">
                  <div className="w-12 h-12 mx-auto mb-3 relative">
                    <Image
                      src={model.logo}
                      alt={model.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {model.name}
                  </h4>
                  <p className="text-gray-400 text-xs">{model.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
