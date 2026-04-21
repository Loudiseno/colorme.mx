import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Día de Muertos en México: la fiesta donde la muerte se celebra con vida',
  description: 'Descubre la tradición mexicana del Día de Muertos, sus rituales, la ofrenda, el significado del cempasúchil y cómo México celebra la memoria de quienes ya no están.',
  keywords: ['Día de Muertos', 'México tradiciones', 'ofrenda de muertos', 'cempasúchil', 'altar de muertos', 'Catrina', 'rituales mexicanos', 'tanatología'],
  alternates: {
    canonical: '/blog/mexico-dia-de-muertos-rituales-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Día de Muertos en México: la fiesta donde la muerte se celebra con vida | ColorMe',
    description: 'Descubre la tradición mexicana del Día de Muertos y cómo México celebra la memoria de quienes ya no están.',
    url: '/blog/mexico-dia-de-muertos-rituales-tradiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Día de Muertos en México: la fiesta donde la muerte se celebra con vida',
  description: 'Descubre la tradición mexicana del Día de Muertos y cómo México celebra la memoria de quienes ya no están.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/mexico-dia-de-muertos-rituales-tradiciones`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
