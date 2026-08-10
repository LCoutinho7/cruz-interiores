import React, { useState } from 'react';
import { X, Calculator, ArrowRight, Check, Send } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Papel de Parede'
}) => {
  const [serviceType, setServiceType] = useState<string>(initialService);
  const [roomType, setRoomType] = useState<string>('Sala de Estar');
  const [areaSize, setAreaSize] = useState<number>(15);
  const [city, setCity] = useState<string>('Curitiba');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isCuritibaRegion = city.toLowerCase().includes('curitiba') || city.toLowerCase().includes('pr') || city.toLowerCase().includes('paraná');

    const message = `*SOLICITAÇÃO DE ORÇAMENTO — CRUZ & ART INTERIORES*
----------------------------------------
*Cliente:* ${name || 'Não informado'}
*Contato:* ${phone || 'Não informado'}
*Cidade/Estado:* ${city}
*Serviço Desejado:* ${serviceType}
*Ambiente:* ${roomType}
*Tamanho Estimado:* ~${areaSize} m²
*Atendimento:* ${isCuritibaRegion ? 'Instalação Técnica Presencial' : 'Envio de Material Personalizado'}
${notes ? `*Observações:* ${notes}` : ''}
----------------------------------------
Vim pelo simulador do site e gostaria de receber um orçamento detalhado.`;

    window.open(`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl animate-scaleUp my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[var(--color-outline)] hover:text-[var(--color-on-surface)] rounded-full hover:bg-[var(--color-surface-container-low)] transition-colors"
          aria-label="Fechar formulário"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-lg bg-[var(--color-secondary-container)] text-[var(--color-on-surface)]">
            <Calculator size={22} />
          </div>
          <div>
            <h3 className="font-headline-md text-2xl text-[var(--color-on-surface)] font-bold">
              Simular Orçamento Online
            </h3>
            <p className="text-xs text-[var(--color-on-surface-variant)]">
              Preencha os dados do seu ambiente para receber uma estimativa rápida via WhatsApp.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-2">
              1. Qual serviço você precisa?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                'Papel de Parede',
                'Adesivos Personalizados',
                'Sancas e Iluminação',
                'Drywall e Divisórias',
                'Espelhos sob Medida',
                'Persianas e Cortinas',
                'Marcenaria Completa'
              ].map((serv) => (
                <button
                  type="button"
                  key={serv}
                  onClick={() => setServiceType(serv)}
                  className={`p-3 rounded-lg text-xs font-semibold text-left transition-all border ${
                    serviceType === serv
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm'
                      : 'bg-[var(--color-surface)] text-[var(--color-on-surface-variant)] border-[var(--color-outline-variant)]/60 hover:border-[var(--color-secondary)]'
                  }`}
                >
                  {serv}
                </button>
              ))}
            </div>
          </div>

          {/* Room Type & Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-2">
                2. Tipo de Ambiente
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full p-3 rounded-lg border border-[var(--color-outline-variant)] text-sm bg-[var(--color-surface)] text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-secondary)]"
              >
                <option value="Sala de Estar">Sala de Estar</option>
                <option value="Quarto / Suíte">Quarto / Suíte</option>
                <option value="Cozinha / Gourmet">Cozinha / Gourmet</option>
                <option value="Escritório / Home Office">Escritório / Home Office</option>
                <option value="Comercial / Loja / Consultório">Comercial / Loja / Consultório</option>
                <option value="Banheiro / Lavabo">Banheiro / Lavabo</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-2">
                3. Área Aproximada (m²): {areaSize} m²
              </label>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
                className="w-full accent-[var(--color-secondary)] cursor-pointer mt-2"
              />
              <div className="flex justify-between text-[11px] text-[var(--color-outline)] mt-1">
                <span>5 m²</span>
                <span>50 m²</span>
                <span>100+ m²</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-2">
              4. Cidade e Estado
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Curitiba, PR ou São Paulo, SP"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-3 rounded-lg border border-[var(--color-outline-variant)] text-sm bg-[var(--color-surface)] text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-secondary)]"
            />
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="(41) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-lg border border-[var(--color-outline-variant)] text-sm bg-[var(--color-surface)] text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-secondary)]"
              />
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-[var(--color-on-surface)] uppercase tracking-wider mb-2">
              Observações ou dúvidas específicas (Opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Ex: Gostaria de papel de parede impermeável para área gourmet..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 rounded-lg border border-[var(--color-outline-variant)] text-sm bg-[var(--color-surface)] text-[var(--color-on-surface)] focus:outline-none focus:border-[var(--color-secondary)]"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="btn-draw w-full py-4 text-[var(--color-on-secondary)] font-button text-sm rounded font-semibold shadow-md"
            >
              <span className="flex items-center justify-center gap-2">
                <Send size={18} />
                <span>Gerar Proposta e Enviar no WhatsApp</span>
              </span>
            </button>
            <p className="text-[11px] text-center text-[var(--color-outline)] mt-2">
              Seus dados estão protegidos e serão utilizados apenas para este atendimento.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
