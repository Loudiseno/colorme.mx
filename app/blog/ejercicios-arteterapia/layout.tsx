import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: '10 ejercicios de arteterapia que puedes hacer en casa | ColorMe',
  description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
  keywords: ['ejercicios de arteterapia', 'arteterapia en casa', 'técnicas de arteterapia', 'arte y emociones', 'mandalas terapéuticos', 'expresión creativa'],
  alternates: {
    canonical: '/blog/ejercicios-arteterapia',
  },
  openGraph: {
    type: 'article',
    title: '10 ejercicios de arteterapia que puedes hacer en casa | ColorMe',
    description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
    url: '/blog/ejercicios-arteterapia',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '10 ejercicios de arteterapia que puedes hacer en casa',
  description: 'Ejercicios creativos para procesar emociones sin necesidad de saber dibujar.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
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
