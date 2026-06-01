import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function About() {
  return (
    <section id="sobre" className="py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          eyebrow="Sobre"
          title="Tecnologia com visão de negócio"
          description="A GSP Consultoria combina engenharia de software, arquitetura e experiência prática em sistemas corporativos para construir soluções úteis, sustentáveis e preparadas para crescer."
          className="text-left md:mx-0"
        />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <p className="text-lg leading-8 text-slate-300">
            O foco é entregar software que resolva problemas concretos: reduzir retrabalho, integrar sistemas, melhorar controle operacional e criar bases técnicas sólidas para evolução contínua.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-3xl font-black text-[#fe701a]">01</dt>
              <dd className="mt-2 text-sm text-slate-300">Diagnóstico claro</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-[#fe701a]">02</dt>
              <dd className="mt-2 text-sm text-slate-300">Entrega incremental</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-[#fe701a]">03</dt>
              <dd className="mt-2 text-sm text-slate-300">Código sustentável</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
