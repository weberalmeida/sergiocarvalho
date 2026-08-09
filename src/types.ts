export interface Consultant {
  name: string;
  title: string;
  creci: string;
  avatarUrl: string;
  yearsExperience: number;
  transactedVolume: string;
  rating: number;
  reviewCount: number;
  bio: string;
  phone: string;
  whatsappNumber: string; // e.g. "5583999998888"
  email: string;
  officeAddress: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface MarketMetric {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export interface Property {
  id: string;
  title: string;
  category: "Planta" | "Pronto" | "Lançamento" | "Condomínio Fechado";
  neighborhood: string;
  city: string;
  priceStarting: number;
  estimatedYield: string; // e.g. "12% a 15% a.a."
  estimatedAppreciation: string; // e.g. "+35% até a entrega"
  area: string; // e.g. "28m² a 65m²"
  bedrooms: string; // e.g. "Studio e 1 Quarto"
  image: string;
  description: string;
  highlights: string[];
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  cityOrigin: string; // e.g., "São Paulo - SP" or "Brasília - DF"
  occupation: string;
  quote: string;
  investmentType: string;
  roiAchieved: string;
  rating: number;
  date: string;
  avatar: string;
}

export interface BookingForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  objective: string;
  budget: string;
  platform: "google-meet" | "zoom" | "whatsapp";
  notes?: string;
}

export interface BookingDetails extends BookingForm {
  id: string;
  meetingLink: string;
  status: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}
