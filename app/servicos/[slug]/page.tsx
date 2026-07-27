"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const serviceDetails: Record<string, any> = {
  "hidraulica": {
    title: "Hidráulica",
    icon: "💧",
    category: "Hidráulica",
    description:
      "Soluções completas em sistemas hidráulicos e pneumáticos",
    fullDescription: `A MG Hidráulica oferece soluções completas em sistemas hidráulicos e pneumáticos, com expertise de mais de 30 anos no mercado. Nossas soluções abrangem desde cilindros hidráulicos até bombas especializadas, tudo com rigoroso controle de qualidade.`,
    applications: [
      "Cilindros hidráulicos e pneumáticos (reforma e fabricação)",
      "Compressores e motores hidráulicos",
      "Suspensão de caminhões off-Road (óleo e nitrogênio)",
      "Unidades hidráulicas (comandos, válvulas, blocos)",
      "Martelos rompedores hidráulicos",
      "Bombas (pistão, engrenagem, palheta, centrífuga vertical e horizontal)",
    ],
    specifications: [
      "Componentes com pressão até 350 bar",
      "Diâmetros variados (10mm a 500mm)",
      "Compatibilidade com diversos óleos hidráulicos",
      "Acabamento anodizado e cromado",
      "Certificação ISO 9001",
    ],
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600",
    ],
  },
  "mecanica": {
    title: "Mecânica",
    icon: "⚙️",
    category: "Mecânica",
    description:
      "Componentes mecânicos de alta qualidade para indústria pesada",
    fullDescription: `Especializada em componentes mecânicos de alta qualidade para indústria pesada, a MG Hidráulica oferece soluções robustas e confiáveis. Desde conversores de torque até transmissões Caterpillar, garantimos performance excepcional.`,
    applications: [
      "Conversor de torque",
      "Comando final dos tratores D8T, D9T, D10 e D11",
      "Diferencial",
      "Peças de caminhões Off-Road (âncora, mancal, balança dianteira e traseira, 5ª roda, cubo da roda)",
      "Redutores de velocidade",
      "Redutores de locomoção",
      "Transmissão Caterpillar",
      "Trocador de calor",
    ],
    specifications: [
      "Componentes de alta resistência",
      "Eficiência acima de 90%",
      "Capacidade de redução até 1:1000",
      "Potências de 0.75 CV até 200 CV",
      "Carcaça em alumínio ou ferro fundido",
    ],
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600",
    ],
  },
  "usinagem": {
    title: "Usinagem & Caldeiraria",
    icon: "🛠️",
    category: "Usinagem e Caldeiraria",
    description:
      "Serviços especializados de usinagem de precisão e caldeiraria",
    fullDescription: `Oferecemos serviços especializados de usinagem de precisão e caldeiraria, com equipamentos de última geração e profissionais altamente qualificados. Cada projeto é executado com rigor técnico e excelência.`,
    applications: [
      "Usinagem de peças conforme desenho",
      "Recuperação de componentes metálicos (trincas, corrosão, desgaste, empeno...)",
      "Jateamento e pintura industrial",
    ],
    specifications: [
      "Tornos CNC e fresadoras de 5 eixos",
      "Tolerância até IT6",
      "Acabamento superficial Ra até 0.4 µm",
      "Soldagem MIG, TIG e eletrodo",
      "Capacidade de peças até 1 tonelada",
    ],
    images: [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600",
    ],
  },
  "cilindros-hidraulicos": {
    title: "Cilindros Hidráulicos e Pneumáticos",
    icon: "🔧",
    category: "Hidráulica",
    description:
      "Cilindros de alta precisão e resistência para aplicações industriais exigentes.",
    fullDescription: `Nossos cilindros hidráulicos e pneumáticos são fabricados com os melhores materiais 
    e tecnologias, garantindo durabilidade e eficiência. Atendemos a especificações personalizadas 
    para suas necessidades específicas.`,
    applications: [
      "Máquinas industriais",
      "Prensas e equipamentos de conformação",
      "Sistemas de elevação",
      "Equipamentos de construção",
      "Maquinário agrícola",
    ],
    specifications: [
      "Pressão máxima: até 350 bar",
      "Diâmetros variados (10mm a 500mm)",
      "Cursos customizáveis",
      "Acabamento anodizado ou cromado",
      "Certificado ISO 9001",
    ],
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600",
      "https://images.unsplash.com/photo-1581092162562-40038461b398?w=600",
    ],
  },
  "bombas-hidraulicas": {
    title: "Bombas Hidráulicas",
    icon: "💧",
    category: "Hidráulica",
    description:
      "Bombas hidráulicas de alta performance para sistemas de circulação e pressão.",
    fullDescription: `Contamos com uma ampla variedade de bombas hidráulicas: engrenagens, 
    palhetas e pistões. Todas fabricadas com rigoroso controle de qualidade e pronta para atender suas demandas.`,
    applications: [
      "Sistemas de circulação",
      "Unidades hidráulicas",
      "Prensas hidráulicas",
      "Equipamentos de movimentação",
      "Sistemas de ar comprimido",
    ],
    specifications: [
      "Diferentes tipos: engrenagem, palheta, pistão",
      "Capacidades de 5 cc/rev a 200 cc/rev",
      "Pressões até 280 bar",
      "Eficiência acima de 90%",
      "Motor elétrico acoplado opcional",
    ],
    images: [
      "https://images.unsplash.com/photo-1581092162562-40038461b398?w=600",
    ],
  },
  "motoredutores": {
    title: "Motoredutores",
    icon: "⚙️",
    category: "Mecânica",
    description:
      "Motoredutores de precisão para transmissão eficiente de potência.",
    fullDescription: `Nossos motoredutores combinam motores elétricos com redutores de precisão, 
    oferecendo soluções integradas para suas aplicações de transmissão de movimento.`,
    applications: [
      "Transportadores de correia",
      "Sistemas de elevação",
      "Guindastes e talhas",
      "Máquinas de processamento",
      "Equipamentos de mineração",
    ],
    specifications: [
      "Redução de 1:1 a 1:1000",
      "Potências de 0.75 CV até 200 CV",
      "Eficiência acima de 90%",
      "Carcaça em alumínio ou ferro fundido",
      "Montagem horizontal ou vertical",
    ],
    images: [],
  },
  caldeiraria: {
    title: "Caldeiraria Industrial",
    icon: "🏗️",
    category: "Usinagem e Caldeiraria",
    description:
      "Serviços de caldeiraria para estruturas e componentes metálicos robustos.",
    fullDescription: `Fabricamos estruturas, tanques, tubulações e componentes metálicos soldados 
    com qualidade certificada. Contamos com soldadores qualificados e processos controlados.`,
    applications: [
      "Estruturas de aço",
      "Tanques de armazenamento",
      "Tubulações industriais",
      "Estruturas para equipamentos",
      "Componentes soldados especiais",
    ],
    specifications: [
      "Soldagem: MIG, TIG, Eletrodo",
      "Corte: Oxicorte, plasma, laser",
      "Estruturas até 50 toneladas",
      "Acabamento: jateamento e pintura",
      "Certificação API e ASME disponível",
    ],
    images: [],
  },
  "recuperacao-componentes": {
    title: "Recuperação de Componentes",
    icon: "♻️",
    category: "Serviços Especiais",
    description:
      "Recuperação e restauração de componentes desgastados ou danificados.",
    fullDescription: `Recuperamos componentes industriais através de análise de falha, 
    usinagem de precisão e restauração. Uma alternativa econômica à substituição completa.`,
    applications: [
      "Eixos danificados",
      "Engrenagens desgastadas",
      "Pinos e buchas",
      "Componentes soldados trincados",
      "Peças de máquinas antigas",
    ],
    specifications: [
      "Inspeção com técnicas não-destrutivas",
      "Usinagem em dimensões maiores",
      "Revestimento metálico (quando necessário)",
      "Tratamento térmico",
      "Análise de raios-X e ultrassom",
    ],
    images: [],
  },
};

export default function ServicoDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Container className="py-20">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-dark-900 mb-4">
                Serviço não encontrado
              </h1>
              <p className="text-dark-600">
                O serviço que você está procurando não está disponível.
              </p>
            </div>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
      <section className="bg-gradient-to-r from-dark-900 to-dark-800 text-white py-20 md:py-32">
        <Container>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <p className="text-primary-300 font-semibold text-sm">
                {service.category}
              </p>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-dark-200 max-w-2xl">{service.description}</p>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <SectionTitle title="Sobre Este Serviço" centered={false} />
              <p className="text-lg text-dark-700 leading-relaxed mb-8">
                {service.fullDescription}
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg border border-primary-300">
              <h3 className="text-xl font-bold text-dark-900 mb-6">
                Especificações
              </h3>
              <ul className="space-y-3">
                {service.specifications.map((spec: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary-600 font-bold mt-1">✓</span>
                    <span className="text-dark-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-dark-50">
        <Container>
          <SectionTitle title="Aplicações" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.applications.map((app: string, index: number) => (
              <AnimatedSection key={app} delay={index * 0.1}>
                <Card className="flex items-center gap-4">
                  <span className="text-2xl">🎯</span>
                  <p className="text-dark-700 font-medium">{app}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interessado neste serviço?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir sua necessidade específica
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
          </div>
        </Container>
      </section>
      </main>
      <Footer />
    </div>
  );
}
