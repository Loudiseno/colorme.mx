import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'What Is Grief? Understanding Loss and How to Move Through It',
  description: 'Grief is the natural response to any meaningful loss. What it is, why it hurts so much, the invisible griefs we rarely name, and how to move through it.',
  alternates: { canonical: '/en/blog/what-is-grief' },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    title: 'What Is Grief? Understanding Loss and How to Move Through It',
    description: 'What grief really is, why it hurts so much, and how to move through it without losing yourself.',
    url: '/en/blog/what-is-grief',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Grief? Understanding Loss and How to Move Through It',
  description: 'Grief is the natural response to any meaningful loss. What it is, why it hurts, and how to move through it.',
  inLanguage: 'en-US',
  author: { '@type': 'Person', name: 'Lou', url: `${siteConfig.url}/en/about` },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/en/blog/what-is-grief`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema-en-what-is-grief" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
