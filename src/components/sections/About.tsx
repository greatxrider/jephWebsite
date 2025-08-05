"use client";

import { useEffect, useRef } from "react";
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

  const automationPlatforms = [
    {
      name: "Make (Integromat)",
      logo: "/logo/make-logo.png",
      description: "Advanced workflow automation",
      expertise: "Expert",
    },
    {
      name: "Zapier",
      logo: "/logo/Zapier_logo.svg.png",
      description: "Multi-app integrations",
      expertise: "Expert",
    },
    {
      name: "n8n",
      logo: "/logo/N8n-logo-new.svg.png",
      description: "Self-hosted automation",
      expertise: "Expert",
    },
    {
      name: "Automation Anywhere",
      logo: "/logo/ai-models-logo.png", // Using AI models logo as placeholder
      description: "RPA & process automation",
      expertise: "Advanced",
    },
    {
      name: "UiPath",
      logo: "/logo/ai-models-logo.png", // Using AI models logo as placeholder
      description: "Enterprise RPA solutions",
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
      logo: "/logo/javascript-logo.png", // You can add actual JS logo
      description: "Full-stack development & automation",
      expertise: "Expert",
      type: "Primary",
      color: "from-yellow-500 to-yellow-400",
    },
    {
      name: "Python",
      logo: "/logo/python-logo.png", // You can add actual Python logo
      description: "AI/ML, automation & backend development",
      expertise: "Expert",
      type: "Primary",
      color: "from-blue-500 to-blue-400",
    },
    {
      name: "C#",
      logo: "/logo/csharp-logo.png", // You can add actual C# logo
      description: "Enterprise applications & .NET development",
      expertise: "Advanced",
      type: "Secondary",
      color: "from-purple-500 to-purple-400",
    },
    {
      name: "C++",
      logo: "/logo/cpp-logo.png", // You can add actual C++ logo
      description: "System programming & performance optimization",
      expertise: "Advanced",
      type: "Secondary",
      color: "from-pink-500 to-pink-400",
    },
    {
      name: "C",
      logo: "/logo/c-logo.png", // You can add actual C logo
      description: "Low-level programming & embedded systems",
      expertise: "Intermediate",
      type: "Secondary",
      color: "from-gray-500 to-gray-400",
    },
  ];

  const valuePropositions = [
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Get your automation live in days, not months",
      color: "from-green-500 to-green-400",
    },
    {
      icon: Target,
      title: "ROI Focused",
      description: "Every solution designed to maximize your return",
      color: "from-blue-500 to-blue-400",
    },
    {
      icon: Shield,
      title: "Enterprise Ready",
      description: "Scalable solutions that grow with your business",
      color: "from-purple-500 to-purple-400",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description: "Continuous optimization and maintenance",
      color: "from-orange-500 to-orange-400",
    },
  ];

  const workExperience = [
    {
      company: "Easy Outsource",
      position: "AI Automation Specialist",
      period: "Jun 2025 - July 2025",
      description:
        "Streamlined outsourcing processes through intelligent automation",
      logo: "/companyLogos/easyoutsource-logo.png",
      color: "from-indigo-500 to-indigo-400",
    },
    {
      company: "MetaWatt",
      position: "AI Automation Specialist",
      period: "Feb 2025 - Present",
      description:
        "Specialized in energy sector automation and AI-powered optimization",
      logo: "/companyLogos/metawatt-logo.png",
      color: "from-yellow-500 to-yellow-400",
    },
    {
      company: "Haivyne",
      position: "AI Automation Specialist",
      period: "Apr 2025 - Present",
      description:
        "Creating intelligent automation workflows and AI integration solutions",
      logo: "/companyLogos/haivyne-logo.png",
      color: "from-pink-500 to-pink-400",
    },
    {
      company: "Bamboo Works",
      position: "AI Automation Specialist",
      period: "Dec 2024 - May 2025",
      description:
        "Developed and implemented AI automation solutions for business processes",
      logo: "/companyLogos/bambooworks-logo.png",
      color: "from-orange-500 to-orange-400",
    },
    {
      company: "RevWised",
      position: "AI Automation Specialist",
      period: "Jun 2024 - Sep 2024",
      description:
        "Specialized in AI-powered workflow automation and process optimization",
      logo: "/companyLogos/revwise-logo.png",
      color: "from-purple-500 to-purple-400",
    },
    {
      company: "Nyxpro",
      position: "CTO",
      period: "Oct 2023 - Present",
      description:
        "Chief Technology Officer overseeing technical strategy and development",
      logo: "/companyLogos/nyxpro-logo.jpg",
      color: "from-green-500 to-green-400",
    },
    {
      company: "Nyxpro",
      position: "CoFounder",
      period: "Nov 2021 - Present",
      description:
        "Co-founded and led strategic initiatives for technology innovation",
      logo: "/companyLogos/nyxpro-logo.jpg",
      color: "from-blue-500 to-blue-400",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding relative bg-gradient-to-br from-slate-900 via-slate-800 to-black dark:from-slate-900 dark:via-slate-800 dark:to-black light:from-gray-200 light:via-gray-100 light:to-gray-50 mt-20 mb-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-12">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 dark:bg-white/5 dark:border-white/10 light:bg-gray-100/50 light:border-gray-200/50 rounded-full text-orange-500 text-sm font-medium mb-6">
              <Sparkles size={16} className="animate-pulse" />
              <span>AI Automation Expert</span>
            </div>

            {/* 2-Column Header Layout */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Main Headline */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
                  Connecting Intelligence with
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                    {" "}
                    Automation Excellence
                  </span>
                </h2>
              </div>

              {/* Right Column - Description */}
              <div>
                <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-800 leading-relaxed">
                  I&apos;m a specialized AI Automation Engineer who transforms
                  business operations using no-code platforms integrated with
                  cutting-edge AI models.
                </p>
                <p className="text-xl text-orange-500 font-semibold mt-4 leading-relaxed">
                  I&apos;ll automate your manual workflows — or you don&apos;t
                  pay.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="mb-12 animate-on-scroll">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white dark:text-white light:text-gray-900">
              Work Experience
            </h3>
          </div>

          <div className="space-y-4">
            {workExperience.map((job, index) => (
              <div key={index} className="relative group">
                {/* Professional LinkedIn-style card */}
                <Card className="card-ai bg-white/60 backdrop-blur-sm border border-white/40 dark:bg-white/40 dark:border-white/30 light:bg-gray-100/90 light:border-gray-300/80 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <CardContent className="p-4 relative z-10">
                    <div className="flex items-start gap-3">
                      {/* Company Logo */}
                      <div className="w-12 h-12 relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-lg blur-sm"></div>
                        <Image
                          src={job.logo}
                          alt={job.company}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full rounded-lg relative z-10"
                        />
                      </div>

                      {/* Job Details */}
                      <div className="flex-1 min-w-0">
                        {/* Position and Company */}
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1">
                            <h4 className="text-white dark:text-white light:text-gray-900 font-bold text-lg mb-1 group-hover:text-orange-400 transition-colors duration-300">
                              {job.position}
                            </h4>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-orange-400 font-semibold text-base">
                                {job.company}
                              </span>
                              <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                            </div>
                          </div>

                          {/* Status Badge */}
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                job.period.includes("Present")
                                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                  : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                              }`}
                            >
                              {job.period.includes("Present")
                                ? "Current"
                                : "Previous"}
                            </span>
                          </div>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-400 dark:text-gray-400 light:text-gray-800 text-xs font-medium">
                            {job.period}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-3">
                          {job.description}
                        </p>

                        {/* Skills/Tags */}
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-0.5 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full border border-orange-500/20">
                            AI Automation
                          </span>
                          <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                            Workflow Design
                          </span>
                          <span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
                            System Integration
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Subtle progress indicator */}
                    <div className="mt-3 h-0.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${job.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: "0%",
                          animation: "progressFill 2s ease-out forwards",
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
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
                    className={`w-12 h-12 bg-gradient-to-br ${prop.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <prop.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{prop.title}</h3>
                  <p className="text-gray-400 text-sm">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="space-y-8">
          {/* Automation Platforms */}
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Automation Platforms
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {automationPlatforms.map((platform, index) => (
                <Card
                  key={index}
                  className="card-ai hover:border-orange-500/50 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 relative flex-shrink-0">
                        <Image
                          src={platform.logo}
                          alt={platform.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">
                          {platform.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {platform.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-orange-500 font-medium">
                        {platform.expertise}
                      </span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Technologies */}
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">AI Technologies</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiTechnologies.map((tech, index) => (
                <Card
                  key={index}
                  className="card-ai hover:border-purple-500/50 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 relative flex-shrink-0">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">
                          {tech.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {tech.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-purple-500 font-medium">
                        {tech.expertise}
                      </span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Technical Expertise
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <Card
                  key={index}
                  className="card-ai hover:border-blue-500/50 transition-all duration-300 bg-white/70 backdrop-blur-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 relative flex-shrink-0">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">
                          {skill.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-500 font-medium">
                        {skill.expertise}
                      </span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-400 rounded-full flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Programming Languages
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {programmingLanguages.map((lang, index) => (
                <Card
                  key={index}
                  className={`card-ai hover:border-${
                    lang.color.split("-")[1]
                  }-500/50 transition-all duration-300 bg-white/70 backdrop-blur-sm`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${lang.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm">
                          {lang.name}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {lang.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-medium ${
                          lang.type === "Primary"
                            ? "text-green-500"
                            : lang.type === "Secondary"
                            ? "text-blue-500"
                            : "text-gray-500"
                        }`}
                      >
                        {lang.expertise}
                      </span>
                      <div className="flex items-center gap-1">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            lang.type === "Primary"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {lang.type}
                        </span>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center animate-on-scroll">
          <Card className="card-ai bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-orange-500/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-orange-500" />
                <h3 className="text-2xl font-bold text-white">
                  Ready to Transform Your Business?
                </h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help you automate your processes,
                integrate AI into your workflows, and create solutions that
                drive real business value.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2 text-orange-500">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-2 text-orange-500">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-orange-500">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm font-medium">Ongoing Support</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
