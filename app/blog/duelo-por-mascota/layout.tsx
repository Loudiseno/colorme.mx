import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo por Mascota: Por Qué Tu Dolor es Real y Cómo Atravesarlo | ColorMe',
  description: 'El duelo por mascota es válido y real. Descubre cómo atravesar la pérdida de tu compañero animal, manejar la culpa y honrar su memoria.',
  keywords: ['duelo por mascota', 'muerte mascota', 'perder mascota', 'duelo perro', 'duelo gato', 'eutanasia mascota', 'superar pérdida mascota'],
  alternates: {
    canonical: '/blog/duelo-por-mascota',
  },
  openGraph: {
    type: 'article',
    title: 'Duelo por Mascota: Por Qué Tu Dolor es Real y Cómo Atravesarlo | ColorMe',
    description: 'El duelo por mascota es válido y real. Descubre cómo atravesar esta pérdida.',
    url: '/blog/duelo-por-mascota',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Duelo por Mascota: Por Qué Tu Dolor es Real y Cómo Atravesarlo',
  description: 'El duelo por mascota es válido y real. Descubre cómo atravesar la pérdida de tu compañero animal, manejar la culpa y honrar su memoria.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-por-mascota`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
