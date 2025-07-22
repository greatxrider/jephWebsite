"use client";

import { useEffect } from "react";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider = ({
  children,
}: SmoothScrollProviderProps) => {
  useEffect(() => {
    // Use native smooth scrolling instead of heavy GSAP animations
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // Add event listener for anchor links
    document.addEventListener("click", handleSmoothScroll);

    // Set scroll behavior on html element
    document.documentElement.style.scrollBehavior = "smooth";

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReducedMotion.matches) {
      document.documentElement.style.scrollBehavior = "auto";
    }

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return <>{children}</>;
};
