import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cómo superar la pérdida de un ser querido: 12 claves prácticas | ColorMe',
  description: 'Guía práctica para atravesar el duelo por la muerte de un ser querido. 12 claves que te ayudarán a transitar el dolor y encontrar momentos de paz.',
  keywords: ['superar pérdida', 'duelo ser querido', 'muerte familiar', 'proceso de duelo', 'cómo superar la muerte', 'etapas del duelo', 'acompañamiento duelo'],
  alternates: {
    canonical: '/blog/como-superar-la-perdida-de-un-ser-querido',
  },
  openGraph: {
    type: 'article',
    title: 'Cómo superar la pérdida de un ser querido: 12 claves prácticas | ColorMe',
    description: 'Guía práctica para atravesar el duelo por la muerte de un ser querido.',
    url: '/blog/como-superar-la-perdida-de-un-ser-querido',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cómo superar la pérdida de un ser querido: 12 claves prácticas',
  description: 'Guía práctica para atravesar el duelo por la muerte de un ser querido. 12 claves que te ayudarán a transitar el dolor y encontrar momentos de paz.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/como-superar-la-perdida-de-un-ser-querido`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
