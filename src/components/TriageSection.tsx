import React from 'react';
import { Hammer, Truck, ArrowRight, Check } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface TriageSectionProps {
  onOpenQuoteModal: () => void;
}

export const TriageSection: React.FC<TriageSectionProps> = ({ onOpenQuoteModal }) => {
  const handleWhatsAppSelect = (type: string) => {
    const text = type === 'instalacao'
      ? 'Olá! Gostaria de informações sobre Projeto Completo com Instalação em Curitiba/Região.'
      : 'Olá! Gostaria de informações sobre Papel de Parede e Adesivo Sob Medida com Envio para o Brasil.';
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
        <span className="font-label-caps text-xs text-[var(--color-on-surface-variant)] uppercase tracking-widest block mb-3 font-semibold">
          Triagem de Atendimento
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[var(--color-on-surface)] mb-4 font-bold">
          Como você quer transformar seu ambiente?
        </h2>
        <p className="font-body-lg text-base md:text-lg text-[var(--color-on-surface-variant)]">
          A Cruz & Art Interiores atua de duas formas — escolha a modalidade ideal para o seu projeto e localidade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch gsap-stagger">
        {/* Card 1: Projeto Completo em Curitiba */}
        <div className="bg-white border-2 border-[var(--color-secondary)]/30 rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group">
          <div className="absolute top-4 right-4 bg-[var(--color-secondary-container)] text-[var(--color-on-surface)] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Curitiba & Região
          </div>

          <div>
            <div className="w-14 h-14 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center mb-6 shadow-sm">
              <Hammer size={28} />
            </div>

            <h3 className="font-headline-md text-2xl text-[var(--color-on-surface)] mb-3">
              Projeto completo, com instalação
            </h3>

            <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm md:text-base leading-relaxed mb-6">
              Papel de parede, sancas, drywall, espelhos, persianas e marcenaria fina — do projeto 3D até a montagem final com equipe própria em Curitiba e região metropolitana.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-on-surface)]">
                <Check size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Medição técnica gratuita no local</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-on-surface)]">
                <Check size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Apresentação de Projeto 3D realista</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-on-surface)]">
                <Check size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Instalação limpa, pontual e garantida</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[var(--color-outline-variant)] flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleWhatsAppSelect('instalacao')}
              className="btn-draw w-full text-[var(--color-on-secondary)] font-button text-xs font-semibold rounded"
            >
              <span className="gap-2 py-3.5">
                <span>Quero projeto completo</span>
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Card 2: Envio Nacional */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative group">
          <div className="absolute top-4 right-4 bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Todo o Brasil
          </div>

          <div>
            <div className="w-14 h-14 rounded-lg bg-[var(--color-secondary)] text-[var(--color-on-secondary)] flex items-center justify-center mb-6 shadow-sm">
              <Truck size={28} />
            </div>

            <h3 className="font-headline-md text-2xl text-[var(--color-on-surface)] mb-3">
              Papel de parede e adesivo sob medida
            </h3>

            <p className="font-body-md text-[var(--color-on-surface-variant)] text-sm md:text-base leading-relaxed mb-6">
              Personalizamos o padrão para a altura e largura exatas da sua parede. Produzimos em vinílico lavável premium e enviamos com kit e gabarito numerado de aplicação para qualquer estado.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-on-surface)]">
                <Check size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Ajuste de proporção da imagem sem cortes feios</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-on-surface)]">
                <Check size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Vinílico lavável, anti-mofo e de fácil limpeza</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[var(--color-on-surface)]">
                <Check size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>Envio rápido com código de rastreamento seguro</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-[var(--color-outline-variant)]">
            <button
              onClick={() => handleWhatsAppSelect('envio')}
              className="w-full py-3.5 border-2 border-[var(--color-secondary)] text-[var(--color-on-surface)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] font-button text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2"
            >
              <span>Quero comprar personalizado</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
