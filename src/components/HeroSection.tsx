import React from 'react';
import ScrollExpandMedia from './ui/scroll-expansion-hero';
import heroBackground from '../assets/images/hero-background.webp';
import heroVideo from '../assets/videos/hero-banner.mp4';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onHeroExpandedChange?: (expanded: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onHeroExpandedChange }) => {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={heroVideo}
      bgImageSrc={heroBackground}
      title="Ambientes com identidade"
      date="Mais de 30 anos transformando ambientes"
      scrollToExpand="Role para explorar nossos projetos"
      onExpandedChange={onHeroExpandedChange}
    />
  );
};
