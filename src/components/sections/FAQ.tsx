"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Clock,
  Shield,
  Users,
  MessageSquare,
  HelpCircle,
  CheckCircle,
} from "lucide-react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer full-stack web and mobile development, AI-powered solutions (chatbots, AI receptionists), healthcare EMR/EHR systems, SaaS platform development, business process automation (Make, Zapier, n8n), API development, and technical consulting. Each solution is tailored to your specific business needs.",
      category: "Services",
    },
    {
      question: "How long does it take to build a web application or SaaS product?",
      answer:
        "Timeline depends on complexity: A landing page or simple app takes 1-2 weeks. A full-featured SaaS platform takes 4-8 weeks. Complex healthcare or enterprise systems can take 8-16 weeks. I provide detailed timelines during our consultation and deliver in milestones.",
      category: "Timeline",
    },
    {
      question: "Do you build AI receptionists and chatbots?",
      answer:
        "Yes! I build AI-powered virtual receptionists that handle phone calls, chat messages, appointment booking, and customer inquiries 24/7. These integrate with your existing CRM, calendar, and communication tools using models like GPT-4 and Claude.",
      category: "AI",
    },
    {
      question: "Can you build a custom EMR/EHR system for my clinic?",
      answer:
        "Absolutely. I develop custom electronic medical/health record systems with patient management, clinical documentation, appointment scheduling, e-prescribing, lab integration, and billing. All systems are built with HIPAA compliance and security best practices.",
      category: "Healthcare",
    },
    {
      question: "What tech stack do you use?",
      answer:
        "My primary stack includes Next.js, React, TypeScript, Node.js, Python, PostgreSQL, and Supabase. For mobile, I use React Native. For AI, I integrate OpenAI, Claude, and custom models. For automation, I work with Make, Zapier, and n8n. I select the best tools for each project.",
      category: "Tech",
    },
    {
      question: "Do you provide ongoing support after delivery?",
      answer:
        "Yes! All packages include support periods (1-3 months depending on package). I also offer monthly retainer options for ongoing maintenance, feature development, and optimization. I'm committed to ensuring your solutions continue working reliably.",
      category: "Support",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Project costs vary by scope: Simple automation workflows start at $1,500. Web applications and SaaS platforms range from $3,500-$7,500+. Healthcare EMR systems and complex AI solutions are quoted individually. I provide detailed estimates after our consultation.",
      category: "Pricing",
    },
    {
      question: "Do you work with startups or just established businesses?",
      answer:
        "I work with everyone from solo founders and startups to enterprise teams. My Starter packages are perfect for early-stage businesses, while Enterprise packages handle complex large-scale operations. I tailor solutions to fit your stage and budget.",
      category: "Business Size",
    },
    {
      question: "Can you integrate with my existing systems and tools?",
      answer:
        "Most likely! I've integrated with 200+ APIs and platforms including CRMs (HubSpot, Salesforce), healthcare systems, payment processors (Stripe), project management tools, and databases. If your system has an API, I can integrate it.",
      category: "Integration",
    },
    {
      question: "How secure are your solutions?",
      answer:
        "Security is a top priority. I implement industry-standard security practices including encrypted connections, role-based access control, and secure data handling. For healthcare projects, I follow HIPAA compliance guidelines. I also provide security documentation.",
      category: "Security",
    },
    {
      question: "Do you offer mobile app development?",
      answer:
        "Yes! I build cross-platform mobile applications using React Native, delivering native performance on both iOS and Android from a shared codebase. Apps include push notifications, offline support, and App Store/Google Play deployment.",
      category: "Mobile",
    },
    {
      question: "What automation platforms do you work with?",
      answer:
        "I specialize in Make (Integromat), Zapier, and n8n for business process automation. For AI integration, I work with OpenAI, Claude, and other models. I choose the right platform based on your specific needs and budget.",
      category: "Automation",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(faqs.map((faq) => faq.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative bg-transparent dark:bg-black">
      <div className="absolute inset-0 bg-honeycomb opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-4 animate-neon-glow">
            <Sparkles size={16} className="animate-neural-pulse" />
            <span className="text-primary">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Common Questions About
            <span className="text-primary"> My Services</span>
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ color: "var(--text-color)" }}
          >
            Get answers to common questions about software development,
            AI automation, SaaS, web dev, and AI receptionist services.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`faq-category-button px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-honey-gold text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="card-ai">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="faq-toggle-button w-full p-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                  >
                    <div>
                      <span className="inline-block px-2 py-1 bg-honey-gold/20 text-honey-gold rounded text-xs font-medium mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-base font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-4 h-4 text-honey-gold" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <p
                        className="text-gray-300 leading-relaxed text-sm"
                        style={{ color: "var(--text-color)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="card-ai text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Fast Response
              </h3>
              <p
                className="text-gray-300 text-sm"
                style={{ color: "var(--text-color)" }}
              >
                24-hour response time guaranteed
              </p>
            </CardContent>
          </Card>
          <Card className="card-ai text-center">
            <CardContent className="p-6">
              <Shield className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                Secure & Reliable
              </h3>
              <p
                className="text-gray-300 text-sm"
                style={{ color: "var(--text-color)" }}
              >
                Enterprise-grade security standards
              </p>
            </CardContent>
          </Card>
          <Card className="card-ai text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                200+ Happy Clients
              </h3>
              <p
                className="text-gray-300 text-sm"
                style={{ color: "var(--text-color)" }}
              >
                Proven track record of success
              </p>
            </CardContent>
          </Card>
          <Card className="card-ai text-center">
            <CardContent className="p-6">
              <CheckCircle className="w-8 h-8 text-honey-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                99.9% Uptime
              </h3>
              <p className="text-gray-300 text-sm">
                Reliable automations that work
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary clip-hex flex items-center justify-center animate-neural-pulse">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Still Have Questions?
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Can't find the answer you're looking for? I'm here to help!
                Schedule a free consultation to discuss your specific project
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    })
                  }
                  className="group"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Ask Your Question
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open("https://calendar.app.google/6CJuytpfYx9vU49fA", "_blank")
                  }
                >
                  Schedule Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
