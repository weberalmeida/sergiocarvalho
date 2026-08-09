import React, { useState, useEffect } from "react";
import { Phone, Calendar, Download, Share2, Sparkles, Building2, UserCheck } from "lucide-react";
import { CONSULTANT_DATA } from "../data/mockData";
import { downloadVCard } from "../utils/vcard";

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenShare }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl py-3"
          : "bg-slate-950/60 backdrop-blur-sm py-4 border-b border-slate-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand/Consultant info */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={CONSULTANT_DATA.avatarUrl}
              alt={CONSULTANT_DATA.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-amber-500/80 shadow-md"
              referrerPolicy="no-referrer"
            />
            <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-slate-900" title="Disponível para consultoria" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-slate-100 tracking-tight leading-none">
                {CONSULTANT_DATA.name}
              </h1>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {CONSULTANT_DATA.creci}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium truncate max-w-[200px] sm:max-w-xs mt-0.5">
              Investimentos Imobiliários PB
            </p>
          </div>
        </div>

        {/* Quick Nav / Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={downloadVCard}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 hover:text-white rounded-lg border border-slate-700/80 transition-colors"
            title="Baixar Cartão de Contato vCard"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>vCard</span>
          </button>

          <button
            onClick={onOpenShare}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700/80 transition-colors"
            title="Compartilhar Cartão / QR Code"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${CONSULTANT_DATA.whatsappNumber}?text=Ol%C3%A1%20S%C3%A9rgio,%20vi%20seu%20cart%C3%A3o%20digital%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20investimentos%20em%20im%C3%B3veis%20na%20Para%C3%ADba.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md shadow-amber-500/10 transition-all transform hover:scale-[1.02]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Agendar Consultoria</span>
            <span className="xs:hidden">Agendar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
