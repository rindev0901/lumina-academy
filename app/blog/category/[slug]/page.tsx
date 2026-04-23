import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ImageFallback from "@/components/image-fallback";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Blog, BlogCategory, getBlogCategories, getBlogs } from "@/lib/data";
import { format } from "date-fns";
import { DATE_FORMAT } from "@/app/constants";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data: cates } = await getBlogCategories();

  return cates?.map((c) => ({
    slug: c.slug,
  })) ?? [];
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const [blogsResult, categoriesResult] = await Promise.all([
    getBlogs({ cateSlug: slug }),
    getBlogCategories(),
  ]);

  if (!blogsResult.success && blogsResult.error) {
    throw new Error(blogsResult.error.message, {
      cause: blogsResult.error.details,
    });
  }

  if (!categoriesResult.success && categoriesResult.error) {
    throw new Error(categoriesResult.error.message, {
      cause: categoriesResult.error.details,
    });
  }

  const blogs = blogsResult.data;
  const categories = categoriesResult.data;
  const selectedCategory =
    slug === "all" ? null : categories.find((cat) => cat.slug === slug);

  const category = selectedCategory
    ? {
        title: selectedCategory.name,
        desc:
          selectedCategory.description ??
          "Exploring insights and trends in this category.",
      }
    : {
        title:
          slug === "all"
            ? "All Categories"
            : slug
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),
        desc:
          slug === "all"
            ? "Browse insights across every blog category."
            : "Exploring insights and trends in this category.",
      };

  return (
    <>
      <NavBar />
      <main className="pt-20 bg-surface min-h-screen pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full">
            CATEGORY
          </Badge>
          <h1 className="text-4xl md:text-7xl font-headline font-extrabold tracking-tight text-on-surface mb-6 leading-tight">
            {category.title}
          </h1>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            {category.desc}
          </p>

          <div className="max-w-2xl mx-auto relative mb-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
            <Input
              type="text"
              placeholder={`Search in ${category.title}...`}
              className="w-full h-14 md:h-16 bg-surface-container-low border-none rounded-full pl-14 pr-6 text-base md:text-lg focus-visible:ring-2 focus-visible:ring-primary/40 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8 md:mb-16">
            <Link
              href="/blog/category/all"
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                slug === "all"
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container",
              )}
            >
              All
            </Link>
            {categories.map((cat: BlogCategory) => (
              <Link
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  cat.slug === slug
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container",
                )}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <div className="text-left mb-24">
            {blogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {blogs.map((post: Blog) => (
                  <div key={post.id} className="group flex flex-col h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 block ambient-shadow"
                    >
                      <ImageFallback
                        src={post.thumbnail_url}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </Link>
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 text-primary">
                        <span>{post.category?.name ?? "INSIGHTS"}</span>
                        <span className="text-outline-variant">•</span>
                        <span>{post.min_read} MIN READ</span>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl md:text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                        {post.content}
                      </p>
                      <div className="mt-auto pt-6 border-t border-surface-container flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden relative">
                            <ImageFallback
                              src={
                                post.author.avatar_url ??
                                "https://picsum.photos/seed/author/100/100"
                              }
                              alt={post.author.full_name ?? "Author"}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-on-surface">
                              {post.author.full_name ?? "Author"}
                            </p>
                            <p className="text-[10px] text-outline">
                              {format(
                                post.created_at ?? new Date(),
                                DATE_FORMAT.MIXED,
                              )}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-surface-container-low rounded-[2rem] p-12 text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-headline font-bold mb-4">
                  No insights found yet
                </h2>
                <p className="text-on-surface-variant mb-8">
                  We&apos;re currently crafting new content for this category.
                  Stay tuned!
                </p>
                <Link
                  href="/blog"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "h-auto px-6 py-3 rounded-xl",
                  )}
                >
                  Browse Other Categories
                </Link>
              </div>
            )}

            {/* Pagination */}
            {blogs.length > 0 && (
              <div className="flex items-center justify-center gap-3 mt-16 md:mt-24">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-surface-container text-outline hover:bg-surface-container-low transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button className="w-10 h-10 rounded-full bg-primary text-white font-bold">
                  1
                </Button>
                <Button
                  variant="ghost"
                  className="w-10 h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors"
                >
                  2
                </Button>
                <Button
                  variant="ghost"
                  className="w-10 h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors"
                >
                  3
                </Button>
                <span className="text-outline">...</span>
                <Button
                  variant="ghost"
                  className="w-10 h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors"
                >
                  12
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-full border-surface-container text-outline hover:bg-surface-container-low transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>

          {/* New Footer CTA */}
          <div className="mt-24 bg-primary rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 text-center text-white relative overflow-hidden ambient-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 backdrop-blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-32 -mb-32 backdrop-blur-3xl"></div>

            <h2 className="text-3xl md:text-6xl font-headline font-extrabold mb-6 relative z-10">
              Stay ahead of the curve
            </h2>
            <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
              Weekly insights on tech trends, career opportunities, and course
              updates delivered straight to your inbox.
            </p>

            <div className="relative z-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-4 p-2 bg-white/10 rounded-2xl md:rounded-full border border-white/20 backdrop-blur-sm">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-transparent border-none text-white placeholder:text-white/60 focus-visible:ring-0 h-12 px-6"
              />
              <Button className="bg-white text-primary hover:bg-white/90 font-extrabold px-8 h-12 rounded-xl md:rounded-full shadow-lg transition-all active:scale-95">
                Join Now
              </Button>
            </div>
            <p className="text-xs text-white/50 mt-6 relative z-10 italic">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
