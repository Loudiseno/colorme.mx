import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cómo atravesar la muerte de tu mamá | ColorMe',
  description: 'Una guía honesta para quienes perdieron a la primera persona que los amó.',
  keywords: ['muerte de mamá', 'perder a tu madre', 'duelo por madre', 'muerte de madre', 'cómo superar la muerte de tu mamá', 'duelo materno'],
  alternates: {
    canonical: '/blog/muerte-mama',
  },
  openGraph: {
    type: 'article',
    title: 'Cómo atravesar la muerte de tu mamá | ColorMe',
    description: 'Una guía honesta para quienes perdieron a la primera persona que los amó.',
    url: '/blog/muerte-mama',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cómo atravesar la muerte de tu mamá',
  description: 'Una guía honesta para quienes perdieron a la primera persona que los amó.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/muerte-mama`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
