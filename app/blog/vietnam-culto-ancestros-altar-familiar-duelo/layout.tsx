import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Vietnam: El Altar Familiar y el Culto a los Ancestros',
  description: 'En Vietnam, la muerte no rompe el vinculo, lo profundiza. Descubre el culto a los ancestros, el altar familiar y como el duelo se transforma en gratitud.',
  keywords: ['culto ancestros Vietnam', 'altar familiar vietnamita', 'duelo en Vietnam', 'tradicion funeraria vietnamita', 'espiritualidad Vietnam'],
  alternates: {
    canonical: '/blog/vietnam-culto-ancestros-altar-familiar-duelo',
  },
  openGraph: {
    type: 'article',
    title: 'Vietnam: El Altar Familiar y el Culto a los Ancestros | ColorMe',
    description: 'Descubre el culto a los ancestros en Vietnam y como el duelo se transforma en gratitud.',
    url: '/blog/vietnam-culto-ancestros-altar-familiar-duelo',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Vietnam, la tierra donde los ancestros nunca se van: el altar familiar y el ritual de recordar',
  description: 'Descubre el culto a los ancestros en Vietnam y como el duelo se transforma en gratitud.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/vietnam-culto-ancestros-altar-familiar-duelo`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
