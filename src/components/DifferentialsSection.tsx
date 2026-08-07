import React from 'react';
import { Sliders, Clock, Images, Globe2 } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      icon: Sliders,
      title: 'Personalização real',
      description: 'Cada padrão de papel de parede, adesivo ou móvel é projetado sob medida para as dimensões e o estilo exato do seu espaço — nada de rolo genérico de prateleira.'
    },
    {
      icon: Clock,
      title: 'Experiência de 3 décadas',
      description: 'Há mais de 30 anos no mercado enfrentando e prevendo os imprevistos normais de obras, garantindo alinhamentos milimétricos e prazos respeitados.'
    },
    {
      icon: Images,
      title: 'Portfólio real e verificável',
      description: 'Todas as fotos do nosso portfólio são de casas, escritórios e empreendimentos reais executados por nossa equipe em Curitiba e pelo Brasil.'
    },
    {
      icon: Globe2,
      title: 'Atendimento em todo o Brasil',
      description: 'Mesmo se você não estiver na Região Metropolitana de Curitiba, é possível adquirir papéis de parede e adesivos exclusivos com entrega rápida via transportadora.'
    }
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 px-6 md:px-8 max-w-[1200px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
        <span className="font-label-caps text-xs text-[#1E56C8] uppercase tracking-widest block mb-3 font-semibold">
          Por que a Cruz Interiores?
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[#000820] mb-4 font-bold">
          O que muda quando você personaliza com quem tem 30 anos de estrada
        </h2>
        <p className="font-body-lg text-base md:text-lg text-[#44464e]">
          Compromisso com a estética de alto padrão e com a durabilidade que você usufrui por anos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gsap-stagger">
        {differentials.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-8 bg-white border border-[#E9ECEF] rounded-xl shadow-sm hover:border-[#1f57c9]/40 hover:shadow-md transition-all flex items-start gap-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#d9e2ff] text-[#0b1f45] flex items-center justify-center shrink-0 group-hover:bg-[#1f57c9] group-hover:text-white transition-colors">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="font-headline-md text-xl text-[#000820] mb-2 font-semibold">
                  {item.title}
                </h3>
                <p className="font-body-md text-sm md:text-base text-[#44464e] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
