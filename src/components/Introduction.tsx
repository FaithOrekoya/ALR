import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import aboutImg from '../assets/images/about_family_home_service_1794397047131.jpg';

interface IntroductionProps {
  onDiscoverApproach: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onDiscoverApproach }) => {
  const benefits = [
    {
      title: 'Professional preparation assistance',
      description: 'Careful handling of food packaging, pantry clearing, medicine isolation, and delicate perimeter coordination before the tent goes on.',
    },
    {
      title: 'Convenient recovery support',
      description: 'After official clearance by your pest control company, we assist with unbagging, fresh air circulation, and resetting your living spaces.',
    },
    {
      title: 'A more manageable experience for homeowners',
      description: 'Avoid the confusion and physical fatigue of fumigation protocols with dedicated, respectful family-style service.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#FAFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left: High-quality home & service-related photograph */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 flex flex-col h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#111A14]/10 bg-white w-full h-full min-h-[380px] flex-1">
              <img
                src={aboutImg}
                alt="Bright welcoming residential entryway signifying personal care and reliable home support"
                className="w-full h-full object-cover min-h-[380px] lg:min-h-full"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A14]/40 via-transparent to-transparent"></div>
            </div>

            {/* Subtle floating feature badge */}
            <div className="absolute -bottom-4 right-4 sm:right-8 bg-[#111A14] text-white p-4 rounded-xl shadow-lg border border-[#87E64B]/30 max-w-[240px]">
              <p className="text-xs font-bold text-[#87E64B] uppercase tracking-wider">Independent Support</p>
              <p className="text-xs text-neutral-200 mt-1 leading-snug">
                Contracting directly with homeowners for unbiased, devoted care.
              </p>
            </div>
          </div>

          {/* Right: Heading, Paragraph, 3 Concise Benefits & CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            
            <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#3F7C1E] uppercase">
              <span className="w-5 h-0.5 bg-[#87E64B]"></span>
              <span>ABOUT ALR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#111A14] tracking-tight leading-tight mb-6 text-balance">
              Taking the Stress Out of Fumigation Preparation and Recovery.
            </h2>

            <p className="text-base sm:text-lg text-[#1E2621]/80 leading-relaxed mb-8">
              Preparing a home for tent fumigation and returning it to normal afterward can be physically demanding and time-consuming. ALR helps homeowners manage the preparation and recovery process with reliable, professional assistance that keeps your scheduled treatment on track.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-[#F2FCEE] flex items-center justify-center shrink-0 text-[#3F7C1E]">
                    <CheckCircle2 className="w-4 h-4 fill-[#87E64B]/30 text-[#3F7C1E]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#111A14] font-heading">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-[#566159] mt-0.5 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={onDiscoverApproach}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#111A14] hover:bg-black text-white font-semibold rounded-xl text-sm shadow-xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer whitespace-nowrap border border-[#87E64B]/30"
            >
              <span>Discover Our Approach</span>
              <ArrowRight className="w-4 h-4 text-[#87E64B]" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
