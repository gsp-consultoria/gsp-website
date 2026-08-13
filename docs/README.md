# Documentacao

Esta pasta concentra documentacao orientada a Spec Driven Design para a landing page da GSP Consultoria.

## Como usar

1. Comece por `docs/specs/product-requirements.md`.
2. Leia `docs/specs/technical-spec.md`.
3. Consulte a spec da secao em `docs/specs/sections/`.
4. Verifique os ADRs em `docs/adr/` quando houver decisao tecnica envolvida.
5. Use prompts em `.codex/prompts/` para guiar implementacao com Codex.
6. Use regras em `.codex/rules/` como contrato de qualidade.
7. Antes de abrir PR, revise `docs/checklists/pr-checklist.md`.

## Estado atual documentado

A documentacao reflete a landing page implementada com:

- Header sticky com navegacao desktop e menu mobile.
- Hero com CTA de WhatsApp, CTA para servicos e animacao de diagnostico.
- Secoes de Servicos, Processo, Sobre, Tecnologias, Contato e Footer.
- Icones via `lucide-react` e `react-icons`.
- Animacoes via `framer-motion`, `react-type-animation` e CSS.
- Contato configuravel por variaveis `VITE_CONTACT_EMAIL` e `VITE_WHATSAPP_NUMBER`.

## Dividas conhecidas

- Algumas listas repetiveis ainda estao dentro dos componentes de secao. A direcao preferencial continua sendo migrar conteudo repetivel para `src/data` em manutencoes futuras.
- A paleta documentada usa `#fe701a` como laranja principal; a implementacao atual tambem usa `#8F4219` como laranja escurecido de apoio.
