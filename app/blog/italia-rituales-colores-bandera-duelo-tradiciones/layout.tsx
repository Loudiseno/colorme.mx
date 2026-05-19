import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Italia: rituales, colores sagrados y la sabiduría del duelo',
  description: 'Descubre los rituales italianos de duelo, el significado de los colores de su bandera y cómo Italia honra a sus difuntos con belleza.',
  keywords: ['rituales Italia', 'duelo en Italia', 'colores bandera Italia', 'tradiciones italianas', 'funeral católico', 'tanatología'],
  alternates: {
    canonical: '/blog/italia-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Italia: rituales, colores sagrados y la sabiduría del duelo | ColorMe',
    description: 'Descubre los rituales italianos de duelo y tradiciones.',
    url: '/blog/italia-rituales-colores-bandera-duelo-tradiciones',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Italia, la tierra donde la belleza es una forma de rezar',
  description: 'Descubre los rituales italianos de duelo.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/italia-rituales-colores-bandera-duelo-tradiciones`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
