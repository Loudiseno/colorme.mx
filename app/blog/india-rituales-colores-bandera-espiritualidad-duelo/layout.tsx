import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'India, el país donde el alma camina descalza: rituales, colores sagrados y la sabiduría del adiós',
  description: 'India es el corazón espiritual del planeta. Descubre sus rituales hindúes, los colores sagrados de su bandera y la forma profunda en que su pueblo honra la vida y la muerte.',
  keywords: ['rituales India', 'espiritualidad hindú', 'duelo en India', 'colores bandera India', 'Varanasi Ganges', 'tradiciones hindúes', 'tanatología', 'arteterapia'],
  alternates: {
    canonical: '/blog/india-rituales-colores-bandera-espiritualidad-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'India, el país donde el alma camina descalza: rituales, colores sagrados y la sabiduría del adiós | ColorMe',
    description: 'India es el corazón espiritual del planeta. Descubre sus rituales hindúes y los colores sagrados de su bandera.',
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
  headline: 'India, el país donde el alma camina descalza: rituales, colores sagrados y la sabiduría del adiós',
  description: 'India es el corazón espiritual del planeta. Descubre sus rituales hindúes y los colores sagrados de su bandera.',
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
