import React from 'react';
import { PhoneCall, CalendarCheck, ShieldCheck } from 'lucide-react';

interface HowItWorksProps {
  onRequestService: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onRequestService }) => {
  const steps = [
    {
      number: '01',
      icon: PhoneCall,
      title: 'Get In Touch',
      description: 'Contact ALR and explain your fumigation preparation or recovery needs.',
      details: 'Tell us your home size, location in Palm Beach or Broward, and scheduled tent dates.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Plan Your Service',
      description: 'Discuss the assistance required and arrange the service details with the team.',
      details: 'We confirm timelines aligned with your pest company and tailor the exact scope of bagging and recovery.',
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Get The Support You Need',
      description: 'ALR helps make the preparation or recovery process more manageable.',
      details: 'Our family-run team arrives on schedule to handle the heavy lifting, ensuring peace of mind.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-[#FAFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#3F7C1E] uppercase">
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
            <span>THREE SIMPLE STEPS</span>
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A14] tracking-tight">
            Getting Started Is Simple.
          </h2>
          <p className="text-base sm:text-lg text-[#1E2621]/80 mt-4">
            We streamline the entire process from initial call to your final return home.
          </p>
        </div>

        {/* Steps Grid with Connecting Lines */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-[#111A14]/10 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-[#111A14]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Top indicator & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#F2FCEE] flex items-center justify-center text-[#3F7C1E] border border-[#87E64B]/30">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-3xl font-extrabold font-heading text-[#87E64B] tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111A14] mb-2 font-heading">
                      STEP {step.number} — {step.title.toUpperCase()}
                    </h3>

                    <p className="text-sm font-medium text-[#1E2621] mb-2 leading-relaxed">
                      {step.description}
                    </p>

                    <p className="text-xs text-[#566159] leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#111A14]/5 text-xs font-bold text-[#3F7C1E]">
                    Simple &amp; stress-free
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Bottom Action */}
        <div className="mt-14 text-center">
          <button
            onClick={onRequestService}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold rounded-xl text-sm shadow-xs transition-colors cursor-pointer"
          >
            Ready to Begin? Request Service
          </button>
        </div>

      </div>
    </section>
  );
};
