import React, { useEffect, useRef, useState } from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import timelineBriefing from '../assets/images/timeline-briefing.webp';
import timelineProducao from '../assets/images/timeline-producao.webp';

export const TimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start activation when container enters bottom 75% of viewport
      // Reach 100% when container top reaches upper 25% of viewport
      const startPoint = windowHeight * 0.75;
      const endPoint = windowHeight * 0.25;

      const totalDistance = startPoint - endPoint;
      const currentPos = startPoint - rect.top;

      let progress = currentPos / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      const totalSteps = PROCESS_STEPS.length;
      const active = Math.min(
        totalSteps - 1,
        Math.floor(progress * totalSteps)
      );
      setActiveIndex(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setScrollProgress(index / (PROCESS_STEPS.length - 1));
  };

  return (
    <section className="py-20 md:py-28 px-6 md:px-8 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
        <span className="font-label-caps text-xs text-[#1E56C8] uppercase tracking-widest block mb-3 font-semibold">
          Metodologia de Execução
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[#000820] mb-4 font-bold">
          Do primeiro contato ao ambiente pronto
        </h2>
        <p className="font-body-lg text-base md:text-lg text-[#44464e]">
          Um processo estruturado e transparente, desenhado para reduzir incertezas e garantir excelência em cada detalhe do seu projeto de interiores.
        </p>
      </div>

      {/* Horizontal / Vertical Interactive Timeline */}
      <div ref={containerRef} className="relative w-full py-4 mb-20">
        {/* Desktop Connector Track & Progress Line */}
        <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[2px] bg-[#0b1f45]/15 -translate-y-1/2 z-0">
          <div
            className="h-full bg-[#1E56C8] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(30,86,200,0.5)]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Mobile Connector Track & Progress Line */}
        <div className="md:hidden absolute left-6 top-6 bottom-12 w-[2px] bg-[#0b1f45]/15 -translate-x-1/2 z-0">
          <div
            className="w-full bg-[#1E56C8] transition-all duration-300 ease-out shadow-[0_0_8px_rgba(30,86,200,0.5)]"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col md:flex-row justify-between relative z-10 space-y-10 md:space-y-0">
          {PROCESS_STEPS.map((item, index) => {
            const isCompleted = index <= activeIndex || scrollProgress >= (index / (PROCESS_STEPS.length - 1));
            const isCurrent = index === activeIndex;

            return (
              <div
                key={index}
                onClick={() => handleStepClick(index)}
                className="flex flex-row md:flex-col items-start md:items-center relative group w-full md:w-1/5 px-2 cursor-pointer transition-all"
              >
                {/* Step Circle Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center z-10 mr-6 md:mr-0 md:mb-6 transition-all duration-500 shrink-0 ${
                    isCompleted
                      ? 'bg-[#1E56C8] text-white border-2 border-[#1E56C8] scale-110 shadow-lg shadow-[#1E56C8]/35'
                      : 'bg-white text-[#0b1f45] border-2 border-[#0b1f45]/30 group-hover:border-[#1E56C8] group-hover:text-[#1E56C8]'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ fontVariationSettings: isCompleted ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {item.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 md:text-center">
                  <span
                    className={`font-label-caps text-[11px] block mb-1 uppercase tracking-widest transition-colors duration-300 ${
                      isCompleted ? 'text-[#1E56C8] font-bold' : 'text-[#75777f]'
                    }`}
                  >
                    {item.step}
                  </span>
                  <h3
                    className={`font-headline-md text-lg md:text-xl mb-2 font-semibold transition-colors duration-300 ${
                      isCurrent || isCompleted ? 'text-[#000820]' : 'text-[#44464e]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="font-body-md text-xs md:text-sm text-[#44464e] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Supportive Imagery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gsap-stagger">
        <div className="group relative rounded-xl overflow-hidden shadow-sm border border-[#E9ECEF] h-80 bg-white">
          <img
            src={timelineBriefing}
            alt="Designer e arquiteto revisando projeto executivo"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#1f57c9] rounded mb-2 inline-block">
                Etapa de Planejamento
              </span>
              <p className="font-headline-md text-lg text-white font-semibold">Briefing e alinhamento milimétrico de projeto</p>
            </div>
          </div>
        </div>

        <div className="group relative rounded-xl overflow-hidden shadow-sm border border-[#E9ECEF] h-80 bg-white">
          <img
            src={timelineProducao}
            alt="Ambiente finalizado com móveis e marcenaria de alto padrão"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 bg-emerald-600 rounded mb-2 inline-block">
                Entrega Concluída
              </span>
              <p className="font-headline-md text-lg text-white font-semibold">Instalação impecável no ambiente do cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

