import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo por la pérdida de una amistad',
  description: 'El duelo por perder una amistad es real. Guía para procesar el fin de una relación de amistad importante.',
  keywords: ['duelo amistad', 'pérdida de amistad', 'fin de amistad', 'duelo', 'relaciones'],
  alternates: { canonical: '/blog/duelo-amistad-perdida' },
  openGraph: { type: 'article', title: 'Duelo por la pérdida de una amistad | ColorMe', url: '/blog/duelo-amistad-perdida' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Duelo por la pérdida de una amistad',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-amistad-perdida`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
