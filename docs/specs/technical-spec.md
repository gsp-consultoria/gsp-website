# Technical Spec — Landing Page

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Vitest
- React Testing Library
- GitHub Actions

## Decisões técnicas

- Aplicação SPA estática.
- Navegação por âncoras.
- Componentes orientados por seção.
- Sem roteamento nesta fase.
- Sem gerenciamento global de estado.
- Sem backend nesta fase.

## Estrutura

A estrutura principal deve seguir o contrato descrito em `AGENTS.md`.

## Padrão de conteúdo

- Conteúdo repetível em `src/data`.
- Constantes globais em `src/lib/constants.ts`.
- Utilitários puros em `src/lib/utils.ts`.

## Qualidade

Todo código novo deve passar em:

```bash
npm run lint
npm run test
npm run build
```

## Riscos

| Risco | Mitigação |
|---|---|
| Copy genérica demais | Manter foco em software sob medida, automação e integração. |
| Excesso de bibliotecas | Aprovar dependências novas apenas com justificativa. |
| Landing page pesada | Otimizar imagens e evitar animações complexas. |
| Baixa conversão | CTAs claros e contato visível. |
