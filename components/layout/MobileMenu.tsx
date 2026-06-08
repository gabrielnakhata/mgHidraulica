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
    <div className="md:hidden border-t border-dark-100 bg-white">
      <Container className="py-4">
        <nav className="flex flex-col gap-4 mb-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-dark-700 hover:text-primary-500 transition-colors font-medium"
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
