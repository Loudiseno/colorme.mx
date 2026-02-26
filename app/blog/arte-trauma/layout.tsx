import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arte y trauma: cómo el proceso creativo ayuda a sanar | ColorMe',
  description: 'Por qué el arte funciona para procesar experiencias traumáticas.',
  keywords: ['arte y trauma', 'arteterapia trauma', 'sanar trauma con arte', 'proceso creativo sanación', 'trauma y creatividad'],
  alternates: {
    canonical: '/blog/arte-trauma',
  },
  openGraph: {
    type: 'article',
    title: 'Arte y trauma: cómo el proceso creativo ayuda a sanar | ColorMe',
    description: 'Por qué el arte funciona para procesar experiencias traumáticas.',
    url: '/blog/arte-trauma',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arte y trauma: cómo el proceso creativo ayuda a sanar',
  description: 'Por qué el arte funciona para procesar experiencias traumáticas.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/arte-trauma`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
