"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  navigation: Array<{ name: string; href: string }>;
  onClose: () => void;
}

export default function MobileMenu({ navigation, onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-x-0 top-16 z-40 border-t border-dark-100 bg-white/95 shadow-lg backdrop-blur-md lg:hidden md:top-20">
      <Container className="py-4">
        <nav className="mb-4 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-dark-700 transition-colors hover:text-primary-500"
              onClick={onClose}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-2">
          <Link href="/contato" onClick={onClose}>
            <Button variant="outline" className="w-full">
              Fale Conosco
            </Button>
          </Link>
          <Link href="/contato" onClick={onClose}>
            <Button className="w-full">Solicitar Orçamento</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
