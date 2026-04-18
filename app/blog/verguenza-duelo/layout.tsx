import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'La vergüenza: la emoción que te hace esconderte | ColorMe',
  description: 'Lo que callamos por miedo a ser juzgados. Cómo la vergüenza silencia el duelo.',
  keywords: ['vergüenza', 'emociones ocultas', 'duelo silenciado', 'miedo al rechazo'],
  alternates: {
    canonical: '/blog/verguenza-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'La vergüenza: la emoción que te hace esconderte | ColorMe',
    description: 'Lo que callamos por miedo a ser juzgados. Cómo la vergüenza silencia el duelo.',
    url: '/blog/verguenza-duelo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'La vergüenza: la emoción que te hace esconderte',
  description: 'Lo que callamos por miedo a ser juzgados. Cómo la vergüenza silencia el duelo.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/verguenza-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
