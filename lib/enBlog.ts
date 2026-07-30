// Single source of truth for the English blog index and sitemap.
// Add an entry here each time a new English article page is created.

export interface EnArticle {
  slug: string
  title: string
  description: string
  image: string
  alt: string
  category: 'Grief' | 'Art Therapy'
}

export const enArticles: EnArticle[] = [
  {
    slug: 'what-is-grief',
    title: 'What Is Grief? Understanding Loss and How to Move Through It',
    description: 'Grief is the natural response to any meaningful loss. What it is, why it hurts so much, and how to move through it without losing yourself.',
    image: '/el-duelo.webp',
    alt: 'What is grief?',
    category: 'Grief',
  },
  {
    slug: 'how-long-does-grief-last',
    title: 'How Long Does Grief Last? An Honest Answer',
    description: 'There is no expiration date for grief — but it does not stay this intense forever. What science says, what influences it, and signs you are moving forward.',
    image: '/cuanto-dura-el-duelo.webp',
    alt: 'How long does grief last?',
    category: 'Grief',
  },
]
