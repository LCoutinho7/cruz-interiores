import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/mockData';
import { PortfolioItem } from '../types';
import { ArrowRight, Instagram, Eye, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioSectionProps {
  onOpenLightbox: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const categories = ['Todos', 'Residencial', 'Comercial', 'Papel de Parede', 'Espelhos & Sancas'];

  const filteredItems = activeFilter === 'Todos'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="projetos" className="py-20 md:py-28 px-6 md:px-8 max-w-[1200px] mx-auto">
      {/* Section Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto gsap-reveal">
        <span className="font-label-caps text-xs text-[#1E56C8] uppercase tracking-widest block mb-3">
          Galeria & Cases
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[#000820] mb-4">
          Projetos que já transformamos
        </h2>
        <p className="font-body-lg text-base md:text-lg text-[#44464e]">
          Explore nossa seleção de projetos recentes. Cada ambiente é pensado meticulosamente para aliar estética de alto padrão e funcionalidade impecável.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              activeFilter === cat
                ? 'bg-[#000820] text-white shadow-sm'
                : 'bg-white text-[#44464e] border border-[#E9ECEF] hover:border-[#1f57c9]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FLIP Animated Masonry Grid */}
      <motion.div
        layout
        className="masonry-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                layout: { type: 'spring', stiffness: 350, damping: 28 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.25 },
              }}
              onClick={() => onOpenLightbox(item)}
              className="masonry-item rounded-xl image-hover-zoom relative group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#E9ECEF] bg-white transition-all hover:shadow-xl overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-t-xl bg-[#f3f4f5]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={`w-full h-auto object-cover ${item.aspectRatio}`}
                  loading="lazy"
                />

                {/* Hover View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white/90 text-[#000820] font-button text-xs font-bold rounded-full flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye size={16} />
                    <span>Ver Detalhes do Projeto</span>
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="inline-block px-3 py-1 bg-[#e1e3e4] text-[#44464e] rounded-full font-label-caps text-[11px] uppercase tracking-wider">
                    {item.typeLabel}
                  </span>
                  {item.year && <span className="text-xs text-[#75777f]">{item.year}</span>}
                </div>

                <h3 className="font-headline-md text-xl text-[#000820] mb-1 font-semibold group-hover:text-[#1E56C8] transition-colors">
                  {item.title}
                </h3>

                <p className="font-body-md text-sm text-[#44464e] flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#1f57c9]" />
                  <span>{item.location}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Ver mais no Instagram Button */}
      <div className="mt-16 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#1f57c9] text-[#1f57c9] rounded font-button text-sm font-semibold hover:bg-[#1f57c9] hover:text-white transition-colors group"
        >
          <Instagram size={18} />
          <span>Ver mais no Instagram</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

