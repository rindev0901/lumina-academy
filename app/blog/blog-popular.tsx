import ImageFallback from "@/components/image-fallback";
import { getBlogPopular } from "@/lib/data";
import Link from "next/link";

export default async function BlogPopular() {
  const { data: blogsPopular, error, success } = await getBlogPopular();

  if (!success && error) {
    throw new Error(error.message, { cause: error.hint || error.details });
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {blogsPopular.map((post, i) => (
        <Link href={`/blog/${post.slug}`} key={i} className="flex gap-3 md:gap-4 group">
          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0">
            <ImageFallback
              src={post.thumbnail_url}
              alt={post.title}
              fill
              sizes="64px"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h4 className="font-bold text-xs md:text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
              {post.title}
            </h4>
            <p className="text-[10px] md:text-xs text-outline">
              {post.view_count} Views
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
