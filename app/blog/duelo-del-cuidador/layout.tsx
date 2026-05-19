import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El Duelo del Cuidador | Cuando Cuidar También Duele',
  description: 'El duelo del cuidador es real. Descubre cómo cuidar a otro también te rompe por dentro y cómo sanar ese dolor silencioso.',
  keywords: ['duelo del cuidador', 'cuidador primario', 'burnout cuidador', 'agotamiento cuidador', 'duelo anticipado'],
  alternates: {
    canonical: '/blog/duelo-del-cuidador',
  },
  openGraph: {
    type: 'article',
    title: 'El Duelo del Cuidador | ColorMe',
    description: 'El duelo del cuidador es real. Descubre cómo sanar ese dolor silencioso.',
    url: '/blog/duelo-del-cuidador',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El Duelo del Cuidador: Cuando Cuidar a Otro También te Rompe por Dentro',
  description: 'El duelo del cuidador es real. Descubre cómo sanar ese dolor silencioso.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-del-cuidador`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
