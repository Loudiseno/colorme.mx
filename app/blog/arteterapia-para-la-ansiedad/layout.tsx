import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arteterapia para la Ansiedad: Cómo el Arte Puede Ayudarte | ColorMe',
  description: 'Descubre cómo la arteterapia puede ayudarte a manejar la ansiedad. Una forma de expresión cuando las palabras no alcanzan.',
  keywords: ['arteterapia ansiedad', 'arte terapia ansiedad', 'ansiedad tratamiento', 'terapia creativa', 'manejo ansiedad', 'expresión emocional', 'terapia alternativa ansiedad'],
  alternates: {
    canonical: '/blog/arteterapia-para-la-ansiedad',
  },
  openGraph: {
    type: 'article',
    title: 'Arteterapia para la Ansiedad: Cómo el Arte Puede Ayudarte | ColorMe',
    description: 'Descubre cómo la arteterapia puede ayudarte a manejar la ansiedad.',
    url: '/blog/arteterapia-para-la-ansiedad',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arteterapia para la Ansiedad: Cómo el Arte Puede Ayudarte',
  description: 'Descubre cómo la arteterapia puede ayudarte a manejar la ansiedad. Una forma de expresión cuando las palabras no alcanzan.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/arteterapia-para-la-ansiedad`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
