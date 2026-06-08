"use client";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/20 border border-primary-400/50 rounded-full text-primary-200 text-sm font-semibold">
              Mais de 30 anos de tradição
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-white drop-shadow-lg"
          >
            HÁ MAIS DE 30 ANOS<br />
            OFERECENDO SOLUÇÕES<br />
            INDUSTRIAIS
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-8 text-primary-200 font-semibold">
            HIDRÁULICA • PNEUMÁTICA • USINAGEM • CALDEIRARIA
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Somos fornecedores de ideias e soluções industriais. Fabricar e
            reformar são a materialização desta missão.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-dark-900 font-semibold"
            >
              Conheça a Empresa
            </Button>
            <Button size="lg" className="bg-primary-600 hover:bg-primary-700 font-semibold">
              Solicite um Orçamento
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
