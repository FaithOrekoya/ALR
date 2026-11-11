import React from 'react';
import { ArrowRight, Check, PackageCheck, Home, AlertCircle } from 'lucide-react';
import { ServiceType } from '../types';
import prepImg from '../assets/images/service_fumigation_prep_1794397045400.jpg';
import recoveryImg from '../assets/images/service_fumigation_recovery_1794397046186.jpg';

interface ServicesProps {
  onEnquireService: (service: ServiceType) => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquireService }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F4F8F3]/60 border-t border-[#111A14]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#3F7C1E] uppercase">
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
            <span>WHAT WE DO</span>
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A14] tracking-tight leading-tight mb-4 text-balance">
            Support Before and After Fumigation.
          </h2>
          <p className="text-base sm:text-lg text-[#1E2621]/80 leading-relaxed max-w-2xl mx-auto">
            Practical assistance to make your fumigation preparation and recovery experience easier.
          </p>
        </div>

        {/* Two Large Visually Engaging Service Blocks */}
        <div className="space-y-16 md:space-y-24">
          
          {/* SERVICE 01 — FUMIGATION PREPARATION */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#111A14]/10 shadow-xs transition-shadow hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] flex items-center justify-center text-[#3F7C1E] border border-[#87E64B]/30">
                      <PackageCheck className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#3F7C1E]">
                      SERVICE 01
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A14] mb-4">
                    Fumigation Preparation
                  </h3>

                  <p className="text-base text-[#1E2621]/80 leading-relaxed mb-6">
                    Tent fumigation requires strict compliance with pre-treatment safety protocols. We provide hands-on assistance before the tent goes on to ensure every consumable and delicate item is properly secured, safeguarding your property and preventing costly cancellation or delay of your fumigation appointment.
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111A14]">
                      Preparation Assistance Includes:
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        'Securing open and unsealed food items, spices, and pantry goods in certified protective Nylofume bags',
                        'Preparing refrigerator and freezer perishables per safety guidelines',
                        'Bagging medicines, oral hygiene items, and baby supplies',
                        'Guidance on moving interior houseplants and outdoor perimeter clearance',
                        'Final walk-through verification to confirm readiness before the fumigation crew arrives',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1E2621]/85">
                          <Check className="w-4 h-4 text-[#3F7C1E] mt-0.5 shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onEnquireService('preparation')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold rounded-xl text-sm shadow-xs transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <span>Enquire About Preparation</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-full">
                <img
                  src={prepImg}
                  alt="Meticulous kitchen and pantry preparation for termite tent fumigation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
              </div>

            </div>
          </div>

          {/* SERVICE 02 — POST-FUMIGATION RECOVERY */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#111A14]/10 shadow-xs transition-shadow hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              <div className="lg:col-span-6 order-2 lg:order-1 relative min-h-[320px] lg:min-h-full">
                <img
                  src={recoveryImg}
                  alt="Clean, fresh, comfortable residential home post-fumigation recovery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden"></div>
              </div>

              <div className="lg:col-span-6 order-1 lg:order-2 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] flex items-center justify-center text-[#3F7C1E] border border-[#87E64B]/30">
                      <Home className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#3F7C1E]">
                      SERVICE 02
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A14] mb-4">
                    Post-Fumigation Recovery
                  </h3>

                  <p className="text-base text-[#1E2621]/80 leading-relaxed mb-6">
                    Once your pest control operator officially certifies and clears the structure for safe re-entry, the transition back can still feel overwhelming. ALR supports you through the recovery phase so you can walk back into a fresh, tidy, and orderly environment.
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#111A14]">
                      Recovery Support Includes:
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        'Safe unbagging of protected kitchen goods, pantry supplies, and items',
                        'Assisting with initial fresh airflow and ventilation after official clearance',
                        'Wiping down key kitchen prep counters and common surfaces',
                        'Returning plants and exterior items back to their regular positions',
                        'Restoring room organization so you settle back into your home effortlessly',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1E2621]/85">
                          <Check className="w-4 h-4 text-[#3F7C1E] mt-0.5 shrink-0 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onEnquireService('recovery')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold rounded-xl text-sm shadow-xs transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <span>Enquire About Recovery</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Independent Service Clarity Notice */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-[#111A14]/10 flex items-start gap-4 shadow-2xs">
          <AlertCircle className="w-5 h-5 text-[#3F7C1E] shrink-0 mt-0.5" />
          <div className="text-sm text-[#566159] leading-relaxed">
            <span className="font-semibold text-[#111A14]">Independent Direct-to-Homeowner Service: </span>
            ALR Fumigation Preparation &amp; Recovery specializes exclusively in logistics, bagging, and recovery assistance. We do not perform chemical fumigation, structural tenting, or pest extermination. We work directly for homeowners and property managers to ensure your fumigation scheduled with your licensed pest company proceeds without hassle.
          </div>
        </div>

      </div>
    </section>
  );
};
