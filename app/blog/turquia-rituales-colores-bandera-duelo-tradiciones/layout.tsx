import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Turquía: rituales islámicos, colores sagrados y la sabiduría del adiós',
  description: 'Descubre los rituales turcos de duelo, el significado de la media luna, los colores de su bandera y cómo Turquía honra a sus difuntos.',
  keywords: ['rituales Turquía', 'duelo islámico', 'colores bandera Turquía', 'tradiciones turcas', 'funeral musulmán', 'derviches', 'tanatología'],
  alternates: {
    canonical: '/blog/turquia-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Turquía: rituales islámicos, colores sagrados y la sabiduría del adiós | ColorMe',
    description: 'Descubre los rituales turcos de duelo y los derviches giróvagos.',
    url: '/blog/turquia-rituales-colores-bandera-duelo-tradiciones',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Turquía, la tierra donde oriente y occidente rezan juntos',
  description: 'Descubre los rituales turcos de duelo.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/turquia-rituales-colores-bandera-duelo-tradiciones`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
