import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo por una persona desaparecida | ColorMe',
  description: 'Cuando no sabes si buscar o despedirte. El dolor que no puede cerrarse.',
  keywords: ['duelo por desaparicion', 'perdida ambigua', 'persona desaparecida', 'duelo congelado'],
  alternates: { canonical: '/blog/duelo-desaparicion' },
  openGraph: {
    type: 'article',
    title: 'El duelo por una persona desaparecida | ColorMe',
    description: 'Cuando no sabes si buscar o despedirte. El dolor que no puede cerrarse.',
    url: '/blog/duelo-desaparicion',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo por una persona desaparecida',
  description: 'Cuando no sabes si buscar o despedirte. El dolor que no puede cerrarse.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-desaparicion`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
