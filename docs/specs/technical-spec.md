# Technical Spec - Landing Page

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Vitest
- React Testing Library
- GitHub Actions

## Bibliotecas de interface em uso

- `lucide-react` para icones de navegacao, CTAs, servicos e animacao do Hero.
- `react-icons` para icones de tecnologias.
- `framer-motion` para animacoes de entrada em Hero e Sobre.
- `react-type-animation` para o bloco de diagnostico digitado no Hero.

Essas dependencias fazem parte da experiencia visual atual. Novas bibliotecas de UI continuam exigindo justificativa explicita.

## Decisoes tecnicas

- Aplicacao SPA estatica.
- Navegacao por ancoras.
- Componentes orientados por secao.
- Sem roteamento nesta fase.
- Sem gerenciamento global de estado.
- Sem backend nesta fase.
- Contato via links externos (`wa.me` e `mailto:`).
- Ancoragem com rolagem suave via CSS global.

## Estrutura

A estrutura principal deve seguir o contrato descrito em `AGENTS.md`.

Componentes auxiliares especificos de uma secao podem ficar em subpastas da propria secao, como `src/components/sections/process/`.

## Padrao de conteudo

- Constantes globais ficam em `src/lib/constants.ts`.
- Utilitarios puros ficam em `src/lib/utils.ts`.
- Conteudo repetivel deve preferencialmente ficar em `src/data`.
- Estado atual: algumas listas repetiveis ainda estao localizadas diretamente nos componentes (`Services`, `Process`, `Technologies` e `About`). Ao evoluir essas secoes, priorizar migracao para `src/data` sem alterar comportamento visual.

## Configuracao

Variaveis aceitas:

- `VITE_COMPANY_NAME`
- `VITE_CONTACT_EMAIL`
- `VITE_WHATSAPP_NUMBER`

Fallbacks atuais:

- Empresa: `GSP Consultoria`
- E-mail: `gabriel_souza33@hotmail.com`
- WhatsApp: `5513991910139`

## Estilos globais

- Tailwind CSS e tokens CSS em `src/styles/global.css`.
- `scroll-behavior: smooth` habilitado no `html`.
- Tema escuro como base (`color-scheme: dark`).
- Animacao `marquee` usada na secao Tecnologias.

## Qualidade

Todo codigo novo deve passar em:

```bash
npm run lint
npm run test
npm run build
```

Validacao completa:

```bash
npm run validate
```

## Riscos

| Risco | Mitigacao |
|---|---|
| Copy generica demais | Manter foco em software sob medida, automacao e integracao. |
| Excesso de bibliotecas | Aprovar dependencias novas apenas com justificativa. |
| Landing page pesada | Otimizar imagens, limitar animacoes e evitar assets grandes. |
| Animacoes afetarem acessibilidade | Garantir leitura, foco visivel e navegacao funcional mesmo com animacoes. |
| Baixa conversao | CTAs claros, contato visivel e links funcionais. |
| Conteudo duplicado em componentes | Migrar listas repetiveis para `src/data` quando houver manutencao dessas secoes. |
