"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Star,
  Quote,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Clock,
  Shield,
} from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO",
      company: "TechFlow Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Jeph transformed our lead generation process using Make and OpenAI. We now generate 300% more qualified leads with 80% less manual work. His AI automation expertise is unmatched.",
      project: "AI-Powered Lead Generation System",
      results: [
        "300% increase in qualified leads",
        "80% reduction in manual work",
        "45% faster response times",
      ],
      tools: ["Make", "OpenAI", "HubSpot", "LinkedIn Sales Navigator"],
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "E-commerce Plus",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The n8n automation workflows Jeph built for our customer support saved us $50k annually. Claude AI integration handles 90% of inquiries automatically while maintaining our brand voice.",
      project: "Intelligent Customer Support Automation",
      results: [
        "$50k annual savings",
        "90% automation rate",
        "24/7 customer support",
      ],
      tools: ["n8n", "Claude AI", "Intercom", "Notion"],
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Marketing Manager",
      company: "Digital Growth Agency",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Jeph's Zapier and ChatGPT integration automated our entire content marketing pipeline. We now publish 5x more content with better quality and consistency. Game changer!",
      project: "Content Marketing Automation Pipeline",
      results: [
        "5x more content published",
        "Improved content quality",
        "60% time savings",
      ],
      tools: ["Zapier", "ChatGPT", "Buffer", "Canva", "Airtable"],
    },
    {
      id: 4,
      name: "David Kim",
      role: "Finance Director",
      company: "FinTech Innovations",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The financial reporting automation Jeph created with Make and Perplexity AI saves us 20 hours weekly. Real-time insights and AI-powered forecasting transformed our decision making.",
      project: "AI-Powered Financial Reporting Dashboard",
      results: [
        "20 hours saved weekly",
        "Real-time financial insights",
        "Improved forecasting accuracy",
      ],
      tools: ["Make", "Perplexity AI", "QuickBooks", "Stripe"],
    },
    {
      id: 5,
      name: "Lisa Johnson",
      role: "HR Director",
      company: "Scale Corp",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Jeph's recruitment automation using n8n and OpenAI revolutionized our hiring process. We now screen candidates 10x faster while improving candidate quality and experience.",
      project: "AI Recruitment Pipeline Automation",
      results: [
        "10x faster screening",
        "Better candidate quality",
        "Improved candidate experience",
      ],
      tools: ["n8n", "OpenAI", "BambooHR", "Calendly"],
    },
    {
      id: 6,
      name: "Robert Thompson",
      role: "Founder",
      company: "SaaS Startup",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with Jeph was incredible. His Make and Claude AI automation handles our entire customer onboarding. 99.9% uptime, zero errors, and customers love the experience.",
      project: "Automated Customer Onboarding System",
      results: [
        "99.9% uptime reliability",
        "Zero manual errors",
        "95% customer satisfaction",
      ],
      tools: ["Make", "Claude AI", "Stripe", "Slack", "Notion"],
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "200+",
      label: "Happy Clients",
      color: "text-blue-500",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "500+",
      label: "Automations Built",
      color: "text-green-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime Rate",
      color: "text-orange-500",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "10k+",
      label: "Hours Saved",
      color: "text-purple-500",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-bright/10 to-orange-gold/10 border border-orange-bright/30 rounded-full text-orange-bright text-sm font-medium mb-4 animate-neon-glow">
            <Sparkles size={16} className="animate-neural-pulse" />
            <span className="gradient-text-neon">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results from
            <span className="gradient-text-ai"> Real Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how I've transformed businesses with AI automation using Make,
            Zapier, n8n, and cutting-edge AI models like Claude, OpenAI, and
            ChatGPT.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-ai text-center">
              <CardContent className="p-6">
                <div
                  className={`${stat.color} mb-4 flex justify-center animate-neural-pulse`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <Card className="card-ai mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-gray-300">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-orange-500 text-orange-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-orange-500 mb-4" />
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "{currentTestimonial.text}"
                </p>
                <div className="flex gap-2 mb-6">
                  {currentTestimonial.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Project: {currentTestimonial.project}
                </h4>
                <div className="space-y-3">
                  {currentTestimonial.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Testimonial Controls */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full p-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-orange-500" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full p-0"
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            More <span className="gradient-text-ai">Success Stories</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Card key={testimonial.id} className="card-ai h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-orange-500 text-orange-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    "{testimonial.text.substring(0, 120)}..."
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {testimonial.tools.slice(0, 3).map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-orange-500 rounded text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center animate-neural-pulse">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white gradient-text-ai">
                  Ready to Join These Success Stories?
                </h3>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's create your AI automation success story. Get the same
                results with Make, Zapier, n8n, and cutting-edge AI models.
              </p>
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
                Start Your AI Automation Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
