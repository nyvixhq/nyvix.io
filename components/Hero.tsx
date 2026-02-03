
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-20 px-6 flex flex-col items-center text-center max-w-5xl mx-auto">


      <div className="mb-12 flex justify-center w-full">
        <img 
          src="/nyvix_logo_b.svg" 
          alt="Nyvix Logo" 
          className="w-full max-w-4xl object-contain"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 text-xl max-w-4xl leading-relaxed text-slate-500">
        We build
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">focused products</span>
        across
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">health</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">education</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">law</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">business</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">energy</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">manufacturing</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">fashion</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">agriculture</span>,
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">transportation</span>,
        and
        <span className="px-3 py-1 bg-lime-accent rounded-md text-black font-semibold text-lg">security</span>.
      </div>
    </section>
  );
};
