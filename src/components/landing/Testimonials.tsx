import { testimonialsData } from "@/data/landing";
import { Quote, Sparkles } from "lucide-react";

/**
 * NOTA DE DESENVOLVIMENTO:
 * Os depoimentos abaixo são fictícios e foram criados exclusivamente para fins de demonstração
 * e apresentação estética deste projeto de portfólio.
 */
export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-16 sm:py-24 lg:py-28 bg-[#F4EDE3] border-t border-[#E3D8C8] relative"
      aria-label="Depoimentos e relatos de pacientes acompanhados"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#B9684E] font-semibold">
            Vozes de quem viveu o processo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight">
            Histórias de quem encontrou <br className="hidden sm:inline" />
            <span className="italic">paz com a própria rotina</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal">
            Pessoas reais com compromissos, trabalho e vida social que aprenderam a se alimentar com leveza.
          </p>
        </div>

        {/* 3 Testimonials Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#FAF7F2] p-8 sm:p-9 rounded-3xl border border-[#E3D8C8] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-8 h-8 text-[#B9684E]/40" />
                    <span className="text-xs font-medium text-[#5C6E4E] bg-[#EDF2EA] px-3 py-1 rounded-full">
                      {item.routineContext}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#B9684E] uppercase tracking-wider mb-3">
                    “{item.highlight}”
                  </p>

                  <blockquote className="font-serif text-lg sm:text-xl text-[#2C241E] font-normal leading-snug mb-8">
                    “{item.quote}”
                  </blockquote>
                </div>

                <div className="pt-6 border-t border-[#E3D8C8]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif text-base text-[#2C241E] font-medium">
                        {item.name}, {item.age} anos
                      </p>
                      <p className="text-xs text-[#6C5F54]">
                        {item.profile} • {item.city}
                      </p>
                    </div>
                    <Sparkles className="w-4 h-4 text-[#5C6E4E]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code Disclaimer Notice in Page */}
        <p className="text-center text-xs text-[#6C5F54]/70 mt-8 italic">
          * Depoimentos ilustrativos e fictícios redigidos para representação da experiência clínica no projeto de portfólio.
        </p>

      </div>
    </section>
  );
}
