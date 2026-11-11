import React, { useState } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408655/cr_t_0_1_eyzmmx.jpg',
    caption: 'Full Structural Tent Fumigation Setup on Residential Property',
    category: 'Fumigation Tenting',
  },
  {
    id: '2',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408654/rs_w_370_cg_true_4_kl8ybp.jpg',
    caption: 'Meticulous Kitchen Pantry & Nylofume Protective Bagging',
    category: 'Food Safety Prep',
  },
  {
    id: '3',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408654/rs_w_370_cg_true_m_z4uye3.jpg',
    caption: 'Secure Refrigerator & Freezer Perishables Protection',
    category: 'Pantry Logistics',
  },
  {
    id: '4',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408654/rs_w_740_1_ea3wkv.jpg',
    caption: 'Exterior Clearance & Perimeter Preparation Before Tenting',
    category: 'Perimeter Care',
  },
  {
    id: '5',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408653/cr_t_0_g76sxg.jpg',
    caption: 'Specialized Nylofume Double-Bagging for All Consumables',
    category: 'Certified Bagging',
  },
  {
    id: '6',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408653/rs_w_370_cg_true_m_2_dezz9d.jpg',
    caption: 'Delicate Items, Medicines & Personal Goods Safe Isolation',
    category: 'Interior Preparation',
  },
  {
    id: '7',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408653/rs_w_740_vl8f40.jpg',
    caption: 'South Florida Single-Family Home Ready for Tenting Treatment',
    category: 'Complete Preparation',
  },
  {
    id: '8',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408651/rs_w_370_cg_true_3_qsrbgx.jpg',
    caption: 'Post-Clearance Aeration & Orderly Household Reset',
    category: 'Recovery Support',
  },
  {
    id: '9',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408651/rs_w_370_cg_true_2_dwzp8t.jpg',
    caption: 'Careful Unbagging & Clean Kitchen Setup for Homeowner Reentry',
    category: 'Safe Reentry',
  },
  {
    id: '10',
    url: 'https://res.cloudinary.com/byde2j9a/image/upload/v1794408651/rs_w_370_cg_true_ixo4wb.jpg',
    caption: 'Houseplant Relocation & Safe Distance Protection',
    category: 'Plant Care',
  },
];

// Duplicate for continuous seamless infinite loop
const doubleImages = [...galleryImages, ...galleryImages];

export const WorkGallerySlideshow: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FAFBF9] border-t border-[#111A14]/10 relative overflow-hidden">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#3F7C1E] uppercase">
              <Camera className="w-4 h-4 text-[#87E64B]" />
              <span>ON-SITE PREPARATION &amp; RECOVERY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A14] tracking-tight leading-tight">
              Our Work in Action.
            </h2>
            <p className="text-base sm:text-lg text-[#1E2621]/80 mt-3 leading-relaxed">
              Real projects scrolling across South Florida: from whole-home Nylofume bagging to final post-fumigation recovery.
            </p>
          </div>

          {/* Controls: Pause / Play toggle + helper hint */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#111A14]/15 hover:border-[#87E64B] text-xs font-bold text-[#111A14] shadow-2xs transition-colors cursor-pointer"
              title={isPaused ? 'Resume scrolling' : 'Pause scrolling'}
            >
              {isPaused ? (
                <>
                  <Play className="w-4 h-4 text-[#3F7C1E] fill-[#3F7C1E]" />
                  <span>Resume Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-4 h-4 text-[#3F7C1E]" />
                  <span>Pause Scroll</span>
                </>
              )}
            </button>
            <span className="text-xs text-[#566159] hidden lg:inline-block">
              Hover over cards to pause
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Soft edge fade scrims */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FAFBF9] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FAFBF9] to-transparent z-10 pointer-events-none"></div>

        {/* The Animated Scrolling Track */}
        <div
          className="animate-scroll-marquee flex items-center gap-6"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {doubleImages.map((img, idx) => {
            const originalIndex = idx % galleryImages.length;
            return (
              <div
                key={`${img.id}-${idx}`}
                onClick={() => setLightboxIndex(originalIndex)}
                className="group relative w-72 sm:w-88 md:w-96 h-60 sm:h-72 md:h-80 rounded-3xl overflow-hidden bg-[#111A14] border border-[#111A14]/15 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer shrink-0 select-none hover:-translate-y-1"
              >
                {/* Image */}
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:from-black/90"></div>

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 bg-[#87E64B] text-[#0A110D] text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-xs">
                    {img.category}
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-xs flex items-center justify-center text-white border border-white/20">
                    <Maximize2 className="w-4 h-4 text-[#87E64B]" />
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="text-sm sm:text-base font-bold text-white font-heading leading-snug drop-shadow-xs line-clamp-2">
                    {img.caption}
                  </p>
                  <p className="text-[11px] text-[#87E64B] font-semibold mt-1">
                    Click to view full photo
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal for Enlarge View */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Close Lightbox */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer z-50"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={galleryImages[lightboxIndex].url}
              alt={galleryImages[lightboxIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="inline-block px-3 py-1 bg-[#87E64B] text-[#0A110D] text-xs font-bold uppercase tracking-wider rounded-lg mb-2">
                {galleryImages[lightboxIndex].category}
              </span>
              <p className="text-base sm:text-lg font-bold font-heading">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-xs text-neutral-400 mt-1 font-mono">
                {lightboxIndex + 1} of {galleryImages.length}
              </p>
            </div>

            {/* Prev / Next buttons */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev! - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev! + 1) % galleryImages.length)
              }
              className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
