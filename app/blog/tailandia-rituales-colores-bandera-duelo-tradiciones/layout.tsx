import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Tailandia, la tierra de la sonrisa eterna: rituales, colores sagrados y la sabiduría de soltar con gratitud',
  description: 'En Tailandia la espiritualidad se respira en cada gesto. Descubre los rituales tailandeses, los colores sagrados de su bandera y la forma serena en que su pueblo honra la vida y la muerte.',
  keywords: ['rituales Tailandia', 'espiritualidad budista', 'duelo en Tailandia', 'rituales del mundo', 'colores bandera Tailandia', 'budismo theravada', 'islas Tailandia', 'templos tailandeses', 'tanatología', 'arteterapia'],
  alternates: {
    canonical: '/blog/tailandia-rituales-colores-bandera-duelo-tradiciones',
  },
  openGraph: {
    type: 'article',
    title: 'Tailandia, la tierra de la sonrisa eterna: rituales, colores sagrados y la sabiduría de soltar con gratitud | ColorMe',
    description: 'En Tailandia la espiritualidad se respira en cada gesto. Descubre los rituales tailandeses y la forma serena en que honran la vida y la muerte.',
    url: '/blog/tailandia-rituales-colores-bandera-duelo-tradiciones',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tailandia, la tierra de la sonrisa eterna: rituales, colores sagrados y la sabiduría de soltar con gratitud',
  description: 'En Tailandia la espiritualidad se respira en cada gesto. Descubre los rituales tailandeses y la forma serena en que honran la vida y la muerte.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/tailandia-rituales-colores-bandera-duelo-tradiciones`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
