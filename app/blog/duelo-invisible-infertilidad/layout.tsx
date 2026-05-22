import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo invisible: cuando la maternidad o paternidad no llega | ColorMe',
  description: 'El duelo por no poder tener hijos es una de las pérdidas más invisibles. Sin funeral, sin condolencias, pero con un dolor real que merece ser nombrado y acompañado.',
  keywords: ['duelo invisible', 'duelo por infertilidad', 'infertilidad emocional', 'pérdida maternidad', 'duelo paternidad', 'pérdida gestacional', 'duelo perinatal', 'tanatología'],
  alternates: { canonical: '/blog/duelo-invisible-infertilidad' },
  openGraph: {
    type: 'article',
    title: 'El duelo invisible: cuando la maternidad o paternidad no llega | ColorMe',
    description: 'El duelo por no poder tener hijos es una de las pérdidas más invisibles. Un dolor real que merece ser nombrado.',
    url: '/blog/duelo-invisible-infertilidad',
    images: [{ url: '/duelo-invisible-infertilidad.jpeg', alt: 'El duelo invisible por infertilidad' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo invisible: cuando la maternidad o paternidad no llega',
  description: 'El duelo por no poder tener hijos es una de las pérdidas más invisibles. Sin funeral, sin condolencias, pero con un dolor real.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-invisible-infertilidad`,
  inLanguage: 'es-MX',
  about: { '@type': 'Thing', name: 'Duelo por infertilidad' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  )
}
