# Regras Tailwind e Design System

## Paleta

Use a paleta da marca:

- `#011b7c` — azul principal
- `#fe701a` — laranja de ação/destaque
- `#e3f3fe` — azul claro para contraste e detalhes

## Tailwind

- Use classes utilitárias diretamente nos componentes.
- Evite criar CSS global para estilos que podem ser resolvidos com Tailwind.
- Use `src/styles/global.css` apenas para imports, tokens globais, seleção, scroll e base styles.
- Evite classes arbitrárias em excesso quando a classe padrão resolver bem.
- Mantenha espaçamentos consistentes entre seções: normalmente `py-24` ou equivalente.

## UI

- CTAs principais devem usar laranja.
- Fundos principais devem preservar sensação premium, tech e consultiva.
- Use cantos arredondados grandes em cards e blocos hero para reforçar visual moderno.
- Evite poluição visual: landing page deve parecer confiável, não experimental demais.

## Responsividade

- Mobile first.
- Testar mentalmente os breakpoints: mobile, tablet e desktop.
- Não criar navegação mobile complexa sem necessidade; se criar, deve ser acessível.
