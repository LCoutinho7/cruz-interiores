import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { Check, ArrowRight, Info, X } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[var(--color-surface)] border-t border-[var(--color-outline-variant)] px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
          <span className="font-label-caps text-xs text-[var(--color-on-surface-variant)] uppercase tracking-widest block mb-3 font-semibold">
            Nossos Serviços
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[var(--color-on-surface)] mb-4 font-bold">
            Soluções completas para transformar cada detalhe do seu espaço
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[var(--color-on-surface-variant)]">
            Compre online para todo o Brasil ou contrate a execução completa com instalação na Região Metropolitana de Curitiba.
          </p>
        </div>

        {/* Bento Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gsap-stagger">
          {SERVICES.map((service) => {
            const hasCuritiba = service.scopeBadge.includes('Curitiba');
            const hasBrasil = service.scopeBadge.includes('Brasil');

            return (
              <div
                key={service.id}
                className="group bg-white rounded-lg border border-[var(--color-outline-variant)] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Image Header */}
                <div className="h-48 md:h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
                    {hasCuritiba && (
                      <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-xs text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] shadow-sm font-semibold">
                        Curitiba (instalação)
                      </span>
                    )}
                    {hasBrasil && (
                      <span className="bg-[var(--color-primary)]/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-xs text-white border border-[var(--color-primary)] shadow-sm font-semibold">
                        Brasil (venda)
                      </span>
                    )}
                    {!hasBrasil && !service.scopeBadge.includes('instalação') && (
                      <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-xs text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] shadow-sm font-semibold">
                        Curitiba e região
                      </span>
                    )}
                  </div>
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-headline-md text-2xl text-[var(--color-on-surface)] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-sm text-[var(--color-on-surface-variant)] mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="flex-1 py-3 border-[1.5px] border-[var(--color-on-surface)] text-[var(--color-on-surface)] font-button text-xs font-semibold rounded hover:bg-[var(--color-on-surface)] hover:text-white transition-colors text-center cursor-pointer"
                    >
                      Solicitar orçamento
                    </button>
                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="p-3 text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] border border-[var(--color-outline-variant)] hover:border-[var(--color-secondary)] rounded transition-colors cursor-pointer"
                      title="Saber mais"
                      aria-label={`Ver detalhes de ${service.title}`}
                    >
                      <Info size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-lg w-full p-8 relative shadow-2xl animate-scaleUp">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 p-2 text-[var(--color-outline)] hover:text-[var(--color-on-surface)] rounded-full hover:bg-[var(--color-surface-container-low)]"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {selectedServiceModal.icon}
                </span>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-[var(--color-secondary-container)] text-[var(--color-on-surface)] rounded-full uppercase tracking-wider">
                {selectedServiceModal.scopeBadge}
              </span>
            </div>

            <h3 className="font-headline-md text-2xl text-[var(--color-on-surface)] mb-3">
              {selectedServiceModal.title}
            </h3>

            <p className="font-body-md text-sm text-[var(--color-on-surface-variant)] mb-6 leading-relaxed">
              {selectedServiceModal.description}
            </p>

            <h4 className="font-headline-md text-sm font-semibold text-[var(--color-on-surface)] mb-3 uppercase tracking-wider">
              Destaques e Vantagens Técnicas:
            </h4>

            <ul className="space-y-3 mb-8">
              {selectedServiceModal.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-on-surface)]">
                  <Check size={18} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                const serviceTitle = selectedServiceModal.title;
                setSelectedServiceModal(null);
                onSelectServiceForQuote(serviceTitle);
              }}
              className="btn-draw w-full text-[var(--color-on-secondary)] font-button text-sm rounded font-semibold"
            >
              <span className="gap-2 py-4">
                <span>Solicitar proposta para {selectedServiceModal.title}</span>
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
