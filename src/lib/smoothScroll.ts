import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollToPlugin);
}

// GSAP smooth scrolling utility
export const smoothScrollTo = (elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.warn(`Element with id "${elementId}" not found`);
        return;
    }

    const targetPosition = element.offsetTop - offset;

    // Kill any existing scroll animations
    gsap.killTweensOf(window);

    gsap.to(window, {
        duration: 1.2,
        scrollTo: {
            y: targetPosition,
            autoKill: true
        },
        ease: "power2.inOut",
    });
};

// Enhanced scroll behavior for navigation
export const initSmoothScrolling = () => {
    console.log("Initializing smooth scrolling");

    // Add smooth scrolling to all anchor links
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a[href^="#"]') as HTMLAnchorElement;

        if (link && link.hash) {
            e.preventDefault();
            const targetId = link.hash.substring(1);
            console.log(`Clicked link to ${targetId}`);
            smoothScrollTo(targetId);
        }
    });

    // Smooth scrolling for keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Home' && e.ctrlKey) {
            e.preventDefault();
            smoothScrollTo('hero', 0);
        }
        if (e.key === 'End' && e.ctrlKey) {
            e.preventDefault();
            smoothScrollTo('contact');
        }
    });
};

// Simple scroll animations
export const initScrollAnimations = () => {
    console.log("Initializing scroll animations");

    // Simple fade in animations for sections
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((element) => {
        gsap.set(element, { opacity: 0, y: 50 });
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach((element) => {
        observer.observe(element);
    });
};

// Enhanced page scrolling with GSAP
export const initPageScrolling = () => {
    console.log("Initializing page scrolling");

    // Override default scroll behavior for smoother control
    const style = document.createElement('style');
    style.textContent = `
    html {
      scroll-behavior: auto !important;
    }
    body {
      overflow-x: hidden;
    }
  `;
    document.head.appendChild(style);

    // Smooth scrolling on page load
    gsap.set(window, { scrollTo: 0 });

    // Add momentum scrolling for touch devices
    if ('ontouchstart' in window) {
        document.body.style.overflowY = 'scroll';
        document.body.style.webkitOverflowScrolling = 'touch';
    }

    console.log("Page scrolling initialized");
}; 