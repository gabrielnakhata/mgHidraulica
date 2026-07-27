"use client";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ClientsSection() {
  const segments = [
    { icon: "⛏️", name: "Mineração" },
    { icon: "🚛", name: "Transporte" },
    { icon: "🏗️", name: "Construção Civil" },
    { icon: "🌾", name: "Agricultura" },
    { icon: "🔍", name: "Sondagem" },
    { icon: "🏭", name: "Indústria" },
  ];

const clientLogos = [
  {
    name: "Vale",
    url: "https://cdn.worldvectorlogo.com/logos/vale-logo-1.svg",
  },
  {
    name: "Anglo American",
    url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Anglo%20American%20logo.JPG",
  },
  {
    name: "Usiminas",
    url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Logotipo%20da%20Usiminas%20%282023%29.svg",
  },
  {
    name: "Epiroc",
    url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Epiroc%20logo.svg",
  },
  {
    name: "ArcelorMittal",
    url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ArcelorMittal.svg",
  },
  {
    name: "AngloGold Ashanti",
    url: "https://cdn.worldvectorlogo.com/logos/anglogold-ashanti-logo.svg",
  },
  {
    name: "Mosaic",
    url: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mosaic%20Logo.svg",
  },
  
];
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionTitle title="Nossos Clientes" />

        <AnimatedSection className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-dark-700 text-center leading-relaxed">
            Os clientes da MG HIDRÁULICA - MECÂNICA INDUSTRIAL são empresas dos
            segmentos industrial, transporte, sondagem, construção civil,
            agricultura, dentre outros.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {segments.map((segment, index) => (
            <AnimatedSection key={segment.name} delay={index * 0.1}>
              <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-dark-50 to-dark-100 hover:from-primary-50 hover:to-primary-100 transition-all duration-300 shadow-sm hover:shadow-md border border-dark-200 hover:border-primary-300 group">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{segment.icon}</div>
                <p className="text-sm font-semibold text-dark-900 text-center group-hover:text-primary-600 transition-colors">
                  {segment.name}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="border-t border-dark-200 pt-12 mt-12">
          <SectionTitle 
            title="Alguns de Nossos Clientes"
            subtitle=""
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 items-center mt-8">
            {clientLogos.map((client, index) => (
              <AnimatedSection key={client.name} delay={index * 0.05}>
                <div className="flex items-center justify-center p-4 rounded-lg bg-white border border-dark-100 hover:border-primary-300 transition-all hover:shadow-md">
                  <img 
                    src={client.url} 
                    alt={client.name}
                    className="h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
