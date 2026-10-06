import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react'
import { CustomCursor } from './components/CustomCursor'
import { FlashGallery } from './components/FlashGallery'
import { ArtistsSection } from './components/ArtistsSection'
import { ExperienceSections } from './components/ExperienceSections'

const navigation = ['Início', 'Flash', 'Artistas', 'Estúdio', 'Processo', 'Agendar']
const sectionIds = ['home', 'flash', 'artists', 'parlor', 'process', 'book']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(window.scrollY > 40)
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionIndex = sectionIds.indexOf(entry.target.id)
          if (sectionIndex >= 0) setActiveSection(navigation[sectionIndex])
        }
      })
    }, { rootMargin: '-35% 0px -55% 0px' })
    navigation.forEach((item) => {
      const section = document.getElementById(sectionIds[navigation.indexOf(item)])
      if (section) sectionObserver.observe(section)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      sectionObserver.disconnect()
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <CustomCursor />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Início Iron Rose">
          <span className="brand-mark">✦</span>
          <span className="brand-name">IRON ROSE</span>
          <span className="brand-subtitle">ESTÚDIO FICTÍCIO · DEMO</span>
        </a>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          {navigation.map((item, index) => (
            <a key={item} className={activeSection === item ? 'is-active' : ''} href={`#${sectionIds[index]}`} onClick={closeMenu}>
              <span>0{index + 1}</span>{item}
            </a>
          ))}
          <a className="nav-book" href="#book" onClick={closeMenu}>Agendar tatuagem <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" role="img" aria-label="Arte de tatuagem tradicional no estúdio Iron Rose" />
          <div className="hero-wash" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Tatuagem tradicional · Estúdio fictício</p>
            <h1 className="display hero-title"><span>IRON</span><span className="hero-title-accent">ROSE</span></h1>
            <div className="hero-bottom">
              <p className="hero-intro">Sem tendências.<br />Sem atalhos.<br /><em>Apenas tatuagem de verdade.</em></p>
              <div className="hero-actions">
                <a className="button button-primary" href="#book">Agendar tatuagem <ArrowUpRight size={17} /></a>
                <a className="text-link" href="#flash">Ver desenhos <span>↘</span></a>
              </div>
            </div>
          </div>
          <div className="hero-seal" aria-hidden="true"><span>✦</span><small>FEITO<br />PARA DURAR</small><span>✦</span></div>
          <a className="scroll-cue" href="#manifesto"><span>Role para explorar</span><ArrowDown size={16} /></a>
        </section>

        <section className="manifesto paper-section" id="manifesto">
          <div className="section-kicker"><span>01</span><span>Nosso norte</span></div>
          <div className="manifesto-layout">
            <div>
              <p className="eyebrow">O padrão Iron Rose</p>
              <h2 className="display display-dark">TINTA<br /><i>É</i><br />ETERNA<span>.</span></h2>
            </div>
            <div className="manifesto-copy">
              <div className="ornament">✦</div>
              <p className="large-copy">Uma tatuagem deve envelhecer com você, não correr atrás do tempo. Criamos marcas com mão firme, olhar atento e respeito pelo ofício.</p>
              <p className="body-copy">Do primeiro traço ao cuidado final, cada peça é desenhada no estúdio e feita para permanecer. Tradicional na essência. Pessoal no desenho.</p>
              <a className="text-link dark-link" href="#parlor">Conheça o estúdio <span>↘</span></a>
            </div>
          </div>
          <div className="flash-stamps" aria-hidden="true"><span>★</span><span>ROSA</span><span>DESENHO À MÃO</span><span>★</span></div>
        </section>

        <FlashGallery />
        <div className="marquee" aria-label="Tatuagem tradicional, desenho à mão, feito para durar"><div>TATUAGEM TRADICIONAL <span>✦</span> DESENHO À MÃO <span>✦</span> FEITO PARA DURAR <span>✦</span> TATUAGEM TRADICIONAL <span>✦</span> DESENHO À MÃO <span>✦</span></div></div>
        <ArtistsSection />
        <section className="parlor-section" id="parlor">
          <div className="parlor-copy"><p className="eyebrow">04 / Entre no estúdio</p><h2 className="display">O<br /><i>ESTÚDIO</i></h2><p>Oficina e refúgio ao mesmo tempo. Um espaço para boas conversas, linhas precisas e trabalhos que ficam com você.</p><a className="text-link" href="#book">Planeje sua visita <span>↘</span></a></div>
          <div className="parlor-photo" aria-label="Interior demonstrativo do estúdio de tatuagem Iron Rose"><span className="hotspot hotspot-one">01 <b>Salas privativas</b></span><span className="hotspot hotspot-two">02 <b>Atendimento sem agendamento</b></span><span className="hotspot hotspot-three">03 <b>Desenhos feitos à mão</b></span></div>
        </section>
        <ExperienceSections />
      </main>
    </>
  )
}

export default App
