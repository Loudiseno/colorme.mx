import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo por perder tu trabajo: mas que un despido | ColorMe',
  description: 'Porque no solo perdiste un empleo. Perdiste mucho mas.',
  keywords: ['duelo por perdida de trabajo', 'duelo laboral', 'despido', 'desempleo emocional', 'identidad laboral'],
  alternates: { canonical: '/blog/duelo-perdida-trabajo' },
  openGraph: {
    type: 'article',
    title: 'El duelo por perder tu trabajo: mas que un despido | ColorMe',
    description: 'Porque no solo perdiste un empleo. Perdiste mucho mas.',
    url: '/blog/duelo-perdida-trabajo',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo por perder tu trabajo: mas que un despido',
  description: 'Porque no solo perdiste un empleo. Perdiste mucho mas.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-perdida-trabajo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
