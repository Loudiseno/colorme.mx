import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo y Redes Sociales | Cuando lo Digital Complica la Despedida',
  description: 'Cómo las redes sociales afectan el proceso de duelo. Aprende a manejar la presencia digital de quien ya no está.',
  keywords: ['duelo redes sociales', 'duelo digital', 'perfiles personas fallecidas', 'redes sociales y muerte'],
  alternates: {
    canonical: '/blog/duelo-y-redes-sociales',
  },
  openGraph: {
    type: 'article',
    title: 'Duelo y Redes Sociales | ColorMe',
    description: 'Cómo las redes sociales afectan el proceso de duelo.',
    url: '/blog/duelo-y-redes-sociales',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Duelo y Redes Sociales: Cuando el Mundo Digital Complica el Proceso de Despedida',
  description: 'Cómo las redes sociales afectan el proceso de duelo.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-y-redes-sociales`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
