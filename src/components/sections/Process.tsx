import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

const steps = [
  {
    title: 'Diagnóstico',
    description: 'Entendimento do negócio, dores, processos atuais e objetivos de evolução.',
  },
  {
    title: 'Planejamento',
    description: 'Definição de escopo, prioridades, arquitetura, riscos e plano incremental de entrega.',
  },
  {
    title: 'Construção',
    description: 'Desenvolvimento com qualidade, componentização, testes e validações frequentes.',
  },
  {
    title: 'Entrega e evolução',
    description: 'Deploy, acompanhamento, ajustes, melhorias e evolução contínua da solução.',
  },
];

export function Process() {
  return (
    <section id="processo" className="bg-[#011b7c]/30 py-24">
      <Container>
        <SectionTitle
          eyebrow="Processo"
          title="Um caminho claro do problema à solução"
          description="Trabalho guiado por clareza, comunicação objetiva e entregas incrementais para reduzir risco e gerar valor cedo."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#fe701a] text-lg font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
