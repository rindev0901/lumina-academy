import { Database } from "./index";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export type SupabaseClient = ReturnType<
  typeof createBrowserClient<Database>
>;

let client: SupabaseClient | undefined;

export function createClient() {
  if (client) {
    return client;
  }

  client = createBrowserClient<Database>(supabaseUrl!, supabaseKey!);

  return client;
}
