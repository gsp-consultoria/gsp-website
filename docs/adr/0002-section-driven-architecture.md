# ADR 0002 — Arquitetura orientada por seções

## Status

Aceito

## Contexto

Landing pages são naturalmente organizadas por blocos de comunicação: Header, Hero, Serviços, Processo, Sobre, Tecnologias, Contato e Footer.

## Decisão

Organizar componentes em:

- `components/ui` para componentes genéricos.
- `components/layout` para Header e Footer.
- `components/sections` para blocos da landing page.
- `data` para listas e conteúdo repetível.
- `lib` para constantes e utilitários.

## Consequências

- Fácil localizar e alterar seções.
- Baixa complexidade.
- Boa compatibilidade com Spec Driven Design.
- Evita arquitetura excessiva para um projeto simples.
