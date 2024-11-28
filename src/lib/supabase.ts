// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string; // Store in .env.local
const supabaseKey = process.env.SUPABASE_ANON_KEY as string; // Store in .env.local

export const supabase = createClient(supabaseUrl, supabaseKey);
