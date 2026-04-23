import { QueryData } from "@supabase/supabase-js";
import { cacheLife, cacheTag } from "next/cache";
import { createClient } from "./supabase/server";

async function getBlogs({
  cateSlug = "",
}: { cateSlug?: string } | undefined = {}) {
  "use cache: remote";

  cacheLife("max");
  cacheTag("blogs");

  const supabase = await createClient({ isAdmin: true });

  let query = supabase
    .schema("public")
    .from("blogs")
    .select(
      "*, author:profiles(avatar_url, full_name), category:blog_categories!inner(id, name, slug), tags",
    )
    .eq("status", "published");

  if (cateSlug && cateSlug !== "all") {
    query = query.eq("category.slug", cateSlug);
  }

  query = query
    .order("created_at", { ascending: false })
    .order("updated_at", { ascending: false });

  return await query;
}

async function getBlogCategories() {
  "use cache: remote";

  cacheLife("max");
  cacheTag("blog_categories");

  const supabase = await createClient({ isAdmin: true });

  return await supabase
    .schema("public")
    .from("blog_categories")
    .select(
      `
    id,
    name,
    slug,
    description,
    blogs!inner(count)
  `,
    )
    .eq("blogs.status", "published");
}

async function getBlogPopular() {
  "use cache: remote";

  cacheLife("max");
  cacheTag("blog_categories");

  const supabase = await createClient();

  return await supabase
    .schema("public")
    .from("blogs")
    .select("id, title, slug, view_count, thumbnail_url")
    .order("view_count", { ascending: false })
    .limit(2);
}

type Blog = QueryData<ReturnType<typeof getBlogs>>[number];
type BlogCategory = QueryData<ReturnType<typeof getBlogCategories>>[number];
type BlogPopular = QueryData<ReturnType<typeof getBlogPopular>>[number];

export { getBlogs, getBlogCategories, getBlogPopular };

export type { Blog, BlogCategory, BlogPopular };
