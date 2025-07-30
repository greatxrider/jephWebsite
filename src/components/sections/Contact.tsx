"use client";

import { useState, useEffect, useRef } from "react";
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
  Brain,
  Zap,
  Workflow,
  ArrowRight,
  Users,
  Target,
  Building,
  CalendarDays,
  DollarSign,
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
}

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

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
          phone: data.phone,
          company: data.company,
          service_type: data.serviceType,
          budget: data.budget,
          timeline: data.timeline,
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
      value: "Serving clients worldwide",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding relative mt-20 mb-20 bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our AI automation experts today.
          </p>
        </div>
      </div>
    </section>
  );
};
