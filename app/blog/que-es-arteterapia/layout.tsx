import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '¿Qué es la Arteterapia? | Guía para Entender la Terapia a Través del Arte',
  description: 'Descubre qué es la arteterapia y cómo funciona. Guía completa para entender la terapia a través del arte y sus beneficios.',
  keywords: ['qué es arteterapia', 'arteterapia definición', 'terapia arte', 'beneficios arteterapia', 'arteterapia México'],
  alternates: {
    canonical: '/blog/que-es-arteterapia',
  },
  openGraph: {
    type: 'article',
    title: '¿Qué es la Arteterapia? | ColorMe',
    description: 'Descubre qué es la arteterapia y cómo funciona.',
    url: '/blog/que-es-arteterapia',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es la Arteterapia? Guía para Entender la Terapia a Través del Arte',
  description: 'Descubre qué es la arteterapia y cómo funciona.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/que-es-arteterapia`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
