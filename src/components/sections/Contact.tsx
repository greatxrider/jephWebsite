"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { supabase } from "@/lib/supabase";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Clock,
  MessageSquare,
  Send,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      ]);

      if (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
        setSubmitMessage(
          "There was an error sending your message. Please try again or contact me directly."
        );
      } else {
        setSubmitStatus("success");
        setSubmitMessage(
          "Thank you for your message! I&apos;ll get back to you within 24 hours."
        );
        reset();
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "There was an error sending your message. Please try again or contact me directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@jeph.dev",
      link: "mailto:hello@jeph.dev",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Remote / Global",
      link: null,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Free AI Automation Consultation",
      description:
        "Get a 30-minute consultation to explore how Make, Zapier, n8n, and AI can transform your business.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom AI Workflow Solutions",
      description:
        "Tailored automation strategies using Claude, OpenAI, and modern tools designed for your specific needs.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Implementation",
      description:
        "Fast turnaround on automation projects with comprehensive testing and reliable deployment.",
    },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
            <Sparkles size={16} />
            Let&apos;s Build AI Automation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transform Your Business with
            <span className="gradient-text"> Intelligent Automation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to automate with Make, Zapier, n8n, and cutting-edge AI?
            Let&apos;s create intelligent workflows that save time, reduce
            errors, and scale your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="h-full card-ai">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send Message</h3>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3 animate-fade-in-up">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-green-400">{submitMessage}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3 animate-fade-in-up">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-red-400">{submitMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                    placeholder="Tell me about your automation goals and which AI tools you'd like to integrate (Make, Zapier, n8n, Claude, OpenAI, etc.)..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="card-ai">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Get in Touch
                  </h3>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-orange-500">{info.icon}</div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-orange-500 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="card-ai">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  What You Get
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-orange-500 mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Calendar CTA */}
            <Card className="card-ai bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  Schedule a Call
                </h3>
                <p className="text-gray-300 mb-4">
                  Prefer to talk directly? Schedule a free 30-minute
                  consultation to discuss your automation needs.
                </p>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open("https://calendly.com/jeph", "_blank")
                  }
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Book a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Scale with AI Automation?
              </h3>
              <p className="text-gray-300 mb-6">
                Stop wasting time on manual tasks. Let&apos;s build intelligent
                automation using Make, Zapier, n8n, and modern AI that
                transforms your operations.
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
                >
                  Start AI Automation Project
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
