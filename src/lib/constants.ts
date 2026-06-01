export const company = {
  name: import.meta.env.VITE_COMPANY_NAME || 'GSP Consultoria',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'gabriel_souza33@hotmail.com',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '5513991910139',
  slogan: 'Software sob medida para empresas que querem evoluir.',
};

export const navigationItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Contato', href: '#contato' },
] as const;

export const brand = {
  colors: {
    orange: '#fe701a',
    blue: '#011b7c',
    sky: '#e3f3fe',
  },
};
