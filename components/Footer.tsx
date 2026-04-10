import Link from 'next/link';
import { Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 w-full py-16 border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="text-lg font-black text-blue-600 mb-6 font-headline">EdTech Canvas</div>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed max-w-xs">
            Building the intelligent infrastructure for lifelong learning and professional growth.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-200/50 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm font-headline">Platform</h4>
          <ul className="space-y-4">
            <li><Link href="/courses" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Browse Courses</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Become Instructor</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Scholarships</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Enterprise</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm font-headline">Company</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">About Us</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Careers</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-sm font-headline">Support</h4>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Help Center</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Documentation</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">API Status</Link></li>
            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200/50 text-center">
        <p className="text-sm text-slate-400">© 2024 EdTech Canvas. Designed for the Intelligent Learner.</p>
      </div>
    </footer>
  );
}
