"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
import {
  Sparkles,
  Quote,
  Star,
  MessageSquare,
  Brain,
  Zap,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const Testimonials = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // AI Background Animation (Same as Projects section)
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

  const testimonials = [
    {
      name: "Derick",
      role: "CEO, MetaWatt",
      quote:
        "The automation workflows integrated well with our existing systems. Good technical documentation and follow-up support during implementation.",
      avatar: "/testimonialsPhotos/derick-photo.jpg",
      rating: 5,
    },
    {
      name: "Paul",
      role: "CEO, NyxPro",
      quote:
        "Efficient API integrations and reliable automation setup. The solutions handle our data processing requirements effectively.",
      avatar: "/testimonialsPhotos/paul-photo.jpg",
      rating: 5,
    },
    {
      name: "Clint",
      role: "Automation Specialist, MetaWatt",
      quote:
        "Clean workflow design and proper error handling. The Make.com implementations are well-structured and maintainable.",
      avatar: "/testimonialsPhotos/clint-photo.jpg",
      rating: 4,
    },
    {
      name: "Jeah",
      role: "Software Engineer, Nyxpro",
      quote:
        "Good understanding of our tech stack. The AI integrations work as expected and the code quality meets our standards.",
      avatar: "/testimonialsPhotos/jeah-photo.jpg",
      rating: 5,
    },
    {
      name: "Kamran",
      role: "Consultant, Shopidropship",
      quote:
        "Delivered functional automation solutions on schedule. The Zapier workflows handle our inventory management efficiently.",
      avatar: "/testimonialsPhotos/kamran-photo.jpg",
      rating: 4,
    },
    {
      name: "Nayla",
      role: "Director of Growth, RevWised",
      quote:
        "Solid technical implementation. The automated reporting saves us significant time and the data accuracy is reliable.",
      avatar: "/testimonialsPhotos/nayla-photo.jpg",
      rating: 5,
    },
    {
      name: "Pim",
      role: "Co-Founder, Bamboo Works",
      quote:
        "Professional approach to automation development. The n8n workflows are well-documented and handle our business logic correctly.",
      avatar: "/testimonialsPhotos/pim-photo.jpg",
      rating: 4,
    },
    {
      name: "Santiago",
      role: "CFO, Comprapolis SAS",
      quote:
        "Effective automation solutions for our financial processes. Good communication throughout the project and meets technical requirements.",
      avatar: "/testimonialsPhotos/santiago-photo.jpg",
      rating: 5,
    },
    {
      name: "Yvonne",
      role: "CEO, Haivyne",
      quote:
        "Reliable AI automation implementation. The solutions integrate well with our workflow and deliver consistent results.",
      avatar: "/testimonialsPhotos/yvonne-photo.jpg",
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="section-padding relative bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-black mt-20 mb-20">
      {/* AI Background Effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30"
      />

      {/* Floating AI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-400/20 dark:from-orange-500/10 dark:to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-600/20 to-orange-500/20 dark:from-orange-600/10 dark:to-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-700/20 to-orange-600/20 dark:from-orange-700/10 dark:to-orange-600/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100/50 backdrop-blur-sm border border-orange-200 dark:bg-white/5 dark:border-white/10 rounded-full text-orange-500 text-sm font-medium mb-6">
              <Sparkles size={16} className="animate-pulse" />
              <span style={{ color: "var(--text-primary)" }}>
                Client Success Stories
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              What Clients and Colleagues
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                {" "}
                Say About My Work
              </span>
            </h2>

            <p
              className="text-xl text-gray-300 dark:text-gray-300 mb-8 leading-relaxed"
              style={{ color: "var(--text-color)" }}
            >
              Real feedback from partners on reliability, communication, and
              measurable outcomes achieved through AI automation solutions.
            </p>

            {/* AI-Inspired Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    AI-Driven Solutions
                  </h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Intelligent automation that adapts to your business needs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Rapid Implementation
                  </h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Quick deployment with lasting business impact
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Clear Communication
                  </h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Transparent process and regular updates throughout
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="relative">
            <Card className="card-ai h-full min-h-[400px] bg-white/10 backdrop-blur-sm border border-gray-200 dark:bg-white/5 dark:border-white/10">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                {/* Neural Network Decoration */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="w-16 h-16 relative">
                    <div className="absolute inset-0 rounded-full border border-orange-500/30"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-2 left-2 w-1 h-1 bg-orange-400 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-1 h-1 bg-orange-400 rounded-full"></div>
                  </div>
                </div>

                {/* Quote Icon and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-orange-500 opacity-60" />
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-grow flex flex-col justify-center">
                  <p
                    className="text-gray-300 text-lg leading-relaxed mb-8 italic"
                    style={{ color: "var(--text-color)" }}
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-orange-500/20">
                      <Image
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4
                        className="text-white font-semibold text-lg"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p
                        className="text-gray-400"
                        style={{ color: "var(--text-color)" }}
                      >
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-gray-300/70 hover:bg-gray-400/70 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-gray-400 dark:border-white/10"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft
                      className="w-5 h-5"
                      style={{ color: "var(--chevron-color)" }}
                    />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial
                            ? "bg-orange-500"
                            : "bg-gray-400 dark:bg-white/30"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-gray-300/70 hover:bg-gray-400/70 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-gray-400 dark:border-white/10"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight
                      className="w-5 h-5"
                      style={{ color: "var(--chevron-color)" }}
                    />
                  </button>
                </div>

                {/* AI-inspired decoration */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-orange-500 opacity-30">
                  <Brain className="w-4 h-4" />
                  <MessageSquare className="w-4 h-4" />
                  <Zap className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
