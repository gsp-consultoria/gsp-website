# GSP Consultoria Landing Page

## Objetivo

Landing page institucional da **GSP Consultoria**, criada para apresentar a empresa, reforçar autoridade técnica e converter visitantes em contatos comerciais.

A página deve comunicar de forma clara que a GSP Consultoria desenvolve **software sob medida**, integrações, automações e soluções digitais para empresas que querem evoluir seus processos com tecnologia.

Slogan base utilizado no projeto:

> Software sob medida para empresas que querem evoluir.

## Stack

- **React** com **TypeScript**
- **Vite** como build tool e dev server
- **Tailwind CSS** para estilização utilitária
- **Vitest** para testes unitários e de componentes
- **React Testing Library** para testes orientados ao comportamento do usuário
- **ESLint** para qualidade estática do código
- **GitHub Actions** para CI

## Como rodar localmente

Pré-requisitos:

- Node.js 22 LTS ou superior
- npm 10 ou superior

Passos:

```bash
npm install
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:5173
```

Build de produção:

```bash
npm run build
npm run preview
```

## Variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local` e ajuste os valores conforme o ambiente.

```bash
cp .env.example .env.local
```

Variáveis previstas:

| Variável | Obrigatória | Descrição |
|---|---:|---|
| `VITE_COMPANY_NAME` | Sim | Nome comercial exibido na landing page. Valor padrão sugerido: `GSP Consultoria`. |
| `VITE_CONTACT_EMAIL` | Sim | E-mail principal de contato comercial. |
| `VITE_WHATSAPP_NUMBER` | Sim | Número de WhatsApp no formato internacional, sem espaços. |

Informações pendentes para finalizar o README:

- URL oficial de produção.
- Domínio oficial que será apontado via Cloudflare.

## Arquitetura

O projeto segue uma arquitetura simples, escalável e orientada a seções, adequada para landing pages profissionais.

```txt
src/
  assets/
  components/
    ui/
      Button.tsx
      Card.tsx
      Container.tsx
      SectionTitle.tsx
    layout/
      Header.tsx
      Footer.tsx
    sections/
      Hero.tsx
      Services.tsx
      About.tsx
      Process.tsx
      Technologies.tsx
      Contact.tsx
  data/
    services.ts
    technologies.ts
  lib/
    constants.ts
    utils.ts
  styles/
    global.css
  App.tsx
  main.tsx
```

Princípios arquiteturais:

- Componentes pequenos, reutilizáveis e com responsabilidade única.
- Conteúdo estático centralizado em `src/data` quando fizer sentido.
- Constantes globais centralizadas em `src/lib/constants.ts`.
- Estilização com Tailwind CSS, evitando CSS global desnecessário.
- Sem acoplamento prematuro com CMS, backend ou analytics.
- Acessibilidade, performance e SEO tratados como requisitos de produto, não como etapa final.

## Testes

Rodar testes:

```bash
npm run test
```

Rodar testes com interface:

```bash
npm run test:ui
```

Rodar validação completa:

```bash
npm run validate
```

Critérios mínimos:

- Header renderiza navegação principal.
- Hero renderiza proposta de valor e CTA.
- Seções principais existem na página.
- CTA de contato aponta para o canal configurado.
- Componentes críticos possuem testes de comportamento.

## Deploy

Estratégia escolhida:

- Build e hospedagem estática na **Vercel**.
- **Cloudflare** para DNS/domínio e, se desejado, proxy/CDN na frente do domínio.
- Pipeline de CI no GitHub Actions executando `lint`, `test` e `build` antes do merge.
- Ambiente de preview por Pull Request via Vercel.

Configuração da Vercel:

| Campo | Valor |
|---|---|
| Framework Preset | Vite |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

Variáveis de ambiente para configurar na Vercel:

| Variável | Descrição |
|---|---|
| `VITE_COMPANY_NAME` | Nome comercial exibido na landing page. |
| `VITE_CONTACT_EMAIL` | E-mail principal de contato comercial. |
| `VITE_WHATSAPP_NUMBER` | Número de WhatsApp no formato internacional, sem espaços. |

Configuração da Cloudflare:

1. Adicione o domínio na Vercel e siga as instruções exibidas para o domínio escolhido.
2. Na Cloudflare, crie ou ajuste os registros DNS apontando para a Vercel conforme as instruções da Vercel.
3. Após validar o domínio na Vercel, mantenha SSL/TLS ativo na Cloudflare.
4. Não adicione tokens, chaves de API ou segredos da Cloudflare ao repositório.

Pendente de decisão:

- Domínio oficial.
- Uso ou não do proxy da Cloudflare para o domínio final.

## Responsáveis

- **Gabriel Souza de Paula** — responsável técnico e proprietário da GSP Consultoria.
- E-mail: `gabriel_souza33@hotmail.com`
