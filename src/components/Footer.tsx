import React from "react";
import { ShieldCheck, ArrowUp } from "lucide-react";
import { CONSULTANT_DATA } from "../data/mockData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div>
            <p className="font-bold text-slate-200">
              {CONSULTANT_DATA.name} • {CONSULTANT_DATA.creci}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Consultoria de Investimentos Imobiliários de Alto Padrão em João Pessoa & Cabedelo - PB.
            </p>
          </div>
        </div>

        {/* Center */}
        <div className="text-center text-[11px] text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="mt-0.5">Projeções de rentabilidade baseadas em taxas históricas de valorização e ocupação de temporada.</p>
          <p className="pt-1 text-slate-400">
            Desenvolvimento{" "}
            <a
              href="https://wemp.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
            >
              Wemp
            </a>
          </p>
        </div>

        {/* Right - Scroll Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors flex items-center gap-1.5 font-semibold"
          title="Voltar ao topo"
        >
          <span>Topo</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
};
