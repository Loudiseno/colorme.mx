import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Los primeros días después de la muerte de un ser querido | ColorMe',
  description: 'Nadie te prepara para los primeros días después de una pérdida. Un espacio honesto para sobrevivir el shock, las decisiones y el silencio que viene después.',
  keywords: ['primeros días duelo', 'qué hacer después de una muerte', 'shock por muerte', 'duelo agudo', 'primeros días pérdida', 'cómo sobrevivir el duelo', 'tanatología'],
  alternates: { canonical: '/blog/primeros-dias-despues-muerte' },
  openGraph: {
    type: 'article',
    title: 'Los primeros días después de la muerte de un ser querido | ColorMe',
    description: 'Un espacio honesto para sobrevivir el shock, las decisiones y el silencio que viene después.',
    url: '/blog/primeros-dias-despues-muerte',
    images: [{ url: '/primeros-dias-despues-muerte.jpeg', alt: 'Los primeros días después de la muerte de un ser querido' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Los primeros días después de la muerte de un ser querido',
  description: 'Nadie te prepara para los primeros días después de una pérdida. Un espacio honesto para sobrevivir el shock, las decisiones y el silencio que viene después.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/primeros-dias-despues-muerte`,
  inLanguage: 'es-MX',
  about: { '@type': 'Thing', name: 'Duelo agudo' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  )
}
