# ROLE

Você é um **Senior Frontend Engineer + Creative Director + Motion Designer especializado em experiências digitais premium**.

Sua tarefa é projetar e implementar uma landing page de alto nível para um **estúdio de tatuagem Old School**, destinada a funcionar simultaneamente como:

1. Template comercial reutilizável para tatuadores.
2. Projeto de destaque para portfólio de um desenvolvedor Full Stack.
3. Demonstração prática de domínio de HTML, CSS, JavaScript/TypeScript, UI/UX, animações, responsividade, acessibilidade, performance e arquitetura frontend.

Não crie uma landing page genérica.

Não siga padrões visuais genéricos de SaaS, startup, agência ou dashboard.

O resultado deve possuir **identidade própria, forte direção artística e alto nível de acabamento**.

---

# PRIORIDADE ABSOLUTA

A ordem de prioridade deste projeto é:

1. IDENTIDADE OLD SCHOOL
2. EXPERIÊNCIA VISUAL
3. INTERATIVIDADE
4. QUALIDADE DAS ANIMAÇÕES
5. RESPONSIVIDADE
6. ARQUITETURA DE CÓDIGO
7. PERFORMANCE
8. ACESSIBILIDADE

A estética nunca deve ser sacrificada pela implementação técnica.

Porém, efeitos visuais não devem ser adicionados sem propósito.

Cada animação deve reforçar a narrativa da página.

---

# CONCEITO

Nome fictício do estúdio:

**IRON ROSE TATTOO**

Tagline:

**BUILT TO LAST.**

Conceito:

Um estúdio de tatuagem especializado em **American Traditional / Old School**, apresentado como uma marca artesanal, autêntica e atemporal.

A experiência digital deve transmitir:

* tradição
* rebeldia
* artesanato
* personalidade
* autenticidade
* precisão
* permanência
* cultura de tatuagem
* estética vintage
* atitude

A página deve parecer uma mistura entre:

**Traditional Tattoo Flash + Old School Americana + Editorial Design + Modern Web Interaction**

Não transforme o site em um museu vintage.

A linguagem visual deve ser histórica, mas a experiência deve ser tecnologicamente moderna.

---

# DIREÇÃO ARTÍSTICA

## ESTÉTICA

Use como referências conceituais:

* Traditional American Tattoo
* Tattoo Flash Sheets
* Vintage Americana
* Sailor Jerry aesthetic
* Tattoo Parlour
* Letterpress
* Vintage posters
* Old signage
* Hand-painted signs
* Papel envelhecido
* Impressão serigráfica
* Gravura
* Ink illustration

IMPORTANTE:

Não copie nenhuma marca, artista ou obra existente.

Use apenas os princípios estéticos como inspiração.

---

# PALETA

Paleta principal:

```text
INK BLACK       #11100E
AGED BLACK      #1C1915
BONE            #E8DFC9
AGED PAPER      #D8C9A9
TRADITIONAL RED #A32920
DARK RED        #711B17
MUTED GOLD      #B09254
```

O vermelho deve ser utilizado como uma das principais cores de identidade.

Porém:

NÃO transformar a interface inteira em preto + vermelho neon.

O vermelho deve parecer:

**pigmento de tinta tradicional.**

O fundo pode alternar entre:

* preto envelhecido
* papel creme
* vermelho escuro

Criar contraste entre seções claras e escuras.

---

# TEXTURA

A interface deve possuir textura visual.

Adicionar de maneira extremamente sutil:

* paper grain
* ink grain
* noise
* halftone
* pequenas imperfeições
* textura de impressão
* desgaste visual
* bordas imperfeitas

O objetivo é evitar uma aparência excessivamente digital.

IMPORTANTE:

A textura não pode prejudicar:

* legibilidade
* performance
* acessibilidade

Utilizar pseudo-elements, SVG ou CSS quando apropriado.

---

# TIPOGRAFIA

A tipografia deve seguir uma estética:

**OLD SCHOOL / TRADITIONAL TATTOO LETTERING**

Utilizar uma combinação de:

### DISPLAY

Fonte com aparência:

* Western
* Vintage
* Blackletter moderada
* Serif display
* Tattoo lettering

### BODY

Utilizar uma fonte extremamente legível.

Sugestões:

* Inter
* Manrope
* IBM Plex Sans

A tipografia display deve possuir personalidade.

Evitar:

* fontes futuristas
* fontes corporativas para títulos
* tipografia minimalista excessiva

Títulos devem parecer elementos de um **flash tradicional**.

Exemplos:

```text
IRON
ROSE
```

ou

```text
BUILT
TO
LAST
```

ou

```text
TRUE
INK
NEVER
FADES
```

---

# LOGOTIPO

Criar um wordmark:

**IRON ROSE**

com:

**TATTOO PARLOR**

abaixo.

O logo pode possuir:

* serifas
* ornamentos
* pequenos elementos de estrela
* linhas decorativas
* estética de placa antiga

Não criar um logo excessivamente complexo.

Ele precisa funcionar também em:

* favicon
* mobile
* header
* footer

---

# ESTRUTURA

A página deve possuir:

```text
01 — HERO
02 — MANIFESTO
03 — FLASH / WORK
04 — ARTISTS
05 — THE PARLOR
06 — PROCESS
07 — REVIEWS
08 — BOOKING
09 — FAQ
10 — FOOTER
```

---

# HERO

O Hero deve ser visualmente memorável.

Tela cheia:

```css
min-height: 100svh;
```

Utilizar uma composição fotográfica de uma tatuagem Old School ou do interior de um tattoo parlor.

A imagem deve possuir tratamento:

* high contrast
* grain
* subtle vignette
* warm vintage treatment

Sobreposição tipográfica:

```text
IRON
ROSE
```

Título enorme.

Subtítulo:

```text
TRADITIONAL TATTOO
EST. 2018
```

CTA principal:

```text
BOOK A TATTOO
```

CTA secundário:

```text
VIEW THE FLASH
```

Adicionar elemento decorativo:

```text
✦
```

ou uma estrela tradicional estilizada.

---

# HERO ANIMATION

A entrada inicial deve possuir uma sequência cinematográfica.

Sequência:

1. Background começa escuro.
2. Textura aparece.
3. Imagem surge através de máscara.
4. Logo aparece.
5. Título é revelado por palavra.
6. Ornamentos entram lateralmente.
7. CTA aparece.
8. Indicador de scroll aparece por último.

Usar:

* GSAP
* CSS
* clip-path
* transforms
* opacity

Não fazer simplesmente:

```text
opacity: 0 → 1
```

em todos os elementos.

Utilizar diferentes velocidades e delays.

---

# CUSTOM CURSOR

Desktop:

Criar cursor personalizado inspirado em uma **agulha de tatuagem / círculo de tinta**.

Estados:

DEFAULT:

pequeno círculo.

IMAGE:

```text
VIEW
```

BUTTON:

```text
ENTER
```

LINK:

expande suavemente.

MOBILE:

desabilitar completamente.

---

# NAVIGATION

Header inicialmente transparente.

Ao scroll:

* fundo escuro
* backdrop blur sutil
* borda inferior
* redução de altura

Links:

```text
HOME
FLASH
ARTISTS
PARLOR
PROCESS
BOOK
```

Adicionar indicador da seção atual.

---

# MANIFESTO

Criar uma seção com fundo de papel envelhecido.

Título:

```text
INK
IS
FOREVER.
```

Texto:

```text
No trends.
No shortcuts.
Just honest tattooing.
```

Criar uma composição visual com elementos tradicionais:

* rosa
* punhal
* coração
* estrela
* cobra
* andorinha

Esses elementos podem aparecer como ilustrações ou imagens.

Não utilizar todos simultaneamente de maneira caótica.

A composição deve parecer uma página de **tattoo flash book**.

---

# FLASH / PORTFOLIO

Esta deve ser uma das principais seções.

Título:

```text
THE FLASH
```

Criar uma galeria inspirada em uma parede de flash de um tattoo parlor.

Categorias:

```text
ALL
TRADITIONAL
BLACKWORK
ROSES
DAGGERS
SNAKES
EAGLES
HEARTS
```

Criar filtros funcionais.

As imagens devem aparecer em composição assimétrica.

Evitar uma grid de cards corporativa.

Utilizar:

* masonry
* tamanhos diferentes
* rotações muito sutis
* molduras
* papel
* pequenas sombras

Ao hover:

* imagem aproxima
* papel se move
* categoria aparece
* título aparece
* cursor muda

---

# FLASH INTERACTION

Ao clicar em uma tattoo:

Abrir modal fullscreen.

Mostrar:

* imagem
* nome
* estilo
* artista
* descrição
* tamanho recomendado
* localização sugerida

Adicionar:

```text
← PREVIOUS
NEXT →
```

Animação do modal:

* scale
* clip-path
* opacity
* image reveal

---

# ARTISTS

Título:

```text
THE HANDS
BEHIND
THE INK.
```

Apresentar artistas.

Cada artista:

```text
NAME
SPECIALTY
YEARS TATTOOING
```

Exemplo:

```text
JACK ROSE
Traditional / Blackwork

MAYA REED
Fine Traditional / Lettering

VINCE CROSS
American Traditional
```

Ao hover:

* foto muda
* nome aumenta
* pequena ilustração aparece
* detalhes aparecem

---

# ARTIST PROFILE

Ao clicar:

Abrir drawer lateral ou modal.

Mostrar:

* foto
* biografia
* especialidades
* trabalhos
* disponibilidade
* Instagram

CTA:

```text
BOOK WITH JACK
```

---

# MARQUEE

Criar uma faixa horizontal contínua:

```text
TRADITIONAL TATTOO
★
HAND DRAWN
★
BUILT TO LAST
★
TRADITIONAL TATTOO
★
```

Movimento contínuo.

Adicionar interação com scroll:

* scroll para baixo → velocidade aumenta
* scroll para cima → velocidade diminui

---

# THE PARLOR

Criar seção mostrando o ambiente.

Título:

```text
THE
PARLOR
```

Utilizar imagens grandes.

Adicionar pequenas informações:

```text
PRIVATE ROOMS
STERILE EQUIPMENT
WALK-INS WELCOME
HAND DRAWN DESIGNS
```

Criar hotspots interativos sobre a fotografia.

Ao passar o mouse:

```text
01
PRIVATE ROOM

A private environment
for your session.
```

---

# PROCESS

Título:

```text
FROM
FLASH
TO
SKIN.
```

Criar timeline.

```text
01 — CONSULTATION
02 — DESIGN
03 — PREPARATION
04 — TATTOO
05 — AFTERCARE
```

Durante o scroll:

A imagem deve mudar.

O número da etapa deve possuir animação.

Utilizar ScrollTrigger.

Criar sensação de narrativa.

---

# TESTIMONIALS

Fundo escuro.

Mostrar avaliações.

Exemplo:

```text
★★★★★

"Best tattoo experience
I've ever had."

— MARIA S.
```

Criar carousel.

Adicionar:

* drag
* arrows
* autoplay opcional
* indicadores

---

# BOOKING

Esta deve ser uma das áreas de maior impacto.

Título:

```text
READY
TO GET
INKED?
```

CTA:

```text
START YOUR BOOKING
```

Ao passar o mouse:

O botão deve possuir:

* expansão
* movimento da seta
* efeito magnético
* mudança de textura

---

# BOOKING FORM

Criar formulário real de frontend.

Campos:

```text
NAME
EMAIL
INSTAGRAM
TATTOO STYLE
BODY PLACEMENT
SIZE
DESCRIPTION
REFERENCE IMAGE
PREFERRED DATE
```

Validação:

* required
* email
* tamanho
* mensagens de erro

Estado:

```text
IDLE
LOADING
SUCCESS
ERROR
```

Ao enviar:

Não realizar integração real.

Simular requisição.

Mostrar:

```text
YOUR IDEA
HAS BEEN RECEIVED.

We'll be in touch.
```

---

# FAQ

Accordion funcional.

Perguntas:

```text
HOW MUCH DOES A TATTOO COST?
HOW SHOULD I PREPARE?
DO YOU ACCEPT WALK-INS?
CAN I BRING MY OWN DESIGN?
HOW DOES BOOKING WORK?
HOW SHOULD I TAKE CARE OF MY TATTOO?
```

Animação suave.

---

# FOOTER

Criar footer grande.

Elementos:

```text
IRON ROSE
TATTOO PARLOR
```

Links.

Instagram.

Email.

Localização.

Horário.

Frase final:

```text
TRUE INK
NEVER FADES.
```

Adicionar ornamento Old School.

---

# INTERAÇÕES OBRIGATÓRIAS

A implementação deve conter pelo menos:

* custom cursor
* magnetic buttons
* smooth scrolling
* reveal animations
* image parallax
* text reveal
* hover states
* gallery filtering
* gallery modal
* artist modal/drawer
* FAQ accordion
* testimonials carousel
* animated marquee
* scroll progress
* mobile navigation
* form validation
* loading state
* success state
* reduced-motion support

---

# MOTION DESIGN

As animações devem ser:

**ORGANIC**
**HEAVY**
**SMOOTH**
**CINEMATIC**

Evitar animações excessivamente rápidas.

Preferir:

```text
ease-out
power2.out
power3.out
expo.out
```

Para elementos importantes.

Utilizar stagger para grupos.

Exemplo conceitual:

```text
TITLE
   ↓
ORNAMENT
   ↓
DESCRIPTION
   ↓
CTA
```

---

# RESPONSIVIDADE

O projeto deve funcionar perfeitamente em:

```text
360px
390px
430px
768px
1024px
1280px
1440px
1920px+
```

Utilizar:

```css
clamp()
min()
max()
```

para dimensionamento.

Mobile não deve ser simplesmente uma versão reduzida do desktop.

Redesenhar determinadas composições quando necessário.

---

# MOBILE

No mobile:

* remover cursor customizado
* reduzir parallax
* otimizar imagens
* menu fullscreen
* touch-friendly controls
* gallery adaptada
* typography responsiva
* CTA fixo opcional para booking

Não permitir overflow horizontal.

---

# ACCESSIBILITY

Implementar:

* semantic HTML
* ARIA quando necessário
* keyboard navigation
* visible focus
* alt text
* contrast
* form labels
* reduced motion

Respeitar:

```css
@media (prefers-reduced-motion: reduce)
```

Quando ativado:

* remover parallax
* reduzir transitions
* remover animações não essenciais

---

# PERFORMANCE

O projeto deve ser construído pensando em Core Web Vitals.

Implementar:

* lazy loading
* responsive images
* WebP/AVIF
* code splitting quando aplicável
* evitar listeners desnecessários
* IntersectionObserver
* requestAnimationFrame
* otimização de GSAP
* preload somente de assets críticos

Não sacrificar performance por efeitos.

---

# STACK

Utilizar:

```text
React
TypeScript
Vite
GSAP
ScrollTrigger
Lenis
CSS Modules ou CSS organizado
Lucide Icons
```

Não adicionar bibliotecas sem necessidade.

Se uma solução puder ser implementada elegantemente com CSS, prefira CSS.

---

# ARQUITETURA

Organizar:

```text
src/
│
├── components/
│   ├── Header/
│   ├── Button/
│   ├── CustomCursor/
│   ├── Gallery/
│   ├── GalleryModal/
│   ├── ArtistCard/
│   ├── ArtistModal/
│   ├── Accordion/
│   └── Marquee/
│
├── sections/
│   ├── Hero/
│   ├── Manifesto/
│   ├── Flash/
│   ├── Artists/
│   ├── Parlor/
│   ├── Process/
│   ├── Testimonials/
│   ├── Booking/
│   └── FAQ/
│
├── animations/
│
├── data/
│   ├── artists.ts
│   ├── tattoos.ts
│   ├── testimonials.ts
│   └── faq.ts
│
├── hooks/
│
├── utils/
│
├── assets/
│
└── styles/
```

Não criar um componente gigante.

Separar responsabilidades.

---

# DATA DRIVEN

Todos os conteúdos repetitivos devem vir de dados.

Não duplicar markup manualmente.

Exemplo:

```ts
const artists = [...]
const tattoos = [...]
const testimonials = [...]
const faq = [...]
```

Isso deve permitir reutilizar o template para outros tatuadores.

---

# COMPONENTIZAÇÃO

Criar componentes reutilizáveis.

Exemplos:

```text
Button
SectionHeading
TattooCard
ArtistCard
Modal
Drawer
Accordion
Input
Marquee
```

Os componentes devem aceitar props quando necessário.

---

# SEO

Implementar:

* title
* description
* Open Graph
* semantic headings
* favicon
* canonical
* robots

Title:

```text
Iron Rose Tattoo — Traditional Tattoo Parlor
```

---

# IMAGENS

Utilizar imagens de alta qualidade.

Priorizar:

* American Traditional tattoo
* roses
* daggers
* snakes
* eagles
* hearts
* vintage tattoo flash
* tattoo artists
* tattoo studio
* old tattoo shop

As imagens devem manter consistência estética.

Não utilizar imagens visualmente incompatíveis.

---

# REGRAS CONTRA DESIGN GENÉRICO

NÃO criar:

* SaaS cards
* hero de startup
* glassmorphism
* neon cyberpunk
* gradients modernos genéricos
* excesso de rounded corners
* botões pill genéricos
* dashboard
* visual de agência corporativa
* layout excessivamente minimalista
* blocos idênticos repetidos
* cards com sombra padrão

A interface deve possuir:

**personalidade.**

---

# CRIATIVIDADE

Você tem liberdade criativa para propor:

* novas composições
* transições
* interações
* elementos decorativos
* efeitos de textura
* animações
* layouts assimétricos

PORÉM:

A criatividade deve permanecer dentro da identidade:

**OLD SCHOOL TATTOO.**

Não introduzir elementos futuristas apenas para parecer tecnológico.

A tecnologia deve aparecer principalmente através da qualidade da experiência.

---

# REGRA DE OURO

A página deve parecer:

> "Um verdadeiro tattoo parlor Old School que contratou uma agência digital de alto nível."

Não deve parecer:

> "Um site moderno que adicionou algumas imagens de tatuagem."

---

# IMPLEMENTAÇÃO

Antes de escrever código:

1. Analise toda esta especificação.
2. Defina a direção visual.
3. Defina a arquitetura.
4. Identifique componentes reutilizáveis.
5. Identifique animações.
6. Identifique possíveis problemas de performance.
7. Depois implemente.

Não gerar código prematuramente.

---

# AUTONOMIA CRIATIVA

Não peça confirmação para decisões visuais de baixo risco.

Quando houver uma decisão que não foi especificada:

**escolha a solução mais coerente com a direção artística.**

Não simplifique uma seção apenas porque sua implementação é mais fácil.

Não substitua uma interação por uma versão estática sem motivo técnico.

---

# QUALITY GATE

Antes de considerar o trabalho concluído, faça uma revisão interna verificando:

### VISUAL

[ ] Identidade Old School está clara?

[ ] Parece um tattoo parlor real?

[ ] Existe personalidade?

[ ] As imagens possuem tratamento consistente?

[ ] A tipografia possui caráter?

### UX

[ ] Navegação é intuitiva?

[ ] CTA é evidente?

[ ] Interações possuem feedback?

[ ] Modal funciona?

[ ] Formulário funciona?

### MOTION

[ ] Hero possui entrada cinematográfica?

[ ] Scroll animations funcionam?

[ ] Hover states funcionam?

[ ] Cursor funciona?

[ ] Mobile não possui animações problemáticas?

### TECHNICAL

[ ] TypeScript sem erros?

[ ] Componentes organizados?

[ ] Responsivo?

[ ] Sem overflow horizontal?

[ ] Imagens otimizadas?

[ ] SEO básico?

[ ] Accessibility?

[ ] Reduced motion?

[ ] Sem console errors?

---

# RESULTADO ESPERADO

O resultado final deve ser uma experiência web que possa ser apresentada em um portfólio profissional como demonstração de:

**Frontend Engineering + Creative Development + UI/UX + Motion Design.**

O projeto deve fazer um recrutador perceber imediatamente que o desenvolvedor não sabe apenas "fazer uma tela".

Ele sabe:

**projetar uma experiência.**

Priorize qualidade sobre quantidade.

Priorize identidade sobre tendências.

Priorize interação sobre decoração.

Priorize código sustentável sobre hacks.

E, acima de tudo:

**NÃO ENTREGUE UMA LANDING PAGE GENÉRICA.**
