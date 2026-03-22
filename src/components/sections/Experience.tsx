"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Zap,
  Brain,
  Workflow,
  Trophy,
  Code,
  Sparkles,
  ArrowRight,
  Calendar,
  Users,
  Target,
  TrendingUp,
  Bot,
  Rocket,
  Star,
  Award,
  Clock,
  GitBranch,
} from "lucide-react";

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    automations: 0,
  });

  const finalNumbers = {
    years: 5,
    projects: 150,
    clients: 200,
    automations: 500,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");

            // Start counter animation when section comes into view
            if (entry.target.id === "experience-section") {
              animateCounters();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        years: Math.floor(finalNumbers.years * easeOutQuart),
        projects: Math.floor(finalNumbers.projects * easeOutQuart),
        clients: Math.floor(finalNumbers.clients * easeOutQuart),
        automations: Math.floor(finalNumbers.automations * easeOutQuart),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(finalNumbers);
      }
    }, stepDuration);
  };

  const experienceTimeline = [
    {
      year: "2024",
      title: "AI Solutions Architect",
      description:
        "Building AI receptionists, healthcare EMR systems, and SaaS platforms",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500",
      achievements: [
        "Built AI receptionist systems for medical clinics",
        "Developed custom EMR/EHR healthcare platforms",
        "Launched SaaS products with AI-powered features",
      ],
    },
    {
      year: "2023",
      title: "Senior Software Engineer",
      description: "Full-stack development and enterprise AI integration",
      icon: <Rocket className="w-6 h-6" />,
      color: "bg-blue-500",
      achievements: [
        "Architected 50+ web applications and automation solutions",
        "Implemented advanced API integrations and microservices",
        "Built scalable SaaS platforms with multi-tenant architecture",
      ],
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Mastered React, Next.js, and cloud-native development",
      icon: <Workflow className="w-6 h-6" />,
      color: "bg-green-500",
      achievements: [
        "Completed 100+ software and automation projects",
        "Specialized in React, Next.js, and Node.js",
        "Built mobile apps with React Native",
      ],
    },
    {
      year: "2021",
      title: "Backend & API Engineer",
      description: "REST API development, database design, and system architecture",
      icon: <Code className="w-6 h-6" />,
      color: "bg-primary",
      achievements: [
        "Integrated 200+ APIs and third-party services",
        "Designed scalable database architectures",
        "Built custom backend systems and middleware",
      ],
    },
    {
      year: "2020",
      title: "Software Developer",
      description: "Started professional journey in software engineering",
      icon: <Zap className="w-6 h-6" />,
      color: "bg-honey-gold",
      achievements: [
        "First production applications deployed",
        "Learned full-stack development fundamentals",
        "Delivered projects for first 10 clients",
      ],
    },
  ];

  const skillsProgression = [
    { skill: "React / Next.js", level: 96, trend: "+20%" },
    { skill: "AI Integration", level: 95, trend: "+25%" },
    { skill: "Node.js / Python", level: 94, trend: "+18%" },
    { skill: "Healthcare Tech (EMR/EHR)", level: 88, trend: "+35%" },
    { skill: "Automation (Make/n8n/Zapier)", level: 95, trend: "+15%" },
    { skill: "SaaS Architecture", level: 92, trend: "+22%" },
  ];

  const metrics = [
    {
      label: "Years of Experience",
      value: counters.years,
      suffix: "+",
      icon: <Calendar className="w-8 h-8" />,
      color: "text-honey-gold",
    },
    {
      label: "Projects Completed",
      value: counters.projects,
      suffix: "+",
      icon: <Trophy className="w-8 h-8" />,
      color: "text-blue-500",
    },
    {
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+",
      icon: <Users className="w-8 h-8" />,
      color: "text-green-500",
    },
    {
      label: "Solutions Delivered",
      value: counters.automations,
      suffix: "+",
      icon: <Bot className="w-8 h-8" />,
      color: "text-purple-500",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding relative bg-transparent dark:bg-black"
    >
      <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-honey-gold/30 rounded-none clip-hex-pointy shadow-[0_0_15px_rgba(255,215,0,0.1)] mb-6 mx-auto animate-neon-glow">
              <Clock size={16} className="text-honey-gold animate-neural-pulse" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              <span className="text-primary">5+ Years</span> of Software
              Engineering
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-honey-gold to-orange-light">Excellence</span>
            </h2>
            <p
              className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto border-t border-b border-honey-gold/20 py-4 mt-6"
              style={{ color: "var(--text-color)" }}
            >
              Web development, SaaS, AI automation, AI receptionists, and
              healthcare systems. Here's my journey through software
              engineering.
            </p>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="animate-on-scroll">
              <Card className="card-ai h-full">
                <CardContent className="p-6 text-center">
                  <div
                    className={`${metric.color} mb-4 flex justify-center animate-neural-pulse`}
                  >
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {metric.value}
                    {metric.suffix}
                  </div>
                  <p
                    className="text-gray-300 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Professional <span className="text-primary">Timeline</span>
            </h3>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary rounded-full"></div>

            {experienceTimeline.map((item, index) => (
              <div key={index} className="animate-on-scroll">
                <div
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-5/12">
                    <Card className="card-ai h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-12 h-12 ${item.color} clip-hex flex items-center justify-center text-white`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">
                              {item.title}
                            </h4>
                            <p className="text-honey-gold font-medium">
                              {item.year}
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-gray-300 mb-4"
                          style={{ color: "var(--text-color)" }}
                        >
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-honey-gold mt-1 flex-shrink-0" />
                              <span
                                className="text-gray-300 text-sm"
                                style={{ color: "var(--text-color)" }}
                              >
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-primary clip-hex flex items-center justify-center text-white font-bold text-sm">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Progression */}
        <div className="mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Skills <span className="text-primary">Evolution</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {skillsProgression.map((skill, index) => (
              <div key={index} className="animate-on-scroll">
                <Card className="card-ai">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-white">
                        {skill.skill}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className="text-honey-gold font-bold">
                          {skill.level}%
                        </span>
                        <div className="flex items-center gap-1 text-green-500 text-sm">
                          <TrendingUp className="w-4 h-4" />
                          <span>{skill.trend}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-primary h-3 rounded-full transition-all duration-2000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-primary/20 rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary clip-hex flex items-center justify-center animate-neural-pulse">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Let's Work Together
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                5+ years building web apps, SaaS products, AI receptionists,
                and automation systems. I can help you ship your next project.
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
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
