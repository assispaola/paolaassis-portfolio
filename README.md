# Paolaassis Portfolio

Este projeto é um portfólio pessoal desenvolvido com Angular 17, utilizando uma estrutura de componentes standalone e SCSS. O design e as interações foram inspirados no site [Rebeca Sousa](https://rebecasousa.com), mas todos os textos, imagens e ícones foram substituídos por placeholders.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
paolaassis-portfolio
├── src
│   ├── app
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── components
│   │   │   ├── header
│   │   │   │   ├── header.component.ts
│   │   │   │   ├── header.component.html
│   │   │   │   └── header.component.scss
│   │   │   ├── footer
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   └── footer.component.scss
│   │   │   └── shared
│   │   │       └── placeholder
│   │   │           ├── placeholder.component.ts
│   │   │           ├── placeholder.component.html
│   │   │           └── placeholder.component.scss
│   │   ├── pages
│   │   │   ├── home
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.scss
│   │   │   ├── about
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   └── about.component.scss
│   │   │   ├── portfolio
│   │   │   │   ├── portfolio.component.ts
│   │   │   │   ├── portfolio.component.html
│   │   │   │   └── portfolio.component.scss
│   │   │   └── contact
│   │   │       ├── contact.component.ts
│   │   │       ├── contact.component.html
│   │   │       └── contact.component.scss
│   │   └── animations
│   │       └── animations.ts
│   ├── assets
│   └── styles
│       └── main.scss
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Principais Classes e Componentes Exportados

- `app.component.ts`: Componente principal da aplicação.
- `header.component.ts`: Componente de cabeçalho.
- `footer.component.ts`: Componente de rodapé.
- `placeholder.component.ts`: Componente de placeholder.
- `home.component.ts`: Componente da página inicial.
- `about.component.ts`: Componente da página "Sobre".
- `portfolio.component.ts`: Componente da página de portfólio.
- `contact.component.ts`: Componente da página de contato.
- `animations.ts`: Contém animações para transições e efeitos.

## Configurações Especiais

- O arquivo `package.json` contém scripts para execução e build.
- O arquivo `angular.json` inclui a importação do Bootstrap via SCSS em styles.
- O arquivo `tsconfig.json` está configurado para suportar as funcionalidades do Angular 17.

## Passo-a-Passo para Execução Local

1. Clone o repositório ou crie o projeto conforme a estrutura acima.
2. Navegue até o diretório do projeto: `cd paolaassis-portfolio`.
3. Instale as dependências: `npm install`.
4. Inicie o servidor de desenvolvimento: `npm start`.
5. Acesse a aplicação em `http://localhost:4200`.

Certifique-se de que todas as animações e interações estejam funcionando conforme o esperado, e que o conteúdo placeholder seja substituído por informações reais quando disponível.