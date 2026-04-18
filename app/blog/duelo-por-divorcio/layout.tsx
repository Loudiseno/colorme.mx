import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo por Divorcio | Un Dolor Real que Merece Reconocimiento',
  description: 'El duelo por divorcio es un dolor real. Aprende a transitar la separación y el fin de una relación con acompañamiento.',
  keywords: ['duelo por divorcio', 'duelo separación', 'superar divorcio', 'fin de relación', 'ruptura amorosa'],
  alternates: {
    canonical: '/blog/duelo-por-divorcio',
  },
  openGraph: {
    type: 'article',
    title: 'Duelo por Divorcio | ColorMe',
    description: 'El duelo por divorcio es un dolor real que merece ser reconocido.',
    url: '/blog/duelo-por-divorcio',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El Duelo por Divorcio: Un Dolor Real que Merece ser Reconocido',
  description: 'El duelo por divorcio es un dolor real que merece ser reconocido.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-por-divorcio`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
