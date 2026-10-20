import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Video, MapPin, Sparkles } from "lucide-react";
import { heroData } from "@/data/landing";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-32 bg-[#FAF7F2]"
      aria-label="Apresentação do acompanhamento NutriBalance"
    >
      {/* Decorative subtle organic ambient background */}
      <div
        className="absolute top-0 right-0 -z-10 w-[550px] h-[550px] rounded-full bg-[#EDF2EA]/70 blur-3xl opacity-60 pointer-events-none transform translate-x-1/3 -translate-y-1/4"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 -z-10 w-[450px] h-[450px] rounded-full bg-[#F8ECE8]/60 blur-3xl opacity-60 pointer-events-none transform -translate-x-1/3"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F4EDE3] border border-[#E3D8C8] text-xs font-medium text-[#5C6E4E]">
              <span className="flex h-2 w-2 rounded-full bg-[#5C6E4E]" />
              <span>{heroData.badge}</span>
              <span className="text-[#6C5F54]/40">•</span>
              <span className="text-[#6C5F54] font-normal">Sem extremismos</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C241E] font-normal tracking-tight leading-[1.12]">
                Alimentação saudável <br className="hidden sm:inline" />
                precisa <span className="italic font-normal text-[#B9684E]">caber na sua vida</span>.
              </h1>
              
              <p className="text-lg sm:text-xl text-[#6C5F54] font-normal leading-relaxed max-w-2xl">
                {heroData.subheadline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#agendar"
                className="inline-flex items-center justify-center gap-3 bg-[#B9684E] hover:bg-[#9D5239] text-[#FAF7F2] px-8 py-4 rounded-full font-medium text-base shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9684E] focus-visible:ring-offset-2"
              >
                <span>{heroData.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#acompanhamento"
                className="inline-flex items-center justify-center gap-2 bg-[#F4EDE3] hover:bg-[#ECE3D6] text-[#2C241E] border border-[#E3D8C8] px-7 py-4 rounded-full font-medium text-base transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C6E4E]"
              >
                <span>{heroData.secondaryCta}</span>
              </a>
            </div>

            {/* Editorial bullet points of reassurance */}
            <div className="pt-4 border-t border-[#E3D8C8]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#5C6E4E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#6C5F54] leading-snug">
                  Sem cortar grupos alimentares
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#5C6E4E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#6C5F54] leading-snug">
                  Respeito aos seus horários
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#5C6E4E] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#6C5F54] leading-snug">
                  Foco em autonomia duradoura
                </span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#6C5F54] pt-1">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#2C241E]">
                <ShieldCheck className="w-4 h-4 text-[#5C6E4E]" />
                Nutrição baseada em evidências
              </span>
              <span className="text-[#E3D8C8]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#6C5F54]" />
                Videochamada segura
              </span>
              <span className="text-[#E3D8C8]">•</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#6C5F54]" />
                Consultório São Paulo
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Asymmetric Imagery & Floating Details */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Editorial Image */}
              <div className="relative overflow-hidden rounded-3xl bg-[#ECE3D6] shadow-[0_20px_50px_-20px_rgba(44,36,30,0.15)] border-4 border-[#FAF7F2]">
                <div className="aspect-[4/5] relative w-full">
                  <Image
                    src={heroData.heroImage.url}
                    alt={heroData.heroImage.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C241E]/40 via-transparent to-transparent" />
                </div>

                {/* Editorial Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-[#FAF7F2]">
                  <p className="font-serif italic text-sm sm:text-base leading-snug drop-shadow-sm">
                    “{heroData.heroImage.caption}”
                  </p>
                </div>
              </div>

              {/* Floating Asymmetric Note Box */}
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl shadow-xl border border-[#E3D8C8] max-w-[210px] sm:max-w-[230px] hidden sm:block animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#EDF2EA] flex items-center justify-center text-[#5C6E4E]">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6E4E]">
                    Sem culpa
                  </span>
                </div>
                <p className="text-xs text-[#2C241E] font-medium leading-relaxed">
                  Comer bem não é sobre privação. É sobre ter paz com o seu prato.
                </p>
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#FAF7F2] p-3 sm:p-4 rounded-2xl shadow-xl border border-[#E3D8C8] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8ECE8] flex items-center justify-center text-[#B9684E] font-serif font-semibold text-sm">
                  100%
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#2C241E]">Plano sob medida</p>
                  <p className="text-[11px] text-[#6C5F54]">Sem cardápios pré-moldados</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
