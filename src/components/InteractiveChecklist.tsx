import React, { useState } from 'react';
import { ClipboardList, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceType } from '../types';

interface InteractiveChecklistProps {
  onApplyToChecklist: (serviceType: ServiceType, notes: string) => void;
}

export const InteractiveChecklist: React.FC<InteractiveChecklistProps> = ({
  onApplyToChecklist,
}) => {
  const [homeSize, setHomeSize] = useState<'condo' | 'standard' | 'large'>('standard');
  const [selectedService, setSelectedService] = useState<ServiceType>('both');
  const [hasPets, setHasPets] = useState(true);
  const [hasPottedPlants, setHasPottedPlants] = useState(true);
  const [hasLargePantry, setHasLargePantry] = useState(true);

  const checklistItems = [
    {
      label: 'Double-bag opened and cardboard foods in certified Nylofume bags',
      applies: true,
      category: 'Food & Pantry',
    },
    {
      label: 'Empty or seal perishable refrigerator items and ice maker bins',
      applies: true,
      category: 'Refrigeration',
    },
    {
      label: 'Secure all prescription medicines, vitamins, cosmetics, and baby items',
      applies: true,
      category: 'Health & Personal Care',
    },
    {
      label: 'Move pet food, bowls, bedding, toys, and pet medications off premises',
      applies: hasPets,
      category: 'Pets',
    },
    {
      label: 'Relocate interior houseplants and clear plants within 36 inches of structure',
      applies: hasPottedPlants,
      category: 'Plants & Exterior',
    },
    {
      label: 'Special double-bagging for extensive kitchen pantry and open seasonings',
      applies: hasLargePantry,
      category: 'Pantry Logistics',
    },
    {
      label: 'Post-fumigation aeration check and safe unbagging of protected items',
      applies: selectedService === 'recovery' || selectedService === 'both',
      category: 'Recovery',
    },
    {
      label: 'Surface reset and restoring pantry and furniture back to original comfort',
      applies: selectedService === 'recovery' || selectedService === 'both',
      category: 'Recovery',
    },
  ];

  const handleApply = () => {
    const summary = `${homeSize.toUpperCase()} home. Items noted: ${hasPets ? 'Pets, ' : ''}${hasPottedPlants ? 'Plants, ' : ''}${hasLargePantry ? 'Large pantry, ' : ''}Service: ${selectedService.toUpperCase()}`;
    onApplyToChecklist(selectedService, summary);
  };

  return (
    <section className="py-16 bg-[#F2FCEE]/50 border-y border-[#111A14]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#111A14]/10 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Interactive Controls */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#3F7C1E]">
                <ClipboardList className="w-4 h-4 text-[#87E64B]" />
                <span>INTERACTIVE HOMEOWNER GUIDE</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111A14] mb-3">
                Check What Your Home Needs
              </h3>
              
              <p className="text-sm text-[#566159] mb-6 leading-relaxed">
                Adjust the settings below to see your personalized preparation and recovery checklist.
              </p>

              {/* Property Size Selector */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-2">
                  Property Size:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'condo', label: '1–2 Bed' },
                    { id: 'standard', label: '3–4 Bed' },
                    { id: 'large', label: '5+ Bed / Estate' },
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setHomeSize(size.id as any)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        homeSize === size.id
                          ? 'bg-[#111A14] text-white border-[#111A14]'
                          : 'bg-[#FAFBF9] text-[#1E2621] border-[#111A14]/15 hover:border-[#111A14]/40'
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type Needed */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-2">
                  Phase You Want Help With:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'preparation', label: 'Prep Only' },
                    { id: 'recovery', label: 'Recovery' },
                    { id: 'both', label: 'Both (Complete)' },
                  ].map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => setSelectedService(svc.id as ServiceType)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                        selectedService === svc.id
                          ? 'bg-[#87E64B] text-[#0A110D] border-[#87E64B]'
                          : 'bg-[#FAFBF9] text-[#1E2621] border-[#111A14]/15 hover:border-[#111A14]/40'
                      }`}
                    >
                      {svc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Home Factors */}
              <div className="mb-6 space-y-2.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14]">
                  Specific Property Conditions:
                </label>
                
                <label className="flex items-center gap-3 p-2.5 rounded-lg bg-[#FAFBF9] border border-[#111A14]/10 cursor-pointer hover:bg-[#F2FCEE]">
                  <input
                    type="checkbox"
                    checked={hasPets}
                    onChange={(e) => setHasPets(e.target.checked)}
                    className="w-4 h-4 accent-[#87E64B] rounded"
                  />
                  <span className="text-xs font-medium text-[#1E2621]">
                    Have pets (pet food, medicines, bedding)
                  </span>
                </label>

                <label className="flex items-center gap-3 p-2.5 rounded-lg bg-[#FAFBF9] border border-[#111A14]/10 cursor-pointer hover:bg-[#F2FCEE]">
                  <input
                    type="checkbox"
                    checked={hasPottedPlants}
                    onChange={(e) => setHasPottedPlants(e.target.checked)}
                    className="w-4 h-4 accent-[#87E64B] rounded"
                  />
                  <span className="text-xs font-medium text-[#1E2621]">
                    Houseplants or perimeter vegetation
                  </span>
                </label>

                <label className="flex items-center gap-3 p-2.5 rounded-lg bg-[#FAFBF9] border border-[#111A14]/10 cursor-pointer hover:bg-[#F2FCEE]">
                  <input
                    type="checkbox"
                    checked={hasLargePantry}
                    onChange={(e) => setHasLargePantry(e.target.checked)}
                    className="w-4 h-4 accent-[#87E64B] rounded"
                  />
                  <span className="text-xs font-medium text-[#1E2621]">
                    Full pantry or opened seasonings/spices
                  </span>
                </label>
              </div>

              <button
                onClick={handleApply}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#0A110D]" />
                <span>Get Help With This Custom Checklist</span>
              </button>
            </div>

            {/* Right: Dynamic Checklist Preview */}
            <div className="lg:col-span-7 bg-[#FAFBF9] rounded-2xl p-6 sm:p-8 border border-[#111A14]/10">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#111A14]/10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111A14]">
                  Required Action Checklist
                </span>
                <span className="text-xs font-bold text-[#3F7C1E]">
                  {checklistItems.filter((i) => i.applies).length} Focus Areas
                </span>
              </div>

              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {checklistItems
                  .filter((item) => item.applies)
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#111A14]/5 shadow-2xs"
                    >
                      <CheckCircle className="w-4 h-4 text-[#3F7C1E] mt-0.5 shrink-0 stroke-[2.5]" />
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#3F7C1E]">
                          {item.category}
                        </span>
                        <p className="text-xs text-[#1E2621] mt-0.5 font-medium leading-relaxed">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#111A14]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#566159]">
                <span>ALR supplies certified bags and handles the labor.</span>
                <button
                  onClick={handleApply}
                  className="font-bold text-[#111A14] hover:text-[#3F7C1E] inline-flex items-center gap-1 cursor-pointer"
                >
                  Request assistance <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
