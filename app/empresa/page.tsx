"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function EmpresaPage() {
  const missionVisionValues = [
    {
      title: "Missão",
      icon: "🎯",
      content:
        "Oferecer soluções técnicas aos clientes no fornecimento e reforma de componentes mecânicos, hidráulicos e pneumáticos, bem como serviços de caldeiraria e usinagem, em prazo e custo compatíveis com as suas necessidades.",
    },
    {
      title: "Visão",
      icon: "👁️",
      content:
        "Ser uma organização enxuta, flexível, adaptada a mudanças e que gere bons resultados, sendo reconhecida pelos clientes por sua pontualidade e qualidade diferenciada.",
    },
  ];

  const values = [
    "Segurança no trabalho",
    "Qualidade",
    "Cumprimento de prazos",
    "Trabalho em equipe",
    "Respeito às pessoas",
    "Capricho na execução",
    "Observância legal",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Missão, Visão e Valores */}
        <section className="section-padding bg-dark-50">
          <Container>
            <SectionTitle title="Missão, Visão e Valores" />

            {/* Missão e Visão */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {missionVisionValues.map((item) => (
                <AnimatedSection key={item.title}>
                  <div className="bg-white p-8 rounded-lg shadow-sm border border-dark-100">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-dark-700 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Valores */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-dark-100">
                <h3 className="text-2xl font-bold text-dark-900 mb-6">Valores</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {values.map((value) => (
                    <div key={value} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                      <span className="text-dark-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </Container>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
          <Container className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer trabalhar conosco?
            </h2>
            <Link href="/contato">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Fale Conosco
              </Button>
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
