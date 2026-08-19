"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ServicesSection() {
  const mainServices = [
    {
      id: "hidraulica",
      title: "Hidráulica",
      description:
        "Reforma ou fabricação de componentes hidráulicos e pneumáticos para aplicações industriais.",
      image: "/img/MGH/10.JPG",
      items: [
        "Cilindros hidráulicos e pneumáticos (reforma e fabricação)",
        "Compressores e motores hidráulicos",
        "Unidades hidráulicas (comandos, válvulas, blocos)",
        "Martelos rompedores",
        "Bombas hidráulicas e sopradores industriais",
      ],
    },
    {
      id: "mecanica",
      title: "Mecânica",
      description:
        "Recuperação de componentes ou subconjuntos mecânicos para indústria pesada.",
      image: "/img/MGH/DSC09871.JPG",
      items: [
        "Conversores de torque",
        "Comando final de tratores D8T, D9T, D10 e D11",
        "Diferencial",
        "Peças de caminhões off-road",
        "Redutores de velocidade e transmissão Caterpillar",
      ],
    },
    {
      id: "usinagem-caldeiraria",
      title: "Usinagem & Caldeiraria",
      description:
        "Recuperação ou fabricação de peças ou subconjuntos conforme desenho ou amostra.",
      image: "/img/MGH/cnc.JPG",
      items: [
        "Componentes de máquinas e linhas de produção",
        "Tanques, caçambas, tubulações e estruturas metálicas",
        "Recuperação dimensional e acabamento industrial",
        "Soldas, usinagem, pintura e proteção anticorrosiva",
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

        <div className="mb-10 space-y-4">
          {mainServices.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.2}>
              <div className="overflow-hidden rounded-3xl border border-[#DDE7E3] bg-[#F8FBFA] shadow-sm">
                <div className="grid gap-0 lg:grid-cols-[1.08fr_1.42fr] lg:items-stretch">
                  <div className="flex items-center justify-center bg-[#edf3f1] p-3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-64 w-full rounded-2xl object-cover md:h-[420px]"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="inline-flex h-3 w-3 rounded-full bg-[#8BC53F]" />
                      <h3 className="text-2xl font-bold text-dark-900 md:text-3xl">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mb-3 max-w-3xl text-base leading-6 text-dark-700 md:text-lg md:leading-7">
                      {service.description}
                    </p>

                    <ul className="grid gap-2 md:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 rounded-xl bg-white px-3 py-2 text-sm leading-5 text-dark-700 md:text-base md:leading-6"
                        >
                          <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
