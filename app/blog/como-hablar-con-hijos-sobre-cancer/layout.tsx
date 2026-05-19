import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cómo hablar con tus hijos sobre el cáncer',
  description: 'Guía para padres sobre cómo comunicar un diagnóstico de cáncer a los hijos. Qué decir según la edad y cómo manejar sus emociones.',
  keywords: ['cáncer', 'hijos', 'comunicación', 'familia', 'niños', 'diagnóstico'],
  alternates: { canonical: '/blog/como-hablar-con-hijos-sobre-cancer' },
  openGraph: { type: 'article', title: 'Cómo hablar con tus hijos sobre el cáncer | ColorMe', url: '/blog/como-hablar-con-hijos-sobre-cancer' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Cómo hablar con tus hijos sobre el cáncer',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/como-hablar-con-hijos-sobre-cancer`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
