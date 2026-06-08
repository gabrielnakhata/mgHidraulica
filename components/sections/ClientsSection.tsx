"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import IconBox from "@/components/ui/IconBox";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ClientsSection() {
  const clients = [
    { icon: "⛏️", name: "Mineração" },
    { icon: "🚛", name: "Transporte" },
    { icon: "🏗️", name: "Construção Civil" },
    { icon: "🌾", name: "Agricultura" },
    { icon: "🔍", name: "Sondagem" },
    { icon: "🏭", name: "Indústria" },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle title="Nossos Clientes" />

        <AnimatedSection className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-dark-700 text-center leading-relaxed">
            Os clientes da MG HIDRÁULICA – MECÂNICA INDUSTRIAL são empresas dos
            segmentos industrial, transporte, sondagem, construção civil,
            agricultura, dentre outros.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <AnimatedSection key={client.name} delay={index * 0.1}>
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-dark-50 to-dark-100 hover:from-primary-50 hover:to-primary-100 transition-all duration-300 shadow-sm hover:shadow-md border border-dark-200 hover:border-primary-300 group">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{client.icon}</div>
                <p className="text-sm font-semibold text-dark-900 text-center group-hover:text-primary-600 transition-colors">
                  {client.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
