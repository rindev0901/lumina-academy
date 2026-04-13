import NavBar from '@/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';
import { School, Award, Users, Settings, HelpCircle, PlayCircle, Clock, CheckCircle2, TrendingUp, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface">
      <NavBar showSearch={true} />
      
      {/* SideNavBar */}
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
          <Link href="/dashboard" className="flex items-center gap-3 px-6 py-4 text-primary bg-primary-fixed/30 border-r-4 border-primary">
            <School className="w-5 h-5" />
            <span className="text-sm font-bold">My Learning</span>
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

      {/* Main Content */}
      <main className="lg:pl-64 pt-20">
        <div className="max-w-[1200px] mx-auto px-8 py-12">
          
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight text-on-surface mb-2">Welcome back, Alex! 👋</h1>
              <p className="text-on-surface-variant">You&apos;re on a 5-day learning streak. Keep it up!</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-surface-container-lowest border border-surface-container px-6 py-3 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest">Streak</p>
                  <p className="text-xl font-black">5 Days</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-surface-container px-6 py-3 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest">Completed</p>
                  <p className="text-xl font-black">12 Courses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Learning */}
          <section className="mb-16">
            <h2 className="text-2xl font-headline font-bold mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Active Course Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container ambient-shadow flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full sm:w-40 aspect-video rounded-xl overflow-hidden shrink-0 group cursor-pointer">
                  <Image src="https://picsum.photos/seed/react-next/400/225" alt="Course" fill sizes="(max-width: 640px) 100vw, 160px" className="object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <PlayCircle className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">PROGRAMMING</span>
                  <h3 className="font-headline font-bold text-lg leading-tight mb-2">Mastering Advanced React & Next.js</h3>
                  <p className="text-sm text-on-surface-variant mb-4">Module 4: Server Components Deep Dive</p>
                  
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-primary">65% Completed</span>
                      <span className="text-outline">2h 15m left</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Course Card */}
              <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container ambient-shadow flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-full sm:w-40 aspect-video rounded-xl overflow-hidden shrink-0 group cursor-pointer">
                  <Image src="https://picsum.photos/seed/ux-ui/400/225" alt="Course" fill sizes="(max-width: 640px) 100vw, 160px" className="object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <PlayCircle className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary mb-2 block">DESIGN</span>
                  <h3 className="font-headline font-bold text-lg leading-tight mb-2">UX/UI Foundations: High-Fidelity Design</h3>
                  <p className="text-sm text-on-surface-variant mb-4">Module 2: Typography Systems</p>
                  
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-tertiary">32% Completed</span>
                      <span className="text-outline">4h 30m left</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <div className="bg-tertiary h-full rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Recommended & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Recommended */}
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-headline font-bold">Recommended for You</h2>
                <Link href="/courses" className="text-sm font-bold text-primary hover:underline">Browse Catalog</Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Python for Data Analysis", author: "Elena Rodriguez", img: "python", cat: "DATA SCIENCE" },
                  { title: "Interaction Design for Emerging Tech", author: "Lisa Choo", img: "interaction", cat: "DESIGN" }
                ].map((course, i) => (
                  <Link href={`/courses/${i + 1}`} key={i} className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-surface-container hover:shadow-lg transition-all block">
                    <div className="relative aspect-video">
                      <Image src={`https://picsum.photos/seed/${course.img}/400/225`} alt={course.title} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2 block">{course.cat}</span>
                      <h3 className="font-bold mb-1 group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                      <p className="text-xs text-on-surface-variant">{course.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h2 className="text-2xl font-headline font-bold mb-6">Recent Activity</h2>
              <div className="bg-surface-container-lowest rounded-3xl p-6 border border-surface-container">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Completed Quiz: React Hooks</p>
                      <p className="text-xs text-on-surface-variant">Score: 95% • 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Earned Badge: Fast Learner</p>
                      <p className="text-xs text-on-surface-variant">Completed 3 modules in one day • Yesterday</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Started: Advanced Design Systems</p>
                      <p className="text-xs text-on-surface-variant">Watched Intro Video • 2 days ago</p>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" className="w-full mt-6 py-2 text-sm font-bold text-primary hover:bg-primary-fixed/30 rounded-lg transition-colors">
                  View All Activity
                </Button>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
