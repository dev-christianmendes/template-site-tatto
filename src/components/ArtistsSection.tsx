import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { Artist, artists } from '../data/artists'

export function ArtistsSection() {
  const [selected, setSelected] = useState<Artist | null>(null)
  return (
    <section className="artists-section paper-section" id="artists">
      <div className="section-kicker"><span>03 / As mãos</span><span>Três perfis demonstrativos</span></div>
      <div className="section-title-row"><div><p className="eyebrow">As pessoas por trás da agulha</p><h2 className="display display-dark">AS MÃOS<br /><i>POR TRÁS</i><br />DA TINTA<span>.</span></h2></div><p className="section-lede section-lede-dark">Nomes, fotos e biografias abaixo são dados fictícios para demonstração do template.</p></div>
      <div className="artists-list">
        {artists.map((artist, index) => <button className="artist-row" key={artist.name} onClick={() => setSelected(artist)}><span className="artist-number">0{index + 1}</span><span className="artist-photo" role="img" aria-label={`Retrato demonstrativo de ${artist.name}`} style={{ backgroundImage: `url(${artist.image})` }} /><span className="artist-name">{artist.name}</span><span className="artist-specialty">{artist.specialty}<br /><small>{artist.years}</small></span><ArrowUpRight className="artist-arrow" /></button>)}
      </div>
      {selected && <div className="artist-drawer-backdrop" onClick={() => setSelected(null)}><aside className="artist-drawer" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Fechar perfil do artista"><X /></button><div className="drawer-photo" style={{ backgroundImage: `url(${selected.image})` }} />      <div className="drawer-copy"><p className="eyebrow">{selected.specialty} · Perfil fictício</p><h3>{selected.name}</h3><p>{selected.bio}</p><p className="body-copy">{selected.years} · Disponibilidade demonstrativa para trabalhos customizados.</p><a href="#book" className="button button-primary" onClick={() => setSelected(null)}>Agendar com {selected.name} <ArrowUpRight size={16} /></a></div></aside></div>}
    </section>
  )
}
