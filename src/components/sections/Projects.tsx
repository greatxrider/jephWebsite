"use client";

import React, { useState, useEffect } from "react";
import { HoneycombBackground } from "@/components/ui/HoneycombBackground";
import Image from "next/image";
import Link from "next/link";
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
  ArrowRight,
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
  "Web & SaaS",
  "AI Solutions",
  "Healthcare",
  "Automation",
];

const formatDateShort = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};

export default function Projects({
  showSeeMore = true,
}: {
  showSeeMore?: boolean;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFullImage, setShowFullImage] = useState(false);
  // Removed overflow modal state in favor of hover popover

  // Mock data for demonstration
  const mockProjects: Project[] = [
    {
      id: "1",
      title: "AI Receptionist for Medical Clinic",
      description:
        "AI-powered virtual receptionist handling patient inquiries, appointment booking, and triage with 95% accuracy.",
      detailed_description:
        "Built an intelligent AI receptionist system for a medical clinic that handles patient calls, books appointments, answers FAQs, and performs basic triage. Integrates with the clinic's EMR system for real-time availability and patient records.",
      image_url:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI Solutions",
      tools_used: ["OpenAI GPT-4", "Next.js", "Twilio", "Supabase"],
      github_url: "https://github.com/example",
      created_at: "2024-01-15",
      featured: true,
      technologies: [
        { name: "OpenAI GPT-4", icon: "🤖", description: "Natural language understanding for patient conversations" },
        { name: "Next.js", icon: "⚡", description: "Full-stack web application framework" },
        { name: "Twilio", icon: "📞", description: "Voice and SMS communication APIs" },
        { name: "Supabase", icon: "🗄️", description: "Backend database and real-time subscriptions" },
      ],
    },
    {
      id: "2",
      title: "Healthcare EMR Platform",
      description:
        "Custom electronic medical records system with patient management, clinical documentation, and billing.",
      detailed_description:
        "A comprehensive EMR platform built for a network of private clinics. Features include patient records management, clinical documentation, appointment scheduling, e-prescribing, lab integration, and automated billing. HIPAA-compliant architecture with role-based access control.",
      image_url:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      category: "Healthcare",
      tools_used: ["Next.js", "PostgreSQL", "Supabase", "React"],
      github_url: "https://github.com/example",
      created_at: "2024-01-10",
      featured: true,
      technologies: [
        { name: "Next.js", icon: "⚡", description: "Full-stack React framework" },
        { name: "PostgreSQL", icon: "🗄️", description: "HIPAA-compliant database" },
        { name: "Supabase", icon: "🔐", description: "Auth and real-time backend" },
        { name: "React", icon: "⚛️", description: "Interactive clinical UI components" },
      ],
    },
    {
      id: "3",
      title: "SaaS Analytics Dashboard",
      description:
        "Multi-tenant SaaS platform with real-time analytics, user management, and Stripe billing integration.",
      detailed_description:
        "A white-label SaaS analytics dashboard with multi-tenant architecture, real-time data visualization, role-based access, Stripe subscription billing, and automated reporting. Built to handle thousands of concurrent users.",
      image_url:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Web & SaaS",
      tools_used: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"],
      github_url: "https://github.com/example",
      created_at: "2024-01-05",
      technologies: [
        { name: "Next.js", icon: "⚡", description: "Server-side rendered React application" },
        { name: "Tailwind CSS", icon: "🎨", description: "Responsive utility-first styling" },
        { name: "Stripe", icon: "💳", description: "Subscription billing and payments" },
        { name: "PostgreSQL", icon: "🗄️", description: "Multi-tenant database architecture" },
      ],
    },
    {
      id: "4",
      title: "Business Automation Suite",
      description:
        "End-to-end workflow automation handling lead gen, CRM sync, onboarding, and reporting across 20+ tools.",
      detailed_description:
        "A comprehensive business automation suite connecting 20+ tools via Make and n8n. Handles lead capture from multiple sources, automatic CRM updates, client onboarding workflows, automated reporting, and team notifications. Reduced manual work by 80%.",
      image_url:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop",
      category: "Automation",
      tools_used: ["Make", "n8n", "HubSpot", "Slack", "OpenAI"],
      github_url: "https://github.com/example",
      created_at: "2024-01-01",
      technologies: [
        { name: "Make", icon: "⚙️", description: "Visual workflow automation platform" },
        { name: "n8n", icon: "🔄", description: "Self-hosted automation engine" },
        { name: "HubSpot", icon: "📊", description: "CRM and sales pipeline management" },
        { name: "OpenAI", icon: "🤖", description: "AI-powered lead scoring and content" },
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

  const displayedProjects = showSeeMore
    ? filteredProjects.slice(0, 6)
    : filteredProjects;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setShowFullImage(false);
  };

  if (isLoading) {
    return (
      <section
        id="projects"
        className="section-padding relative mt-20 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-honey-gold mx-auto"></div>
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
        className="section-padding relative bg-[#FFFEF7] dark:bg-black mt-20 mb-20"
      >
        {/* Honeycomb Background */}
        <HoneycombBackground variant="swarm" density="low" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/40 dark:bg-black/40 backdrop-blur-md border border-honey-gold/30 rounded-none clip-hex-pointy shadow-[0_0_15px_rgba(255,215,0,0.1)] mb-6 mx-auto">
              <Sparkles size={16} className="text-honey-gold" />
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Project Portfolio</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white dark:text-white mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Featured
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-primary via-honey-gold to-orange-light">
                Projects & Solutions
              </span>
            </h2>
            <p
              className="text-lg md:text-xl text-gray-400 dark:text-gray-400 font-light max-w-4xl mx-auto border-t border-b border-honey-gold/20 py-4 mt-6"
              style={{ color: "var(--text-color)" }}
            >
              Web apps, SaaS platforms, AI receptionists, and automation systems I've built for clients
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 w-full">
            <div className="flex flex-wrap items-center gap-3">
              <Filter className="w-4 h-4 text-gray-400 dark:text-gray-400" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${selectedCategory === category
                      ? "bg-primary text-white shadow-lg shadow-honey-gold/25"
                      : "bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400 hover:bg-white/10 dark:hover:bg-white/10 border border-white/10 dark:border-white/10"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 rounded-lg text-white dark:text-white placeholder-gray-400 dark:placeholder-gray-400 text-sm focus:outline-none focus:border-honey-gold focus:ring-1 focus:ring-honey-gold"
              />
            </div>
          </div>

          {/* Projects Grid */}
          <div className="w-full">
            {/* All Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 justify-items-stretch">
                  {displayedProjects.map((project) => (
                    <Card
                      key={project.id}
                      className="card backdrop-blur-sm rounded-xl overflow-visible group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-honey-gold/10 cursor-pointer flex flex-col w-full h-full"
                      onClick={() => openModal(project)} // Card click handler
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image_url}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                      <CardContent className="p-6 relative flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-4">
                            <Tag className="w-4 h-4 text-honey-gold" />
                            <span className="text-honey-gold text-sm font-medium">
                              {project.category}
                            </span>
                          </div>
                          <h3
                            className="text-xl font-bold text-white dark:text-white mb-3"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {project.title}
                          </h3>
                          <p
                            className="text-gray-400 dark:text-gray-400 text-base mb-4"
                            style={{ color: "var(--text-color)" }}
                          >
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tools_used
                              .slice(0, 3)
                              .map((tool, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1.5 bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400 rounded text-sm border border-white/10 dark:border-white/10"
                                >
                                  {tool}
                                </span>
                              ))}
                            {project.tools_used.length > 3 && (
                              <div className="relative">
                                <div className="group/tooltip relative inline-block">
                                  <span
                                    className="px-3 py-1.5 bg-white/5 dark:bg-white/5 text-gray-400 dark:text-gray-400 rounded text-sm border border-white/10 dark:border-white/10 cursor-default hover:bg-white/10 transition-colors"
                                    aria-label={`${project.tools_used.length - 3
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
                                              className="px-2 py-1 bg-honey-gold/20 text-honey-gold rounded-full text-xs border border-honey-gold/30 whitespace-nowrap"
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
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="mt-auto pt-4 space-y-3">
                          <Button
                            onClick={() => openModal(project)}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-honey-gold/25 flex items-center justify-center gap-2 group"
                          >
                            <span>View Details</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>

                          {project.github_url && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github_url!, "_blank");
                              }}
                              className="w-full bg-white/5 text-white hover:bg-honey-gold/20 transition-all duration-300 text-sm flex items-center justify-center gap-2 border border-white/10 hover:border-honey-gold/30"
                            >
                              <Github className="w-4 h-4 text-white" />
                              <span className="text-white">View Code</span>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {showSeeMore && filteredProjects.length > 6 && (
                  <div className="flex justify-center mt-10">
                    <Link href="/projects">
                      <Button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-honey-gold/25 flex items-center justify-center gap-2">
                        <span>See More Projects</span>
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-white/5 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-12 h-12 text-gray-400 dark:text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white dark:text-white mb-3">
                  No Projects Found
                </h3>
                <p className="text-gray-400 dark:text-gray-400 text-lg mb-8 max-w-md mx-auto">
                  Try adjusting your search or filter criteria to find the
                  project you're looking for
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 text-base"
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
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-900 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "var(--bg-card)" }}
          >
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary clip-hex flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-honey-gold" />
                      <span className="text-honey-gold text-sm font-medium">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        •
                      </span>
                      <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {formatDateShort(selectedProject.created_at)}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-700 dark:text-white" />
                </button>
              </div>

              {/* Project Image (automation schematic) */}
              <div
                className="relative w-full h-64 mb-6 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setShowFullImage(true)}
              >
                <Image
                  src={selectedProject.image_url}
                  alt={selectedProject.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Overview
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedProject.detailed_description ||
                        selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="grid gap-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                      {(selectedProject.tools_used.slice(0, 4).length
                        ? selectedProject.tools_used.slice(0, 4)
                        : [
                          "Seamless integrations",
                          "Automated workflows",
                          "Scalable design",
                          "Real-time insights",
                        ]
                      ).map((item, idx) => (
                        <li key={idx} className="marker:text-honey-gold">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How It Works */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      How It Works
                    </h4>
                    <ol className="grid gap-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
                      <li className="marker:text-honey-gold">
                        Trigger captures an event or message.
                      </li>
                      <li className="marker:text-honey-gold">
                        Logic layer processes and enriches data.
                      </li>
                      <li className="marker:text-honey-gold">
                        AI/automation nodes make decisions and route tasks.
                      </li>
                      <li className="marker:text-honey-gold">
                        Results sync to connected apps and CRM.
                      </li>
                    </ol>
                  </div>

                  {/* GitHub Link */}
                  {selectedProject.github_url && (
                    <Button
                      onClick={() =>
                        window.open(selectedProject.github_url!, "_blank")
                      }
                      className="bg-primary hover:bg-primary-dark text-white px-6 py-3 flex items-center gap-2"
                    >
                      <Github className="w-5 h-5 text-white" />
                      <span className="text-white">View Code on GitHub</span>
                    </Button>
                  )}
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Business Impact */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Business Impact
                    </h4>
                    <ul className="grid gap-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                      <li className="marker:text-honey-gold">
                        Reduced manual workload and response times.
                      </li>
                      <li className="marker:text-honey-gold">
                        Improved lead quality and conversion rates.
                      </li>
                      <li className="marker:text-honey-gold">
                        Higher data accuracy with automated sync.
                      </li>
                      <li className="marker:text-honey-gold">
                        Scales without additional headcount.
                      </li>
                    </ul>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Technical Specifications
                    </h4>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools_used.map((tool, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      {selectedProject.technologies &&
                        selectedProject.technologies.length > 0 && (
                          <div className="grid gap-3">
                            {selectedProject.technologies.map((tech, index) => (
                              <div
                                key={index}
                                className="rounded-lg p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                              >
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{tech.icon}</span>
                                  <div>
                                    <p className="text-gray-900 dark:text-white font-semibold">
                                      {tech.name}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                                      {tech.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Full Image Modal */}
      {showFullImage && selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setShowFullImage(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={() => setShowFullImage(false)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors z-10"
              aria-label="Close full image view"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <Image
              src={selectedProject.image_url}
              alt={selectedProject.title}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
      {/* Overflow Tools Popover handled via hover; modal removed */}
    </>
  );
}
