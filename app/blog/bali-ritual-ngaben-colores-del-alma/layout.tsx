import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Bali, la isla donde la muerte se celebra: el ritual del Ngaben y los colores del alma',
  description: 'Bali enseña que la muerte no se llora, se libera. Descubre el ritual del Ngaben, los colores sagrados y la espiritualidad cotidiana de la isla de los dioses.',
  keywords: ['ritual Ngaben Bali', 'ceremonia cremación balinesa', 'rituales del mundo', 'espiritualidad balinesa', 'duelo Bali', 'canang sari', 'tanatología'],
  alternates: {
    canonical: '/blog/bali-ritual-ngaben-colores-del-alma',
  },
  openGraph: {
    type: 'article',
    title: 'Bali, la isla donde la muerte se celebra: el ritual del Ngaben y los colores del alma | ColorMe',
    description: 'Descubre el ritual del Ngaben, los colores sagrados y la espiritualidad cotidiana de Bali.',
    url: '/blog/bali-ritual-ngaben-colores-del-alma',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Bali, la isla donde la muerte se celebra: el ritual del Ngaben y los colores del alma',
  description: 'Descubre el ritual del Ngaben, los colores sagrados y la espiritualidad cotidiana de Bali.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/bali-ritual-ngaben-colores-del-alma`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
