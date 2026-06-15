import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { company, navigationItems } from '../../lib/constants';
import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

const linkFocusClass =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fe701a]';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#topo"
          className={`flex items-center gap-3 rounded-2xl ${linkFocusClass}`}
          aria-label="Voltar para o topo"
        >
          <img
            src="./gsp_logo.png"
            alt="GSP CONSULTORIA LOGO"
            className="size-11"
          />

          <span className="text-base font-bold tracking-tight text-white">
            {company.name}
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-sm text-sm font-medium text-slate-300 transition hover:text-white ${linkFocusClass}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink href="#contato" className="hidden sm:inline-flex">
          Fale conosco
        </ButtonLink>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950 transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-6">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-3 text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <ButtonLink
            href="#contato"
            className="mt-4 justify-center"
          >
            Fale conosco
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}