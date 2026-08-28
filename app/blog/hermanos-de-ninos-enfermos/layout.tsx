import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Los hermanos que no enferman: el duelo invisible de los niños sanos',
  description: 'Los hermanos de niños con enfermedades graves también viven su propio duelo. Cómo acompañarlos durante la enfermedad.',
  keywords: ['hermanos', 'niños enfermos', 'familia', 'cáncer infantil', 'duelo', 'acompañamiento'],
  alternates: { canonical: '/blog/hermanos-de-ninos-enfermos' },
  openGraph: { type: 'article', title: 'Hermanos de niños enfermos | ColorMe', url: '/blog/hermanos-de-ninos-enfermos' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Los hermanos que no enferman: el duelo invisible de los niños sanos',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/hermanos-de-ninos-enfermos`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
