
import React from 'react';
import { COLORS } from '../constants';
import { Linkedin, Mail } from 'lucide-react';

const XIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-softGray pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Products</h5>
            <ul className="space-y-4 font-semibold text-slate-600">
              <li><a href="#products" className="hover:text-black">Feasil</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Company</h5>
            <ul className="space-y-4 font-semibold text-slate-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#industries" className="hover:text-black">Industries</a></li>
              <li><a href="#" className="hover:text-black">Contact us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex items-center gap-2">
            <img src="/nyvix_logo_b.svg" alt="Nyvix" className="h-8 w-auto" />
          </div>

          <div className="flex-1 max-w-xl text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Follow the journey</h4>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 p-1.5 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <input type="email" placeholder="Email address*" className="px-4 py-3 flex-1 outline-none text-sm" />
              <button className="bg-lime-accent px-6 py-3 rounded-xl font-bold text-sm w-full sm:w-auto">Stay updated</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400 font-medium pt-8 border-t border-gray-100">
          <p>© 2026 Nyvix. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <a href="#" target="_blank" aria-label="X" className="p-2 bg-white rounded-lg border border-gray-200 hover:border-black transition-colors">
              <XIcon size={18} />
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn" className="p-2 bg-white rounded-lg border border-gray-200 hover:border-black transition-colors">
              <Linkedin size={18} className="text-slate-600" />
            </a>
            <a href="mailto:contact@nyvix.com" aria-label="Email" className="p-2 bg-white rounded-lg border border-gray-200 hover:border-black transition-colors">
              <Mail size={18} className="text-slate-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
