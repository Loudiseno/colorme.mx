import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo complicado: qué es y cuándo buscar ayuda | ColorMe',
  description: 'Cómo identificar cuando el duelo necesita atención profesional.',
  keywords: ['duelo complicado', 'duelo patológico', 'duelo prolongado', 'cuándo buscar ayuda duelo', 'señales duelo complicado'],
  alternates: {
    canonical: '/blog/duelo-complicado',
  },
  openGraph: {
    type: 'article',
    title: 'Duelo complicado: qué es y cuándo buscar ayuda | ColorMe',
    description: 'Cómo identificar cuando el duelo necesita atención profesional.',
    url: '/blog/duelo-complicado',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Duelo complicado: qué es y cuándo buscar ayuda',
  description: 'Cómo identificar cuando el duelo necesita atención profesional.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-complicado`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
