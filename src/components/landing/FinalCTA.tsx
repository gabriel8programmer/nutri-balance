"use client";

import { useState } from "react";
import { brandInfo } from "@/data/landing";
import { ArrowRight, MessageCircle, CheckCircle, ShieldCheck, Calendar, Sparkles } from "lucide-react";

export function FinalCTA() {
  const [name, setName] = useState("");
  const [preferredShift, setPreferredShift] = useState("manha");
  const [format, setFormat] = useState("online");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate personalized WhatsApp message with form details
    const text = encodeURIComponent(
      `Olá, Dra. Camila! Meu nome é ${name || "Cliente"} e gostaria de agendar uma consulta na NutriBalance. Formato de preferência: ${
        format === "online" ? "Online (Videochamada)" : "Presencial (São Paulo)"
      }. Melhor período: ${
        preferredShift === "manha"
          ? "Manhã"
          : preferredShift === "tarde"
          ? "Tarde"
          : "Noite / Horário flexível"
      }.`
    );
    const targetUrl = `https://wa.me/5511999999999?text=${text}`;
    setIsSubmitted(true);
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="agendar"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Agendamento da consulta nutricional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container: Warm Sand with Terracotta & Olive Accents */}
        <div className="relative rounded-3xl bg-[#F4EDE3] border-2 border-[#E3D8C8] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
          
          {/* Subtle Ambient Decorative Circles */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#EDF2EA] blur-3xl opacity-60 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#F8ECE8] blur-3xl opacity-60 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E3D8C8] text-xs font-semibold text-[#B9684E]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primeiro passo sem compromisso</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight leading-tight">
                Uma alimentação mais equilibrada <br className="hidden sm:inline" />
                pode <span className="italic text-[#B9684E]">começar de forma simples</span>.
              </h2>

              <p className="text-base sm:text-lg text-[#6C5F54] leading-relaxed max-w-xl">
                Agende uma consulta e descubra como adaptar sua alimentação à sua rotina e aos seus objetivos, com acolhimento e sem extremismos.
              </p>

              {/* Trust & Guarantee points */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#2C241E]">
                  <CheckCircle className="w-4 h-4 text-[#5C6E4E] shrink-0" />
                  <span>Atendimento online para todo o Brasil ou presencial em consultório</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#2C241E]">
                  <CheckCircle className="w-4 h-4 text-[#5C6E4E] shrink-0" />
                  <span>Plano alimentar entregue em até 3 dias úteis com suporte contínuo</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#2C241E]">
                  <ShieldCheck className="w-4 h-4 text-[#5C6E4E] shrink-0" />
                  <span>Dra. Camila Ribeiro • Nutricionista CRN 00000</span>
                </div>
              </div>

              {/* Direct WhatsApp Instant Button */}
              <div className="pt-4">
                <a
                  href={brandInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#5C6E4E] hover:bg-[#45533A] text-[#FAF7F2] px-8 py-4 rounded-full font-medium text-base shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C6E4E] focus-visible:ring-offset-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar diretamente pelo WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Pre-Booking Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E3D8C8] shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-[#B9684E]" />
                  <h3 className="font-serif text-xl text-[#2C241E] font-normal">
                    Solicitar disponibilidade
                  </h3>
                </div>

                <p className="text-xs text-[#6C5F54] mb-6">
                  Preencha seus dados para receber horários e tirar dúvidas diretamente no WhatsApp:
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-medium text-[#2C241E] mb-1.5">
                      Seu nome completo
                    </label>
                    <input
                      id="client-name"
                      type="text"
                      required
                      placeholder="Ex: Maria Clara"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E3D8C8] bg-[#FAF7F2] text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#5C6E4E] transition-all placeholder:text-[#6C5F54]/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C241E] mb-1.5">
                      Modalidade de preferência
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormat("online")}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          format === "online"
                            ? "bg-[#5C6E4E] text-[#FAF7F2] border-[#5C6E4E]"
                            : "bg-[#FAF7F2] text-[#6C5F54] border-[#E3D8C8] hover:bg-[#F4EDE3]"
                        }`}
                      >
                        Online (Vídeo)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormat("presencial")}
                        className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          format === "presencial"
                            ? "bg-[#5C6E4E] text-[#FAF7F2] border-[#5C6E4E]"
                            : "bg-[#FAF7F2] text-[#6C5F54] border-[#E3D8C8] hover:bg-[#F4EDE3]"
                        }`}
                      >
                        Presencial (SP)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#2C241E] mb-1.5">
                      Período mais confortável
                    </label>
                    <select
                      value={preferredShift}
                      onChange={(e) => setPreferredShift(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E3D8C8] bg-[#FAF7F2] text-sm text-[#2C241E] focus:outline-none focus:ring-2 focus:ring-[#5C6E4E] transition-all"
                    >
                      <option value="manha">Manhã (08h às 12h)</option>
                      <option value="tarde">Tarde (13h às 18h)</option>
                      <option value="noite">Noite / Flexível</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#B9684E] hover:bg-[#9D5239] text-[#FAF7F2] py-3 rounded-xl text-sm font-medium transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9684E]"
                  >
                    <span>Ver horários disponíveis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {isSubmitted && (
                    <p className="text-center text-xs text-[#5C6E4E] font-medium animate-in fade-in">
                      Redirecionando para o WhatsApp...
                    </p>
                  )}
                </form>

                <p className="text-[11px] text-center text-[#6C5F54] mt-4">
                  Seus dados não são compartilhados com terceiros.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
