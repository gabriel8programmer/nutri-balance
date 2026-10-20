"use client";

import { useState } from "react";
import { faqData } from "@/data/landing";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { brandInfo } from "@/data/landing";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] border-t border-[#E3D8C8] relative"
      aria-label="Perguntas frequentes sobre o acompanhamento nutricional"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center mb-14 sm:mb-20 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#5C6E4E] font-semibold">
            Tire suas dúvidas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight">
            Perguntas frequentes
          </h2>
          <p className="text-base sm:text-lg text-[#6C5F54] font-normal max-w-xl mx-auto">
            Tudo o que você precisa saber sobre o formato das consultas, metodologia e agendamento.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4" role="region" aria-label="Lista de perguntas frequentes">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#F4EDE3] border-[#B9684E]/40 shadow-sm"
                    : "bg-[#FAF7F2] border-[#E3D8C8] hover:border-[#5C6E4E]/40"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C6E4E] rounded-2xl"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#2C241E] font-normal pr-2">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#B9684E] text-[#FAF7F2] rotate-180"
                          : "bg-[#ECE3D6] text-[#2C241E]"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  hidden={!isOpen}
                  className={`px-6 pb-6 pt-1 text-sm sm:text-base text-[#6C5F54] leading-relaxed border-t border-[#E3D8C8]/50 mt-1 transition-all ${
                    isOpen ? "block animate-in fade-in-50 duration-200" : "hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra Support Question */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F4EDE3] border border-[#E3D8C8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#FAF7F2] text-[#5C6E4E] flex items-center justify-center shrink-0 border border-[#E3D8C8]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2C241E]">Ficou com alguma outra dúvida?</p>
              <p className="text-xs text-[#6C5F54]">Nossa equipe está à disposição para te atender diretamente.</p>
            </div>
          </div>

          <a
            href={brandInfo.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#5C6E4E] hover:bg-[#45533A] px-5 py-2.5 rounded-full transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
