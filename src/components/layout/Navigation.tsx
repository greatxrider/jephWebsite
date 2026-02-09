"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-height ${isScrolled
          ? "bg-white/80 dark:bg-black/70 backdrop-blur-md border-b border-amber-200/30 dark:border-amber-900/30 shadow-lg shadow-honey-gold/10 bg-honeycomb"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={handleLogoClick}
              className="transition-all duration-300 cursor-pointer hover:scale-105"
              aria-label="Go to homepage"
            >
              <Image
                src={
                  theme === "light"
                    ? "/website-logo-light.png"
                    : "/website-logo-dark.png"
                }
                alt="JEPH DALIGDIG Logo"
                width={300}
                height={64}
                className="h-14 w-auto"
              />
            </button>
            <div className="ml-1.5 w-1.5 h-1.5 bg-primary clip-hex animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative group cursor-pointer navbar-font"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-honey-gold/10"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"
                } mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <a
              href="https://github.com/greatxrider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 p-1.5 rounded-full hover:bg-honey-gold/10"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
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
              className="glow-border-ai hover:shadow-lg hover:shadow-honey-gold/20 transition-all duration-300 cursor-pointer"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-honey-gold/10"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"
                } mode`}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 dark:bg-black/85 backdrop-blur-md border-t border-amber-200/30 dark:border-amber-900/30 shadow-lg shadow-honey-gold/10 bg-honeycomb">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-primary/10 rounded-md transition-all duration-300 relative group cursor-pointer navbar-font"
                >
                  {item.label}
                  <span className="absolute left-0 top-0 w-0 h-full bg-primary transition-all duration-300 group-hover:w-1 rounded-l-md"></span>
                </button>
              ))}
              <a
                href="https://github.com/greatxrider"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-primary/10 rounded-md transition-all duration-300 flex items-center gap-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
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
