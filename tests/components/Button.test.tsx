import { render, screen } from '@testing-library/react';
import { ButtonLink } from '../../src/components/ui/Button';

describe('ButtonLink', () => {
  it('renders an accessible link with the expected label', () => {
    render(<ButtonLink href="#contato">Fale conosco</ButtonLink>);

    expect(screen.getByRole('link', { name: 'Fale conosco' })).toHaveAttribute('href', '#contato');
  });

  it('adds noopener to links that open in a new tab', () => {
    render(
      <ButtonLink href="https://wa.me/5513991910139" target="_blank" rel="noreferrer">
        Chamar no WhatsApp
      </ButtonLink>,
    );

    expect(screen.getByRole('link', { name: 'Chamar no WhatsApp' })).toHaveAttribute(
      'rel',
      'noreferrer noopener',
    );
  });
});
