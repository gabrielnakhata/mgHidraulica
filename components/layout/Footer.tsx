"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "/empresa" },
        { name: "Nossa História", href: "/empresa#historia" },
        { name: "Missão, Visão e Valores", href: "/empresa#missao" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { name: "Hidráulica", href: "/servicos/hidraulica" },
        { name: "Mecânica", href: "/servicos/mecanica" },
        { name: "Usinagem", href: "/servicos/usinagem" },
      ],
    },
    {
      title: "Contato",
      links: [
        { name: "Solicitar Orçamento", href: "/contato" },
        { name: "Fale Conosco", href: "/contato" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-900 to-dark-950 text-white mt-20 border-t border-dark-800">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl flex items-center justify-center font-bold shadow-lg">
                MG
              </div>
              <div className="ml-3">
                <div className="font-bold text-white">MG Hidráulica</div>
                <div className="text-xs text-primary-400 font-semibold">
                  Desde 1990
                </div>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              Há mais de 30 anos oferecendo soluções industriais de qualidade.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {["📧", "🔗", "📱"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-dark-400 hover:text-primary-400 transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-dark-800 pt-8">
          <p className="text-dark-500 text-sm text-center">
            © {currentYear} MG Hidráulica - Mecânica Industrial. Todos os
            direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
