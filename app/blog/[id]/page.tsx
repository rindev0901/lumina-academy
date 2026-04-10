import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Share2, Heart, Bookmark, ArrowRight } from 'lucide-react';

export default function BlogDetailPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20 bg-surface min-h-screen pb-24">
        
        {/* Header */}
        <header className="max-w-4xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-8 md:pb-12 text-center">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 md:mb-6">
            ARTIFICIAL INTELLIGENCE
          </span>
          <h1 className="text-3xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface mb-6 md:mb-8 leading-[1.2] md:leading-[1.1]">
            The Intelligent Canvas: How Generative AI is Redefining Personalised Learning
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative shrink-0">
                <Image src="https://picsum.photos/seed/marcus/100/100" alt="Dr. Marcus Vance" fill sizes="48px" className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm text-on-surface">Alex Johnson</p>
                <p className="text-xs text-outline">May 24, 2024 • 12 min read</p>
              </div>
            </div>
            
            {/* Mobile Social Share */}
            <div className="flex lg:hidden items-center gap-3 mt-2 sm:mt-0 sm:ml-4 sm:pl-4 sm:border-l border-surface-container">
              <button className="w-8 h-8 rounded-full bg-surface-container-lowest border border-surface-container flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all">
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container-lowest border border-surface-container flex items-center justify-center text-outline hover:text-error hover:border-error transition-all">
                <Heart className="w-3.5 h-3.5" />
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container-lowest border border-surface-container flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all">
                <Bookmark className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
          <div className="relative aspect-video md:aspect-[21/9] rounded-2xl md:rounded-[2.5rem] overflow-hidden ambient-shadow">
            <Image src="https://picsum.photos/seed/ai-globe/1600/700" alt="AI Globe" fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        {/* Content Layout */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Social Share (Left Sidebar - Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-4">
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest border border-surface-container flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest border border-surface-container flex items-center justify-center text-outline hover:text-error hover:border-error transition-all">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-surface-container-lowest border border-surface-container flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-all">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <article className="lg:col-span-7 prose prose-base md:prose-lg prose-slate max-w-none">
            <p className="text-on-surface-variant leading-relaxed mb-6 md:mb-8">
              Education is standing at a precipice. For centuries, the classroom model has remained stubbornly static—a single teacher addressing a room of students with diverse needs, backgrounds, and learning velocities. Today, the integration of generative AI is not just an incremental improvement; it is a fundamental shift toward &quot;The Intelligent Canvas.&quot;
            </p>

            <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mt-8 md:mt-12 mb-4 md:mb-6">The Human-Centered AI Paradigm</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6 md:mb-8">
              We often hear that AI will replace the educator. However, at EdTech Canvas, we believe the opposite. AI is the ultimate tool for liberation. By automating the mechanical aspects of teaching—grading, content generation, and administrative tracking—we allow teachers to return to their core purpose: mentorship, emotional guidance, and inspiring critical thought.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 md:pl-6 my-8 md:my-10 italic text-lg md:text-xl text-on-surface font-medium">
              &quot;AI doesn&apos;t just process information; it synthesizes intent. It transforms the curriculum from a static roadmap into a living, breathing companion for the learner.&quot;
            </blockquote>

            <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mt-8 md:mt-12 mb-4 md:mb-6">Personalization at Scale</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6 md:mb-8">
              Traditional personalization was a luxury afforded only to those with private tutors. With LLMs (Large Language Models), we can now offer a &apos;tutor in every pocket.&apos; This isn&apos;t about simply generating quiz questions. It&apos;s about adapting the tone, complexity, and examples of a subject to match a student&apos;s personal interests.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-6 md:mb-8">
              If a student loves basketball and is struggling with physics, an intelligent canvas can reframe the laws of motion through the lens of a three-point shot. This is the power of contextual learning.
            </p>

            <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mt-8 md:mt-12 mb-4 md:mb-6">Ethical Considerations & The Future</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6 md:mb-8">
              As we navigate this new landscape, we must remain vigilant. Data privacy, algorithmic bias, and the &quot;hallucination&quot; of facts are real challenges. Our approach focuses on &apos;Human-in-the-loop&apos; systems where AI serves as a draftsperson, but human experts remain the final arbiters of truth and pedagogical quality.
            </p>
          </article>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Table of Contents */}
            <div className="bg-surface-container-lowest rounded-2xl md:rounded-3xl p-6 md:p-8 border border-surface-container lg:sticky lg:top-32">
              <h3 className="font-bold text-sm mb-4 md:mb-6">On this page</h3>
              <ul className="space-y-3 md:space-y-4 text-sm">
                <li><a href="#" className="text-primary font-medium flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary shrink-0"></span> The Human-Centered AI Paradigm</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors pl-3">Personalization at Scale</a></li>
                <li><a href="#" className="text-on-surface-variant hover:text-primary transition-colors pl-3">Ethical Considerations & The Future</a></li>
              </ul>

              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-surface-container">
                <h4 className="font-bold text-sm mb-2">Subscribe to our newsletter</h4>
                <p className="text-xs text-on-surface-variant mb-4">Get the latest insights on education and technology.</p>
                <form className="space-y-3">
                  <input type="email" placeholder="Email address" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/40 outline-none" />
                  <button type="button" className="w-full bg-primary text-white font-bold py-2.5 rounded-lg text-sm hover:bg-primary-container transition-colors">Join 15k+ Learners</button>
                </form>
              </div>
            </div>
          </aside>

        </div>

        {/* Related Articles */}
        <div className="max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-24 pt-12 md:pt-16 border-t border-surface-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">CONTINUE READING</span>
              <h2 className="text-2xl md:text-3xl font-headline font-bold">Related Articles</h2>
            </div>
            <Link href="/blog" className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all shrink-0">
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { tag: "COMMUNITY", title: "How Peer Learning Accelerates Growth", desc: "Discover why collaborative environments lead to 40% higher retention rates in STEM subjects.", img: "peer" },
              { tag: "DATA SCIENCE", title: "Mastering the Language of Big Data", desc: "A roadmap for beginners looking to break into the world of data analytics and visualization.", img: "data" },
              { tag: "SKILLS", title: "The Art of Effective Digital Writing", desc: "Communication is the most undervalued skill in tech. Learn how to write with impact and clarity.", img: "writing" }
            ].map((post, i) => (
              <Link href="/blog/1" key={i} className="group block bg-surface-container-lowest rounded-2xl md:rounded-3xl overflow-hidden ambient-shadow hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={`https://picsum.photos/seed/${post.img}/600/400`} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-tertiary text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-3 block">{post.tag}</span>
                  <h3 className="font-headline text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{post.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
