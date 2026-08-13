# Product Requirements - GSP Consultoria Landing Page

## Visao

Criar uma landing page institucional que apresente a GSP Consultoria como parceira tecnica para empresas que precisam desenvolver software sob medida, integrar sistemas, automatizar processos e modernizar solucoes existentes.

## Publico-alvo

- Pequenas e medias empresas com processos manuais.
- Empresas que precisam de sistemas internos personalizados.
- Negocios que usam planilhas, ferramentas isoladas ou sistemas que nao conversam entre si.
- Gestores que precisam digitalizar a operacao sem contratar um time interno completo.

## Proposta de valor

A GSP Consultoria transforma problemas operacionais em sistemas digitais personalizados, com clareza tecnica, arquitetura sustentavel e foco em resultado de negocio.

Mensagem central:

```txt
Software sob medida para empresas que querem evoluir.
```

## Objetivos da pagina

1. Comunicar rapidamente o que a empresa faz.
2. Gerar confianca profissional.
3. Apresentar servicos de forma objetiva.
4. Explicar o processo de trabalho.
5. Reforcar capacidade tecnica com tecnologias relevantes.
6. Levar o visitante a iniciar conversa por WhatsApp ou e-mail.

## Secoes obrigatorias

- Header
- Hero
- Servicos
- Processo
- Sobre
- Tecnologias
- Contato
- Footer

## Funcionalidades implementadas

- Navegacao por ancoras para as secoes principais.
- Header sticky com logo em imagem, links de navegacao, CTA e menu mobile.
- Hero com CTA primario para WhatsApp, CTA secundario para Servicos e animacao visual inspirada em diagnostico tecnico.
- Cards de servicos com icones e copy orientada a software sob medida, integracoes, automacoes, modernizacao e consultoria tecnica.
- Bloco de metricas comerciais: disponibilidade, anos de experiencia e codigo proprio.
- Secao de processo com quatro etapas: Diagnostico, Planejamento, Construcao, Entrega e evolucao.
- Secao Sobre com pilares de posicionamento: diagnostico claro, entrega incremental e codigo sustentavel.
- Secao Tecnologias com carrossel/marquee de icones de stack.
- Secao Contato com links para WhatsApp e e-mail.
- Footer com marca, links uteis e copyright dinamico.

## Conversao principal

CTA primario:

```txt
Solicitar diagnostico
```

Canal inicial:

- WhatsApp configurado por `VITE_WHATSAPP_NUMBER`.

Mensagem inicial usada nos CTAs de WhatsApp:

```txt
Ola, Gabriel! Quero conversar sobre um projeto de software para minha empresa.
```

## Conversao secundaria

- Link para e-mail configurado por `VITE_CONTACT_EMAIL`.
- CTA de exploracao para `#servicos`.
- CTA do header e menu mobile para `#contato`.

## Requisitos nao funcionais

- Responsiva.
- Rapida.
- Acessivel.
- Facil de manter.
- Preparada para deploy estatico.
- Sem backend obrigatorio.
- Animacoes devem ser leves e nao podem impedir leitura ou navegacao.
- Links de contato devem funcionar sem JavaScript de backend.

## Fora de escopo inicial

- Blog.
- CMS.
- Area administrativa.
- Autenticacao.
- Formulario com backend proprio.
- Integracao com CRM.
- Analytics obrigatorio.
