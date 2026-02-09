"use client";

import { useEffect, useRef, useCallback } from "react";

interface HoneycombBackgroundProps {
  variant?: "honeycomb" | "swarm" | "neural-hive";
  density?: "low" | "medium" | "high";
  className?: string;
  animated?: boolean;
}

interface HexNode {
  x: number;
  y: number;
  pulse: number;
  pulseSpeed: number;
  brightness: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export const HoneycombBackground = ({
  variant = "honeycomb",
  density = "medium",
  className = "",
  animated = true,
}: HoneycombBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const nodesRef = useRef<HexNode[]>([]);
  const particlesRef = useRef<Particle[]>([]);

  const getHexSize = useCallback(() => {
    return density === "low" ? 60 : density === "medium" ? 45 : 30;
  }, [density]);

  const generateHexGrid = useCallback(
    (width: number, height: number): HexNode[] => {
      const size = getHexSize();
      const nodes: HexNode[] = [];
      const hexW = size * 2;
      const hexH = Math.sqrt(3) * size;

      for (let row = -1; row < height / hexH + 1; row++) {
        for (let col = -1; col < width / hexW + 1; col++) {
          const x = col * hexW * 0.75;
          const y = row * hexH + (col % 2 === 0 ? 0 : hexH / 2);
          nodes.push({
            x,
            y,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.005 + Math.random() * 0.015,
            brightness: 0.3 + Math.random() * 0.4,
          });
        }
      }
      return nodes;
    },
    [getHexSize]
  );

  const generateParticles = useCallback(
    (width: number, height: number, count: number): Particle[] => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: 1 + Math.random() * 2,
        alpha: 0.2 + Math.random() * 0.5,
        life: Math.random() * 300,
        maxLife: 200 + Math.random() * 200,
      }));
    },
    []
  );

  const drawHexagon = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      strokeAlpha: number
    ) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(255, 215, 0, ${strokeAlpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    },
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || (isMobile && !animated)) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
      ctx.scale(dpr, dpr);

      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      nodesRef.current = generateHexGrid(w, h);
      const particleCount = isMobile ? 8 : density === "low" ? 12 : density === "medium" ? 20 : 30;
      particlesRef.current = generateParticles(w, h, particleCount);
    };

    resize();
    window.addEventListener("resize", resize);

    const renderHoneycomb = () => {
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      ctx.clearRect(0, 0, w, h);

      const size = getHexSize();
      const nodes = nodesRef.current;

      // Draw hex grid
      for (const node of nodes) {
        node.pulse += node.pulseSpeed;
        const pulseAlpha = 0.03 + Math.sin(node.pulse) * 0.02;
        drawHexagon(ctx, node.x, node.y, size, pulseAlpha);

        // Subtle fill on some cells
        if (node.brightness > 0.5) {
          const fillAlpha = 0.008 + Math.sin(node.pulse) * 0.005;
          ctx.fillStyle = `rgba(255, 215, 0, ${fillAlpha})`;
          ctx.fill();
        }
      }

      // Draw connections between nearby hex centers
      ctx.lineWidth = 0.3;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < size * 2.2 && dist > size * 0.5) {
            const alpha = 0.03 * (1 - dist / (size * 2.2));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 105, 0, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Ambient particles
      const particles = particlesRef.current;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.life = 0;
        }
        const fadeAlpha =
          p.alpha *
          Math.min(p.life / 30, 1) *
          Math.min((p.maxLife - p.life) / 30, 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${fadeAlpha})`;
        ctx.fill();
      }
    };

    const renderNeuralHive = () => {
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      ctx.clearRect(0, 0, w, h);

      const size = getHexSize();
      const nodes = nodesRef.current;

      // Draw hex outlines
      for (const node of nodes) {
        node.pulse += node.pulseSpeed;
        const pulseAlpha = 0.025 + Math.sin(node.pulse) * 0.015;
        drawHexagon(ctx, node.x, node.y, size, pulseAlpha);
      }

      // Neural connections — data flowing through the hive
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < size * 2.5 && dist > size * 0.5) {
            const alpha =
              0.06 *
              (1 - dist / (size * 2.5)) *
              (0.5 + 0.5 * Math.sin(nodes[i].pulse + nodes[j].pulse));
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 105, 0, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Active nodes — pulsing centers at hex vertices
      for (const node of nodes) {
        if (node.brightness > 0.55) {
          const glow = 0.15 + Math.sin(node.pulse * 1.5) * 0.1;
          const nodeSize = 1.5 + Math.sin(node.pulse) * 0.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 215, 0, ${glow})`;
          ctx.fill();

          // Tiny glow halo
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 215, 0, ${glow * 0.15})`;
          ctx.fill();
        }
      }

      // Flowing particles
      const particles = particlesRef.current;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife || p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.life = 0;
        }
        const fadeAlpha =
          p.alpha *
          0.6 *
          Math.min(p.life / 20, 1) *
          Math.min((p.maxLife - p.life) / 20, 1);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 191, 0, ${fadeAlpha})`;
        ctx.fill();
      }
    };

    const renderSwarm = () => {
      const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      for (const p of particles) {
        // Swarm-like movement with slight direction changes
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;
        p.vx = Math.max(-0.6, Math.min(0.6, p.vx));
        p.vy = Math.max(-0.6, Math.min(0.6, p.vy));
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        const fadeAlpha = p.alpha * 0.7;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${fadeAlpha})`;
        ctx.fill();

        // Trail
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 6, p.y - p.vy * 6);
        ctx.strokeStyle = `rgba(255, 105, 0, ${fadeAlpha * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 215, 0, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        }
      }
    };

    const render =
      variant === "neural-hive"
        ? renderNeuralHive
        : variant === "swarm"
        ? renderSwarm
        : renderHoneycomb;

    const animate = () => {
      if (isVisibleRef.current) {
        render();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [
    variant,
    density,
    animated,
    generateHexGrid,
    generateParticles,
    getHexSize,
    drawHexagon,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};
