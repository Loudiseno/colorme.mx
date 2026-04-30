import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Hermanos de niños enfermos: los olvidados',
  description: 'Los hermanos de niños con enfermedades graves también sufren. Guía para acompañar a los hermanos sanos durante la enfermedad.',
  keywords: ['hermanos', 'niños enfermos', 'familia', 'cáncer infantil', 'duelo', 'acompañamiento'],
  alternates: { canonical: '/blog/hermanos-de-ninos-enfermos' },
  openGraph: { type: 'article', title: 'Hermanos de niños enfermos | ColorMe', url: '/blog/hermanos-de-ninos-enfermos' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Hermanos de niños enfermos: los olvidados',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/hermanos-de-ninos-enfermos`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
