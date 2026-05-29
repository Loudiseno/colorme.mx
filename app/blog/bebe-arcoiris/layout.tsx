import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Bebé arcoíris: la luz que llega después de la tormenta | ColorMe',
  description: 'El bebé arcoíris es el que nace después de una pérdida gestacional. Un embarazo lleno de emociones encontradas: alegría, miedo, culpa y amor.',
  keywords: ['bebé arcoíris', 'embarazo arcoíris', 'después de pérdida gestacional', 'aborto espontáneo nuevo embarazo', 'bebé estrella', 'duelo perinatal', 'tanatología'],
  alternates: { canonical: '/blog/bebe-arcoiris' },
  openGraph: {
    type: 'article',
    title: 'Bebé arcoíris: la luz que llega después de la tormenta | ColorMe',
    description: 'El bebé arcoíris llega después de una pérdida. No borra la tormenta, pero trae luz.',
    url: '/blog/bebe-arcoiris',
    images: [{ url: '/bebe-arcoiris.jpg', alt: 'Bebé arcoíris después de una pérdida gestacional' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bebé arcoíris: la luz que llega después de la tormenta',
  description: 'El bebé arcoíris es el que nace después de una pérdida gestacional. Un embarazo lleno de emociones encontradas.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/bebe-arcoiris`,
  inLanguage: 'es-MX',
  about: { '@type': 'Thing', name: 'Bebé arcoíris' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  )
}
