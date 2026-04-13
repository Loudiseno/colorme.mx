import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Menopausia y Duelo | Cómo Transitar el Fin de una Etapa',
  description: 'La menopausia también es un duelo. Aprende a transitar el fin de esta etapa con compasión y a honrar los cambios de tu cuerpo.',
  keywords: ['menopausia y duelo', 'duelo menopausia', 'fin fertilidad', 'cambios menopausia', 'transición menopausia'],
  alternates: {
    canonical: '/blog/menopausia-y-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'Menopausia y Duelo | ColorMe',
    description: 'La menopausia también es un duelo. Aprende a transitar esta etapa.',
    url: '/blog/menopausia-y-duelo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Menopausia y Duelo: Cómo Transitar el Fin de una Etapa con Compasión',
  description: 'La menopausia también es un duelo. Aprende a transitar esta etapa.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/menopausia-y-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
