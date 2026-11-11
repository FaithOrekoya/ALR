import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onRequestService: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestService }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111A14] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner / Final Prompt */}
        <div className="bg-[#0A110D] rounded-2xl p-6 sm:p-8 mb-16 border border-[#87E64B]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
              Need Help Preparing for Fumigation?
            </h3>
            <p className="text-sm text-neutral-300 mt-1">
              Call Anthony and LoriAnn Roderick today for direct homeowner support.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+15614455619"
              className="py-3 px-5 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-colors"
            >
              (561) 445-5619
            </a>
            <button
              onClick={onRequestService}
              className="py-3 px-5 text-xs font-bold text-[#0A110D] bg-[#87E64B] hover:bg-[#75D43B] rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              Request Service
            </button>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & About Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black text-[#87E64B] border border-[#87E64B]/40 flex items-center justify-center font-bold tracking-tight">
                <span className="font-heading font-extrabold text-base">ALR</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-extrabold text-lg leading-tight">
                  ALR Fumigation
                </span>
                <span className="text-[11px] font-bold tracking-wider text-[#87E64B] uppercase leading-none">
                  Preparation &amp; Recovery LLC
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              A family-owned and operated Florida company specializing exclusively in residential tent fumigation preparation and post-fumigation recovery services.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <p>Independent service contracting directly with homeowners.</p>
              <p>Proud supporter of St. Jude Children&apos;s Hospital.</p>
              <p>Member of Greater Lantana Chamber of Commerce.</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#87E64B]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Homeowner Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#87E64B]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Pre-Fumigation Prep</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Nylofume Food Bagging</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Post-Fumigation Recovery</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Home Reentry Setup</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Plant &amp; Perimeter Care</a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Coverage Area */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#87E64B]">
              Contact &amp; Coverage
            </h4>
            <div className="space-y-2.5 text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#87E64B] mt-1 shrink-0" />
                <a href="tel:+15614455619" className="hover:text-white transition-colors">
                  (561) 445-5619
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#87E64B] mt-1 shrink-0" />
                <a href="mailto:alrfumeprep@gmail.com" className="hover:text-white transition-colors break-all">
                  alrfumeprep@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#87E64B] mt-1 shrink-0" />
                <span>6904 Clendenin St, Greenacres, FL 33463</span>
              </div>
              <div className="pt-2 text-xs text-[#87E64B] font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Serving Palm Beach &amp; Broward Counties</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} ALR Fumigation Preparation and Recovery LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Licensed &amp; Insured in Florida</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
