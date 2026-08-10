import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 px-6 md:px-8 max-w-[900px] mx-auto">
      <div className="text-center mb-16 gsap-reveal">
        <span className="font-label-caps text-xs text-[var(--color-on-surface-variant)] uppercase tracking-widest block mb-3 font-semibold">
          Tire Suas Dúvidas
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[var(--color-on-surface)] mb-4 font-bold">
          Dúvidas Frequentes
        </h2>
        <p className="font-body-lg text-base md:text-lg text-[var(--color-on-surface-variant)]">
          Respostas objetivas para os questionamentos mais comuns de nossos clientes.
        </p>
      </div>

      <div className="space-y-4 gsap-stagger">
        {FAQ_ITEMS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[var(--color-secondary)] bg-white shadow-md'
                  : 'border-[var(--color-outline-variant)]/60 bg-white hover:border-[var(--color-secondary)]/40'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className={isOpen ? 'text-[var(--color-secondary)]' : 'text-[var(--color-outline)]'} />
                  <span className="font-headline-md text-base md:text-lg font-semibold text-[var(--color-on-surface)]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[var(--color-outline)] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-[var(--color-secondary)]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 border-t border-[var(--color-outline-variant)]/60">
                  <p className="font-body-md text-sm md:text-base text-[var(--color-on-surface-variant)] leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
