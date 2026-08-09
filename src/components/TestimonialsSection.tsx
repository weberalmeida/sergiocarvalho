import React, { useState } from "react";
import { 
  Star, 
  Quote, 
  TrendingUp, 
  ChevronDown, 
  HelpCircle, 
  ShieldCheck, 
  Sparkles,
  MapPin,
  Calendar
} from "lucide-react";
import { TESTIMONIALS_DATA, FAQ_ITEMS } from "../data/mockData";

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Casos de Sucesso & Avaliações</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            O Que Dizem Nossos Clientes Investidores
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Depoimentos reais de executivos, médicos e empresários de todo o Brasil e do exterior que multiplicaram seu capital na Paraíba.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800/80 group-hover:text-amber-500/20 transition-colors pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>

                {/* Achieved ROI Pill */}
                <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{t.roiAchieved}</span>
                </div>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/80"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{t.name}</h3>
                  <p className="text-[11px] text-amber-400 font-medium">{t.occupation}</p>
                  <p className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{t.cityOrigin} • {t.investmentType}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Dúvidas Frequentes do Investidor</span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              Tudo o que você precisa saber antes de investir
            </h3>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-amber-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === idx && (
                  <div className="p-4 sm:p-5 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 bg-slate-950/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center pt-6 border-t border-slate-800">
            <p className="text-xs text-slate-400 mb-4">
              Ainda tem alguma dúvida específica sobre imposto, jurídica ou rentabilidade?
            </p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors text-xs sm:text-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Conversa com Sérgio Carvalho</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
