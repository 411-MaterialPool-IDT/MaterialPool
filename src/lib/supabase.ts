import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Faltan las variables de entorno de Supabase en el archivo .env");
}

// Patrón Singleton para evitar el aviso de múltiples instancias en consola
const globalForSupabase = global as unknown as { supabase: any };

export const supabase = globalForSupabase.supabase || createClient(supabaseUrl, supabaseKey);

if (process.env.NODE_ENV !== 'production') {
  globalForSupabase.supabase = supabase;
}