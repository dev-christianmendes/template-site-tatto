export type Artist = {
  name: string
  specialty: string
  years: string
  bio: string
  image: string
}

export const artists: Artist[] = [
  { name: 'Artista Demo 01', specialty: 'Tradicional / Blackwork', years: 'Perfil fictício · 14 anos', bio: 'Perfil demonstrativo inspirado nos cadernos clássicos de flash: linhas fortes, cores honestas e uma queda por rosas que envelhecem bem.', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=900&q=85' },
  { name: 'Artista Demo 02', specialty: 'Tradicional delicada / Lettering', years: 'Perfil fictício · 9 anos', bio: 'Perfil demonstrativo que combina formas clássicas, peso old school, lettering delicado e composições customizadas.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85' },
  { name: 'Artista Demo 03', specialty: 'Tradicional americana', years: 'Perfil fictício · 18 anos', bio: 'Perfil demonstrativo dedicado a águias, punhais, serpentes e pretos que permanecem pretos.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85' },
]
