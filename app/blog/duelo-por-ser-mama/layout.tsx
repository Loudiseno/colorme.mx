import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo por ser mamá: las pérdidas que nadie nombra | ColorMe',
  description: 'La maternidad trae alegría, pero también pérdidas silenciosas de identidad, libertad y relaciones. Un espacio para nombrar lo que nadie te deja sentir.',
  keywords: ['duelo por ser mamá', 'maternidad y pérdida', 'identidad materna', 'nido vacío', 'duelo maternidad', 'culpa materna', 'tanatología'],
  alternates: { canonical: '/blog/duelo-por-ser-mama' },
  openGraph: {
    type: 'article',
    title: 'Duelo por ser mamá: las pérdidas que nadie nombra | ColorMe',
    description: 'La maternidad trae alegría, pero también pérdidas silenciosas. Un espacio para nombrar lo que nadie te deja sentir.',
    url: '/blog/duelo-por-ser-mama',
    images: [{ url: '/duelo-maternidad.jpeg', alt: 'Duelo por ser mamá y las pérdidas dentro de la maternidad' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Duelo por ser mamá: las pérdidas que nadie nombra dentro de la maternidad',
  description: 'La maternidad trae alegría, pero también pérdidas silenciosas de identidad, libertad y relaciones.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-por-ser-mama`,
  inLanguage: 'es-MX',
  about: { '@type': 'Thing', name: 'Maternidad y duelo' },
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
