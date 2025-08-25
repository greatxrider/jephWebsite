"use client";

import {
  Calendar,
  Target,
  Database,
  CheckCircle,
  Zap,
  Users,
  TrendingUp,
  Briefcase,
  Eye,
  Brain,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function LeadGenerationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* AI Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-600/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-orange-700/10 to-orange-600/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Glowing Orange Dots */}
        <div className="absolute top-32 right-20 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <div
          className="absolute top-64 left-32 w-1 h-1 bg-orange-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Hero Section - Using padding instead of margin for navbar separation */}
      <div className="pt-48 pb-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Service Category Tag */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-orange-400/30 rounded-full text-white text-sm font-medium mb-20">
              <Briefcase size={18} className="animate-pulse" />
              <span>Lead Generation & Qualification Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-orange-400 mb-12">
              Lead Generation & Qualification Automation
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-16 max-w-4xl mx-auto leading-relaxed">
              Automates lead capture from ads, web forms, and scrapers, enriches
              data, scores with AI, and routes qualified leads to your CRM
              instantly.
            </h2>

            <p className="text-xl text-gray-300 mb-20 leading-relaxed max-w-3xl mx-auto">
              Transform your lead generation from manual chaos to automated
              precision. Our AI-powered system captures, enriches, and qualifies
              leads 24/7, delivering sales-ready prospects directly to your
              team.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                onClick={() =>
                  window.open("https://calendly.com/jeph", "_blank")
                }
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Book a Call
              </Button>

              <Button
                onClick={() => window.open("/#projects", "_blank")}
                className="bg-white/5 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/50 text-white px-10 py-5 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 group"
              >
                <Eye className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h3 className="text-4xl font-bold text-white mb-10">
                How It Works
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our automated system handles the entire lead generation pipeline
                from capture to qualification
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300 group hover:bg-white/10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-orange-400 mb-6">
                  Capture
                </h4>
                <p className="text-gray-300 leading-relaxed text-base">
                  Automatically captures leads from ads, web forms, scrapers,
                  and multiple sources
                </p>
              </div>

              <div className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300 group hover:bg-white/10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-orange-400 mb-6">
                  Enrich
                </h4>
                <p className="text-gray-300 leading-relaxed text-base">
                  AI-powered data enrichment adds missing contact details and
                  company information
                </p>
              </div>

              <div className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300 group hover:bg-white/10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-orange-400 mb-6">
                  Score
                </h4>
                <p className="text-gray-300 leading-relaxed text-base">
                  Intelligent AI scoring based on your custom criteria and
                  qualification rules
                </p>
              </div>

              <div className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300 group hover:bg-white/10">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/25">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-orange-400 mb-6">
                  Route
                </h4>
                <p className="text-gray-300 leading-relaxed text-base">
                  Instantly routes qualified leads to your CRM with complete
                  context and history
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h3 className="text-4xl font-bold text-white mb-10">
                Why Choose Our Automation?
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience the power of AI-driven lead generation that never
                sleeps
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-12 bg-gradient-to-r from-orange-500/10 to-orange-400/10 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-orange-400">
                    24/7 Operation
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Your lead generation runs continuously, capturing
                  opportunities even when your team is offline. Never miss a
                  potential customer again.
                </p>
              </div>

              <div className="p-12 bg-gradient-to-r from-orange-500/10 to-orange-400/10 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-orange-400">
                    AI-Powered Scoring
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Advanced AI algorithms score leads based on your specific
                  criteria, ensuring only high-quality prospects reach your
                  sales team.
                </p>
              </div>

              <div className="p-12 bg-gradient-to-r from-orange-500/10 to-orange-400/10 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-orange-400">
                    Instant CRM Integration
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Seamlessly integrates with your existing CRM systems,
                  automatically syncing qualified leads with complete context
                  and history.
                </p>
              </div>

              <div className="p-12 bg-gradient-to-r from-orange-500/10 to-orange-400/10 backdrop-blur-sm rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/25">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-semibold text-orange-400">
                    Data Enrichment
                  </h4>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Automatically fills in missing contact details, company
                  information, and social profiles to create comprehensive lead
                  profiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <h3 className="text-4xl font-bold text-white mb-10">
                Results That Speak
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                See the impact of automated lead generation on real businesses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300">
                <div className="text-6xl font-bold text-orange-400 mb-6">
                  300%
                </div>
                <p className="text-xl text-white font-semibold mb-4">
                  Increase in Lead Volume
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Automated capture from multiple sources
                </p>
              </div>

              <div className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300">
                <div className="text-6xl font-bold text-orange-400 mb-6">
                  85%
                </div>
                <p className="text-xl text-white font-semibold mb-4">
                  Time Saved on Research
                </p>
                <p className="text-gray-300 leading-relaxed">
                  AI handles data enrichment automatically
                </p>
              </div>

              <div className="text-center p-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-orange-500/30 transition-all duration-300">
                <div className="text-6xl font-bold text-orange-400 mb-6">
                  24/7
                </div>
                <p className="text-xl text-white font-semibold mb-4">
                  Lead Generation
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Never miss opportunities again
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-32 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="p-20 bg-gradient-to-r from-orange-500/10 to-orange-400/10 backdrop-blur-sm rounded-2xl border border-orange-500/20">
                <h3 className="text-4xl font-bold text-white mb-10">
                  Ready to Automate Your Lead Generation?
                </h3>
                <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
                  Stop chasing leads manually. Let our AI-powered automation
                  capture, enrich, and qualify prospects while you focus on
                  closing deals.
                </p>
                <Button
                  onClick={() =>
                    window.open("https://calendly.com/jeph", "_blank")
                  }
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-14 py-7 text-xl font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 group"
                >
                  <Calendar className="w-7 h-7 mr-4 group-hover:scale-110 transition-transform duration-300" />
                  Book a Free Consultation
                  <ArrowRight className="w-7 h-7 ml-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
