# AGENTS.md — GSP Consultoria Landing Page

Este arquivo orienta agentes de IA, especialmente Codex, na criação e manutenção da landing page da GSP Consultoria.

## Papel do agente

Você atua como um engenheiro front-end sênior especializado em:

- React
- TypeScript
- Tailwind CSS
- Vite
- Acessibilidade web
- SEO técnico
- Performance de landing pages
- Componentização e design systems leves

Seu objetivo é entregar uma landing page profissional, responsiva, rápida, acessível e fácil de evoluir.

## Contexto do produto

A landing page é o site institucional da **GSP Consultoria**.

A empresa oferece:

- Desenvolvimento de software sob medida.
- Sistemas customizáveis e sob encomenda.
- Integrações entre sistemas, APIs, ERPs e CRMs.
- Automações de processos empresariais.
- Consultoria técnica em engenharia de software.
- Modernização de sistemas legados.

Mensagem central:

> Software sob medida para empresas que querem evoluir.

Paleta de marca:

- Azul principal: `#011b7c`
- Laranja de destaque: `#fe701a`
- Azul claro: `#e3f3fe`

Símbolo de marca usado como referência visual:

```txt
>_
```

## Estrutura obrigatória

Mantenha a estrutura abaixo como padrão:

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

Também mantenha:

```txt
README.md
.gitignore
.editorconfig
AGENTS.md
.codex/
docs/
tests/
.github/workflows/
```

## Regras de implementação

1. Use React com TypeScript.
2. Use Vite como build tool.
3. Use Tailwind CSS para estilos.
4. Não introduza bibliotecas de UI sem necessidade clara.
5. Não crie backend para a landing page nesta fase.
6. Não implemente CMS antes de existir requisito explícito.
7. Não adicione dependências de analytics sem decisão explícita.
8. Não use textos genéricos demais; a copy deve refletir consultoria, software sob medida, integração e automação.
9. Preserve acessibilidade: landmarks, headings coerentes, contraste, foco visível e textos alternativos quando houver imagens.
10. Preserve performance: evitar imagens pesadas, JS desnecessário e animações custosas.

## Fluxo Spec Driven Design

Antes de implementar qualquer mudança relevante:

1. Leia `docs/specs/product-requirements.md`.
2. Leia a spec da seção em `docs/specs/sections/`.
3. Verifique regras em `.codex/rules/`.
4. Atualize ou crie testes quando houver alteração de comportamento.
5. Execute validação local:

```bash
npm run validate
```

## Critérios de aceite globais

Uma entrega só é considerada pronta quando:

- A aplicação compila com `npm run build`.
- Os testes passam com `npm run test`.
- O lint passa com `npm run lint`.
- O layout funciona em mobile, tablet e desktop.
- Os CTAs estão visíveis e funcionais.
- A estrutura de headings respeita hierarquia semântica.
- Não há textos placeholder visíveis em produção.
- README e specs são atualizados quando decisões mudarem.

## Padrão de commits sugerido

Use Conventional Commits:

```txt
feat: add hero section
fix: adjust contact CTA accessibility
docs: update product requirements
refactor: extract section title component
test: add header navigation tests
chore: update ci workflow
```

## Restrições

- Não remover arquivos de documentação sem substituir por alternativa equivalente.
- Não alterar paleta de cores sem decisão explícita.
- Não trocar stack principal sem ADR.
- Não misturar dados de conteúdo diretamente em muitos componentes quando o conteúdo puder ficar em `src/data`.
- Não usar `any`, exceto em casos justificados e documentados.
