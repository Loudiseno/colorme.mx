import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduría de despedirse en comunidad',
  description: 'Malasia es el país donde tres culturas espirituales conviven en armonía. Descubre sus rituales, los colores de su bandera y la forma única en que su gente honra la vida y la muerte.',
  keywords: ['rituales Malasia', 'espiritualidad malaya', 'duelo Malasia', 'Thaipusam Batu Caves', 'tradiciones malayas', 'tanatología', 'arteterapia'],
  alternates: {
    canonical: '/blog/malasia-rituales-colores-bandera-tradiciones-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduría de despedirse en comunidad | ColorMe',
    description: 'Malasia es el país donde tres culturas espirituales conviven en armonía. Descubre sus rituales y la forma única en que honran a quienes parten.',
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
  description: 'Malasia es el país donde tres culturas espirituales conviven en armonía. Descubre sus rituales y la forma única en que honran a quienes parten.',
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
