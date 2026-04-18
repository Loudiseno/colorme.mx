import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'India: Rituales, Colores y la Sabiduria de Soltar en Comunidad',
  description: 'Descubre los rituales sagrados de la India, el significado de sus colores y como el duelo se vive en comunidad.',
  keywords: ['rituales India', 'espiritualidad India', 'duelo en India', 'colores bandera India', 'Varanasi'],
  alternates: {
    canonical: '/blog/india-rituales-colores-bandera-espiritualidad-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'India: Rituales, Colores y Espiritualidad | ColorMe',
    description: 'Descubre los rituales sagrados de la India y el significado de sus colores.',
    url: '/blog/india-rituales-colores-bandera-espiritualidad-duelo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'India, el pais de los mil colores: rituales, simbolos y la sabiduria de soltar en comunidad',
  description: 'Descubre los rituales sagrados de la India y el significado de sus colores.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/india-rituales-colores-bandera-espiritualidad-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
