# Services Spec

## Objetivo

Apresentar claramente os servicos oferecidos pela GSP Consultoria.

## Servicos atuais

- Software sob medida.
- Integracoes e Automacoes.
- Modernizacao de Sistemas.
- Consultoria Tecnica.

## Elementos

- Titulo de secao orientado a eficiencia operacional.
- Texto de apoio sobre substituicao de planilhas, automacao de tarefas e centralizacao de informacoes.
- Grid responsivo de cards.
- Icones de `lucide-react` para cada servico.
- Metricas de apoio: disponibilidade, anos de experiencia e codigo proprio.

## Fonte de conteudo

Estado atual: a lista de servicos esta declarada em `src/components/sections/Services.tsx`.

Evolucao recomendada: migrar a lista para `src/data/services.ts` quando a secao for alterada novamente, mantendo o comportamento atual.

## Criterios de aceite

- Cada card tem titulo, descricao e icone.
- Layout responsivo em grid.
- Copy deve manter foco em software sob medida, integracoes, automacoes, modernizacao e consultoria.
- Metricas nao devem criar promessas comerciais nao sustentadas.
