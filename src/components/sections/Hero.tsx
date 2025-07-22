"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight, Brain, Cpu, Zap, Network, Eye } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // AI Neural Network Animation
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

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      pulse: number;
    }> = [];

    // Create neural nodes
    for (let i = 0; i < 15; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((other, j) => {
          if (i !== j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = (1 - distance / 150) * 0.3;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(0, 191, 255, ${opacity})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });

        // Draw node
        const pulseSize = 2 + Math.sin(node.pulse) * 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${
          0.8 + Math.sin(node.pulse) * 0.2
        })`;
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00BFFF";
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = "#00BFFF";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-black"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,191,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,191,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
        style={{ mixBlendMode: "screen" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* AI Status Badge */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-medium tracking-wider">
                  AI SYSTEMS ONLINE
                </span>
                <Eye className="w-4 h-4 text-cyan-400" />
              </div>
            </div>

            {/* Main Title */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">
                  AI
                </span>
                <span className="block">AUTOMATION</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  AGENCY
                </span>
              </h1>
            </div>

            {/* Tagline */}
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
                Building the{" "}
                <span className="text-cyan-400 font-medium">future</span> of
                <br />
                intelligent automation
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row gap-4"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white border-0 px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Brain className="mr-3 h-5 w-5" />
                Initialize AI
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("services")}
                className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Network className="mr-3 h-5 w-5" />
                Explore Systems
              </Button>
            </div>
          </div>

          {/* Right Visual Panel */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              {/* AI Control Panel */}
              <div className="bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                    <span className="text-cyan-400 font-mono text-sm tracking-wider">
                      NEURAL CORE v2.1
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
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-[90%] h-full bg-gradient-to-r from-cyan-500 to-green-400 rounded-full animate-pulse"></div>
                      </div>
                      <span className="text-cyan-400 font-mono text-sm">
                        90%
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-mono text-sm">
                      AUTOMATION
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                      </div>
                      <span className="text-purple-400 font-mono text-sm">
                        100%
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-mono text-sm">
                      SCALABILITY
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="w-[95%] h-full bg-gradient-to-r from-orange-500 to-red-400 rounded-full animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </div>
                      <span className="text-orange-400 font-mono text-sm">
                        ∞
                      </span>
                    </div>
                  </div>
                </div>

                {/* AI Features */}
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-white text-sm font-medium">
                          24/7
                        </div>
                        <div className="text-gray-400 text-xs">Active</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="text-white text-sm font-medium">
                          Smart
                        </div>
                        <div className="text-gray-400 text-xs">Learning</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-8 text-sm font-mono">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 tracking-wider"
            >
              [SERVICES]
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 tracking-wider"
            >
              [PRICING]
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 tracking-wider"
            >
              [ABOUT]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
