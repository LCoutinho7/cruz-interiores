import React, { useState } from 'react';
import { COMPANY_CONTACT } from '../data/mockData';
import { Phone, Mail, MapPin, Instagram, Shield, X } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[var(--color-primary)] text-white border-t border-white/10 pt-16 pb-12 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <span className="font-wordmark text-xl text-white block mb-1">
              CRUZ <span className="text-[var(--color-secondary)]">&</span> ART
            </span>
            <span className="text-[10px] font-semibold text-[var(--color-on-primary-container)] tracking-widest uppercase block mb-4">
              30 Anos de Excelência em Marcenaria e Design
            </span>
            <p className="font-body-md text-xs text-[var(--color-outline-variant)] leading-relaxed mb-6">
              Portfólio, serviços e execução completa de marcenaria de alto padrão, papéis de parede, sancas, drywall, espelhos e persianas sob medida.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-secondary)] transition-colors"
                aria-label="Instagram da Cruz & Art Interiores"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline-md text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--color-outline-variant)]">
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">
                  Nossos Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projetos')} className="hover:text-white transition-colors">
                  Projetos Realizados
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">
                  Sobre a Cruz & Art Interiores
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                  Dúvidas Frequentes (FAQ)
                </button>
              </li>
              <li>
                <button onClick={onOpenQuoteModal} className="text-[var(--color-secondary)] font-semibold hover:underline">
                  Simular Orçamento Online
                </button>
              </li>
            </ul>
          </div>

          {/* Services Scope */}
          <div>
            <h4 className="font-headline-md text-sm font-bold text-white uppercase tracking-wider mb-4">
              Modalidades
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--color-outline-variant)]">
              <li>• Papel de Parede e Adesivos (Envio Brasil)</li>
              <li>• Sancas e Iluminação Cênica (Curitiba/RM)</li>
              <li>• Divisórias e Forros Drywall (Curitiba/RM)</li>
              <li>• Espelhos Bisotados e Lapidados (Curitiba/RM)</li>
              <li>• Persianas e Cortinas Motorizadas (Curitiba/RM)</li>
              <li>• Marcenaria e Painéis Sob Medida (Curitiba/RM)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-headline-md text-sm font-bold text-white uppercase tracking-wider mb-4">
              Atendimento e Sede
            </h4>
            <ul className="space-y-3 text-xs text-[var(--color-outline-variant)]">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <span>{COMPANY_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[var(--color-secondary)] shrink-0" />
                <span>{COMPANY_CONTACT.phoneFormatted}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[var(--color-secondary)] shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </li>
              <li className="text-[11px] text-[var(--color-on-primary-container)] pt-2">
                Horário: {COMPANY_CONTACT.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[var(--color-on-primary-container)]">
          <p>© {new Date().getFullYear()} Cruz & Art Interiores. Todos os direitos reservados. 30 Anos de Tradição.</p>
          <button
            onClick={() => setPrivacyModalOpen(true)}
            className="hover:text-white transition-colors underline"
          >
            Política de Privacidade & Termos de Uso
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {privacyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[var(--color-surface-white)] text-[var(--color-on-surface)] rounded-xl max-w-xl w-full p-6 md:p-8 relative shadow-2xl max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[var(--color-outline)] hover:text-[var(--color-on-surface)] rounded-full hover:bg-[var(--color-surface-container-low)]"
            >
              <X size={20} />
            </button>

            <h3 className="font-headline-md text-xl font-bold text-[var(--color-on-surface)] mb-4">
              Política de Privacidade e Proteção de Dados
            </h3>

            <div className="space-y-3 text-xs text-[var(--color-on-surface-variant)] leading-relaxed">
              <p>
                A <strong>Cruz & Art Interiores</strong> valoriza a privacidade e a segurança dos dados pessoais dos nossos clientes, parceiros e visitantes.
              </p>
              <p>
                <strong>1. Coleta de Informações:</strong> As informações coletadas nos formulários de orçamento (nome, telefone, cidade e especificações do projeto) são utilizadas exclusivamente para elaboração e envio de propostas comerciais personalizadas.
              </p>
              <p>
                <strong>2. Compartilhamento:</strong> Não vendemos ou compartilhamos seus dados com terceiros não autorizados. Os dados para envio de papéis de parede/adesivos são compartilhados estritamente com as transportadoras parceiras para fins de logística.
              </p>
              <p>
                <strong>3. Direitos do Usuário:</strong> Você pode solicitar a atualização ou exclusão de suas informações a qualquer momento entrando em contato pelo e-mail <em>contato@cruzinteriores.com.br</em>.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
