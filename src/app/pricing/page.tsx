"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Check,
  X,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Star,
  Zap,
  Brain,
  Workflow,
  Calendar,
  MessageSquare,
  Award,
  ArrowLeft,
} from "lucide-react";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"project" | "retainer">(
    "project"
  );

  const projectPackages = [
    {
      name: "Starter Automation",
      price: "$1,500",
      period: "one-time",
      description:
        "Perfect for small businesses getting started with AI automation",
      features: [
        "Up to 3 automation workflows",
        "Make or Zapier platform setup",
        "Basic AI integration (ChatGPT)",
        "Simple API connections",
        "2 weeks delivery",
        "1 month support included",
        "Process documentation",
        "Basic error handling",
      ],
      notIncluded: [
        "Advanced AI models (Claude, OpenAI)",
        "Complex multi-step workflows",
        "n8n custom development",
        "Priority support",
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      name: "Professional Automation",
      price: "$3,500",
      period: "one-time",
      description: "Comprehensive AI automation for growing businesses",
      features: [
        "Up to 10 automation workflows",
        "Make, Zapier, or n8n platform",
        "Advanced AI integration (Claude, OpenAI)",
        "Complex API connections",
        "3 weeks delivery",
        "2 months support included",
        "Comprehensive documentation",
        "Advanced error handling",
        "Performance optimization",
        "Custom webhook setup",
        "Database integrations",
      ],
      notIncluded: [
        "24/7 monitoring",
        "Unlimited revisions",
        "Advanced analytics",
      ],
      popular: true,
      color: "from-orange-500 to-red-500",
      icon: <Brain className="w-8 h-8" />,
    },
    {
      name: "Enterprise Automation",
      price: "$7,500",
      period: "one-time",
      description: "Complete AI automation transformation for large operations",
      features: [
        "Unlimited automation workflows",
        "All platforms (Make, Zapier, n8n)",
        "Premium AI models (Claude, OpenAI, Perplexity)",
        "Enterprise API integrations",
        "4-6 weeks delivery",
        "3 months support included",
        "Complete documentation suite",
        "Enterprise-grade security",
        "Performance monitoring",
        "Custom AI model training",
        "Advanced analytics dashboard",
        "Priority support channel",
        "Team training sessions",
      ],
      notIncluded: [],
      popular: false,
      color: "from-purple-500 to-pink-500",
      icon: <Workflow className="w-8 h-8" />,
    },
  ];

  const retainerPackages = [
    {
      name: "Maintenance & Support",
      price: "$500",
      period: "monthly",
      description: "Ongoing support and maintenance for your AI automations",
      features: [
        "Monthly automation health checks",
        "Bug fixes and troubleshooting",
        "Performance optimization",
        "Up to 5 hours of updates",
        "Email support (48h response)",
        "Monthly performance reports",
        "Basic workflow modifications",
      ],
      notIncluded: [
        "New workflow development",
        "Major system changes",
        "Priority support",
        "Custom integrations",
      ],
      popular: false,
      color: "from-green-500 to-teal-500",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      name: "Growth Partner",
      price: "$1,200",
      period: "monthly",
      description: "Continuous AI automation development and optimization",
      features: [
        "Up to 15 hours of development",
        "New workflow creation",
        "Advanced AI model integration",
        "Priority support (24h response)",
        "Weekly check-ins",
        "Performance analytics",
        "Custom integrations",
        "Strategic automation consulting",
        "Team training sessions",
      ],
      notIncluded: [
        "24/7 monitoring",
        "Unlimited development hours",
        "Dedicated support team",
      ],
      popular: true,
      color: "from-orange-500 to-red-500",
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: "Enterprise Partner",
      price: "$2,500",
      period: "monthly",
      description:
        "Full-service AI automation partnership for enterprise clients",
      features: [
        "Unlimited development hours",
        "Dedicated automation specialist",
        "24/7 monitoring and support",
        "Advanced AI model access",
        "Custom integration development",
        "Real-time performance analytics",
        "Weekly strategy sessions",
        "Priority feature development",
        "Team training and workshops",
        "SLA guarantee (99.9% uptime)",
      ],
      notIncluded: [],
      popular: false,
      color: "from-purple-500 to-pink-500",
      icon: <Award className="w-8 h-8" />,
    },
  ];

  const addOns = [
    {
      name: "AI Model Training",
      price: "$500",
      description: "Custom AI model training for your specific use case",
    },
    {
      name: "Team Training Session",
      price: "$300",
      description:
        "2-hour training session for your team on automation management",
    },
    {
      name: "Priority Support",
      price: "$200/month",
      description: "24-hour response time guarantee",
    },
    {
      name: "Performance Analytics",
      price: "$150/month",
      description: "Advanced automation performance tracking and insights",
    },
  ];

  const currentPackages =
    billingCycle === "project" ? projectPackages : retainerPackages;

  return (
    <div className="min-h-screen relative pt-20">
      {/* Pricing Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage:
              "url('/backgrounds/pngtree-ai-brain-inspired-digital-landscape-with-glowing-patterns-image_16684872.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            minHeight: "100vh",
            imageRendering: "auto",
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-8 text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-bright/10 to-orange-gold/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-4 animate-neon-glow">
            <Sparkles size={16} className="animate-neural-pulse" />
            <span className="gradient-text-neon">AI Automation Pricing</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing for
            <span className="gradient-text-ai"> AI Automation Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect package for your AI automation needs. All
            packages include Make, Zapier, n8n expertise and cutting-edge AI
            model integration.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-lg p-1 flex">
            <button
              onClick={() => setBillingCycle("project")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                billingCycle === "project"
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Project Packages
            </button>
            <button
              onClick={() => setBillingCycle("retainer")}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                billingCycle === "retainer"
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly Retainers
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {currentPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative h-full card-ai ${
                pkg.popular ? "ring-2 ring-orange-500" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-full flex items-center justify-center text-white mb-4 mx-auto`}
                >
                  {pkg.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-300 mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {pkg.price}
                  </span>
                  <span className="text-gray-400 ml-2">/{pkg.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.notIncluded.length > 0 && (
                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <X className="w-5 h-5 text-red-500" />
                      Not Included:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.notIncluded.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      : ""
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => window.open("/", "_self")}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Optional <span className="gradient-text-ai">Add-ons</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="card-ai">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {addon.name}
                  </h4>
                  <p className="text-2xl font-bold text-orange-500 mb-3">
                    {addon.price}
                  </p>
                  <p className="text-gray-300 text-sm">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Pricing <span className="gradient-text-ai">FAQ</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-ai">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Do you offer payment plans?
                </h4>
                <p className="text-gray-300">
                  Yes! For projects over $3,000, I offer 50% upfront and 50% on
                  completion. Enterprise clients can discuss custom payment
                  terms.
                </p>
              </CardContent>
            </Card>
            <Card className="card-ai">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  What if I need changes after delivery?
                </h4>
                <p className="text-gray-300">
                  All packages include support period with minor adjustments.
                  Major changes can be handled through additional project work
                  or retainer agreements.
                </p>
              </CardContent>
            </Card>
            <Card className="card-ai">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Can I upgrade my package later?
                </h4>
                <p className="text-gray-300">
                  Absolutely! You can upgrade to a higher tier at any time. I'll
                  credit your previous investment toward the new package.
                </p>
              </CardContent>
            </Card>
            <Card className="card-ai">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-3">
                  Do you provide training?
                </h4>
                <p className="text-gray-300">
                  Yes! All packages include basic training documentation.
                  Additional training sessions are available as add-ons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Money-back Guarantee */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto card-ai bg-gradient-to-r from-green-500/10 to-teal-500/10 border-green-500/20">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                30-Day Money-Back Guarantee
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you're not completely satisfied with your AI automation
                solution within 30 days of delivery, I'll refund your
                investment. No questions asked.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex items-center gap-2 text-green-500">
                  <Check className="w-5 h-5" />
                  <span>99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <Check className="w-5 h-5" />
                  <span>24/7 Support During Project</span>
                </div>
                <div className="flex items-center gap-2 text-green-500">
                  <Check className="w-5 h-5" />
                  <span>Complete Documentation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6">
                Get started with AI automation today. Schedule a free
                consultation to discuss your specific needs and find the perfect
                package.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => window.open("/", "_self")}
                  className="group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    window.open("https://calendly.com/jeph", "_blank")
                  }
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Free Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
