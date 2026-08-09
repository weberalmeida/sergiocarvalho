import React from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Calendar, 
  Share2, 
  CheckCircle2, 
  Star, 
  TrendingUp, 
  Building, 
  Award, 
  MessageSquare,
  Instagram,
  Linkedin,
  Youtube,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { CONSULTANT_DATA } from "../data/mockData";
import { downloadVCard } from "../utils/vcard";

interface HeaderCardProps {
  onOpenBooking: () => void;
  onOpenShare: () => void;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ onOpenBooking, onOpenShare }) => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 bg-slate-950 text-slate-100 overflow-hidden border-b border-slate-800/80">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800/90 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
          
          {/* Top Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Avatar Column */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                <div className="relative w-60 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-950">
                  <img
                    src={CONSULTANT_DATA.avatarUrl}
                    alt={CONSULTANT_DATA.name}
                    className="w-full h-full object-cover object-center filter contrast-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Verified badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-amber-400 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{CONSULTANT_DATA.creci}</span>
                  </div>
                </div>
              </div>

              {/* Rating & Review badge */}
              <div className="mt-4 flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 rounded-full px-3 py-1.5 text-xs text-slate-300">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">{CONSULTANT_DATA.rating}</span>
                <span className="text-slate-400">({CONSULTANT_DATA.reviewCount} investidores atendidos)</span>
              </div>
            </div>

            {/* Profile Bio & Title Column */}
            <div className="lg:col-span-8 flex flex-col">
              
              {/* Badge line */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Mercado Imobiliário da Paraíba
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Atendimento VIP por Videoconferência
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {CONSULTANT_DATA.name}
              </h2>
              
              <p className="text-amber-400 font-semibold text-sm sm:text-base mt-1">
                {CONSULTANT_DATA.title}
              </p>

              <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                {CONSULTANT_DATA.bio}
              </p>

              {/* Key Achievements Grid */}
              <div className="grid grid-cols-3 gap-3 my-6 pt-4 border-t border-slate-800/80">
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center sm:text-left">
                  <p className="text-xs text-slate-400 font-medium">Volume Transacionado</p>
                  <p className="text-base sm:text-xl font-black text-amber-400 mt-0.5">{CONSULTANT_DATA.transactedVolume}</p>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center sm:text-left">
                  <p className="text-xs text-slate-400 font-medium">Experiência</p>
                  <p className="text-base sm:text-xl font-black text-emerald-400 mt-0.5">{CONSULTANT_DATA.yearsExperience} anos</p>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-center sm:text-left">
                  <p className="text-xs text-slate-400 font-medium">Foco em Rentabilidade</p>
                  <p className="text-base sm:text-xl font-black text-blue-400 mt-0.5">Airbnb & Planta</p>
                </div>
              </div>

              {/* Primary Call To Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/${CONSULTANT_DATA.whatsappNumber}?text=Ol%C3%A1%20S%C3%A9rgio!%20Achei%20seu%20cart%C3%A3o%20digital%20e%20gostaria%20de%20falar%20sobre%20investimentos%20em%20im%C3%B3veis%20na%20Para%C3%ADba.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar no WhatsApp Direto</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Consultoria</span>
                </button>

                <button
                  onClick={downloadVCard}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  title="Baixar arquivo vCard com os contatos no seu celular"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Salvar Contato</span>
                </button>

                <button
                  onClick={onOpenShare}
                  className="p-3 rounded-xl text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  title="Compartilhar Cartão com QR Code"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Direct Info Pills */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <a 
                  href={`tel:${CONSULTANT_DATA.whatsappNumber}`} 
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{CONSULTANT_DATA.phone}</span>
                </a>

                <a 
                  href={`mailto:${CONSULTANT_DATA.email}`} 
                  className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{CONSULTANT_DATA.email}</span>
                </a>

                <div className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">Tambaú, João Pessoa - PB</span>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <a href={CONSULTANT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-800 rounded-md hover:text-amber-400 transition-colors" title="Instagram">
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                  <a href={CONSULTANT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-800 rounded-md hover:text-amber-400 transition-colors" title="LinkedIn">
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a href={CONSULTANT_DATA.youtube} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-slate-800 rounded-md hover:text-amber-400 transition-colors" title="YouTube">
                    <Youtube className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
