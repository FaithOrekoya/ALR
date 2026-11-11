import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onRequestService: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestService }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFBF9]/95 backdrop-blur-md shadow-xs border-b border-[#111A14]/10 py-3'
          : 'bg-[#FAFBF9]/90 backdrop-blur-xs py-4 md:py-5 border-b border-[#111A14]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark / Emblem */}
          <a
            href="#home"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="ALR Fumigation Preparation and Recovery Homepage"
          >
            <div className="w-10 h-10 rounded-lg bg-[#111A14] text-white flex items-center justify-center font-bold tracking-tight shadow-xs transition-transform group-hover:scale-105 border border-[#87E64B]/30">
              <span className="text-[#87E64B] font-heading font-extrabold text-base">ALR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#111A14] font-heading font-extrabold text-base sm:text-lg leading-tight tracking-tight">
                ALR Fumigation
              </span>
              <span className="text-[11px] font-bold tracking-wider text-[#4E9323] uppercase leading-none">
                Preparation &amp; Recovery
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#1E2621]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#111A14] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#87E64B] decoration-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Direct Phone + Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+15614455619"
              className="flex items-center gap-2 text-xs font-semibold text-[#111A14] hover:text-[#4E9323] transition-colors py-2 px-3 rounded-md hover:bg-[#EBF0E9]/60 whitespace-nowrap shrink-0"
              title="Call ALR directly at (561) 445-5619"
            >
              <Phone className="w-3.5 h-3.5 text-[#4E9323]" />
              <span>(561) 445-5619</span>
            </a>

            <button
              onClick={onRequestService}
              className="bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] text-xs md:text-sm font-bold px-4 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Request Service
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+15614455619"
              className="p-2 text-[#111A14] hover:text-[#4E9323] rounded-lg bg-[#EBF0E9]/80"
              aria-label="Call ALR"
            >
              <Phone className="w-4 h-4 text-[#4E9323]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111A14] rounded-lg hover:bg-[#EBF0E9]/80 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFBF9] border-b border-[#111A14]/10 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-[#1E2621] hover:text-[#4E9323] px-3 py-2 rounded-md hover:bg-[#EBF0E9]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#111A14]/10 flex flex-col gap-2">
              <a
                href="tel:+15614455619"
                className="flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#111A14] bg-[#EBF0E9] rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#4E9323]" />
                Call (561) 445-5619
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestService();
                }}
                className="w-full py-2.5 px-4 text-sm font-bold text-[#0A110D] bg-[#87E64B] hover:bg-[#75D43B] rounded-lg shadow-xs transition-colors"
              >
                Request Service
              </button>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#566159] pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4E9323]" />
              <span>Licensed &amp; Insured in Palm Beach &amp; Broward</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
