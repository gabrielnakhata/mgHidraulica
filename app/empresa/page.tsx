"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const facilitiesGroups = [
  {
    title: "Instalações da Empresa",
    images: [
      { src: "/img/work1.png", alt: "Área de Fábrica de 1.500m²" },
      { src: "/img/work2.png", alt: "Área de Usinagem de 500m²" },
      { src: "/img/work3.png", alt: "Área de Montagem de 500m²" },
      { src: "/img/work4.png", alt: "Área de Solda de 60m²" },
      { src: "/img/work5.png", alt: "Área de Pintura de 40m²" },
      { src: "/img/work6.png", alt: "Área de Pátio de 500m²" },
      { src: "/img/work7.png", alt: "Lavador de Peças de 25m²" },
      { src: "/img/work8.png", alt: "Tanque de Cromagem" },
      { src: "/img/work9.png", alt: "Tanque de Cromagem" },
    ],
  },
  {
    title: "Maquinário",
    images: [
      { src: "/img/work10.png", alt: "Mandriladora – Fuso Ø90mm – Y1200 x X1200 x Z1500mm" },
      { src: "/img/work11.png", alt: "Mandriladora – Fuso Ø120mm – Y1300 x X1800 x Z1500mm" },
      { src: "/img/work12.png", alt: "Mandriladora – Fuso Ø120mm – Y1300 x X1800 x Z1500mm" },
      { src: "/img/work13.png", alt: "Torno Horizontal Médio (1.500 até 3.000mm de comprimento de barramento)" },
      { src: "/img/work14.png", alt: "Torno Horizontal Médio (1.500 até 3.000mm de comprimento de barramento)" },
      { src: "/img/work15.png", alt: "Torno Horizontal Tonani FPT100 – Ø2.400 x 3.000mm de comprimento de barramento" },
      { src: "/img/work16.png", alt: "Centro de Usinagem CNC Discovery 1250" },
      { src: "/img/work17.png", alt: "Furadeira Radial Cone 5 – Ø50 x 1600mm" },
      { src: "/img/work18.png", alt: "Fresadoras" },
      { src: "/img/work19.png", alt: "Fresadoras" },
      { src: "/img/work20.png", alt: "Retífica Cilíndrica" },
      { src: "/img/work21.png", alt: "Instrumentos de Medição Diversos e Torquímetros" },
      { src: "/img/work22.png", alt: "Máquina de Solda (Eletrodo Aço/Inox/Ferro Fundido, MIG MAG, TIG)" },
      { src: "/img/work23.png", alt: "Máquina de Solda (Eletrodo Aço/Inox/Ferro Fundido, MIG MAG, TIG)" },
      { src: "/img/work24.png", alt: "Máquina de Solda (Eletrodo Aço/Inox/Ferro Fundido, MIG MAG, TIG)" },
      { src: "/img/work25.png", alt: "Brunidoras – Capacidade Ø350 x 6000mm" },
      { src: "/img/work26.png", alt: "Bancada de Desmontagem de Cilindros, Bombas e Mancais" },
      { src: "/img/work27.png", alt: "Máquinas de Testes Hidráulicos e Pneumáticos" },
      { src: "/img/work28.png", alt: "Máquinas de Testes Hidráulicos e Pneumáticos" },
      { src: "/img/work29.png", alt: "Aquecedor Indutivo para Rolamentos" },
      { src: "/img/work30.png", alt: "Prensa Hidráulica de 100T – 2 unidades" },
      { src: "/img/work31.png", alt: "Balança com Capacidade de 3.000kg" },
      { src: "/img/work32.png", alt: "Corte a Laser até 38mm" },
    ],
  },
  {
    title: "Equipamento de Elevação e Movimentação de Carga",
    images: [
      { src: "/img/work33.png", alt: "Pontes Rolantes – 5 Ton" },
      { src: "/img/work34.png", alt: "Empilhadeira – 4 Toneladas" },
      { src: "/img/work35.png", alt: "Caminhão Truck – 30 Ton" },
      { src: "/img/work36.png", alt: "Caminhão ¾ – 5 Ton" },
      { src: "/img/work37.png", alt: "Caminhonete Saveiro" },
    ],
  },
];

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

        {/* Instalações Físicas, Ferramental e Equipamentos */}
        <section className="section-padding bg-white">
          <Container>
            <SectionTitle title="Instalações Físicas, Ferramental e Equipamentos Adequados" />

            <AnimatedSection>
              <p className="text-dark-700 leading-relaxed max-w-4xl mx-auto mb-16 text-center">
                <strong className="text-dark-900">Instalações da empresa:</strong> a MG
                Hidráulica - Mecânica Industrial, com sede em Betim/MG, iniciou suas
                atividades em 25/10/1990. Instalada na região industrial deste
                município, a empresa está situada entre os dois principais corredores
                de transporte de Minas Gerais, a BR 381 e BR 040. Ofertando
                inicialmente serviços de fabricação e reforma de cilindros hidráulicos
                e pneumáticos, bem como serviços de usinagem e caldeiraria pequena,
                média a grande porte, a MG Hidráulica vem gradativamente ampliando seu
                escopo de serviços. A sede administrativa, layout da fábrica, máquinas
                operatrizes e equipamentos de movimentação de carga foram pensados
                para as necessidades dos clientes e atendimento às demandas deste
                mercado.
              </p>
            </AnimatedSection>

            {facilitiesGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className={groupIndex > 0 ? "mt-16" : undefined}
              >
                <h3 className="text-2xl font-bold text-dark-900 mb-6 text-center">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {group.images.map((img) => (
                    <AnimatedSection key={img.src}>
                      <div className="bg-white rounded-lg shadow-sm border border-dark-100 overflow-hidden h-full flex flex-col">
                        <div className="relative aspect-[4/3] bg-dark-50">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-contain p-2"
                          />
                        </div>
                        <div className="p-4 border-t border-dark-100">
                          <p className="text-dark-700 text-base leading-relaxed text-center">
                            {img.alt}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
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
