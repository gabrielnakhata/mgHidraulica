"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/ui/PageTransition";
import Container from "@/components/ui/Container";
import PhraseCarousel from "@/components/ui/PhraseCarousel";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import WhyRefurbishSection from "@/components/sections/WhyRefurbishSection";

const adPhrases = [
  // FRASES PRINCIPAIS
  "Mais de 30 anos transformando experiência em resultados que mantêm a sua operação em funcionamento.",
  "Reduza o tempo de parada dos seus equipamentos com quem entrega qualidade no menor prazo possível.",
  "Seu equipamento merece uma reforma executada com precisão técnica, agilidade e total confiabilidade.",
  "Entregamos soluções industriais com o equilíbrio ideal entre qualidade, prazo e custo-benefício.",
  "Cada serviço é executado em conformidade com as especificações técnicas e as necessidades específicas de cada cliente.",
  "Nossa eficiência nos processos reduz prazos sem abrir mão da qualidade que sua operação exige.",
  "Mais do que reformar equipamentos, devolvemos desempenho, confiabilidade e produtividade ao seu processo.",
  "Preço justo, excelência técnica e compromisso com os prazos: a combinação que gera valor para sua empresa.",
  "Quando o tempo é crítico, nossa agilidade faz a diferença para o seu negócio.",
  "Somos o parceiro ideal para empresas que não podem parar e exigem resultados consistentes.",
  "Experiência consolidada, equipe especializada e processos padronizados para entregar sempre o melhor resultado.",
  "Sua produção merece um fornecedor comprometido com qualidade, precisão e pontualidade.",
  "Nossa missão é prolongar a vida útil dos seus equipamentos com serviços executados no mais alto padrão técnico.",
  "Atendimento rápido, soluções sob medida e compromisso total com a satisfação do cliente.",
  "Escolha uma empresa que une tradição, inovação e excelência para entregar serviços industriais com máxima confiabilidade.",
  "Há mais de 30 anos recuperando desempenho, reduzindo custos e entregando soluções industriais com agilidade, qualidade e confiança.",
  
  // FRASES COM ABORDAGEM AMBIENTAL
  "Reformar é preservar valor: restauramos o desempenho dos seus componentes, reduzimos custos e contribuímos para um futuro mais sustentável.",
  "Acreditamos que um componente industrial pode ter uma nova vida com a mesma confiabilidade, gerando economia para sua empresa e reduzindo o descarte de materiais.",
  "Recuperar em vez de substituir é uma escolha inteligente: mais economia, menos desperdício e o mesmo compromisso com a performance.",
  "Transformamos componentes usados em equipamentos prontos para novos desafios, unindo desempenho, economia e responsabilidade ambiental.",
  
  // SLOGANS - QUALIDADE E CONFIANÇA
  "Mais desempenho. Menos paradas. Melhor custo-benefício.",
  "Experiência que gera confiança. Tecnologia que entrega resultados.",
  "Recuperamos componentes. Mantemos a indústria em movimento.",
  "Qualidade que gera confiança.",
  
  // SLOGANS - AGILIDADE
  "Menos tempo parado. Mais produtividade.",
  "Agilidade para quem não pode esperar.",
  "Rapidez que impulsiona resultados.",
  "Seu equipamento pronto no menor prazo possível.",
  
  // SLOGANS - ECONOMIA E SUSTENTABILIDADE
  "Recuperar é economizar e preservar.",
  "Uma nova vida para seus equipamentos.",
  "Desempenho renovado. Custos reduzidos.",
  "Economia inteligente. Sustentabilidade real.",
  "Reformar é investir no futuro.",
  
  // SLOGANS - EXPERIÊNCIA
  "Mais de 30 anos de soluções industriais.",
  "Tradição, inovação e resultados.",
  "Experiência que entrega performance.",
  "O parceiro certo para sua indústria.",
  "Compromisso com resultados, todos os dias.",
  
  // FINAL
  "Quando a produção não pode parar, a MG entrega a solução.",
];

export default function WhyRefurbishPage() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-20">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary-900 via-dark-800 to-dark-900 text-white py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
            </div>

            <Container className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto text-center"
              >
                <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-400/50 rounded-full text-primary-200 text-sm font-semibold mb-6">
                  Decisão Inteligente
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Decisão Inteligente
                </h1>
                <p className="text-xl text-primary-200 mb-8">
                  Transforme essa decisão em vantagem competitiva para seu
                  negócio
                </p>
              </motion.div>
            </Container>
          </section>

          {/* Phrase Carousel - Ad Style */}
          <section className="bg-white py-12 md:py-16 border-b border-dark-200">
            <Container>
              <PhraseCarousel phrases={adPhrases} interval={6000} />
            </Container>
          </section>

          {/* Main Content */}
          <WhyRefurbishSection />

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-20">
            <Container className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pronto para Reformar?
                </h2>
                <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                  Entre em contato conosco e descubra como podemos ajudar a
                  maximizar o desempenho dos seus equipamentos com soluções de
                  reforma personalizadas.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contato">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
                    >
                      Solicite um Orçamento
                    </Button>
                  </Link>
                  <Link href="/empresa">
                    <Button
                      size="lg"
                      className="bg-white text-primary-600 hover:bg-dark-100 font-semibold"
                    >
                      Conheça Nossa Empresa
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
