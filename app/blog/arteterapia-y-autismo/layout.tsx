import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arte como terapia y Autismo: Cuando el Arte Abre Caminos',
  description: 'El arte como terapia ofrece a niños con autismo un espacio donde pueden comunicarse, regularse y expresarse sin depender exclusivamente del lenguaje verbal.',
  keywords: ['arte como terapia autismo', 'TEA arte como terapia', 'terapia arte niños autismo', 'comunicación no verbal autismo', 'regulación emocional autismo'],
  alternates: {
    canonical: '/blog/arteterapia-y-autismo',
  },
  openGraph: {
    type: 'article',
    title: 'Arte como terapia y Autismo: Cuando el Arte Abre Caminos | ColorMe',
    description: 'El arte como terapia ofrece a niños con autismo un espacio donde pueden comunicarse y expresarse.',
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
  headline: 'Arte como terapia y autismo: cuando el arte abre caminos que las palabras no encuentran',
  description: 'El arte como terapia ofrece a niños con autismo un espacio donde pueden comunicarse y expresarse.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
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
