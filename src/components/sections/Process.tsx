"use client";

import { ProcessCard } from "./process/ProcessCards";
import { ProcessTimeline } from "./process/ProcessTimeLine";

const steps = [
  {
    number: "1",
    title: "Diagnóstico",
    description:
      "Entendimento do negócio, dores, processos atuais e objetivos de evolução.",
  },
  {
    number: "2",
    title: "Planejamento",
    description:
      "Definição de escopo, prioridades, arquitetura, riscos e plano incremental de entrega.",
  },
  {
    number: "3",
    title: "Construção",
    description:
      "Desenvolvimento com qualidade, componentização, testes e validações frequentes.",
  },
  {
    number: "4",
    title: "Entrega e evolução",
    description:
      "Deploy, acompanhamento, ajustes, melhorias e evolução contínua da solução.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="relative overflow-hidden bg-[#020618] py-32"
    >
      <div className="container mx-auto px-6">
       

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Um caminho claro do problema à solução
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Trabalho guiado por clareza, comunicação objetiva e
            entregas incrementais para reduzir risco e gerar valor.
          </p>
        </div>

        <div className="relative mt-24">
          <ProcessTimeline />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <ProcessCard
                key={step.number}
                {...step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}