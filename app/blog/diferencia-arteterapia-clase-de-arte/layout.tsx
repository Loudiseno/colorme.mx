import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Diferencia entre arte como terapia y clase de arte',
  description: 'Conoce las diferencias clave entre arte como terapia y una clase de arte. No necesitas saber dibujar para hacer arte como terapia.',
  keywords: ['arte como terapia', 'clase de arte', 'diferencia arte como terapia', 'terapia artística', 'proceso terapéutico'],
  alternates: {
    canonical: '/blog/diferencia-arteterapia-clase-de-arte',
  },
  openGraph: {
    type: 'article',
    title: 'Diferencia entre arte como terapia y clase de arte | ColorMe',
    description: 'No es lo mismo crear para aprender que crear para sanar.',
    url: '/blog/diferencia-arteterapia-clase-de-arte',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Diferencia entre arte como terapia y clase de arte',
  description: 'No es lo mismo crear para aprender que crear para sanar.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
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
