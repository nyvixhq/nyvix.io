
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
            Nyvix is a technology company based in Lagos, Nigeria. We build products across industries where things are fundamentally broken — where people are forced to make important decisions without the right information, the right tools, or the right access. 
          </p>
          <p className="text-2xl md:text-3xl text-slate-500 leading-snug mt-8">
            Each product we build is independent, serves its own users, and exists to change how an entire industry works — not to check a box and move on. 
            <span className="text-black block mt-6 font-bold">The problems are obvious. We're building the solutions.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
