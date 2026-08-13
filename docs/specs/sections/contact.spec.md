# Contact Spec

## Objetivo

Converter o visitante em conversa comercial.

## Elementos

- Headline orientada a acao: transformar uma dor operacional em software.
- Texto curto de convite.
- CTA para WhatsApp.
- CTA para e-mail.
- Icones de mensagem, e-mail e seta.
- Fundo escuro com destaque radial.

## Comportamento

- WhatsApp usa `VITE_WHATSAPP_NUMBER` via `company.whatsapp`.
- E-mail usa `VITE_CONTACT_EMAIL` via `company.email`.
- Mensagem de WhatsApp ja vem pre-preenchida por `buildWhatsAppUrl`.
- Link de WhatsApp abre em nova aba com `noopener noreferrer`.
- CTA de e-mail usa `mailto:`.

## Criterios de aceite

- CTA e visivel no mobile.
- Texto convida a iniciar conversa sem exigir formulario.
- Links de contato funcionam sem backend.
- O contato deve ser acessivel por `#contato`.
