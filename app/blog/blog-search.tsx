import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default async function BlogSearch({
  searchParams,
}: {
  searchParams: PageProps<"/blog">["searchParams"];
}) {

  const search = await searchParams;

  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-4 h-4 md:w-5 md:h-5" />
      <Input
        type="text"
        placeholder="Search articles..."
        className="w-full bg-surface-container-lowest border-surface-container rounded-xl pl-10 md:pl-12 pr-4 py-6 text-sm md:text-base focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:border-primary transition-all"
      />
    </div>
  );
}
