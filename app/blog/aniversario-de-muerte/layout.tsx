import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El Aniversario de una Muerte | Cómo Honrar Ese Día',
  description: 'Aprende a transitar el aniversario de muerte de un ser querido. Por qué duele tanto y cómo honrar ese día desde el amor y no solo desde el dolor.',
  keywords: ['aniversario de muerte', 'fecha de muerte', 'duelo aniversario', 'honrar memoria', 'recordar ser querido'],
  alternates: {
    canonical: '/blog/aniversario-de-muerte',
  },
  openGraph: {
    type: 'article',
    title: 'El Aniversario de una Muerte | Cómo Honrar Ese Día | ColorMe',
    description: 'Aprende a transitar el aniversario de muerte de un ser querido y cómo honrar ese día.',
    url: '/blog/aniversario-de-muerte',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El Aniversario de una Muerte: Por Qué Duele Tanto y Cómo Honrar Ese Día',
  description: 'Aprende a transitar el aniversario de muerte de un ser querido.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/aniversario-de-muerte`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
