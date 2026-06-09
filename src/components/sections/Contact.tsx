import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { company } from '../../lib/constants';
import { buildWhatsAppUrl } from '../../lib/utils';
  
export function Contact() {

  const contactUrl = buildWhatsAppUrl(
    company.whatsapp,
    'Olá, Gabriel! Quero conversar sobre um projeto de software para minha empresa.',
  );

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-[#020618] py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(143,66,25,0.18),transparent_50%)]" />

      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0A2DB8]/30 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <span className="mb-8 block text-sm font-bold uppercase tracking-widest text-zinc-300">
          CONTATO
        </span>

        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-b
            from-white/[0.03]
            to-white/[0.01]
            px-8
            py-24
            backdrop-blur-sm
          "
        >
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8F4219]/10 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Vamos transformar uma dor operacional
              <span className="block text-[#8F4219]">
                em software?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Envie uma mensagem contando brevemente o que sua
              empresa precisa automatizar, integrar ou construir.
              Em poucos minutos podemos entender o cenário e
              identificar o melhor caminho.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#8F4219]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(143,66,25,.45)]
                "
              >
                <MessageCircle size={20} />

                Chamar no WhatsApp

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href={`mailto:${company.email}`}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/10
                "
              >
                <Mail size={20} />
                Enviar e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}