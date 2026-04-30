import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo por tu cuerpo: cuando ya no es el mismo',
  description: 'Guía para procesar los cambios en tu cuerpo por enfermedad, accidente o el paso del tiempo. El duelo corporal es válido.',
  keywords: ['duelo corporal', 'cuerpo', 'enfermedad', 'cambios físicos', 'aceptación', 'duelo'],
  alternates: { canonical: '/blog/duelo-por-tu-cuerpo' },
  openGraph: { type: 'article', title: 'Duelo por tu cuerpo | ColorMe', url: '/blog/duelo-por-tu-cuerpo' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Duelo por tu cuerpo: cuando ya no es el mismo',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-por-tu-cuerpo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
