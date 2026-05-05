# EJC - Caminhos de Santidade

Site estático criado para o projeto de marcadores de livro com QR Code do EJC - Encontro de Jovens com Cristo.

A ideia é que cada QR Code dos marcadores aponte para uma página própria do site, com a história de um santo, beato ou testemunho de fé. Assim, os jovens acessam o conteúdo diretamente no projeto, sem depender de páginas externas.

## Tecnologias

O projeto usa apenas:

- HTML
- CSS
- JavaScript puro

Não há React, Vue, Angular, backend ou banco de dados.

## Estrutura do Projeto

```text
.
├── index.html
├── README.md
├── assets
│   ├── css
│   │   └── styles.css
│   ├── images
│   │   └── santos
│   │       ├── carlo-acutis.png
│   │       ├── chiara-corbella.png
│   │       ├── chiara-luce.png
│   │       ├── guido-schaffer.png
│   │       ├── jacques-fesch.png
│   │       ├── pier-giorgio-frassati.png
│   │       ├── sandra-sabattini.png
│   │       ├── santa-gianna.png
│   │       └── santa-teresinha.png
│   └── js
│       ├── main.js
│       ├── santo-page.js
│       └── santos.js
└── santos
    ├── carlo-acutis.html
    ├── chiara-corbella.html
    ├── chiara-luce.html
    ├── guido-schaffer.html
    ├── jacques-fesch.html
    ├── pier-giorgio-frassati.html
    ├── sandra-sabattini.html
    ├── santa-gianna.html
    └── santa-teresinha.html
```

## Páginas Criadas

Página inicial:

```text
index.html
```

Páginas individuais:

```text
santos/carlo-acutis.html
santos/chiara-luce.html
santos/pier-giorgio-frassati.html
santos/jacques-fesch.html
santos/santa-teresinha.html
santos/sandra-sabattini.html
santos/santa-gianna.html
santos/guido-schaffer.html
santos/chiara-corbella.html
```

## Como Abrir Localmente

Como o projeto é estático, basta abrir o arquivo `index.html` no navegador.

Também é possível usar a extensão Live Server do VS Code, se quiser testar com um servidor local.

## Como Usar nos QR Codes

Depois de hospedar o projeto, use a URL de cada página individual no QR Code correspondente.

Exemplo, se o site estiver hospedado em:

```text
https://seuusuario.github.io/ejc/
```

Os links ficariam assim:

```text
https://seuusuario.github.io/ejc/santos/carlo-acutis.html
https://seuusuario.github.io/ejc/santos/chiara-luce.html
https://seuusuario.github.io/ejc/santos/pier-giorgio-frassati.html
```

## Como Hospedar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos deste projeto para o repositório.
3. No GitHub, acesse `Settings`.
4. Entre em `Pages`.
5. Em `Build and deployment`, selecione a branch principal.
6. Salve e aguarde o GitHub gerar o link.

Depois disso, use o link publicado para montar os QR Codes.

## Como Editar o Conteúdo dos Santos

As informações dos santos ficam no arquivo:

```text
assets/js/santos.js
```

Cada santo possui um bloco com dados como:

- `slug`
- `nome`
- `status`
- `periodo`
- `imagem`
- `resumo`
- `virtudes`
- `quemFoi`
- `jovem`
- `frase`
- `reflexao`
- `oracao`

Para alterar o texto de uma página, edite o bloco correspondente no arquivo `santos.js`.

## Como Adicionar um Novo Santo

1. Adicione a imagem do santo em:

```text
assets/images/santos/
```

2. Abra o arquivo:

```text
assets/js/santos.js
```

3. Copie o bloco de um santo existente e altere os dados.

Exemplo:

```js
{
  slug: "novo-santo",
  nome: "Nome do Santo",
  status: "Santo",
  periodo: "1900-1950",
  imagem: "assets/images/santos/novo-santo.png",
  resumo: "Resumo curto para o card.",
  destaque: "Fé, juventude, missão",
  virtudes: ["Fé", "Caridade", "Oração"],
  jovem: "Texto sobre o que ele ensina aos jovens.",
  quemFoi: "Biografia do santo.",
  frase: "Frase marcante.",
  reflexao: "Reflexão curta.",
  oracao: "Oração ou mensagem final.",
  fontes: []
}
```

4. Crie uma página HTML dentro da pasta `santos`.

Você pode copiar uma página existente, por exemplo:

```text
santos/carlo-acutis.html
```

Renomeie para:

```text
santos/novo-santo.html
```

5. No novo arquivo HTML, altere o atributo `data-santo` para o mesmo valor do `slug`.

Exemplo:

```html
<body class="saint-page" data-santo="novo-santo">
```

## Observações

- As imagens dos santos foram recortadas do PDF dos marcadores.
- O conteúdo foi adaptado para leitura rápida, com linguagem pastoral e voltada para jovens.
- O site foi pensado para funcionar bem no celular, já que o acesso principal será via QR Code.
- As páginas não dependem de serviços externos para carregar o conteúdo.

