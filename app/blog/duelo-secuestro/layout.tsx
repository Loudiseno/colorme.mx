import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo por un secuestro: el trauma que no termina | ColorMe',
  description: 'Para las victimas y sus familias que cargan heridas invisibles.',
  keywords: ['duelo por secuestro', 'trauma secuestro', 'familia de secuestrado', 'perdida ambigua', 'recuperacion'],
  alternates: { canonical: '/blog/duelo-secuestro' },
  openGraph: {
    type: 'article',
    title: 'El duelo por un secuestro: el trauma que no termina | ColorMe',
    description: 'Para las victimas y sus familias que cargan heridas invisibles.',
    url: '/blog/duelo-secuestro',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo por un secuestro: el trauma que no termina',
  description: 'Para las victimas y sus familias que cargan heridas invisibles.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-secuestro`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
