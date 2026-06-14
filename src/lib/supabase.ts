import { createClient } from '@supabase/supabase-js';

// Fernando: Estas variables se leerán del archivo .env que debes crear en tu computadora
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);