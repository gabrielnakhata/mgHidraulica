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
                  MG HIDRÁULICA
                </div>
                <div className="text-sm font-semibold text-[#8BC53F]">
                  Desde 1990
                </div>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-white/75">
              Soluções industriais sob medida para a sua necessidade
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
                href="https://www.instagram.com/mghidraulicaindustrial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.26 0c0 2.162 1.762 3.924 3.902 3.924 2.14 0 3.924-1.762 3.924-3.924 0-2.14-1.762-3.924-3.924-3.924-2.14 0-3.902 1.784-3.902 3.924zm9.276-5.604c0 .795.645 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44 0-.795-.645-1.44-1.44-1.44-1.44 0-1.44.645-1.44 1.44z"/>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/mg-hidr%C3%A1ulica-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-[#8BC53F] hover:text-[#1F4A72]"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
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