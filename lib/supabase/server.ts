import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

export async function createSupabaseServerClient() {
  const { getToken } = await auth();

  return createClient(env.supabaseUrl, env.supabasePublishableKey, {
    accessToken: () => getToken({ template: "supabase" }),
  });
}