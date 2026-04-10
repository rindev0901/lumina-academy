import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Users, Target, Zap, Globe, Shield, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="pt-20 bg-surface min-h-screen pb-24">
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[10px] md:text-xs font-bold tracking-widest uppercase font-label">Our Mission</span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6 md:mb-8 max-w-4xl mx-auto">
              Democratizing <span className="text-primary">world-class</span> education for everyone.
            </h1>
            <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              We believe that access to high-quality learning shouldn&apos;t be limited by geography or background. EdTech Canvas is building the infrastructure to empower the next generation of creators, builders, and leaders.
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-[120px] -z-0"></div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 border-y border-surface-container bg-surface">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-5xl font-black text-primary mb-2">50k+</p>
              <p className="text-xs md:text-sm font-bold text-outline uppercase tracking-widest">Active Students</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-black text-primary mb-2">120+</p>
              <p className="text-xs md:text-sm font-bold text-outline uppercase tracking-widest">Expert Instructors</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-black text-primary mb-2">350+</p>
              <p className="text-xs md:text-sm font-bold text-outline uppercase tracking-widest">Premium Courses</p>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-black text-primary mb-2">95%</p>
              <p className="text-xs md:text-sm font-bold text-outline uppercase tracking-widest">Completion Rate</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden ambient-shadow">
              <Image src="https://picsum.photos/seed/about-story/1000/1000" alt="Students collaborating" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-6">Our Story</h2>
              <div className="space-y-6 text-base md:text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Founded in 2022, EdTech Canvas started with a simple observation: traditional education models were struggling to keep pace with the rapid evolution of technology.
                </p>
                <p>
                  Our founders, a team of former university professors and tech industry veterans, saw a growing gap between what was being taught in classrooms and the actual skills demanded by the modern workforce.
                </p>
                <p>
                  We set out to build a platform that bridges this gap. By partnering directly with industry leaders and utilizing advanced learning methodologies, we&apos;ve created an ecosystem where practical, cutting-edge skills are accessible to anyone with an internet connection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-4">Our Core Values</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">The principles that guide every course we design and every feature we build.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Target, title: "Practical Excellence", desc: "We focus on real-world application over theoretical abstraction. Every lesson is designed to be immediately useful." },
                { icon: Users, title: "Community First", desc: "Learning is a social endeavor. We foster environments where students can collaborate, review, and grow together." },
                { icon: Zap, title: "Continuous Evolution", desc: "Technology never stops moving, and neither do we. Our curriculum is constantly updated to reflect industry standards." },
                { icon: Globe, title: "Global Accessibility", desc: "We strive to make our platform affordable and accessible across different regions, languages, and bandwidths." },
                { icon: Shield, title: "Intellectual Integrity", desc: "We hold our instructors and content to the highest standards of accuracy, transparency, and ethical teaching." },
                { icon: Award, title: "Student Success", desc: "Our ultimate metric is the success of our learners. We measure our impact by the careers we help launch and accelerate." }
              ].map((value, i) => (
                <div key={i} className="bg-surface p-8 rounded-[2rem] border border-surface-container hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed text-primary flex items-center justify-center mb-6">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-4">Meet the Leadership</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">The visionaries driving the future of EdTech Canvas.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Sarah Jenkins", role: "Chief Executive Officer", img: "ceo" },
                { name: "David Chen", role: "Head of Product", img: "product" },
                { name: "Elena Rodriguez", role: "Chief Learning Officer", img: "learning" },
                { name: "Marcus Thorne", role: "Lead Engineer", img: "engineer" }
              ].map((member, i) => (
                <div key={i} className="text-center group">
                  <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden mb-6 ambient-shadow">
                    <Image src={`https://picsum.photos/seed/${member.img}/400/400`} alt={member.name} fill sizes="(max-width: 768px) 192px, 224px" className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-semibold">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
