import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '10 ejercicios de arte como terapia que puedes hacer en casa | ColorMe',
  description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
  keywords: ['ejercicios de arte como terapia', 'arte como terapia en casa', 'técnicas de arte como terapia', 'arte y emociones', 'mandalas terapéuticos', 'expresión creativa'],
  alternates: {
    canonical: '/blog/ejercicios-arteterapia',
  },
  openGraph: {
    type: 'article',
    title: '10 ejercicios de arte como terapia que puedes hacer en casa | ColorMe',
    description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
    url: '/blog/ejercicios-arteterapia',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 ejercicios de arte como terapia que puedes hacer en casa',
  description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/ejercicios-arteterapia`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
