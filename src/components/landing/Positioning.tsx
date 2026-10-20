import Image from "next/image";
import { positioningData } from "@/data/landing";
import { Check, Clock, Heart, Wallet, Users, Zap, Target } from "lucide-react";

const factorIcons = [Clock, Heart, Wallet, Users, Zap, Target];

export function Positioning() {
  return (
    <section
      id="posicionamento"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Posicionamento e premissas do acompanhamento"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Context Image + Editorial Badge */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#ECE3D6] border-4 border-[#FAF7F2] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                  alt="Pessoa preparando refeição caseira com tranquilidade na cozinha ensolarada"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241E]/40 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#E3D8C8]">
                  <p className="font-serif text-sm text-[#2C241E] italic leading-snug">
                    “O melhor plano alimentar é aquele que não gera atrito com quem você é.”
                  </p>
                </div>
              </div>

              {/* Decorative accent behind */}
              <div
                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-[#F4EDE3] -z-10 border border-[#E3D8C8]"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Column: Editorial Argument & 6 Real-Life Factors */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#5C6E4E] font-semibold">
              {positioningData.tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight leading-tight">
              {positioningData.title}
            </h2>

            <p className="text-lg text-[#2C241E] font-normal leading-relaxed">
              {positioningData.lead}
            </p>

            <p className="text-sm sm:text-base text-[#6C5F54] leading-relaxed">
              {positioningData.description}
            </p>

            {/* Factors Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {positioningData.factors.map((factor, index) => {
                const IconComponent = factorIcons[index % factorIcons.length];
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-[#F4EDE3] border border-[#E3D8C8] flex items-start gap-3.5 hover:bg-[#ECE3D6] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#5C6E4E] flex items-center justify-center shrink-0 border border-[#E3D8C8]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#2C241E]">
                        {factor.name}
                      </h3>
                      <p className="text-xs text-[#6C5F54] mt-0.5 leading-relaxed">
                        {factor.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-[#5C6E4E] font-medium">
              <Check className="w-4 h-4 text-[#5C6E4E]" />
              <span>Sem exigência de suplementos desnecessários ou pós mágicos.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
