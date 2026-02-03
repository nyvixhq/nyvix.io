
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        <div className="lg:w-1/3">
          <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">About Nyvix</span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Solving problems that matter.</h2>
        </div>
        <div className="lg:w-2/3">
          <p className="text-2xl md:text-3xl text-slate-500 leading-snug">
            Most industries still run on broken systems. People are forced to make important decisions without clear information, effective tools, or real access. That's not a mystery. It's a failure of design.
          </p>
          <p className="text-2xl md:text-3xl text-slate-500 leading-snug mt-8">
            <span className="text-black font-bold">Nyvix exists to fix that.</span>
          </p>
          <p className="text-2xl md:text-3xl text-slate-500 leading-snug mt-8">
            We build independent products that replace dysfunction with working systems. Not patches. Not incremental upgrades. Structural change. Each product is designed to stand on its own and redefine how an industry operates.
          </p>
          <p className="text-2xl md:text-3xl text-slate-500 leading-snug mt-8">
            <span className="text-black font-bold">If a problem is obvious and persistent, it means better systems haven't been built yet. We're building them.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
