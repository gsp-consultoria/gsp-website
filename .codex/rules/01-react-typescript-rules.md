# Regras React e TypeScript

## Componentes

- Use function components.
- Use nomes em PascalCase para componentes.
- Use props tipadas explicitamente quando o componente receber dados.
- Evite componentes grandes. Extraia blocos reutilizáveis.
- Não use `React.FC` por padrão; prefira tipos explícitos de props.

## TypeScript

- Mantenha `strict: true`.
- Não use `any` sem justificativa.
- Prefira `type` para modelos simples de props e dados estáticos.
- Use `as const` para arrays de navegação e opções imutáveis quando fizer sentido.

## Estado

- Não introduza estado global.
- Use estado local apenas quando houver interação real.
- Não adicione bibliotecas como Redux, Zustand ou React Query nesta fase.

## Renderização

- Evite lógica complexa dentro do JSX.
- Extraia funções auxiliares para `src/lib/utils.ts` quando forem reutilizáveis.
- Preserve semântica HTML: `header`, `main`, `section`, `footer`, `nav`, `article`.
