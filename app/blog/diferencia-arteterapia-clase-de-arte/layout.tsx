import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Diferencia entre arteterapia y clase de arte',
  description: 'Conoce las diferencias clave entre arteterapia y una clase de arte. No necesitas saber dibujar para hacer arteterapia.',
  keywords: ['arteterapia', 'clase de arte', 'diferencia arteterapia', 'terapia artística', 'proceso terapéutico'],
  alternates: {
    canonical: '/blog/diferencia-arteterapia-clase-de-arte',
  },
  openGraph: {
    type: 'article',
    title: 'Diferencia entre arteterapia y clase de arte | ColorMe',
    description: 'No es lo mismo crear para aprender que crear para sanar.',
    url: '/blog/diferencia-arteterapia-clase-de-arte',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Diferencia entre arteterapia y clase de arte',
  description: 'No es lo mismo crear para aprender que crear para sanar.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/diferencia-arteterapia-clase-de-arte`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
