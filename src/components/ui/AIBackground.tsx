"use client";

import { useEffect, useRef } from "react";

interface AIBackgroundProps {
  variant?: "neural" | "circuit" | "matrix" | "particles";
  className?: string;
  animated?: boolean;
}

export const AIBackground = ({
  variant = "neural",
  className = "",
  animated = true,
}: AIBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!animated || variant !== "particles") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animated particles for neural network effect
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = [
      "rgba(255, 107, 53, 0.6)", // primary orange
      "rgba(247, 147, 30, 0.6)", // secondary orange
      "rgba(255, 140, 66, 0.6)", // light orange
      "rgba(229, 90, 43, 0.6)", // deep orange
    ];

    // Create particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 80) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(255, 107, 53, ${
                0.1 * (1 - distance / 80)
              })`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [animated, variant]);

  const getBackgroundClass = () => {
    switch (variant) {
      case "neural":
        return "bg-neural-network";
      case "circuit":
        return "bg-circuit";
      case "matrix":
        return "bg-pattern-ai";
      case "particles":
        return "";
      default:
        return "bg-neural-network";
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {variant === "particles" && animated ? (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: "screen" }}
        />
      ) : (
        <div
          className={`absolute inset-0 ${getBackgroundClass()} opacity-20`}
        />
      )}
    </div>
  );
};

interface NeuralNodeProps {
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "purple" | "orange";
  animated?: boolean;
  className?: string;
}

export const NeuralNode = ({
  size = "md",
  color = "blue",
  animated = true,
  className = "",
}: NeuralNodeProps) => {
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "w-2 h-2";
      case "md":
        return "w-3 h-3";
      case "lg":
        return "w-4 h-4";
      default:
        return "w-3 h-3";
    }
  };

  const getColorClass = () => {
    switch (color) {
      case "blue":
        return "bg-orange-bright shadow-orange-bright";
      case "green":
        return "bg-orange-light shadow-orange-light";
      case "purple":
        return "bg-orange-gold shadow-orange-gold";
      case "orange":
        return "bg-primary shadow-primary";
      default:
        return "bg-orange-bright shadow-orange-bright";
    }
  };

  return (
    <div
      className={`
        ${getSizeClass()}
        ${getColorClass()}
        rounded-full
        ${animated ? "animate-neural-pulse" : ""}
        ${className}
      `}
      style={{
        boxShadow: `0 0 10px currentColor`,
      }}
    />
  );
};

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}

export const GlitchText = ({
  text,
  className = "",
  intensity = "medium",
}: GlitchTextProps) => {
  const getIntensityClass = () => {
    switch (intensity) {
      case "low":
        return "animate-glitch";
      case "medium":
        return "animate-glitch";
      case "high":
        return "animate-glitch";
      default:
        return "animate-glitch";
    }
  };

  return (
    <span
      className={`relative ${getIntensityClass} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};
