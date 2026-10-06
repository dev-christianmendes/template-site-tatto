export type TattooCategory = 'Traditional' | 'Blackwork' | 'Roses' | 'Daggers' | 'Snakes' | 'Eagles' | 'Hearts'

export type Tattoo = {
  id: number
  title: string
  category: TattooCategory
  artist: string
  detail: string
  image: string
  className: string
}

export const tattooCategories = ['All', 'Traditional', 'Blackwork', 'Roses', 'Daggers', 'Snakes', 'Eagles', 'Hearts'] as const

export const tattoos: Tattoo[] = [
  { id: 1, title: 'Rosa em Chamas', category: 'Roses', artist: 'Artista Demo 01', detail: 'Rosa colorida / braço', image: 'https://images.unsplash.com/photo-1598373182133-52452f7691d0?auto=format&fit=crop&w=900&q=80', className: 'flash-tall' },
  { id: 2, title: 'Norte Verdadeiro', category: 'Traditional', artist: 'Artista Demo 02', detail: 'Tradicional americano / antebraço', image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=80', className: '' },
  { id: 3, title: 'Olhar da Serpente', category: 'Snakes', artist: 'Artista Demo 03', detail: 'Preto e vermelho / panturrilha', image: 'https://images.unsplash.com/photo-1541713970063-ca9613c37f2b?auto=format&fit=crop&w=900&q=80', className: 'flash-wide' },
  { id: 4, title: 'Golpe de Sorte', category: 'Hearts', artist: 'Artista Demo 01', detail: 'Coração tradicional / peito', image: 'https://images.unsplash.com/photo-1590246814883-57c511e7c2d6?auto=format&fit=crop&w=900&q=80', className: 'flash-small' },
  { id: 5, title: 'Aço e Sangue', category: 'Daggers', artist: 'Artista Demo 02', detail: 'Tradicional delicada / costelas', image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=900&q=80', className: '' },
  { id: 6, title: 'Pássaro Negro', category: 'Blackwork', artist: 'Artista Demo 03', detail: 'Blackwork pesado / ombro', image: 'https://images.unsplash.com/photo-1568515045052-f9a854d70fd0?auto=format&fit=crop&w=900&q=80', className: 'flash-tall' },
]
