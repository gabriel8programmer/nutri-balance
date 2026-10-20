import { benefitsData } from "@/data/landing";
import { Check, ShieldCheck, HeartHandshake, Compass, Clock, Sparkles, Smile } from "lucide-react";

const benefitIcons = [Clock, HeartHandshake, Compass, Smile, Sparkles, ShieldCheck];

export function Benefits() {
  return (
    <section
      id="beneficios"
      className="py-16 sm:py-24 lg:py-28 bg-[#F4EDE3] border-t border-[#E3D8C8] relative"
      aria-label="Benefícios do acompanhamento nutricional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5C6E4E] font-semibold">
            Vantagens concretas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight">
            O que você ganha com um método <br className="hidden sm:inline" />
            <span className="italic">feito para o seu mundo</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal">
            Resultados que se refletem na sua disposição, na sua tranquilidade e na leveza dos seus dias.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];
            return (
              <div
                key={benefit.id}
                className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#E3D8C8] flex flex-col justify-between hover:border-[#5C6E4E]/50 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#EDF2EA] text-[#5C6E4E] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#2C241E] font-normal mb-3 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#6C5F54] leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3D8C8]/60 flex items-start gap-2 text-xs text-[#2C241E] font-medium">
                  <Check className="w-4 h-4 text-[#B9684E] shrink-0 mt-0.5" />
                  <span>{benefit.practicalImpact}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
