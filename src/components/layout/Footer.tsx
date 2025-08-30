import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    {
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/@jephdaligdig",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-black dark:bg-black light:bg-gray-900 border-t border-gray-800 dark:border-gray-800 light:border-gray-200 relative z-50 w-full pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-6">
            <div className="text-2xl font-bold gradient-text mb-4">JEPH</div>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-300 mb-6 max-w-md leading-relaxed">
              AI Automation Specialist helping businesses streamline operations
              and boost productivity through intelligent automation solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200 p-2 rounded-full hover:bg-orange-500/10"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="!text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="!text-white transition-colors duration-200 block py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="!text-white transition-colors duration-200 block py-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="!text-white transition-colors duration-200 block py-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="!text-white transition-colors duration-200 block py-1"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="!text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="!text-white block py-1">
                  Workflow Automation
                </span>
              </li>
              <li>
                <span className="!text-white block py-1">AI Integration</span>
              </li>
              <li>
                <span className="!text-white block py-1">
                  System Integration
                </span>
              </li>
              <li>
                <span className="!text-white block py-1">
                  Process Optimization
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 w-full text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jeph. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
