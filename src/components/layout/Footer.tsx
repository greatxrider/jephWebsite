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
      href: "https://x.com/mrjephdev",
      label: "Twitter",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/imyouritguy/",
      label: "Instagram",
    },
    {
      icon: <Youtube size={20} />,
      href: "https://www.youtube.com/@jephdaligdig",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-black dark:bg-black light:bg-gray-900 border-t border-gray-800 dark:border-gray-800 light:border-gray-200 relative z-50 w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
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
          <div>
            <h4 className="text-gray-300 dark:text-gray-300 text-white font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 dark:text-gray-400 light:text-gray-300 hover:text-white dark:hover:text-white light:hover:text-gray-100 transition-colors duration-200 block py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 dark:text-gray-400 light:text-gray-300 hover:text-white dark:hover:text-white light:hover:text-gray-100 transition-colors duration-200 block py-1"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 dark:text-gray-400 light:text-gray-300 hover:text-white dark:hover:text-white light:hover:text-gray-100 transition-colors duration-200 block py-1"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 dark:text-gray-400 light:text-gray-300 hover:text-white dark:hover:text-white light:hover:text-gray-100 transition-colors duration-200 block py-1"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-300 dark:text-gray-300 text-white font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-300 block py-1">
                  Workflow Automation
                </span>
              </li>
              <li>
                <span className="text-gray-400 dark:text-gray-400 light:text-gray-300 block py-1">
                  AI Integration
                </span>
              </li>
              <li>
                <span className="text-gray-400 block py-1">
                  System Integration
                </span>
              </li>
              <li>
                <span className="text-gray-400 block py-1">
                  Process Optimization
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jeph. All rights reserved.
          </p>
          {/* Removed tech stack text per request */}
        </div>
      </div>
    </footer>
  );
};
