import { cacheLife, cacheTag } from "next/cache";
import { createClient } from "./supabase/server";
import { cookies } from "next/headers";

async function getUsers() {
  "use cache: private";

  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const user = await supabase.auth.getUser();

  cacheLife("max");
  cacheTag(`user-${user.data.user?.id}`);

  return user;
}

async function getTodos() {
  "use cache: remote";
  cacheLife("days");
  cacheTag("todos");
  const supabase = await createClient();

  const { data: todos } = await supabase.from("todos").select();

  return todos;
}
export { getTodos, getUsers };
