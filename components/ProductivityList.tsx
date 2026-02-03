
import React from 'react';
import {
  HeartPulse,
  GraduationCap,
  Gavel,
  Briefcase,
  Shirt,
  Sprout,
  ShieldCheck,
  Zap,
  Factory,
  Truck
} from 'lucide-react';

const sections = [
  {
    title: "Where people make decisions that shape their lives",
    items: [
      {
        icon: <HeartPulse className="text-black" size={20} />,
        name: "Health",
        desc: "Diagnosis, treatment, prescriptions, prevention — critical decisions are made every day without clarity. The system is fragmented. Information is locked away. We're building tools that make health decisions understandable and actionable."
      },
      {
        icon: <GraduationCap className="text-black" size={20} />,
        name: "Education",
        desc: "From choosing a career to accessing quality learning, education systems leave too many people navigating gaps. We're not fixing one — we're rethinking how the system serves students, professionals, and institutions."
      },
      {
        icon: <Gavel className="text-black" size={20} />,
        name: "Law",
        desc: "Contracts, rights, disputes, compliance — legal systems are built for professionals, not the people they're supposed to protect. We're changing who gets access."
      }
    ]
  },
  {
    title: "Where industries are ready to be rebuilt",
    items: [
      {
        icon: <Briefcase className="text-black" size={20} />,
        name: "Business",
        desc: "Validation, planning, operations, growth — founders make high-stakes decisions with inadequate tools. We're building what should already exist."
      },
      {
        icon: <Zap className="text-black" size={20} />,
        name: "Energy",
        desc: "Generation, storage, distribution, reliability — energy systems fail quietly and constantly. Power is unreliable, expensive, and unevenly distributed. We're building tools and systems that make energy predictable, accessible, and resilient."
      },
      {
        icon: <Factory className="text-black" size={20} />,
        name: "Manufacturing",
        desc: "Production, logistics, quality, downtime — manufacturing systems run on outdated assumptions and incomplete data. We're building tools that make production measurable, efficient, and scalable."
      },
      {
        icon: <Shirt className="text-black" size={20} />,
        name: "Fashion",
        desc: "Personal style, sizing, access, inclusion — fashion technology ignores most of the world. We're building systems that reflect how people actually live."
      },
      {
        icon: <Sprout className="text-black" size={20} />,
        name: "Agriculture",
        desc: "Pricing, supply chains, weather, market access — food systems still run on guesswork. We're building tools that replace uncertainty with information."
      },
      {
        icon: <Truck className="text-black" size={20} />,
        name: "Transportation & Logistics",
        desc: "Routing, pricing, delivery, reliability — logistics systems fail silently at scale. We're building tools that make movement efficient and visible."
      }
    ]
  },
  {
    title: "Where protection still falls short",
    items: [
      {
        icon: <ShieldCheck className="text-black" size={20} />,
        name: "Security",
        desc: "Identity, fraud, infrastructure, personal safety — security remains reactive. We're building tools that protect people and systems before things go wrong."
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

      <p className="mt-20 text-lg text-slate-500 text-center max-w-3xl mx-auto">
        Our work begins in environments where systems are underdeveloped or failing — and is designed to scale wherever those problems exist.
      </p>
    </section>
  );
};
