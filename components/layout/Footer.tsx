"use client";

import Link from "next/link";
import Image from "next/image";
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
    <footer className="mt-20 bg-gradient-to-r from-[#1F4A72] via-[#255B88] to-[#1F4A72] text-white">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <div className="mb-5 flex items-center">
              <Image
                src="/img/logo.png"
                alt="MG Hidráulica"
                width={72}
                height={72}
                className="h-16 w-16 rounded-full bg-white object-contain p-1"
              />

              <div className="ml-4">
                <div className="text-xl font-bold text-white">
                  MG Hidráulica
                </div>
                <div className="text-sm font-semibold text-[#8BC53F]">
                  Desde 1990
                </div>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              Há mais de 30 anos oferecendo soluções industriais de qualidade em
              hidráulica, pneumática, usinagem e caldeiraria.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="mailto:contato@mghidraulica.com.br"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="Email"
              >
                @
              </a>

              <a
                href="https://wa.me/5531000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="WhatsApp"
              >
                W
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
                {section.title}
              </h4>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-white/75 transition-colors hover:text-[#8BC53F]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/60">
              © {currentYear} MG Hidráulica - Mecânica Industrial. Todos os
              direitos reservados.
            </p>

            <p className="text-sm text-white/55">
              Betim • Minas Gerais • Brasil
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}