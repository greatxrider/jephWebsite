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
  Users,
  Target,
  Building,
  CalendarDays,
  DollarSign,
  User,
  Mail as MailIcon,
  MessageCircle,
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

  // Enhanced AI Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Neural network nodes
    const nodes: Array<{ x: number; y: number; connections: number[] }> = [];
    const numNodes = 12;

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
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.7) {
          node.connections.push(j);
        }
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      // Draw neural network connections
      ctx.strokeStyle = "rgba(255, 107, 53, 0.1)";
      ctx.lineWidth = 1;

      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const targetNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) +
              Math.pow(node.y - targetNode.y, 2)
          );

          if (distance < 200) {
            const opacity = Math.max(0, 0.1 - distance / 2000);
            ctx.strokeStyle = `rgba(255, 107, 53, ${opacity})`;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(targetNode.x, targetNode.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(time + i) * 0.3 + 0.7;
        const size = 3 + pulse * 2;

        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${0.3 + pulse * 0.2})`;
        ctx.fill();

        // Add glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, size + 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${0.1 + pulse * 0.1})`;
        ctx.fill();
      });

      // Subtle grid pattern
      const gridSize = 80;
      ctx.strokeStyle = "rgba(255, 107, 53, 0.02)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Data flow particles
      for (let i = 0; i < 8; i++) {
        const x = (Math.sin(time * 0.5 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 0.3 + i) * 0.5 + 0.5) * canvas.height;
        const size = Math.sin(time + i) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Particle system for additional AI effect
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 0.01;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle when life reaches 1
        if (particle.life >= 1) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
        }

        // Draw particle
        const opacity = Math.sin(particle.life * Math.PI) * 0.3;
        const size = Math.sin(particle.life * Math.PI) * 2 + 1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 107, 53, ${opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

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
      icon: <MailIcon className="w-5 h-5" />,
      label: "Email",
      value: "jephdaligdig98@gmail.com",
      link: "mailto:jephdaligdig98@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+63 975 948 3289",
      link: "tel:+639759483289",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Serving clients worldwide",
      link: null,
    },
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Response",
      description: "2-4 hours during business days",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Team",
      description: "AI specialists & engineers",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative bg-gradient-to-br from-slate-900 via-slate-800 to-black dark:from-slate-900 dark:via-slate-800 dark:to-black light:from-gray-200 light:via-gray-100 light:to-gray-50 overflow-hidden py-20"
    >
      {/* Enhanced AI Background Effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />
      <canvas
        ref={particlesRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-black/80 dark:from-slate-900/70 dark:via-slate-800/50 dark:to-black/80 light:from-gray-200/70 light:via-gray-100/50 light:to-gray-50/80" />

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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-500 text-sm font-medium mb-6 mx-auto">
            <Sparkles size={16} className="animate-pulse" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Transform
            </span>{" "}
            Your Business
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to automate your processes and accelerate growth? Get in touch
            with our AI automation experts today.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Card - AI-Powered Consultation */}
          <Card className="card-ai bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  AI-Powered Consultation
                </h3>
              </div>

              <p className="text-gray-400 mb-8">
                Our AI specialists analyze your business needs and design custom
                automation solutions that deliver measurable results.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium">{info.label}</p>
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-sm text-center mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-xs text-center">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Contact Form */}
          <Card className="card-ai bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Start Your Project
                </h3>
              </div>

              <p className="text-gray-400 mb-8">
                Tell us about your automation needs
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your automation needs..."
                    rows={4}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Status */}
                {submitStatus !== "idle" && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus === "success"
                        ? "bg-green-500/10 border border-green-500/20"
                        : "bg-red-500/10 border border-red-500/20"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )}
                      <p
                        className={`text-sm ${
                          submitStatus === "success"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {submitMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white border-0 px-6 py-3 text-lg font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 flex-shrink-0" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
