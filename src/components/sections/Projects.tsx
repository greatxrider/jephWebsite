"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { supabase, Project, isSupabaseConfigured } from "@/lib/supabase";
import { formatDateShort } from "@/lib/dateUtils";
import {
  ExternalLink,
  Github,
  Sparkles,
  Calendar,
  Tag,
  ArrowRight,
  Filter,
  Search,
} from "lucide-react";

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for development
  const mockProjects: Project[] = [
    {
      id: "1",
      title: "AI-Powered Lead Generation with Make & OpenAI",
      description:
        "Built an intelligent lead generation system using Make that automatically finds prospects, enriches data with AI, and sends personalized outreach emails using OpenAI's GPT models.",
      image_url: "https://picsum.photos/600/400?random=1",
      tools_used: [
        "Make",
        "OpenAI API",
        "LinkedIn Sales Navigator",
        "HubSpot",
        "Apollo.io",
      ],
      demo_url: "https://demo.example.com",
      github_url: "https://github.com/example",
      category: "Lead Generation",
      featured: true,
      created_at: "2024-01-15T00:00:00Z",
      updated_at: "2024-01-15T00:00:00Z",
    },
    {
      id: "2",
      title: "Intelligent Customer Support with n8n & Claude",
      description:
        "Developed a sophisticated customer support automation using n8n and Claude that handles 90% of inquiries, escalates complex issues, and maintains conversation context.",
      image_url: "https://picsum.photos/600/400?random=2",
      tools_used: [
        "n8n",
        "Claude API",
        "Intercom",
        "Notion",
        "Slack",
        "PostgreSQL",
      ],
      demo_url: "https://demo.example.com",
      github_url: null,
      category: "Customer Support",
      featured: true,
      created_at: "2024-01-10T00:00:00Z",
      updated_at: "2024-01-10T00:00:00Z",
    },
    {
      id: "3",
      title: "Content Marketing Automation with Zapier & ChatGPT",
      description:
        "Created a complete content marketing pipeline using Zapier that generates, optimizes, and schedules social media content across multiple platforms using ChatGPT.",
      image_url: "https://picsum.photos/600/400?random=3",
      tools_used: [
        "Zapier",
        "ChatGPT API",
        "Buffer",
        "Canva",
        "Airtable",
        "Google Sheets",
      ],
      demo_url: "https://demo.example.com",
      github_url: "https://github.com/example",
      category: "Content Marketing",
      featured: false,
      created_at: "2024-01-05T00:00:00Z",
      updated_at: "2024-01-05T00:00:00Z",
    },
    {
      id: "4",
      title: "E-commerce Order Processing with Make & Perplexity",
      description:
        "Built an intelligent e-commerce automation that processes orders, handles inventory, generates invoices, and provides AI-powered customer insights using Perplexity.",
      image_url: "https://picsum.photos/600/400?random=4",
      tools_used: [
        "Make",
        "Perplexity AI",
        "Shopify",
        "QuickBooks",
        "Mailchimp",
        "Slack",
      ],
      demo_url: "https://demo.example.com",
      github_url: null,
      category: "E-commerce",
      featured: true,
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
    {
      id: "5",
      title: "HR Recruitment Pipeline with n8n & OpenAI",
      description:
        "Automated the entire recruitment process using n8n with OpenAI for resume screening, candidate matching, interview scheduling, and personalized communication.",
      image_url: "https://picsum.photos/600/400?random=5",
      tools_used: [
        "n8n",
        "OpenAI API",
        "Calendly",
        "BambooHR",
        "Gmail",
        "Zoom",
      ],
      demo_url: "https://demo.example.com",
      github_url: "https://github.com/example",
      category: "HR & Recruitment",
      featured: false,
      created_at: "2023-12-20T00:00:00Z",
      updated_at: "2023-12-20T00:00:00Z",
    },
    {
      id: "6",
      title: "Financial Reporting Dashboard with Zapier & Claude",
      description:
        "Created an automated financial reporting system using Zapier and Claude that consolidates data from multiple sources and generates intelligent insights and forecasts.",
      image_url: "https://picsum.photos/600/400?random=6",
      tools_used: [
        "Zapier",
        "Claude API",
        "QuickBooks",
        "Stripe",
        "Google Sheets",
        "Slack",
      ],
      demo_url: "https://demo.example.com",
      github_url: null,
      category: "Financial Analytics",
      featured: false,
      created_at: "2023-12-15T00:00:00Z",
      updated_at: "2023-12-15T00:00:00Z",
    },
  ];

  const fetchProjects = useCallback(async () => {
    try {
      // Only try to fetch from Supabase if it's properly configured
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.warn("Supabase error, using mock data:", error);
          setProjects(mockProjects);
        } else {
          setProjects(data || mockProjects);
        }
      } else {
        // Supabase not configured, use mock data silently
        console.info("Supabase not configured, using mock project data");
        setProjects(mockProjects);
      }
    } catch {
      console.warn("Database connection failed, using mock data");
      setProjects(mockProjects);
    } finally {
      setLoading(false);
    }
  }, [mockProjects]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tools_used.some((tool) =>
        tool.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-700 rounded w-96 mx-auto mb-8"></div>
              <div className="grid lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-800 rounded-lg h-96"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
            <Sparkles size={16} />
            AI Automation Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real AI Automations for
            <span className="gradient-text"> Real Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how I&apos;ve transformed business operations using Make,
            Zapier, n8n, and cutting-edge AI models like Claude, ChatGPT,
            OpenAI, and Perplexity.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`project-category-button px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-orange-500" />
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="card-ai h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-500 text-sm font-medium">
                        {project.category}
                      </span>
                      <Calendar className="w-4 h-4 text-gray-400 ml-auto" />
                      <span className="text-gray-400 text-sm">
                        {formatDateShort(project.created_at)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools_used.map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {project.demo_url && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            window.open(project.demo_url!, "_blank")
                          }
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            window.open(project.github_url!, "_blank")
                          }
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8">All Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <Card key={project.id} className="card-ai h-full">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-500 text-sm font-medium">
                        {project.category}
                      </span>
                      <Calendar className="w-4 h-4 text-gray-400 ml-auto" />
                      <span className="text-gray-400 text-sm">
                        {formatDateShort(project.created_at)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tools_used.slice(0, 3).map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools_used.length > 3 && (
                        <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                          +{project.tools_used.length - 3} more
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
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.github_url && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            window.open(project.github_url!, "_blank")
                          }
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Your AI Automation?
              </h3>
              <p className="text-gray-300 mb-6">
                Let&apos;s create intelligent automation workflows using Make,
                Zapier, n8n, and modern AI tools that transform your business
                operations.
              </p>
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
                className="group"
              >
                Start AI Automation Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
