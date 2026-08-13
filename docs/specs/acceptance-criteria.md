# Acceptance Criteria

## Criterios globais

- A landing page abre sem erro no navegador.
- O build de producao e gerado com sucesso.
- A navegacao do header leva as secoes corretas.
- O Hero comunica claramente o que a empresa faz.
- O CTA principal leva ao WhatsApp com mensagem pre-preenchida.
- O CTA de e-mail abre `mailto:` com o e-mail configurado.
- As secoes obrigatorias estao presentes.
- O menu mobile abre, fecha e preserva os links principais.
- O layout nao quebra em mobile, tablet ou desktop.
- A pagina possui apenas um `h1`.
- Os testes passam.
- O lint passa.
- Nao ha textos placeholder visiveis em producao.

## Criterios por secao

### Header

- Mostra logo em imagem e nome da marca.
- Mostra navegacao desktop.
- Mostra CTA para contato.
- Possui menu mobile com botao acessivel.
- Fica legivel sobre o conteudo.

### Hero

- Mostra proposta de valor.
- Mostra CTA primario e secundario.
- Visual reforca tecnologia e diagnostico tecnico.
- A animacao nao impede a leitura do conteudo principal.

### Servicos

- Lista servicos principais.
- Cada servico tem titulo, descricao e icone.
- Exibe metricas de apoio sem substituir a proposta de valor.

### Processo

- Explica etapas de trabalho.
- Deve passar previsibilidade e confianca.
- Visual transmite sequencia clara.

### Sobre

- Explica o posicionamento da GSP Consultoria.
- Nao deve parecer curriculo pessoal demais.
- Reforca pilares de trabalho e capacidade tecnica.

### Tecnologias

- Mostra stack e areas de atuacao.
- Usa icones reconheciveis.
- Nao deve virar lista excessiva de buzzwords.
- Marquee deve pausar no hover.

### Contato

- CTA claro para WhatsApp e e-mail.
- Texto convida a iniciar conversa.
- Links usam valores configuraveis por variaveis `VITE_*`.

### Footer

- Fecha a pagina com marca e links uteis.
- Copyright usa ano atual.
- Links apontam para ancoras validas.
