import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Diferencia entre arteterapia y clase de arte: crear para aprender vs crear para sanar',
  description: 'Descubre las diferencias clave entre una clase de arte y la arteterapia. Entiende cuándo elegir cada una según tus necesidades.',
  keywords: ['arteterapia', 'clase de arte', 'diferencia arteterapia', 'terapia arte', 'proceso creativo', 'sanación arte'],
  alternates: {
    canonical: '/blog/diferencia-arteterapia-clase-de-arte',
  },
  openGraph: {
    type: 'article',
    title: 'Diferencia entre arteterapia y clase de arte | ColorMe',
    description: 'Descubre las diferencias clave entre una clase de arte y la arteterapia.',
    url: '/blog/diferencia-arteterapia-clase-de-arte',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Diferencia entre arteterapia y clase de arte: no es lo mismo crear para aprender que crear para sanar',
  description: 'Descubre las diferencias clave entre una clase de arte y la arteterapia.',
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
