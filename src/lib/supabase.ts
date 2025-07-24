import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          city: string | null
          is_admin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          city?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          city?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          subtitle: string
          date: string
          time: string
          venue: string
          location: string
          capacity: number
          flyer_url: string
          description: string
          lineup: string[]
          ticket_tiers: any
          status: 'upcoming' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          subtitle: string
          date: string
          time: string
          venue: string
          location: string
          capacity: number
          flyer_url: string
          description: string
          lineup: string[]
          ticket_tiers: any
          status?: 'upcoming' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          subtitle?: string
          date?: string
          time?: string
          venue?: string
          location?: string
          capacity?: number
          flyer_url?: string
          description?: string
          lineup?: string[]
          ticket_tiers?: any
          status?: 'upcoming' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      sets: {
        Row: {
          id: string
          event_id: string
          title: string
          artist: string
          youtube_url: string | null
          soundcloud_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          title: string
          artist: string
          youtube_url?: string | null
          soundcloud_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          title?: string
          artist?: string
          youtube_url?: string | null
          soundcloud_url?: string | null
          created_at?: string
        }
      }
      tickets: {
        Row: {
          id: string
          event_id: string
          user_id: string
          tier: string
          price: number
          stripe_payment_id: string
          status: 'pending' | 'confirmed' | 'cancelled'
          created_at: string
        }
        Insert: {
          id?: string
          event_id: string
          user_id: string
          tier: string
          price: number
          stripe_payment_id: string
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
        Update: {
          id?: string
          event_id?: string
          user_id?: string
          tier?: string
          price?: number
          stripe_payment_id?: string
          status?: 'pending' | 'confirmed' | 'cancelled'
          created_at?: string
        }
      }
    }
  }
}