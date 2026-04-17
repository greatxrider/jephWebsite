"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface WavingBackgroundProps {
  className?: string;
  animated?: boolean;
}

export const WavingBackground = ({
  className = "",
  animated = true,
}: WavingBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || (isMobile && !animated)) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
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

      const dpr = 1;

      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      
      canvas.style.width = `${parent.offsetWidth}px`;
      canvas.style.height = `${parent.offsetHeight}px`;
      
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    const renderWaves = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const w = parent.offsetWidth;
      const h = parent.offsetHeight;

      // Checking DOM directly to perfectly sync with Next-Themes without hydration bugs
      const isDark = document.documentElement.classList.contains("dark");

      ctx.globalCompositeOperation = "source-over"; 
      
      // Accurately painting the light background so dark text is perfectly readable!
      ctx.fillStyle = isDark ? "#0A0500" : "#FFFEF7"; 
      ctx.fillRect(0, 0, w, h);

      time += 0.003; 

      // Deepening the colors slightly in light mode so they stand out against the white background
      const gradient = ctx.createLinearGradient(0, 0, w, 0);
      if (isDark) {
        gradient.addColorStop(0, "rgba(255, 30, 30, 0.8)"); 
        gradient.addColorStop(0.5, "rgba(255, 120, 0, 0.8)"); 
        gradient.addColorStop(1, "rgba(255, 230, 0, 0.8)"); 
      } else {
        gradient.addColorStop(0, "rgba(220, 0, 0, 0.9)"); 
        gradient.addColorStop(0.5, "rgba(230, 70, 0, 0.9)"); 
        gradient.addColorStop(1, "rgba(210, 150, 0, 0.9)");
      }

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;

      const lines = 16;
      const segments = 60; 

      for (let j = 0; j < lines; j++) {
          ctx.beginPath();
          const phase = (j / lines) * Math.PI * 2;
          
          for (let i = 0; i <= segments; i++) {
               const t = i / segments;
               const x = t * w;
               
               const cy = h/2 + Math.sin(t * Math.PI * 1.5 + time * 0.8) * (h * 0.15) 
                              + Math.cos(t * Math.PI * 3 - time * 0.5) * (h * 0.08);
               
               const swell = Math.sin(t * Math.PI * 6 - time * 1.2) * 0.5 + 0.6;
               const R = (h * 0.2) * swell + (h * 0.05); 
               
               const offset = Math.sin(t * Math.PI * 16 + phase + time * 2.5) * R;
               
               const y = cy + offset;
               
               if (i === 0) ctx.moveTo(-50, y); 
               else ctx.lineTo(x, y);
          }
          ctx.lineTo(w + 50, h/2);
          ctx.stroke();
       }

      const groundGradient = ctx.createLinearGradient(0, h * 0.75, 0, h);
      groundGradient.addColorStop(0, isDark ? "rgba(10,5,0,0)" : "rgba(255,254,247,0)");
      groundGradient.addColorStop(1, isDark ? "#0A0500" : "#FFFEF7");
      ctx.fillStyle = groundGradient;
      ctx.fillRect(0, h * 0.6, w, h * 0.4);

    };

    const animate = () => {
      if (isVisibleRef.current) {
        renderWaves();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [animated, theme, systemTheme]);

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}>
        {/* The vignette mask is dynamically adjusted so it doesn't accidentally darken the light mode */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,254,247,0.8)_100%)]" />
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full block"
            style={{ opacity: 1 }} 
            aria-hidden="true"
        />
    </div>
  );
};
