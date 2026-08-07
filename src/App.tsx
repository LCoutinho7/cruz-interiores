import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustBanner } from './components/TrustBanner';
import { TriageSection } from './components/TriageSection';
import { ProblemSection } from './components/ProblemSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { ServicesSection } from './components/ServicesSection';
import { TimelineSection } from './components/TimelineSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ExpectationsSection } from './components/ExpectationsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { MobileFab } from './components/MobileFab';
import { PortfolioItem } from './types';
import { useGsapScroll } from './hooks/useGsapScroll';

export default function App() {
  useGsapScroll();

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [initialServiceForModal, setInitialServiceForModal] = useState('Papel de Parede');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<PortfolioItem | null>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setInitialServiceForModal(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex flex-col font-sans selection:bg-[#1f57c9] selection:text-white">
      {/* Fixed Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <TrustBanner />
        <TriageSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <ProblemSection />
        <DifferentialsSection />
        <ServicesSection onSelectServiceForQuote={(service) => handleOpenQuoteModal(service)} />
        <TimelineSection />
        <PortfolioSection onOpenLightbox={(item) => setSelectedLightboxItem(item)} />
        <ExpectationsSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating Mobile WhatsApp Button */}
      <MobileFab />

      {/* Interactive Modals */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={initialServiceForModal}
      />

      <ImageLightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
        onSelectForSimilarQuote={() => {
          setSelectedLightboxItem(null);
          handleOpenQuoteModal('Marcenaria Completa');
        }}
      />
    </div>
  );
}
