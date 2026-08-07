import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, RotateCw, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Track tapped cards on touch devices
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 md:py-28 bg-[#0B1F45] text-white px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
          <span className="font-label-caps text-xs text-[#b3c5ff] uppercase tracking-widest block mb-3 font-semibold">
            Depoimentos & Casos Reais
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-white mb-4 font-bold">
            Quem já transformou o ambiente com a gente
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[#7687b3]">
            Histórias reais e os resultados práticos de quem confiou a transformação do seu espaço aos nossos 30 anos de tradição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gsap-stagger">
          {TESTIMONIALS.map((item) => {
            const isFlipped = !!flippedCards[item.id];
            const nameParts = item.author.trim().split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts.slice(1).join(' ');

            return (
              <div
                key={item.id}
                onClick={() => toggleFlip(item.id)}
                className="group relative h-[420px] w-full [perspective:1000px] cursor-pointer"
              >
                {/* 3D Inner Container */}
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* FRONT FACE */}
                  <div className="absolute inset-0 w-full h-full rounded-xl bg-[#000820] border border-[#5e8bff]/20 p-6 md:p-7 flex flex-col justify-between shadow-lg overflow-hidden [backface-visibility:hidden]">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="text-[#1E56C8] w-9 h-9 opacity-60 shrink-0" />
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7687b3] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                          <RotateCw size={12} className="text-[#1E56C8]" />
                          <span>Ver foto</span>
                        </span>
                      </div>

                      <p className="font-body-md text-sm md:text-base text-[#e1e3e4] leading-relaxed italic mb-4 line-clamp-5">
                        {item.quote}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1 mb-3 text-amber-400">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} size={15} className="fill-amber-400" />
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#1E56C8] text-white font-bold flex items-center justify-center text-sm shadow-md shrink-0">
                            {item.initial}
                          </div>
                          <div>
                            <strong className="block font-headline-md text-sm text-white leading-tight">
                              <span className="block">{firstName}</span>
                              {lastName && <span className="block">{lastName}</span>}
                            </strong>
                            <span className="text-xs text-[#7687b3]">{item.location}</span>
                          </div>
                        </div>

                        <span className="text-[11px] text-[#5e8bff] font-semibold tracking-wider uppercase group-hover:underline">
                          Girar card →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE */}
                  <div className="absolute inset-0 w-full h-full rounded-xl overflow-hidden border border-[#5e8bff]/40 shadow-2xl p-6 md:p-7 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between bg-[#0B1F45]">
                    {/* Background Project Image */}
                    {item.projectImage && (
                      <img
                        src={item.projectImage}
                        alt={item.projectTitle || 'Projeto Realizado'}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000820] via-[#000820]/80 to-black/40 z-0"></div>

                    {/* Top Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E56C8] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                        <Sparkles size={13} /> Resultado do Projeto
                      </span>
                      <span className="text-[10px] text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 uppercase tracking-widest font-semibold">
                        Garantia 30 Anos
                      </span>
                    </div>

                    {/* Bottom Details */}
                    <div className="relative z-10">
                      <span className="text-xs text-[#9bb3ff] font-bold uppercase tracking-widest block mb-1">
                        {item.projectCategory}
                      </span>
                      <h3 className="font-headline-md text-lg md:text-xl text-white font-bold mb-3 leading-snug">
                        {item.projectTitle}
                      </h3>

                      <div className="flex items-center gap-2 text-xs text-[#e1e3e4] pt-3 border-t border-white/20">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Obra concluída para <strong>{item.author}</strong> ({item.location})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

