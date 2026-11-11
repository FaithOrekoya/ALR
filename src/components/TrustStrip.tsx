import React from 'react';
import { Users, Shield, MapPin, Building2 } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Users,
      title: 'Family-Owned Business',
      desc: 'Owned & operated by the Roderick family',
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      desc: 'Verified coverage for your peace of mind',
    },
    {
      icon: MapPin,
      title: 'Palm Beach County',
      desc: 'Active local residential service',
    },
    {
      icon: Building2,
      title: 'Broward County',
      desc: 'Full service throughout the area',
    },
  ];

  return (
    <section className="border-y border-[#111A14]/10 bg-white/90 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 sm:gap-4 group p-2 rounded-lg"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F2FCEE] flex items-center justify-center shrink-0 text-[#3F7C1E] transition-colors group-hover:bg-[#87E64B] group-hover:text-[#0A110D]">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-semibold text-[#111A14] font-heading leading-tight truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#566159] mt-0.5 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
