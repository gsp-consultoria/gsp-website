# Regras de Git e Pull Request

## Branches

Sugestão:

```txt
main      -> produção
develop   -> integração
feature/* -> novas features
fix/*     -> correções
chore/*   -> manutenção
```

## Commits

Use Conventional Commits:

- `feat:` nova funcionalidade
- `fix:` correção
- `docs:` documentação
- `test:` testes
- `refactor:` refatoração sem mudança de comportamento
- `chore:` manutenção

## Pull Request

Todo PR deve conter:

- Descrição objetiva da mudança.
- Prints ou GIFs quando houver mudança visual.
- Checklist de testes executados.
- Observação de impacto em SEO, acessibilidade ou performance quando aplicável.
