import React from 'react';
import { Award, CheckCircle2, MapPin, Star } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-6 h-6 text-[var(--color-secondary)]" />,
      value: '+30 Anos',
      badge: 'Desde 1994',
      label: 'De Mercado & Tradição',
      description: 'Três décadas de excelência e confiabilidade em projetos de interiores.',
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)]" />,
      value: '+1.500',
      badge: 'Projetos Entregues',
      label: 'Residenciais & Comerciais',
      description: 'Espaços transformados com acabamento impecável e alta precisão.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />,
      value: 'Atendimento',
      badge: 'Curitiba & Brasil',
      label: 'Obra Completa ou Envio',
      description: 'Instalação própria em Curitiba e Região + Envio rápido para todo o país.',
    },
    {
      icon: <Star className="w-6 h-6 text-amber-500 fill-amber-500" />,
      value: '4.9 / 5.0',
      badge: '★★★★★',
      label: 'Avaliação dos Clientes',
      description: 'Satisfação garantida em qualidade, prazo e suporte pós-venda.',
    },
  ];

  return (
    <section className="bg-[var(--color-primary)] text-white py-14 px-6 md:px-8 relative overflow-hidden border-y border-[var(--color-secondary)]/20">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-secondary)]/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-10 gsap-reveal">
          <span className="font-label-caps text-xs text-[var(--color-secondary)] uppercase tracking-widest block mb-2 font-semibold">
            Por que confiar na Cruz & Art Interiores
          </span>
          <h2 className="font-headline-md text-2xl md:text-3xl font-bold text-white tracking-tight">
            Compromisso com a sua satisfação em cada detalhe
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gsap-stagger">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[var(--color-secondary)]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(198,161,91,0.2)] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white/10 group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                    {React.cloneElement(item.icon, {
                      className: `w-6 h-6 transition-colors duration-300 ${
                        item.icon.props.className?.includes('amber')
                          ? item.icon.props.className
                          : 'text-[var(--color-secondary-fixed-dim)] group-hover:text-[var(--color-on-secondary)]'
                      }`,
                    })}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-[var(--color-secondary-fixed-dim)] uppercase bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-headline-md text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[var(--color-secondary-fixed-dim)] transition-colors">
                  {item.value}
                </h3>
                <p className="text-sm font-semibold text-[var(--color-secondary-fixed-dim)] mb-2 font-body-md">
                  {item.label}
                </p>
              </div>

              <p className="text-xs text-[var(--color-on-primary-container)] leading-relaxed pt-3 border-t border-white/10 mt-2 font-body-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

