import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Star, PlayCircle, ChevronDown, Monitor, FileText, Infinity, Smartphone, Award, Share2, Heart, Users, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CourseDetailPage() {
  return (
    <>
      <NavBar showSearch={true} />
      <main className="pt-20 bg-surface min-h-screen pb-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Main Content (Left) */}
            <div className="lg:col-span-2 flex flex-col gap-8 md:gap-12">
              
              {/* Header Info */}
              <div className="order-2 lg:order-1">
                <Badge className="bg-tertiary-fixed text-tertiary hover:bg-tertiary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 md:mb-6">
                  BESTSELLER
                </Badge>
                <h1 className="text-3xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4 md:mb-6 leading-tight">
                  Advanced Design Systems for Modern SaaS
                </h1>
                <p className="text-base md:text-lg text-on-surface-variant mb-6 leading-relaxed max-w-2xl">
                  Master the art of creating scalable, accessible, and high-performance design systems using Figma and React. From tokenization to component architecture.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-y-3 gap-x-6 text-sm text-on-surface-variant">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-tertiary text-base">4.9</span>
                    <div className="flex text-tertiary">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <span>(2,450 ratings)</span>
                  </div>
                  <span className="hidden sm:inline text-outline-variant">•</span>
                  <span>12,840 students enrolled</span>
                  <span className="hidden sm:inline text-outline-variant">•</span>
                  <span>Created by <Link href="#" className="text-primary font-semibold hover:underline">Alex Johnson</Link></span>
                </div>
              </div>

              {/* Video Preview */}
              <div className="order-1 lg:order-2 relative aspect-video md:rounded-2xl overflow-hidden bg-slate-900 group cursor-pointer md:ambient-shadow -mx-4 md:mx-0">
                <Image src="https://picsum.photos/seed/course-preview/1200/675" alt="Course Preview" fill sizes="(max-width: 1024px) 100vw, 66vw" className="object-cover opacity-80 group-hover:opacity-90 transition-opacity" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                  <span className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-semibold">Preview this course</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="order-3">
                <h2 className="text-xl md:text-2xl font-headline font-bold mb-4 md:mb-6">Course Content</h2>
                <div className="border border-surface-container rounded-2xl overflow-hidden bg-surface-container-lowest">
                  {/* Module 1 (Expanded) */}
                  <div className="border-b border-surface-container">
                    <button className="w-full flex items-center justify-between p-4 md:p-6 bg-surface-container-low hover:bg-surface-container transition-colors text-left">
                      <div className="flex items-center gap-3 md:gap-4">
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-outline shrink-0" />
                        <span className="font-bold text-on-surface text-sm md:text-base">Foundations & Atomic Principles</span>
                      </div>
                      <span className="text-xs md:text-sm text-on-surface-variant shrink-0 ml-2">4 lessons • 45m</span>
                    </button>
                    <div className="p-2">
                      {[
                        { title: "Understanding Design Tokens", time: "12:15", type: "video" },
                        { title: "The Multi-Tier Color System", time: "08:45", type: "video" },
                        { title: "Typography Scale & Responsiveness", time: "15:20", type: "locked" }
                      ].map((lesson, i) => (
                        <div key={i} className="flex items-center justify-between p-3 md:p-4 hover:bg-surface-container-low rounded-xl transition-colors cursor-pointer group">
                          <div className="flex items-center gap-3 md:gap-4">
                            {lesson.type === 'video' ? (
                              <PlayCircle className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0" />
                            ) : (
                              <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center shrink-0">
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-outline w-3.5 h-4 md:w-auto md:h-auto">
                                  <path d="M11.6667 6.66667H2.33333C1.59695 6.66667 1 7.26362 1 8V14.6667C1 15.403 1.59695 16 2.33333 16H11.6667C12.403 16 13 15.403 13 14.6667V8C13 7.26362 12.403 6.66667 11.6667 6.66667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M3.66663 6.66667V4C3.66663 2.15905 5.15901 0.666664 6.99996 0.666664C8.84091 0.666664 10.3333 2.15905 10.3333 4V6.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            )}
                            <span className={`text-xs md:text-sm ${lesson.type === 'video' ? 'text-on-surface group-hover:text-primary' : 'text-on-surface-variant'}`}>{lesson.title}</span>
                          </div>
                          <span className="text-xs md:text-sm text-outline shrink-0 ml-2">{lesson.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Module 2 */}
                  <div className="border-b border-surface-container">
                    <button className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-surface-container-low transition-colors text-left">
                      <div className="flex items-center gap-3 md:gap-4">
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-outline -rotate-90 shrink-0" />
                        <span className="font-bold text-on-surface text-sm md:text-base">Component Architecture</span>
                      </div>
                      <span className="text-xs md:text-sm text-on-surface-variant shrink-0 ml-2">6 lessons • 1h 20m</span>
                    </button>
                  </div>
                  {/* Module 3 */}
                  <div>
                    <button className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-surface-container-low transition-colors text-left">
                      <div className="flex items-center gap-3 md:gap-4">
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-outline -rotate-90 shrink-0" />
                        <span className="font-bold text-on-surface text-sm md:text-base">Documentation & Handoff</span>
                      </div>
                      <span className="text-xs md:text-sm text-on-surface-variant shrink-0 ml-2">3 lessons • 30m</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Instructor */}
              <div className="order-4">
                <h2 className="text-xl md:text-2xl font-headline font-bold mb-4 md:mb-6">Your Instructor</h2>
                <div className="bg-surface-container-low p-6 md:p-8 rounded-3xl flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden relative shrink-0">
                    <Image src="https://picsum.photos/seed/alex/200/200" alt="Alex Johnson" fill sizes="96px" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-1">Alex Johnson</h3>
                    <p className="text-primary font-semibold text-xs md:text-sm mb-3 md:mb-4">Senior Product Designer & Systems Architect</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                      Alex has spent over a decade building design systems for Fortune 500 companies. He is a frequent speaker at Figma&apos;s Config and has mentored thousands of designers globally.
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-semibold text-on-surface">
                      <div className="flex items-center gap-1.5 md:gap-2"><Star className="w-3.5 h-3.5 md:w-4 md:h-4 text-tertiary fill-tertiary" /> 4.9 Rating</div>
                      <div className="flex items-center gap-1.5 md:gap-2"><Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-outline" /> 58k Reviews</div>
                      <div className="flex items-center gap-1.5 md:gap-2"><Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-outline" /> 250k Students</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback */}
              <div className="order-5">
                <h2 className="text-xl md:text-2xl font-headline font-bold mb-4 md:mb-6">Student Feedback</h2>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { name: "Sarah Miller", init: "SM", quote: "The clearest explanation of design tokens I've ever seen. This course helped our team bridge the gap between design and development effortlessly." },
                    { name: "David Kim", init: "DK", quote: "Brilliant content. Alex knows his stuff. Only giving 4.5 because I wish there were more Figma exercise files in the second module." }
                  ].map((review, i) => (
                    <div key={i} className="bg-surface-container-lowest p-5 md:p-6 rounded-2xl md:rounded-3xl border border-surface-container">
                      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-fixed text-on-primary-fixed-variant flex items-center justify-center font-bold text-xs md:text-sm shrink-0">
                          {review.init}
                        </div>
                        <div>
                          <p className="font-bold text-xs md:text-sm">{review.name}</p>
                          <div className="flex text-tertiary mt-0.5">
                            {[...Array(5)].map((_, j) => <Star key={j} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-current" />)}
                          </div>
                        </div>
                      </div>
                      <p className="text-on-surface-variant text-xs md:text-sm italic leading-relaxed">&quot;{review.quote}&quot;</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar (Right) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 bg-surface-container-lowest md:rounded-3xl md:p-8 md:ambient-shadow md:border border-surface-container">
                
                {/* Desktop Pricing & Enroll */}
                <div className="hidden md:block mb-8">
                  <div className="mb-6">
                    <div className="flex items-end gap-3 mb-2">
                      <span className="text-4xl font-headline font-black text-on-surface">$89.99</span>
                      <span className="text-lg text-outline line-through mb-1">$149.99</span>
                      <span className="text-sm font-bold text-error mb-1">40% OFF</span>
                    </div>
                    <p className="text-error text-xs font-bold flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Offer ends in 5 hours!
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full signature-gradient text-white font-bold py-6 rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95 text-base">
                      Enroll Now
                    </Button>
                    <Button variant="outline" className="w-full bg-white border-2 border-primary text-primary font-bold py-6 rounded-full hover:bg-primary-fixed/30 transition-all active:scale-95 text-base">
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* This course includes (Both) */}
                <div className="mb-8">
                  <h4 className="font-bold text-base md:text-sm mb-4">This course includes:</h4>
                  <ul className="space-y-3 text-sm text-on-surface-variant">
                    <li className="flex items-center gap-3"><Monitor className="w-4 h-4 text-primary shrink-0" /> 18.5 hours video</li>
                    <li className="flex items-center gap-3"><FileText className="w-4 h-4 text-primary shrink-0" /> 12 resources</li>
                    <li className="flex items-center gap-3"><Infinity className="w-4 h-4 text-primary shrink-0" /> Lifetime access</li>
                    <li className="flex items-center gap-3"><Award className="w-4 h-4 text-primary shrink-0" /> Certificate</li>
                  </ul>
                </div>

                {/* Desktop Share */}
                <div className="hidden md:flex items-center justify-between pt-6 border-t border-surface-container">
                  <span className="font-bold text-sm">Share this course</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-outline hover:text-primary transition-colors rounded-full"><Share2 className="w-5 h-5" /></Button>
                    <Button variant="ghost" size="icon" className="text-outline hover:text-error transition-colors rounded-full"><Heart className="w-5 h-5" /></Button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-surface-container p-4 flex items-center justify-between z-50 pb-safe">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xl font-headline font-black text-on-surface leading-none">$89.99</span>
            <span className="text-[10px] font-bold text-error bg-error/10 px-1.5 py-0.5 rounded leading-none">-40%</span>
          </div>
          <span className="text-xs text-outline line-through leading-none">$149.99</span>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary text-white font-bold h-10 px-6 rounded-lg text-sm active:scale-95 transition-transform">Enroll Now</Button>
          <Button variant="outline" size="icon" className="border-surface-container h-10 w-10 rounded-lg active:scale-95 transition-transform flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-on-surface" />
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
}
