# ADR 0003 - Bibliotecas de icones e animacao

## Status

Aceito

## Contexto

A landing page evoluiu para uma experiencia visual mais rica, com icones, animacoes de entrada, bloco de digitacao no Hero e marquee de tecnologias. Esses elementos reforcam a percepcao de tecnologia e consultoria sem exigir backend ou um design system pesado.

## Decisao

Manter as seguintes bibliotecas:

- `lucide-react` para icones de interface, CTAs, servicos e elementos do Hero.
- `react-icons` para icones de tecnologias e marcas.
- `framer-motion` para animacoes de entrada pontuais.
- `react-type-animation` para a animacao de diagnostico no Hero.

Animacoes puramente estruturais e simples podem continuar em CSS, como o marquee da secao Tecnologias.

## Consequencias

### Positivas

- Melhora a percepcao visual da landing page.
- Evita criar icones ou animacoes complexas manualmente.
- Mantem a implementacao dentro do modelo SPA estatico.
- Permite reforcar a narrativa de diagnostico, tecnologia e evolucao.

### Negativas

- Aumenta o JavaScript enviado ao cliente.
- Exige cuidado para nao prejudicar acessibilidade, performance ou leitura.
- Pode criar dependencia visual excessiva se usada sem criterio.

## Regras de uso

- Animacoes devem ser pontuais e leves.
- Conteudo essencial nao pode depender exclusivamente de animacao.
- Icones nao devem substituir texto necessario para entendimento.
- Novas bibliotecas visuais continuam exigindo justificativa explicita.
