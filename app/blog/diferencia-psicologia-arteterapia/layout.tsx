import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Psicología y Arte como terapia | Diferencias y Cuándo Elegir Cada Una',
  description: 'Conoce las diferencias entre psicología y arte como terapia. Descubre cuándo elegir cada una según tus necesidades emocionales.',
  keywords: ['diferencia psicología arte como terapia', 'psicología vs arte como terapia', 'qué es arte como terapia', 'terapia arte'],
  alternates: {
    canonical: '/blog/diferencia-psicologia-arteterapia',
  },
  openGraph: {
    type: 'article',
    title: 'Psicología y Arte como terapia: Diferencias | ColorMe',
    description: 'Conoce las diferencias entre psicología y arte como terapia.',
    url: '/blog/diferencia-psicologia-arteterapia',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Psicología y Arte como terapia: ¿En Qué se Diferencian y Cuándo Elegir Cada Una?',
  description: 'Conoce las diferencias entre psicología y arte como terapia.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
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
