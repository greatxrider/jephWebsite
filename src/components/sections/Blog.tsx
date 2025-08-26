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
} from "lucide-react";

export const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for development
  const mockPosts: BlogPost[] = [
    {
      id: "1",
      title: "Building Intelligent Workflows: Make vs Zapier vs n8n in 2024",
      content:
        "A comprehensive comparison of the top no-code automation platforms and how to choose the right one for your AI-powered workflows...",
      excerpt:
        "Discover the strengths and use cases of Make, Zapier, and n8n for building AI-powered automation workflows in 2024.",
      image_url: "https://picsum.photos/600/400?random=7",
      tags: ["Make", "Zapier", "n8n", "Comparison", "Automation"],
      published: true,
      slug: "make-vs-zapier-vs-n8n-2024",
      created_at: "2024-01-15T00:00:00Z",
      updated_at: "2024-01-15T00:00:00Z",
    },
    {
      id: "2",
      title: "Integrating Claude AI into Your Automation Workflows",
      content:
        "Learn how to leverage Claude (Anthropic) in your automation workflows for superior content generation and analysis...",
      excerpt:
        "A step-by-step guide to integrating Claude AI into Make, Zapier, and n8n workflows for enhanced automation intelligence.",
      image_url: "https://picsum.photos/600/400?random=8",
      tags: ["Claude", "Anthropic", "AI Integration", "Workflows"],
      published: true,
      slug: "claude-ai-automation-workflows",
      created_at: "2024-01-10T00:00:00Z",
      updated_at: "2024-01-10T00:00:00Z",
    },
    {
      id: "3",
      title: "OpenAI API Best Practices for Business Automation",
      content:
        "Master the OpenAI API with proven strategies for building reliable, cost-effective AI automation systems...",
      excerpt:
        "Essential best practices for implementing OpenAI GPT models in your business automation workflows with real examples.",
      image_url: "https://picsum.photos/600/400?random=9",
      tags: ["OpenAI", "GPT", "API", "Best Practices", "Business"],
      published: true,
      slug: "openai-api-business-automation-best-practices",
      created_at: "2024-01-05T00:00:00Z",
      updated_at: "2024-01-05T00:00:00Z",
    },
    {
      id: "4",
      title: "Advanced n8n Workflows: REST API Integration with Error Handling",
      content:
        "Build robust n8n workflows that handle REST API integrations with proper error handling and retry logic...",
      excerpt:
        "Learn advanced n8n techniques for building bulletproof API integrations with comprehensive error handling strategies.",
      image_url: "https://picsum.photos/600/400?random=10",
      tags: ["n8n", "REST API", "Error Handling", "Advanced", "Integration"],
      published: true,
      slug: "advanced-n8n-rest-api-error-handling",
      created_at: "2024-01-01T00:00:00Z",
      updated_at: "2024-01-01T00:00:00Z",
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
          .order("created_at", { ascending: false })
          .limit(6);

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

  // formatDate is now imported from dateUtils

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(" ").length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <section id="blog" className="section-padding bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-48 mx-auto mb-4"></div>
              <div className="h-12 bg-gray-700 rounded w-96 mx-auto mb-8"></div>
              <div className="grid lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-gray-800 rounded-lg h-96"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section-padding relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-medium mb-4">
            <Sparkles size={16} />
            AI Automation Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Master AI Automation with
            <span className="gradient-text"> Expert Insights</span>
          </h2>
          <p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            style={{ color: "var(--text-color)" }}
          >
            Learn from real-world experience with Make, Zapier, n8n, and modern
            AI tools. Get practical tutorials, best practices, and insider tips
            for building intelligent automation.
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
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {posts[0].title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6"
                      style={{ color: "var(--text-color)" }}
                    >
                      {posts[0].excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {posts[0].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-orange-500 rounded-full text-sm"
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

            {/* Other Posts */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.slice(1).map((post) => (
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
                    <h3 className="text-lg font-bold text-white mb-3 hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>
                    <p
                      className="text-gray-300 text-sm mb-4"
                      style={{ color: "var(--text-color)" }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-800 text-orange-500 rounded text-xs"
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
                      className="p-0 h-auto text-orange-500 hover:text-orange-400"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              Coming Soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              I&apos;m working on some exciting content about automation and AI.
              Check back soon for the latest insights!
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-3xl mx-auto card-ai">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Master AI Automation?
              </h3>
              <p className="text-gray-300 mb-6">
                Get expert guidance on implementing Make, Zapier, n8n, and AI
                tools in your business. Let&apos;s build intelligent automation
                that delivers real results.
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
                  onClick={() => window.open("/blog", "_blank")}
                >
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Read All Articles
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
