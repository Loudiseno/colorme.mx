import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Los primeros dias despues de la muerte de un ser querido | ColorMe',
  description: 'Sobrevivir cuando el mundo se derrumba.',
  keywords: ['primeros dias despues de la muerte', 'duelo agudo', 'shock por muerte', 'como sobrevivir el duelo'],
  alternates: { canonical: '/blog/primeros-dias-muerte' },
  openGraph: {
    type: 'article',
    title: 'Los primeros dias despues de la muerte de un ser querido | ColorMe',
    description: 'Sobrevivir cuando el mundo se derrumba.',
    url: '/blog/primeros-dias-muerte',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Los primeros dias despues de la muerte de un ser querido',
  description: 'Sobrevivir cuando el mundo se derrumba.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/primeros-dias-muerte`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
