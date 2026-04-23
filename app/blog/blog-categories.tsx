import { getBlogCategories } from "@/lib/data";
import Link from "next/link";

export default async function BlogCategories() {
  const { success, error, data: categories } = await getBlogCategories();

  if (!success && error) {
    throw new Error(error.message, { cause: error.hint || error.details });
  }

  return (
    <ul className="space-y-2 md:space-y-3">
      {categories.map((cat, i) => (
        <li key={i}>
          <Link href="#" className="flex items-center justify-between group">
            <span className="text-sm md:text-base text-on-surface-variant group-hover:text-primary transition-colors">
              {cat.name}
            </span>
            <span className="bg-surface-container-low text-outline text-[10px] md:text-xs font-bold px-2 py-1 rounded-md group-hover:bg-primary-fixed group-hover:text-on-primary-fixed-variant transition-colors">
              {cat.blogs[0].count}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
