import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo distorsionado: cuando el dolor se transforma en algo mas | ColorMe',
  description: 'Lo que pasa cuando el duelo no puede seguir su curso natural.',
  keywords: ['duelo distorsionado', 'duelo complicado', 'duelo no procesado', 'somatizacion', 'duelo enmascarado'],
  alternates: { canonical: '/blog/duelo-distorsionado' },
  openGraph: {
    type: 'article',
    title: 'El duelo distorsionado: cuando el dolor se transforma en algo mas | ColorMe',
    description: 'Lo que pasa cuando el duelo no puede seguir su curso natural.',
    url: '/blog/duelo-distorsionado',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo distorsionado: cuando el dolor se transforma en algo mas',
  description: 'Lo que pasa cuando el duelo no puede seguir su curso natural.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-distorsionado`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
