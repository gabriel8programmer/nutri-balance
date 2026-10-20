import { pillarsData } from "@/data/landing";
import { Check, Sparkles, Compass, Repeat } from "lucide-react";

const pillarIcons = [Compass, Sparkles, Repeat];

export function Pillars() {
  return (
    <section
      id="pilares"
      className="py-16 sm:py-24 lg:py-28 bg-[#F4EDE3] border-b border-[#E3D8C8] relative"
      aria-label="Os três pilares do método NutriBalance"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#B9684E] font-semibold">
            Fundamentos do método
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight">
            Três pilares para uma mudança que <br className="hidden sm:inline" />
            <span className="italic">realmente dura</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal">
            Sem truques rápidos ou regras inatingíveis. Uma base sólida que sustenta a sua saúde por toda a vida.
          </p>
        </div>

        {/* Editorial Columns with Distinct Rhythm & Visual Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pillarsData.map((pillar, index) => {
            const Icon = pillarIcons[index];
            const isFeatured = index === 1; // Equilíbrio in center with distinctive terracotta touch

            return (
              <article
                key={pillar.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-[#FAF7F2] border-2 border-[#B9684E] shadow-[0_15px_35px_-15px_rgba(185,104,78,0.15)] lg:-translate-y-2"
                    : "bg-[#FAF7F2] border border-[#E3D8C8] shadow-sm hover:shadow-md hover:border-[#5C6E4E]/40"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-8 bg-[#B9684E] text-[#FAF7F2] text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">
                    Coração do acompanhamento
                  </div>
                )}

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-full ${
                        isFeatured
                          ? "bg-[#F8ECE8] text-[#B9684E]"
                          : "bg-[#EDF2EA] text-[#5C6E4E]"
                      }`}
                    >
                      {pillar.tag}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isFeatured
                          ? "bg-[#B9684E] text-[#FAF7F2]"
                          : "bg-[#F4EDE3] text-[#2C241E]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2C241E] font-normal mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#2C241E] font-medium leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  <p className="text-xs sm:text-sm text-[#6C5F54] leading-relaxed mb-6 italic border-l-2 border-[#E3D8C8] pl-3">
                    “{pillar.detail}”
                  </p>
                </div>

                {/* Practical Bullets */}
                <div className="pt-6 border-t border-[#E3D8C8]">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#6C5F54] block mb-3">
                    Na prática:
                  </span>
                  <ul className="space-y-2.5">
                    {pillar.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C241E]">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? "text-[#B9684E]" : "text-[#5C6E4E]"
                          }`}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Footer note inside section */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6C5F54]">
            Pilares desenvolvidos para gerar autonomia, para que você não precise de planos engessados pelo resto da vida.
          </p>
        </div>

      </div>
    </section>
  );
}
