import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo y Pérdida | Cómo Transitar el Proceso de Duelo',
  description: 'Guía sobre el proceso de duelo y pérdida. Aprende a transitar el dolor, identificar las etapas del duelo y cuándo buscar acompañamiento profesional.',
  keywords: ['duelo', 'pérdida', 'proceso de duelo', 'etapas del duelo', 'superar pérdida', 'duelo por muerte', 'acompañamiento duelo', 'tanatología'],
  alternates: {
    canonical: '/blog/duelo-perdida',
  },
  openGraph: {
    type: 'article',
    title: 'Duelo y Pérdida | Cómo Transitar el Proceso de Duelo | ColorMe',
    description: 'Guía sobre el proceso de duelo y pérdida. Aprende a transitar el dolor y cuándo buscar acompañamiento profesional.',
    url: '/blog/duelo-perdida',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Duelo y Pérdida: Cómo Transitar el Proceso de Duelo',
  description: 'Guía sobre el proceso de duelo y pérdida. Aprende a transitar el dolor y cuándo buscar acompañamiento profesional.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-perdida`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
