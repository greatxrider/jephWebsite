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
      const offset = 100; // Account for fixed navigation height
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-height ${
        isScrolled
          ? "bg-black/60 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-primary/20 dark:bg-black/60 dark:border-gray-800 light:bg-white/60 light:border-gray-200"
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
                width={1100}
                height={440}
                className="h-48 w-auto"
              />
            </button>
            <div className="ml-2 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-all duration-300 relative group cursor-pointer navbar-font"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-all duration-300 p-2 rounded-full hover:bg-orange-500/10"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <a
              href="https://github.com/greatxrider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-all duration-300 p-2 rounded-full hover:bg-orange-500/10"
              aria-label="GitHub"
            >
              <Github size={20} />
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
              className="glow-border-ai hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle for Mobile */}
            <button
              onClick={toggleTheme}
              className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-all duration-300 p-2 rounded-full hover:bg-orange-500/10"
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } mode`}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-colors duration-200 cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-gray-800 shadow-lg shadow-primary/10 dark:bg-black/80 dark:border-gray-800 light:bg-white/80 light:border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-md transition-all duration-300 relative group cursor-pointer dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 navbar-font"
                >
                  {item.label}
                  <span className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-1 rounded-l-md"></span>
                </button>
              ))}
              <a
                href="https://github.com/greatxrider"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 rounded-md transition-all duration-300 flex items-center gap-2 dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900"
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
