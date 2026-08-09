import React, { useState } from "react";
import { 
  Building2, 
  MapPin, 
  TrendingUp, 
  DollarSign, 
  CheckCircle, 
  Sparkles, 
  ArrowUpRight, 
  Eye, 
  MessageSquare,
  X,
  Filter
} from "lucide-react";
import { PROPERTIES_DATA, CONSULTANT_DATA } from "../data/mockData";
import { Property } from "../types";

interface PropertiesSectionProps {
  onOpenBooking: () => void;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeModalProperty, setActiveModalProperty] = useState<Property | null>(null);

  const categories = ["Todos", "Lançamento", "Planta", "Pronto"];

  const filteredProperties = selectedCategory === "Todos"
    ? PROPERTIES_DATA
    : PROPERTIES_DATA.filter((p) => p.category === selectedCategory);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="oportunidades" className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-3">
              <Building2 className="w-4 h-4" />
              <span>Portfólio de Alta Rentabilidade</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Oportunidades Curadas na Paraíba
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Empreendimentos selecionados por alta liquidez, localização nobre na orla e gestão profissional de hospedagem por temporada.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl group flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 shadow-lg uppercase">
                    {prop.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-slate-200 border border-slate-700 backdrop-blur-md">
                    {prop.neighborhood}
                  </span>
                </div>

                {/* Yield Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold">
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-lg backdrop-blur-md flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    Yield: {prop.estimatedYield}
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-lg backdrop-blur-md">
                    {prop.estimatedAppreciation}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{prop.neighborhood}, {prop.city} • {prop.area} ({prop.bedrooms})</span>
                  </p>

                  <p className="text-xs text-slate-300 mt-3 line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                    {prop.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 truncate">
                        <CheckCircle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Pricing & CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-slate-400 block">
                      A partir de:
                    </span>
                    <span className="text-lg font-black text-amber-400">
                      {formatCurrency(prop.priceStarting)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveModalProperty(prop)}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Detalhes</span>
                    </button>

                    <a
                      href={`https://wa.me/${CONSULTANT_DATA.whatsappNumber}?text=Ol%C3%A1%20S%C3%A9rgio!%20Gostaria%20de%20receber%20a%20tabela%20e%20proje%C3%A7%C3%A3o%20de%20rentabilidade%20do%20${encodeURIComponent(prop.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Property Modal */}
        {activeModalProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-slate-100 p-6 sm:p-8">
              <button
                onClick={() => setActiveModalProperty(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                <img
                  src={activeModalProperty.image}
                  alt={activeModalProperty.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
                    {activeModalProperty.category}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {activeModalProperty.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-2 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Valor de Entrada/A partir de:</span>
                    <span className="text-lg font-black text-amber-400">{formatCurrency(activeModalProperty.priceStarting)}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Rentabilidade Estimada:</span>
                    <span className="text-lg font-black text-emerald-400">{activeModalProperty.estimatedYield}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-1">Sobre o Empreendimento:</h4>
                  <p className="text-slate-300 leading-relaxed">{activeModalProperty.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2">Destaques & Diferenciais:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                    {activeModalProperty.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-500/10 p-3.5 rounded-xl border border-amber-500/20 text-xs text-amber-300">
                  <strong>Perfil do Investidor:</strong> {activeModalProperty.idealFor}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${CONSULTANT_DATA.whatsappNumber}?text=Ol%C3%A1%20S%C3%A9rgio!%20Quero%20receber%20a%20apresenta%C3%A7%C3%A3o%20e%20tabela%20completa%20do%20${encodeURIComponent(activeModalProperty.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Receber Tabela Completa no WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setActiveModalProperty(null);
                      onOpenBooking();
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                  >
                    <span>Agendar Apresentação Online</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
