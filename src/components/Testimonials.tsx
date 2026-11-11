import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  onRequestService: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onRequestService }) => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      author: 'David & Karen M.',
      location: 'Palm Beach Gardens, FL',
      service: 'Fumigation Preparation & Recovery',
      content:
        'When the pest company gave us the 5-page fumigation checklist, we were completely stressed about bagging every single pantry item and medicine. Anthony and his team came in, took charge with total professionalism, double-bagged everything properly, and even helped us air out and settle back in after the tent came off. Worth every penny.',
      rating: 5,
      date: 'Recent Homeowner',
    },
    {
      id: '2',
      author: 'Patricia L.',
      location: 'Boca Raton, FL',
      service: 'Pre-Fumigation Preparation',
      content:
        'As an elderly homeowner living alone, there was no way I could lift plants and move kitchen supplies into bags by myself. The ALR team was courteous, respectful of my belongings, and treated my home like their own. The fumigators remarked that our house was one of the cleanest, most properly prepared they had seen.',
      rating: 5,
      date: 'Recent Homeowner',
    },
    {
      id: '3',
      author: 'Marcus T.',
      location: 'Fort Lauderdale (Broward County), FL',
      service: 'Post-Fumigation Recovery Support',
      content:
        'The recovery assistance made returning home a breeze instead of an exhausting chore. Everything was unbagged safely, our kitchen counters were reset, and we could sleep in our beds comfortably on night one without spending hours searching for food or toiletries.',
      rating: 5,
      date: 'Recent Homeowner',
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F4F8F3]/50 border-t border-[#111A14]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#3F7C1E] uppercase">
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
            <span>CLIENT EXPERIENCES</span>
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A14] tracking-tight">
            Trusted by Homeowners.
          </h2>
          <p className="text-base sm:text-lg text-[#1E2621]/80 mt-4 leading-relaxed">
            See how our dedicated preparation and recovery support brings peace of mind to Florida residents.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#111A14]/10 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#FBBF24] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#87E64B]/30" />
                </div>

                <p className="text-sm text-[#1E2621]/85 leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#111A14]/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-[#111A14] font-heading">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[#566159]">
                      {t.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#3F7C1E]">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
                <div className="mt-2 text-[11px] font-bold text-[#3F7C1E] uppercase tracking-wide">
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 text-center bg-white rounded-2xl p-6 border border-[#111A14]/10 max-w-2xl mx-auto shadow-2xs">
          <p className="text-sm text-[#1E2621]/85">
            Facing an upcoming tent fumigation date? Let us make the preparation seamless.
          </p>
          <button
            onClick={onRequestService}
            className="mt-3 text-xs font-bold uppercase tracking-wider text-[#3F7C1E] hover:text-[#111A14] underline underline-offset-4 cursor-pointer"
          >
            Speak directly with Anthony &amp; LoriAnn Roderick
          </button>
        </div>

      </div>
    </section>
  );
};
