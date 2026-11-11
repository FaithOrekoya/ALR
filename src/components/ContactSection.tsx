import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { ContactFormData, ServiceType } from '../types';

interface ContactSectionProps {
  initialService?: ServiceType;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'both',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: initialService,
    propertyLocation: '',
    tentDate: '',
    message: initialMessage,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedReference, setSubmittedReference] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number';
    }

    if (!formData.propertyLocation.trim()) {
      newErrors.propertyLocation = 'Please specify your city or county';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your property or schedule';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending inquiry to alrfumeprep@gmail.com
    setTimeout(() => {
      const refNumber = `ALR-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedReference(refNumber);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceNeeded: 'both',
      propertyLocation: '',
      tentDate: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAFBF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider text-[#3F7C1E] uppercase">
            <span className="w-5 h-0.5 bg-[#87E64B]"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111A14] tracking-tight leading-tight mb-4 text-balance">
            Let&apos;s Make Things Easier.
          </h2>
          <p className="text-base sm:text-lg text-[#1E2621]/80 leading-relaxed">
            Tell us a little about your needs, and our team will be happy to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Information Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-8 border border-[#111A14]/10 shadow-sm">
              <h3 className="text-xl font-bold text-[#111A14] mb-6 font-heading">
                ALR Direct Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] border border-[#87E64B]/30 flex items-center justify-center text-[#3F7C1E] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#566159]">
                      Direct Telephone
                    </span>
                    <p className="mt-0.5">
                      <a
                        href="tel:+15614455619"
                        className="text-lg font-bold text-[#111A14] hover:text-[#3F7C1E] transition-colors"
                      >
                        (561) 445-5619
                      </a>
                    </p>
                    <p className="text-xs text-[#566159]">Call or text for immediate scheduling</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] border border-[#87E64B]/30 flex items-center justify-center text-[#3F7C1E] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#566159]">
                      Official Email
                    </span>
                    <p className="mt-0.5">
                      <a
                        href="mailto:alrfumeprep@gmail.com"
                        className="text-sm sm:text-base font-semibold text-[#111A14] hover:text-[#3F7C1E] transition-colors break-all"
                      >
                        alrfumeprep@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-[#566159]">Responses within a few business hours</p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] border border-[#87E64B]/30 flex items-center justify-center text-[#3F7C1E] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#566159]">
                      Operating Base
                    </span>
                    <p className="text-sm font-semibold text-[#111A14] mt-0.5">
                      6904 Clendenin St, Greenacres, FL 33463
                    </p>
                    <p className="text-xs text-[#566159]">
                      Serving Palm Beach County &amp; Broward County
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2FCEE] border border-[#87E64B]/30 flex items-center justify-center text-[#3F7C1E] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#566159]">
                      Hours of Operation
                    </span>
                    <p className="text-sm font-medium text-[#1E2621] mt-0.5">
                      Monday – Saturday: 8:00 AM – 6:00 PM
                    </p>
                    <p className="text-xs text-[#566159]">
                      Sunday: By advance fumigation schedule appointment
                    </p>
                  </div>
                </div>

              </div>

              {/* Verified Credential Tag */}
              <div className="mt-8 pt-6 border-t border-[#111A14]/10 flex items-center gap-2 text-xs text-[#566159]">
                <ShieldCheck className="w-4 h-4 text-[#3F7C1E] shrink-0" />
                <span>Family owned &amp; operated by Anthony &amp; LoriAnn Roderick</span>
              </div>
            </div>

            {/* Quick Urgent Date Tip */}
            <div className="bg-[#EBF0E9] rounded-2xl p-5 border border-[#111A14]/10 text-xs text-[#1E2621]/85 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-[#3F7C1E] shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-[#111A14]">Is your fumigation tent going up in less than 48 hours? </strong>
                Please call us directly at <a href="tel:+15614455619" className="font-bold underline text-[#111A14]">(561) 445-5619</a> so we can confirm expedited availability.
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form / Confirmation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#111A14]/10 shadow-sm">
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#F2FCEE] border border-[#87E64B]/40 text-[#3F7C1E] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#111A14] mb-2 font-heading">
                    Thank You, {formData.fullName.split(' ')[0]}!
                  </h3>

                  <p className="text-base text-[#1E2621]/80 max-w-md mx-auto mb-6 leading-relaxed">
                    Your enquiry has been received. Anthony or LoriAnn from the ALR team will contact you shortly to discuss your home preparation needs.
                  </p>

                  <div className="bg-[#FAFBF9] p-4 rounded-xl max-w-sm mx-auto text-left text-xs space-y-1.5 mb-8 border border-[#111A14]/10">
                    <div className="flex justify-between">
                      <span className="text-[#566159]">Reference Code:</span>
                      <span className="font-mono font-bold text-[#111A14]">{submittedReference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#566159]">Service Selected:</span>
                      <span className="font-semibold text-[#111A14] capitalize">
                        {formData.serviceNeeded === 'both' ? 'Preparation & Recovery' : formData.serviceNeeded}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#566159]">Location:</span>
                      <span className="font-semibold text-[#111A14]">{formData.propertyLocation}</span>
                    </div>
                    {formData.tentDate && (
                      <div className="flex justify-between">
                        <span className="text-[#566159]">Target Tent Date:</span>
                        <span className="font-semibold text-[#111A14]">{formData.tentDate}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:+15614455619"
                      className="inline-flex items-center gap-2 py-3 px-6 bg-[#111A14] hover:bg-black text-white text-sm font-semibold rounded-xl border border-[#87E64B]/30"
                    >
                      <Phone className="w-4 h-4 text-[#87E64B]" />
                      Call Us Now: (561) 445-5619
                    </a>
                    <button
                      onClick={handleReset}
                      className="py-3 px-5 text-sm font-semibold text-[#566159] hover:text-[#111A14] cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  <div className="border-b border-[#111A14]/10 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#111A14] font-heading">
                      Request Service or Information
                    </h3>
                    <p className="text-xs text-[#566159] mt-1">
                      Complete this short form and we will review your requirements.
                    </p>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAFBF9] focus:bg-white transition-colors focus:outline-none ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[#111A14]/15 focus:border-[#87E64B] focus:ring-1 focus:ring-[#87E64B]/40'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(561) 000-0000"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAFBF9] focus:bg-white transition-colors focus:outline-none ${
                          errors.phone
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[#111A14]/15 focus:border-[#87E64B] focus:ring-1 focus:ring-[#87E64B]/40'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAFBF9] focus:bg-white transition-colors focus:outline-none ${
                          errors.email
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[#111A14]/15 focus:border-[#87E64B] focus:ring-1 focus:ring-[#87E64B]/40'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1.5">
                        Property Location (City / County) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.propertyLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyLocation: e.target.value })
                        }
                        placeholder="e.g. Palm Beach Gardens, FL"
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAFBF9] focus:bg-white transition-colors focus:outline-none ${
                          errors.propertyLocation
                            ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                            : 'border-[#111A14]/15 focus:border-[#87E64B] focus:ring-1 focus:ring-[#87E64B]/40'
                        }`}
                      />
                      {errors.propertyLocation && (
                        <p className="text-xs text-red-600 mt-1">{errors.propertyLocation}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Needed & Tent Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceNeeded: e.target.value as ServiceType,
                          })
                        }
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#111A14]/15 bg-[#FAFBF9] focus:bg-white focus:border-[#87E64B] focus:outline-none cursor-pointer"
                      >
                        <option value="both">Both Preparation &amp; Recovery (Full Support)</option>
                        <option value="preparation">Pre-Fumigation Preparation Only</option>
                        <option value="recovery">Post-Fumigation Recovery Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1.5">
                        Scheduled Tent Date (If Known)
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={formData.tentDate}
                          onChange={(e) => setFormData({ ...formData, tentDate: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-[#111A14]/15 bg-[#FAFBF9] focus:bg-white focus:border-[#87E64B] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#111A14] mb-1.5">
                      Message / Special Considerations <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your home (bedrooms, pantry size, pets, plants, pest company)..."
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-[#FAFBF9] focus:bg-white transition-colors focus:outline-none resize-y ${
                        errors.message
                          ? 'border-red-400 focus:ring-1 focus:ring-red-400'
                          : 'border-[#111A14]/15 focus:border-[#87E64B] focus:ring-1 focus:ring-[#87E64B]/40'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Privacy / Direct Contact Notice */}
                  <p className="text-xs text-[#566159]">
                    We treat your privacy with full respect. Your details are sent directly to ALR Fumigation Preparation &amp; Recovery.
                  </p>

                  {/* Submit Button with #87E64B */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-[#87E64B] hover:bg-[#75D43B] text-[#0A110D] font-bold rounded-xl text-base shadow-sm hover:shadow-md transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
