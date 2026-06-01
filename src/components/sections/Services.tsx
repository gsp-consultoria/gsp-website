import { services } from '../../data/services';
import { Card } from '../ui/Card';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <Container>
        <SectionTitle
          eyebrow="Serviços"
          title="Soluções digitais para operações mais eficientes"
          description="Da ideia ao deploy, a GSP Consultoria atua no desenho, desenvolvimento e evolução de sistemas que resolvem problemas reais."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
