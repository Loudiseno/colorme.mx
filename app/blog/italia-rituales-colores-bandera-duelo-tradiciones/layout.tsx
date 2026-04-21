import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Italia: rituales, colores sagrados y la sabiduría del duelo',
  description: 'Italia es arte, fe y familia. Descubre los rituales italianos, los colores de su bandera y la forma profunda en que su pueblo vive la espiritualidad y la despedida.',
  keywords: ['rituales Italia', 'espiritualidad italiana', 'duelo Italia', 'colores bandera Italia', 'tradiciones italianas', 'Día de los Muertos Italia'],
  alternates: {
    canonical: '/blog/italia-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Italia: rituales, colores sagrados y la sabiduría del duelo | ColorMe',
    description: 'Descubre los rituales italianos y la forma profunda en que su pueblo vive la espiritualidad y la despedida.',
    url: '/blog/italia-rituales-colores-bandera-duelo-tradiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Italia, la tierra donde la belleza es una forma de rezar: rituales, colores sagrados y la sabiduría del duelo',
  description: 'Descubre los rituales italianos y la forma profunda en que su pueblo vive la espiritualidad y la despedida.',
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
