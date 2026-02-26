import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'No siento nada: cuando las emociones se apagan | ColorMe',
  description: 'Para quienes buscan desesperadamente sentir algo, lo que sea.',
  keywords: ['bloqueo emocional', 'anestesia emocional', 'no sentir nada', 'embotamiento afectivo', 'emociones bloqueadas'],
  alternates: { canonical: '/blog/bloqueo-emocional' },
  openGraph: {
    type: 'article',
    title: 'No siento nada: cuando las emociones se apagan | ColorMe',
    description: 'Para quienes buscan desesperadamente sentir algo, lo que sea.',
    url: '/blog/bloqueo-emocional',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'No siento nada: cuando las emociones se apagan',
  description: 'Para quienes buscan desesperadamente sentir algo, lo que sea.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/bloqueo-emocional`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
