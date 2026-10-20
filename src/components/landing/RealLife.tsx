import Image from "next/image";
import { realLifeData } from "@/data/landing";
import { Clock, Check } from "lucide-react";

export function RealLife() {
  return (
    <section
      id="rotina"
      className="py-16 sm:py-24 lg:py-28 bg-[#F4EDE3] border-y border-[#E3D8C8] relative"
      aria-label="Situações da rotina real e soluções nutricionais práticas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5C6E4E] font-semibold">
            Vida real sem filtro
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight leading-tight">
            Alimentação também precisa funcionar <br className="hidden sm:inline" />
            <span className="italic">nos dias mais corridos</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal">
            Não vivemos dentro de uma bolha gastronômica. Veja como nossas estratégias se encaixam nos momentos mais comuns do seu cotidiano.
          </p>
        </div>

        {/* Editorial Carousel / Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realLifeData.map((item, index) => {
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={item.id}
                className={`bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#E3D8C8] flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group ${
                  isWide && index === 3 ? "lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECE3D6]">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#5C6E4E] border border-[#E3D8C8]">
                    {item.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#2C241E]/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-mono text-[#FAF7F2] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B9684E]" />
                    <span>{item.timeContext}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2C241E] font-normal mb-3">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-[#F8ECE8] border border-[#B9684E]/20 text-xs text-[#9D5239]">
                        <span className="font-bold block mb-0.5">O desafio comum:</span>
                        {item.challenge}
                      </div>

                      <div className="p-3 rounded-xl bg-[#EDF2EA] border border-[#5C6E4E]/20 text-xs text-[#45533A]">
                        <span className="font-bold block mb-0.5 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-[#5C6E4E]" />
                          Nossa solução prática:
                        </span>
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
