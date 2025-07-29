"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Workflow,
  Brain,
  Link,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  TrendingUp,
  Shield,
  Bot,
  Zap,
  Settings,
  GitBranch,
  Database,
  MessageSquare,
} from "lucide-react";

export const Services = () => {
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

  const services = [
    {
      icon: Workflow,
      title: "No-Code AI Automation",
      description:
        "Build powerful automation workflows using Make, Zapier, and n8n integrated with AI models.",
      features: [
        "Make (Integromat) workflow development",
        "Zapier automation setup & optimization",
        "n8n custom workflow creation",
        "AI-powered decision trees",
      ],
      gradient: "from-orange-500 to-orange-400",
    },
    {
      icon: Brain,
      title: "AI Model Integration",
      description:
        "Seamlessly integrate Claude, ChatGPT, OpenAI, and Perplexity into your workflows.",
      features: [
        "OpenAI API integration & optimization",
        "Claude (Anthropic) workflow integration",
        "ChatGPT custom implementations",
        "AI prompt engineering & optimization",
      ],
      gradient: "from-orange-600 to-orange-500",
    },
    {
      icon: Link,
      title: "API & System Integration",
      description:
        "Connect all your business tools through REST APIs, webhooks, and custom integrations.",
      features: [
        "REST API development & integration",
        "Webhook setup & management",
        "Database connections (SQL, NoSQL)",
        "Third-party app integrations",
      ],
      gradient: "from-orange-700 to-orange-600",
    },
  ];

  const platforms = [
    {
      name: "Make (Integromat)",
      icon: "🔧",
      description: "Visual workflow builder with 1000+ integrations",
    },
    {
      name: "Zapier",
      icon: "⚡",
      description: "Easy automation platform with 5000+ app integrations",
    },
    {
      name: "n8n",
      icon: "🔄",
      description: "Open-source automation with unlimited customization",
    },
    {
      name: "AI Models",
      icon: "🤖",
      description: "Claude, ChatGPT, OpenAI, Perplexity integration",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding relative mt-20 mb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-black/80" />

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-orange-500 text-sm font-medium mb-4">
            <Sparkles size={16} className="animate-pulse" />
            <span>AI Automation Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI-Powered Automation
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              {" "}
              That Actually Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized automation solutions using Make, Zapier, n8n, and
            cutting-edge AI models to transform your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-ai h-full flex flex-col">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-6 flex items-center justify-center gap-2"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Platforms Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Automation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Platforms I Master
              </span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Expert-level proficiency in the leading automation platforms and
              AI tools
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center card-ai">
                <CardContent className="p-4">
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {platform.name}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
