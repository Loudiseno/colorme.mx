import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo por pérdida de trabajo: más que un despido | ColorMe',
  description: 'Perder el trabajo es perder identidad, propósito y estructura. Aprende a atravesar el duelo laboral con herramientas reales y sin minimizar el dolor.',
  keywords: ['duelo por pérdida de trabajo', 'duelo laboral', 'perder el empleo', 'desempleo emocional', 'duelo identidad profesional', 'tanatología'],
  alternates: { canonical: '/blog/duelo-perdida-trabajo' },
  openGraph: {
    type: 'article',
    title: 'Duelo por pérdida de trabajo: más que un despido | ColorMe',
    description: 'Perder el trabajo es perder identidad, propósito y estructura. Aprende a atravesar el duelo laboral.',
    url: '/blog/duelo-perdida-trabajo',
    images: [{ url: '/duelo-por-perdida-empleo.jpeg', alt: 'Duelo por pérdida de trabajo' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo por perder tu trabajo: más que un despido',
  description: 'Perder el trabajo es perder identidad, propósito y estructura. Aprende a atravesar el duelo laboral con herramientas reales.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-perdida-trabajo`,
  inLanguage: 'es-MX',
  about: { '@type': 'Thing', name: 'Duelo laboral' },
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
