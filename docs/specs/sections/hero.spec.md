# Hero Spec

## Objetivo

Comunicar a proposta de valor em poucos segundos e direcionar o visitante para diagnostico ou exploracao dos servicos.

## Mensagem principal

```txt
Software sob medida para empresas que querem evoluir.
```

## Elementos

- `h1` com o slogan.
- Texto complementar sobre transformar processos manuais, conectar ferramentas e construir solucoes escalaveis.
- Texto de apoio: consultoria, automacao e desenvolvimento sob medida.
- CTA primario para WhatsApp: `Solicitar diagnostico`.
- CTA secundario para `#servicos`: `Ver servicos`.
- Card visual escuro inspirado em interface tecnica.
- Animacao de diagnostico com digitacao e icones.
- Efeito visual de profundidade com blur e fundo escuro.

## Comportamento

- CTA primario deve usar `buildWhatsAppUrl`.
- Mensagem de WhatsApp deve vir pre-preenchida.
- Animacao de entrada usa `framer-motion`.
- Sequencia digitada usa `react-type-animation`.

## Criterios de aceite

- Existe apenas um `h1`.
- CTA primario abre contato por WhatsApp em nova aba.
- CTA secundario navega para `#servicos`.
- Hero e legivel em mobile.
- O bloco animado nao substitui informacao essencial.
