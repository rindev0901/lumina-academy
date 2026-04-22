import { QueryData } from "@supabase/supabase-js";
import { cacheLife, cacheTag } from "next/cache";
import { createClient } from "./supabase/server";

async function getBlogs() {
  "use cache: remote";

  cacheLife("max");
  cacheTag("blogs");

  const supabase = await createClient({ isAdmin: true });

  return await supabase
    .schema("public")
    .from("blogs")
    .select(
      "*, author:profiles(avatar_url, full_name), tags:blog_category_map(...blog_categories(id, name, slug), is_main)",
    )
    .order("created_at", { ascending: false })
    .order("updated_at", { ascending: false });
}

async function getBlogCategories() {
  "use cache: remote";

  cacheLife("max");
  cacheTag("blog_categories");

  const supabase = await createClient({ isAdmin: true });

  return await supabase
    .schema("public")
    .from("blog_categories")
    .select("id, name, slug, ...blog_category_map(count)");
}

type Blog = QueryData<ReturnType<typeof getBlogs>>[number];
type BlogCategory = QueryData<ReturnType<typeof getBlogCategories>>[number];

export { getBlogs, getBlogCategories };

export type { Blog, BlogCategory };
