import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cómo el arte sana: lo que sucede en tu cerebro cuando creas | ColorMe',
  description: 'La neurociencia detrás de por qué crear arte reduce el estrés y mejora el bienestar.',
  keywords: ['beneficios del arte', 'arteterapia', 'arte y cerebro', 'arte reduce estrés', 'neurociencia del arte', 'crear arte bienestar'],
  alternates: {
    canonical: '/blog/beneficios-arte',
  },
  openGraph: {
    type: 'article',
    title: 'Cómo el arte sana: lo que sucede en tu cerebro cuando creas | ColorMe',
    description: 'La neurociencia detrás de por qué crear arte reduce el estrés y mejora el bienestar.',
    url: '/blog/beneficios-arte',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cómo el arte sana: lo que sucede en tu cerebro cuando creas',
  description: 'La neurociencia detrás de por qué crear arte reduce el estrés y mejora el bienestar.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/beneficios-arte`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
