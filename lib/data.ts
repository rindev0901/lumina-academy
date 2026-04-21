import { cacheLife, cacheTag } from "next/cache";
import { createClient } from "./supabase/server";
import { cookies } from "next/headers";
import { getClient, query } from "./apollo-client";
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
async function getStudents() {
  "use cache: remote";

  cacheLife("days");
  cacheTag("students");

  await getClient().query({context: {
    
  }})

  const { data } = await query({
    query: ProfilesQuery,
  });

  if (!data) notFound();

  return data.profilesCollection?.edges;
}

export { getUsers, getStudents };
