import React, { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, PhoneCall } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/mockData';
import cruzArtIcon from '../assets/logo/cruz-art-icon.png';

interface HeaderProps {
  activeSection?: string;
  visible?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, visible = true }) => {
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
      `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent('Olá! Vim pelo site da Cruz & Art Interiores e gostaria de solicitar um orçamento.')}`,
      '_blank'
    );
  };

  return (
    <header
      id="top-nav"
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-[var(--color-surface)] border-b border-[var(--color-outline-variant)]/60 transition-all duration-500 ${
        isScrolled ? 'shadow-md py-3' : 'py-4'
      } ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src={cruzArtIcon}
            alt="Cruz & Art Interiores"
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg shrink-0"
          />
          <span className="flex flex-col">
            <span className="font-wordmark text-xl md:text-2xl text-[var(--color-on-surface)] transition-colors">
              CRUZ <span className="text-[var(--color-secondary)]">&</span> ART
            </span>
            <span className="text-[10px] font-semibold text-[var(--color-on-surface-variant)] tracking-widest uppercase -mt-1">
              30 Anos de Excelência
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('servicos')}
            className={`font-body-md text-base tracking-wide transition-colors ${
              activeSection === 'servicos'
                ? 'text-[var(--color-on-surface)] font-semibold border-b-2 border-[var(--color-secondary)] pb-1'
                : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
            }`}
          >
            Serviços
          </button>
          <button
            onClick={() => handleNavClick('projetos')}
            className={`font-body-md text-base tracking-wide transition-colors ${
              activeSection === 'projetos'
                ? 'text-[var(--color-on-surface)] font-semibold border-b-2 border-[var(--color-secondary)] pb-1'
                : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
            }`}
          >
            Projetos
          </button>
          <button
            onClick={() => handleNavClick('sobre')}
            className={`font-body-md text-base tracking-wide transition-colors ${
              activeSection === 'sobre'
                ? 'text-[var(--color-on-surface)] font-semibold border-b-2 border-[var(--color-secondary)] pb-1'
                : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)]'
            }`}
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavClick('contato')}
            className="font-body-md text-base tracking-wide text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors flex items-center gap-1.5"
          >
            Contato
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={openWhatsApp}
            className="btn-draw text-[var(--color-on-secondary)] rounded font-button text-sm font-semibold transform active:scale-95 shadow-sm"
          >
            <span className="px-6 py-3">Orçamento</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={openWhatsApp}
            className="btn-draw text-[var(--color-on-secondary)] rounded font-button text-xs font-semibold"
          >
            <span className="px-4 py-2">Orçamento</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--color-on-surface)] focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-surface-white)] border-b border-[var(--color-outline-variant)] px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
          <button
            onClick={() => handleNavClick('servicos')}
            className="block w-full text-left font-body-md text-lg text-[var(--color-on-surface)] py-2 border-b border-[var(--color-outline-variant)]"
          >
            Serviços
          </button>
          <button
            onClick={() => handleNavClick('projetos')}
            className="block w-full text-left font-body-md text-lg text-[var(--color-on-surface)] py-2 border-b border-[var(--color-outline-variant)]"
          >
            Projetos
          </button>
          <button
            onClick={() => handleNavClick('sobre')}
            className="block w-full text-left font-body-md text-lg text-[var(--color-on-surface)] py-2 border-b border-[var(--color-outline-variant)]"
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavClick('sac')}
            className="block w-full text-left font-body-md text-lg text-[var(--color-on-surface)] py-2 border-b border-[var(--color-outline-variant)]"
          >
            Fale Conosco
          </button>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp();
              }}
              className="w-full py-3 border border-[var(--color-secondary)] text-[var(--color-on-surface)] font-button text-sm rounded font-semibold flex items-center justify-center gap-2"
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
