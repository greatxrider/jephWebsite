"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Clock,
  MessageSquare,
  Send,
  Brain,
  Zap,
  Workflow,
  ArrowRight,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  // Enhanced AI Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Neural network nodes
    const nodes: Array<{
      x: number;
      y: number;
      connections: number[];
      pulse: number;
    }> = [];
    const numNodes = 12;

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const numConnections = Math.floor(Math.random() * 3) + 2;
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

      // Draw neural network connections
      nodes.forEach((node, i) => {
        node.pulse += 0.03;

        node.connections.forEach((connectionIndex) => {
          const targetNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) +
              Math.pow(node.y - targetNode.y, 2)
          );
          const opacity = Math.max(0.05, 1 - distance / 300) * 0.3;

          ctx.strokeStyle = `rgba(255, 165, 0, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(node.pulse) * 0.3 + 0.7;
        const size = 3 + pulse * 2;

        // Glow effect
        ctx.shadowColor = "rgba(255, 165, 0, 0.6)";
        ctx.shadowBlur = 15;
        ctx.fillStyle = `rgba(255, 165, 0, ${pulse * 0.5})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
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

  // Particle system for additional depth
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: Math.random(),
        maxLife: Math.random() * 0.5 + 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.008;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle when life reaches max
        if (particle.life >= particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.maxLife = Math.random() * 0.5 + 0.5;
        }

        // Draw particle
        const opacity = Math.sin(particle.life * Math.PI) * 0.3;
        const size = Math.sin(particle.life * Math.PI) * 2 + 1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 165, 0, ${opacity})`;
        ctx.fill();
      });

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      ]);

      if (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
        setSubmitMessage(
          "There was an error sending your message. Please try again or contact me directly."
        );
      } else {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you for your message! I'll get back to you within 24 hours."
        );
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "There was an error sending your message. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@jeph.dev",
      link: "mailto:hello@jeph.dev",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Remote / Global",
      link: null,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  const benefits = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Powered Solutions",
      description: "Custom automation using cutting-edge AI models and tools.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Rapid Implementation",
      description: "Fast deployment with comprehensive testing and support.",
    },
    {
      icon: <Workflow className="w-5 h-5" />,
      title: "Scalable Workflows",
      description: "Future-proof automation that grows with your business.",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative mt-20 mb-20 bg-black overflow-hidden"
    >
      {/* AI Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full opacity-20"
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-500 text-sm font-medium mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>Let's Build AI Automation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              {" "}
              Intelligent Automation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to automate with Make, Zapier, n8n, and cutting-edge AI? Let's
            create intelligent workflows that save time, reduce errors, and
            scale your operations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 px-4">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Send Message
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Get started with your automation project
                    </p>
                  </div>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-400">{submitMessage}</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                      placeholder="Tell me about your automation goals and which AI tools you'd like to integrate (Make, Zapier, n8n, Claude, OpenAI, etc.)..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl h-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Get in Touch
                    </h3>
                    <p className="text-gray-400 text-sm">Contact information</p>
                  </div>
                </div>
                <div className="space-y-6 text-center">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="text-orange-500">{info.icon}</div>
                      <div className="text-center">
                        <p className="text-gray-400 text-sm mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-orange-500 transition-colors text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white text-base">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
