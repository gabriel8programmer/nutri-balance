import Link from "next/link";
import { brandInfo } from "@/data/landing";
import { Heart, Mail, MessageCircle, ArrowUp } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#2C241E] text-[#ECE3D6] pt-16 pb-12 border-t border-[#3E342B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#3E342B]">
          
          {/* Brand & Editorial Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#5C6E4E] text-[#FAF7F2] flex items-center justify-center font-serif text-lg font-medium">
                N
              </span>
              <span className="font-serif text-2xl text-[#FAF7F2] font-normal tracking-tight">
                NutriBalance
              </span>
            </div>

            <p className="text-sm text-[#D7CABB] leading-relaxed max-w-sm">
              Nutrição prática, acolhedora e personalizada para quem quer transformar a alimentação sem abrir mão de viver normalmente.
            </p>

            <div className="pt-2 text-xs text-[#A89A8D] space-y-1">
              <p>Dra. Camila Ribeiro • {brandInfo.nutritionist.crn}</p>
              <p>{brandInfo.contact.location}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-[#FAF7F2] uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-[#D7CABB]">
              <li>
                <Link href="#inicio" className="hover:text-[#FAF7F2] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#acompanhamento" className="hover:text-[#FAF7F2] transition-colors">
                  Acompanhamento
                </Link>
              </li>
              <li>
                <Link href="#pilares" className="hover:text-[#FAF7F2] transition-colors">
                  Pilares do método
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="hover:text-[#FAF7F2] transition-colors">
                  Sobre a nutricionista
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-[#FAF7F2] transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#rotina" className="hover:text-[#FAF7F2] transition-colors">
                  Rotina real
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#FAF7F2] transition-colors">
                  Perguntas frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-semibold text-[#FAF7F2] uppercase tracking-wider">
              Canais de Contato
            </p>

            <ul className="space-y-3 text-sm text-[#D7CABB]">
              <li>
                <a
                  href={brandInfo.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#FAF7F2] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#5C6E4E]" />
                  <span>WhatsApp de Atendimento</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brandInfo.contact.email}`}
                  className="flex items-center gap-2.5 hover:text-[#FAF7F2] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#B9684E]" />
                  <span>{brandInfo.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#FAF7F2] transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#B9684E]" />
                  <span>{brandInfo.contact.instagram}</span>
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#inicio"
                className="inline-flex items-center gap-2 text-xs text-[#A89A8D] hover:text-[#FAF7F2] transition-colors border border-[#3E342B] px-3.5 py-1.5 rounded-full"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Portfolio Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A89A8D]">
          <p className="text-center md:text-left">
            © {currentYear} NutriBalance. <strong className="text-[#ECE3D6]">Projeto fictício desenvolvido para fins de portfólio profissional.</strong>
          </p>
          <div className="flex items-center gap-2 text-center">
            <span>Desenvolvido com carinho e precisão técnica</span>
            <Heart className="w-3.5 h-3.5 text-[#B9684E] inline fill-[#B9684E]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
