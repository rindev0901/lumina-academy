"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NavBar({
  showSearch = false,
}: {
  showSearch?: boolean;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-4 md:px-8 h-20 max-w-full mx-auto">
        <div className="flex items-center gap-4 md:gap-12">
          <Link
            href="/"
            className="text-xl md:text-2xl font-black tracking-tighter text-blue-600 font-headline"
          >
            EdTech Canvas
          </Link>
          <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-semibold text-sm">
            <Link
              href="/courses"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              Courses
            </Link>
            <Link
              href="/blog"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              Blog
            </Link>
            <Link
              href="/courses"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              Pathways
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-blue-600 transition-all duration-300"
            >
              About
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          {showSearch && (
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
              <Input
                type="text"
                placeholder="Search courses..."
                className="bg-surface-container-low border-none rounded-md pl-10 pr-4 py-2 text-sm focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:bg-surface-container-lowest w-48 lg:w-64 transition-all"
              />
            </div>
          )}
          <Link href="/login" className="hidden md:block">
            <Button
              variant="ghost"
              className="text-slate-600 hover:bg-blue-50/50 hover:text-blue-600 rounded-full font-semibold"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup" className="hidden md:block">
            <Button className="signature-gradient rounded-full text-white font-bold scale-95 active:scale-90 transition-transform">
              Sign Up
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-surface-container shadow-lg py-4 px-4 flex flex-col gap-4">
          {showSearch && (
            <div className="relative w-full mb-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
              <Input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-surface-container-low border-none rounded-md pl-10 pr-4 py-6 text-sm focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:bg-surface-container-lowest transition-all"
              />
            </div>
          )}
          <Link
            href="/courses"
            className="text-slate-600 font-semibold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/blog"
            className="text-slate-600 font-semibold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/courses"
            className="text-slate-600 font-semibold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pathways
          </Link>
          <Link
            href="/about"
            className="text-slate-600 font-semibold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="h-px bg-surface-container w-full my-2"></div>
          <Link
            href="/login"
            className="text-slate-600 font-semibold py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </Link>
          <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
            <Button className="signature-gradient w-full py-6 rounded-full text-white text-base font-bold mt-2">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
