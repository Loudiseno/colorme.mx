import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cuando pierdes la fe: el duelo espiritual | ColorMe',
  description: 'Dejar de creer también es una pérdida. Guía para atravesar el duelo espiritual.',
  keywords: ['duelo espiritual', 'pérdida de fe', 'crisis de fe', 'dejar de creer', 'duelo religioso'],
  alternates: {
    canonical: '/blog/perder-la-fe',
  },
  openGraph: {
    type: 'article',
    title: 'Cuando pierdes la fe: el duelo espiritual | ColorMe',
    description: 'Dejar de creer también es una pérdida. Guía para atravesar el duelo espiritual.',
    url: '/blog/perder-la-fe',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuando pierdes la fe: el duelo espiritual',
  description: 'Dejar de creer también es una pérdida. Guía para atravesar el duelo espiritual.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/perder-la-fe`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
