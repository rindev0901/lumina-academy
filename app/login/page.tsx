import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center items-center p-4 md:p-8">
      <div className="w-full max-w-6xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[800px]">
        {/* Left Panel - Hidden on small screens, visible on md+ */}
        <div className="hidden md:flex md:w-1/2 bg-primary p-12 lg:p-16 flex-col justify-between relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent bg-[length:20px_20px]"></div>
          
          <div className="relative z-10">
            <Link href="/" className="text-white font-headline font-bold text-2xl tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-sm"></div>
              </div>
              EdTech Canvas
            </Link>
            
            <div className="mt-24">
              <h1 className="text-5xl lg:text-6xl font-headline font-extrabold text-white leading-[1.1] mb-6">
                Ignite Your<br />Creative Mastery.
              </h1>
              <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-md">
                Join over 50,000 students learning world-class design, coding, and editorial arts through our immersive canvas.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/elena/100/100" alt="Elena Rodriguez" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold">Elena Rodriguez</p>
                  <p className="text-white/70 text-sm">Senior UI Designer at Flow</p>
                </div>
              </div>
              <p className="text-white/90 italic leading-relaxed">
                &quot;The editorial approach at EdTech Canvas changed how I view structure and whitespace. It&apos;s more than a school; it&apos;s a standard.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto">
            {/* Mobile Logo */}
            <div className="md:hidden flex justify-center mb-8">
              <Link href="/" className="text-primary font-headline font-bold text-2xl tracking-tight flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                EdTech Canvas
              </Link>
            </div>

            <h2 className="text-3xl md:text-4xl font-headline font-bold text-on-surface mb-3">Welcome back</h2>
            <p className="text-on-surface-variant mb-8">Enter your details to access your learning dashboard.</p>

            <form className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-bold text-on-surface uppercase tracking-wider">Email Address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="name@example.com" 
                  className="bg-surface-container-lowest border-surface-container rounded-xl px-4 py-6 focus-visible:ring-primary/40 focus-visible:border-primary transition-all text-on-surface"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-xs font-bold text-on-surface uppercase tracking-wider">Password</Label>
                  <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <Input 
                    id="password"
                    type="password" 
                    placeholder="••••••••" 
                    className="bg-surface-container-lowest border-surface-container rounded-xl pl-4 pr-12 py-6 focus-visible:ring-primary/40 focus-visible:border-primary transition-all text-on-surface"
                  />
                  <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Checkbox id="keep-signed-in" className="border-surface-container text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
                <Label htmlFor="keep-signed-in" className="text-sm font-normal text-on-surface-variant cursor-pointer">Keep me signed in for 30 days</Label>
              </div>

              <Button type="button" className="w-full bg-primary text-white font-bold h-14 rounded-xl hover:bg-primary/90 transition-colors mt-4 text-base">
                Sign In
              </Button>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-surface-container"></div>
              <span className="text-xs font-bold text-outline uppercase tracking-wider">OR CONTINUE WITH</span>
              <div className="flex-1 h-px bg-surface-container"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button" className="flex items-center justify-center gap-2 border-surface-container rounded-xl h-12 hover:bg-surface-container-lowest transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-bold text-sm text-on-surface">Google</span>
              </Button>
              <Button variant="outline" type="button" className="flex items-center justify-center gap-2 border-surface-container rounded-xl h-12 hover:bg-surface-container-lowest transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.95.92 3.78 2.29-3.2 1.86-2.52 6.12.61 7.33-.77 1.47-1.6 2.82-3.04 3.39zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <span className="font-bold text-sm text-on-surface">Apple</span>
              </Button>
            </div>

            <p className="text-center mt-8 text-on-surface-variant">
              Don&apos;t have an account yet? <Link href="/signup" className="text-primary font-bold hover:underline">Get Started</Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full max-w-6xl mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-outline gap-4">
        <div className="font-bold text-on-surface">EdTech Canvas</div>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-on-surface transition-colors">Contact</Link>
        </div>
        <div>© 2024 The Intelligent Canvas. All rights reserved.</div>
      </div>
    </div>
  );
}
