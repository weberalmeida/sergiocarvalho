import React, { useState } from "react";
import { 
  TrendingUp, 
  DollarSign, 
  Building2, 
  Sun, 
  Sparkles, 
  CheckCircle, 
  ChevronRight, 
  Calculator, 
  ShieldCheck, 
  Zap, 
  ArrowUpRight,
  PieChart,
  BarChart3,
  Calendar
} from "lucide-react";
import { MARKET_METRICS } from "../data/mockData";

interface ParaibaBoomSectionProps {
  onOpenBooking: () => void;
}

export const ParaibaBoomSection: React.FC<ParaibaBoomSectionProps> = ({ onOpenBooking }) => {
  // Calculator State
  const [investmentAmount, setInvestmentAmount] = useState<number>(500000);
  const [years, setYears] = useState<number>(3);
  const [strategy, setStrategy] = useState<"airbnb" | "planta" | "luxo">("airbnb");

  // Calculation parameters based on strategy
  const getProjections = () => {
    let annualAppreciation = 0.18; // 18% a.a. default
    let annualRentalYield = 0.13;   // 13% a.a. default

    if (strategy === "airbnb") {
      annualAppreciation = 0.16;
      annualRentalYield = 0.145; // High short stay yield
    } else if (strategy === "planta") {
      annualAppreciation = 0.22; // High appreciation during build
      annualRentalYield = 0.08;
    } else if (strategy === "luxo") {
      annualAppreciation = 0.15;
      annualRentalYield = 0.10;
    }

    // Compound value
    let currentPropertyValue = investmentAmount;
    let totalRentalAccumulated = 0;

    for (let i = 0; i < years; i++) {
      currentPropertyValue *= (1 + annualAppreciation);
      totalRentalAccumulated += (currentPropertyValue * annualRentalYield);
    }

    const totalEstimatedReturn = currentPropertyValue + totalRentalAccumulated - investmentAmount;
    const totalRoiPercent = ((currentPropertyValue + totalRentalAccumulated - investmentAmount) / investmentAmount) * 100;

    // CDI Benchmark comparison (assuming 10.5% a.a. liquid)
    const cdiBenchmark = investmentAmount * Math.pow(1 + 0.105, years) - investmentAmount;

    return {
      finalPropertyValue: Math.round(currentPropertyValue),
      accumulatedRental: Math.round(totalRentalAccumulated),
      totalValue: Math.round(currentPropertyValue + totalRentalAccumulated),
      totalRoiPercent: Math.round(totalRoiPercent),
      totalGain: Math.round(totalEstimatedReturn),
      cdiBenchmark: Math.round(cdiBenchmark),
      multiplier: ((currentPropertyValue + totalRentalAccumulated) / investmentAmount).toFixed(2),
    };
  };

  const projections = getProjections();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 mb-4">
            <Sparkles className="w-4 h-4" />
            <span>O Momento Excepcional da Paraíba</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Mais do que o sonho da casa própria: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400">
              A Maior Oportunidade de Investimento do Brasil
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            João Pessoa e Cabedelo vivem um momento histórico de transformação e atração de capital. 
            Com a maior taxa de valorização imobiliária do país e rentabilidades superiores a 14% ao ano em aluguel por temporada, 
            investir na Paraíba é proteger e multiplicar seu patrimônio com altíssima liquidez.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {MARKET_METRICS.map((m) => (
            <div
              key={m.id}
              className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-400 tracking-tight">
                    {m.value}
                  </span>
                  {m.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {m.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {m.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                  {m.subtitle}
                </p>

                <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[11px] font-semibold text-amber-400/90">
                <span>Indicador de Mercado PB</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Narrative Box */}
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-10 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Análise Estratégica do Consultor</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Por que os grandes investidores estão migrando o capital do Sul/Sudeste para a Paraíba?
              </h3>

              <div className="mt-4 space-y-3 text-slate-300 text-sm leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Custo por M² em Fase de Expansão:</strong> João Pessoa ainda possui o metro quadrado de orla mais acessível e promissor do Nordeste em comparação com Recife, Maceió e Balneário Camboriú, garantindo teto imenso para ganho de capital.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Ecossistema Turístico e Nômades Digitais:</strong> Com praias próprias para banho o ano todo, nova infraestrutura de parques aquáticos e expansão de voos diretos, a demanda por locação de curta temporada (Airbnb) permanece com ocupação superior a 80%.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-white">Parcelamento Direto com a Construtora:</strong> Oportunidade única de adquirir lançamentos na planta sem burocracia bancária inicial, alavancando seu investimento com aportes suaves durante a obra.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 text-center">
              <div className="inline-flex p-3 bg-amber-500/10 text-amber-400 rounded-2xl mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Pronto para montar sua estratégia?</h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Apresento um raio-X completo das melhores oportunidades de pré-lançamento fora do mercado tradicional em uma videoconferência rápida de 20 minutos.
              </p>
              <button
                onClick={onOpenBooking}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Minha Consultoria</span>
              </button>
            </div>

          </div>
        </div>

        {/* Interactive ROI & Appreciation Simulator */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800/90 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Simulador de Rentabilidade Patrimonial</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Calcule o Retorno do seu Investimento na Paraíba
              </h3>
            </div>

            {/* Strategy Selector */}
            <div className="flex bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setStrategy("airbnb")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  strategy === "airbnb"
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Foco em Airbnb
              </button>
              <button
                onClick={() => setStrategy("planta")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  strategy === "planta"
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Compra na Planta
              </button>
              <button
                onClick={() => setStrategy("luxo")}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  strategy === "luxo"
                    ? "bg-amber-400 text-slate-950 shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Alto Padrão
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
            
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Aporte Inicial / Valor do Imóvel:
                  </label>
                  <span className="text-lg font-black text-amber-400">
                    {formatCurrency(investmentAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={300000}
                  max={3000000}
                  step={50000}
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
                  <span>R$ 300 mil (Studio)</span>
                  <span>R$ 1.5M (Luxo)</span>
                  <span>R$ 3M+ (Mansão/Cobertura)</span>
                </div>
              </div>

              {/* Years Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Horizonte de Investimento:
                  </label>
                  <span className="text-lg font-black text-emerald-400">
                    {years} {years === 1 ? "Ano" : "Anos"}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
                  <span>1 Ano (Ganhos Rápidos)</span>
                  <span>3 Anos (Entrega de Obra)</span>
                  <span>5 Anos (Ciclo Completo)</span>
                </div>
              </div>

              <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                <p className="font-semibold text-slate-200 mb-1">💡 Nota do Especialista:</p>
                {strategy === "airbnb" && (
                  <p>Considera taxa média de aluguel por temporada de 14,5% a.a. + valorização anual imobiliária de 16% ao ano na orla nobre de João Pessoa.</p>
                )}
                {strategy === "planta" && (
                  <p>Considera valorização acelerada durante a fase de obra (22% a.a.) com parcelamento direto e rentabilidade pós-chaves.</p>
                )}
                {strategy === "luxo" && (
                  <p>Foco em altíssima liquidez patrimonial, preservação de capital com valorização consistente de 15% a.a. no Altiplano e Cabo Branco.</p>
                )}
              </div>

            </div>

            {/* Simulation Results Display */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-amber-500/30 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Resultado Estimado em {years} {years === 1 ? "Ano" : "Anos"}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  {projections.totalRoiPercent}% ROI Estimado
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 my-6">
                <div>
                  <p className="text-xs text-slate-400">Valor Imóvel Projetado</p>
                  <p className="text-lg font-bold text-white mt-0.5">
                    {formatCurrency(projections.finalPropertyValue)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Renda Acumulada em Aluguel</p>
                  <p className="text-lg font-bold text-emerald-400 mt-0.5">
                    +{formatCurrency(projections.accumulatedRental)}
                  </p>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                <p className="text-xs font-semibold text-amber-300">Patrimônio Total Estimado (Imóvel + Renda)</p>
                <p className="text-2xl sm:text-3xl font-black text-amber-400 mt-1">
                  {formatCurrency(projections.totalValue)}
                </p>
                <p className="text-[11px] text-slate-300 mt-1">
                  Multiplicador do Capital: <strong className="text-white">{projections.multiplier}x</strong> o investimento inicial
                </p>
              </div>

              {/* Comparison vs CDI */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Rendimento equivalente em Renda Fixa (CDI):</span>
                <span className="font-bold text-slate-300">
                  {formatCurrency(investmentAmount + projections.cdiBenchmark)}
                </span>
              </div>

              <button
                onClick={onOpenBooking}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Quero Apresentação com Projeção Real por Empreendimento</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
