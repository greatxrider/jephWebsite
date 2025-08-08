"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import {
  Brain,
  Zap,
  Tag,
  Calendar,
  ExternalLink,
  Github,
  Search,
  Filter,
  Workflow,
  Bot,
  Database,
  RefreshCw,
  Sparkles,
  X,
  Code,
  Globe,
  Cpu,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  tools_used: string[];
  demo_url?: string;
  github_url?: string;
  created_at: string;
  featured?: boolean;
  detailed_description?: string;
  technologies?: {
    name: string;
    icon: string;
    description: string;
  }[];
}

const categories = [
  "All",
  "n8n Automations",
  "Zapier Automations",
  "Make Automations",
];

const formatDateShort = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Removed overflow modal state in favor of hover popover
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mock data for demonstration
  const mockProjects: Project[] = [
    {
      id: "1",
      title: "AI-Powered Customer Support Bot",
      description:
        "Intelligent chatbot that handles customer inquiries with 95% accuracy using NLP and machine learning.",
      detailed_description:
        "This advanced AI chatbot system leverages natural language processing and machine learning algorithms to provide human-like customer support. The system integrates seamlessly with existing CRM platforms and can handle complex queries, route tickets appropriately, and provide instant responses to common questions. Features include sentiment analysis, multi-language support, and continuous learning capabilities.",
      image_url:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "Zapier Automations",
      tools_used: ["OpenAI GPT-4", "Zapier", "Slack", "HubSpot"],
      github_url: "https://github.com/example",
      created_at: "2024-01-15",
      featured: true,
      technologies: [
        {
          name: "OpenAI GPT-4",
          icon: "🤖",
          description: "Advanced language model for natural conversations",
        },
        {
          name: "Zapier",
          icon: "🔗",
          description: "Workflow automation and app integration",
        },
        {
          name: "Slack",
          icon: "💬",
          description: "Team communication and notification system",
        },
        {
          name: "HubSpot",
          icon: "📊",
          description: "CRM integration for customer data management",
        },
      ],
    },
    {
      id: "2",
      title: "Automated Data Processing Pipeline",
      description:
        "End-to-end data processing system that transforms raw data into actionable insights.",
      detailed_description:
        "A comprehensive data processing pipeline that automates the entire data workflow from ingestion to visualization. The system handles data cleaning, transformation, and analysis using advanced algorithms. It includes real-time monitoring, error handling, and automated reporting capabilities. The pipeline is designed to scale with business growth and can process millions of records efficiently.",
      image_url:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "n8n Automations",
      tools_used: ["Python", "Apache Airflow", "PostgreSQL", "AWS"],
      github_url: "https://github.com/example",
      created_at: "2024-01-10",
      featured: true,
      technologies: [
        {
          name: "Python",
          icon: "🐍",
          description: "Core programming language for data processing",
        },
        {
          name: "Apache Airflow",
          icon: "🌪️",
          description: "Workflow orchestration and scheduling",
        },
        {
          name: "PostgreSQL",
          icon: "🗄️",
          description: "Reliable database for data storage",
        },
        {
          name: "AWS",
          icon: "☁️",
          description: "Cloud infrastructure and services",
        },
      ],
    },
    {
      id: "3",
      title: "Smart Email Marketing Automation",
      description:
        "AI-driven email campaigns that personalize content based on user behavior and preferences.",
      detailed_description:
        "An intelligent email marketing system that uses AI to create personalized campaigns based on user behavior, preferences, and engagement patterns. The system automatically segments audiences, optimizes send times, and A/B tests content variations. It includes advanced analytics, predictive modeling, and automated campaign management.",
      image_url:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      category: "Zapier Automations",
      tools_used: ["Mailchimp", "Zapier", "Google Analytics", "Segment"],
      created_at: "2024-01-05",
      technologies: [
        {
          name: "Mailchimp",
          icon: "📧",
          description: "Email marketing platform integration",
        },
        {
          name: "Zapier",
          icon: "🔗",
          description: "Automated workflow connections",
        },
        {
          name: "Google Analytics",
          icon: "📊",
          description: "User behavior tracking and analysis",
        },
        {
          name: "Segment",
          icon: "📈",
          description: "Customer data platform integration",
        },
      ],
    },
    {
      id: "4",
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard providing real-time insights into business metrics and KPIs.",
      detailed_description:
        "A comprehensive real-time analytics dashboard that provides instant insights into business performance. The dashboard includes customizable widgets, interactive charts, and automated alerts. It integrates with multiple data sources and provides drill-down capabilities for detailed analysis. The system supports multiple user roles and permissions.",
      image_url:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Make Automations",
      tools_used: ["Tableau", "Power BI", "Google Data Studio", "SQL"],
      github_url: "https://github.com/example",
      created_at: "2024-01-01",
      technologies: [
        {
          name: "Tableau",
          icon: "📊",
          description: "Advanced data visualization platform",
        },
        {
          name: "Power BI",
          icon: "📈",
          description: "Business intelligence and reporting",
        },
        {
          name: "Google Data Studio",
          icon: "📋",
          description: "Interactive dashboard creation",
        },
        {
          name: "SQL",
          icon: "🗄️",
          description: "Database querying and data extraction",
        },
      ],
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProjects(mockProjects);
      setIsLoading(false);
    }, 1000);
  }, []);

  // AI Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const nodes: Array<{ x: number; y: number; connections: number[] }> = [];
    const numNodes = 8;

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
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = (i + j + 1) % numNodes;
        if (!node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const targetNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) +
              Math.pow(node.y - targetNode.y, 2)
          );
          const opacity = Math.max(0.1, 1 - distance / 300);

          ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time * 0.01 + i) * 0.3 + 0.7;

        // Glow effect
        ctx.shadowColor = "rgba(255, 165, 0, 0.5)";
        ctx.shadowBlur = 20;
        ctx.fillStyle = `rgba(255, 165, 0, ${pulse * 0.6})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow
        ctx.shadowBlur = 0;
      });

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <section
        id="projects"
        className="section-padding relative mt-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="text-gray-400 mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="projects"
        className="section-padding relative bg-gradient-to-br from-slate-900 via-slate-800 to-black dark:from-slate-900 dark:via-slate-800 dark:to-black light:from-gray-200 light:via-gray-100 light:to-gray-50 mt-20 mb-20"
      >
        {/* AI Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-30"
        />

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
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 dark:bg-white/5 dark:border-white/10 light:bg-gray-100/50 light:border-gray-200/50 rounded-full text-orange-500 text-sm font-medium mb-4">
              <Sparkles size={16} className="animate-pulse" />
              <span>AI-Powered Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
              Intelligent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                {" "}
                Automation Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-3xl mx-auto">
              Showcasing cutting-edge AI solutions that transform business
              operations
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Filter className="w-4 h-4 text-gray-400 dark:text-gray-400 light:text-gray-700" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white/5 dark:bg-white/5 light:bg-gray-100/50 text-gray-400 dark:text-gray-400 light:text-gray-800 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-200/50 border border-white/10 dark:border-white/10 light:border-gray-200/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-1 max-w-md mx-auto sm:mx-0">
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-400 light:text-gray-700" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/5 dark:bg-white/5 light:bg-gray-100/50 border border-white/10 dark:border-white/10 light:border-gray-200/50 rounded-lg text-white dark:text-white light:text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-600 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="max-w-7xl mx-auto">
            {/* All Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900">
                      All Projects
                    </h3>
                    <p className="text-gray-400 dark:text-gray-400 light:text-gray-700 text-sm">
                      Complete portfolio of AI automation solutions
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center overflow-visible">
                  {filteredProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-visible group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 w-full max-w-2xl cursor-pointer"
                      onClick={() => openModal(project)}
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image_url}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <CardContent className="p-5 relative">
                        <div className="flex items-center gap-2 mb-3">
                          <Tag className="w-3 h-3 text-orange-500" />
                          <span className="text-orange-500 text-xs font-medium">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white dark:text-white light:text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 dark:text-gray-400 light:text-gray-700 text-sm mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tools_used.slice(0, 3).map((tool, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/5 dark:bg-white/5 light:bg-gray-100/50 text-gray-400 dark:text-gray-400 light:text-gray-800 rounded text-xs border border-white/10 dark:border-white/10 light:border-gray-200/50"
                            >
                              {tool}
                            </span>
                          ))}
                          {project.tools_used.length > 3 && (
                            <div className="relative">
                              <div className="group/tooltip relative inline-block">
                                <span
                                  className="px-2 py-1 bg-white/5 dark:bg-white/5 light:bg-gray-100/50 text-gray-400 dark:text-gray-400 light:text-gray-800 rounded text-xs border border-white/10 dark:border-white/10 light:border-gray-200/50 cursor-default hover:bg-white/10 transition-colors"
                                  aria-label={`${
                                    project.tools_used.length - 3
                                  } more tools`}
                                >
                                  +{project.tools_used.length - 3}
                                </span>
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover/tooltip:block z-[9999] pointer-events-none">
                                  <div className="bg-black/95 backdrop-blur-md border border-white/20 rounded-lg p-3 shadow-2xl min-w-[16rem] max-w-[20rem]">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                      {project.tools_used
                                        .slice(3)
                                        .map((tool, idx2) => (
                                          <span
                                            key={idx2}
                                            className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs border border-orange-500/30 whitespace-nowrap"
                                          >
                                            {tool}
                                          </span>
                                        ))}
                                    </div>
                                    {/* Arrow pointing down */}
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex gap-2">
                          {project.github_url && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github_url!, "_blank");
                              }}
                              className="flex-1 bg-white/5 text-white hover:bg-orange-500 transition-all duration-300 text-xs flex items-center justify-center gap-1"
                            >
                              <Github className="w-3 h-3" />
                              <span>Code</span>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-white/5 dark:bg-white/5 light:bg-gray-100/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-gray-400 dark:text-gray-400 light:text-gray-700" />
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-3">
                  No Projects Found
                </h3>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-700 text-lg mb-8 max-w-md mx-auto">
                  Try adjusting your search or filter criteria to find the
                  perfect AI automation solution
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-base"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-500 text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400 text-sm">
                        {formatDateShort(selectedProject.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Project Image */}
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Details */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Description */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Project Overview
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {selectedProject.detailed_description ||
                      selectedProject.description}
                  </p>

                  {/* Tools Used */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-white mb-3">
                      Tools & Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools_used.map((tool, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  {selectedProject.github_url && (
                    <Button
                      onClick={() =>
                        window.open(selectedProject.github_url!, "_blank")
                      }
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 flex items-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code on GitHub</span>
                    </Button>
                  )}
                </div>

                {/* Right Column - Technologies */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    Technology Stack
                  </h4>
                  <div className="space-y-4">
                    {selectedProject.technologies?.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{tech.icon}</span>
                          <h5 className="text-white font-semibold">
                            {tech.name}
                          </h5>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {tech.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Overflow Tools Popover handled via hover; modal removed */}
    </>
  );
}
