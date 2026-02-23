import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo invisible: cuando la maternidad o paternidad no llega | ColorMe',
  description: 'Para quienes cargan el dolor de un hijo que nunca tuvieron. Guia sobre el duelo por infertilidad.',
  keywords: ['duelo infertilidad', 'no poder tener hijos', 'duelo por maternidad', 'infertilidad emocional', 'duelo reproductivo'],
  alternates: {
    canonical: '/blog/duelo-infertilidad',
  },
  openGraph: {
    type: 'article',
    title: 'El duelo invisible: cuando la maternidad o paternidad no llega | ColorMe',
    description: 'Para quienes cargan el dolor de un hijo que nunca tuvieron. Guia sobre el duelo por infertilidad.',
    url: '/blog/duelo-infertilidad',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo invisible: cuando la maternidad o paternidad no llega',
  description: 'Para quienes cargan el dolor de un hijo que nunca tuvieron. Guia sobre el duelo por infertilidad.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-infertilidad`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
