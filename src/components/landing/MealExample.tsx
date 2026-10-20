import { mealExampleData } from "@/data/landing";
import { Utensils, Info, CheckCircle2 } from "lucide-react";

export function MealExample() {
  return (
    <section
      id="acompanhamento"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] relative"
      aria-label="Exemplo ilustrativo de um dia possível na rotina alimentar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#B9684E] font-semibold">
            Demonstração prática
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight">
            Um dia possível: <br className="hidden sm:inline" />
            <span className="italic">simples, colorido e saboroso</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal">
            Veja como uma rotina equilibrada é composta de alimentos que você já conhece, sem ingredientes exóticos ou preparos mirabolantes.
          </p>
        </div>

        {/* 4 Meals Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mealExampleData.map((meal, index) => (
            <article
              key={index}
              className="bg-[#F4EDE3] rounded-3xl p-6 sm:p-7 border border-[#E3D8C8] flex flex-col justify-between hover:bg-[#FAF7F2] hover:border-[#5C6E4E]/50 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Period Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-[#5C6E4E] bg-[#EDF2EA] px-3 py-1 rounded-full">
                    {meal.period}
                  </span>
                  <Utensils className="w-4 h-4 text-[#B9684E]" />
                </div>

                <p className="text-xs font-medium text-[#6C5F54] mb-2 uppercase tracking-wider">
                  {meal.timeHint}
                </p>

                <h3 className="font-serif text-lg sm:text-xl text-[#2C241E] font-normal mb-3 leading-snug">
                  {meal.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6C5F54] leading-relaxed mb-4">
                  {meal.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E3D8C8]/60">
                <div className="flex items-start gap-1.5 text-xs text-[#45533A]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5C6E4E] shrink-0 mt-0.5" />
                  <span>{meal.whyItWorks}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mandatory Legal & Ethical Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#F4EDE3] border border-[#E3D8C8] flex items-start sm:items-center gap-3.5 max-w-3xl mx-auto text-xs sm:text-sm text-[#6C5F54]">
          <Info className="w-5 h-5 text-[#B9684E] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#2C241E] font-medium">Nota importante:</strong> Exemplo fictício para fins de apresentação do projeto de portfólio. Não representa prescrição clínica ou cardápio universal. Cada paciente recebe um plano personalizado de acordo com suas necessidades individuais.
          </p>
        </div>

      </div>
    </section>
  );
}
