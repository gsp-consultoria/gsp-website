import { company } from '../../lib/constants';
import { buildWhatsAppUrl } from '../../lib/utils';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { HeroTypingAnimation } from '../ui/HeroTypingAnimation';
import { motion } from "framer-motion"

export function Hero() {
  const contactUrl = buildWhatsAppUrl(
    company.whatsapp,
    'Olá, Gabriel! Quero conversar sobre um projeto de software para minha empresa.',
  );

  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-[#020618] py-28 md:pb-24 md:pt-8"
    >

      <div className="absolute bottom-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#0A2EFF]/30 blur-[140px]" />

      <motion.section
        initial={{
          opacity: 0,
          scale: 0.98,
          y: 45,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Container>
          <div className="mx-auto max-w-6xl">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Software sob medida para empresas que querem evoluir.
            </h1>

            <div className="relative mt-8 lg:pr-24">
            
              <div className="relative rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]
              before:absolute before:inset-0 before:rounded-[36px] before:bg-gradient-to-b before:from-black/[0.08] before:to-transparent
              before:pointer-events-none">

                <div className="mb-10 flex gap-3">
                  <div className="h-4 w-4 rounded-full bg-[#FE701A]" />
                  <div className="h-4 w-4 rounded-full bg-white" />
                  <div className="h-4 w-4 rounded-full bg-slate-700" />
                </div>

                <div className="max-w-2xl">
                  <h2 className="text-2xl font-medium leading-snug text-white md:text-3xl">
                    Transformando processos manuais em sistemas digitais,
                    conecte ferramentas e construa soluções que crescem junto
                    com o seu negócio.
                  </h2>

                  <p className="mt-6 text-base font-semibold text-slate-400">
                    Consultoria, automação e desenvolvimento sob medida
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <ButtonLink
                      href={contactUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Solicitar diagnóstico
                    </ButtonLink>

                    <ButtonLink
                      href="#servicos"
                      variant="secondary"
                    >
                      Ver serviços
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full rounded-[32px] border border-white/10 bg-[#01091F]/95 p-8 shadow-2xl backdrop-blur-md
               lg:absolute lg:-bottom-10 lg:right-0 lg:mt-0 lg:max-w-[340px]">
                <div className="font-mono text-white">
                  <HeroTypingAnimation />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </motion.section>
    </section>
  );
}