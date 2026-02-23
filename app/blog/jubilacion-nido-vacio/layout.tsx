import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cuando la casa se vacia y el trabajo termina: los duelos de la vida adulta | ColorMe',
  description: 'Lo que nadie te preparo para sentir despues de los 50. Duelo por jubilacion y sindrome del nido vacio.',
  keywords: ['sindrome nido vacio', 'duelo jubilacion', 'hijos se van', 'duelo vida adulta', 'retiro emocional'],
  alternates: {
    canonical: '/blog/jubilacion-nido-vacio',
  },
  openGraph: {
    type: 'article',
    title: 'Cuando la casa se vacia y el trabajo termina: los duelos de la vida adulta | ColorMe',
    description: 'Lo que nadie te preparo para sentir despues de los 50. Duelo por jubilacion y sindrome del nido vacio.',
    url: '/blog/jubilacion-nido-vacio',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuando la casa se vacia y el trabajo termina: los duelos de la vida adulta',
  description: 'Lo que nadie te preparo para sentir despues de los 50. Duelo por jubilacion y sindrome del nido vacio.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/jubilacion-nido-vacio`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
