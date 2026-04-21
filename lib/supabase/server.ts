import { Database } from "./index";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

type ClientArgs = {
  cookieStore?: Awaited<ReturnType<typeof cookies>>;
  isAdmin?: boolean;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabaseAdminKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY;

export const createClient = async ({
  cookieStore,
  isAdmin,
}: ClientArgs | undefined = {}) => {
  return createServerClient<Database>(
    supabaseUrl!,
    !!isAdmin ? supabaseAdminKey! : supabaseKey!,
    {
      cookies: {
        getAll() {
          return cookieStore?.getAll() || [];
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore?.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
