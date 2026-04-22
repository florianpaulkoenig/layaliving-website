import { createClient } from "@supabase/supabase-js";

/**
 * Browser- and server-safe Supabase client using the anon (public) key.
 * The `recommendations` table is read-only for anon via RLS — public visitors
 * can SELECT rows where published = true, nothing else.
 */
export function supabasePublic() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }
  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) =>
        fetch(input, { ...(init ?? {}), cache: "no-store" }),
    },
  });
}
