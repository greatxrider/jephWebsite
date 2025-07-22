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
      question: "What AI automation platforms do you specialize in?",
      answer:
        "I specialize in the three leading no-code automation platforms: Make (formerly Integromat), Zapier, and n8n. For AI integration, I work with OpenAI (ChatGPT), Claude (Anthropic), Perplexity AI, and other cutting-edge AI models. I choose the right platform based on your specific needs, complexity requirements, and budget.",
      category: "Platforms",
    },
    {
      question: "How long does it take to build an AI automation workflow?",
      answer:
        "Timeline depends on complexity: Simple workflows (3-5 steps) take 1-2 weeks. Complex multi-step automations with AI integration take 2-4 weeks. Enterprise-level solutions can take 4-8 weeks. I provide detailed timelines during our consultation and keep you updated throughout the process.",
      category: "Timeline",
    },
    {
      question: "Do you provide ongoing support after the automation is built?",
      answer:
        "Yes! All packages include support periods (1-3 months depending on package). I also offer monthly retainer options for ongoing maintenance, optimization, and new feature development. I'm committed to ensuring your automations continue working reliably.",
      category: "Support",
    },
    {
      question: "What if the automation breaks or stops working?",
      answer:
        "I build all automations with robust error handling and monitoring. If issues arise during your support period, I fix them at no charge. For retainer clients, I provide 24/7 monitoring and rapid response. I also provide documentation so you can troubleshoot basic issues yourself.",
      category: "Reliability",
    },
    {
      question: "Can you integrate with my existing tools and software?",
      answer:
        "Most likely! I've integrated with 200+ different APIs and platforms including CRMs (HubSpot, Salesforce), project management tools (Asana, Monday), marketing tools (Mailchimp, Buffer), and databases (PostgreSQL, MySQL). If your tool has an API, I can probably integrate it.",
      category: "Integration",
    },
    {
      question: "How much does AI automation cost?",
      answer:
        "Project packages start at $1,500 for basic automations and go up to $7,500 for enterprise solutions. Monthly retainers start at $500 for maintenance and support. Final pricing depends on complexity, number of workflows, and AI model requirements. I provide detailed quotes after our consultation.",
      category: "Pricing",
    },
    {
      question: "Do you work with small businesses or just enterprises?",
      answer:
        "I work with businesses of all sizes! My Starter package is perfect for small businesses, while my Enterprise package handles complex large-scale operations. I tailor solutions to fit your budget and needs, whether you're a solopreneur or a Fortune 500 company.",
      category: "Business Size",
    },
    {
      question: "What's the difference between Make, Zapier, and n8n?",
      answer:
        "Make (Integromat) is best for complex logic and data transformation. Zapier is user-friendly with the most app integrations (5000+). n8n is open-source and highly customizable. I recommend the right platform based on your specific needs, technical requirements, and budget constraints.",
      category: "Platforms",
    },
    {
      question: "Can AI automation really save me time and money?",
      answer:
        "Absolutely! My clients typically see 60-80% reduction in manual work, with some saving 20+ hours per week. The ROI usually pays for itself within 2-3 months. I provide detailed ROI calculations and success metrics to track your automation's impact.",
      category: "ROI",
    },
    {
      question: "Do you provide training on how to use the automations?",
      answer:
        "Yes! All packages include comprehensive documentation and basic training. I also offer additional training sessions as add-ons ($300 for 2-hour sessions). I make sure you and your team are comfortable managing and understanding your automations.",
      category: "Training",
    },
    {
      question:
        "What happens if I need changes after the automation is delivered?",
      answer:
        "Minor adjustments and bug fixes are included in your support period. Major changes or new features can be handled through additional project work or by upgrading to a retainer plan. I'm flexible and work with you to evolve your automations as your business grows.",
      category: "Changes",
    },
    {
      question: "How secure are AI automations? Will my data be safe?",
      answer:
        "Security is a top priority. I implement enterprise-grade security practices, use encrypted connections, and follow data protection best practices. For sensitive data, I can implement additional security measures. I also provide security documentation and compliance guidance.",
      category: "Security",
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
    <section id="faq" className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-bright/10 to-orange-gold/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-4 animate-neon-glow">
            <Sparkles size={16} className="animate-neural-pulse" />
            <span className="gradient-text-neon">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Questions About
            <span className="gradient-text-ai"> AI Automation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about AI automation using
            Make, Zapier, n8n, and cutting-edge AI models like Claude and
            OpenAI.
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
                  ? "bg-orange-500 text-white"
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
                      <span className="inline-block px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-xs font-medium mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-base font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-4 h-4 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <p className="text-gray-300 leading-relaxed text-sm">
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
              <p className="text-gray-300 text-sm">
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
              <p className="text-gray-300 text-sm">
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
              <p className="text-gray-300 text-sm">
                Proven track record of success
              </p>
            </CardContent>
          </Card>
          <Card className="card-ai text-center">
            <CardContent className="p-6">
              <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-4" />
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
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center animate-neural-pulse">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white gradient-text-ai">
                  Still Have Questions?
                </h3>
              </div>
              <p className="text-gray-300 mb-6">
                Can't find the answer you're looking for? I'm here to help!
                Schedule a free consultation to discuss your specific AI
                automation needs.
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
                    window.open("https://calendly.com/jeph", "_blank")
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
