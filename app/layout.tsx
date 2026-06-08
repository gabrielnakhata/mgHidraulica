import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MG Hidráulica - Mecânica Industrial",
  description:
    "Há mais de 30 anos oferecendo soluções industriais em hidráulica, pneumática, usinagem e caldeiraria.",
  keywords: [
    "hidráulica industrial",
    "cilindros hidráulicos",
    "mecânica industrial",
    "usinagem industrial",
    "caldeiraria",
    "Betim MG",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.mghidraulica.com.br",
    siteName: "MG Hidráulica - Mecânica Industrial",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-dark-900 antialiased">
        {children}
      </body>
    </html>
  );
}
