"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TimelineSection() {
  const timeline = [
    {
      year: "1990",
      title: "Início das Atividades",
      description: "Fundação da MG Hidráulica com foco em soluções industriais",
    },
    {
      year: "2007",
      title: "Projeto Siderúrgico",
      description:
        "Participação no projeto de implantação do sistema de lingotamento contínuo da Siderúrgica Norte Brasil",
    },
    {
      year: "2008",
      title: "Sistema de Qualidade",
      description:
        "Implantação do Sistema de Gestão da Qualidade para garantir excelência",
    },
    {
      year: "2014",
      title: "Nova Sede",
      description:
        "Inauguração da nova sede administrativa e operacional de maior capacidade",
    },
    {
      year: "2022",
      title: "Nova Identidade Visual",
      description:
        "Renovação da identidade visual e reposicionamento da marca no mercado",
    },
  ];

  return (
    <section className="section-padding bg-dark-50">
      <Container>
        <SectionTitle title="Nossa História" />

        <div className="max-w-3xl mx-auto">
          {timeline.map((event, index) => (
            <AnimatedSection key={event.year} delay={index * 0.1}>
              <div className="flex gap-6 mb-12 relative">
                {index !== timeline.length - 1 && (
                  <div className="absolute left-7 top-16 w-0.5 h-24 bg-primary-300"></div>
                )}

                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg border-4 border-white">
                    {event.year.slice(-2)}
                  </div>
                </div>

                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-dark-700">{event.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
