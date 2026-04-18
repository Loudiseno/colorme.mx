import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduría de despedirse en comunidad',
  description: 'Malasia es el país donde tres culturas espirituales conviven en armonía. Descubre sus rituales malayos, chinos e indios y la forma única en que honran a quienes parten.',
  keywords: ['rituales Malasia', 'espiritualidad malaya', 'duelo Malasia', 'Thaipusam Batu Caves', 'tradiciones malayas', 'tanatología', 'arteterapia'],
  alternates: {
    canonical: '/blog/malasia-rituales-colores-bandera-tradiciones-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduría de despedirse en comunidad | ColorMe',
    description: 'Descubre los rituales de tres culturas espirituales que conviven en Malasia y la forma única en que honran a quienes parten.',
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
  headline: 'Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduría de despedirse en comunidad',
  description: 'Descubre los rituales de tres culturas espirituales que conviven en Malasia y la forma única en que honran a quienes parten.',
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
