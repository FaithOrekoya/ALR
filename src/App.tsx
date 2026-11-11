import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { InteractiveChecklist } from './components/InteractiveChecklist';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseALR } from './components/WhyChooseALR';
import { AboutBusiness } from './components/AboutBusiness';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ServiceType } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<ServiceType>('both');
  const [modalNotes, setModalNotes] = useState('');

  const [contactInitialService, setContactInitialService] = useState<ServiceType>('both');
  const [contactInitialMessage, setContactInitialMessage] = useState('');

  const handleOpenModal = (service: ServiceType = 'both', notes: string = '') => {
    setModalService(service);
    setModalNotes(notes);
    setModalOpen(true);
  };

  const scrollToContact = (service?: ServiceType, notes?: string) => {
    if (service) setContactInitialService(service);
    if (notes) setContactInitialMessage(notes);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallTeam = () => {
    window.location.href = 'tel:+15614455619';
  };

  return (
    <div className="min-h-screen bg-[#FAFBF9] text-[#1E2621] flex flex-col font-sans selection:bg-[#87E64B]/30 selection:text-[#0A110D]">
      {/* 1. Header */}
      <Header onRequestService={() => handleOpenModal('both')} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onRequestService={() => handleOpenModal('both')}
          onCallTeam={handleCallTeam}
        />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Introduction Section */}
        <Introduction onDiscoverApproach={scrollToServices} />

        {/* 5. Services Section */}
        <Services
          onEnquireService={(serviceType) => {
            scrollToContact(serviceType);
          }}
        />

        {/* 6. Interactive Checklist & Estimator */}
        <InteractiveChecklist
          onApplyToChecklist={(serviceType, notes) => {
            scrollToContact(serviceType, notes);
          }}
        />

        {/* 7. How It Works */}
        <HowItWorks onRequestService={() => handleOpenModal('both')} />

        {/* 8. Why Choose ALR */}
        <WhyChooseALR />

        {/* 9. About The Business */}
        <AboutBusiness />

        {/* 10. Testimonials */}
        <Testimonials onRequestService={() => handleOpenModal('both')} />

        {/* 11. Final Call To Action */}
        <FinalCTA
          onRequestService={() => handleOpenModal('both')}
          onCallTeam={handleCallTeam}
        />

        {/* 12. Contact Section */}
        <ContactSection
          initialService={contactInitialService}
          initialMessage={contactInitialMessage}
        />
      </main>

      {/* 13. Footer */}
      <Footer onRequestService={() => handleOpenModal('both')} />

      {/* Interactive Service Request Modal */}
      <ServiceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={modalService}
        defaultNotes={modalNotes}
      />
    </div>
  );
}
