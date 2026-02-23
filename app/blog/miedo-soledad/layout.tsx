import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El miedo a quedarte solo | ColorMe',
  description: 'Y por que huir de el empeora todo. Guia para entender y superar el miedo a la soledad.',
  keywords: ['miedo a la soledad', 'miedo a estar solo', 'soledad emocional', 'dependencia emocional', 'superar soledad'],
  alternates: {
    canonical: '/blog/miedo-soledad',
  },
  openGraph: {
    type: 'article',
    title: 'El miedo a quedarte solo | ColorMe',
    description: 'Y por que huir de el empeora todo. Guia para entender y superar el miedo a la soledad.',
    url: '/blog/miedo-soledad',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El miedo a quedarte solo',
  description: 'Y por que huir de el empeora todo. Guia para entender y superar el miedo a la soledad.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/miedo-soledad`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
