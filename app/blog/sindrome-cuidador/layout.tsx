import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El síndrome del cuidador primario | ColorMe',
  description: 'Cuando cuidar a otros te consume. Guía para quienes dan tanto que se olvidan de sí mismos.',
  keywords: ['síndrome del cuidador', 'burnout cuidador', 'cuidador primario', 'agotamiento emocional'],
  alternates: {
    canonical: '/blog/sindrome-cuidador',
  },
  openGraph: {
    type: 'article',
    title: 'El síndrome del cuidador primario | ColorMe',
    description: 'Cuando cuidar a otros te consume. Guía para quienes dan tanto que se olvidan de sí mismos.',
    url: '/blog/sindrome-cuidador',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El síndrome del cuidador primario',
  description: 'Cuando cuidar a otros te consume. Guía para quienes dan tanto que se olvidan de sí mismos.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/sindrome-cuidador`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
