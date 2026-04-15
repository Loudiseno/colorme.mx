import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Tailandia: Rituales, Colores y la Sabiduria de Soltar con Gratitud',
  description: 'En Tailandia, la espiritualidad se respira en cada gesto. Descubre los rituales tailandeses, sus colores nacionales y la forma serena en que honran la vida y la muerte.',
  keywords: ['rituales Tailandia', 'espiritualidad budista', 'duelo en Tailandia', 'colores bandera Tailandia', 'templos tailandeses'],
  alternates: {
    canonical: '/blog/tailandia-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Tailandia: Rituales, Colores y la Sabiduria de Soltar | ColorMe',
    description: 'Descubre los rituales tailandeses y la forma serena en que honran la vida y la muerte.',
    url: '/blog/tailandia-rituales-colores-bandera-duelo-tradiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tailandia, la tierra de la sonrisa eterna: rituales, colores y la sabiduria de soltar con gratitud',
  description: 'Descubre los rituales tailandeses y la forma serena en que honran la vida y la muerte.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/tailandia-rituales-colores-bandera-duelo-tradiciones`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
