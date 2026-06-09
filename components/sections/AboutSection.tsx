"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  const benefits = [
    {
      icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
      title: "Minimizar Impactos",
      description: "Soluções que reduzem interrupções nos processos produtivos",
    },
    {
      icon: "M3 17h3v-7H3v7zm5 0h3V7H8v10zm5 0h3v-4h-3v4zm5 0h3V4h-3v13z",
      title: "Reduzir Custos",
      description:
        "Manutenção e reposição de componentes com preços compatíveis",
    },
    {
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      title: "Prazos Compatíveis",
      description: "Entregas dentro dos prazos necessários para suas operações",
    },
    {
      icon: "M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3zm-1 14-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z",
      title: "Confiabilidade",
      description: "Eficiência e satisfação garantidas em cada solução",
    },
  ];

  return (
    <section className="section-padding bg-[#F7FAF9]">
      <Container>
        <SectionTitle
          title="Quem Somos"
          subtitle="Mais de 30 anos de excelência em soluções industriais"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-14">
          <AnimatedSection>
            <div className="relative h-[340px] md:h-[420px] overflow-hidden rounded-2xl shadow-xl border border-[#DDE7E3] bg-[#1F4A72]">
              <img
                src="/img/bg-1.jpg"
                alt="Soluções Industriais MG Hidráulica"
                className="w-full h-full object-cover opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#1F4A72]/70 via-[#1F4A72]/25 to-transparent" />

              <div className="absolute left-6 bottom-6">
                <div className="relative overflow-hidden rounded-2xl bg-white/95 px-6 py-5 shadow-2xl border border-white/70">
                  <div className="absolute left-0 top-0 h-full w-1.5 bg-[#8BC53F]" />

                  <div className="flex items-end gap-2">
                    <span className="text-4xl md:text-6xl font-extrabold leading-none text-[#1F4A72]">
                      30
                    </span>
                    <span className="mb-1 text-5xl font-extrabold text-[#8BC53F]">
                      +
                    </span>
                  </div>

                  <div className="text-4xl md:text-3xl font-bold leading-none text-[#243447]">
                    anos de
                  </div>
                  <div className="mt-2 md:text-1xl font-bold uppercase tracking-wide text-[#243447]">
                    experiência
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="delay-200">
            <div className="rounded-2xl bg-white border border-[#DDE7E3] shadow-sm p-6 md:p-8">
              <div className="border-l-4 border-[#8BC53F] pl-5">
                <p className="text-base md:text-lg text-[#243447] leading-8 mb-5">
                  A MG HIDRÁULICA - MECÂNICA INDUSTRIAL é uma empresa
                  fornecedora de soluções técnicas em mecânica industrial, que
                  disponibiliza serviços e produtos diversificados que alcançam
                  áreas distintas da atividade industrial e diversos setores da
                  economia.
                </p>

                <p className="text-base md:text-lg text-[#243447] leading-8">
                  Combinamos tradição com inovação, oferecendo soluções
                  completas que aumentam a eficiência operacional de nossos
                  clientes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {[
                "Mais de 30 anos de experiência",
                "Equipe especializada e qualificada",
                "Produtos de alta qualidade",
                "Suporte técnico contínuo",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white border border-[#DDE7E3] px-4 py-3 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1F4A72] text-[#8BC53F] font-bold">
                    ✓
                  </span>
                  <span className="text-sm font-semibold text-[#243447]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 0.1}>
              <div className="h-full rounded-2xl bg-[#B9BDB3] border border-[#DDE7E3] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1F4A72]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7 fill-[#8BC53F]"
                    aria-hidden="true"
                  >
                    <path d={benefit.icon} />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                  {benefit.title}
                </h3>
                <br></br>
                <div className="w-45 h-px bg-[#0F172A] mb-6"></div>
                <p className="text-md font-medium leading-6 text-[#0F172A]">
                  {benefit.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}