import { technologies } from '../../data/technologies';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function Technologies() {
  return (
    <section id="tecnologias" className="scroll-mt-24 py-24">
      <Container>
        <SectionTitle
          eyebrow="Tecnologias"
          title="Stack moderna, pragmática e preparada para escala"
          description="As tecnologias são escolhidas conforme o problema, priorizando produtividade, segurança, manutenibilidade e evolução futura."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {technologies.map((technology) => (
            <span
              key={technology.name}
              className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200"
              title={technology.category}
            >
              {technology.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
