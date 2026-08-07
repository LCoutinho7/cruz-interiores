export interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  category: 'Residencial' | 'Comercial' | 'Marcenaria' | 'Papel de Parede' | 'Espelhos & Sancas';
  typeLabel: string;
  imageUrl: string;
  aspectRatio: string;
  description: string;
  year?: string;
  features?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  scopeBadge: 'Curitiba (instalação) · Brasil (venda)' | 'Curitiba e região';
  badgeColor: 'blue' | 'navy';
  description: string;
  icon: string;
  details: string[];
  imageUrl?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  initial: string;
  rating?: number;
  projectTitle?: string;
  projectCategory?: string;
  projectImage?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface QuoteCalculationState {
  serviceType: string;
  roomType: string;
  areaSize: number;
  city: string;
  needsInstallation: boolean;
  notes: string;
  name: string;
  phone: string;
}
