import { company } from '../../lib/constants';
import { buildWhatsAppUrl } from '../../lib/utils';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function Contact() {
  const contactUrl = buildWhatsAppUrl(
    company.whatsapp,
    'Olá, Gabriel! Quero solicitar um diagnóstico para minha empresa.',
  );

  return (
    <section id="contato" className="scroll-mt-24 py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#011b7c] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e3f3fe]">Contato</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Vamos transformar uma dor operacional em software?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Envie uma mensagem contando brevemente o que sua empresa precisa automatizar, integrar ou construir.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={contactUrl} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </ButtonLink>
            <ButtonLink href={`mailto:${company.email}`} variant="secondary">
              Enviar e-mail
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
