"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/components/providers/ThemeProvider";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/greatxrider",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/jephmari/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/jephmari98",
      label: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/jephmari/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative w-full border-t border-honey-gold/20 bg-black">
      {/* Decorative honeycomb background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-honey-gold/[0.03]" />
        <div className="absolute inset-0 bg-honeycomb opacity-60" />
      </div>

      <div className="relative">
        {/* Top callout removed per request */}

        {/* Main content */}
        <div className="container mx-auto px-5 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={theme === "light" ? "/website-logo-light.png" : "/website-logo-dark.png"}
                  alt="JEPH DALIGDIG Logo"
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
                <div className="h-10 w-px bg-white/10" />
                <p className="text-sm font-semibold text-white">Jeph Daligdig</p>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-gray-300">
                AI Automation Specialist helping businesses streamline operations with intelligent workflows across tools like Make, Zapier, and n8n.
              </p>
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden clip-hex-pointy border border-honey-gold/20 bg-white/[0.03] text-white transition hover:border-honey-gold/50 hover:bg-honey-gold/10"
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <nav aria-label="Footer navigation">
              <h4 className="mb-4 text-sm font-semibold text-white/90">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Services", "About", "Projects", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="inline-flex items-center gap-2 rounded-md px-0.5 py-1 text-sm text-gray-300 transition hover:text-honey-gold"
                    >
                      <span className="h-1.5 w-1.5 clip-hex bg-honey-gold/60" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">Services</h4>
              <div className="flex flex-wrap gap-2">
                {["Workflow Automation", "AI Assistants", "API Integrations", "CRM Pipelines", "Data Sync", "Email Automation"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-honey-gold/15 bg-honey-gold/[0.03] px-3 py-1 text-xs text-gray-300 hover:border-honey-gold/30 transition-colors"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact / Newsletter */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white/90">Stay in the loop</h4>
              <div className="mb-4">
                <div className="relative">
                  <Mail size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    inputMode="email"
                    placeholder="Your email address"
                    aria-label="Email address"
                    className="w-full rounded-lg border border-honey-gold/15 bg-black/30 pl-10 pr-12 py-3 text-sm text-white placeholder-gray-400 outline-none transition focus:border-honey-gold/60"
                  />
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-xs font-medium text-white transition hover:bg-primary-dark"
                    aria-label="Subscribe to newsletter"
                    title="Subscribe to newsletter"
                  >
                    <ArrowRight size={16} />
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Philippines</p>
                <a href="mailto:jephdaligdig98@gmail.com" className="hover:text-honey-gold">jephdaligdig98@gmail.com</a>
                <p>+63 - 9759483289</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-honey-gold/10 bg-black/30">
          <div className="container mx-auto px-5 py-4">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs text-gray-400">© {currentYear} Jeph Daligdig. All rights reserved.</p>
              <div className="flex items-center gap-6 text-xs text-gray-400">
                <a href="#" className="transition hover:text-honey-gold">Privacy Policy</a>
                <a href="#" className="transition hover:text-honey-gold">Terms of Service</a>
                <a href="#" className="transition hover:text-honey-gold">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
