import React from 'react';
import { Heart, ShieldCheck, MapPin, Smile } from 'lucide-react';

export const WhyChooseALR: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'FAMILY-OWNED APPROACH',
      description: 'Personal attention and a genuine commitment to helping homeowners through every step.',
    },
    {
      icon: ShieldCheck,
      title: 'LICENSED & INSURED',
      description: 'Professional service backed by verified business credentials for complete security.',
    },
    {
      icon: MapPin,
      title: 'LOCAL SERVICE',
      description: 'Proudly serving homeowners across all of Palm Beach and Broward Counties.',
    },
    {
      icon: Smile,
      title: 'LESS STRESS',
      description: 'Practical support to help make the preparation and recovery process easier and orderly.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#111A14] text-white relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#87E64B]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#87E64B] uppercase">
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
            <span>OUR PROMISE</span>
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Homeowners Choose ALR.
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 mt-4 leading-relaxed">
            We treat your residence with the exact care, thoroughness, and respect we would expect for our own family.
          </p>
        </div>

        {/* Four Column Benefits Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#18241C] rounded-2xl p-7 border border-white/10 hover:border-[#87E64B]/60 transition-all hover:bg-[#1E2E23] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#26382C] border border-[#87E64B]/20 flex items-center justify-center text-[#87E64B] mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-3 font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-[#87E64B] font-bold">
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
