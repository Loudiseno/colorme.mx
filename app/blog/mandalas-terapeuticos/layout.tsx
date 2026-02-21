import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Mandalas terapéuticos: qué son y cómo crearlos | ColorMe',
  description: 'Guía para crear mandalas y sus beneficios para la salud mental.',
  keywords: ['mandalas terapéuticos', 'cómo hacer mandalas', 'mandalas para la ansiedad', 'beneficios de colorear mandalas', 'arteterapia mandalas'],
  alternates: {
    canonical: '/blog/mandalas-terapeuticos',
  },
  openGraph: {
    type: 'article',
    title: 'Mandalas terapéuticos: qué son y cómo crearlos | ColorMe',
    description: 'Guía para crear mandalas y sus beneficios para la salud mental.',
    url: '/blog/mandalas-terapeuticos',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Mandalas terapéuticos: qué son y cómo crearlos',
  description: 'Guía para crear mandalas y sus beneficios para la salud mental.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/mandalas-terapeuticos`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
