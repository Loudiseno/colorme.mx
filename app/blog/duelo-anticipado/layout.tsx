import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo anticipado: qué es y cómo manejarlo | ColorMe',
  description: 'El duelo anticipado es el dolor de perder a alguien que todavía está aquí. Descubre qué es, sus etapas y cómo atravesar este proceso.',
  keywords: ['duelo anticipado', 'duelo antes de la muerte', 'qué es el duelo anticipado', 'cómo manejar el duelo anticipado', 'duelo por enfermedad terminal'],
  alternates: {
    canonical: '/blog/duelo-anticipado',
  },
  openGraph: {
    type: 'article',
    title: 'Duelo anticipado: qué es y cómo manejarlo | ColorMe',
    description: 'El duelo anticipado es el dolor de perder a alguien que todavía está aquí.',
    url: '/blog/duelo-anticipado',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Duelo anticipado: qué es y cómo manejarlo',
  description: 'El duelo anticipado es el dolor de perder a alguien que todavía está aquí. Descubre qué es, sus etapas y cómo atravesar este proceso.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-anticipado`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
