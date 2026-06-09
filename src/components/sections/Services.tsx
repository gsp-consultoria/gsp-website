import {
  Cog,
  Workflow,
  MonitorCog,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Software sob medida",
    description:
      "Sistemas web personalizados para automatizar operações, organizar dados e reduzir dependência de processos manuais.",
    icon: Cog,
  },
  {
    title: "Integrações e Automações",
    description:
      "Conexão entre APIs, ERPs, CRMs, bancos de dados e serviços externos para criar fluxos digitais mais eficientes.",
    icon: Workflow,
  },
  {
    title: "Modernização de Sistemas",
    description:
      "Evolução de aplicações legadas com arquitetura mais limpa, observabilidade, testes e melhor experiência de manutenção.",
    icon: MonitorCog,
  },
  {
    title: "Consultoria Técnica",
    description:
      "Apoio em decisões de arquitetura, cloud, backend, integrações, qualidade de código e estratégia de evolução tecnológica.",
    icon: Wrench,
  },
];

export function Services() {
  return (
    <section className="bg-[#020618] py-24 text-white" id="servicos">
      <div className="container mx-auto px-6">
        <span className="mb-8 block text-sm font-bold uppercase tracking-wider text-zinc-300">
          Serviços
        </span>

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Soluções digitais para operações mais eficientes
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Desenvolvemos sistemas que substituem planilhas,
            automatizam tarefas repetitivas e centralizam
            informações críticas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#8F4219]/50 hover:shadow-[0_0_30px_rgba(143,66,25,0.25)]"
              >
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900">
                  <Icon
                    size={48}
                    className="text-zinc-100"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-semibold leading-tight">
                  {service.title}
                </h3>

                <p className="text-zinc-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-16 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#8F4219]">
              100%
            </h3>
            <p className="text-2xl text-[#8F4219]">
              Disponibilidade
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#8F4219]">
              +5
            </h3>
            <p className="text-2xl text-[#8F4219]">
              Anos
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#8F4219]">
              100%
            </h3>
            <p className="text-2xl text-[#8F4219]">
              Código Próprio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}