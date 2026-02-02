
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { COLORS } from '../constants';

export const Discovery: React.FC = () => {
  return (
    <section id="products" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
      <div className="bg-white rounded-[40px] border border-gray-200 overflow-hidden shadow-sm flex flex-col md:flex-row h-auto md:h-[600px]">
        <div className="flex-1 p-12 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8 block">Products</span>
            <h2 className="text-5xl font-semibold mb-6">Feasil</h2>
            <p className="text-xl text-slate-500 max-w-sm mb-12">
              You describe a business idea. Feasil tells you whether you're building something new or entering an existing fight — and what to do about either.
            </p>
          </div>

          {/* Navigation Controls replaced Tabs */}
          <div className="flex items-center gap-2">
            <button
              disabled
              className="p-3 rounded-full bg-gray-100 text-slate-300 cursor-not-allowed transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              disabled
              className="p-3 rounded-full bg-gray-100 text-slate-300 cursor-not-allowed transition-colors"
              aria-label="Next product"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex-1 relative bg-gray-50 m-6 rounded-3xl overflow-hidden min-h-[400px]">
          <img 
            src="/products.png" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%]" 
            alt="Product visual" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
            <div className="mb-6">
              <h3 className="text-5xl font-bold mb-2">18h</h3>
              <p className="text-sm opacity-80">saved for every team</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">$580</h3>
              <p className="text-sm opacity-80">cost saving per user</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
