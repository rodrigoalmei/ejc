# EJC - Caminhos de Santidade

Site estático criado para o projeto de marcadores de livro com QR Code do EJC - Encontro de Jovens com Cristo, da Paróquia Nossa Senhora do Rosário, em Campina Grande.

A proposta é que cada QR Code dos marcadores aponte para uma página própria do site, com a história de um santo, beato ou testemunho de fé. Assim, os jovens acessam o conteúdo diretamente no projeto, sem depender de páginas externas.

## Tecnologias

O projeto usa apenas:

- HTML
- CSS
- JavaScript puro

Não há React, Vue, Angular, backend ou banco de dados.

## Estrutura do Projeto

Esta pasta `ejc/` é a raiz do site.

```text
ejc/
├── index.html
├── README.md
├── assets
│   ├── audio
│   │   └── olhar-de-gratidao.mp3
│   ├── css
│   │   └── styles.css
│   ├── images
│   │   ├── 30-anos-ejc.jpeg
│   │   ├── logo-rosario.jpg
│   │   ├── logo-rosario-2.jpeg
│   │   ├── logo-rosario-sem-fundo.png
│   │   ├── nossa-senhora-do-rosario.jpg
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
│       ├── audio.js
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

Abra o arquivo:

```text
ejc/index.html
```

Como o projeto é estático, ele pode ser aberto diretamente no navegador.

Também é possível usar a extensão Live Server do VS Code para testar com um servidor local.

## Identidade da Paróquia

O site usa materiais visuais da Paróquia Nossa Senhora do Rosário:

- logo no cabeçalho;
- logo sem fundo como favicon da aba do navegador;
- imagem dos 30 anos do EJC na página inicial;
- imagem de Nossa Senhora do Rosário na seção institucional;
- links para site, Instagram e YouTube da paróquia.

Links usados:

```text
https://www.rosario.org.br/
https://www.instagram.com/paroquiadorosariocg/
https://www.youtube.com/@Par%C3%B3quiadoRos%C3%A1rio
```

## Música

O arquivo de música fica em:

```text
assets/audio/olhar-de-gratidao.mp3
```

O JavaScript tenta iniciar a música automaticamente ao abrir qualquer página. Como navegadores podem bloquear áudio automático com som, o site também tenta iniciar no primeiro clique, toque ou tecla do usuário.

O botão de controle permanece disponível em todas as páginas:

- `>` para tocar;
- `II` para pausar.

## Responsividade

O site foi ajustado para uso em celular, porque o acesso principal será via QR Code.

Foram considerados:

- leitura confortável em telas pequenas;
- cards em uma coluna no mobile;
- botões grandes;
- campo de busca sem zoom indesejado;
- cabeçalho compacto;
- controle de música pequeno, sem cobrir os créditos;
- imagens redimensionadas para celular.

## Como Usar nos QR Codes

Depois de hospedar o projeto, use a URL de cada página individual no QR Code correspondente.

Exemplo, se o site estiver hospedado em:

```text
https://seuusuario.github.io/repositorio/
```

E a pasta `ejc/` estiver publicada como parte do caminho, os links ficariam assim:

```text
https://seuusuario.github.io/repositorio/ejc/santos/carlo-acutis.html
https://seuusuario.github.io/repositorio/ejc/santos/chiara-luce.html
https://seuusuario.github.io/repositorio/ejc/santos/pier-giorgio-frassati.html
```

Se você publicar diretamente o conteúdo da pasta `ejc/` como raiz do site, os links ficam assim:

```text
https://seu-dominio.com/santos/carlo-acutis.html
https://seu-dominio.com/santos/chiara-luce.html
https://seu-dominio.com/santos/pier-giorgio-frassati.html
```

## Como Hospedar no GitHub Pages

Opção simples:

1. Abra a pasta `ejc/`.
2. Envie o conteúdo dessa pasta para o repositório ou branch que será publicado.
3. No GitHub, acesse `Settings`.
4. Entre em `Pages`.
5. Em `Build and deployment`, selecione a branch principal.
6. Salve e aguarde o GitHub gerar o link.

Se o repositório mantiver a pasta `ejc/`, lembre-se de incluir `/ejc/` nos links dos QR Codes.

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

## Desenvolvedores

Desenvolvido por:

- [rodrigoalmei](https://github.com/rodrigoalmei)
- [LucasRAlbino](https://github.com/LucasRAlbino)

## Observações

- As imagens dos santos foram recortadas do PDF dos marcadores.
- O conteúdo foi adaptado para leitura rápida, com linguagem pastoral e voltada para jovens.
- As páginas não dependem de serviços externos para carregar o conteúdo.
- O projeto foi pensado para o EJC da Paróquia Nossa Senhora do Rosário, em Campina Grande.
