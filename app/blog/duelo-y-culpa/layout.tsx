import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Culpa y Duelo | Por Qué Nos Sentimos Culpables Después de una Pérdida',
  description: 'La culpa en el duelo es común. Descubre por qué nos sentimos culpables después de una pérdida y cómo liberarte de ese peso.',
  keywords: ['culpa y duelo', 'sentirse culpable', 'duelo culpa', 'superar culpa', 'culpa por muerte'],
  alternates: {
    canonical: '/blog/duelo-y-culpa',
  },
  openGraph: {
    type: 'article',
    title: 'Culpa y Duelo | ColorMe',
    description: 'Descubre por qué nos sentimos culpables después de una pérdida.',
    url: '/blog/duelo-y-culpa',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Culpa y Duelo: Por Qué Nos Sentimos Culpables Después de una Pérdida',
  description: 'Descubre por qué nos sentimos culpables después de una pérdida.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-y-culpa`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
