import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo migratorio: cuando dejas tu país',
  description: 'El duelo migratorio es real. Guía para procesar la pérdida de tu tierra, tu cultura y tu gente al emigrar.',
  keywords: ['duelo migratorio', 'emigrar', 'migración', 'nostalgia', 'expatriados', 'duelo'],
  alternates: { canonical: '/blog/duelo-migratorio' },
  openGraph: { type: 'article', title: 'Duelo migratorio | ColorMe', url: '/blog/duelo-migratorio' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Duelo migratorio: cuando dejas tu país',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-migratorio`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
