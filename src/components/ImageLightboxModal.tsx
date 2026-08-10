import React from 'react';
import { PortfolioItem } from '../types';
import { X, MapPin, Calendar, Check, Send } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface ImageLightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectForSimilarQuote: (projectName: string) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  onClose,
  onSelectForSimilarQuote,
}) => {
  if (!item) return null;

  const handleWhatsAppSimilar = () => {
    const text = `Olá! Vi o projeto "${item.title}" (${item.location}) no portfólio da Cruz & Art Interiores e gostaria de solicitar uma proposta similar para o meu espaço.`;
    window.open(`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden relative shadow-2xl animate-scaleUp my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-white hover:bg-black rounded-full transition-colors"
          aria-label="Fechar galeria"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          {/* Image Column */}
          <div className="md:col-span-7 bg-black flex items-center justify-center min-h-[350px] md:min-h-[500px]">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="max-h-[600px] w-full object-contain"
            />
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-white">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[var(--color-secondary-container)] text-[var(--color-on-surface)] rounded-full text-[11px] font-bold uppercase tracking-wider">
                  {item.typeLabel}
                </span>
                {item.year && (
                  <span className="text-xs text-[var(--color-outline)] flex items-center gap-1">
                    <Calendar size={12} /> {item.year}
                  </span>
                )}
              </div>

              <h3 className="font-headline-md text-2xl text-[var(--color-on-surface)] mb-2 font-bold">
                {item.title}
              </h3>

              <p className="font-body-md text-sm text-[var(--color-on-surface)] font-medium flex items-center gap-1.5 mb-4">
                <MapPin size={16} className="text-[var(--color-secondary)]" />
                <span>{item.location}</span>
              </p>

              <p className="font-body-md text-sm text-[var(--color-on-surface-variant)] leading-relaxed mb-6">
                {item.description}
              </p>

              {item.features && item.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-3">
                    Elementos e Acabamentos:
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[var(--color-on-surface)]">
                        <Check size={14} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[var(--color-outline-variant)] space-y-2">
              <button
                onClick={handleWhatsAppSimilar}
                className="w-full py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-fixed-dim)] text-[var(--color-on-secondary)] font-button text-xs font-semibold rounded transition-colors flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>Solicitar Projeto Similar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
