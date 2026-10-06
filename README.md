# Template Site Tattoo

Landing page editorial para estúdio de tatuagem **American Traditional / Old School**, construída como template reutilizável e demonstração de Creative Frontend Development.

**Stack:** React 18 + TypeScript + Vite + Lucide React

---

## Preview

| Seção | Descrição |
|-------|-----------|
| **Hero** | Tela cheia (100svh) com imagem tratada, entrada escalonada, CTA duplo |
| **Manifesto** | Composição em papel envelhecido, tipografia editorial |
| **Flash Gallery** | 8 filtros, masonry assimétrico, modal com navegação prev/next |
| **Artists** | Lista expansível, drawer lateral com bio e CTA individual |
| **Parlor** | Hotspots interativos sobre fotografia do estúdio |
| **Process** | Timeline 5 etapas com controles laterais |
| **Reviews** | Carousel de depoimentos |
| **Booking** | Formulário 8 campos, validação nativa, estados idle/loading/success |
| **FAQ** | Accordion 6 perguntas |
| **Footer** | Brand, links, contato, tagline final |

---

## Arquitetura

```
src/
├── main.tsx                      # Entry point
├── App.tsx                       # Shell: header, hero, manifesto, composição das seções
├── components/
│   ├── CustomCursor.tsx          # Cursor personalizado (estilo agulha/tinta)
│   ├── FlashGallery.tsx          # Galeria filtrável + modal com navegação
│   ├── ArtistsSection.tsx        # Lista de artistas + drawer lateral
│   └── ExperienceSections.tsx    # Parlor, Process, Reviews, Booking, FAQ, Footer
├── data/
│   ├── tattoos.ts                # 6 tatuagens mockadas com categorias
│   └── artists.ts                # 3 artistas mockados
└── styles/
    └── global.css                # Tokens, layout, responsividade, animações
```

---

## Tokens de Design

```css
--ink: #11100e        /* Ink Black */
--aged-black: #1c1915 /* Aged Black */
--bone: #e8dfc9       /* Bone */
--paper: #d8c9a9      /* Aged Paper */
--red: #a32920        /* Traditional Red */
--red-dark: #711b17   /* Dark Red */
--gold: #b09254       /* Muted Gold */
--line: rgba(232,223,201,.22)
```

**Fontes:**
- **Display:** Oswald (títulos principais)
- **Accent/Italic:** Playfair Display
- **UI/Body:** DM Mono

---

## Executando Localmente

**Requisitos:** Node.js 20+, npm 10+

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

### Build de Produção

```bash
npm run build
npm run preview
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento Vite |
| `npm run build` | TypeScript check + build de produção |
| `npm run preview` | Serve build localmente |
| `npm run lint` | ESLint (quando configurado) |
| `npm run typecheck` | Verificação de tipos TypeScript |

---

## Personalização

Para adaptar o template a outro estúdio:

1. **Cores:** Edite tokens em `src/styles/global.css` (linhas 3-10)
2. **Metadados:** Atualize `index.html` (title, description, OG, JSON-LD)
3. **Conteúdo:** Substitua arrays em `src/data/tattoos.ts` e `src/data/artists.ts`
4. **Imagens:** Troque URLs remotas por assets próprios em `public/images/`
5. **SEO:** Atualize `public/sitemap.xml`, canonical, dados estruturados

---

## Acessibilidade & Performance

- HTML semântico com landmarks (`header`, `main`, `section`, `footer`)
- Labels visíveis no formulário
- `aria-label`, `aria-selected`, `aria-expanded`, `aria-modal` nas interações
- Foco visível e contraste baseado na paleta definida
- Cursor desabilitado em telas pequenas (`max-width: 760px`)
- `prefers-reduced-motion` reduz transições, animações e smooth scrolling
- Scroll listener passivo + `IntersectionObserver` para seção ativa
- Preconnect/preload para imagem crítica do Hero
- Vite gera bundle minificado para produção

---

## Deploy

Build de produção gera pasta `dist/` pronta para qualquer hosting estático:

```bash
npm run build
# output: dist/
```

Configure no provedor de sua escolha:
- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

---

## Estrutura de Commits (Conventional Commits)

```
feat: nova funcionalidade
fix: correção de bug
docs: alterações na documentação
style: formatação, ponto e vírgula, etc (sem mudança de lógica)
refactor: refatoração de código
perf: melhoria de performance
test: adição/correção de testes
chore: tarefas de build, dependências, etc
```

---

## Próximos Passos

- [ ] Conectar formulário a API/serviço de booking real
- [ ] Substituir imagens Unsplash por assets próprios (AVIF/WebP + srcset)
- [ ] Adicionar testes de interação (Vitest + React Testing Library)
- [ ] Implementar drag/swipe real no carousel de reviews
- [ ] Adicionar foco e tooltips acessíveis aos hotspots
- [ ] Pipeline de otimização e validação de imagens

---

## Créditos

Projeto criado como demonstração de **Creative Frontend Development**, combinando direção de arte, React/TypeScript, motion design, UX e arquitetura de componentes.

**Desenvolvido por:** Christian Mendes