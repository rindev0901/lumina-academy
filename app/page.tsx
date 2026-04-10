import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, ArrowRight, ShoppingCart, Star } from 'lucide-react';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center px-8 lg:px-24 overflow-hidden bg-surface">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="z-10">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase font-label">The Future of Education</span>
              <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8">
                Learn the most in-demand <span className="text-primary">skills in tech</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Accelerate your career with curated learning paths designed by industry experts. Join 50,000+ students mastering AI, Design, and Engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/courses" className="signature-gradient px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all">Enroll Now</Link>
                <Link href="/courses" className="px-8 py-4 rounded-full border border-outline-variant/30 text-primary font-bold text-lg hover:bg-surface-container-low transition-all">Browse Courses</Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed/40 rounded-full blur-[100px]"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image src="https://picsum.photos/seed/student/800/1000" alt="Student learning" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Learners</p>
                    <p className="text-xl font-extrabold">12.4k+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-surface-container-low px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-4">Master Your Craft</h2>
              <p className="text-on-surface-variant">Choose from specialized tracks built to take you from beginner to professional.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Programming */}
              <Link href="/courses" className="group relative md:col-span-2 overflow-hidden rounded-3xl bg-surface-container-lowest h-[400px] hover:shadow-xl transition-all duration-500 block">
                <Image src="https://picsum.photos/seed/code/1200/800" alt="Programming" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <span className="px-3 py-1 bg-primary rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">120+ Courses</span>
                  <h3 className="font-headline text-4xl font-bold mb-2">Programming</h3>
                  <p className="text-white/70 max-w-md">Python, React, Rust, and Machine Learning foundations.</p>
                  <div className="mt-6 inline-flex items-center gap-2 font-bold text-primary-fixed group-hover:gap-4 transition-all">Explore Path <ArrowRight className="w-5 h-5" /></div>
                </div>
              </Link>
              {/* Design */}
              <Link href="/courses" className="group relative overflow-hidden rounded-3xl bg-surface-container-lowest h-[400px] hover:shadow-xl transition-all duration-500 block">
                <Image src="https://picsum.photos/seed/design/800/800" alt="Design" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <span className="px-3 py-1 bg-tertiary rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">85+ Courses</span>
                  <h3 className="font-headline text-3xl font-bold mb-2">Design</h3>
                  <p className="text-white/70">UI/UX, Visual Brand Identity, and 3D Motion.</p>
                </div>
              </Link>
              {/* Business */}
              <Link href="/courses" className="group relative overflow-hidden rounded-3xl bg-surface-container-lowest h-[350px] hover:shadow-xl transition-all duration-500 block">
                <Image src="https://picsum.photos/seed/business/800/800" alt="Business" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10 text-white">
                  <span className="px-3 py-1 bg-green-600 rounded-lg text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">60+ Courses</span>
                  <h3 className="font-headline text-3xl font-bold mb-2">Business</h3>
                  <p className="text-white/70">Product Management & Growth Strategy.</p>
                </div>
              </Link>
              {/* AI & Data */}
              <Link href="/courses" className="group relative md:col-span-2 overflow-hidden rounded-3xl bg-surface-container-lowest h-[350px] hover:shadow-xl transition-all duration-500 block">
                <div className="absolute inset-0 signature-gradient opacity-90"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                  <h3 className="font-headline text-4xl font-bold mb-2">Artificial Intelligence</h3>
                  <p className="text-white/80 max-w-lg mb-4">Master Prompt Engineering, LLM integration, and neural network foundations with top industry researchers.</p>
                  <div className="flex gap-4">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold">Generative AI</span>
                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold">PyTorch</span>
                    <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold">NLP</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Trending Courses</h2>
                <p className="text-on-surface-variant">Join thousands of students in our most popular learning experiences this month.</p>
              </div>
              <Link href="/courses" className="text-primary font-bold flex items-center gap-2 pb-2 border-b-2 border-primary/10 hover:border-primary transition-all">
                View All Courses <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Advanced React Architecture", author: "Sarah Jenkins", price: "$89.00", rating: "4.9", reviews: "2.4k", badge: "BESTSELLER", badgeColor: "text-primary", img: "react" },
                { title: "UX Strategy & Design Systems", author: "David Chen", price: "$124.00", rating: "4.8", reviews: "1.1k", img: "ux" },
                { title: "Growth Marketing Masterclass", author: "Elena Rodriguez", price: "$75.00", rating: "4.7", reviews: "840", badge: "NEW", badgeColor: "text-white bg-tertiary/90", img: "marketing" },
                { title: "Prompt Engineering for AI", author: "Dr. Aris Thorne", price: "$149.00", rating: "5.0", reviews: "3.2k", img: "ai" }
              ].map((course, i) => (
                <Link href={`/courses/${i + 1}`} key={i} className="group bg-surface-container-lowest rounded-[2rem] overflow-hidden hover:bg-surface-bright transition-all duration-300 ambient-shadow block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] m-3">
                    <Image src={`https://picsum.photos/seed/${course.img}/600/400`} alt={course.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" referrerPolicy="no-referrer" />
                    {course.badge && (
                      <div className={`absolute top-4 left-4 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase ${course.badgeColor === 'text-primary' ? 'bg-white/90 text-primary' : course.badgeColor}`}>
                        {course.badge}
                      </div>
                    )}
                  </div>
                  <div className="px-6 pb-8 pt-2">
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold">{course.rating}</span>
                      <span className="text-xs text-slate-400">({course.reviews} reviews)</span>
                    </div>
                    <h3 className="font-headline font-bold text-lg mb-2 leading-tight group-hover:text-primary transition-colors">{course.title}</h3>
                    <p className="text-sm text-on-surface-variant mb-6">{course.author}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-black text-on-surface">{course.price}</span>
                      <button className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">What our students are saying</h2>
              <div className="w-24 h-1 signature-gradient mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: "Marcus T.", role: "Software Engineer", quote: "The curriculum is vastly superior to anything I've found on other platforms. The focus on real-world projects helped me land my first Junior Dev role within 3 months." },
                { name: "Lila S.", role: "Product Designer", quote: "EdTech Canvas doesn't just teach you the 'how', they teach the 'why'. The design path gave me the theoretical foundation I was missing as a self-taught designer.", offset: true },
                { name: "Julian V.", role: "Data Science Lead", quote: "The community alone is worth the price of admission. Being able to peer-review code with seniors from top tech companies is a game changer for professional growth." }
              ].map((t, i) => (
                <div key={i} className={`relative bg-surface-container-lowest p-10 rounded-[2.5rem] shadow-sm ${t.offset ? 'md:translate-y-8' : ''}`}>
                  <div className="absolute -top-6 left-10 w-12 h-12 signature-gradient rounded-2xl flex items-center justify-center text-white text-2xl font-serif">“</div>
                  <p className="text-on-surface-variant leading-relaxed mb-8 italic">&quot;{t.quote}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 relative">
                      <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt={t.name} fill sizes="48px" className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="font-bold">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="py-32 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-16">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight">From the Journal</h2>
              <Link href="/blog/1" className="px-6 py-2 rounded-full border border-outline-variant/30 text-sm font-bold hover:bg-surface-container-low transition-all">Read More</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { tag: "INSIGHTS", title: "The Future of AI in Modern Software Architecture", img: "ai-blog" },
                { tag: "TUTORIAL", title: "Mastering CSS Container Queries for Responsive Layouts", img: "css" },
                { tag: "CAREER", title: "Bridging the Gap: From Senior Engineer to Tech Lead", img: "career" }
              ].map((post, i) => (
                <Link href="/blog/1" key={i} className="group cursor-pointer block">
                  <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 relative">
                    <Image src={`https://picsum.photos/seed/${post.img}/600/400`} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{post.tag} • 5 MIN READ</p>
                  <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">Discover how these changes are fundamentally altering the landscape and what you need to know to stay ahead.</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto signature-gradient rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Stay ahead of the curve</h2>
              <p className="text-white/80 mb-12 text-lg">Weekly insights on tech trends, career opportunities, and course updates delivered straight to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input type="email" placeholder="Your work email" className="flex-grow px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:bg-white/20 focus:outline-none transition-all outline-none" />
                <button type="button" className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all">Join Now</button>
              </form>
              <p className="mt-6 text-xs text-white/50">No spam, ever. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
