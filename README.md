# EJC - Caminhos de Santidade

Site estático criado para o projeto de marcadores de livro com QR Code do EJC - Encontro de Jovens com Cristo, da Paróquia Nossa Senhora do Rosário, em Campina Grande.

O projeto principal está dentro da pasta:

```text
ejc/
```

Para abrir localmente, use:

```text
ejc/index.html
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

## Páginas Para QR Code

```text
ejc/santos/carlo-acutis.html
ejc/santos/chiara-luce.html
ejc/santos/pier-giorgio-frassati.html
ejc/santos/jacques-fesch.html
ejc/santos/santa-teresinha.html
ejc/santos/sandra-sabattini.html
ejc/santos/santa-gianna.html
ejc/santos/guido-schaffer.html
ejc/santos/chiara-corbella.html
```

## Links da Paróquia

```text
https://www.rosario.org.br/
https://www.instagram.com/paroquiadorosariocg/
https://www.youtube.com/@Par%C3%B3quiadoRos%C3%A1rio
```

## Estrutura

```text
.
├── README.md
└── ejc
    ├── index.html
    ├── README.md
    ├── assets
    │   ├── audio
    │   ├── css
    │   ├── images
    │   └── js
    └── santos
```

## Música

O áudio fica em:

```text
ejc/assets/audio/olhar-de-gratidao.mp3
```

O site tenta iniciar a música automaticamente ao carregar. Se o navegador bloquear, ela tenta tocar no primeiro clique, toque ou tecla do usuário. O botão fixo continua disponível:

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

## Desenvolvedores

Desenvolvido por:

- [rodrigoalmei](https://github.com/rodrigoalmei)
- [LucasRAlbino](https://github.com/LucasRAlbino)

## Documentação Completa

A documentação mais detalhada está em:

```text
ejc/README.md
```
