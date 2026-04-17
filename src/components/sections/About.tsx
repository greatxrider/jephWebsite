"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
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
  MessageSquare,
  Globe,
  Rocket,
  Target,
  Users,
  Clock,
  Award,
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
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
      icon: Code,
      title: "Full-Stack Development",
      description: "Next.js, React, Node.js, Python",
      color: "bg-orange-500",
    },
    {
      icon: Brain,
      title: "AI & ML Solutions",
      description: "AI Receptionists, Chatbots, LLMs",
      color: "bg-orange-600",
    },
    {
      icon: Link2,
      title: "Healthcare Tech",
      description: "EMR/EHR Systems, Clinical Apps",
      color: "bg-orange-700",
    },
    {
      icon: GitBranch,
      title: "SaaS & Automation",
      description: "SaaS Platforms, Workflow Automation",
      color: "bg-orange-800",
    },
  ];

  const techPlatforms = [
    {
      name: "Next.js",
      logo: "/logo/make-logo.png",
      description: "Full-stack React framework",
      expertise: "Expert",
    },
    {
      name: "React / React Native",
      logo: "/logo/Zapier_logo.svg.png",
      description: "Web & mobile applications",
      expertise: "Expert",
    },
    {
      name: "Node.js",
      logo: "/logo/N8n-logo-new.svg.png",
      description: "Backend & API development",
      expertise: "Expert",
    },
    {
      name: "Make / n8n / Zapier",
      logo: "/logo/automationAnywhere-logo.png",
      description: "Workflow automation platforms",
      expertise: "Expert",
    },
    {
      name: "Supabase / PostgreSQL",
      logo: "/logo/uipath-logo.png",
      description: "Database & backend-as-a-service",
      expertise: "Advanced",
    },
  ];

  const aiTechnologies = [
    {
      name: "OpenAI API",
      logo: "/logo/OpenAI_Logo.svg.png",
      description: "GPT-4, DALL-E, Whisper",
      expertise: "Expert",
    },
    {
      name: "Claude (Anthropic)",
      logo: "/logo/Claude_AI_logo.svg.png",
      description: "Advanced reasoning & analysis",
      expertise: "Expert",
    },
    {
      name: "ChatGPT",
      logo: "/logo/ChatGPT-Logo.svg.png",
      description: "Conversational AI integration",
      expertise: "Expert",
    },
    {
      name: "Perplexity",
      logo: "/logo/Perplexity-Logo.png",
      description: "Research & information retrieval",
      expertise: "Advanced",
    },
    {
      name: "DeepSeek",
      logo: "/logo/DeepSeek_logo.svg.png",
      description: "Code generation & analysis",
      expertise: "Advanced",
    },
    {
      name: "Google Gemini",
      logo: "/logo/Google_Gemini_logo.svg.png",
      description: "Multi-modal AI interactions",
      expertise: "Advanced",
    },
  ];

  const technicalSkills = [
    {
      name: "REST APIs",
      logo: "/logo/ai-models-logo.png", // Using AI models logo as placeholder
      description: "API design & integration",
      expertise: "Expert",
    },
    {
      name: "API Integration",
      logo: "/logo/ai-models-logo.png", // Using AI models logo as placeholder
      description: "Third-party service connections",
      expertise: "Expert",
    },
    {
      name: "AI Agents",
      logo: "/logo/ai-models-logo.png",
      description: "Autonomous AI workflows",
      expertise: "Expert",
    },
    {
      name: "Webhooks",
      logo: "/logo/ai-models-logo.png", // Using AI models logo as placeholder
      description: "Real-time data synchronization",
      expertise: "Expert",
    },
  ];

  const programmingLanguages = [
    {
      name: "JavaScript",
      logo: "/logo/Unofficial_JavaScript_logo_2.svg.png",
      description: "Full-stack development & automation",
      expertise: "Expert",
      type: "Primary",
      color: "bg-yellow-500",
    },
    {
      name: "Python",
      logo: "/programmingLogos/python-logo.svg", // Python logo
      description: "AI/ML, automation & backend development",
      expertise: "Expert",
      type: "Primary",
      color: "bg-blue-500",
    },
    {
      name: "C#",
      logo: "/programmingLogos/csharp-logo.png",
      description: "Enterprise applications & .NET development",
      expertise: "Advanced",
      type: "Secondary",
      color: "bg-purple-500",
    },
    {
      name: "C++",
      logo: "/programmingLogos/cplus-logo.png",
      description: "System programming & performance optimization",
      expertise: "Advanced",
      type: "Secondary",
      color: "bg-pink-500",
    },
    {
      name: "C",
      logo: "/programmingLogos/c-logo.png",
      description: "Low-level programming & embedded systems",
      expertise: "Intermediate",
      type: "Secondary",
      color: "bg-gray-500",
    },
  ];

  const valuePropositions = [
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Milestone-based delivery with realistic timelines",
      color: "bg-green-500",
    },
    {
      icon: Target,
      title: "ROI Focused",
      description: "Every solution designed to maximize your return",
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "Scalable solutions that grow with your business",
      color: "bg-purple-500",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Continuous optimization and maintenance",
      color: "bg-orange-500",
    },
  ];

  const workExperience: {
    company: string;
    position: string;
    period: string;
    description?: string;
    logo?: string;
    color: string;
  }[] = [
    {
      company: "The Human Company",
      position: "AI Software Engineer",
      period: "Nov 2025 - Present",
      color: "bg-purple-500",
    },
    {
      company: "SOLAR EXPRESS AI",
      position: "AI Software Engineer",
      period: "Nov 2025 - Present",
      color: "bg-yellow-500",
    },
    {
      company: "Guerilla 360 Integrated Solutions",
      position: "AI Software Engineer",
      period: "Oct 2025 - Present",
      color: "bg-blue-500",
    },
    {
      company: "Next Generation Medicine",
      position: "AI Software Engineer",
      period: "Oct 2025 - Present",
      color: "bg-indigo-500",
    },
    {
      company: "NomanuAI",
      position: "Senior AI Software Engineer",
      period: "Sep 2025 - Present",
      color: "bg-primary",
    },
    {
      company: "FILIPINO HOMES",
      position: "Real Estate Sales Agent",
      period: "Sep 2025 - Present",
      color: "bg-green-500",
    },
    {
      company: "Metawatt",
      position: "Senior Automation Engineer / Partner",
      period: "Feb 2025 - Present",
      logo: "/companyLogos/metawatt-logo.png",
      color: "bg-yellow-500",
    },
    {
      company: "Funeral Futurist",
      position: "AI Automation Engineer",
      period: "Jul 2025 - Feb 2026",
      color: "bg-indigo-500",
    },
    {
      company: "Positive Property - George Markoski",
      position: "AI Automation Specialist",
      period: "Jun 2025 - Nov 2025",
      color: "bg-orange-500",
    },
    {
      company: "Bold Business",
      position: "Automation, Integration & AI Specialist",
      period: "Jun 2025 - Nov 2025",
      color: "bg-blue-500",
    },
    {
      company: "Merkeley Ventures",
      position: "AI Automation Engineer",
      period: "Jun 2025 - Nov 2025",
      color: "bg-purple-500",
    },
    {
      company: "Haivyne",
      position: "AI Automation Specialist",
      period: "Apr 2025 - Sep 2025",
      logo: "/companyLogos/haivyne-logo.png",
      color: "bg-pink-500",
    },
    {
      company: "Easy Outsource",
      position: "AI Automation Specialist",
      period: "Jan 2025 - Nov 2025",
      logo: "/companyLogos/easyoutsource-logo.png",
      color: "bg-indigo-500",
    },
    {
      company: "Bamboo Works",
      position: "AI Automation Specialist",
      period: "Dec 2024 - May 2025",
      logo: "/companyLogos/bambooworks-logo.png",
      color: "bg-orange-500",
    },
    {
      company: "Native Teams",
      position: "Project Manager",
      period: "Dec 2024 - Feb 2025",
      color: "bg-red-500",
    },
    {
      company: "RevWised",
      position: "AI Automation Specialist",
      period: "Jun 2024 - Dec 2024",
      logo: "/companyLogos/revwise-logo.png",
      color: "bg-purple-500",
    },
    {
      company: "Ionics-EMS Inc.",
      position: "Test Development Engineer",
      period: "Mar 2023 - Sep 2023",
      color: "bg-cyan-500",
    },
    {
      company: "Nyxpro",
      position: "Senior AI Software Engineer",
      period: "Nov 2021 - Oct 2025",
      logo: "/companyLogos/nyxpro-logo.jpg",
      color: "bg-green-500",
    },
  ];

  const education = [
    {
      name: "Mindanao State University - Iligan Institute of Technology, Bachelor of Science in Electronics Engineering",
      logo: "/educationWorkLogos/msuiit-logo.png",
    },
    {
      name: "Mindanao State University - Iligan Institute of Technology, Bachelor of Technology, Mechanical Engineering Technology",
      logo: "/educationWorkLogos/msuiit-logo.png",
    },
  ];

  const certifications = [
    {
      name: "IBM DevOps and Software Engineering",
      logo: "/educationWorkLogos/ibm-logo.png",
    },
    {
      name: "IBM Full Stack Software Developer",
      logo: "/educationWorkLogos/ibm-logo.png",
    },
    {
      name: "Treehouse Full Stack JavaScript",
      logo: "/educationWorkLogos/treehouse-logo.png",
    },
    {
      name: "Treehouse Python Developer",
      logo: "/educationWorkLogos/treehouse-logo.png",
    },
    {
      name: "Nucamp Full Stack Web and Mobile Development Bootcamp",
      logo: "/educationWorkLogos/nucamp-logo.svg",
    },
    {
      name: "Youngstown State University, IBM IT Pre-Apprenticeship Software Engineer",
      logo: "/educationWorkLogos/ysu-logo.png",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-[#FFFEF7] dark:bg-black mt-20 mb-20"
    >
      {/* Honeycomb background overlay */}
      <div className="absolute inset-0 bg-honeycomb opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-honey-gold/30 rounded-none clip-hex-pointy shadow-[0_0_15px_rgba(255,215,0,0.1)] mb-6">
              <Sparkles size={16} className="text-honey-gold" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Full-Stack AI Engineer</span>
            </div>

            {/* 2-Column Header Layout */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main Headline */}
              <div>
                <h2
                  className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight mb-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Software Engineering &
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-honey-gold to-orange-light">
                    AI Solutions
                  </span>
                </h2>
              </div>

              {/* Right Column - Description */}
              <div className="border-l-2 border-honey-gold/30 pl-6">
                <p
                  className="text-lg text-gray-400 dark:text-gray-400 font-light leading-relaxed"
                  style={{ color: "var(--text-color)" }}
                >
                  I build full-stack web apps, SaaS platforms, AI receptionists, and automation systems. From React and Next.js development to AI chatbots, healthcare EMR, and business workflow automation.
                </p>
                <p className="text-sm text-primary font-bold mt-4 uppercase tracking-widest">
                  End-to-end software solutions, built to scale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Background - Tabbed: Experience / Education / Certifications */}
        <div className="mb-12 animate-on-scroll">
          {(() => {
            const [activeBgTab, setActiveBgTab] = useState<"experience" | "education" | "certs">("experience");

            const Experience = (
              <div className="space-y-4">
                {workExperience.map((job, index) => (
                  <Card key={index} className="card-ai p-4">
                    <CardContent>
                      <div className="flex items-start gap-3">
                        {job.logo && (
                          <div className="w-12 h-12 relative flex-shrink-0">
                            <Image src={job.logo} alt={job.company} width={48} height={48} className="object-contain w-full h-full rounded-lg" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <h4 className="text-white font-bold text-base">{job.position}</h4>
                              <div className="flex items-center gap-2 text-sm flex-wrap">
                                <span className="text-honey-gold font-semibold">{job.company}</span>
                                <div className="w-1 h-1 bg-honey-gold clip-hex"></div>
                                <span className="text-gray-400">{job.period}</span>
                              </div>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex-shrink-0 ${job.period.includes("Present") ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-gray-500/20 text-gray-400 border border-gray-500/30"}`}>
                              {job.period.includes("Present") ? "Current" : "Previous"}
                            </span>
                          </div>
                          {job.description && (
                            <p className="text-gray-300 text-sm mt-2">{job.description}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );

            const Education = (
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <Card key={idx} className="card-ai">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative flex-shrink-0">
                          <Image src={edu.logo} alt={edu.name} width={40} height={40} className="object-contain w-full h-full rounded" />
                        </div>
                        <h4 className="text-white font-medium text-sm leading-snug">{edu.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );

            const Certifications = (
              <div className="grid grid-cols-1 gap-3">
                {certifications.map((cert, idx) => (
                  <Card key={idx} className="card-ai">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 relative flex-shrink-0">
                          <Image src={cert.logo} alt={cert.name} width={40} height={40} className="object-contain w-full h-full rounded" />
                        </div>
                        <h4 className="text-white font-medium text-sm leading-snug">{cert.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );

            return (
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary clip-hex flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Background</h3>
                </div>

                <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
                  <button onClick={() => setActiveBgTab("experience")} className={`px-4 py-2 text-sm rounded-lg transition ${activeBgTab === "experience" ? "bg-primary text-white" : "text-gray-300 hover:text-white"}`}>Experience</button>
                  <button onClick={() => setActiveBgTab("education")} className={`px-4 py-2 text-sm rounded-lg transition ${activeBgTab === "education" ? "bg-primary text-white" : "text-gray-300 hover:text-white"}`}>Education</button>
                  <button onClick={() => setActiveBgTab("certs")} className={`px-4 py-2 text-sm rounded-lg transition ${activeBgTab === "certs" ? "bg-primary text-white" : "text-gray-300 hover:text-white"}`}>Certifications</button>
                </div>

                {/* Mobile horizontal scroll */}
                <div className="md:hidden -mx-4 px-4 pb-2 overflow-x-auto snap-x snap-mandatory">
                  <div className="min-w-[90%] snap-start">
                    {activeBgTab === "experience" && Experience}
                    {activeBgTab === "education" && Education}
                    {activeBgTab === "certs" && Certifications}
                  </div>
                </div>
                {/* Desktop grid */}
                <div className="hidden md:block">
                  {activeBgTab === "experience" && Experience}
                  {activeBgTab === "education" && Education}
                  {activeBgTab === "certs" && Certifications}
                </div>
              </div>
            );
          })()}
        </div>

        {/* Value Propositions */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((prop, index) => (
              <Card
                key={index}
                className="card-ai hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${prop.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <prop.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{prop.title}</h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Skills - Tabbed, mobile scrollable */}
        <div className="space-y-6 animate-on-scroll">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary clip-hex flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white" style={{ color: "var(--text-primary)" }}>
              Tools & Skills
            </h3>
          </div>

          {/* Tabs */}
          {(() => {
            const [activeSkillTab, setActiveSkillTab] = useState<"platforms" | "ai" | "languages">("platforms");
            const renderCards = (items: Array<any>, colorHover: string = "orange") => (
              <>
                {/* Mobile: horizontal scroll */}
                <div className="md:hidden -mx-4 px-4 pb-2 overflow-x-auto snap-x snap-mandatory">
                  <div className="flex gap-4">
                    {items.map((item, idx) => (
                      <div key={idx} className="min-w-[200px] snap-start card-ai p-4">
                        <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center mb-3">
                          {item.logo ? (
                            <Image src={item.logo} alt={item.name} width={28} height={28} className="object-contain" />
                          ) : (
                            <Code className="w-6 h-6 text-orange-600" />
                          )}
                        </div>
                        <h4 className="text-white font-semibold text-sm mb-1">{item.name}</h4>
                        {item.description && (
                          <p className="text-xs text-gray-300">{item.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Desktop: grid */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {items.map((item, idx) => (
                    <div key={idx} className="group card-ai p-4 text-center">
                      <div className="relative mb-3">
                        <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                          {item.logo ? (
                            <Image src={item.logo} alt={item.name} width={32} height={32} className="object-contain" />
                          ) : (
                            <Code className="w-8 h-8 text-orange-600" />
                          )}
                        </div>
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{item.name}</h4>
                      {item.description && (
                        <p className="text-xs text-gray-300">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </>
            );

            return (
              <div className="space-y-6">
                <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
                  <button onClick={() => setActiveSkillTab("platforms")} className={`px-4 py-2 text-sm rounded-lg transition ${activeSkillTab === "platforms" ? "bg-primary text-white" : "text-gray-300 hover:text-white"}`}>Platforms</button>
                  <button onClick={() => setActiveSkillTab("ai")} className={`px-4 py-2 text-sm rounded-lg transition ${activeSkillTab === "ai" ? "bg-primary text-white" : "text-gray-300 hover:text-white"}`}>AI & Tech</button>
                  <button onClick={() => setActiveSkillTab("languages")} className={`px-4 py-2 text-sm rounded-lg transition ${activeSkillTab === "languages" ? "bg-primary text-white" : "text-gray-300 hover:text-white"}`}>Languages</button>
                </div>

                {activeSkillTab === "platforms" && renderCards(techPlatforms)}
                {activeSkillTab === "ai" && renderCards([...aiTechnologies, ...technicalSkills])}
                {activeSkillTab === "languages" && renderCards(programmingLanguages)}
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
