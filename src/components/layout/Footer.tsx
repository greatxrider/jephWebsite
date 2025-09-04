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
    <footer className="relative w-full bg-gradient-to-br from-black via-[#0a0a0a] to-black border-t border-orange-500/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF6B35%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-5 py-8">
          {/* 4-Column Layout with exact image spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {/* Column 1: Brand and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <Image
                    src={
                      theme === "light"
                        ? "/website-logo-light.png"
                        : "/website-logo-dark.png"
                    }
                    alt="JEPH DALIGDIG Logo"
                    width={96}
                    height={96}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                AI Automation Specialist helping businesses streamline
                operations and boost productivity through intelligent automation
                solutions. Subscribe to stay updated with the latest automation
                insights.
              </p>
            </div>

            {/* Column 2: Office Information */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Office
                </span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
              </h4>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Philippines
                  </p>
                </div>
                <div>
                  <a
                    href="mailto:jephdaligdig98@gmail.com"
                    className="text-gray-300 text-sm hover:text-orange-400 transition-colors duration-300 underline"
                  >
                    jephdaligdig98@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">+63 - 9759483289</p>
                </div>
              </div>
            </div>

            {/* Column 3: Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Links
                </span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                {["Home", "Services", "About Us", "Projects", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-300 text-sm hover:text-orange-400 transition-colors duration-300 block py-2"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4 relative">
                <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Newsletter
                </span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></div>
              </h4>
              <div className="mb-8">
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    className="w-full pl-10 pr-12 py-3 bg-transparent border-b-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
                  />
                  <button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-white hover:text-orange-400 transition-colors duration-300"
                    aria-label="Subscribe to newsletter"
                    title="Subscribe to newsletter"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20">
          <div className="container mx-auto px-5 py-1">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Jeph Daligdig. All rights reserved.
              </p>
              <div className="flex items-center gap-8 text-sm text-gray-400">
                <a
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
