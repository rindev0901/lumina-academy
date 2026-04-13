import Image from 'next/image';
import Link from 'next/link';
import { Eye, Mail, Lock, User } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-md bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col">
        
        {/* Header Logo */}
        <div className="pt-8 pb-6 flex justify-center">
          <Link href="/" className="text-primary font-headline font-bold text-2xl tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            EdTech Canvas
          </Link>
        </div>

        {/* Hero Image */}
        <div className="px-6 pb-6">
          <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
            <Image src="https://picsum.photos/seed/laptop/800/400" alt="Learning" fill className="object-cover" />
          </div>
        </div>

        <div className="px-6 md:px-8 pb-8">
          <h1 className="text-3xl font-headline font-bold text-on-surface mb-2">Create your account</h1>
          <p className="text-on-surface-variant mb-8">Join a community of 50,000+ lifelong learners and start your journey today.</p>

          <button type="button" className="w-full flex items-center justify-center gap-3 border border-surface-container rounded-xl py-3.5 hover:bg-surface-container-lowest transition-colors mb-6">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-bold text-on-surface">Sign up with Google</span>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-surface-container"></div>
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">OR USE EMAIL</span>
            <div className="flex-1 h-px bg-surface-container"></div>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-surface-container-lowest border border-surface-container rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-on-surface"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full bg-surface-container-lowest border border-surface-container rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-on-surface"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                <input 
                  type="password" 
                  placeholder="Min. 8 characters" 
                  className="w-full bg-surface-container-lowest border border-surface-container rounded-xl pl-12 pr-12 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-on-surface"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input type="checkbox" id="terms" className="w-5 h-5 rounded border-surface-container text-primary focus:ring-primary/40 mt-0.5" />
              <label htmlFor="terms" className="text-sm text-on-surface-variant leading-relaxed">
                I agree to the <Link href="#" className="text-primary font-bold hover:underline">Terms and Conditions</Link> and <Link href="#" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <button type="button" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors mt-4">
              Create Account
            </button>
          </form>

          <p className="text-center mt-8 text-on-surface-variant">
            Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full max-w-md mt-8 flex flex-col items-center gap-4 text-sm text-outline">
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-on-surface transition-colors">Help</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Terms</Link>
        </div>
        <div className="text-center">© 2024 EdTech Canvas. Built for the future of learning.</div>
      </div>
    </div>
  );
}
