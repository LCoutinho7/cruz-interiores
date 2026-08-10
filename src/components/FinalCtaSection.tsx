import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface FinalCtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuoteModal }) => {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de conversar com a equipe técnica da Cruz & Art Interiores sobre o meu projeto.')}`,
      '_blank'
    );
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[var(--color-primary)] text-white px-6 md:px-8 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto text-center relative z-10 gsap-scale-up">
        <span className="font-label-caps text-xs text-[var(--color-secondary)] uppercase tracking-widest block mb-4">
          Pronto para Transformar Seu Espaço?
        </span>

        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-5xl text-white mb-6 leading-tight">
          Sua ideia com acabamento profissional e a segurança de quem tem 30 anos de história.
        </h2>

        <p className="font-body-lg text-base md:text-xl text-[var(--color-secondary-container)] leading-relaxed max-w-2xl mx-auto mb-10">
          Converse com nossos especialistas sem compromisso. Avaliamos a sua planta, indicamos as melhores opções de materiais e apresentamos um orçamento transparente.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-fixed-dim)] text-[var(--color-on-secondary)] font-button text-sm font-semibold rounded transition-all shadow-lg shadow-[var(--color-secondary)]/30 flex items-center justify-center gap-3 hover:-translate-y-0.5"
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
            <span>Iniciar Atendimento no WhatsApp</span>
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-button text-sm font-semibold rounded transition-all flex items-center justify-center gap-2"
          >
            <span>Simular Orçamento Online</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Microcopy Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-xs text-[var(--color-on-primary-container)]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[var(--color-secondary)]" />
            <span>Garantia de até 5 Anos em Projetos</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[var(--color-secondary)]" />
            <span>Resposta Média em até 1 Hora Comercial</span>
          </div>
        </div>
      </div>
    </section>
  );
};
