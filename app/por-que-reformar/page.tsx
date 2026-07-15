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
  "Soluções industriais sob medida para a sua necessidade.",
  "Reformamos, recuperamos e devolvemos performance aos seus equipamentos.",
  "Reduzimos o tempo de parada da sua produção.",
  "Recuperar é mais inteligente que substituir.",
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
                  Por que Reformar?
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
