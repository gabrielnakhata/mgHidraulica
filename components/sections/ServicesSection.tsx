"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
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
    icon: "💧",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=85",
    items: [
      "Cilindros hidráulicos",
      "Bombas hidráulicas",
      "Motores hidráulicos",
      "Unidades hidráulicas",
    ],
  },
  {
    id: "mecanica",
    title: "Mecânica",
    description:
      "Componentes mecânicos de alta qualidade para indústria pesada",
    icon: "⚙️",
    image:
       "/img/bg-2.jpg",
    items: [
      "Motoredutores",
      "Redutores",
      "Componentes estruturais",
      "Peças especiais",
    ],
  },
  {
    id: "usinagem",
    title: "Usinagem & Caldeiraria",
    description:
      "Serviços especializados de usinagem de precisão e caldeiraria",
    icon: "🔨",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=85",
    items: [
      "Usinagem de precisão",
      "Caldeiraria industrial",
      "Reparos estruturais",
      "Pintura industrial",
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
                    <span className="text-4xl">{service.icon}</span>
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
                    <ul className="grid grid-cols-2 gap-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-dark-700"
                        >
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
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

        <div className="mt-20 pt-12 border-t border-dark-200">
          <SectionTitle
            title="Por que nos escolher?"
            subtitle="Mais de 30 anos de experiência"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "Eficiência", desc: "Processos otimizados" },
              { icon: "✅", title: "Qualidade", desc: "Padrões internacionais" },
              { icon: "💰", title: "Competitividade", desc: "Preços justos" },
              { icon: "🎯", title: "Precisão", desc: "Resultados exatos" },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <Card className="text-center hover:border-primary-300 hover:shadow-md">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-dark-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-dark-600">{item.desc}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
