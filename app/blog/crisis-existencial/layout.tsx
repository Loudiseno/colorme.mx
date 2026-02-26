import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Crisis existencial: el duelo por quien eras | ColorMe',
  description: 'Cuando la pregunta quien soy se convierte en un abismo.',
  keywords: ['crisis existencial', 'duelo identidad', 'crisis de identidad', 'quien soy', 'sentido de vida'],
  alternates: { canonical: '/blog/crisis-existencial' },
  openGraph: {
    type: 'article',
    title: 'Crisis existencial: el duelo por quien eras | ColorMe',
    description: 'Cuando la pregunta quien soy se convierte en un abismo.',
    url: '/blog/crisis-existencial',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crisis existencial: el duelo por quien eras',
  description: 'Cuando la pregunta quien soy se convierte en un abismo.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/crisis-existencial`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
