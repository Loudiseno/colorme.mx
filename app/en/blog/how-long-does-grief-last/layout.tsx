import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How Long Does Grief Last? An Honest Answer',
  description: 'There is no expiration date for grief — but it doesn\'t stay this intense forever. What research says, what influences the timeline, and signs you\'re moving forward.',
  alternates: { canonical: '/en/blog/how-long-does-grief-last' },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    title: 'How Long Does Grief Last? An Honest Answer',
    description: 'What research says about the timeline of grief, what influences it, and signs of progress.',
    url: '/en/blog/how-long-does-grief-last',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Long Does Grief Last? An Honest Answer',
  description: 'There is no expiration date for grief, but it does not stay this intense forever.',
  inLanguage: 'en-US',
  author: { '@type': 'Person', name: 'Lou', url: `${siteConfig.url}/en/about` },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/en/blog/how-long-does-grief-last`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema-en-how-long-grief" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
