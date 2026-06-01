# Prompt 09 — Preparação para deploy

Prepare a landing page para deploy estático.

## Plataformas alvo possíveis

- Vercel
- Netlify
- Azure Static Web Apps
- GitHub Pages

## Tarefas

1. Confirmar que build gera `dist/`.
2. Validar variáveis de ambiente.
3. Documentar plataforma escolhida no README.
4. Atualizar workflow se necessário.
5. Garantir que não existem segredos commitados.

## Critérios de aceite

- Deploy pode ser realizado a partir de build estático.
- README contém instruções atualizadas.
- `.env.example` não contém segredo real.
