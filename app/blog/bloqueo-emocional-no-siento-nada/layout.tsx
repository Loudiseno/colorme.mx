import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'No siento nada: bloqueo emocional y anestesia emocional | ColorMe',
  description: 'Cuando las emociones se apagan y no puedes sentir nada. Qué es el bloqueo emocional, por qué ocurre y cómo empezar a reconectarte con lo que sientes.',
  keywords: ['bloqueo emocional', 'no siento nada', 'anestesia emocional', 'embotamiento afectivo', 'emociones bloqueadas', 'desconexión emocional', 'tanatología'],
  alternates: { canonical: '/blog/bloqueo-emocional-no-siento-nada' },
  openGraph: {
    type: 'article',
    title: 'No siento nada: bloqueo emocional y anestesia emocional | ColorMe',
    description: 'Cuando las emociones se apagan. Qué es el bloqueo emocional y cómo empezar a reconectarte.',
    url: '/blog/bloqueo-emocional-no-siento-nada',
    images: [{ url: '/bloqueo-emocional-no-siento-nada.jpeg', alt: 'Bloqueo emocional - No siento nada' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'No siento nada: cuando las emociones se apagan',
  description: 'Cuando las emociones se apagan y no puedes sentir nada. Qué es el bloqueo emocional, por qué ocurre y cómo empezar a reconectarte.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/bloqueo-emocional-no-siento-nada`,
  inLanguage: 'es-MX',
  about: { '@type': 'Thing', name: 'Bloqueo emocional' },
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
