import { company, navigationItems } from '../../lib/constants';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold text-white">{company.name}</p>
          <p className="mt-2 text-sm text-slate-400">{company.slogan}</p>
        </div>
        <nav className="flex flex-wrap gap-4" aria-label="Navegação do rodapé">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
