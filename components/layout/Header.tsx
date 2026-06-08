"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Serviços", href: "/servicos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-dark-100"
            : "bg-white/95 backdrop-blur-md border-b border-dark-100/50"
        }`}
      >
        <Container className="py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div>
              <Image
                src="/img/logo.png"
                alt="MG Hidráulica"
                width={220}
                height={80}
                priority
                className="h-14 w-auto object-contain" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark-700 hover:text-primary-600 transition-colors font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contato">
              <Button variant="outline" size="sm" className="text-xs px-3">
                Fale Conosco
              </Button>
            </Link>
            <Link href="/contato">
              <Button size="sm" className="text-xs px-4 bg-primary-600 hover:bg-primary-700">
                Orçamento
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-dark-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isMobileMenuOpen ? "text-primary-600" : "text-dark-900"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </Container>
      </header>

      {/* Spacer para evitar conteúdo sob header */}
      <div className="h-16 md:h-20"></div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu
          navigation={navigation}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
