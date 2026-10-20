import { howItWorksData } from "@/data/landing";
import { ArrowRight, MessageSquare, ClipboardCheck, FileText, HeartHandshake } from "lucide-react";

const stepIcons = [MessageSquare, ClipboardCheck, FileText, HeartHandshake];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Como funciona o processo de acompanhamento nutricional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5C6E4E] font-semibold">
            Passo a passo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight">
            Como funciona o acompanhamento, <br className="hidden sm:inline" />
            <span className="italic">do primeiro contato ao dia a dia</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal">
            Um processo desenhado para ser acolhedor, transparente e sem burocracias desnecessárias.
          </p>
        </div>

        {/* Lightweight Editorial Timeline */}
        <div className="relative">
          
          {/* Subtle connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#E3D8C8] -translate-y-12 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {howItWorksData.map((step, index) => {
              const StepIcon = stepIcons[index];
              return (
                <div
                  key={index}
                  className="bg-[#F4EDE3] rounded-3xl p-7 border border-[#E3D8C8] flex flex-col justify-between hover:bg-[#FAF7F2] hover:border-[#5C6E4E]/50 transition-all duration-300 shadow-sm group"
                >
                  <div>
                    {/* Header with step number and icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-3xl text-[#B9684E] font-light">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#FAF7F2] group-hover:bg-[#EDF2EA] flex items-center justify-center text-[#5C6E4E] transition-colors border border-[#E3D8C8]">
                        <StepIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title & Duration */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#2C241E] font-normal mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {step.duration && (
                      <span className="inline-block text-[11px] font-medium text-[#5C6E4E] bg-[#EDF2EA] px-2.5 py-0.5 rounded-full mb-4">
                        {step.duration}
                      </span>
                    )}

                    <p className="text-sm text-[#6C5F54] leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E3D8C8]/70">
                    <p className="text-xs text-[#2C241E] italic font-medium">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Action card below timeline */}
        <div className="mt-14 sm:mt-16 bg-[#F4EDE3] rounded-3xl p-6 sm:p-8 border border-[#E3D8C8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl text-[#2C241E] font-normal">
              Pronto para dar o primeiro passo?
            </h4>
            <p className="text-sm text-[#6C5F54]">
              A consulta inicial pode ser realizada por videochamada ou presencialmente.
            </p>
          </div>
          <a
            href="#agendar"
            className="inline-flex items-center gap-2 bg-[#2C241E] hover:bg-[#B9684E] text-[#FAF7F2] px-6 py-3 rounded-full text-sm font-medium transition-colors shrink-0 shadow-sm"
          >
            <span>Iniciar agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
