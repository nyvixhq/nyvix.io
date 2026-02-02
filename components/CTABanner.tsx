
import React from 'react';
import { COLORS } from '../constants';

export const CTABanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div 
        className="rounded-[40px] p-20 text-center relative overflow-hidden"
        style={{ backgroundColor: COLORS.dark }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-accent via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">Follow the journey</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto">
            We're just getting started. Get updates as we ship.
          </p>

          <form className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-2 sm:gap-0 p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
            <input 
              type="email" 
              placeholder="Email address*" 
              className="bg-transparent text-white px-6 py-4 w-full outline-none"
            />
            <button className="bg-lime-accent px-8 py-4 rounded-xl font-bold text-black hover:opacity-90 transition-opacity whitespace-nowrap w-full sm:w-auto">
              Stay updated
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
