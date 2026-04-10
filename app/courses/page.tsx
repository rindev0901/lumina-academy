import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, ArrowRight, Star, School, Award, Users, Settings, HelpCircle } from 'lucide-react';

export default function CoursesPage() {
  return (
    <>
      <NavBar showSearch={true} />
      
      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden lg:flex flex-col pt-24 h-screen w-64 fixed left-0 bg-white font-body border-r-0 z-40">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image src="https://picsum.photos/seed/alex/100/100" alt="Alex Johnson" fill className="object-cover" referrerPolicy="no-referrer" />
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
            <button className="w-full signature-gradient text-on-primary py-2 rounded-lg text-xs font-bold">Go Premium</button>
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
        <div className="max-w-[1400px] mx-auto px-8 py-12">
          {/* Header Section */}
          <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter text-on-surface mb-4">Explore Our Pathways</h1>
                <p className="text-lg text-on-surface-variant max-w-2xl">Master the skills of the future with our curated collection of professional courses taught by industry leaders.</p>
              </div>
              <div className="flex items-center gap-4">
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
            {/* Filter Sidebar */}
            <aside className="w-full lg:w-64 space-y-8">
              <div>
                <h3 className="text-sm font-headline font-bold text-on-surface mb-6 flex items-center justify-between">
                  Category
                  <Filter className="text-outline w-5 h-5" />
                </h3>
                <div className="space-y-3">
                  {['Programming', 'Design', 'Data Science', 'Marketing'].map((cat, i) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked={i === 0} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" />
                      <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="h-px bg-surface-container-high"></div>
              <div>
                <h3 className="text-sm font-headline font-bold text-on-surface mb-6">Price</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" className="w-5 h-5 border-outline-variant text-primary focus:ring-primary/20" />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Free</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="price" defaultChecked className="w-5 h-5 border-outline-variant text-primary focus:ring-primary/20" />
                    <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">Paid</span>
                  </label>
                </div>
              </div>
              <div className="h-px bg-surface-container-high"></div>
              <div>
                <h3 className="text-sm font-headline font-bold text-on-surface mb-6">Level</h3>
                <div className="space-y-3">
                  {['Beginner', 'Intermediate', 'Advanced'].map((lvl, i) => (
                    <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked={i === 1} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" />
                      <span className="text-sm text-on-surface-variant group-hover:text-primary transition-colors">{lvl}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                      <Image src={`https://picsum.photos/seed/${course.img}/600/400`} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg m-2 w-[calc(100%-1rem)]" referrerPolicy="no-referrer" />
                      {course.badge && (
                        <span className={`absolute top-4 left-4 ${course.badgeColor || 'bg-primary'} text-white text-[10px] font-bold px-2.5 py-1 rounded-full tracking-widest uppercase`}>
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">{course.cat}</span>
                        <div className="flex items-center gap-1 text-tertiary">
                          <Star className="w-3.5 h-3.5 fill-tertiary" />
                          <span className="text-xs font-bold">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-headline font-bold text-on-surface mb-2 leading-tight">{course.title}</h3>
                      <p className="text-sm text-outline mb-6">{course.author}</p>
                      <div className="flex items-center justify-between border-t border-surface-container-low pt-4">
                        <span className="text-xl font-headline font-black text-on-surface">{course.price}</span>
                        <span className="text-primary font-headline font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          View Course <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
