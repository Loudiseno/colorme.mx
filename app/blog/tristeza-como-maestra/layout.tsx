import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'La tristeza no vino a destruirte | ColorMe',
  description: 'Aprender a estar triste sin huir. La tristeza como maestra emocional.',
  keywords: ['tristeza', 'emociones difíciles', 'procesar emociones', 'inteligencia emocional'],
  alternates: {
    canonical: '/blog/tristeza-como-maestra',
  },
  openGraph: {
    type: 'article',
    title: 'La tristeza no vino a destruirte | ColorMe',
    description: 'Aprender a estar triste sin huir. La tristeza como maestra emocional.',
    url: '/blog/tristeza-como-maestra',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'La tristeza no vino a destruirte',
  description: 'Aprender a estar triste sin huir. La tristeza como maestra emocional.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/tristeza-como-maestra`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
