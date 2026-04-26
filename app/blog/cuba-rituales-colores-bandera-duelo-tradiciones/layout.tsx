import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cuba: rituales, colores y la sabiduría del adiós caribeño',
  description: 'Descubre los rituales cubanos de duelo, la santería, el significado de los colores de su bandera y cómo Cuba celebra la vida incluso en la despedida.',
  keywords: ['rituales Cuba', 'duelo en Cuba', 'santería', 'colores bandera Cuba', 'tradiciones cubanas', 'velorio cubano', 'tanatología'],
  alternates: {
    canonical: '/blog/cuba-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Cuba: rituales, colores y la sabiduría del adiós caribeño | ColorMe',
    description: 'Descubre los rituales cubanos de duelo y cómo Cuba celebra la vida.',
    url: '/blog/cuba-rituales-colores-bandera-duelo-tradiciones',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuba, la isla donde la muerte baila al son de la vida',
  description: 'Descubre los rituales cubanos de duelo y la santería.',
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
