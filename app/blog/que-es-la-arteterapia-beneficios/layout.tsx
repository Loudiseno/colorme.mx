import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '¿Qué es la Arteterapia? | ColorMe',
  description: 'Descubre qué es la arteterapia, cómo funciona, sus beneficios y para quién es.',
  keywords: ['arteterapia', 'qué es arteterapia', 'terapia con arte', 'beneficios arteterapia', 'arte terapia', 'terapia creativa', 'expresión artística'],
  alternates: {
    canonical: '/blog/que-es-la-arteterapia-beneficios',
  },
  openGraph: {
    type: 'article',
    title: '¿Qué es la Arteterapia? | ColorMe',
    description: 'Descubre qué es la arteterapia, cómo funciona, sus beneficios y para quién es.',
    url: '/blog/que-es-la-arteterapia-beneficios',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es la Arteterapia?',
  description: 'Descubre qué es la arteterapia, cómo funciona, sus beneficios y para quién es.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/que-es-la-arteterapia-beneficios`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
