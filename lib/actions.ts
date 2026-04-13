"use server";

import { redirect, unstable_rethrow } from "next/navigation";
import { createClient } from "./supabase/server";

async function loginGoogle() {
  const supabase = await createClient();
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback?next=/`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      return {
        message: error.message,
        success: false,
      };
    }

    if (data.url) {
      redirect(data.url);
    }
  } catch (error) {
    unstable_rethrow(error);

    return {
      message: "Internal Server Error",
      success: false,
    };
  }
}

export { loginGoogle };
