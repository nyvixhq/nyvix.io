
import React from 'react';
import { NAV_LINKS, COLORS } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/nyvix_logo_b.svg" alt="Nyvix" className="h-8 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium hover:text-black transition-colors"
              style={{ color: COLORS.textSecondary }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="mailto:inquiries@nyvix.io"
            className="px-5 py-2 text-white rounded-xl text-sm font-semibold transition-transform active:scale-95 inline-block"
            style={{ backgroundColor: COLORS.dark }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
