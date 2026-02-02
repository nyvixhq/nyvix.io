
import React from 'react';
import { TRUST_LOGOS } from '../constants';

export const TrustBar: React.FC = () => {
  return (
    <div className="py-20 text-center">
      <p className="text-sm font-semibold text-slate-400 mb-10">16,000+ small and medium businesses trust Remote</p>
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
        {TRUST_LOGOS.map((logo) => (
          <span key={logo} className="text-2xl font-grotesque font-bold text-slate-400 opacity-80 transition-opacity hover:opacity-100 cursor-default">
            {logo.toLowerCase()}
          </span>
        ))}
      </div>
    </div>
  );
};
