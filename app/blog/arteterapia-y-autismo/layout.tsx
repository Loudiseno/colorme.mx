import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arteterapia y Autismo: Cuando el Arte Abre Caminos',
  description: 'La arteterapia ofrece a ninos con autismo un espacio donde pueden comunicarse, regularse y expresarse sin depender exclusivamente del lenguaje verbal.',
  keywords: ['arteterapia autismo', 'TEA arteterapia', 'terapia arte ninos autismo', 'comunicacion no verbal autismo', 'regulacion emocional autismo'],
  alternates: {
    canonical: '/blog/arteterapia-y-autismo',
  },
  openGraph: {
    type: 'article',
    title: 'Arteterapia y Autismo: Cuando el Arte Abre Caminos | ColorMe',
    description: 'La arteterapia ofrece a ninos con autismo un espacio donde pueden comunicarse y expresarse.',
    url: '/blog/arteterapia-y-autismo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arteterapia y autismo: cuando el arte abre caminos que las palabras no encuentran',
  description: 'La arteterapia ofrece a ninos con autismo un espacio donde pueden comunicarse y expresarse.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/arteterapia-y-autismo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
