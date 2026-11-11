import React from 'react';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import finalCtaImg from '../assets/images/final_cta_warm_home_1794397047553.jpg';

interface FinalCTAProps {
  onRequestService: () => void;
  onCallTeam: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRequestService, onCallTeam }) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Photography with Pure Black Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={finalCtaImg}
          alt="Warm, serene Florida home patio and living area at sunset"
          className="w-full h-full object-cover object-center"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/80"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs sm:text-sm font-bold tracking-wider text-[#87E64B] uppercase">
          <ShieldCheck className="w-4 h-4 text-[#87E64B]" />
          <span>PALM BEACH &amp; BROWARD COUNTIES</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto text-balance drop-shadow-md">
          Make Your Next Fumigation Experience Easier.
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed mb-10">
          Let ALR help you prepare for what&apos;s ahead and make the recovery process simpler.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onRequestService}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold rounded-xl text-base shadow-xl hover:shadow-2xl transition-all active:scale-[0.99] cursor-pointer whitespace-nowrap"
          >
            <span>Request Service</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <a
            href="tel:+15614455619"
            onClick={onCallTeam}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl text-base backdrop-blur-xs transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4 text-[#87E64B]" />
            <span>Call ALR: (561) 445-5619</span>
          </a>
        </div>

        {/* Reassurance text */}
        <p className="text-xs text-neutral-400 mt-6">
          Direct communication with owners Anthony &amp; LoriAnn • Fully Licensed &amp; Insured
        </p>

      </div>
    </section>
  );
};
