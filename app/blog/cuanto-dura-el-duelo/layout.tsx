import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '¿Cuánto dura el duelo? | ColorMe',
  description: 'No hay fecha de expiración para el duelo, pero el dolor no dura para siempre con la misma intensidad.',
  keywords: ['cuánto dura el duelo', 'duración del duelo', 'proceso de duelo', 'fases del duelo', 'duelo complicado', 'superar el duelo'],
  alternates: {
    canonical: '/blog/cuanto-dura-el-duelo',
  },
  openGraph: {
    type: 'article',
    title: '¿Cuánto dura el duelo? | ColorMe',
    description: 'No hay fecha de expiración para el duelo, pero el dolor no dura para siempre con la misma intensidad.',
    url: '/blog/cuanto-dura-el-duelo',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Cuánto dura el duelo?',
  description: 'No hay fecha de expiración para el duelo, pero el dolor no dura para siempre con la misma intensidad.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/cuanto-dura-el-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
