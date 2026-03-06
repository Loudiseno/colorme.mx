import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'La culpa que llevas a todas partes | ColorMe',
  description: 'Y como soltar lo que no te corresponde. Apoyo para entender y procesar la culpa.',
  keywords: ['culpa', 'duelo y culpa', 'culpa excesiva', 'perdonarse a si mismo', 'culpa en el duelo'],
  alternates: {
    canonical: '/blog/culpa-que-cargamos',
  },
  openGraph: {
    type: 'article',
    title: 'La culpa que llevas a todas partes | ColorMe',
    description: 'Y como soltar lo que no te corresponde. Apoyo para entender y procesar la culpa.',
    url: '/blog/culpa-que-cargamos',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'La culpa que llevas a todas partes',
  description: 'Y como soltar lo que no te corresponde. Apoyo para entender y procesar la culpa.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/culpa-que-cargamos`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
