import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Melukat: La Ceremonia Balinesa de Purificacion con Agua Sagrada',
  description: 'Melukat es el ritual balines de purificacion con agua sagrada. Descubre como esta ceremonia libera el dolor y devuelve al alma su claridad original.',
  keywords: ['ceremonia Melukat Bali', 'ritual purificacion balines', 'agua sagrada Bali', 'Tirta Empul', 'espiritualidad balinesa'],
  alternates: {
    canonical: '/blog/melukat-ceremonia-purificacion-bali-agua-sagrada',
  },
  openGraph: {
    type: 'article',
    title: 'Melukat: La Ceremonia Balinesa de Purificacion | ColorMe',
    description: 'Descubre el ritual balines de purificacion con agua sagrada.',
    url: '/blog/melukat-ceremonia-purificacion-bali-agua-sagrada',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Melukat, la ceremonia balinesa donde el agua limpia el dolor del alma',
  description: 'Descubre el ritual balines de purificacion con agua sagrada.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/melukat-ceremonia-purificacion-bali-agua-sagrada`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
