"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { supabase, BlogPost, isSupabaseConfigured } from "@/lib/supabase";
import { formatDate } from "@/lib/dateUtils";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for development
  const mockPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building a SaaS Platform with Next.js, Supabase, and Stripe",
      content:
        "A comprehensive guide to building a production-ready SaaS platform with authentication, billing, and multi-tenant architecture...",
      excerpt:
        "Learn how to build a full-featured SaaS platform from scratch using Next.js, Supabase, and Stripe for subscription billing.",
      image_url: "https://picsum.photos/600/400?random=7",
      tags: ["Next.js", "SaaS", "Supabase", "Stripe"],
      published: true,
      slug: "building-saas-nextjs-supabase-stripe",
      created_at: "2024-01-15T00:00:00Z",
      updated_at: "2024-01-15T00:00:00Z",
    },
    {
      id: "2",
      title: "How to Build an AI Receptionist for Your Business",
      content:
        "Step-by-step guide to building an AI-powered virtual receptionist that handles calls, books appointments, and qualifies leads...",
      excerpt:
        "A practical guide to building AI receptionists using GPT-4, Twilio, and modern web technologies for 24/7 customer engagement.",
      image_url: "https://picsum.photos/600/400?random=8",
      tags: ["AI", "Receptionist", "GPT-4", "Twilio"],
      published: true,
      slug: "build-ai-receptionist-business",
      created_at: "2024-01-10T00:00:00Z",
      updated_at: "2024-01-10T00:00:00Z",
    },
    {
      id: "3",
      title: "Custom EMR Development: What Clinics Need to Know",
      content:
        "Everything you need to know about building a custom electronic medical records system for your healthcare practice...",
      excerpt:
        "Key considerations for developing HIPAA-compliant EMR/EHR systems, from patient management to clinical documentation.",
      image_url: "https://picsum.photos/600/400?random=9",
      tags: ["Healthcare", "EMR", "EHR", "HIPAA"],
      published: true,
      slug: "custom-emr-development-clinics",
      created_at: "2024-01-05T00:00:00Z",
      updated_at: "2024-01-05T00:00:00Z",
    },
    {
      id: "4",
      title: "React Native vs Flutter: Choosing the Right Mobile Framework",
      content:
        "An honest comparison of React Native and Flutter for cross-platform mobile development based on real project experience...",
      excerpt:
        "Comparing React Native and Flutter for mobile app development: performance, developer experience, and when to use each.",
      image_url: "https://picsum.photos/600/400?random=10",
      tags: ["React Native", "Flutter", "Mobile", "Cross-Platform"],
      published: true,
      slug: "react-native-vs-flutter-comparison",
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
    },
    {
      id: "5",
      title: "Automating Business Operations with Make, Zapier, and n8n",
      content:
        "How to choose the right automation platform and build workflows that save your team 20+ hours per week...",
      excerpt:
        "A practical guide to business process automation using Make, Zapier, and n8n with real-world examples and best practices.",
      image_url: "https://picsum.photos/600/400?random=11",
      tags: ["Automation", "Make", "Zapier", "n8n"],
      published: true,
      slug: "automating-business-operations-guide",
      created_at: "2023-12-28T00:00:00Z",
      updated_at: "2023-12-28T00:00:00Z",
    },
    {
      id: "6",
      title: "Integrating AI into Your Existing Software Stack",
      content:
        "Learn how to add AI capabilities to your existing applications using OpenAI, Claude, and custom model deployments...",
      excerpt:
        "Practical strategies for integrating AI models into existing software systems without rebuilding from scratch.",
      image_url: "https://picsum.photos/600/400?random=12",
      tags: ["AI Integration", "OpenAI", "Claude", "Software"],
      published: true,
      slug: "integrating-ai-existing-software-stack",
      created_at: "2023-12-20T00:00:00Z",
      updated_at: "2023-12-20T00:00:00Z",
    },
  ];

  const fetchPosts = useCallback(async () => {
    try {
      // Only try to fetch from Supabase if it's properly configured
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false });

        if (error) {
          console.warn("Supabase error, using mock data:", error);
          setPosts(mockPosts);
        } else {
          setPosts(data || mockPosts);
        }
      } else {
        // Supabase not configured, use mock data silently
        console.info("Supabase not configured, using mock blog data");
        setPosts(mockPosts);
      }
    } catch {
      console.warn("Database connection failed, using mock data");
      setPosts(mockPosts);
    } finally {
      setLoading(false);
    }
  }, [mockPosts]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(" ").length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-700 rounded w-96 mx-auto mb-8"></div>
              <div className="grid lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-800 rounded-lg h-96"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pt-20">
      {/* Honeycomb Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-honeycomb opacity-40"></div>
        <div className="absolute inset-0 bg-black/30"></div>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-honey-gold/10 border border-honey-gold/20 rounded-full text-honey-gold text-sm font-medium mb-4">
            <Sparkles size={16} className="text-honey-gold" />
            Tech & AI Insights
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Master Software Engineering with
            <span className="gradient-text"> Expert Insights</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Practical tutorials and insights on web development, SaaS,
            AI automation, AI receptionists, and software engineering.
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            {/* Featured Post */}
            <div className="mb-16">
              <Card className="card-ai">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square relative">
                    <Image
                      src={
                        posts[0].image_url ||
                        "https://picsum.photos/600/400?random=11"
                      }
                      alt={posts[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {formatDate(posts[0].created_at)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">
                          {getReadingTime(posts[0].content)}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6">{posts[0].excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {posts[0].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-honey-gold rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="self-start"
                      onClick={() =>
                        window.open(`/blog/${posts[0].slug}`, "_blank")
                      }
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* All Posts Grid */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                All <span className="gradient-text-ai">Articles</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="card-ai h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={
                          post.image_url ||
                          "https://picsum.photos/600/400?random=12"
                        }
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">
                            {formatDate(post.created_at)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">
                            {getReadingTime(post.content)}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3 hover:text-honey-gold transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-800 text-honey-gold rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          window.open(`/blog/${post.slug}`, "_blank")
                        }
                        className="p-0 h-auto text-honey-gold hover:text-honey-gold"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              I&apos;m working on some exciting content about software engineering and AI.
              Check back soon for the latest insights!
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Something Great?
              </h3>
              <p className="text-gray-300 mb-6">
                Need a web app, SaaS platform, AI receptionist, or automation
                system? Let&apos;s talk about your project.
              </p>
              <Button
                size="lg"
                onClick={() => window.open("/", "_self")}
                className="group"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
