"use client";

import { useEffect } from "react";
import {
  initSmoothScrolling,
  initScrollAnimations,
  initPageScrolling,
} from "@/lib/smoothScroll";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider = ({
  children,
}: SmoothScrollProviderProps) => {
  useEffect(() => {
    // Initialize GSAP smooth scrolling behaviors
    initSmoothScrolling();

    // Initialize scroll-triggered animations
    initScrollAnimations();

    // Initialize page-level smooth scrolling
    initPageScrolling();

    // Add smooth scrolling CSS class to body
    document.body.classList.add("smooth-scroll");

    return () => {
      document.body.classList.remove("smooth-scroll");
    };
  }, []);

  return <>{children}</>;
};
