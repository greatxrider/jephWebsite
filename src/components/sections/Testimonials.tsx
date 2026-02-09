"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { HoneycombBackground } from "@/components/ui/HoneycombBackground";
import Image from "next/image";
import {
  Sparkles,
  Quote,
  Star,
  MessageSquare,
  Brain,
  Zap,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Derick",
      role: "CEO, MetaWatt",
      quote:
        "The automation workflows integrated well with our existing systems. Good technical documentation and follow-up support during implementation.",
      avatar: "/testimonialsPhotos/derick-photo.jpg",
      rating: 5,
    },
    {
      name: "Paul",
      role: "CEO, NyxPro",
      quote:
        "Efficient API integrations and reliable automation setup. The solutions handle our data processing requirements effectively.",
      avatar: "/testimonialsPhotos/paul-photo.jpg",
      rating: 5,
    },
    {
      name: "Clint",
      role: "Automation Specialist, MetaWatt",
      quote:
        "Clean workflow design and proper error handling. The Make.com implementations are well-structured and maintainable.",
      avatar: "/testimonialsPhotos/clint-photo.jpg",
      rating: 4,
    },
    {
      name: "Jeah",
      role: "Software Engineer, Nyxpro",
      quote:
        "Good understanding of our tech stack. The AI integrations work as expected and the code quality meets our standards.",
      avatar: "/testimonialsPhotos/jeah-photo.jpg",
      rating: 5,
    },
    {
      name: "Kamran",
      role: "Consultant, Shopidropship",
      quote:
        "Delivered functional automation solutions on schedule. The Zapier workflows handle our inventory management efficiently.",
      avatar: "/testimonialsPhotos/kamran-photo.jpg",
      rating: 4,
    },
    {
      name: "Nayla",
      role: "Director of Growth, RevWised",
      quote:
        "Solid technical implementation. The automated reporting saves us significant time and the data accuracy is reliable.",
      avatar: "/testimonialsPhotos/nayla-photo.jpg",
      rating: 5,
    },
    {
      name: "Pim",
      role: "Co-Founder, Bamboo Works",
      quote:
        "Professional approach to automation development. The n8n workflows are well-documented and handle our business logic correctly.",
      avatar: "/testimonialsPhotos/pim-photo.jpg",
      rating: 4,
    },
    {
      name: "Santiago",
      role: "CFO, Comprapolis SAS",
      quote:
        "Effective automation solutions for our financial processes. Good communication throughout the project and meets technical requirements.",
      avatar: "/testimonialsPhotos/santiago-photo.jpg",
      rating: 5,
    },
    {
      name: "Yvonne",
      role: "CEO, Haivyne",
      quote:
        "Reliable AI automation implementation. The solutions integrate well with our workflow and deliver consistent results.",
      avatar: "/testimonialsPhotos/yvonne-photo.jpg",
      rating: 5,
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="section-padding relative bg-[#FFFEF7] dark:bg-black mt-20 mb-20 overflow-hidden">
      {/* Honeycomb Background */}
      <HoneycombBackground variant="honeycomb" density="low" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-honey-gold/15 dark:bg-white/5 dark:border-honey-gold/15 rounded-full text-honey-gold text-sm font-medium mb-6">
              <Sparkles size={16} className="text-honey-gold" />
              <span style={{ color: "var(--text-primary)" }}>
                Client Success Stories
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              What Clients and Colleagues
              <span className="text-primary">
                {" "}
                Say About My Work
              </span>
            </h2>

            <p
              className="text-xl text-gray-300 dark:text-gray-300 mb-8 leading-relaxed"
              style={{ color: "var(--text-color)" }}
            >
              Real feedback from partners on reliability, communication, and
              measurable outcomes achieved through AI automation solutions.
            </p>

            {/* AI-Inspired Features */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary clip-hex flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    AI-Driven Solutions
                  </h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Intelligent automation that adapts to your business needs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-honey-gold clip-hex flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Rapid Implementation
                  </h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Quick deployment with lasting business impact
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-honey-gold clip-hex flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-white font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Clear Communication
                  </h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ color: "var(--text-color)" }}
                  >
                    Transparent process and regular updates throughout
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Testimonial Carousel */}
          <div className="relative">
            <Card className="card-ai h-full min-h-[400px] bg-white/10 backdrop-blur-sm border border-gray-200 dark:bg-white/5 dark:border-white/10">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                {/* Quote Icon and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-honey-gold opacity-60" />
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-honey-gold fill-current"
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-grow flex flex-col justify-center">
                  <p
                    className="text-gray-300 text-lg leading-relaxed mb-8 italic"
                    style={{ color: "var(--text-color)" }}
                  >
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 clip-hex-pointy overflow-hidden relative border-2 border-honey-gold/20">
                      <Image
                        src={testimonials[currentTestimonial].avatar}
                        alt={testimonials[currentTestimonial].name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4
                        className="text-white font-semibold text-lg"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p
                        className="text-gray-400"
                        style={{ color: "var(--text-color)" }}
                      >
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-gray-300/70 hover:bg-gray-400/70 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-gray-400 dark:border-white/10"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft
                      className="w-5 h-5"
                      style={{ color: "var(--chevron-color)" }}
                    />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2.5 h-2.5 clip-hex transition-colors ${
                          index === currentTestimonial
                            ? "bg-honey-gold"
                            : "bg-gray-400 dark:bg-white/30"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-gray-300/70 hover:bg-gray-400/70 dark:bg-white/10 dark:hover:bg-white/20 rounded-full flex items-center justify-center transition-colors border border-gray-400 dark:border-white/10"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight
                      className="w-5 h-5"
                      style={{ color: "var(--chevron-color)" }}
                    />
                  </button>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
