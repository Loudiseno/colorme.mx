import {
  lugares,
  gente,
  intervenida,
  producto,
  pinturas,
  mixtas,
  localize,
  localizePieces,
  groupByCountry,
} from '@/lib/obra'

export interface GaleriaDef {
  slug: string
  title: string
  titleEn: string
  intro: string
  introEn: string
  /** Sólo la galería de lugares se agrupa en columnas por país */
  grouped?: boolean
  images: (en: boolean) => { src: string; alt: string; caption?: string }[]
}

export const galerias: GaleriaDef[] = [
  {
    slug: 'lugares',
    title: 'Lugares',
    titleEn: 'Places',
    intro: 'Fotografías reunidas por país, en el orden en que las fui encontrando.',
    introEn: 'Photographs gathered by country, in the order I came across them.',
    grouped: true,
    images: (en) => localize(lugares, en),
  },
  {
    slug: 'gente',
    title: 'Gente',
    titleEn: 'People',
    intro: 'Retratos y escenas de las personas que me he encontrado en el camino.',
    introEn: 'Portraits and scenes of the people I have met along the way.',
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
    intro: 'Acuarela, óleo y acrílico: el color y las formas como lenguaje propio.',
    introEn: 'Watercolor, oil, and acrylic: color and shape as a language of their own.',
    images: (en) => localizePieces(pinturas, en),
  },
  {
    slug: 'tecnicas-mixtas',
    title: 'Técnicas mixtas',
    titleEn: 'Mixed media',
    intro: 'Periódicos, mapas y objetos encontrados integrados en la obra.',
    introEn: 'Newspapers, maps, and found objects woven into the work.',
    images: (en) => localizePieces(mixtas, en),
  },
]

export function getGaleria(slug: string) {
  return galerias.find((g) => g.slug === slug)
}

export function allGaleriaSlugs() {
  return galerias.map((g) => g.slug)
}

export function galeriaGroups(slug: string, en: boolean) {
  if (slug !== 'lugares') return undefined
  return groupByCountry(lugares, en).map((g) => ({
    title: g.country,
    items: g.items.map((p) => ({
      src: p.src,
      alt: p.alt,
      caption: en ? p.captionEn : p.caption,
    })),
  }))
}
