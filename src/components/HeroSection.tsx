import React from 'react';
import { COMPANY_CONTACT } from '../data/mockData';
import ScrollExpandMedia from './ui/scroll-expansion-hero';
import heroBackground from '../assets/images/hero-background.webp';
import heroMedia from '../assets/images/portfolio-residencia-alpha.webp';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onHeroExpandedChange?: (expanded: boolean) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal, onHeroExpandedChange }) => {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da Cruz Interiores e gostaria de tirar dúvidas e solicitar uma proposta.')}`,
      '_blank'
    );
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={heroMedia}
      bgImageSrc={heroBackground}
      title="Seu ambiente, personalizado por quem faz isso há 3 décadas"
      date="Mais de 30 anos transformando ambientes"
      scrollToExpand="Role para explorar nossos projetos"
      onExpandedChange={onHeroExpandedChange}
    >
      <div className="max-w-2xl mx-auto bg-[#f8f9fa]/95 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10">
        {/* Subheadline */}
        <p className="font-body-lg text-base md:text-lg text-[#44464e] text-pretty leading-relaxed mb-8">
          Papel de parede, adesivos, sancas, drywall, espelhos e persianas sob medida para o seu espaço — residencial ou comercial.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={openWhatsApp}
            className="bg-[#1E56C8] hover:bg-[#003fa4] text-white font-button text-sm px-8 py-4 rounded transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
            <span>Falar com um especialista no WhatsApp</span>
          </button>

          <button
            onClick={scrollToProjects}
            className="border-[1.5px] border-[#000820] text-[#000820] font-button text-sm px-8 py-4 rounded hover:bg-[#e1e3e4] transition-colors flex items-center justify-center cursor-pointer"
          >
            <span>Ver projetos realizados</span>
          </button>
        </div>

        {/* Microcopy */}
        <p className="font-label-caps text-xs text-[#75777f] flex items-center gap-1 mt-6">
          <span className="material-symbols-outlined text-[16px]">bolt</span>
          <span>Atendimento rápido, sem compromisso</span>
        </p>
      </div>
    </ScrollExpandMedia>
  );
};
