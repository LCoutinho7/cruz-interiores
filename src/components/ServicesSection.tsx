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
    <section id="servicos" className="py-20 md:py-28 bg-[#f8f9fa] border-t border-[#E9ECEF] px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
          <span className="font-label-caps text-xs text-[#1E56C8] uppercase tracking-widest block mb-3 font-semibold">
            Nossos Serviços
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[#000820] mb-4 font-bold">
            Soluções completas para transformar cada detalhe do seu espaço
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[#44464e]">
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
                className="group bg-white rounded-lg border border-[#E9ECEF] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Image Header */}
                <div className="h-48 md:h-64 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 flex gap-2 flex-wrap">
                    {hasCuritiba && (
                      <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-xs text-[#000820] border border-[#c5c6cf] shadow-sm font-semibold">
                        Curitiba (instalação)
                      </span>
                    )}
                    {hasBrasil && (
                      <span className="bg-[#000820]/90 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-xs text-white border border-[#000820] shadow-sm font-semibold">
                        Brasil (venda)
                      </span>
                    )}
                    {!hasBrasil && !service.scopeBadge.includes('instalação') && (
                      <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full font-label-caps text-xs text-[#000820] border border-[#c5c6cf] shadow-sm font-semibold">
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
                  <h3 className="font-headline-md text-2xl text-[#000820] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-sm text-[#44464e] mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="flex-1 py-3 border-[1.5px] border-[#000820] text-[#000820] font-button text-xs font-semibold rounded hover:bg-[#000820] hover:text-white transition-colors text-center cursor-pointer"
                    >
                      Solicitar orçamento
                    </button>
                    <button
                      onClick={() => setSelectedServiceModal(service)}
                      className="p-3 text-[#44464e] hover:text-[#1E56C8] border border-[#c5c6cf] hover:border-[#1E56C8] rounded transition-colors cursor-pointer"
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
              className="absolute top-4 right-4 p-2 text-[#75777f] hover:text-[#000820] rounded-full hover:bg-[#f3f4f5]"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0b1f45] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 0" }}>
                  {selectedServiceModal.icon}
                </span>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-[#d9e2ff] text-[#001849] rounded-full uppercase tracking-wider">
                {selectedServiceModal.scopeBadge}
              </span>
            </div>

            <h3 className="font-headline-md text-2xl text-[#000820] mb-3">
              {selectedServiceModal.title}
            </h3>

            <p className="font-body-md text-sm text-[#44464e] mb-6 leading-relaxed">
              {selectedServiceModal.description}
            </p>

            <h4 className="font-headline-md text-sm font-semibold text-[#000820] mb-3 uppercase tracking-wider">
              Destaques e Vantagens Técnicas:
            </h4>

            <ul className="space-y-3 mb-8">
              {selectedServiceModal.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#191c1d]">
                  <Check size={18} className="text-[#1f57c9] shrink-0 mt-0.5" />
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
              className="w-full py-4 bg-[#1f57c9] hover:bg-[#1E56C8] text-white font-button text-sm rounded font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Solicitar proposta para {selectedServiceModal.title}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
