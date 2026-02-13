import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arteterapia para niños: guía por edades de 3 a 12 años | ColorMe',
  description: 'Descubre cómo la arteterapia ayuda a los niños a expresar emociones. Guía completa por edades con actividades, beneficios y señales de que tu hijo podría beneficiarse.',
  keywords: ['arteterapia para niños', 'arteterapia infantil', 'terapia arte niños', 'expresión emocional niños', 'actividades arteterapia', 'psicología infantil', 'desarrollo emocional'],
  alternates: {
    canonical: '/blog/arteterapia-para-ninos',
  },
  openGraph: {
    type: 'article',
    title: 'Arteterapia para niños: guía por edades de 3 a 12 años | ColorMe',
    description: 'Descubre cómo la arteterapia ayuda a los niños a expresar emociones según su edad.',
    url: '/blog/arteterapia-para-ninos',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arteterapia para niños: guía por edades de 3 a 12 años',
  description: 'Descubre cómo la arteterapia ayuda a los niños a expresar emociones. Guía completa por edades con actividades, beneficios y señales de que tu hijo podría beneficiarse.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/arteterapia-para-ninos`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
