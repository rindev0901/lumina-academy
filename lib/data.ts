import { cacheLife, cacheTag } from "next/cache";
import { createClient } from "./supabase/server";
import { cookies } from "next/headers";
import { getClient } from "./apollo-server";
import { ProfilesQuery } from "@/app/supabase/queries";
import { notFound } from "next/navigation";

async function getUsers() {
  "use cache: private";

  const cookieStore = await cookies();
  const supabase = await createClient({ cookieStore });

  const user = await supabase.auth.getUser();

  cacheLife("max");
  cacheTag(`user-${user.data.user?.id}`);

  return user;
}

export { getUsers };
