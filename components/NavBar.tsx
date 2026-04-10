import Link from 'next/link';
import { Search } from 'lucide-react';

export default function NavBar({ showSearch = false }: { showSearch?: boolean }) {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 h-20 max-w-full mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-black tracking-tighter text-blue-600 font-headline">
            EdTech Canvas
          </Link>
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-semibold text-sm">
            <Link href="/courses" className="text-slate-600 hover:text-blue-600 transition-all duration-300">
              Courses
            </Link>
            <Link href="/blog/1" className="text-slate-600 hover:text-blue-600 transition-all duration-300">
              Blog
            </Link>
            <Link href="/courses" className="text-slate-600 hover:text-blue-600 transition-all duration-300">
              Pathways
            </Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-all duration-300">
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {showSearch && (
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="bg-surface-container-low border-none rounded-md pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest w-64 transition-all outline-none"
              />
            </div>
          )}
          <Link href="/dashboard" className="px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50/50 transition-all rounded-full">
            Log In
          </Link>
          <button className="signature-gradient px-6 py-2.5 rounded-full text-white text-sm font-bold scale-95 active:scale-90 transition-transform">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
