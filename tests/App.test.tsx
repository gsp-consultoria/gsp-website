import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders the main landing page sections', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /software sob medida para empresas que querem evoluir/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /soluções digitais/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /um caminho claro/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /tecnologia com visão de negócio/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /vamos transformar/i })).toBeInTheDocument();
  });
});
