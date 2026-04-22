import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Turquía: rituales, colores sagrados y la sabiduría del adiós',
  description: 'Turquía es el puente entre dos mundos. Descubre sus rituales, los colores sagrados de su bandera, el ojo turco y la forma profunda en que el pueblo turco honra la vida.',
  keywords: ['rituales Turquía', 'espiritualidad turca', 'duelo Turquía', 'colores bandera Turquía', 'nazar boncuk', 'tradiciones turcas', 'ojo turco'],
  alternates: {
    canonical: '/blog/turquia-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Turquía: rituales, colores sagrados y la sabiduría del adiós | ColorMe',
    description: 'Descubre los rituales turcos, el ojo turco y la forma profunda en que el pueblo turco honra la vida y la muerte.',
    url: '/blog/turquia-rituales-colores-bandera-duelo-tradiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Turquía, la tierra donde oriente y occidente rezan juntos: rituales, colores sagrados y la sabiduría del adiós',
  description: 'Descubre los rituales turcos, el ojo turco y la forma profunda en que el pueblo turco honra la vida y la muerte.',
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
