import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '¿Por qué nos incomoda hablar de la muerte? | ColorMe',
  description: 'La muerte es el único destino que compartimos todos, y sin embargo evitamos nombrarla.',
  keywords: ['hablar de la muerte', 'tabú muerte', 'miedo a la muerte', 'conversaciones difíciles'],
  alternates: {
    canonical: '/blog/hablar-de-la-muerte',
  },
  openGraph: {
    type: 'article',
    title: '¿Por qué nos incomoda hablar de la muerte? | ColorMe',
    description: 'La muerte es el único destino que compartimos todos, y sin embargo evitamos nombrarla.',
    url: '/blog/hablar-de-la-muerte',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Por qué nos incomoda hablar de la muerte?',
  description: 'La muerte es el único destino que compartimos todos, y sin embargo evitamos nombrarla.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/hablar-de-la-muerte`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
