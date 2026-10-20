import { resultsData } from "@/data/landing";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export function Results() {
  return (
    <section
      id="resultados"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] border-t border-[#E3D8C8] relative overflow-hidden"
      aria-label="Resultados comportamentais e sustentáveis"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B9684E] font-semibold">
              Resultados reais
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight leading-tight">
              A verdadeira transformação acontece <br className="hidden sm:inline" />
              <span className="italic">no seu comportamento</span>.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base text-[#6C5F54] leading-relaxed">
              Não acreditamos em fotos milagrosas de &ldquo;antes e depois&rdquo;. A saúde duradoura se mede pela paz que você sente à mesa e pela consistência que você mantém ao longo dos anos.
            </p>
          </div>
        </div>

        {/* 4 Behavioral Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultsData.map((res, index) => (
            <div
              key={index}
              className="bg-[#F4EDE3] p-8 rounded-3xl border border-[#E3D8C8] flex flex-col justify-between hover:bg-[#FAF7F2] hover:border-[#B9684E]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#B9684E] bg-[#F8ECE8] px-3 py-1 rounded-full font-semibold">
                    {res.metric}
                  </span>
                  <TrendingUp className="w-4 h-4 text-[#5C6E4E]" />
                </div>

                <h3 className="font-serif text-2xl text-[#2C241E] font-normal mb-1">
                  {res.title}
                </h3>

                <p className="text-xs font-medium text-[#5C6E4E] mb-4">
                  {res.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#6C5F54] leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E3D8C8]/60 flex items-center gap-2 text-xs text-[#2C241E]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5C6E4E]" />
                <span>Indicador de bem-estar diário</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empathy Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EDF2EA] border border-[#5C6E4E]/20 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#45533A] leading-relaxed">
            <strong className="font-semibold text-[#2C241E]">Saúde integral:</strong> Os resultados clínicos e estéticos são uma consequência natural e sustentável da harmonia entre sono, hidratação, alimentação e bem-estar emocional.
          </p>
        </div>

      </div>
    </section>
  );
}
