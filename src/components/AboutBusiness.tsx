import React from 'react';
import { Heart, Building, ShieldCheck, UserCheck, Check, Sparkles, MapPin } from 'lucide-react';

export const AboutBusiness: React.FC = () => {
  return (
    <section id="our-story" className="py-20 md:py-28 bg-[#FAFBF9] relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#87E64B]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#3F7C1E] uppercase">
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
            <span>OUR STORY &amp; VALUES</span>
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A14] tracking-tight leading-tight text-balance">
            A Family-Owned Business That Understands Your Home Matters.
          </h2>
          <p className="text-base sm:text-lg text-[#1E2621]/80 mt-4 leading-relaxed max-w-2xl mx-auto">
            Founded in South Florida to transform the stressful logistics of structural termite tenting into a smooth, orderly experience.
          </p>
        </div>

        {/* Restructured 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column (7 cols): The Founder Story & Philosophy */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#111A14]/10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#3F7C1E] mb-4">
                <UserCheck className="w-4 h-4 text-[#87E64B]" />
                <span>FOUNDED BY ANTHONY &amp; LORIANN RODERICK</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A14] mb-6 font-heading leading-snug">
                Built on Dedicated Homeowner Support
              </h3>

              <div className="space-y-4 text-base text-[#1E2621]/85 leading-relaxed font-normal">
                <p>
                  When your property is scheduled for termite tent fumigation, you receive pages of mandatory preparation checklists. Between bagging every food item, clearing perishables, safeguarding medicines, and moving delicate houseplants, homeowners are often overwhelmed.
                </p>
                <p>
                  ALR Fumigation Preparation &amp; Recovery was created to step in and take care of everything. Operating independently out of Greenacres / Lake Worth, Florida, we contract directly with you—not the fumigator—ensuring that your belongings, schedule, and peace of mind are our sole focus.
                </p>
              </div>

              {/* Personal Quote Callout Card */}
              <div className="mt-8 p-5 rounded-2xl bg-[#F4F8F3] border border-[#111A14]/10">
                <p className="text-sm font-medium italic text-[#111A14] leading-relaxed">
                  &ldquo;We treat your residence with the exact care, thoroughness, and respect we expect for our own home and family.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#111A14] font-heading">
                    Anthony &amp; LoriAnn Roderick
                  </span>
                  <span className="text-[#566159]">Owners &amp; Operators</span>
                </div>
              </div>
            </div>

            {/* Quick Location & Direct Assurance */}
            <div className="mt-8 pt-6 border-t border-[#111A14]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#566159]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#3F7C1E]" />
                <span className="font-medium text-[#111A14]">Greenacres, FL · Serving Palm Beach &amp; Broward</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-[#3F7C1E]">
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Direct Homeowner Representation</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Three Core Value & Credential Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Value 1: Independent Advocacy */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#111A14]/10 shadow-xs hover:border-[#87E64B] transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] border border-[#87E64B]/30 flex items-center justify-center text-[#3F7C1E] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#111A14] font-heading">
                    Independent &amp; Objective
                  </h4>
                  <span className="text-[11px] font-semibold text-[#3F7C1E] uppercase tracking-wider">
                    Client-First Allegiance
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#1E2621]/80 leading-relaxed">
                We work directly for you, ensuring every step of your preparation and post-fumigation recovery protects your home without conflicts of interest.
              </p>
            </div>

            {/* Value 2: Verified Local Credentials */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#111A14]/10 shadow-xs hover:border-[#87E64B] transition-all">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] border border-[#87E64B]/30 flex items-center justify-center text-[#3F7C1E] shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#111A14] font-heading">
                    Lantana Chamber Member
                  </h4>
                  <span className="text-[11px] font-semibold text-[#3F7C1E] uppercase tracking-wider">
                    Licensed &amp; Insured
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#1E2621]/80 leading-relaxed">
                Active member of the Greater Lantana Chamber of Commerce and fully authorized across Palm Beach and Broward County neighborhoods.
              </p>
            </div>

            {/* Value 3: Community Giving */}
            <div className="bg-[#111A14] text-white rounded-2xl p-6 sm:p-7 border border-[#87E64B]/30 shadow-xs">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E2E23] border border-[#87E64B]/30 flex items-center justify-center text-[#87E64B] shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Community Giving
                  </h4>
                  <span className="text-[11px] font-semibold text-[#87E64B] uppercase tracking-wider">
                    Giving Back
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Proud supporter of <strong className="text-white font-semibold">St. Jude Children&apos;s Hospital</strong>, bringing family-centered values to every aspect of our business.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
