import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Mehndi: El Arte Sagrado de la Henna en India',
  description: 'Mehndi es mucho mas que un adorno. Descubre el arte ancestral de la henna en India, sus colores, sus aromas y su profundo significado espiritual.',
  keywords: ['Mehndi India', 'ritual henna', 'simbolismo henna', 'espiritualidad India', 'tradiciones hindues', 'arte sagrado henna'],
  alternates: {
    canonical: '/blog/mehndi-india-significado-henna-ritual-espiritual',
  },
  openGraph: {
    type: 'article',
    title: 'Mehndi: El Arte Sagrado de la Henna en India | ColorMe',
    description: 'Descubre el arte ancestral de la henna en India y su profundo significado espiritual.',
    url: '/blog/mehndi-india-significado-henna-ritual-espiritual',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mehndi, el arte sagrado de la India donde la piel se convierte en oracion',
  description: 'Descubre el arte ancestral de la henna en India y su profundo significado espiritual.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/mehndi-india-significado-henna-ritual-espiritual`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
