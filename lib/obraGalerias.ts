import {
  lugares,
  gente,
  intervenida,
  producto,
  pintura,
  localize,
  localizePieces,
} from '@/lib/obra'

export interface GaleriaDef {
  slug: string
  title: string
  titleEn: string
  intro: string
  introEn: string
  images: (en: boolean) => { src: string; alt: string; caption?: string }[]
}

export const galerias: GaleriaDef[] = [
  {
    slug: 'lugares',
    title: 'Lugares',
    titleEn: 'Places',
    intro: 'Fotografías de los lugares que me he ido encontrando en el camino.',
    introEn: 'Photographs of the places I have come across along the way.',
    images: (en) => localize(lugares, en),
  },
  {
    slug: 'gente',
    title: 'Gente',
    titleEn: 'People',
    intro: 'Miradas y sonrisas con las que he coincidido. Encuentros de un instante que, sin palabras y sin volver a repetirse, dejaron algo.',
    introEn: 'Glances and smiles I have crossed paths with. Encounters that lasted an instant and, without a word and never repeated, left something behind.',
    images: (en) => localize(gente, en),
  },
  {
    slug: 'producto',
    title: 'Producto',
    titleEn: 'Product',
    intro: 'Fotografía de producto y gastronómica realizada para distintos clientes.',
    introEn: 'Product and food photography made for a range of clients.',
    images: (en) => localizePieces(producto, en),
  },
  {
    slug: 'intervenida',
    title: 'Fotografía intervenida',
    titleEn: 'Intervened photography',
    intro: 'Cada fotografía deja de ser una imagen repetible para volverse una pieza única.',
    introEn: 'Each photograph stops being a repeatable image and becomes a unique piece.',
    images: (en) => localizePieces(intervenida, en),
  },
  {
    slug: 'pintura',
    title: 'Pintura',
    titleEn: 'Painting',
    intro: 'Acuarela, óleo y acrílico, junto con periódicos y objetos encontrados en el camino.',
    introEn: 'Watercolour, oil, and acrylic, alongside newspapers and objects found along the way.',
    images: (en) => localizePieces(pintura, en),
  },
]

export function getGaleria(slug: string) {
  return galerias.find((g) => g.slug === slug)
}

export function allGaleriaSlugs() {
  return galerias.map((g) => g.slug)
}

