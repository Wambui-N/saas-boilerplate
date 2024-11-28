// src/lib/auth.ts
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { supabase } from "./supabase"; // Import the initialized supabase client

// You can define your database types in this file if needed
export const createSupabaseClient = () => createBrowserSupabaseClient();
