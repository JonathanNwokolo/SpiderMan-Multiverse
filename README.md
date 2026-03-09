# 🕷️ Spider-Man | Multiversos

Site interativo dedicado aos três Spider-Men do cinema, com carrossel 3D na página inicial e páginas individuais para cada ator e filme.

---

## 🖥️ Preview

<img width="1737" height="813" alt="image" src="https://github.com/user-attachments/assets/ecb5341b-b2c9-40eb-9f14-ec6359457a0a" />


---

## 📁 Estrutura do Projeto

```
Spidermen-multiverso/
├── index.html              # Página inicial com carrossel 3D
├── style.css               # Estilos da página inicial
├── script.js               # Interatividade do carrossel
├── img/                    # Imagens globais e dos personagens
│   ├── icons/              # Ícones SVG/PNG
│   ├── spiderman-tobey/    # Imagens dos filmes do Tobey Maguire
│   ├── spidermen-tom/      # Imagens dos filmes do Tom Holland
│   └── spidermen-andrew/   # Imagens dos filmes do Andrew Garfield
└── pages/
    ├── internal.css        # Estilos compartilhados das páginas internas
    ├── tobey-maguire/
    │   ├── spiderman1.html # Spider-Man (2002)
    │   ├── spiderman2.html # Spider-Man 2 (2004)
    │   └── spiderman3.html # Spider-Man 3 (2007)
    ├── tom-holland/
    │   ├── spiderman1.html # Spider-Man: De Volta ao Lar (2017)
    │   ├── spiderman2.html # Spider-Man: Longe de Casa (2019)
    │   └── spiderman3.html # Spider-Man: Sem Volta Para Casa (2021)
    └── andrew-garfield/
        ├── spiderman1.html # O Espetacular Homem-Aranha (2012)
        └── spiderman2.html # O Espetacular Homem-Aranha 2 (2014)
```

---

## 🚀 Como executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` diretamente no navegador
   > Não é necessário servidor ou instalação de dependências.

---

## ✨ Funcionalidades

- **Carrossel 3D** interativo com os três Spider-Men
- **Hover nos cards** com troca de fundo e destaque da imagem
- **Botões de controle** para girar o carrossel (01 / 02 / 03)
- **Páginas internas** para cada ator com:
  - Background do filme
  - Logo oficial
  - Sinopse
  - Tags de ano e diretor
  - Botão de trailer (YouTube)
  - Galeria de imagens com lightbox (FancyBox)
  - Navegação entre os filmes do mesmo ator
  - Botão de voltar à página inicial

---

## 🎬 Filmes

### Tobey Maguire
| # | Título | Ano | Diretor |
|---|--------|-----|---------|
| 01 | Spider-Man | 2002 | Sam Raimi |
| 02 | Spider-Man 2 | 2004 | Sam Raimi |
| 03 | Spider-Man 3 | 2007 | Sam Raimi |

### Tom Holland
| # | Título | Ano | Diretor |
|---|--------|-----|---------|
| 01 | Spider-Man: De Volta ao Lar | 2017 | Jon Watts |
| 02 | Spider-Man: Longe de Casa | 2019 | Jon Watts |
| 03 | Spider-Man: Sem Volta Para Casa | 2021 | Jon Watts |

### Andrew Garfield
| # | Título | Ano | Diretor |
|---|--------|-----|---------|
| 01 | O Espetacular Homem-Aranha | 2012 | Marc Webb |
| 02 | O Espetacular Homem-Aranha 2 | 2014 | Marc Webb |

---

## 🛠️ Tecnologias

- **HTML5**
- **CSS3** (variáveis, transforms 3D, animações, flexbox)
- **JavaScript** (vanilla, sem frameworks)
- **[FancyBox 4](https://fancyapps.com/fancybox/)** — lightbox para galeria de imagens
- **[Google Fonts](https://fonts.google.com/)** — fonte Poppins

---

## 📌 Referência

Projeto inspirado no desafio da [DIO (Digital Innovation One)](https://www.dio.me/).


