import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cómo superar la pérdida de un ser querido: 12 claves prácticas | ColorMe',
  description: 'Herramientas concretas para transitar el duelo y encontrar momentos de paz.',
  keywords: ['superar pérdida ser querido', 'cómo superar un duelo', 'duelo muerte ser querido', 'herramientas para el duelo', 'proceso de duelo'],
  alternates: {
    canonical: '/blog/superar-perdida-ser-querido',
  },
  openGraph: {
    type: 'article',
    title: 'Cómo superar la pérdida de un ser querido: 12 claves prácticas | ColorMe',
    description: 'Herramientas concretas para transitar el duelo y encontrar momentos de paz.',
    url: '/blog/superar-perdida-ser-querido',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cómo superar la pérdida de un ser querido: 12 claves prácticas',
  description: 'Herramientas concretas para transitar el duelo y encontrar momentos de paz.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/superar-perdida-ser-querido`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
