
import React from 'react';
import { COLORS } from '../constants';

export const Testimonial: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16">
      <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
        <div className="absolute inset-0 bg-lime-accent rounded-[60px] rotate-6"></div>
        <img 
          src="https://framerusercontent.com/images/EZUMzBIObsoCI82ylu7JHv3Ero.jpg" 
          alt="James Brighton"
          className="relative w-full h-full object-cover rounded-[60px] shadow-xl"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          "We were able to retain our talent in 92% year to date. It was a game changer for our small company."
        </h2>
        
        <div className="flex items-center gap-4 mb-8">
          <img src="https://picsum.photos/100/100?random=1" className="w-14 h-14 rounded-full border-4 border-lime-accent p-0.5" alt="Avatar" />
          <div>
            <p className="font-bold text-lg">James Brighton</p>
            <p className="text-slate-500">Head of Sales @Crown</p>
          </div>
        </div>

        <button className="px-6 py-3 border-2 border-gray-100 rounded-2xl font-bold hover:bg-gray-50 transition-all">
          See James story
        </button>
      </div>
    </section>
  );
};
