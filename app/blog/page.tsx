import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Blog, getBlogs } from "@/lib/data";
import { format } from "date-fns";
import { DATE_FORMAT } from "@/app/constants";
import ImageFallback from "@/components/image-fallback";
import BlogCategories from "./blog-categories";

export default async function BlogListPage() {
  const { success, data: blogs, error } = await getBlogs();

  if (!success && error) {
    throw new Error(error.message, { cause: error.details });
  }

  const result = blogs.reduce<{
    recentBlogs: Array<Blog>;
    featuredBlog: Blog | null;
  }>(
    (acc, curr) => {
      if (curr.is_featured) {
        acc.featuredBlog = curr;
      } else {
        acc.recentBlogs.push(curr);
      }

      return acc;
    },
    {
      recentBlogs: [],
      featuredBlog: null,
    },
  );

  const { featuredBlog, recentBlogs } = result;

  return (
    <>
      <NavBar />
      <main className="pt-20 bg-surface min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Featured Article */}
          {featuredBlog && (
            <Link
              href={`/blog/${featuredBlog.id}`}
              className="group block mb-12 md:mb-20"
            >
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center bg-surface-container-lowest rounded-3xl md:rounded-[2.5rem] p-3 md:p-4 ambient-shadow hover:shadow-xl transition-shadow duration-500">
                <div className="relative aspect-video lg:aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden">
                  <ImageFallback
                    src={featuredBlog.thumbnail_url}
                    alt="Featured Article"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 md:p-8 lg:p-12">
                  <Badge className="bg-primary-fixed text-on-primary-fixed-variant hover:bg-primary-fixed text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full mb-4 md:mb-6">
                    FEATURED ARTICLE
                  </Badge>
                  <h1 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4 md:mb-6 leading-tight group-hover:text-primary transition-colors">
                    {featuredBlog.title}
                  </h1>
                  <p className="text-base md:text-lg text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
                    {featuredBlog.content}
                  </p>
                  <div className="space-x-2">
                    {featuredBlog.tags.map((tag) => (
                      <Badge
                        key={tag.id}
                        className="bg-primary-fixed text-on-primary-fixed-variant hover:bg-primary-fixed text-[10px] md:text-xs font-bold tracking-widest rounded-full mb-4 md:mb-6"
                      >
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative shrink-0">
                      <ImageFallback
                        src={
                          featuredBlog.author.avatar_url ??
                          "https://picsum.photos/seed/marcus/100/100"
                        }
                        alt={featuredBlog.author.full_name ?? "Author"}
                        fill
                        sizes="48px"
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm md:text-base text-on-surface">
                        {featuredBlog.author.full_name}
                      </p>
                      <p className="text-xs md:text-sm text-outline">
                        {format(
                          featuredBlog.created_at ?? new Date(),
                          DATE_FORMAT.MIXED,
                        )}{" "}
                        • {featuredBlog.min_read} min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
            {/* Recent Insights (Left) */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6 md:mb-10 border-b border-surface-container pb-4">
                <h2 className="text-2xl md:text-3xl font-headline font-bold">
                  Recent Insights
                </h2>
                <Button
                  variant="ghost"
                  className="text-primary font-bold text-xs md:text-sm flex items-center gap-1 hover:text-primary-container"
                >
                  LATEST <ChevronDown className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-8 md:space-y-12">
                {recentBlogs.map((post, i) => (
                  <Link
                    href="/blog/1"
                    key={i}
                    className="group flex flex-col sm:flex-row gap-4 md:gap-8 items-start sm:items-center"
                  >
                    <div className="relative w-full sm:w-48 md:w-64 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                      <ImageFallback
                        src={post.thumbnail_url}
                        alt={post.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 256px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2 md:mb-3">
                        <span className="text-primary">
                          {post.tags.find((tag) => tag.is_main)?.name}
                        </span>
                        <span className="text-outline-variant">•</span>
                        <span className="text-outline">
                          {format(
                            post.created_at ?? new Date(),
                            DATE_FORMAT.MIXED,
                          )}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-headline font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                        {post.content}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12 md:mt-16">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-surface-container text-outline hover:bg-surface-container-low transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
                <Button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white font-bold text-sm md:text-base">
                  1
                </Button>
                <Button
                  variant="ghost"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors text-sm md:text-base"
                >
                  2
                </Button>
                <Button
                  variant="ghost"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors text-sm md:text-base"
                >
                  3
                </Button>
                <span className="text-outline">...</span>
                <Button
                  variant="ghost"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors text-sm md:text-base"
                >
                  12
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border-surface-container text-outline hover:bg-surface-container-low transition-colors"
                >
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="space-y-10 md:space-y-12">
              {/* Search */}
              <div>
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-outline mb-3 md:mb-4">
                  SEARCH
                </h3>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-4 h-4 md:w-5 md:h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full bg-surface-container-lowest border-surface-container rounded-xl pl-10 md:pl-12 pr-4 py-6 text-sm md:text-base focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-outline mb-3 md:mb-4">
                  CATEGORIES
                </h3>
                <BlogCategories />
              </div>

              {/* Popular Reads */}
              <div>
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-outline mb-3 md:mb-4">
                  POPULAR READS
                </h3>
                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      title: "10 Habits of Highly Successful Self-Learners",
                      views: "2.4k",
                      img: "habits",
                    },
                    {
                      title: "Mastering React in 30 Days: A Roadmap",
                      views: "1.8k",
                      img: "react-roadmap",
                    },
                  ].map((post, i) => (
                    <Link
                      href="/blog/1"
                      key={i}
                      className="flex gap-3 md:gap-4 group"
                    >
                      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0">
                        <ImageFallback
                          src={`https://picsum.photos/seed/${post.img}/100/100`}
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
                          {post.views} Views
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-xl md:text-2xl font-headline font-bold mb-2 md:mb-3 relative z-10">
                  Elevate Your Inbox
                </h3>
                <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6 relative z-10">
                  Get the best of educational technology delivered weekly to
                  your email.
                </p>
                <form className="relative z-10 space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-black/20 border-white/10 rounded-xl px-4 h-12 text-sm md:text-base text-white placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-white/50"
                  />
                  <Button
                    type="button"
                    className="w-full bg-white text-primary font-bold h-12 rounded-xl text-sm md:text-base hover:bg-blue-50 transition-colors"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ChevronDown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
