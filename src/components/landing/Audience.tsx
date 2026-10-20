import { audienceData } from "@/data/landing";
import { CheckCircle, Sparkles } from "lucide-react";

export function Audience() {
  return (
    <section
      id="para-quem"
      className="py-16 sm:py-24 lg:py-28 bg-[#F4EDE3] border-b border-[#E3D8C8] relative"
      aria-label="Público-alvo do acompanhamento nutricional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#B9684E] font-semibold">
            Para quem é
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight leading-tight">
            Para quem quer melhorar a alimentação <br className="hidden sm:inline" />
            <span className="italic">sem transformar a vida em uma dieta</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal">
            Se você se identifica com uma ou mais situações abaixo, a abordagem da NutriBalance foi pensada exatamente para você.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#E3D8C8] flex flex-col justify-between hover:border-[#5C6E4E]/50 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#5C6E4E] uppercase tracking-wider bg-[#EDF2EA] px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#B9684E]" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#2C241E] font-normal mb-3 leading-snug">
                  {item.question}
                </h3>

                <p className="text-sm text-[#6C5F54] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E3D8C8]/60 flex items-center gap-2 text-xs font-medium text-[#2C241E]">
                <CheckCircle className="w-4 h-4 text-[#5C6E4E]" />
                <span>Abordagem compatível com a sua realidade</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
