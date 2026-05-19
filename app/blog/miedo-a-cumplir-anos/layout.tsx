import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Miedo a cumplir años: cuando los cumpleaños duelen',
  description: 'El miedo a envejecer y la angustia de los cumpleaños. Guía para procesar la ansiedad ante el paso del tiempo.',
  keywords: ['miedo cumpleaños', 'miedo envejecer', 'cumplir años', 'ansiedad', 'paso del tiempo'],
  alternates: { canonical: '/blog/miedo-a-cumplir-anos' },
  openGraph: { type: 'article', title: 'Miedo a cumplir años | ColorMe', url: '/blog/miedo-a-cumplir-anos' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Miedo a cumplir años: cuando los cumpleaños duelen',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/miedo-a-cumplir-anos`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
