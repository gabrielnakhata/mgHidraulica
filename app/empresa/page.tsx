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

  const historyEvents = [
    { year: "1990", title: "Início das Atividades" },
    { year: "2007", title: "Projeto Siderúrgico" },
    { year: "2008", title: "Sistema de Qualidade" },
    { year: "2014", title: "Nova Sede" },
    { year: "2022", title: "Nova Identidade Visual" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-900 to-dark-800 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-xl text-dark-200 max-w-2xl mx-auto">
            Conheça a história, missão e valores da MG Hidráulica
          </p>
        </Container>
      </section>

      {/* História Section */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle title="Nossa História" />
          <AnimatedSection className="max-w-3xl mx-auto">
            <p className="text-lg text-dark-700 leading-relaxed mb-8">
              A MG HIDRÁULICA – MECÂNICA INDUSTRIAL é uma empresa fornecedora
              de soluções técnicas em mecânica industrial, que disponibiliza
              serviços e produtos diversificados que alcançam áreas distintas da
              atividade industrial e diversos setores da economia.
            </p>
            <p className="text-lg text-dark-700 leading-relaxed">
              Com mais de 30 anos de tradição, consolidamos nossa presença no
              mercado através de soluções inovadoras, qualidade comprovada e
              relacionamento de confiança com nossos clientes. Nossa capacidade
              técnica e experiência nos permitem atender as demandas mais
              complexas da indústria.
            </p>
          </AnimatedSection>
        </Container>
      </section>

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

      {/* Identidade Visual */}
      <section className="section-padding bg-white">
        <Container>
          <SectionTitle title="Identidade Visual" />
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-dark-50 p-8 rounded-lg">
              <h4 className="text-xl font-bold text-dark-900 mb-4">
                Até 2021
              </h4>
              <p className="text-dark-700">
                Nossa marca anterior refletia tradição com o uso do triângulo
                vermelho, simbolizando força e estabilidade no mercado
                industrial.
              </p>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg border-2 border-primary-500">
              <h4 className="text-xl font-bold text-dark-900 mb-4">
                A partir de 2022
              </h4>
              <p className="text-dark-700">
                Nova identidade visual com adoção da cor verde, representando
                sustentabilidade e inovação, reforçada pela expressão "Mecânica
                Industrial".
              </p>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-dark-50">
        <Container>
          <SectionTitle title="Principais Marcos" />
          <div className="max-w-3xl mx-auto">
            {historyEvents.map((event, index) => (
              <AnimatedSection key={event.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-12 relative">
                  {index !== historyEvents.length - 1 && (
                    <div className="absolute left-7 top-16 w-0.5 h-24 bg-primary-300"></div>
                  )}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-lg border-4 border-white">
                      {event.year.slice(-2)}
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <p className="text-primary-600 font-semibold text-sm mb-1">
                      {event.year}
                    </p>
                    <h4 className="text-xl font-bold text-dark-900">
                      {event.title}
                    </h4>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer trabalhar conosco?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato para conhecer nossas soluções personalizadas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Fale Conosco
              </Button>
            </Link>
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-dark-100"
              >
                Solicite um Orçamento
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </div>
  );
}
