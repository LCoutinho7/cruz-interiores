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
import { SacSection } from './components/SacSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { MobileFab } from './components/MobileFab';
import { PasswordGate } from './components/PasswordGate';
import { PortfolioItem } from './types';
import { useGsapScroll } from './hooks/useGsapScroll';

export default function App() {
  useGsapScroll();

  const [selectedLightboxItem, setSelectedLightboxItem] = useState<PortfolioItem | null>(null);
  const [isHeroExpanded, setIsHeroExpanded] = useState(false);

  return (
    <PasswordGate>
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-on-surface)] flex flex-col font-sans selection:bg-[var(--color-secondary)] selection:text-[var(--color-on-secondary)]">
      {/* Fixed Header — hidden until the hero intro has fully expanded */}
      <Header visible={isHeroExpanded} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        <HeroSection onHeroExpandedChange={setIsHeroExpanded} />
        <TrustBanner />
        <TriageSection />
        <ProblemSection />
        <DifferentialsSection />
        <ServicesSection />
        <TimelineSection />
        <PortfolioSection onOpenLightbox={(item) => setSelectedLightboxItem(item)} />
        <ExpectationsSection />
        <TestimonialsSection />
        <SacSection />
        <FinalCtaSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating Mobile WhatsApp Button */}
      <MobileFab />

      {/* Interactive Modals */}
      <ImageLightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
      />
    </div>
    </PasswordGate>
  );
}
