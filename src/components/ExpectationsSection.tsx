import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const ExpectationsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa] border-y border-[#E9ECEF] px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 gsap-reveal">
          <span className="font-label-caps text-xs text-[#1E56C8] uppercase tracking-widest block mb-3 font-semibold">
            Transparência & Alinhamento
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[#000820] mb-4 font-bold">
            Alinhamento de expectativas
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[#44464e]">
            Trabalhamos com total clareza para garantir que a Cruz Interiores seja a escolha perfeita para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch gsap-stagger">
          {/* Card: Para quem é */}
          <div className="bg-white border-2 border-emerald-500/30 rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>A Cruz Interiores é para você que:</span>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong className="block font-headline-md text-base text-[#000820]">Busca alta durabilidade e exclusividade</strong>
                    <span className="text-sm text-[#44464e]">Quer materiais de primeira linha e soluções que valorizem o seu imóvel por décadas.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong className="block font-headline-md text-base text-[#000820]">Valoriza 30 anos de experiência prática</strong>
                    <span className="text-sm text-[#44464e]">Entende que a bagagem técnica evita dores de cabeça e refações desnecessárias na obra.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong className="block font-headline-md text-base text-[#000820]">Exige atendimento direto com especialistas</strong>
                    <span className="text-sm text-[#44464e]">Prefere dialogar com quem entende de medição, encaixe, marcenaria e acabamentos.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <strong className="block font-headline-md text-base text-[#000820]">Deseja pontualidade e contrato formal</strong>
                    <span className="text-sm text-[#44464e]">Preza por prazos estabelecidos, nota fiscal e garantia documentada.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Card: Para quem não é */}
          <div className="bg-white border border-[#E9ECEF] rounded-xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-800 text-xs font-bold uppercase tracking-wider mb-6">
                <XCircle size={16} className="text-rose-600" />
                <span>A Cruz Interiores NÃO é indicada se você:</span>
              </div>

              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-rose-100 text-rose-700 shrink-0 mt-0.5">
                    <XCircle size={18} />
                  </div>
                  <div>
                    <strong className="block font-headline-md text-base text-[#000820]">Busca o menor preço a qualquer custo</strong>
                    <span className="text-sm text-[#44464e]">Não negociamos a qualidade dos nossos materiais ou a remuneração justa dos nossos artesãos.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-rose-100 text-rose-700 shrink-0 mt-0.5">
                    <XCircle size={18} />
                  </div>
                  <div>
                    <strong className="block font-headline-md text-base text-[#000820]">Prefere produtos genéricos descartáveis</strong>
                    <span className="text-sm text-[#44464e]">Nossas soluções são feitas sob medida para durar anos, não para soluções temporárias de baixa resistência.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded bg-rose-100 text-rose-700 shrink-0 mt-0.5">
                    <XCircle size={18} />
                  </div>
                  <div>
                    <strong className="block font-headline-md text-base text-[#000820]">Prefere contratações informais sem garantia</strong>
                    <span className="text-sm text-[#44464e]">Trabalhamos estritamente com normas técnicas, projetos homologados e termos formais de garantia.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
