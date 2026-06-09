"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ServicosPage() {

  const services = [
    {
      id: "cilindros-hidraulicos",
      title: "Cilindros Hidráulicos",
      category: "Hidráulica",
      icon: "🔧",
      description:
        "Cilindros hidráulicos de alta qualidade para sistemas de força e controle",
      applications: ["Máquinas industriais", "Equipamentos pesados", "Sistemas de prensa"],
    },
    {
      id: "bombas-hidraulicas",
      title: "Bombas Hidráulicas",
      category: "Hidráulica",
      icon: "💧",
      description:
        "Bombas hidráulicas robustas para aplicações industriais exigentes",
      applications: ["Sistemas pressorizados", "Unidades hidráulicas", "Equipamentos móveis"],
    },
    {
      id: "motoredutores",
      title: "Motoredutores",
      category: "Mecânica",
      icon: "⚙️",
      description:
        "Motoredutores de precisão para transmissão de potência e movimento",
      applications: ["Transportadores", "Guindastes", "Máquinas de produção"],
    },
    {
      id: "usinagem",
      title: "Usinagem",
      category: "Usinagem e Caldeiraria",
      icon: "🛠️",
      description:
        "Usinagem de peças complexas com alta precisão e qualidade",
      applications: ["Peças customizadas", "Componentes industriais", "Reparação especializada"],
    },
    {
      id: "caldeiraria",
      title: "Caldeiraria",
      category: "Usinagem e Caldeiraria",
      icon: "🏗️",
      description:
        "Serviços de caldeiraria para estruturas e componentes metálicos",
      applications: ["Estruturas", "Equipamentos", "Componentes soldados"],
    },
    {
      id: "recuperacao-componentes",
      title: "Recuperação de Componentes",
      category: "Serviços Especiais",
      icon: "♻️",
      description:
        "Recuperação e restauração de componentes industriais desgastados",
      applications: ["Peças antigas", "Componentes danificados", "Reparos estruturais"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
      <section className="bg-gradient-to-r from-dark-900 to-dark-800 text-white py-20 md:py-32">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-dark-200 max-w-2xl mx-auto">
            Soluções completas em hidráulica, mecânica, usinagem e caldeiraria
          </p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <SectionTitle
            title="Categorias de Serviços"
            subtitle="Explore nossas três principais áreas de atuação"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <Card className="flex flex-col h-full">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <div className="text-sm font-semibold text-primary-600 mb-2">
                    {service.category}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-dark-900 mb-2">
                      Aplicações:
                    </p>
                    <ul className="text-sm text-dark-600 space-y-1">
                      {service.applications.map((app) => (
                        <li key={app}>• {app}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/servicos/${service.id}`}>
                    <Button className="w-full">Saiba Mais</Button>
                  </Link>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-dark-50">
        <Container>
          <SectionTitle
            title="Por que nos escolher?"
            subtitle="Mais de 30 anos de excelência"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Eficiência",
                desc: "Processos otimizados e rápidos",
              },
              {
                icon: "✅",
                title: "Qualidade",
                desc: "Padrões internacionais de excelência",
              },
              {
                icon: "💰",
                title: "Competitividade",
                desc: "Preços justos e acessíveis",
              },
              {
                icon: "⏱️",
                title: "Prazos",
                desc: "Entrega conforme combinado",
              },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-dark-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-dark-600">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de uma solução especial?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para atender suas necessidades específicas
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
