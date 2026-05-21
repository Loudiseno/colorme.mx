import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Bebé arcoíris: la luz que llega después de la tormenta | ColorMe',
  description: 'El bebé arcoíris llega después de una pérdida gestacional. Guía para comprender las emociones del embarazo arcoíris y el duelo que coexiste con la alegría.',
  keywords: ['bebé arcoíris', 'embarazo arcoíris', 'pérdida gestacional', 'duelo perinatal', 'bebé estrella', 'aborto espontáneo', 'maternidad arcoíris', 'tanatología'],
  alternates: { canonical: '/blog/bebe-arcoiris' },
  openGraph: { type: 'article', title: 'Bebé arcoíris | ColorMe', url: '/blog/bebe-arcoiris' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Bebé arcoíris: la luz que llega después de la tormenta',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/bebe-arcoiris`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
