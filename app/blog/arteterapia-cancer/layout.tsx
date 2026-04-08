import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arteterapia y Cáncer | Sanación a Través del Arte',
  description: 'Cómo la arteterapia ayuda a pacientes con cáncer a procesar emociones, reducir estrés y encontrar bienestar durante el tratamiento oncológico.',
  keywords: ['arteterapia cáncer', 'terapia arte cáncer', 'arteterapia oncología', 'sanación cáncer', 'bienestar emocional cáncer', 'terapia creativa oncológica'],
  alternates: {
    canonical: '/blog/arteterapia-cancer',
  },
  openGraph: {
    type: 'article',
    title: 'Arteterapia y Cáncer | Sanación a Través del Arte | ColorMe',
    description: 'Cómo la arteterapia ayuda a pacientes con cáncer a procesar emociones, reducir estrés y encontrar bienestar.',
    url: '/blog/arteterapia-cancer',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arteterapia y Cáncer: Sanación a Través del Arte',
  description: 'Cómo la arteterapia ayuda a pacientes con cáncer a procesar emociones, reducir estrés y encontrar bienestar.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/arteterapia-cancer`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
