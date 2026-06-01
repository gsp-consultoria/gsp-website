import { company, navigationItems } from '../../lib/constants';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a href="#topo" className="flex items-center gap-3" aria-label="Voltar para o topo">
          <span className="grid size-11 place-items-center rounded-2xl bg-[#011b7c] text-lg font-black text-[#e3f3fe] ring-1 ring-white/15">
            &gt;_
          </span>
          <span className="text-base font-bold tracking-tight text-white">{company.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contato" className="hidden md:inline-flex">
          Fale conosco
        </ButtonLink>
      </Container>
    </header>
  );
}
