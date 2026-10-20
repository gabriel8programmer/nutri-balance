import { identificationData } from "@/data/landing";
import { XCircle, ArrowRight } from "lucide-react";

export function Identification() {
  return (
    <section
      id="identificacao"
      className="py-16 sm:py-24 bg-[#F4EDE3] border-y border-[#E3D8C8] relative overflow-hidden"
      aria-label="Identificação de dificuldades reais com a alimentação"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B9684E] font-semibold">
              {identificationData.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight leading-tight">
              Você não precisa escolher entre <br className="hidden sm:inline" />
              <span className="italic">comer bem</span> e viver normalmente.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-sm sm:text-base text-[#6C5F54] leading-relaxed">
              O problema nunca foi a sua força de vontade. Foram as dietas radicais que ignoraram que você tem uma vida real para viver.
            </p>
          </div>
        </div>

        {/* Narrative editorial block */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E3D8C8] mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 text-base sm:text-lg text-[#2C241E] leading-relaxed">
              <p className="font-serif text-xl sm:text-2xl text-[#2C241E] font-normal leading-snug">
                “Por que é tão difícil manter uma alimentação saudável por mais de duas semanas?”
              </p>
              <p className="text-sm sm:text-base text-[#6C5F54]">
                Porque a maioria das dietas convencionais foi desenhada em laboratórios ou consultórios frios, exigindo que você passe horas na cozinha, corte o que gosta e viva contando os minutos para o próximo &ldquo;dia do lixo&rdquo;.
              </p>
              <p className="text-sm sm:text-base text-[#6C5F54]">
                Quando a rotina aperta — reuniões até tarde, imprevistos, cansaço —, essa estrutura frágil desaba. E o sentimento que sobra é o de fracasso pessoal.
              </p>
            </div>

            <div className="bg-[#EDF2EA] rounded-2xl p-6 sm:p-8 border border-[#5C6E4E]/20">
              <span className="inline-block text-xs uppercase tracking-wider font-bold text-[#5C6E4E] mb-2">
                O outro caminho
              </span>
              <h3 className="font-serif text-2xl text-[#2C241E] mb-3">
                Nutrição compassiva e contextualizada
              </h3>
              <p className="text-sm text-[#45533A] leading-relaxed mb-4">
                Em vez de pedir que você mude toda a sua vida para caber num papel, nós redesenhamos as estratégias para que o prato saudável seja a escolha mais fácil e saborosa do seu dia.
              </p>
              <a
                href="#posicionamento"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C6E4E] hover:text-[#45533A] uppercase tracking-wider group"
              >
                <span>Descobrir como funciona o método</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* The 6 Common Friction Points: Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {identificationData.frictionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[#FAF7F2] p-6 sm:p-7 rounded-2xl border border-[#E3D8C8] flex flex-col justify-between hover:border-[#B9684E]/40 transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-[#B9684E] bg-[#F8ECE8] px-2.5 py-1 rounded-full">
                    Dificuldade {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <XCircle className="w-5 h-5 text-[#B9684E]/60" />
                </div>
                <h4 className="font-serif text-xl text-[#2C241E] mb-2 font-normal">
                  {point.title}
                </h4>
                <p className="text-sm text-[#6C5F54] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
