# Header Spec

## Objetivo

Permitir navegacao rapida e reforcar a marca desde o primeiro contato.

## Conteudo

- Logo em imagem (`gsp_logo.png`).
- Nome da marca: GSP Consultoria.
- Links: Servicos, Processo, Sobre, Tecnologias, Contato.
- CTA: Fale conosco.
- Botao de menu mobile com icones de abrir e fechar.

## Comportamento

- Deve ficar visivel no topo durante rolagem (`sticky`).
- Deve usar `header` e `nav` semanticos.
- A navegacao desktop aparece a partir de `md`.
- O menu mobile abre e fecha por estado local.
- Ao clicar em um link no menu mobile, o menu deve fechar.
- Links devem apontar para ancoras validas.

## Acessibilidade

- Link da marca deve ter `aria-label` para voltar ao topo.
- Navegacao principal deve ter `aria-label`.
- Botao mobile deve ter `aria-label`.
- Foco visivel deve ser preservado nos links.

## Criterios de aceite

- `nav` desktop possui `aria-label`.
- CTA aponta para `#contato`.
- Header nao cobre conteudo de forma problematica.
- Menu mobile contem os mesmos links principais.
- Logo possui texto alternativo quando usada como marca.
