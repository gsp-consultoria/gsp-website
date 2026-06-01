# Regras gerais do projeto

## Objetivo

Manter uma landing page institucional profissional, simples de manter e pronta para conversão comercial.

## Regras obrigatórias

- Priorize clareza, performance e acessibilidade.
- Toda mudança estrutural deve preservar a organização em `components/ui`, `components/layout` e `components/sections`.
- Toda seção da landing page deve ter um `id` estável para navegação por âncora.
- Evite overengineering. Landing page não precisa de estado global, cache client-side, roteamento complexo ou backend.
- Componentes reutilizáveis devem ficar em `src/components/ui`.
- Componentes específicos de seção devem ficar em `src/components/sections`.
- Conteúdos repetíveis devem ficar em `src/data`.
- Constantes de marca, navegação e contato devem ficar em `src/lib/constants.ts`.

## Antes de finalizar

Execute mentalmente a checklist:

- A mudança melhora a página ou só adiciona complexidade?
- O código está fácil de ler?
- O componente tem responsabilidade única?
- O layout continua responsivo?
- O texto continua alinhado ao posicionamento da GSP Consultoria?
