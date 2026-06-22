import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Día del Padre cuando tu papá ya no está | ColorMe',
  description: 'Cómo transitar el Día del Padre en duelo: cuando tu papá murió, cuando la relación era complicada, o cuando extrañas al padre que nunca tuviste.',
  keywords: ['día del padre duelo', 'día del padre sin papá', 'perder al padre', 'duelo por padre', 'día del padre complicado', 'extrañar a papá', 'muerte del padre'],
  alternates: {
    canonical: '/blog/dia-del-padre-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'Día del Padre cuando tu papá ya no está | ColorMe',
    description: 'Cómo transitar el Día del Padre en duelo: cuando tu papá murió, cuando la relación era complicada, o cuando extrañas al padre que nunca tuviste.',
    url: '/blog/dia-del-padre-duelo',
    images: [{ url: '/duelo-por-padre.jpeg', width: 1200, height: 630, alt: 'Día del Padre en duelo - ColorMe' }],
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Día del Padre cuando tu papá ya no está (o cuando la relación nunca fue lo que esperabas)',
  description: 'Cómo transitar el Día del Padre en duelo: cuando tu papá murió, cuando la relación era complicada, o cuando extrañas al padre que nunca tuviste.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/dia-del-padre-duelo`,
  image: `${siteConfig.url}/duelo-por-padre.jpeg`,
  datePublished: '2026-06-15',
  dateModified: '2026-06-15',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
