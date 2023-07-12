# Desafio técnico: Crie sua extensão de navegador
Faça uma extensão com 3 funcionalidades para o seu site favorito.

Orientação básica:
- Fazer FORK desse repositório e programar nele.
- Documentar:
  - Qual é o site favorito?
    - **https://marginalrevolution.com/**
  - As 3 funcionalidades que desenvolveu
    - **Sidebar que exibe categorias (content)**
      - Descrição: Funcionalidade que busca as categorias do endpoint /categories permitindo que o usuário acesse essas informações sem precisar ser obrigado a sair da página atual.
      - _utilização de fetch api, storage, tabs_
    - **Toggle para mostrar/esconder a sidebar (popup)**
      - Descrição: Usuário pode o toggle para ter controle da visibilidade da sidebar do site.
      - _utilização de event listeners e sincronização entre tabs pelo storage_
    - **Opção de adicionar/remover bookmarks (popup, background)**
      - Descrição: Usuário permite ao usuário adicionar a página que está navegando (ícone de adição ou hotkey 'Ctrl+Shift+1') e remove-las (ícone de lixeira) no popup
      - _utilização de storage e commands_
- Enviar resultado via e-mail até o dia 12/07 às 23:59: 
  - Assunto: Entrega do desafio p/ vaga de estágio em dev. web (07/23)
  - E-mail: contato@hyerdev.com
  - Conteúdo: link do seu repositório (fork que fez) e o resultado do build (zip)
  
Critérios de avaliação do desafio:
- Entregou dentro do prazo?
- As funcionalidades estão bem documentadas?
- As funcionalidades funcionam de acordo com a documentação/esperado?
- Código legível? 
- Organização da estrutura do projeto
- Usou o Git corretamente durante o desenvolvimento das 3 funcionalidades?


# Docs:
- Plasmo: https://docs.plasmo.com/framework
- Google Extensions: https://developer.chrome.com/docs/extensions
- MDN: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions



<br/>
<br/>
<br/>

# Getting Started
This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

First, run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: `build/chrome-mv3-dev`.

You can start editing the popup by modifying `popup.tsx`. It should auto-update as you make changes. To add an options page, simply add a `options.tsx` file to the root of the project, with a react component default exported. Likewise to add a content page, add a `content.ts` file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, [visit our Documentation](https://docs.plasmo.com/)

## Making production build

Run the following:

```bash
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.
