import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cómo acompañar a alguien con cáncer terminal',
  description: 'Guía para acompañar a un ser querido con cáncer terminal. Qué decir, qué hacer y cómo estar presente en los momentos más difíciles.',
  keywords: ['cáncer terminal', 'acompañamiento', 'cuidados paliativos', 'duelo anticipado', 'tanatología'],
  alternates: {
    canonical: '/blog/como-acompanar-cancer-terminal',
  },
  openGraph: {
    type: 'article',
    title: 'Cómo acompañar a alguien con cáncer terminal | ColorMe',
    description: 'Guía para acompañar a un ser querido con cáncer terminal.',
    url: '/blog/como-acompanar-cancer-terminal',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cómo acompañar a alguien con cáncer terminal',
  description: 'Guía para acompañar a un ser querido con cáncer terminal.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/como-acompanar-cancer-terminal`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
