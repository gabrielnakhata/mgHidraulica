"use client";

import { useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const serviceGroups = [
  {
    id: "hidraulica",
    title: "Hidráulica",
    description:
      "Reforma ou fabricação de componentes hidráulicos e pneumáticos para aplicações industriais.",
    images: [
      "/img/MGH/CILINDRO HIDRÁULICO DE ELEVAÇÃO CAMINHÃO 775G.jpg",
      "/img/MGH/CILINDRO HIDRÁULICO DE ELEVAÇÃO ESCAVADEIRA 390D.jpg",
      "/img/MGH/BOMBA HIDRAULICA 3 PARAFUSOS.jpg",
      "/img/MGH/UNIDADE HIDRAULICA.jpg",
      "/img/MGH/BOMBA HIDRAULICA EATON VICKERS.jpg",
      "/img/MGH/CILINDRO HIDRÁULICO PERFURATRIS PIT VIPER 351, 275 e 271.jpg",
      "/img/MGH/UNIDADE HIDRAULICA DO FREIO.jpg",
      "/img/MGH/MOTOR HIDRAULICO BRITADAOR.jpg",
      "/img/MGH/CILINDRO HIDRÁULICO DE ELEVAÇÃO VOLVO EC700.jpg",
      "/img/MGH/CILINDRO HIDRÁULICO DE SUSPENSÃO CAMINHÃO 775G.jpg",
      "/img/MGH/IMG_5091.JPG",
    ],
    applications: [
      "Cilindros hidráulicos e pneumáticos (reforma e fabricação)",
      "Compressores e motores hidráulicos",
      "Unidades hidráulicas (comandos, válvulas, blocos)",
      "Martelos rompedores",
      "Bombas hidráulicas (tipo pistão, engrenagem, palheta, água, centrífuga vertical e horizontal)",
      "Sopradores industriais",
      "Mancais rotativos",
    ],
    commonServices: [
      "Recebimento do componente, lavagem, descontaminação e desmontagem completa",
      "Inspeção visual e dimensional: folgas, ovalização, fragilidades, danos em partes cromadas etc.",
      "Ensaios não destrutivos para identificar trincas ocultas",
      "Laudo técnico com diagnóstico de falhas e medidas de correção necessárias",
      "Teste final em bancada: pressão, vazão, tempo de resposta e estanqueidade",
    ],
    specificServices: [
      "Haste de cilindros: retífica e cromagem (cromo duro industrial)",
      "Camisa de cilindros: brunimento ou retífica para recuperar diâmetro e rugosidade",
      "Tampas e cabeçote de cilindros: retífica das faces de vedação e recuperação de roscas e canais de vedação",
      "Kit de vedação: caracterização/padronização dos componentes",
      "Bombas e motores: checagem de folga em engrenagens, troca do conjunto rotativo e retífica em pistões",
      "Eixo de saída: retífica e recuperação em caso de desgaste",
      "Comandos e válvulas: testes elétricos em bobinas e solenoides, calibração em bancada",
    ],
  },
  {
    id: "mecanica",
    title: "Mecânica",
    description:
      "Recuperação de componentes ou subconjuntos mecânicos para indústria pesada.",
    images: [
      "/img/MGH/COMANDO FINAL 775G.jpg",
      "/img/MGH/CUBO COMANDO FINAL 785C.jpg",
      "/img/MGH/EIXO COMANDO FINAL 777G.jpg",
      "/img/MGH/COMANDO FINAL – TRATOR DE ESTEIRA DE ESTEIRA CAT - D8.jpg",
      "/img/MGH/BALANÇA EIXO TRASEIRO WA1200.jpg",
      "/img/MGH/QUINTA RODA CARRETA HERCULES.jpg",
      "/img/MGH/IMG_20250703_133125.jpg",
      "/img/MGH/BADEJA DIREÇÃO 793D.jpg",
      "/img/MGH/DSC09871.JPG",
      "/img/MGH/DSC09424.JPG",
      "/img/MGH/DSC02886.JPG",
    ],
    applications: [
      "Conversores de torque",
      "Comando final dos tratores D8T, D9T, D10 e D11",
      "Diferencial",
      "Peças de caminhões off-road: âncora, mancal, balança dianteira e traseira, 5ª roda, cubo da roda",
      "Redutores de velocidade",
      "Transmissão Caterpillar",
      "Trocador de calor",
    ],
    commonServices: [
      "Limpeza prévia: desengraxe e lavagem para remoção de óleo e graxa",
      "Inspeção visual e dimensional para verificações de avarias, trincas, desgaste e corrosão",
      "Ensaios não destrutivos para identificar trincas ocultas",
      "Diagnóstico técnico para definir causa da falha e viabilidade da recuperação",
      "Teste funcional em bancada: pressão, vibração e ruído",
      "Ajuste final: alinhamento e torque",
    ],
    specificServices: [
      "Usinagem: refazer diâmetros, faces e rasgos, corrigir ovalização de furos e acabamento superficial",
      "Recuperação dimensional: solda, metalização, embuchamento e recuperação de rosca",
      "Tratamento térmico: recuperação de dureza e alívio de tensões após solda",
      "Balanceamento: eixos, rotores e polias",
      "Tratamento superficial: primer + acabamento e proteção anticorrosiva",
    ],
  },
  {
    id: "usinagem-caldeiraria",
    title: "Usinagem & Caldeiraria",
    description:
      "Recuperação ou fabricação de peças ou subconjuntos conforme desenho ou amostra.",
    images: [
      "/img/MGH/cnc.JPG",
      "/img/MGH/IMG_20250703_145430.jpg",
      "/img/MGH/TAMBOR DE CORREIA.jpg",
      "/img/MGH/IMG_20250703_150038.jpg",
      "/img/MGH/EIXO DA PRANCHA.jpg",
      "/img/MGH/VOLANTE DE INERCIA.jpg",
      "/img/MGH/UNIDADE DE EXTRASÃO E DESMPENHO - LINGOTAMENTO CONTINUO.jpg",
      "/img/MGH/CARRO TRANSPORTADOR RESFRIADOR DOS ROLOS.jpg",
      "/img/MGH/DESTALONADOR DE PNEUS.jpg",
      "/img/MGH/MINERAÇÃO.jpg",
      "/img/MGH/sede 1.jpg",
      "/img/MGH/sede.jpg",
    ],
    applications: [
      "Componentes de máquinas ou linhas de produção: tanques, caçambas, tubulações, polias, eixos, engrenagens, volantes, tambor de correia",
      "Componentes de instalações industriais: estruturas de caldeiraria de pequeno, médio e grande porte, pórticos, gaiolas",
    ],
    commonServices: [
      "Confecção de peças conforme desenho ou amostra",
      "Recuperação dimensional e recondicionamento estrutural",
      "Soldagem, usinagem, ajuste e acabamento",
      "Inspeção final para garantia de desempenho e qualidade",
    ],
    specificServices: [
      "Fabricação de estruturas metálicas e conjuntos industriais",
      "Recuperação de componentes submetidos a desgaste, corrosão e deformação",
      "Serviços de usinagem para peças especiais e reparos mecânicos",
      "Pintura industrial e proteção anticorrosiva",
    ],
  },
];

function ServiceGallery({ images, title }: { images: string[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    if (thumbnailsRef.current) {
      const button = thumbnailsRef.current.children[index] as HTMLElement | undefined;
      button?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  const prevImage = () => {
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    goToIndex(nextIndex);
  };

  const nextImage = () => {
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    goToIndex(nextIndex);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#DDE7E3] bg-[#F4F8F7] shadow-sm">
      <div className="bg-[#edf3f1] p-2 md:p-3">
        <div className="flex max-h-[70vh] items-center justify-center overflow-hidden rounded-xl bg-[#edf3f1] md:max-h-[78vh]">
          <img
            src={images[activeIndex]}
            alt={`${title} - imagem ${activeIndex + 1}`}
            className="block h-auto max-h-[70vh] w-full object-contain md:max-h-[78vh]"
            loading={activeIndex === 0 ? "eager" : "lazy"}
            draggable={false}
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-[#E7EFEA] bg-white px-3 py-3 md:px-4">
        <button
          type="button"
          onClick={prevImage}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DDE7E3] bg-[#F7FAF9] text-lg font-bold text-dark-900 transition hover:bg-dark-100"
          aria-label={`Imagem anterior de ${title}`}
        >
          ←
        </button>

        <div
          ref={thumbnailsRef}
          className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scroll-smooth px-1 py-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x", scrollbarWidth: "none" }}
        >
          {images.map((image, index) => (
            <button
              key={`${title}-${image}`}
              type="button"
              onClick={() => goToIndex(index)}
              className={`relative h-16 w-24 shrink-0 snap-start overflow-hidden rounded-lg border bg-[#edf3f1] transition-all ${
                index === activeIndex
                  ? "border-primary-600 ring-2 ring-primary-200"
                  : "border-[#DDE7E3] opacity-80 hover:opacity-100"
              }`}
              aria-label={`Selecionar imagem ${index + 1} de ${title}`}
            >
              <img
                src={image}
                alt={`${title} - miniatura ${index + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={nextImage}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DDE7E3] bg-[#F7FAF9] text-lg font-bold text-dark-900 transition hover:bg-dark-100"
          aria-label={`Próxima imagem de ${title}`}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default function ServicosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-dark-900 to-dark-800 py-20 text-white md:py-28">
          <Container className="text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Nossos Serviços</h1>
          </Container>
        </section>

        <section className="section-padding bg-white">
          <Container>
            <SectionTitle
              title="Categorias de Serviços"
              subtitle="Explore nossas três principais áreas de atuação"
              className="mb-8"
            />

            <div className="space-y-6">
              {serviceGroups.map((group, index) => (
                <AnimatedSection key={group.id} delay={index * 0.1}>
                  <div
                    id={group.id}
                    className="scroll-mt-24 rounded-2xl border border-[#DDE7E3] bg-[#F7FAF9] p-5 shadow-sm md:scroll-mt-28 md:p-7"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-flex h-3 w-3 rounded-full bg-[#8BC53F]" />
                      <h2 className="text-2xl font-bold text-dark-900 md:text-3xl">{group.title}</h2>
                    </div>

                    <p className="mb-5 text-sm leading-6 text-dark-700 md:text-base md:leading-7">
                      {group.description}
                    </p>

                    <div className="grid gap-5 lg:grid-cols-[1.15fr_1.85fr] lg:items-center">
                      <ServiceGallery images={group.images} title={group.title} />

                      <div className="rounded-xl bg-white p-4 shadow-sm md:p-5">
                        <h3 className="mb-3 text-lg font-bold text-dark-900">Aplicações</h3>
                        <ul className="space-y-2.5">
                          {group.applications.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-dark-700 md:text-base">
                              <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                      <div className="rounded-xl bg-white p-4 shadow-sm md:p-5">
                        <h3 className="mb-3 text-lg font-bold text-dark-900">Serviços executados</h3>
                        <ul className="space-y-2.5">
                          {group.commonServices.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-dark-700 md:text-base">
                              <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#8BC53F]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl bg-white p-4 shadow-sm md:p-5">
                        <h3 className="mb-3 text-lg font-bold text-dark-900">Serviços específicos</h3>
                        <ul className="space-y-2.5">
                          {group.specificServices.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-dark-700 md:text-base">
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
      </main>
      <Footer />
    </div>
  );
}
