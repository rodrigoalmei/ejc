# EJC - Caminhos de Santidade

Site estático criado para o projeto de marcadores de livro com QR Code do EJC - Encontro de Jovens com Cristo, da Paróquia Nossa Senhora do Rosário, em Campina Grande.

O site foi organizado para funcionar diretamente no GitHub Pages pelo link:

```text
https://rodrigoalmei.github.io/ejc/
```

## O que o site contém

- Página inicial com todos os santos/testemunhos.
- Página individual para cada santo.
- Imagens dos santos recortadas do PDF dos marcadores.
- Logo da Paróquia Nossa Senhora do Rosário no cabeçalho.
- Favicon com a logo sem fundo.
- Imagem comemorativa dos 30 anos do EJC.
- Seção institucional da Paróquia do Rosário.
- Música local com botão de tocar/pausar.
- Layout responsivo para celular, pensado para acesso via QR Code.

## Tecnologias

- HTML
- CSS
- JavaScript puro

Não usa frameworks, backend ou banco de dados.

## Estrutura

```text
.
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

## Como Abrir Localmente

Abra o arquivo:

```text
index.html
```

Como o projeto é estático, ele pode ser aberto diretamente no navegador. Também é possível usar a extensão Live Server do VS Code.

## Páginas Para QR Code

Use estes links nos QR Codes depois que o GitHub Pages estiver publicado:

```text
https://rodrigoalmei.github.io/ejc/santos/carlo-acutis.html
https://rodrigoalmei.github.io/ejc/santos/chiara-luce.html
https://rodrigoalmei.github.io/ejc/santos/pier-giorgio-frassati.html
https://rodrigoalmei.github.io/ejc/santos/jacques-fesch.html
https://rodrigoalmei.github.io/ejc/santos/santa-teresinha.html
https://rodrigoalmei.github.io/ejc/santos/sandra-sabattini.html
https://rodrigoalmei.github.io/ejc/santos/santa-gianna.html
https://rodrigoalmei.github.io/ejc/santos/guido-schaffer.html
https://rodrigoalmei.github.io/ejc/santos/chiara-corbella.html
```

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

O áudio fica em:

```text
assets/audio/olhar-de-gratidao.mp3
```

O site tenta iniciar a música automaticamente ao carregar. Se o navegador bloquear, ela tenta tocar no primeiro clique, toque ou tecla do usuário.

O botão fixo continua disponível:

- `>` para tocar;
- `II` para pausar.

## Responsividade

O site foi ajustado para funcionar bem no celular:

- cards em uma coluna;
- textos confortáveis;
- botões grandes;
- cabeçalho compacto;
- imagens adaptadas;
- controle de música pequeno, sem cobrir os créditos.

## Como Editar o Conteúdo dos Santos

As informações dos santos ficam em:

```text
assets/js/santos.js
```

Para alterar uma página, edite o bloco correspondente no arquivo `santos.js`.

## Desenvolvedores

Desenvolvido por:

- [rodrigoalmei](https://github.com/rodrigoalmei)
- [LucasRAlbino](https://github.com/LucasRAlbino)

## Observações

- As imagens dos santos foram recortadas do PDF dos marcadores.
- O conteúdo foi adaptado para leitura rápida, com linguagem pastoral e voltada para jovens.
- As páginas não dependem de serviços externos para carregar o conteúdo.
- O projeto foi pensado para o EJC da Paróquia Nossa Senhora do Rosário, em Campina Grande.
