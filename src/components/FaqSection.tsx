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
        <span className="font-label-caps text-xs text-[#1E56C8] uppercase tracking-widest block mb-3 font-semibold">
          Tire Suas Dúvidas
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[#000820] mb-4 font-bold">
          Dúvidas Frequentes
        </h2>
        <p className="font-body-lg text-base md:text-lg text-[#44464e]">
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
                  ? 'border-[#1f57c9] bg-white shadow-md'
                  : 'border-[#c5c6cf]/60 bg-white hover:border-[#1f57c9]/40'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className={isOpen ? 'text-[#1f57c9]' : 'text-[#75777f]'} />
                  <span className="font-headline-md text-base md:text-lg font-semibold text-[#000820]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#75777f] transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-[#1f57c9]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 border-t border-[#E9ECEF]/60">
                  <p className="font-body-md text-sm md:text-base text-[#44464e] leading-relaxed pt-4">
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
