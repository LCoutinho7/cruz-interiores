import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da Cruz Interiores e gostaria de solicitar um orçamento.')}`,
      '_blank'
    );
  };

  return (
    <header
      id="top-nav"
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-[#f8f9fa] border-b border-[#c5c6cf]/60 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-3' : 'py-4'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col group cursor-pointer"
        >
          <span className="font-headline-md text-2xl md:text-2xl font-bold text-[#000820] tracking-tight group-hover:text-[#1E56C8] transition-colors">
            Cruz Interiores
          </span>
          <span className="text-[10px] font-semibold text-[#44464e] tracking-widest uppercase -mt-1">
            30 Anos de Excelência
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('servicos')}
            className={`font-body-md text-base tracking-wide transition-colors ${
              activeSection === 'servicos'
                ? 'text-[#1f57c9] font-semibold border-b-2 border-[#1f57c9] pb-1'
                : 'text-[#44464e] hover:text-[#1E56C8]'
            }`}
          >
            Serviços
          </button>
          <button
            onClick={() => handleNavClick('projetos')}
            className={`font-body-md text-base tracking-wide transition-colors ${
              activeSection === 'projetos'
                ? 'text-[#1f57c9] font-semibold border-b-2 border-[#1f57c9] pb-1'
                : 'text-[#44464e] hover:text-[#1E56C8]'
            }`}
          >
            Projetos
          </button>
          <button
            onClick={() => handleNavClick('sobre')}
            className={`font-body-md text-base tracking-wide transition-colors ${
              activeSection === 'sobre'
                ? 'text-[#1f57c9] font-semibold border-b-2 border-[#1f57c9] pb-1'
                : 'text-[#44464e] hover:text-[#1E56C8]'
            }`}
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavClick('contato')}
            className="font-body-md text-base tracking-wide text-[#44464e] hover:text-[#1E56C8] transition-colors flex items-center gap-1.5"
          >
            Contato
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 bg-[#1f57c9] text-white rounded font-button text-sm font-semibold hover:bg-[#1E56C8] transition-all transform active:scale-95 shadow-sm"
          >
            Orçamento
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="px-4 py-2 bg-[#1f57c9] text-white rounded font-button text-xs font-semibold"
          >
            Orçamento
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#000820] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#c5c6cf] px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
          <button
            onClick={() => handleNavClick('servicos')}
            className="block w-full text-left font-body-md text-lg text-[#191c1d] py-2 border-b border-[#E9ECEF]"
          >
            Serviços
          </button>
          <button
            onClick={() => handleNavClick('projetos')}
            className="block w-full text-left font-body-md text-lg text-[#191c1d] py-2 border-b border-[#E9ECEF]"
          >
            Projetos
          </button>
          <button
            onClick={() => handleNavClick('sobre')}
            className="block w-full text-left font-body-md text-lg text-[#191c1d] py-2 border-b border-[#E9ECEF]"
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left font-body-md text-lg text-[#191c1d] py-2 border-b border-[#E9ECEF]"
          >
            Dúvidas Frequentes
          </button>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-[#1f57c9] text-white font-button text-sm rounded font-semibold text-center"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={openWhatsApp}
              className="w-full py-3 border border-[#1f57c9] text-[#1f57c9] font-button text-sm rounded font-semibold flex items-center justify-center gap-2"
            >
              <PhoneCall size={16} />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
