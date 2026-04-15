import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Malasia: Rituales, Colores y la Sabiduria de Despedirse en Comunidad',
  description: 'Malasia es el pais donde tres culturas espirituales conviven en armonia. Descubre sus rituales malayos, chinos e indios y la forma unica en que honran a quienes parten.',
  keywords: ['rituales Malasia', 'espiritualidad malaya', 'duelo Malasia', 'Thaipusam Batu Caves', 'tradiciones malayas'],
  alternates: {
    canonical: '/blog/malasia-rituales-colores-bandera-tradiciones-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'Malasia: Rituales, Colores y la Sabiduria de Despedirse en Comunidad | ColorMe',
    description: 'Descubre los rituales de tres culturas espirituales que conviven en Malasia.',
    url: '/blog/malasia-rituales-colores-bandera-tradiciones-duelo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduria de despedirse en comunidad',
  description: 'Descubre los rituales de tres culturas espirituales que conviven en Malasia.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/malasia-rituales-colores-bandera-tradiciones-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
