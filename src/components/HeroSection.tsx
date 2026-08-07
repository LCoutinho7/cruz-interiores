import React from 'react';
import { COMPANY_CONTACT } from '../data/mockData';
import heroBackground from '../assets/images/hero-background.webp';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
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
    <div className="flex-grow flex items-center relative min-h-[calc(100vh-88px)] pt-[88px] md:pt-0 overflow-hidden">
      {/* Full Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Projeto de interiores de alto padrão"
          className="object-cover w-full h-full"
          src={heroBackground}
          fetchPriority="high"
          decoding="async"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0B1F45]/60"></div>
      </div>

      <section className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 py-16 md:py-24 flex flex-col justify-center gsap-scale-up">
        {/* Content Container */}
        <div className="max-w-2xl bg-[#f8f9fa]/95 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-white/10">
          {/* Eyebrow */}
          <span className="font-label-caps text-xs text-[#1f57c9] tracking-widest uppercase mb-4 block font-semibold">
            Mais de 30 anos transformando ambientes
          </span>

          {/* Headline */}
          <h1 className="font-headline-lg-mobile text-3xl md:font-display-lg md:text-5xl lg:text-[56px] text-[#000820] text-balance mb-6 font-bold leading-tight">
            Seu ambiente, personalizado por quem faz isso há 3 décadas
          </h1>

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
      </section>
    </div>
  );
};

