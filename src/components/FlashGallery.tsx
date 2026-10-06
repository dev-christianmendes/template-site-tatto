import { useMemo, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { Tattoo, tattooCategories, tattoos } from '../data/tattoos'

export function FlashGallery() {
  const [category, setCategory] = useState<string>('All')
  const [selected, setSelected] = useState<Tattoo | null>(null)
  const visibleTattoos = useMemo(() => category === 'All' ? tattoos : tattoos.filter((tattoo) => tattoo.category === category), [category])
  const categoryLabels: Record<string, string> = { All: 'Todos', Traditional: 'Tradicional', Blackwork: 'Blackwork', Roses: 'Rosas', Daggers: 'Punhais', Snakes: 'Serpentes', Eagles: 'Águias', Hearts: 'Corações' }
  const moveSelection = (direction: number) => {
    if (!selected) return
    const currentIndex = tattoos.findIndex((tattoo) => tattoo.id === selected.id)
    setSelected(tattoos[(currentIndex + direction + tattoos.length) % tattoos.length])
  }

  return (
    <section className="flash-section dark-placeholder" id="flash">
      <div className="flash-heading section-kicker"><span>02 / O arquivo</span><span>Desenhado no estúdio · Feito para durar</span></div>
      <div className="section-title-row">
        <div><p className="eyebrow">Uma parede de possibilidades</p><h2 className="display">OS <i>DESENHOS</i></h2></div>
        <p className="section-lede">Escolha um clássico, personalize ou chegue com uma página em branco. Todo desenho começa à mesa.</p>
      </div>
      <div className="flash-filters" role="tablist" aria-label="Filtrar desenhos">
        {tattooCategories.map((item) => <button key={item} className={category === item ? 'is-active' : ''} onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>{categoryLabels[item]}</button>)}
      </div>
      <div className="flash-grid">
        {visibleTattoos.map((tattoo) => (
          <button className={`flash-card ${tattoo.className}`} key={tattoo.id} onClick={() => setSelected(tattoo)} aria-label={`Ver ${tattoo.title}`}>
            <span className="flash-card-image" role="img" aria-label={`${tattoo.title}, tatuagem ${tattoo.category} por ${tattoo.artist}`} style={{ backgroundImage: `url(${tattoo.image})` }} />
            <span className="flash-card-meta"><small>{categoryLabels[tattoo.category]}</small><strong>{tattoo.title}</strong><em>{tattoo.artist} · dado fictício</em></span>
            <ArrowUpRight className="flash-card-arrow" size={18} />
          </button>
        ))}
      </div>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Detalhes de ${selected.title}`} onClick={() => setSelected(null)}>
        <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
          <button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Fechar detalhes da tatuagem"><X /></button>
          <div className="lightbox-image" role="img" aria-label={`Tatuagem ${selected.title}`} style={{ backgroundImage: `url(${selected.image})` }} />
          <div className="lightbox-copy"><p className="eyebrow">{selected.category} · {selected.artist}</p><h3>{selected.title}</h3><p>{selected.detail}. Composição demonstrativa do arquivo Iron Rose, redesenhada para o seu corpo.</p><a className="button button-primary" href="#book" onClick={() => setSelected(null)}>Agendar esta ideia <ArrowUpRight size={16} /></a><div className="lightbox-nav"><button onClick={() => moveSelection(-1)}>← Anterior</button><button onClick={() => moveSelection(1)}>Próximo →</button></div></div>
        </div>
      </div>}
    </section>
  )
}
