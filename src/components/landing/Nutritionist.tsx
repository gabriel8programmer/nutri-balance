import Image from "next/image";
import { brandInfo } from "@/data/landing";
import { Award, BookOpen, Heart, ShieldCheck } from "lucide-react";

export function Nutritionist() {
  const { nutritionist } = brandInfo;

  return (
    <section
      id="sobre"
      className="py-16 sm:py-24 lg:py-28 bg-[#FAF7F2] relative overflow-hidden"
      aria-label="Sobre a nutricionista Dra. Camila Ribeiro"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#ECE3D6] border-4 border-[#FAF7F2] shadow-2xl">
                <Image
                  src={nutritionist.photo}
                  alt="Dra. Camila Ribeiro, nutricionista clínica e comportamental da NutriBalance"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241E]/50 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-sm border border-[#E3D8C8]">
                  <p className="font-serif text-lg text-[#2C241E] font-medium">
                    {nutritionist.name}
                  </p>
                  <p className="text-xs text-[#5C6E4E] font-medium">
                    {nutritionist.title} • {nutritionist.crn}
                  </p>
                </div>
              </div>

              {/* Decorative side accent badge */}
              <div className="absolute -top-4 -right-4 bg-[#B9684E] text-[#FAF7F2] p-4 rounded-2xl shadow-lg hidden sm:block max-w-[170px]">
                <p className="font-serif text-2xl font-light">
                  {nutritionist.experienceYears}
                </p>
                <p className="text-[11px] leading-tight opacity-90">
                  de prática clínica com foco em adultos e rotina
                </p>
              </div>

            </div>
          </div>

          {/* Biography & Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#5C6E4E] font-semibold">
                Sua nutricionista
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C241E] font-normal tracking-tight">
                Dra. Camila Ribeiro
              </h2>
              <p className="text-sm font-mono text-[#6C5F54]">
                {nutritionist.crn} • Atendimento Presencial & Online
              </p>
            </div>

            {/* Featured Philosophy Quote */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F4EDE3] border-l-4 border-[#B9684E] border-y border-r border-[#E3D8C8]">
              <p className="font-serif text-xl sm:text-2xl text-[#2C241E] italic font-normal leading-snug">
                “{nutritionist.philosophy}”
              </p>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#6C5F54] leading-relaxed">
              {nutritionist.bio.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>

            {/* Specialties & Values */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#B9684E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2C241E]">
                    Abordagem humanizada
                  </h4>
                  <p className="text-xs text-[#6C5F54]">
                    Escuta atenta e sem cobranças punitivas a cada consulta.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-[#5C6E4E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2C241E]">
                    Ciência sem extremismo
                  </h4>
                  <p className="text-xs text-[#6C5F54]">
                    Recomendações baseadas em evidências nutricionais sólidas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#5C6E4E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2C241E]">
                    Estratégia sob medida
                  </h4>
                  <p className="text-xs text-[#6C5F54]">
                    Nenhum plano é copiado ou igual para duas pessoas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#B9684E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#2C241E]">
                    Ética profissional
                  </h4>
                  <p className="text-xs text-[#6C5F54]">
                    Respeito integral ao código do Conselho de Nutricionistas.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#agendar"
                className="inline-flex items-center gap-2 bg-[#2C241E] hover:bg-[#B9684E] text-[#FAF7F2] px-6 py-3 rounded-full text-sm font-medium transition-colors shadow-sm"
              >
                <span>Conversar com a Dra. Camila</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
