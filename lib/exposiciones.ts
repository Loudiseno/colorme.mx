// ============================================================================
// EXPOSICIONES INDIVIDUALES
// Fuente única para /obra y /obra/[slug] (y sus equivalentes en inglés).
// ============================================================================

export interface ExpoWork {
  title: string
  location: string
  technique: string
  dimensions?: string
  image?: string
  /** Fotografía que dio origen a la pieza (lugar retratado) */
  reference?: string
}

export interface Expo {
  slug: string
  title: string
  place: string
  date: string
  cover?: string
  coverAlt?: string
  statement: string[]
  works?: ExpoWork[]
}

export const exposicionesEs: Expo[] = [
  {
    slug: 'luces-de-existencia',
    title: 'Luces de existencia',
    place: 'Galería Aguafuerte, CDMX',
    date: '2016',
    cover: '/expo-luces-de-existencia.jpg',
    coverAlt: 'Luces de existencia — exposición individual en Galería Aguafuerte, CDMX',
    statement: [
      'Esta serie surge a partir de la agitación que me provocan los colores en los paisajes.',
      'Las tonalidades son el alma de los lugares: guardan su espíritu, te cuentan historias, son la huella viva de lo que ahí sucede, reflejos que se unen para crear un todo.',
      'La finalidad de este proyecto es reducir a su esencia los lugares que he visitado y fotografiado, por medio de la abstracción de los colores percibidos, para plasmar en un lienzo su existencia.',
    ],
    works: [
      {
        title: 'Ventana Azul',
        location: 'Gozo, Malta',
        technique: 'Técnica mixta sobre MDF en periódico «L-Orizzont» de la República de Malta, 2015',
        dimensions: '86 × 66 cm',
        image: '/luces-ventana-azul.jpeg',
        reference: '/luces-ventana-azul-ref.png',
      },
      {
        title: 'Susurros',
        location: 'Garfagnana, Italia',
        technique: 'Técnica mixta sobre MDF en periódico «La Nazione», número especial de Centenario, Italia, 1959',
        dimensions: '86 × 66 cm',
        image: '/luces-susurros.jpeg',
        reference: '/luces-susurros-ref.png',
      },
      {
        title: 'Caminos',
        location: 'Acapulco, México',
        technique: 'Técnica mixta sobre lienzo',
        dimensions: '90 × 70.5 cm',
        image: '/luces-caminos.jpeg',
        reference: '/luces-caminos-ref.png',
      },
      {
        title: 'La Tregua',
        location: 'Puerto Escondido, México',
        technique: 'Técnica mixta sobre MDF en periódico «Excélsior» de la Ciudad de México, 1990',
        dimensions: '86 × 66 cm',
        image: '/luces-la-tregua.jpeg',
        reference: '/luces-la-tregua-ref.png',
      },
      {
        title: 'Melancolía',
        location: 'Mahahual, México',
        technique: 'Técnica mixta sobre lienzo',
        dimensions: '90.5 × 70 cm',
        image: '/luces-melancolia.jpeg',
        reference: '/luces-melancolia-ref.png',
      },
      {
        title: 'Ecos de ocaso',
        location: 'Progreso, México',
        technique: 'Técnica mixta sobre MDF',
        dimensions: '59.5 × 50.5 cm',
        image: '/luces-ecos-de-ocaso.jpeg',
        reference: '/luces-ecos-de-ocaso-ref.png',
      },
      {
        title: 'A lo alto',
        location: 'Ciudad de México, México',
        technique: 'Técnica mixta sobre lienzo',
        dimensions: '90.5 × 70 cm',
        image: '/luces-a-lo-alto.jpeg',
        reference: '/luces-a-lo-alto-ref.png',
      },
    ],
  },
  {
    slug: 'reinterpretando',
    title: 'Reinterpretando',
    place: 'Restaurante Pizza Local, CDMX',
    date: '2017',
    statement: [
      'Nos convertimos en los lugares que visitamos, la comida que probamos, las personas que amamos. Esta muestra habla de algunos de esos momentos: es una representación física de piezas de mi memoria.',
      'Las obras aluden a instantes, paisajes, personas y objetos que me inspiraron, que me detuvieron para ser admirados y recordados. Hago una especie de fotografía mental y la traduzco a los colores que yo les asigné, con la magia que sentí, para volver a vivirlos un sinfín de veces.',
      'Ambos resultados enfatizan la importancia de comprender los matices de nuestra existencia, los claros y oscuros que en conjunto crearon una obra de arte que llamamos vida. Te invitan a ver a través de mis ojos, comprendiendo el valor de que cada persona tiene una forma única y válida de interpretar el universo.',
    ],
    cover: '/reinterpretando-expo.jpeg',
    coverAlt: 'Reinterpretando — exposición individual',
    works: [
      {
        title: 'La Habana, Cuba',
        location: 'La Habana, Cuba',
        technique: 'Fotografía intervenida con acuarela y acrílico',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-cuba.jpeg',
      },
      {
        title: 'Florencia, Italia',
        location: 'Florencia, Italia',
        technique: 'Fotografía intervenida con acuarela y acrílico',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-firenze.jpeg',
      },
      {
        title: 'Lucca, Italia',
        location: 'Lucca, Italia',
        technique: 'Fotografía intervenida con acuarela y acrílico',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-lucca.jpeg',
      },
      {
        title: 'Gozo, Malta',
        location: 'Gozo, Malta',
        technique: 'Fotografía intervenida con acuarela y acrílico',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-malta.jpeg',
      },
      {
        title: 'Progreso, México',
        location: 'Progreso, México',
        technique: 'Fotografía intervenida con acuarela y acrílico',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-progreso.jpeg',
      },
      {
        title: 'Valle de Bravo, México',
        location: 'Valle de Bravo, México',
        technique: 'Fotografía intervenida con acuarela y acrílico',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-valle-de-bravo.jpeg',
      },
    ],
  },
  {
    slug: 'memorias',
    title: 'Memorias',
    place: 'Cafetería Healthy Nutrition, CDMX',
    date: '2018',
    statement: [
      'Memoria. 1. f. Capacidad para recordar hechos o experiencias del pasado.',
      'Y al final eso somos: lo que probamos, vivimos, sentimos, disfrutamos, conocemos y experimentamos. Esos instantes que se quedan para siempre en nuestra mente, los recuerdos que van formando nuestro camino.',
      'La exposición recopila algunas de mis memorias representadas mediante diferentes técnicas: fotografía, pintura y fotografía intervenida con pintura. Es mi obra —mi aura— la que habla mejor que mis palabras: es el interior de mi alma.',
    ],
    cover: '/memorias-expo.jpeg',
    coverAlt: 'Memorias — exposición individual',
    works: [
      {
        title: 'La Habana, Cuba',
        location: 'La Habana, Cuba',
        technique: 'Fotografía',
        dimensions: '90 × 60 cm',
        image: '/memorias-la-habana.jpeg',
      },
      {
        title: 'Cuba',
        location: 'Cuba',
        technique: 'Fotografía',
        dimensions: '90 × 60 cm',
        image: '/memorias-cuba.jpeg',
      },
      {
        title: 'Gozo, Malta',
        location: 'Gozo, Malta',
        technique: 'Fotografía',
        dimensions: '90 × 60 cm',
        image: '/memorias-gozo.jpeg',
      },
      {
        title: 'Malta',
        location: 'Malta',
        technique: 'Fotografía',
        dimensions: '90 × 60 cm',
        image: '/memorias-malta.jpeg',
      },
      {
        title: 'Portofino, Italia',
        location: 'Portofino, Italia',
        technique: 'Fotografía',
        dimensions: '90 × 60 cm',
        image: '/memorias-portofino.jpeg',
      },
      {
        title: 'Ciudad de México, México',
        location: 'Ciudad de México, México',
        technique: 'Fotografía',
        dimensions: '90 × 60 cm',
        image: '/memorias-cdmx.jpeg',
      },
    ],
  },
]

export const exposicionesEn: Expo[] = [
  {
    slug: 'luces-de-existencia',
    title: 'Luces de existencia',
    place: 'Galería Aguafuerte, Mexico City',
    date: '2016',
    cover: '/expo-luces-de-existencia.jpg',
    coverAlt: 'Luces de existencia — solo exhibition at Galería Aguafuerte, Mexico City',
    statement: [
      'This series grew out of the stir that colour in landscapes provokes in me.',
      'Tones are the soul of places: they hold their spirit, they tell you stories, they are the living trace of what happens there, reflections that come together to create a whole.',
      'The aim of this project is to reduce the places I have visited and photographed to their essence, through the abstraction of the colours perceived, to set their existence down on a canvas.',
    ],
    works: [
      {
        title: 'Ventana Azul',
        location: 'Gozo, Malta',
        technique: 'Mixed media on MDF over the newspaper «L-Orizzont» of the Republic of Malta, 2015',
        dimensions: '86 × 66 cm',
        image: '/luces-ventana-azul.jpeg',
        reference: '/luces-ventana-azul-ref.png',
      },
      {
        title: 'Susurros',
        location: 'Garfagnana, Italy',
        technique: 'Mixed media on MDF over the newspaper «La Nazione», Centenary special edition, Italy, 1959',
        dimensions: '86 × 66 cm',
        image: '/luces-susurros.jpeg',
        reference: '/luces-susurros-ref.png',
      },
      {
        title: 'Caminos',
        location: 'Acapulco, Mexico',
        technique: 'Mixed media on canvas',
        dimensions: '90 × 70.5 cm',
        image: '/luces-caminos.jpeg',
        reference: '/luces-caminos-ref.png',
      },
      {
        title: 'La Tregua',
        location: 'Puerto Escondido, Mexico',
        technique: 'Mixed media on MDF over the newspaper «Excélsior» of Mexico City, 1990',
        dimensions: '86 × 66 cm',
        image: '/luces-la-tregua.jpeg',
        reference: '/luces-la-tregua-ref.png',
      },
      {
        title: 'Melancolía',
        location: 'Mahahual, Mexico',
        technique: 'Mixed media on canvas',
        dimensions: '90.5 × 70 cm',
        image: '/luces-melancolia.jpeg',
        reference: '/luces-melancolia-ref.png',
      },
      {
        title: 'Ecos de ocaso',
        location: 'Progreso, Mexico',
        technique: 'Mixed media on MDF',
        dimensions: '59.5 × 50.5 cm',
        image: '/luces-ecos-de-ocaso.jpeg',
        reference: '/luces-ecos-de-ocaso-ref.png',
      },
      {
        title: 'A lo alto',
        location: 'Mexico City, Mexico',
        technique: 'Mixed media on canvas',
        dimensions: '90.5 × 70 cm',
        image: '/luces-a-lo-alto.jpeg',
        reference: '/luces-a-lo-alto-ref.png',
      },
    ],
  },
  {
    slug: 'reinterpretando',
    title: 'Reinterpretando',
    place: 'Restaurante Pizza Local, Mexico City',
    date: '2017',
    statement: [
      'We become the places we visit, the food we taste, the people we love. This show speaks of some of those moments: it is a physical representation of pieces of my memory.',
      'The works allude to instants, landscapes, people and objects that inspired me, that stopped me to be admired and remembered. I take a kind of mental photograph and translate it into the colours I assigned to it, with the magic I felt, so I can live those moments again countless times.',
      'Both outcomes emphasise how important it is to understand the nuances of our existence, the lights and shadows that together created a work of art we call life. They invite you to see through my eyes, understanding the value in the fact that every person has a unique and valid way of interpreting the universe.',
    ],
    cover: '/reinterpretando-expo.jpeg',
    coverAlt: 'Reinterpretando — solo exhibition',
    works: [
      {
        title: 'La Habana, Cuba',
        location: 'La Habana, Cuba',
        technique: 'Photograph intervened with watercolour and acrylic',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-cuba.jpeg',
      },
      {
        title: 'Florence, Italy',
        location: 'Florence, Italy',
        technique: 'Photograph intervened with watercolour and acrylic',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-firenze.jpeg',
      },
      {
        title: 'Lucca, Italy',
        location: 'Lucca, Italy',
        technique: 'Photograph intervened with watercolour and acrylic',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-lucca.jpeg',
      },
      {
        title: 'Gozo, Malta',
        location: 'Gozo, Malta',
        technique: 'Photograph intervened with watercolour and acrylic',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-malta.jpeg',
      },
      {
        title: 'Progreso, Mexico',
        location: 'Progreso, Mexico',
        technique: 'Photograph intervened with watercolour and acrylic',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-progreso.jpeg',
      },
      {
        title: 'Valle de Bravo, Mexico',
        location: 'Valle de Bravo, Mexico',
        technique: 'Photograph intervened with watercolour and acrylic',
        dimensions: '90 × 60 cm',
        image: '/reinterpretando-valle-de-bravo.jpeg',
      },
    ],
  },
  {
    slug: 'memorias',
    title: 'Memorias',
    place: 'Cafetería Healthy Nutrition, Mexico City',
    date: '2018',
    statement: [
      'Memory. 1. n. The capacity to recall facts or experiences from the past.',
      'And in the end that is what we are: what we taste, live, feel, enjoy, come to know and experience. Those instants that stay in our mind forever, the memories that shape our path.',
      'This exhibition gathers some of my memories, rendered through different techniques: photography, painting, and photography intervened with paint. It is my work —my aura— that speaks better than my words: it is the inside of my soul.',
    ],
    cover: '/memorias-expo.jpeg',
    coverAlt: 'Memorias — solo exhibition',
    works: [
      {
        title: 'La Habana, Cuba',
        location: 'La Habana, Cuba',
        technique: 'Photography',
        dimensions: '90 × 60 cm',
        image: '/memorias-la-habana.jpeg',
      },
      {
        title: 'Cuba',
        location: 'Cuba',
        technique: 'Photography',
        dimensions: '90 × 60 cm',
        image: '/memorias-cuba.jpeg',
      },
      {
        title: 'Gozo, Malta',
        location: 'Gozo, Malta',
        technique: 'Photography',
        dimensions: '90 × 60 cm',
        image: '/memorias-gozo.jpeg',
      },
      {
        title: 'Malta',
        location: 'Malta',
        technique: 'Photography',
        dimensions: '90 × 60 cm',
        image: '/memorias-malta.jpeg',
      },
      {
        title: 'Portofino, Italy',
        location: 'Portofino, Italy',
        technique: 'Photography',
        dimensions: '90 × 60 cm',
        image: '/memorias-portofino.jpeg',
      },
      {
        title: 'Mexico City, Mexico',
        location: 'Mexico City, Mexico',
        technique: 'Photography',
        dimensions: '90 × 60 cm',
        image: '/memorias-cdmx.jpeg',
      },
    ],
  },
]

export function getExpo(slug: string, en = false): Expo | undefined {
  return (en ? exposicionesEn : exposicionesEs).find((e) => e.slug === slug)
}

export function allExpoSlugs(): string[] {
  return exposicionesEs.map((e) => e.slug)
}
