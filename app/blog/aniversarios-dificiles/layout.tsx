import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Aniversarios difíciles: cómo atravesar las fechas dolorosas | ColorMe',
  description: 'Guía para los días que el calendario convierte en momentos de dolor.',
  keywords: ['aniversarios difíciles', 'fechas dolorosas', 'duelo y fechas', 'aniversario de muerte', 'cómo superar aniversarios', 'fechas de duelo'],
  alternates: {
    canonical: '/blog/aniversarios-dificiles',
  },
  openGraph: {
    type: 'article',
    title: 'Aniversarios difíciles: cómo atravesar las fechas dolorosas | ColorMe',
    description: 'Guía para los días que el calendario convierte en momentos de dolor.',
    url: '/blog/aniversarios-dificiles',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Aniversarios difíciles: cómo atravesar las fechas dolorosas',
  description: 'Guía para los días que el calendario convierte en momentos de dolor.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/aniversarios-dificiles`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
