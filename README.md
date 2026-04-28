# 🗞️ Weide.org — O Portal da Verdade Alternativa™

> *"O portal de notícias mais preciso¹ do Brasil — ¹segundo Weide José"*

Weide.org é um **site de sátira e humor** criado como projeto pessoal entre amigos. O site simula um portal de notícias fictício cujo fundador, editor-chefe, único jornalista e principal fonte é **Weide José**, carinhosamente apelidado de **Latão** — um especialista autoatribuído em absolutamente tudo, com 0 acertos confirmados e confiança infinita.

---

## 📄 Páginas

| Página | Descrição |
|---|---|
| `index.html` | Página principal com notícias falsas, mapa-múndi "corrigido", reviews de jogos, empregos recusados e frases históricas |
| `cartinhas.html` | Sistema de cartinhas colecionáveis dos personagens do grupo |
| `herois.html` | Galeria de heróis com stats e habilidades fictícias |
| `ranking-nerd.html` | Ranking de nerdice dos integrantes do grupo com pontuações e categorias |
| `roleta.html` | Roleta interativa com canvas, sistema de pesos e importação via `.txt` |
| `x1.html` | Sistema de duelo 1v1 entre membros do grupo |

---

## 🧩 Seções da Index

- **🚨 Últimas Notícias** — Artigos científicos completamente falsos assinados por Weide José (ex: *"Gelo é quente", "A Lua é maior que o Sol"*)
- **🌍 Geografia segundo Latão** — Mapa-múndi SVG interativo com "correções geográficas" do Weide (Brasil na Europa, Antártida é quente, etc.)
- **🎮 Review de Jogos com Aurelio Zilmer** — Reviews absurdas assinadas pelo "Tchutchala", crítico sem critério
- **💼 Empregos Recusados pelo Murilo** — Tabela com os empregos mais bizarros e bem pagos que o Murilo recusou (NASA, Apple CEO, Red Bull F1...)
- **💬 Frases Históricas de Latão** — Citações memoráveis do Weide José

---

## 🎮 Funcionalidades Interativas

- **Roleta** com animação suave (`easeOut`), pesos decimais, importação de listas `.txt` e som aleatório ao parar
- **Mapa SVG** com pins interativos e tooltips
- **Ticker** animado de notícias urgentes no topo
- **Verdadômetro Weide** — marcador fixo em "Irreversivelmente Errado"

---

## 🗂️ Estrutura de Arquivos

```
ProjetoWeide.org/
├── index.html
├── cartinhas.html
├── herois.html
├── ranking-nerd.html
├── roleta.html
├── x1.html
├── css/
│   └── shared.css          # Estilos globais compartilhados
├── js/                     # Scripts auxiliares
├── Audios/                 # Sons tocados na roleta
│   ├── AI TREM BAO MININO.mp3
│   ├── Cururu AAAAI.ogg
│   ├── Os brinquedos.mp3
│   └── ai garota.mp3
├── RankingNerd/            # Fotos dos integrantes
├── Cartinhas/              # Assets das cartinhas
└── Herois/                 # Assets dos heróis
```

---

## 🛠️ Tecnologias

- **HTML5** puro com CSS inline e `<style>` por página
- **CSS Compartilhado** via `css/shared.css` (variáveis, header, footer, nav)
- **JavaScript** vanilla para todas as interações (roleta, mapa, ranking)
- **Canvas API** para renderização da roleta
- **Web Audio API** (`new Audio()`) para sons na roleta
- Fontes: **Playfair Display** + **Source Sans 3** (Google Fonts)

---

## ⚠️ Aviso

> Este site é uma **sátira**. Nenhuma informação aqui publicada deve ser levada a sério, assim como nenhuma informação dita por Weide José em qualquer contexto da vida real. Qualquer dano causado pela leitura deste conteúdo é responsabilidade de quem acreditou.

---

*Fundado em 2026 por Weide José (Latão) · Credibilidade: 2% · e não está subindo*
