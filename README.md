# mgHidraulica
site
Visão Geral
Desenvolver um template de site institucional moderno, elegante, responsivo, altamente reutilizável e preparado para personalização rápida para diferentes clientes.

O projeto deverá servir como base para futuros sites institucionais, permitindo alterar apenas arquivos de configuração e conteúdo sem necessidade de alterar a estrutura principal da aplicação.

Objetivos
Layout premium e moderno.

Excelente experiência em dispositivos móveis.

SEO-friendly.

Fácil manutenção.

Fácil reutilização.

Componentização máxima.

Performance elevada.

Estrutura preparada para crescimento futuro.

Preparado para integração com CMS futuramente.

Stack Tecnológica
Framework
Next.js (App Router)

Linguagem
TypeScript

Estilização
Tailwind CSS

Animações
Framer Motion

Componentes
Shadcn/UI

ou

Componentes próprios seguindo Design System interno

Formulários
React Hook Form

Validação
Zod

Estrutura de Diretórios
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FaqSection.tsx
│   │   └── ContactSection.tsx
│
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       ├── SectionTitle.tsx
│       ├── AnimatedSection.tsx
│       └── IconBox.tsx
│
├── config/
│   └── site.config.ts
│
├── lib/
│   ├── validations.ts
│   └── utils.ts
│
├── hooks/
│
├── types/
│
└── assets/
Configuração Centralizada
Criar:

src/config/site.config.ts
Toda informação institucional deve vir deste arquivo.

Exemplo:

export const siteConfig = {
  companyName: "",
  slogan: "",
  description: "",

  contact: {
    phone: "",
    whatsapp: "",
    email: "",
    address: ""
  },

  social: {
    instagram: "",
    linkedin: "",
    facebook: "",
    youtube: ""
  },

  navigation: [],

  services: [],

  testimonials: [],

  faq: []
};
Nenhuma informação institucional deve ficar hardcoded dentro dos componentes.

Design System
Diretrizes
Visual:

Premium

Corporativo

Elegante

Moderno

Clean

Características:

Muito espaço em branco

Cards suaves

Sombras discretas

Bordas arredondadas

Microinterações

Gradientes leves

Tipografia sofisticada

Responsividade
Desenvolver utilizando:

Mobile First
Breakpoints:

sm
md
lg
xl
2xl
Todos os componentes devem funcionar perfeitamente em:

Smartphones

Tablets

Notebooks

Monitores ultrawide

Seções Obrigatórias
Header
Funcionalidades:

Sticky

Transparente inicialmente

Alteração de estilo durante scroll

Menu desktop

Menu mobile

CTA principal

Hero Section
Conteúdo:

Headline principal

Subheadline

CTA principal

CTA secundário

Visual:

Forte impacto visual

Animações suaves

Elementos gráficos modernos

About Section
Objetivo:

Apresentar a empresa.

Elementos:

Texto institucional

Diferenciais

Imagem ou ilustração

Services Section
Exibir:

Serviços

Soluções

Especialidades

Layout:

Grid responsivo

Cards reutilizáveis

Benefits Section
Apresentar:

Benefícios

Diferenciais competitivos

Vantagens da empresa

Process Section
Fluxo sugerido:

Diagnóstico

Planejamento

Execução

Entrega

Layout tipo timeline.

Portfolio Section
Preparada para:

Cases

Projetos

Galeria

Inicialmente utilizar dados mockados.

Testimonials Section
Exibir:

Nome

Cargo

Empresa

Depoimento

Utilizar cards modernos.

FAQ Section
Accordion responsivo.

Contact Section
Campos:

Nome

Email

Telefone

Mensagem

Validação:

React Hook Form

Zod

Preparar para futura integração com:

Resend

EmailJS

API própria

Footer
Exibir:

Logo

Links rápidos

Redes sociais

Copyright

Animações
Utilizar Framer Motion.

Criar componente:

AnimatedSection
Animações recomendadas:

Fade In

Slide Up

Scale

Stagger Children

Evitar exageros.

Priorizar elegância.

SEO
Implementar:

export const metadata = {
  title: "",
  description: "",
  keywords: [],
  openGraph: {},
  robots: {}
};
Utilizar dados do site.config.ts.

Performance
Obrigatório:

next/image

Lazy loading

Componentização

Tree shaking

Otimização de imagens

Evitar:

Dependências desnecessárias

Bibliotecas pesadas

Dark Mode
Não implementar inicialmente.

Primeira versão:

Light Theme Only
Estruturar CSS para permitir implementação futura.

Acessibilidade
Implementar:

Labels

aria-label

Contraste adequado

Navegação por teclado

Critérios de Qualidade
O código deve:

Ser legível

Ser reutilizável

Seguir SOLID quando aplicável

Possuir tipagem completa

Não possuir warnings de TypeScript

Não possuir erros de ESLint

Critérios de Aceitação
O projeto será considerado concluído quando:

✓ Build sem erros

✓ Responsivo em todos os dispositivos

✓ Todas as seções implementadas

✓ Formulário validado com Zod

✓ Dados centralizados no site.config.ts

✓ Animações implementadas

✓ SEO básico configurado

✓ Código pronto para reutilização em novos clientes

Evoluções Futuras Planejadas
Fase 2:

Blog

CMS Headless

Área administrativa

Multi-idioma

Dark Mode

Integração WhatsApp Business

Analytics

Pixel Meta

Google Tag Manager

Fase 3:

Landing Pages dinâmicas

Gerador automático de páginas

White Label completo

Biblioteca própria de componentes institucionais

Template comercializável
