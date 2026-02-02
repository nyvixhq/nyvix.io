
import React from 'react';
import { FAQS, COLORS } from '../constants';
import { ChevronRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-16">
      <div className="flex-1">
        <h2 className="text-5xl font-semibold mb-16">FAQ's</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="group border-t border-gray-100 last:border-b py-6 cursor-pointer">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-medium text-slate-500 group-hover:text-black transition-colors">{faq.question}</h4>
                <ChevronRight className="text-gray-300 group-hover:text-black transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-80">
        <div className="bg-slate-dark rounded-3xl p-6 text-white shadow-2xl">
          <div className="rounded-2xl overflow-hidden mb-6 h-48">
            <img src="https://framerusercontent.com/images/MJO3o99Wb3tfCC5hdT1fAxb1orw.jpg" alt="Team" className="w-full h-full object-cover" />
          </div>
          <p className="text-lg font-medium leading-snug mb-8">
            "We're looking at savings in the hundreds of thousands, not just in direct costs but in time and efficiency too."
          </p>
          <div>
            <p className="font-bold">James Smith</p>
            <p className="text-xs text-slate-400">CFO @Remote</p>
          </div>
        </div>
      </div>
    </section>
  );
};
