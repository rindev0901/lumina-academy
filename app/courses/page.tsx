'use client';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, ArrowRight, Star, School, Award, Users, Settings, HelpCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CoursesPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <NavBar showSearch={true} />
      
      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden lg:flex flex-col pt-8 h-[calc(100vh-5rem)] top-20 w-64 fixed left-0 bg-white font-body border-r border-surface-container z-40">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="https://picsum.photos/seed/alex/100/100" alt="Alex Johnson" fill sizes="40px" className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <p className="font-headline font-bold text-sm text-on-surface">Alex Johnson</p>
            <p className="text-xs text-outline">Pro Learner</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-6 py-4 text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200">
            <School className="w-5 h-5" />
            <span className="text-sm">My Learning</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-6 py-4 text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200">
            <Award className="w-5 h-5" />
            <span className="text-sm">Certificates</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-6 py-4 text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200">
            <Users className="w-5 h-5" />
            <span className="text-sm">Community</span>
          </Link>
          <Link href="#" className="flex items-center gap-3 px-6 py-4 text-slate-500 hover:text-slate-900 hover:translate-x-1 transition-transform duration-200">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </Link>
        </nav>
        <div className="p-6">
          <div className="bg-primary-fixed p-4 rounded-xl">
            <p className="text-xs font-bold text-on-primary-fixed-variant mb-2">UNLOCK EVERYTHING</p>
            <Button className="w-full signature-gradient text-on-primary py-2 rounded-lg text-xs font-bold">Go Premium</Button>
          </div>
        </div>
        <div className="p-4 border-t border-surface-container mt-auto">
          <Link href="#" className="flex items-center gap-3 px-2 py-3 text-slate-500 text-sm hover:text-blue-600 transition-colors">
            <HelpCircle className="w-5 h-5" />
            Help Center
          </Link>
        </div>
      </aside>

      <main className="lg:pl-64 pt-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Header Section */}
          <header className="mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-3 md:mb-4">Explore Our Pathways</h1>
                <p className="text-sm md:text-lg text-on-surface-variant max-w-2xl">Master the skills of the future with our curated collection of professional courses taught by industry leaders.</p>
              </div>
              
              {/* Mobile Filters & Sort */}
              <div className="flex md:hidden gap-4 w-full">
                <Button 
                  variant="secondary"
                  onClick={() => setIsFilterOpen(true)}
                  className="flex-1 bg-surface-container-low flex items-center justify-center gap-2 rounded-lg text-sm font-semibold py-6"
                >
                  <Filter className="w-4 h-4" /> Filters
                </Button>
                <select className="flex-1 bg-surface-container-low border-none rounded-lg text-sm font-semibold px-4 py-3 focus:ring-2 focus:ring-primary/20 outline-none appearance-none text-center">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Price (Low to High)</option>
                </select>
              </div>

              {/* Desktop Sort */}
              <div className="hidden md:flex items-center gap-4">
                <label className="text-xs font-label uppercase tracking-widest text-outline">Sort By</label>
                <select className="bg-surface-container-low border-none rounded-lg text-sm font-semibold px-4 py-2.5 focus:ring-2 focus:ring-primary/20 outline-none">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Price (Low to High)</option>
                </select>
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Desktop Filter Sidebar */}
            <aside className="hidden lg:block w-64 space-y-8 shrink-0">
              <FilterContent />
            </aside>

            {/* Mobile Filter Drawer */}
            {isFilterOpen && (
              <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)}></div>
                <div className="relative bg-white w-full rounded-t-3xl p-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom-full duration-300">
                  <div className="w-12 h-1.5 bg-surface-container-high rounded-full mx-auto mb-6"></div>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-headline font-bold">Filters</h2>
                    <Button variant="ghost" size="icon" onClick={() => setIsFilterOpen(false)} className="rounded-full">
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                  <FilterContent />
                </div>
              </div>
            )}

            {/* Course Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                {[
                  { title: "Mastering Advanced React & Next.js", author: "Dr. Sarah Waters", price: "$89.99", rating: "4.9", cat: "PROGRAMMING", badge: "BESTSELLER", img: "react-next" },
                  { title: "UX/UI Foundations: High-Fidelity Design", author: "Markus Thorne", price: "$74.50", rating: "4.8", cat: "DESIGN", img: "ux-ui" },
                  { title: "Python for Data Analysis & Visualization", author: "Elena Rodriguez", price: "$99.00", rating: "4.7", cat: "DATA SCIENCE", img: "python" },
                  { title: "Digital Marketing Strategy for 2024", author: "Chris Evanson", price: "$59.99", rating: "4.9", cat: "MARKETING", img: "marketing-strat" },
                  { title: "Building Scalable Backend Systems with Go", author: "Amit Kumar", price: "$120.00", rating: "4.6", cat: "PROGRAMMING", img: "go-backend" },
                  { title: "Interaction Design for Emerging Tech", author: "Lisa Choo", price: "$115.00", rating: "5.0", cat: "DESIGN", badge: "NEW", badgeColor: "bg-tertiary", img: "interaction" }
                ].map((course, i) => (
                  <Link href={`/courses/${i + 1}`} key={i} className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:bg-surface-bright transition-all duration-300 ambient-shadow block">
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <Image src={`https://picsum.photos/seed/${course.img}/600/400`} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                      {course.badge && (
                        <span className={`absolute top-4 left-4 ${course.badgeColor || 'bg-primary'} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest uppercase`}>
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">{course.cat}</span>
                        <div className="flex items-center gap-1 text-tertiary">
                          <Star className="w-3.5 h-3.5 fill-tertiary" />
                          <span className="text-xs font-bold">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-base md:text-lg font-headline font-bold text-on-surface mb-2 leading-tight">{course.title}</h3>
                      <p className="text-xs md:text-sm text-outline mb-4 md:mb-6">{course.author}</p>
                      <div className="flex items-center justify-between border-t border-surface-container-low pt-4">
                        <span className="text-lg md:text-xl font-headline font-black text-on-surface">{course.price}</span>
                        <span className="text-primary font-headline font-bold text-xs md:text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Course <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12 md:mt-16">
                <Button variant="ghost" size="icon" className="w-8 h-8 md:w-10 md:h-10 rounded-full text-outline hover:bg-surface-container-low transition-colors"><ChevronLeft className="w-4 h-4 md:w-5 md:h-5" /></Button>
                <Button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white font-bold text-sm md:text-base">1</Button>
                <Button variant="ghost" className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors text-sm md:text-base">2</Button>
                <Button variant="ghost" className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors text-sm md:text-base">3</Button>
                <span className="text-outline">...</span>
                <Button variant="ghost" className="w-8 h-8 md:w-10 md:h-10 rounded-full hover:bg-surface-container-low font-bold text-on-surface-variant transition-colors text-sm md:text-base">12</Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 md:w-10 md:h-10 rounded-full text-outline hover:bg-surface-container-low transition-colors"><ChevronRight className="w-4 h-4 md:w-5 md:h-5" /></Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:pl-64">
        <Footer />
      </div>
    </>
  );
}

function FilterContent() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-headline font-bold text-on-surface mb-4 md:mb-6 flex items-center justify-between">
          Category
          <Filter className="hidden lg:block text-outline w-5 h-5" />
        </h3>
        <div className="space-y-4 md:space-y-3">
          {['Programming', 'Design', 'Data Science', 'Marketing'].map((cat, i) => (
            <Label key={cat} className="flex items-center gap-3 cursor-pointer group font-normal">
              <Checkbox defaultChecked={i === 0} className="border-outline-variant text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
              <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
            </Label>
          ))}
        </div>
      </div>
      <div className="h-px bg-surface-container-high"></div>
      <div>
        <h3 className="text-sm font-headline font-bold text-on-surface mb-4 md:mb-6">Price</h3>
        <div className="space-y-4 md:space-y-3">
          <Label className="flex items-center gap-3 cursor-pointer group font-normal">
            <input type="radio" name="price" className="w-5 h-5 border-outline-variant text-primary focus:ring-primary/20" />
            <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Free</span>
          </Label>
          <Label className="flex items-center gap-3 cursor-pointer group font-normal">
            <input type="radio" name="price" defaultChecked className="w-5 h-5 border-outline-variant text-primary focus:ring-primary/20" />
            <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Paid</span>
          </Label>
        </div>
      </div>
      <div className="h-px bg-surface-container-high"></div>
      <div>
        <h3 className="text-sm font-headline font-bold text-on-surface mb-4 md:mb-6">Level</h3>
        <div className="space-y-4 md:space-y-3">
          {['Beginner', 'Intermediate', 'Advanced'].map((lvl, i) => (
            <Label key={lvl} className="flex items-center gap-3 cursor-pointer group font-normal">
              <Checkbox defaultChecked={i === 1} className="border-outline-variant text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
              <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">{lvl}</span>
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}
