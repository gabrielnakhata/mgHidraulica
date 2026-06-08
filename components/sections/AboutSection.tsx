"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import IconBox from "@/components/ui/IconBox";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  const benefits = [
    {
      icon: "⚡",
      title: "Minimizar Impactos",
      description: "Soluções que reduzem interrupções nos processos produtivos",
    },
    {
      icon: "💰",
      title: "Reduzir Custos",
      description:
        "Manutenção e reposição de componentes com preços compatíveis",
    },
    {
      icon: "⏱️",
      title: "Prazos Compatíveis",
      description: "Entregas dentro dos prazos necessários para suas operações",
    },
    {
      icon: "✅",
      title: "Confiabilidade",
      description: "Eficiência e satisfação garantidas em cada solução",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Quem Somos"
          subtitle="Mais de 30 anos de excelência em soluções industriais"
        />

        {/* Conteúdo com Imagem */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimatedSection>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
                alt="Soluções Industriais MG Hidráulica"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="delay-200">
            <p className="text-lg text-dark-700 leading-relaxed mb-6">
              A MG HIDRÁULICA – MECÂNICA INDUSTRIAL é uma empresa fornecedora de
              soluções técnicas em mecânica industrial, que disponibiliza serviços
              e produtos diversificados que alcançam áreas distintas da atividade
              industrial e diversos setores da economia.
            </p>
            <p className="text-lg text-dark-700 leading-relaxed mb-8">
              Combinamos tradição com inovação, oferecendo soluções completas que
              aumentam a eficiência operacional de nossos clientes.
            </p>
            <div className="space-y-4">
              {[
                "Mais de 30 anos de experiência",
                "Equipe especializada e qualificada",
                "Produtos de alta qualidade",
                "Suporte técnico contínuo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-dark-700">
                  <span className="text-primary-600 font-bold text-lg">✓</span>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Benefícios em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} delay={index * 0.1}>
              <IconBox
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
