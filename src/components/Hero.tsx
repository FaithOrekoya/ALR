import React from 'react';
import { Phone, ArrowRight, ShieldCheck, MapPin, HeartHandshake, CheckCircle2 } from 'lucide-react';
import heroHomeImg from '../assets/images/hero_residential_home_1794397043538.jpg';

interface HeroProps {
  onRequestService: () => void;
  onCallTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestService, onCallTeam }) => {
  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-[90vh] flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Full-Bleed Background Image with Black Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroHomeImg}
          alt="Serene South Florida residential home prepared for professional fumigation service"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        
        {/* Black Overlay: High-contrast black gradient for clear readability while keeping the house and palm trees distinctly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35"></div>
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Eyebrow with Brand Color #87E64B */}
          <div className="inline-flex items-center gap-2.5 mb-5 text-xs sm:text-sm font-bold tracking-wider uppercase">
            <span className="w-7 h-0.5 bg-[#87E64B]"></span>
            <span className="text-[#87E64B]">FAMILY OWNED &amp; OPERATED</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md text-balance">
            Fumigation Preparation Made Easier.
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed mb-8 font-normal max-w-2xl drop-shadow-xs">
            From preparing your home before fumigation to helping you settle back in afterward, ALR makes the process simpler, smoother, and less stressful.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onRequestService}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold rounded-xl text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.99] cursor-pointer whitespace-nowrap"
            >
              <span>Request Service</span>
              <ArrowRight className="w-4 h-4 text-[#0A110D] stroke-[2.5]" />
            </button>

            <a
              href="tel:+15614455619"
              onClick={onCallTeam}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl text-base backdrop-blur-md transition-all whitespace-nowrap shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#87E64B]" />
              <span>Call Our Team: (561) 445-5619</span>
            </a>
          </div>

          {/* Trust Statement Strip */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#87E64B] shrink-0" />
              <span className="font-medium text-white">Serving Palm Beach &amp; Broward Counties</span>
            </div>
            <div className="hidden sm:inline-block text-white/30">•</div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#87E64B] shrink-0" />
              <span>Licensed &amp; Insured</span>
            </div>
            <div className="hidden sm:inline-block text-white/30">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#87E64B] shrink-0" />
              <span>Direct Independent Service</span>
            </div>
          </div>

          {/* Floating Trust Card with Black Glass Container */}
          <div className="mt-8 inline-block bg-black/60 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/15 max-w-lg shadow-2xl">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#87E64B]/20 border border-[#87E64B]/40 flex items-center justify-center shrink-0 text-[#87E64B]">
                <HeartHandshake className="w-5 h-5 text-[#87E64B]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading leading-snug">
                  Your Home. Our Priority.
                </h4>
                <p className="text-xs text-neutral-300 mt-0.5">
                  Personal, compassionate care tailored to your family&apos;s peace of mind.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
