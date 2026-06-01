import { render, screen } from '@testing-library/react';
import { ButtonLink } from '../../src/components/ui/Button';

describe('ButtonLink', () => {
  it('renders an accessible link with the expected label', () => {
    render(<ButtonLink href="#contato">Fale conosco</ButtonLink>);

    expect(screen.getByRole('link', { name: 'Fale conosco' })).toHaveAttribute('href', '#contato');
  });
});
