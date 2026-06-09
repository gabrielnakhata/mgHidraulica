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
                href="mailto:comercial@mghidraulica.com.br"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 3.2l-8 5.6-8-5.6V6l8 5.6L20 6v1.2z" />
                </svg>
              </a>

              <a
                href="https://wa.me/553171749738?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.53 0 .21 5.31.21 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.83 11.83 0 005.66 1.45h.01c6.53 0 11.85-5.31 11.85-11.85 0-3.16-1.23-6.13-3.4-8.44zM12.07 21.7a9.8 9.8 0 01-5-1.37l-.36-.21-3.8 1 1.02-3.7-.23-.38a9.76 9.76 0 01-1.5-5.2c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 016.96 2.89 9.8 9.8 0 012.89 6.96c0 5.44-4.42 9.86-9.84 9.86zm5.4-7.37c-.3-.15-1.75-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.52s1.08 2.93 1.23 3.13c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/mg-hidr%C3%A1ulica-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

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