import { render, screen, within } from '@testing-library/react';
import { Header } from '../../src/components/layout/Header';

describe('Header', () => {
  it('renders the main navigation with section links and contact CTA', () => {
    render(<Header />);

    const navigation = screen.getByRole('navigation', { name: /navegação principal/i });

    expect(within(navigation).getByRole('link', { name: 'Serviços' })).toHaveAttribute(
      'href',
      '#servicos',
    );
    expect(within(navigation).getByRole('link', { name: 'Processo' })).toHaveAttribute(
      'href',
      '#processo',
    );
    expect(within(navigation).getByRole('link', { name: 'Sobre' })).toHaveAttribute(
      'href',
      '#sobre',
    );
    expect(within(navigation).getByRole('link', { name: 'Tecnologias' })).toHaveAttribute(
      'href',
      '#tecnologias',
    );
    expect(within(navigation).getByRole('link', { name: 'Contato' })).toHaveAttribute(
      'href',
      '#contato',
    );
    expect(screen.getByRole('link', { name: 'Fale conosco' })).toHaveAttribute('href', '#contato');
  });
});
