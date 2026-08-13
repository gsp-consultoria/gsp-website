# Process Spec

## Objetivo

Mostrar que a GSP Consultoria trabalha com metodo, previsibilidade e entregas incrementais.

## Etapas

1. Diagnostico.
2. Planejamento.
3. Construcao.
4. Entrega e evolucao.

## Elementos

- Titulo: `Um caminho claro do problema a solucao`.
- Texto de apoio sobre clareza, comunicacao objetiva e entregas incrementais.
- Cards numerados para cada etapa.
- Linha/elemento visual de timeline por meio de `ProcessTimeline`.
- Componente `ProcessCard` para cada etapa.

## Fonte de conteudo

Estado atual: a lista de etapas esta declarada em `src/components/sections/Process.tsx`.

Evolucao recomendada: migrar a lista para `src/data` se as etapas passarem a ser reutilizadas ou editadas com frequencia.

## Criterios de aceite

- Etapas numeradas.
- Texto objetivo.
- Visual transmite sequencia clara.
- Layout permanece legivel em mobile e desktop.
