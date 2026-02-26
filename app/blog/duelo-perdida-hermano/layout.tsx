import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo por la perdida de un hermano | ColorMe',
  description: 'El vinculo que nadie entiende. Para quienes perdieron a su companero de vida.',
  keywords: ['duelo por hermano', 'perdida de hermano', 'duelo fraternal', 'muerte de hermano', 'duelo invisible'],
  alternates: { canonical: '/blog/duelo-perdida-hermano' },
  openGraph: {
    type: 'article',
    title: 'El duelo por la perdida de un hermano | ColorMe',
    description: 'El vinculo que nadie entiende. Para quienes perdieron a su companero de vida.',
    url: '/blog/duelo-perdida-hermano',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo por la perdida de un hermano',
  description: 'El vinculo que nadie entiende. Para quienes perdieron a su companero de vida.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-perdida-hermano`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
