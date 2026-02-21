import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '¿Por qué no puedo llorar? El duelo seco y sin lágrimas | ColorMe',
  description: 'No llorar no significa que no amas. Descubre por qué algunas personas no pueden llorar en el duelo y qué formas alternativas existen para procesar el dolor.',
  keywords: ['no puedo llorar en el duelo', 'por qué no lloro por la muerte', 'duelo sin lágrimas', 'bloqueo emocional duelo', 'duelo seco'],
  alternates: {
    canonical: '/blog/por-que-no-puedo-llorar',
  },
  openGraph: {
    type: 'article',
    title: '¿Por qué no puedo llorar? El duelo seco y sin lágrimas | ColorMe',
    description: 'No llorar no significa que no amas. Descubre por qué algunas personas no pueden llorar en el duelo.',
    url: '/blog/por-que-no-puedo-llorar',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Por qué no puedo llorar? El duelo seco y sin lágrimas',
  description: 'No llorar no significa que no amas. Descubre por qué algunas personas no pueden llorar en el duelo y qué formas alternativas existen para procesar el dolor.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/por-que-no-puedo-llorar`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
