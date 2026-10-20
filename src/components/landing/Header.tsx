"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Calendar, Sparkles } from "lucide-react";
import { brandInfo } from "@/data/landing";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#acompanhamento", label: "Acompanhamento" },
  { href: "#pilares", label: "Pilares" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#rotina", label: "Rotina real" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3D8C8] shadow-[0_4px_20px_-10px_rgba(44,36,30,0.06)] py-3.5"
            : "bg-[#FAF7F2] border-b border-[#E3D8C8]/50 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#inicio"
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C6E4E] rounded-md py-1"
              aria-label="NutriBalance - Ir para o início"
            >
              <span className="w-8 h-8 rounded-full bg-[#5C6E4E] text-[#FAF7F2] flex items-center justify-center font-serif text-lg font-medium shadow-sm transition-transform duration-300 group-hover:scale-105">
                N
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal tracking-tight text-[#2C241E] group-hover:text-[#5C6E4E] transition-colors">
                  NutriBalance
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#6C5F54] font-medium -mt-1">
                  Nutrição Consciente
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-[#6C5F54] hover:text-[#2C241E] hover:bg-[#F4EDE3] rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C6E4E]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#5C6E4E] bg-[#EDF2EA] px-3 py-1 rounded-full font-medium border border-[#5C6E4E]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C6E4E] animate-pulse" />
                Vagas para este mês
              </span>
              <a
                href="#agendar"
                className="inline-flex items-center gap-2 bg-[#2C241E] text-[#FAF7F2] hover:bg-[#B9684E] px-5 py-2.5 rounded-full text-sm font-medium shadow-sm transition-all duration-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9684E] focus-visible:ring-offset-2"
              >
                <span>Agendar consulta</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="#agendar"
                className="inline-flex items-center justify-center text-xs font-medium bg-[#2C241E] text-[#FAF7F2] px-3 py-1.5 rounded-full"
              >
                Agendar
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#2C241E] hover:text-[#5C6E4E] hover:bg-[#F4EDE3] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C6E4E]"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF7F2] animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação mobile"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E3D8C8]">
            <Link
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <span className="w-8 h-8 rounded-full bg-[#5C6E4E] text-[#FAF7F2] flex items-center justify-center font-serif text-lg font-medium">
                N
              </span>
              <span className="font-serif text-2xl text-[#2C241E]">NutriBalance</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#2C241E] hover:bg-[#F4EDE3] rounded-lg"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            <div className="p-4 rounded-2xl bg-[#F4EDE3] border border-[#E3D8C8]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5C6E4E] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                Dra. Camila Ribeiro
              </div>
              <p className="text-sm text-[#2C241E] font-serif italic">
                “Uma boa alimentação precisa funcionar na vida real, não apenas no papel.”
              </p>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-lg font-medium text-[#2C241E] hover:bg-[#F4EDE3] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#E3D8C8] space-y-4">
              <a
                href="#agendar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#2C241E] text-[#FAF7F2] hover:bg-[#B9684E] py-3.5 rounded-full text-base font-medium shadow-sm transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar consulta</span>
              </a>

              <a
                href={brandInfo.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border border-[#5C6E4E] text-[#5C6E4E] hover:bg-[#EDF2EA] py-3.5 rounded-full text-base font-medium transition-colors"
              >
                <span>Falar no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <p className="text-center text-xs text-[#6C5F54] pt-2">
                Atendimento online e presencial • CRN 00000
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
