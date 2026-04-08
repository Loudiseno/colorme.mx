import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'El duelo sucio: cuando te sientes aliviado de que alguien murió | ColorMe',
  description: 'Sentir alivio después de una muerte no te hace mala persona. Descubre por qué aparece el alivio en el duelo y cómo procesar estas emociones.',
  keywords: ['sentirse aliviado después de una muerte', 'culpa por no sentir tristeza', 'emociones contradictorias en el duelo', 'alivio cuando muere un familiar', 'duelo del cuidador'],
  alternates: {
    canonical: '/blog/duelo-sucio-alivio',
  },
  openGraph: {
    type: 'article',
    title: 'El duelo sucio: cuando te sientes aliviado de que alguien murió | ColorMe',
    description: 'Sentir alivio después de una muerte no te hace mala persona.',
    url: '/blog/duelo-sucio-alivio',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'El duelo sucio: cuando te sientes aliviado de que alguien murió',
  description: 'Sentir alivio después de una muerte no te hace mala persona. Descubre por qué aparece el alivio en el duelo y cómo procesar estas emociones.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelo-sucio-alivio`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {children}
    </>
  )
}
