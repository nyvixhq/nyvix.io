
import React from 'react';
import { 
  HeartPulse, 
  GraduationCap, 
  Gavel, 
  Briefcase, 
  Shirt, 
  Sprout, 
  ShieldCheck,
  Globe
} from 'lucide-react';
import { COLORS } from '../constants';

const sections = [
  {
    title: "Where people make decisions that shape their lives",
    items: [
      { 
        icon: <HeartPulse className="text-black" size={20} />, 
        name: "Health", 
        desc: "Diagnosis, treatment, prescriptions, prevention — the health system is full of moments where people need clarity and don't get it. We're building across all of them." 
      },
      { 
        icon: <GraduationCap className="text-black" size={20} />, 
        name: "Education", 
        desc: "From choosing a career to accessing quality learning, education in Africa is riddled with gaps. We're not fixing one — we're rethinking how the system serves students, professionals, and institutions." 
      },
      { 
        icon: <Gavel className="text-black" size={20} />, 
        name: "Law", 
        desc: "Contracts, rights, disputes, compliance — legal systems across Africa are built for professionals, not the people they're supposed to protect. We're changing who gets access." 
      }
    ]
  },
  {
    title: "Where industries are ready to be rebuilt",
    items: [
      { 
        icon: <Briefcase className="text-black" size={20} />, 
        name: "Business", 
        desc: "Validation, planning, operations, growth — founders and businesses make high-stakes decisions every day with bad tools or none at all. We're building what should already exist." 
      },
      { 
        icon: <Shirt className="text-black" size={20} />, 
        name: "Fashion", 
        desc: "Personal styling, wardrobe management, trend access, size inclusivity — fashion technology barely exists for most of the world. We're building it from the ground up." 
      },
      { 
        icon: <Sprout className="text-black" size={20} />, 
        name: "Agriculture", 
        desc: "Supply chain, pricing, weather, market access — the people who feed the continent still run on guesswork. We're building tools that give them real information." 
      }
    ]
  },
  {
    title: "Where protection still falls short",
    items: [
      { 
        icon: <ShieldCheck className="text-black" size={20} />, 
        name: "Security", 
        desc: "Identity, fraud, infrastructure, personal safety — security is still reactive in most of Africa. We're building tools that protect people and systems before things go wrong." 
      }
    ]
  }
];

export const ProductivityList: React.FC = () => {
  return (
    <section id="industries" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-20">
      <div className="mb-20 relative">
        <span className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4 block">Industries</span>
        <h2 className="text-6xl font-semibold max-w-2xl leading-tight">Where we work — and why it matters</h2>
        <div className="absolute top-0 right-0 hidden lg:block">
           <img 
             src="/hero_image.png" 
             decoding="auto" 
             width="520" 
             height="520" 
             sizes="217px"
             alt="Icon" 
             className="w-48 h-48 opacity-100 object-contain"
           />
        </div>
      </div>

      <div className="space-y-16">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-12 pt-12 border-t border-gray-100">
            <div className="lg:w-1/3">
              <h4 className="text-2xl font-semibold leading-snug">{section.title}</h4>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-12 h-12 bg-softGray rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 text-lg">{item.name}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
