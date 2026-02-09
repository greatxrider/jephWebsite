"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HoneycombBackground } from "@/components/ui/HoneycombBackground";
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
  Brain,
  Zap,
  Workflow,
  ArrowRight,
  Users,
  Target,
  Building,
  CalendarDays,
  DollarSign,
  User,
  Mail as MailIcon,
  MessageCircle,
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
          "Thank you for your message! I'll get back to you within 24 hours."
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
      icon: <MailIcon className="w-5 h-5" />,
      label: "Email",
      value: "jephdaligdig98@gmail.com",
      link: "mailto:jephdaligdig98@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+63 975 948 3289",
      link: "tel:+639759483289",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Serving clients worldwide",
      link: null,
    },
  ];

  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Response",
      description: "2-4 hours during business days",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Expert Team",
      description: "AI specialists & engineers",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative bg-[#FFFEF7] dark:bg-black overflow-hidden py-20"
    >
      {/* Honeycomb Background */}
      <HoneycombBackground variant="neural-hive" density="medium" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-honey-gold text-sm font-medium mb-6 mx-auto">
            <Sparkles size={16} className="text-honey-gold" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="text-primary">
              Transform
            </span>{" "}
            Your Business
          </h2>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ color: "var(--text-color)" }}
          >
            Ready to automate your processes and accelerate growth? Get in touch
            with our AI automation experts today.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto justify-items-center items-stretch">
          {/* Left Card - AI-Powered Consultation */}
          <Card hover={false} className="bg-white/5 backdrop-blur-sm border border-white/10 transition-colors duration-300 mx-auto w-full max-w-md sm:max-w-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary clip-hex flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  AI-Powered Consultation
                </h3>
              </div>

              <p
                className="text-gray-400 mb-8"
                style={{ color: "var(--text-color)" }}
              >
                Our AI specialists analyze your business needs and design custom
                automation solutions that deliver measurable results.
              </p>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary clip-hex flex items-center justify-center">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium">{info.label}</p>
                        <p
                          className="text-gray-400 text-sm"
                          style={{ color: "var(--text-color)" }}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-8 h-8 bg-primary clip-hex flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="text-white font-semibold text-sm text-center mb-1">
                      {feature.title}
                    </h4>
                    <p
                      className="text-gray-400 text-xs text-center"
                      style={{ color: "var(--text-color)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Contact Form */}
          <Card hover={false} className="bg-white/5 backdrop-blur-sm border border-white/10 transition-colors duration-300 mx-auto w-full max-w-md sm:max-w-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary clip-hex flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Start Your Project
                </h3>
              </div>

              <p
                className="text-gray-400 mb-8"
                style={{ color: "var(--text-color)" }}
              >
                Tell us about your automation needs
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-honey-gold transition-colors"
                    style={{ color: "var(--input-text-color)" }}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-honey-gold transition-colors"
                    style={{ color: "var(--input-text-color)" }}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your automation needs..."
                    rows={4}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-honey-gold transition-colors resize-none"
                    style={{ color: "var(--input-text-color)" }}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Status */}
                {submitStatus !== "idle" && (
                  <div
                    className={`p-4 rounded-lg ${submitStatus === "success"
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-red-500/10 border border-red-500/20"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus === "success" ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      )}
                      <p
                        className={`text-sm ${submitStatus === "success"
                          ? "text-green-400"
                          : "text-red-400"
                          }`}
                      >
                        {submitMessage}
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white border-0 px-6 py-3 text-lg font-semibold shadow-lg shadow-honey-gold/25 hover:shadow-honey-gold/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 flex-shrink-0" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
