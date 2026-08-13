# Design System Spec

## Direcao visual

A identidade deve transmitir:

- Tecnologia.
- Confianca.
- Clareza.
- Modernidade.
- Consultoria premium, mas acessivel.

## Paleta

| Token | Hex | Uso |
|---|---|---|
| Brand Blue | `#011b7c` | Fundo institucional, blocos de destaque. |
| Brand Orange | `#fe701a` | CTA, detalhes, indicadores de acao. |
| Brand Sky | `#e3f3fe` | Detalhes claros, textos sobre azul, simbolo `>_`. |
| Dark Base | `#020618` | Fundo principal atual da landing page. |
| Deep Navy | `#01091F` | Blocos escuros internos e elementos tech. |

Observacao: a implementacao atual tambem usa `#8F4219` como laranja escurecido para destaques visuais. Novos componentes devem preferir `#fe701a` para CTAs primarios e reservar variacoes escuras para efeitos ou estados de apoio.

## Componentes base

- Button
- Card
- Container
- SectionTitle
- HeroTypingAnimation

## Iconografia

- Usar `lucide-react` para icones de interface, acoes e servicos.
- Usar `react-icons` para marcas de tecnologia quando necessario.
- Icones devem ter tamanho consistente, contraste suficiente e nao substituir texto essencial.

## Animacoes

- `framer-motion` pode ser usado para entradas sutis de secoes.
- `react-type-animation` e usado no Hero para simular diagnostico tecnico.
- A animacao `marquee` em CSS e usada na secao Tecnologias.
- Animacoes devem ser leves, nao bloquear interacao e nao esconder conteudo essencial.

## Regras visuais

- CTAs primarios usam laranja.
- Cards devem ter bordas suaves, fundo escuro/translucido e contraste suficiente.
- Secoes devem ter espacamento generoso.
- Evitar excesso de efeitos visuais.
- Preferir layouts claros e com hierarquia forte.
- O logo em imagem deve ter `alt` apropriado quando representar marca; no footer pode ser decorativo se o nome estiver ao lado.

## Tipografia

Usar fonte system UI inicialmente para evitar dependencias externas.

O CSS global referencia `Inter` como primeira opcao caso esteja disponivel no ambiente, com fallback para system UI. Nao ha dependencia externa de fonte.

Possivel evolucao futura:

- Inter
- Manrope
- Sora
- Space Grotesk

A escolha final de fonte deve ser documentada em ADR se mudar.
