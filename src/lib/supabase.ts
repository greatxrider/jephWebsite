import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Helper to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'https://placeholder.supabase.co' &&
    supabaseKey !== 'placeholder-anon-key'
}

// Database types
export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          tools_used: string[]
          demo_url: string | null
          github_url: string | null
          category: string
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          tools_used: string[]
          demo_url?: string | null
          github_url?: string | null
          category: string
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          tools_used?: string[]
          demo_url?: string | null
          github_url?: string | null
          category?: string
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          image_url: string | null
          tags: string[]
          published: boolean
          slug: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          image_url?: string | null
          tags: string[]
          published?: boolean
          slug: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          image_url?: string | null
          tags?: string[]
          published?: boolean
          slug?: string
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}

export type Project = Database['public']['Tables']['projects']['Row']
export type BlogPost = Database['public']['Tables']['blog_posts']['Row']
export type ContactMessage = Database['public']['Tables']['contact_messages']['Row'] 