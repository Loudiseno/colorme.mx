import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo por Enfermedad o Diagnóstico | Cómo Navegar la Pérdida de Salud',
  description: 'Cuando recibes un diagnóstico médico, algo cambia para siempre. Descubre cómo transitar el duelo por enfermedad, sus múltiples capas de pérdida y herramientas para el camino.',
  keywords: ['duelo por enfermedad', 'duelo por diagnóstico', 'duelo y cáncer', 'pérdida de salud', 'enfermedad crónica duelo', 'acompañamiento enfermedad', 'tanatología', 'duelo invisible'],
  alternates: {
    canonical: '/blog/duelo-por-enfermedad-o-diagnostico',
  },
  openGraph: {
    type: 'article',
    title: 'Duelo por Enfermedad o Diagnóstico | Cómo Navegar la Pérdida de Salud | ColorMe',
    description: 'Cuando recibes un diagnóstico médico, algo cambia para siempre. Descubre cómo transitar el duelo por enfermedad y herramientas para el camino.',
    url: '/blog/duelo-por-enfermedad-o-diagnostico',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cuando el cuerpo cambia las reglas: Navegar el duelo por enfermedad o diagnóstico',
  description: 'Cuando recibes un diagnóstico médico, algo cambia para siempre. Descubre cómo transitar el duelo por enfermedad, sus múltiples capas de pérdida y herramientas para el camino.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-por-enfermedad-o-diagnostico`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
