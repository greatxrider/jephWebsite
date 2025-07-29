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
}

const categories = [
  "All",
  "AI Automation",
  "Workflow",
  "Integration",
  "Analytics",
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mock data for demonstration
  const mockProjects: Project[] = [
    {
      id: "1",
      title: "AI-Powered Customer Support Bot",
      description:
        "Intelligent chatbot that handles customer inquiries with 95% accuracy using NLP and machine learning.",
      image_url:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI Automation",
      tools_used: ["OpenAI GPT-4", "Zapier", "Slack", "HubSpot"],
      demo_url: "https://demo.example.com",
      github_url: "https://github.com/example",
      created_at: "2024-01-15",
      featured: true,
    },
    {
      id: "2",
      title: "Automated Data Processing Pipeline",
      description:
        "End-to-end data processing system that transforms raw data into actionable insights.",
      image_url:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Workflow",
      tools_used: ["Python", "Apache Airflow", "PostgreSQL", "AWS"],
      demo_url: "https://demo.example.com",
      github_url: "https://github.com/example",
      created_at: "2024-01-10",
      featured: true,
    },
    {
      id: "3",
      title: "Smart Email Marketing Automation",
      description:
        "AI-driven email campaigns that personalize content based on user behavior and preferences.",
      image_url:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      category: "Integration",
      tools_used: ["Mailchimp", "Zapier", "Google Analytics", "Segment"],
      demo_url: "https://demo.example.com",
      created_at: "2024-01-05",
    },
    {
      id: "4",
      title: "Real-time Analytics Dashboard",
      description:
        "Interactive dashboard providing real-time insights into business metrics and KPIs.",
      image_url:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Analytics",
      tools_used: ["Tableau", "Power BI", "Google Data Studio", "SQL"],
      demo_url: "https://demo.example.com",
      github_url: "https://github.com/example",
      created_at: "2024-01-01",
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
    <section
      id="projects"
      className="section-padding relative mt-20 mb-20 bg-black overflow-hidden"
    >
      {/* AI Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-500 text-sm font-medium mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>AI-Powered Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Intelligent
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              {" "}
              Automation Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing cutting-edge AI solutions that transform business
            operations
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Filter className="w-4 h-4 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-1 max-w-md mx-auto sm:mx-0">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
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
                  <h3 className="text-2xl font-bold text-white">
                    All Projects
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Complete portfolio of AI automation solutions
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 w-full max-w-sm"
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
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-3 h-3 text-orange-500" />
                        <span className="text-orange-500 text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tools_used.slice(0, 3).map((tool, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs border border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                        {project.tools_used.length > 3 && (
                          <span className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs border border-white/10">
                            +{project.tools_used.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {project.demo_url && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              window.open(project.demo_url!, "_blank")
                            }
                            className="flex-1 bg-white/5 border-white/10 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 text-xs flex items-center justify-center gap-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Demo</span>
                          </Button>
                        )}
                        {project.github_url && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              window.open(project.github_url!, "_blank")
                            }
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
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                No Projects Found
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
                Try adjusting your search or filter criteria to find the perfect
                AI automation solution
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

        {/* Professional CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Let's build intelligent solutions that transform your operations
              and drive growth
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base flex items-center justify-center gap-2">
                <span>Start Project</span>
              </Button>
              <Button
                variant="outline"
                className="border-white/10 text-white hover:bg-white/10 px-8 py-3 text-base flex items-center justify-center gap-2"
              >
                <span>View Portfolio</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
