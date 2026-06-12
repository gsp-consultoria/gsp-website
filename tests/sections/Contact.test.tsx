import { render, screen } from '@testing-library/react';
import { Contact } from '../../src/components/sections/Contact';

describe('Contact', () => {
  it('renders contact CTAs with configured destinations', () => {
    render(<Contact />);

    const whatsappLink = screen.getByRole('link', { name: 'Chamar no WhatsApp' });
    const emailLink = screen.getByRole('link', { name: 'Enviar e-mail' });

    expect(whatsappLink).toHaveAttribute('href', expect.stringContaining('https://wa.me/5513991910139'));
    expect(whatsappLink).toHaveAttribute(
      'href',
      expect.stringContaining('Quero%20conversar%20sobre%20um%20projeto'),
    );
    expect(emailLink).toHaveAttribute('href', 'mailto:gabriel_souza33@hotmail.com');
  });
});
