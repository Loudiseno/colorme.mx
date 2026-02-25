import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El enojo que no expresas se convierte en otra cosa | ColorMe',
  description: 'Por que necesitas darle espacio a tu rabia. Apoyo para entender y expresar el enojo de forma saludable.',
  keywords: ['enojo', 'rabia reprimida', 'emociones negativas', 'enojo en el duelo', 'expresar enojo'],
  alternates: {
    canonical: '/blog/enojo-emocion-valida',
  },
  openGraph: {
    type: 'article',
    title: 'El enojo que no expresas se convierte en otra cosa | ColorMe',
    description: 'Por que necesitas darle espacio a tu rabia. Apoyo para entender y expresar el enojo de forma saludable.',
    url: '/blog/enojo-emocion-valida',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El enojo que no expresas se convierte en otra cosa',
  description: 'Por que necesitas darle espacio a tu rabia. Apoyo para entender y expresar el enojo de forma saludable.',
  author: { '@type': 'Person', name: siteConfig.author, url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/enojo-emocion-valida`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
