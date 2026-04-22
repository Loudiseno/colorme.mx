import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cuba: rituales, colores y la sabiduría del adiós caribeño',
  description: 'Cuba es música, fe y comunidad. Descubre los rituales cubanos, los colores de su bandera, la santería y la forma profunda en que su pueblo celebra la vida.',
  keywords: ['rituales Cuba', 'espiritualidad cubana', 'duelo Cuba', 'santería cubana', 'colores bandera Cuba', 'tradiciones cubanas', 'orishas'],
  alternates: {
    canonical: '/blog/cuba-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Cuba: rituales, colores y la sabiduría del adiós caribeño | ColorMe',
    description: 'Descubre los rituales cubanos, la santería y la forma profunda en que su pueblo celebra la vida y honra la muerte.',
    url: '/blog/cuba-rituales-colores-bandera-duelo-tradiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuba, la isla donde la muerte baila al son de la vida: rituales, colores y la sabiduría del adiós caribeño',
  description: 'Descubre los rituales cubanos, la santería y la forma profunda en que su pueblo celebra la vida y honra la muerte.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/cuba-rituales-colores-bandera-duelo-tradiciones`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
