import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Do NOT store Supabase credentials in source control.
 * Provide SUPABASE_URL and SUPABASE_KEY via environment (CI/EAS secrets/.env).
 *
 * This exports a factory so importing this file during install tooling doesn't blow up.
 */
const SUPABASE_URL = process.env.SUPABASE_URL ?? '';
const SUPABASE_KEY = process.env.SUPABASE_KEY ?? '';

export function createSupabaseClient(): SupabaseClient | null {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    // Avoid creating a client with missing credentials during installs / static checks.
    // Callers should handle null or pass credentials directly.
    // eslint-disable-next-line no-console
    console.warn('[supabase] SUPABASE_URL or SUPABASE_KEY not set — supabase client not created.');
    return null;
  }
  return createClient(SUPABASE_URL, SUPABASE_KEY);
}