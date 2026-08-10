import React, { useState } from 'react';
import { Send, LifeBuoy } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_CONTACT } from '../data/mockData';

export const SacSection: React.FC = () => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*DÚVIDA — CRUZ & ART INTERIORES*
----------------------------------------
*Nome:* ${name}
*Dúvida:* ${question}
----------------------------------------
Enviado pelo formulário de atendimento do site.`;

    window.open(`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setName('');
    setQuestion('');
  };

  return (
    <section id="sac" className="py-20 md:py-28 px-6 md:px-8 max-w-[900px] mx-auto">
      <div className="text-center mb-16 gsap-reveal">
        <span className="font-label-caps text-xs text-[var(--color-on-surface-variant)] uppercase tracking-widest block mb-3 font-semibold">
          Central de Atendimento
        </span>
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-3xl md:text-4xl text-[var(--color-on-surface)] mb-4 font-bold">
          Fale direto com a nossa equipe
        </h2>
        <p className="font-body-lg text-base md:text-lg text-[var(--color-on-surface-variant)]">
          Escreva sua dúvida abaixo — ao enviar, você é redirecionado ao WhatsApp com a mensagem já pronta.
        </p>
      </div>

      <div className="bg-white border border-[var(--color-outline-variant)]/60 rounded-xl p-8 md:p-10 shadow-sm gsap-reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-lg bg-[var(--color-secondary-container)] text-[var(--color-on-surface)]">
            <LifeBuoy size={22} />
          </div>
          <p className="font-body-md text-sm text-[var(--color-on-surface-variant)]">
            Respondemos pessoalmente, sem robôs — geralmente em até 1 hora comercial.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-3">
              Dúvidas comuns (opcional — toque para preencher)
            </label>
            <div className="flex flex-wrap gap-2">
              {FAQ_ITEMS.slice(0, 6).map((faq) => (
                <button
                  type="button"
                  key={faq.id}
                  onClick={() => setQuestion(faq.question)}
                  className={`px-3 py-2 rounded-full text-xs font-medium border text-left transition-colors ${
                    question === faq.question
                      ? 'border-[var(--color-secondary)] bg-[var(--color-secondary-container)] text-[var(--color-on-surface)]'
                      : 'border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] hover:border-[var(--color-secondary)] hover:text-[var(--color-on-surface)]'
                  }`}
                >
                  {faq.question}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-2">
              Seu Nome
            </label>
            <input
              type="text"
              required
              placeholder="Como podemos te chamar?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg border border-[var(--color-outline-variant)] text-sm bg-[var(--color-surface)] text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-secondary)]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-2">
              Sua Dúvida
            </label>
            <textarea
              required
              rows={4}
              placeholder="Escreva aqui sua dúvida sobre prazos, materiais, orçamento, garantia..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full p-3 rounded-lg border border-[var(--color-outline-variant)] text-sm bg-[var(--color-surface)] text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-secondary)]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="btn-draw w-full text-[var(--color-on-secondary)] font-button text-sm rounded font-semibold shadow-md"
            >
              <span className="gap-2 py-4">
                <Send size={18} />
                <span>Enviar Dúvida pelo WhatsApp</span>
              </span>
            </button>
            <p className="text-[11px] text-center text-[var(--color-outline)] mt-2">
              Nome e dúvida são enviados prontos para a conversa no WhatsApp — nada é publicado no site.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
