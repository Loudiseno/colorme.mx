import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Rituales de despedida: cómo crear el tuyo | ColorMe',
  description: 'Cómo crear rituales significativos para honrar a quien ya no está.',
  keywords: ['rituales de despedida', 'cómo despedirse', 'rituales de duelo', 'honrar a los muertos', 'despedida simbólica', 'ceremonias de despedida'],
  alternates: {
    canonical: '/blog/rituales-despedida',
  },
  openGraph: {
    type: 'article',
    title: 'Rituales de despedida: cómo crear el tuyo | ColorMe',
    description: 'Cómo crear rituales significativos para honrar a quien ya no está.',
    url: '/blog/rituales-despedida',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rituales de despedida: cómo crear el tuyo',
  description: 'Cómo crear rituales significativos para honrar a quien ya no está.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/rituales-despedida`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
