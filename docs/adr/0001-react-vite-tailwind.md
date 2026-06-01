# ADR 0001 — React + Vite + Tailwind CSS

## Status

Aceito

## Contexto

A GSP Consultoria precisa de uma landing page institucional profissional, rápida e fácil de manter.

## Decisão

Usar:

- React com TypeScript para componentização.
- Vite para desenvolvimento e build.
- Tailwind CSS para estilização.
- Vitest e React Testing Library para testes.

## Consequências

### Positivas

- Setup simples.
- Boa experiência de desenvolvimento.
- Build estático fácil de hospedar.
- Componentes reutilizáveis.
- Baixo acoplamento.

### Negativas

- SEO avançado pode exigir cuidado adicional por ser SPA.
- Não há geração estática por rota como em frameworks full-stack.

## Alternativas consideradas

- Next.js: mais poderoso, porém mais complexo para a necessidade inicial.
- Astro: excelente para landing pages, mas foge da stack principal desejada.
- HTML estático: simples, mas menos evolutivo para componentização.
