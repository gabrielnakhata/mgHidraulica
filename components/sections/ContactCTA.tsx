"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            São mais de 30 anos de tradição e muito respeito ao cliente.
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Estamos prontos para fornecer soluções industriais de qualidade para
            sua empresa.
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
            <Link href="/contato">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-dark-100"
              >
                Solicite um Orçamento
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
