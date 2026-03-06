import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo por las expectativas que no se cumplieron | ColorMe',
  description: 'Cuando lo que esperabas nunca llego, aunque hiciste todo bien.',
  keywords: ['expectativas no cumplidas', 'duelo por lo que no fue', 'frustracion de expectativas', 'perdida de suenos'],
  alternates: { canonical: '/blog/expectativas-no-cumplidas' },
  openGraph: {
    type: 'article',
    title: 'El duelo por las expectativas que no se cumplieron | ColorMe',
    description: 'Cuando lo que esperabas nunca llego, aunque hiciste todo bien.',
    url: '/blog/expectativas-no-cumplidas',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo por las expectativas que no se cumplieron',
  description: 'Cuando lo que esperabas nunca llego, aunque hiciste todo bien.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/expectativas-no-cumplidas`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
