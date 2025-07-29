"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log(`Found element:`, element);
      const offset = 80; // Account for fixed navigation height
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with id "${sectionId}" not found`);
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      // If on home page, smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // If on other pages, navigate to home page
      window.location.href = "/";
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    // For section navigation
    if (pathname === "/") {
      scrollToSection(href);
    } else {
      window.location.href = `/#${href}`;
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="text-2xl font-bold gradient-text-ai animate-glitch hover:animate-none transition-all duration-300 cursor-pointer hover:scale-105"
            >
              JEPH
            </button>
            <div className="ml-2 w-2 h-2 bg-orange-light rounded-full animate-neural-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (pathname === "/") {
                  scrollToSection("contact");
                } else {
                  window.location.href = "/#contact";
                }
              }}
              className="glow-border-ai hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 shadow-lg shadow-primary/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-md transition-all duration-300 relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-1 rounded-l-md"></span>
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (pathname === "/") {
                      scrollToSection("contact");
                    } else {
                      window.location.href = "/#contact";
                    }
                  }}
                  className="w-full glow-border-ai hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
