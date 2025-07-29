"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import {
  Brain,
  ArrowRight,
  Network,
  Zap,
  Cpu,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

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
    const numNodes = 15;

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
      const numConnections = Math.floor(Math.random() * 4) + 2;
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = (i + j + 1) % numNodes;
        if (!node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    // Floating orbs
    const orbs: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }> = [];
    for (let i = 0; i < 8; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Data streams
    const dataStreams: Array<{
      x: number;
      y: number;
      particles: Array<{ x: number; y: number; life: number }>;
    }> = [];
    for (let i = 0; i < 5; i++) {
      dataStreams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        particles: [],
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw data streams
      dataStreams.forEach((stream, streamIndex) => {
        // Add new particles
        if (Math.random() > 0.7) {
          stream.particles.push({
            x: stream.x,
            y: stream.y,
            life: 0,
          });
        }

        // Update and draw particles
        stream.particles.forEach((particle, particleIndex) => {
          particle.life += 0.02;
          particle.x += Math.sin(time * 0.01 + streamIndex) * 2;
          particle.y += Math.cos(time * 0.01 + streamIndex) * 2;

          if (particle.life > 1) {
            stream.particles.splice(particleIndex, 1);
          } else {
            const opacity = (1 - particle.life) * 0.4;
            const size = (1 - particle.life) * 3 + 1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 165, 0, ${opacity})`;
            ctx.fill();
          }
        });
      });

      // Draw neural network connections
      nodes.forEach((node, i) => {
        node.pulse += 0.05;

        node.connections.forEach((connectionIndex) => {
          const targetNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - targetNode.x, 2) +
              Math.pow(node.y - targetNode.y, 2)
          );
          const opacity = Math.max(0.05, 1 - distance / 400) * 0.4;

          // Create gradient effect
          const gradient = ctx.createLinearGradient(
            node.x,
            node.y,
            targetNode.x,
            targetNode.y
          );
          gradient.addColorStop(0, `rgba(255, 165, 0, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(255, 140, 0, ${opacity * 0.8})`);
          gradient.addColorStop(1, `rgba(255, 165, 0, ${opacity})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });

      // Draw neural network nodes
      nodes.forEach((node, i) => {
        const pulse = Math.sin(node.pulse) * 0.3 + 0.7;
        const size = 4 + pulse * 3;

        // Outer glow
        ctx.shadowColor = "rgba(255, 165, 0, 0.8)";
        ctx.shadowBlur = 25;
        ctx.fillStyle = `rgba(255, 165, 0, ${pulse * 0.8})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255, 255, 255, ${pulse * 0.9})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw floating orbs
      orbs.forEach((orb, i) => {
        orb.y -= orb.speed;
        if (orb.y < -orb.size) {
          orb.y = canvas.height + orb.size;
        }

        const pulse = Math.sin(time * 0.02 + i) * 0.3 + 0.7;

        // Orb glow
        ctx.shadowColor = "rgba(255, 165, 0, 0.6)";
        ctx.shadowBlur = 40;
        ctx.fillStyle = `rgba(255, 165, 0, ${orb.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * pulse, 0, Math.PI * 2);
        ctx.fill();

        // Orb core
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(255, 255, 255, ${orb.opacity * 0.3})`;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * 0.3 * pulse, 0, Math.PI * 2);
        ctx.fill();
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
    if (!canvas) return;

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
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
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
        particle.life += 0.005;

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
        const opacity = Math.sin(particle.life * Math.PI) * 0.4;
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden mb-20"
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-500 text-sm font-medium tracking-wider">
                AI AUTOMATION SPECIALIST
              </span>
              <Cpu className="w-4 h-4 text-orange-500" />
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                  AI-Powered
                </span>
                <span className="block">Business Automation</span>
              </h1>

              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-lg">
                Transform your business operations with intelligent workflows,
                <span className="text-orange-500 font-medium">
                  {" "}
                  seamless integration
                </span>
                , and cutting-edge AI solutions.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">
                  500+ Successful Automations Built
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">
                  98% Client Satisfaction Rate
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">
                  24/7 System Monitoring & Support
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300"
              >
                <Brain className="mr-3 h-5 w-5" />
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Network className="mr-3 h-5 w-5" />
                View Services
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="space-y-8">
            {/* AI Control Panel */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-orange-500" />
                  <span className="text-orange-500 font-mono text-sm tracking-wider">
                    AI CORE v2.1
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-red-400 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-sm">
                    EFFICIENCY
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[95%] h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full animate-pulse"></div>
                    </div>
                    <span className="text-orange-500 font-mono text-sm">
                      95%
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-sm">
                    AUTOMATION
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="w-full h-full bg-gradient-to-r from-orange-600 to-orange-500 rounded-full animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                    </div>
                    <span className="text-orange-600 font-mono text-sm">
                      100%
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-mono text-sm">
                    UPTIME
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="w-[99%] h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                    <span className="text-orange-400 font-mono text-sm">
                      99.9%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Smart Workflows
                </h3>
                <p className="text-gray-400 text-xs">
                  Intelligent automation that adapts to your business needs.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  AI Integration
                </h3>
                <p className="text-gray-400 text-xs">
                  Seamless integration with leading AI platforms.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-700 to-orange-600 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Analytics
                </h3>
                <p className="text-gray-400 text-xs">
                  Real-time monitoring and performance analytics.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-800 to-orange-700 rounded-lg flex items-center justify-center mb-3">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  Machine Learning
                </h3>
                <p className="text-gray-400 text-xs">
                  Advanced ML models for predictive automation.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-500 mb-1">
                  500+
                </div>
                <div className="text-gray-400 text-xs">Automations</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  98%
                </div>
                <div className="text-gray-400 text-xs">Success Rate</div>
              </div>
              <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-700 mb-1">
                  24/7
                </div>
                <div className="text-gray-400 text-xs">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
