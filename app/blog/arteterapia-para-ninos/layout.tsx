import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Arte como terapia para niños: de 3 a 12 años | ColorMe',
  description: 'Descubre cómo el arte como terapia ayuda a los niños a expresar emociones, con actividades por edades y señales de que tu hijo podría beneficiarse.',
  keywords: ['arte como terapia para niños', 'arte como terapia infantil', 'terapia arte niños', 'expresión emocional niños', 'actividades arte como terapia', 'psicología infantil', 'desarrollo emocional'],
  alternates: {
    canonical: '/blog/arteterapia-para-ninos',
  },
  openGraph: {
    type: 'article',
    title: 'Arte como terapia para niños: de 3 a 12 años | ColorMe',
    description: 'Descubre cómo el arte como terapia ayuda a los niños a expresar emociones según su edad.',
    url: '/blog/arteterapia-para-ninos',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arte como terapia para niños: de 3 a 12 años',
  description: 'Descubre cómo el arte como terapia ayuda a los niños a expresar emociones, con actividades por edades y señales de que tu hijo podría beneficiarse.',
  author: { '@type': 'Person', name: 'Lourdes Pérez', url: siteConfig.url },
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
