import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '¿Qué es un Tanatólogo? Funciones, Beneficios y Cuándo Consultar',
  description: 'Descubre qué es un tanatólogo, cuáles son sus funciones, tipos de pérdidas que atiende, diferencia con el psicólogo y beneficios del acompañamiento tanatológico.',
  keywords: ['tanatólogo', 'qué es un tanatólogo', 'tanatología', 'duelo', 'acompañamiento duelo', 'etapas del duelo', 'pérdida', 'Kübler-Ross', 'duelo patológico'],
  alternates: {
    canonical: '/blog/que-es-un-tanatologo',
  },
  openGraph: {
    type: 'article',
    title: '¿Qué es un Tanatólogo? Funciones, Beneficios y Cuándo Consultar | ColorMe',
    description: 'Descubre qué es un tanatólogo, cuáles son sus funciones y beneficios del acompañamiento tanatológico durante el proceso de duelo.',
    url: '/blog/que-es-un-tanatologo',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es un Tanatólogo? Funciones, Beneficios y Cuándo Consultar',
  description: 'Descubre qué es un tanatólogo, cuáles son sus funciones, tipos de pérdidas que atiende, diferencia con el psicólogo y beneficios del acompañamiento tanatológico.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/que-es-un-tanatologo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
