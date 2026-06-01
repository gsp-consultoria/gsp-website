export type Technology = {
  name: string;
  category: string;
};

export const technologies: Technology[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'UI' },
  { name: 'Vite', category: 'Build' },
  { name: '.NET', category: 'Backend' },
  { name: 'APIs REST', category: 'Integrações' },
  { name: 'PostgreSQL', category: 'Banco de dados' },
  { name: 'Azure / AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
];
