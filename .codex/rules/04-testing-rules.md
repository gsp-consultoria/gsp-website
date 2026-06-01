# Regras de testes

## Stack

- Vitest
- React Testing Library
- `@testing-library/jest-dom`

## Estratégia

Teste comportamento percebido pelo usuário, não detalhes internos.

Priorize:

- Renderização das seções principais.
- Navegação por links/âncoras.
- CTAs de contato.
- Componentes reutilizáveis críticos.
- Garantia de que textos principais estão presentes.

Evite:

- Testar classes CSS de forma frágil.
- Snapshots grandes.
- Testes acoplados à implementação interna.

## Comandos

Antes de finalizar uma tarefa:

```bash
npm run lint
npm run test
npm run build
```

Ou:

```bash
npm run validate
```
