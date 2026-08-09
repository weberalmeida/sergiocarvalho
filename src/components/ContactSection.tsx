import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Download, 
  Share2, 
  MessageSquare, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Check, 
  Copy, 
  X,
  QrCode,
  ShieldCheck,
  Building
} from "lucide-react";
import { CONSULTANT_DATA } from "../data/mockData";
import { downloadVCard } from "../utils/vcard";

interface ContactSectionProps {
  onOpenBooking: () => void;
  isShareOpen: boolean;
  onCloseShare: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBooking,
  isShareOpen,
  onCloseShare,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://consultoriaparaiba.com.br";

  const handleCopyShareLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="contato" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Phone className="w-4 h-4" />
            <span>Canais de Atendimento VIP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Entre em Contato Direto
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Atendimento ágil pelo WhatsApp, videochamada agendada ou presencialmente em nosso escritório em Tambaú.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* WhatsApp Card */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">WhatsApp Direto</h3>
              <p className="text-xs text-slate-400 mt-1">
                Atendimento prioritário para envio de tabelas, lâminas de investimento e vídeos de obras.
              </p>
              <p className="text-base font-extrabold text-emerald-400 mt-4">
                {CONSULTANT_DATA.phone}
              </p>
            </div>

            <a
              href={`https://wa.me/${CONSULTANT_DATA.whatsappNumber}?text=Ol%C3%A1%20S%C3%A9rgio!%20Achei%20seu%20cart%C3%A3o%20digital%20e%20gostaria%20de%20atendimento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 text-xs sm:text-sm transition-colors"
            >
              <span>Iniciar Conversa no WhatsApp</span>
            </a>
          </div>

          {/* Email & Phone Card */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">E-mail & Telefone</h3>
              <p className="text-xs text-slate-400 mt-1">
                Para envios formais de estudos de viabilidade financeira e propostas corporativas.
              </p>
              <div className="mt-4 space-y-1 text-xs">
                <p className="font-bold text-white truncate">{CONSULTANT_DATA.email}</p>
                <p className="text-amber-400 font-semibold">{CONSULTANT_DATA.creci}</p>
              </div>
            </div>

            <button
              onClick={downloadVCard}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm transition-colors"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Salvar Contato no Celular (.vcf)</span>
            </button>
          </div>

          {/* Office Address Card */}
          <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Escritório Presencial</h3>
              <p className="text-xs text-slate-400 mt-1">
                Av. Pres. Epitácio Pessoa, 4780 - Tambaú, João Pessoa - PB. Atendimento com agendamento prévio.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs sm:text-sm transition-colors"
            >
              <span>Agendar Horário Presencial/Vídeo</span>
            </button>
          </div>

        </div>

        {/* Share & QR Code Modal */}
        {isShareOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 text-slate-100 shadow-2xl relative">
              <button
                onClick={onCloseShare}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center">
                <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
                  <QrCode className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Compartilhar Cartão Digital</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Aproxime a câmera do smartphone para abrir o perfil profissional instantaneamente.
                </p>

                {/* Simulated QR Code Graphic */}
                <div className="my-6 bg-white p-4 rounded-2xl inline-block shadow-inner">
                  <svg className="w-44 h-44 mx-auto" viewBox="0 0 100 100">
                    <path fill="#0f172a" d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM35 5h10v10H35zM50 0h15v10H50zM35 20h10v15H35zM55 20h10v10H55zM0 35h15v10H0zM20 40h15v10H20zM0 55h10v10H0zM40 40h20v20H40zM70 35h10v10H70zM85 40h15v10H85zM65 55h15v15H65zM85 60h15v10H85zM35 70h10v10H35zM50 75h10v20H50zM35 85h10v15H35zM70 80h15v20H70zM85 85h15v15H85z"/>
                  </svg>
                  <span className="text-[10px] font-bold text-slate-800 block mt-1 tracking-wider uppercase">
                    Sérgio Carvalho • CRECI-PB 11.482-F
                  </span>
                </div>

                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-slate-300 truncate">
                    {currentUrl}
                  </span>
                  <button
                    onClick={handleCopyShareLink}
                    className="px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 flex-shrink-0 hover:bg-amber-300"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? "Copiado" : "Copiar Link"}</span>
                  </button>
                </div>

                <button
                  onClick={downloadVCard}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 text-xs border border-slate-700 transition-colors"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Baixar Arquivo vCard (.vcf)</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
