# Setup do Projeto MG Hidráulica

## Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

## Instalação

### 1. Instalar dependências
```bash
npm install
# ou
yarn install
```

### 2. Configurar variáveis de ambiente
```bash
cp .env.example .env.local
# Editar .env.local com suas configurações
```

### 3. Executar em desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

Acesse http://localhost:3000

## Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa linter
- `npm run type-check` - Verifica tipos TypeScript

## Estrutura Atual

Página Home completamente funcional com:
- ✅ Hero section
- ✅ About section
- ✅ Services section
- ✅ Clients section
- ✅ Timeline section
- ✅ CTA section
- ✅ Header com menu responsivo
- ✅ Footer

## Próximos Passos

1. Criar página /empresa
2. Criar página /servicos com sub-páginas
3. Criar página /contato com formulário
4. Integrar imagens (Unsplash/Pexels/Pixabay)
5. Implementar formulário de contato funcional
6. Otimizações de SEO
7. Testes e deploy

## Contato
Para dúvidas sobre o projeto, consulte a SPEC.md
