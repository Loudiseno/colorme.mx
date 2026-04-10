import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Navidad en Duelo | Cómo Sobrevivir las Fiestas',
  description: 'Cómo sobrevivir la Navidad cuando estás en duelo. Guía para atravesar las fiestas cuando el corazón está de luto.',
  keywords: ['navidad en duelo', 'fiestas en duelo', 'duelo navidad', 'primer navidad sin', 'fiestas decembrinas duelo'],
  alternates: {
    canonical: '/blog/navidad-en-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'Navidad en Duelo | ColorMe',
    description: 'Cómo sobrevivir la Navidad cuando estás en duelo.',
    url: '/blog/navidad-en-duelo',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Navidad en Duelo: Cómo Sobrevivir las Fiestas Cuando el Corazón Está de Luto',
  description: 'Cómo sobrevivir la Navidad cuando estás en duelo.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/navidad-en-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
