import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El Cumpleaños de Alguien que Ya No Está | Cómo Enfrentarlo',
  description: 'Cómo enfrentar el cumpleaños de una persona fallecida. Guía para transitar esa fecha con el corazón abierto y honrar su memoria.',
  keywords: ['cumpleaños persona fallecida', 'cumpleaños ser querido fallecido', 'honrar cumpleaños', 'duelo cumpleaños'],
  alternates: {
    canonical: '/blog/cumpleanos-persona-fallecida',
  },
  openGraph: {
    type: 'article',
    title: 'El Cumpleaños de Alguien que Ya No Está | ColorMe',
    description: 'Cómo enfrentar el cumpleaños de una persona fallecida y honrar su memoria.',
    url: '/blog/cumpleanos-persona-fallecida',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El Cumpleaños de Alguien que Ya No Está: Cómo Enfrentar Esa Fecha',
  description: 'Cómo enfrentar el cumpleaños de una persona fallecida y honrar su memoria.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/cumpleanos-persona-fallecida`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
