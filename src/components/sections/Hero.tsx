import { company } from '../../lib/constants';
import { buildWhatsAppUrl } from '../../lib/utils';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  const contactUrl = buildWhatsAppUrl(
    company.whatsapp,
    'Olá, Gabriel! Quero conversar sobre um projeto de software para minha empresa.',
  );

  return (
    <section id="topo" className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#011b7c_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#fe701a_0%,transparent_25%)] opacity-60" />
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-[#e3f3fe]">
            Consultoria, automação e desenvolvimento sob medida
          </p>
          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            {company.slogan}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Transforme processos manuais em sistemas digitais, conecte ferramentas e construa soluções que crescem junto com o seu negócio.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={contactUrl} target="_blank" rel="noreferrer">
              Solicitar diagnóstico
            </ButtonLink>
            <ButtonLink href="#servicos" variant="secondary">
              Ver serviços
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40">
          <div className="rounded-3xl bg-slate-950 p-6 font-mono text-sm text-slate-300 ring-1 ring-white/10">
            <div className="mb-6 flex gap-2">
              <span className="size-3 rounded-full bg-[#fe701a]" />
              <span className="size-3 rounded-full bg-[#e3f3fe]" />
              <span className="size-3 rounded-full bg-[#011b7c]" />
            </div>
            <p className="text-[#e3f3fe]">&gt; iniciando_diagnostico()</p>
            <p className="mt-4">✔ Mapear processo atual</p>
            <p>✔ Identificar gargalos</p>
            <p>✔ Propor solução sob medida</p>
            <p>✔ Entregar evolução contínua</p>
            <p className="mt-6 text-[#fe701a]">status: pronto_para_evoluir</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
