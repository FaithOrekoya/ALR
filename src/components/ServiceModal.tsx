import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Send, ShieldCheck } from 'lucide-react';
import { ServiceType } from '../types';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: ServiceType;
  defaultNotes?: string;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'both',
  defaultNotes = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState<ServiceType>(defaultService);
  const [location, setLocation] = useState('');
  const [tentDate, setTentDate] = useState('');
  const [notes, setNotes] = useState(defaultNotes);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !location.trim()) {
      setError('Please provide your name, phone number, and city/county.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAFBF9] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#111A14]/15 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#566159] hover:text-[#111A14] hover:bg-[#EBF0E9] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#F2FCEE] border border-[#87E64B]/40 text-[#3F7C1E] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#111A14] mb-2 font-heading">
              Request Received!
            </h3>
            <p className="text-sm text-[#1E2621]/80 mb-6 leading-relaxed">
              Thank you, {fullName.split(' ')[0]}. Anthony or LoriAnn Roderick will review your property details and contact you promptly at {phone}.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+15614455619"
                className="py-3 px-4 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] text-sm font-bold rounded-xl text-center shadow-xs"
              >
                Call Directly: (561) 445-5619
              </a>
              <button
                onClick={handleReset}
                className="py-2.5 px-4 text-xs font-semibold text-[#566159] hover:text-[#111A14]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3F7C1E] mb-1">
                <ShieldCheck className="w-4 h-4 text-[#87E64B]" />
                <span>ALR Direct Service Request</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#111A14] font-heading">
                Schedule Your Preparation
              </h3>
              <p className="text-xs text-[#566159] mt-1">
                Serving Palm Beach &amp; Broward Counties. Personal attention from owners.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#111A14]/15 bg-white focus:outline-none focus:border-[#87E64B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(561) 000-0000"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#111A14]/15 bg-white focus:outline-none focus:border-[#87E64B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#111A14]/15 bg-white focus:outline-none focus:border-[#87E64B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1">
                    City / County *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Boca Raton, FL"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#111A14]/15 bg-white focus:outline-none focus:border-[#87E64B]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1">
                    Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value as ServiceType)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#111A14]/15 bg-white focus:outline-none focus:border-[#87E64B]"
                  >
                    <option value="both">Both Prep &amp; Recovery</option>
                    <option value="preparation">Preparation Only</option>
                    <option value="recovery">Recovery Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1">
                  Scheduled Tent Date (If Known)
                </label>
                <input
                  type="date"
                  value={tentDate}
                  onChange={(e) => setTentDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#111A14]/15 bg-white focus:outline-none focus:border-[#87E64B]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1">
                  Home Notes / Needs
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Home size, pets, plants, or special assistance..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#111A14]/15 bg-white focus:outline-none focus:border-[#87E64B]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>{isSubmitting ? 'Submitting...' : 'Submit Service Request'}</span>
              </button>

              <div className="text-center pt-2">
                <a
                  href="tel:+15614455619"
                  className="text-xs font-semibold text-[#111A14] hover:text-[#3F7C1E] inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#3F7C1E]" />
                  Or call directly: (561) 445-5619
                </a>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
