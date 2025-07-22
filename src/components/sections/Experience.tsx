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
      title: "AI Integration Specialist",
      description:
        "Advanced AI model integration with Claude, OpenAI, and Perplexity",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      achievements: [
        "Integrated 15+ AI models into automation workflows",
        "Built intelligent content generation systems",
        "Developed AI-powered decision making logic",
      ],
    },
    {
      year: "2023",
      title: "Senior Automation Engineer",
      description: "Complex multi-platform automation architecture",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      achievements: [
        "Architected 50+ enterprise automation solutions",
        "Implemented advanced API integrations",
        "Optimized workflow performance by 300%",
      ],
    },
    {
      year: "2022",
      title: "No-Code Automation Expert",
      description: "Mastered Make, Zapier, and n8n platforms",
      icon: <Workflow className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      achievements: [
        "Completed 100+ automation projects",
        "Reduced manual work by 80% for clients",
        "Specialized in complex workflow logic",
      ],
    },
    {
      year: "2021",
      title: "API Integration Specialist",
      description: "REST API and webhook automation mastery",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      achievements: [
        "Integrated 200+ different APIs",
        "Built custom webhook handlers",
        "Achieved 99.9% uptime reliability",
      ],
    },
    {
      year: "2020",
      title: "Automation Enthusiast",
      description: "Started journey into business process automation",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      achievements: [
        "First automation workflows created",
        "Learned fundamental automation principles",
        "Helped first 10 clients automate processes",
      ],
    },
  ];

  const skillsProgression = [
    { skill: "AI Integration", level: 95, trend: "+25%" },
    { skill: "Make (Integromat)", level: 98, trend: "+15%" },
    { skill: "Zapier", level: 92, trend: "+20%" },
    { skill: "n8n", level: 90, trend: "+30%" },
    { skill: "API Development", level: 94, trend: "+18%" },
    { skill: "Workflow Design", level: 96, trend: "+12%" },
  ];

  const metrics = [
    {
      label: "Years of Experience",
      value: counters.years,
      suffix: "+",
      icon: <Calendar className="w-8 h-8" />,
      color: "text-orange-500",
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
      label: "Automations Built",
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
      className="section-padding relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-bright/10 to-orange-gold/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-4 animate-neon-glow">
              <Clock size={16} className="animate-neural-pulse" />
              <span className="gradient-text-neon">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text-ai">5+ Years</span> of AI
              Automation
              <span className="gradient-text"> Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple workflows to complex AI-powered automations, discover
              my journey through the evolution of business process automation
              and artificial intelligence integration.
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
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value}
                    {metric.suffix}
                  </div>
                  <p className="text-gray-300 text-sm">{metric.label}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Professional <span className="gradient-text-ai">Timeline</span>
            </h3>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-blue-500 to-purple-500 rounded-full"></div>

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
                            className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-white">
                              {item.title}
                            </h4>
                            <p className="text-orange-500 font-medium">
                              {item.year}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Star className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
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
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Skills <span className="gradient-text-ai">Evolution</span>
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
                        <span className="text-orange-500 font-bold">
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
                          className="bg-gradient-to-r from-orange-500 to-purple-500 h-3 rounded-full transition-all duration-2000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center animate-neural-pulse">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white gradient-text-ai">
                  Ready to Leverage My Experience?
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                With 5+ years of proven expertise in AI automation, I bring deep
                knowledge of Make, Zapier, n8n, and cutting-edge AI models to
                transform your business processes.
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
                Start Your AI Automation Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
