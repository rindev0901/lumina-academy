"use server";

import { redirect, unstable_rethrow } from "next/navigation";
import { createClient } from "./supabase/server";
import { Route } from "next";
import { cookies } from "next/headers";

async function loginGoogle() {
  const cookieStore = await cookies();

  const supabase = await createClient({ cookieStore });
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback?next=/supabase`,
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
      redirect(data.url as Route);
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
