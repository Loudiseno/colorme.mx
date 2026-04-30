import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Las 7 etapas del duelo: mito y realidad',
  description: 'Todo lo que necesitas saber sobre las etapas del duelo. ¿Son reales? ¿Hay que pasarlas en orden? La verdad sobre el proceso de duelo.',
  keywords: ['etapas del duelo', '7 etapas', 'proceso de duelo', 'Kübler-Ross', 'duelo', 'tanatología'],
  alternates: { canonical: '/blog/siete-etapas-del-duelo' },
  openGraph: { type: 'article', title: 'Las 7 etapas del duelo | ColorMe', url: '/blog/siete-etapas-del-duelo' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Las 7 etapas del duelo: mito y realidad',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/siete-etapas-del-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
