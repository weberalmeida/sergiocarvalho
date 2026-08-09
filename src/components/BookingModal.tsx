import React, { useState } from "react";
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Video, 
  MessageSquare, 
  Download, 
  Mail, 
  ExternalLink,
  Sparkles,
  Copy,
  Check
} from "lucide-react";
import { BookingDetails } from "../types";
import { CONSULTANT_DATA } from "../data/mockData";
import { createGoogleCalendarUrl, downloadIcsFile } from "../utils/calendar";

interface BookingModalProps {
  booking: BookingDetails | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ booking, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"summary" | "email">("summary");

  if (!booking) return null;

  // Format WhatsApp message string
  const waText = encodeURIComponent(
    `Olá Sérgio! Agendei uma consultoria no seu Cartão Digital.\n\n` +
    `📅 Data: ${booking.date}\n` +
    `⏰ Horário: ${booking.time} hs\n` +
    `🎯 Objetivo: ${booking.objective}\n` +
    `💰 Orçamento: ${booking.budget}\n` +
    `💻 Plataforma: ${booking.platform}\n` +
    `🔗 Link: ${booking.meetingLink}\n\n` +
    `Gostaria de confirmar o envio do link por aqui também. Meu nome é ${booking.name}.`
  );

  const waUrl = `https://wa.me/${CONSULTANT_DATA.whatsappNumber}?text=${waText}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(booking.meetingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 border-b border-slate-800 text-center relative overflow-hidden">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-3 shadow-lg shadow-emerald-500/10">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Consultoria Agendada com Sucesso!
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Reunião reservada para <strong className="text-amber-400">{booking.name}</strong> com Sérgio Carvalho.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mt-6">
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex text-xs font-semibold">
              <button
                onClick={() => setActiveTab("summary")}
                className={`px-4 py-1.5 rounded-lg transition-all ${
                  activeTab === "summary"
                    ? "bg-amber-400 text-slate-950 font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Resumo do Agendamento
              </button>
              <button
                onClick={() => setActiveTab("email")}
                className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === "email"
                    ? "bg-amber-400 text-slate-950 font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Simulação E-mail</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {activeTab === "summary" ? (
            <div className="space-y-6">
              
              {/* Main Booking Details Card */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 space-y-4">
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Data:</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {booking.date}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Horário:</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {booking.time} hs
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Formato:</span>
                    <span className="text-sm font-bold text-emerald-400 flex items-center gap-1 mt-0.5 uppercase">
                      <Video className="w-3.5 h-3.5 text-emerald-400" />
                      {booking.platform}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <p><strong className="text-slate-400">Objetivo:</strong> {booking.objective}</p>
                  <p><strong className="text-slate-400">Faixa de Investimento:</strong> {booking.budget}</p>
                  <p><strong className="text-slate-400">E-mail:</strong> {booking.email}</p>
                  <p><strong className="text-slate-400">WhatsApp:</strong> {booking.phone}</p>
                </div>

                {/* Meeting Link Box */}
                <div className="bg-slate-900 p-3.5 rounded-xl border border-amber-500/30 flex items-center justify-between gap-2">
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                      Link da Sua Videoconferência:
                    </span>
                    <a
                      href={booking.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono font-bold text-white hover:underline truncate block mt-0.5"
                    >
                      {booking.meetingLink}
                    </a>
                  </div>

                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 flex items-center gap-1 border border-slate-700 flex-shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copiado!" : "Copiar"}</span>
                  </button>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Confirmar Diretamente pelo WhatsApp</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={createGoogleCalendarUrl(booking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <span>Adicionar ao Google Agenda</span>
                  </a>

                  <button
                    onClick={() => downloadIcsFile(booking)}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Baixar Arquivo .ICS</span>
                  </button>
                </div>
              </div>

            </div>
          ) : (
            /* Email Simulation View */
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-5 space-y-4 text-xs">
              <div className="pb-3 border-b border-slate-800 flex items-center justify-between text-slate-400">
                <div>
                  <p><strong className="text-slate-200">De:</strong> Sérgio Carvalho &lt;sergio@consultoriaparaiba.com.br&gt;</p>
                  <p><strong className="text-slate-200">Para:</strong> {booking.email}</p>
                  <p><strong className="text-slate-200">Assunto:</strong> Confirmação de Consultoria Imobiliária na Paraíba</p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Enviado
                </span>
              </div>

              <div className="space-y-3 text-slate-300 leading-relaxed font-sans">
                <p>Prezado(a) <strong>{booking.name}</strong>,</p>

                <p>
                  Sua reunião de consultoria sobre oportunidades de investimentos e alta valorização no mercado imobiliário da Paraíba foi confirmada com sucesso!
                </p>

                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1.5 font-mono text-[11px]">
                  <p>🗓️ <strong>Data:</strong> {booking.date}</p>
                  <p>⏰ <strong>Horário:</strong> {booking.time} hs (Horário de Brasília)</p>
                  <p>🎯 <strong>Objetivo:</strong> {booking.objective}</p>
                  <p>🔗 <strong>Link da Reunião:</strong> <a href={booking.meetingLink} className="text-amber-400 underline">{booking.meetingLink}</a></p>
                </div>

                <p>
                  Para garantir o melhor aproveitamento do nosso encontro, já preparei análises comparativas de rentabilidade e estudo de mercado dos lançamentos mais disputados de João Pessoa.
                </p>

                <p className="pt-2 text-amber-400 font-semibold">
                  Atenciosamente,<br />
                  Sérgio Carvalho | CRECI-PB 11.482-F
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
