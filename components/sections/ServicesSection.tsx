"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function ServicesSection() {
const mainServices = [
  {
    id: "hidraulica",
    title: "Hidráulica",
    description:
      "Soluções completas em sistemas hidráulicos e pneumáticos",
    icon: "",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=85",
    items: [
      "Cilindros hidráulicos e pneumáticos (reforma e fabricação)",
      "Compressores e motores hidráulicos",
      "Suspensão de caminhões off-Road (óleo e nitrogênio)",
      "Unidades hidráulicas (comandos, válvulas, blocos)",
      "Martelos rompedores hidráulicos",
      "Bombas (pistão, engrenagem, palheta, centrífuga vertical e horizontal)",
    ],
  },
  {
    id: "mecanica",
    title: "Mecânica",
    description:
      "Componentes mecânicos de alta qualidade para indústria pesada",
    icon: "",
    image:
       "/img/bg-2.jpg",
    items: [
      "Conversor de torque",
      "Comando final dos tratores D8T, D9T, D10 e D11",
      "Diferencial",
      "Peças de caminhões Off-Road (âncora, mancal, balança dianteira e traseira, 5ª roda, cubo da roda)",
      "Redutores de velocidade",
      "Redutores de locomoção",
      "Transmissão Caterpillar",
      "Trocador de calor",
    ],
  },
  {
    id: "usinagem",
    title: "Usinagem & Caldeiraria",
    description:
      "Serviços especializados de usinagem de precisão e caldeiraria",
    icon: "",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=85",
    items: [
      "Usinagem de peças conforme desenho",
      "Recuperação de componentes metálicos (trincas, corrosão, desgaste, empeno...)",
      "Jateamento e pintura industrial",
    ],
  },
];
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Soluções integradas para sua indústria"
        />

        <div className="space-y-16 mb-12">
          {mainServices.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.2}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
                <div
                  className={`relative h-80 rounded-xl overflow-hidden shadow-lg ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent"></div>
                </div>

                <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-3xl font-bold text-dark-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-dark-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <p className="text-sm font-semibold text-primary-600 mb-3">
                      PRINCIPAIS SERVIÇOS
                    </p>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-dark-700"
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1.5"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/servicos/${service.id}`}>
                    <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
                      Saiba Mais →
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
