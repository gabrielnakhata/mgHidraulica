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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto">
            Reformamos, recuperamos e devolvemos performance aos seus equipamentos.
          </h2>
          <Link href="/contato">
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
            >
              Fale Conosco
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
