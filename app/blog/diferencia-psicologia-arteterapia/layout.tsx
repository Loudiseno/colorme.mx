import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Psicología y Arteterapia | Diferencias y Cuándo Elegir Cada Una',
  description: 'Conoce las diferencias entre psicología y arteterapia. Descubre cuándo elegir cada una según tus necesidades emocionales.',
  keywords: ['diferencia psicología arteterapia', 'psicología vs arteterapia', 'qué es arteterapia', 'terapia arte'],
  alternates: {
    canonical: '/blog/diferencia-psicologia-arteterapia',
  },
  openGraph: {
    type: 'article',
    title: 'Psicología y Arteterapia: Diferencias | ColorMe',
    description: 'Conoce las diferencias entre psicología y arteterapia.',
    url: '/blog/diferencia-psicologia-arteterapia',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Psicología y Arteterapia: ¿En Qué se Diferencian y Cuándo Elegir Cada Una?',
  description: 'Conoce las diferencias entre psicología y arteterapia.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/diferencia-psicologia-arteterapia`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
