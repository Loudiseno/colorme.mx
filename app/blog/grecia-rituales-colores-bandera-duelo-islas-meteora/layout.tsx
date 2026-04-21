import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Grecia: rituales, colores sagrados y la sabiduría de honrar a los que se fueron',
  description: 'Grecia es la tierra donde el mar, los monasterios de Meteora y las islas enseñan a despedirse con dignidad. Descubre sus rituales y los colores de su bandera.',
  keywords: ['rituales Grecia', 'espiritualidad griega', 'duelo Grecia', 'Meteora monasterios', 'islas griegas', 'colores bandera Grecia', 'tradiciones griegas ortodoxas'],
  alternates: {
    canonical: '/blog/grecia-rituales-colores-bandera-duelo-islas-meteora',
  },
  openGraph: {
    type: 'article',
    title: 'Grecia: rituales, colores sagrados y la sabiduría de honrar a los que se fueron | ColorMe',
    description: 'Descubre los rituales griegos, los monasterios de Meteora y la forma griega de honrar la vida y la muerte.',
    url: '/blog/grecia-rituales-colores-bandera-duelo-islas-meteora',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Grecia, la cuna donde el mar guarda la memoria del alma: rituales, colores sagrados y la sabiduría de honrar a los que se fueron',
  description: 'Descubre los rituales griegos, los monasterios de Meteora y la forma griega de honrar la vida y la muerte.',
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
