import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0b1f45] text-white relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8 text-center relative z-10 gsap-scale-up">
        <div className="w-12 h-12 rounded-full bg-white/10 text-[#b5c6f5] flex items-center justify-center mx-auto mb-6 border border-white/20">
          <AlertTriangle size={24} />
        </div>

        <h2 className="font-headline-lg-mobile md:font-headline-lg text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight">
          Decorar do jeito certo, sem o medo de errar
        </h2>

        <p className="font-body-lg text-base md:text-lg text-[#d9e2ff] leading-relaxed max-w-3xl mx-auto font-light">
          Reformar ou decorar um ambiente parece simples — até você precisar escolher o padrão certo, medir direito e confiar em quem vai executar. Um erro na escolha do material ou na instalação custa tempo, dinheiro e a estética que você idealizou. É exatamente por isso que trazemos a segurança de 30 anos de prática técnica.
        </p>
      </div>
    </section>
  );
};
