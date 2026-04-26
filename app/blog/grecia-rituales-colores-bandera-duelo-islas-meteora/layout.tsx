import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Grecia: rituales, colores sagrados y la sabiduría de honrar a los que se fueron',
  description: 'Descubre los rituales griegos de duelo, el significado de los colores de su bandera, las islas y Meteora. Cómo Grecia honra la memoria de los ancestros.',
  keywords: ['rituales Grecia', 'duelo en Grecia', 'colores bandera Grecia', 'tradiciones griegas', 'Meteora', 'islas griegas', 'tanatología'],
  alternates: {
    canonical: '/blog/grecia-rituales-colores-bandera-duelo-islas-meteora',
  },
  openGraph: {
    type: 'article',
    title: 'Grecia: rituales, colores sagrados y la sabiduría de honrar a los que se fueron | ColorMe',
    description: 'Descubre los rituales griegos de duelo y cómo Grecia honra la memoria de los ancestros.',
    url: '/blog/grecia-rituales-colores-bandera-duelo-islas-meteora',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Grecia, la cuna donde el mar guarda la memoria del alma',
  description: 'Descubre los rituales griegos de duelo y cómo Grecia honra la memoria.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/grecia-rituales-colores-bandera-duelo-islas-meteora`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
