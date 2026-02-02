
import React from 'react';
import { COLORS } from '../constants';
// Added CheckCircle2 and Layers to the lucide-react imports to fix "Cannot find name" errors
import { RefreshCw, Play, Plus, Trash2, Pause, UserPlus, CheckCircle2, Layers } from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card: Pre-Hiring */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-gray-100 rounded text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
               <UserPlus size={10} /> Pre-hiring
             </span>
          </div>
          <h3 className="text-5xl font-semibold max-w-sm">Empowering your talent pipeline</h3>
          <div className="bg-lime-accent rounded-[32px] p-8 mt-4 overflow-hidden shadow-inner flex flex-col justify-end min-h-[500px] relative">
            <div className="bg-white rounded-3xl p-6 shadow-xl w-full">
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                     <div className="w-4 h-2 bg-white rounded-full"></div>
                   </div>
                   <span className="font-bold">Remote</span>
                 </div>
                 <div className="flex gap-2">
                    <button className="p-2 border border-gray-100 rounded-full"><RefreshCw size={14}/></button>
                    <button className="px-4 py-1.5 bg-black text-white rounded-full text-xs font-bold">Generate report</button>
                 </div>
               </div>

               <div className="space-y-4">
                 <div className="flex items-center gap-3 p-3 bg-lime-accent/10 rounded-xl">
                   <div className="p-2 bg-lime-accent rounded-full text-black"><CheckCircle2 size={16}/></div>
                   <div className="text-sm"><span className="font-bold">Alex Marshall</span> processed a payroll</div>
                 </div>
                 <div className="flex items-center gap-3 p-3 border border-gray-50 rounded-xl">
                   <div className="p-2 bg-gray-100 rounded-full text-gray-400"><Plus size={16}/></div>
                   <div className="text-sm flex items-center gap-2">
                     <span className="font-bold">Alex Marshall</span> added 
                     <span className="flex items-center gap-1.5 px-2 py-0.5 bg-gray-100 rounded-full text-xs font-bold">
                       <img src="https://picsum.photos/40/40?grayscale" className="w-4 h-4 rounded-full" /> Henry B.
                     </span>
                   </div>
                 </div>
                 <div className="flex items-center gap-3 p-3 border border-gray-50 rounded-xl">
                    <div className="p-2 bg-gray-100 rounded-full text-gray-400"><Plus size={16}/></div>
                    <div className="text-sm"><span className="font-bold text-red-500">— Nadia Thompson</span> removed Maddie D.</div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Card: Post-Hiring */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-gray-100 rounded text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
               <Layers size={10} /> Post-hiring
             </span>
          </div>
          <h3 className="text-5xl font-semibold max-w-sm">Making yourself at home</h3>
          <div className="bg-gray-50 rounded-[32px] p-8 mt-4 overflow-hidden border border-gray-100 flex flex-col min-h-[500px]">
            <div className="space-y-4">
              {['Software Developer 6', 'Lead Software Developer 8', 'Product Owner 5'].map((role, i) => (
                <div key={role} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-lime-accent rounded-full flex items-center justify-center">
                      <div className="w-4 h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="font-bold text-sm">{role}</span>
                  </div>
                  <ChevronRight size={16} className="text-slate-300" />
                </div>
              ))}
              
              <div className="pt-6 space-y-3">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-medium text-slate-500">Office Introduction</span>
                  <CheckCircle2 size={18} className="text-gray-200" />
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-sm font-medium text-slate-500">Skill Development Courses <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded ml-2">Optional</span></span>
                  <CheckCircle2 size={18} className="text-gray-200" />
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-sm font-medium text-slate-500">Mentorship Program <span className="text-[10px] px-2 py-0.5 bg-gray-100 rounded ml-2">Optional</span></span>
                  <CheckCircle2 size={18} className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);
