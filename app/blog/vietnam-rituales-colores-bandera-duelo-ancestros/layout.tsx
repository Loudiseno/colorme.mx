import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Vietnam, la tierra donde los ancestros nunca se van: rituales, colores y la sabiduría de recordar',
  description: 'En Vietnam el incienso es un idioma. Descubre los rituales del culto a los ancestros, los colores sagrados y la forma profunda en que el pueblo vietnamita honra a quienes ama.',
  keywords: ['rituales Vietnam', 'culto ancestros Vietnam', 'duelo en Vietnam', 'rituales del mundo', 'colores bandera Vietnam', 'altar familiar vietnamita', 'tradiciones vietnamitas', 'tanatología'],
  alternates: {
    canonical: '/blog/vietnam-rituales-colores-bandera-duelo-ancestros',
  },
  openGraph: {
    type: 'article',
    title: 'Vietnam, la tierra donde los ancestros nunca se van: rituales, colores y la sabiduría de recordar | ColorMe',
    description: 'Descubre el culto a los ancestros en Vietnam y la forma profunda en que honran a quienes aman.',
    url: '/blog/vietnam-rituales-colores-bandera-duelo-ancestros',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Vietnam, la tierra donde los ancestros nunca se van: rituales, colores y la sabiduría de recordar',
  description: 'Descubre el culto a los ancestros en Vietnam y la forma profunda en que honran a quienes aman.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/vietnam-rituales-colores-bandera-duelo-ancestros`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
