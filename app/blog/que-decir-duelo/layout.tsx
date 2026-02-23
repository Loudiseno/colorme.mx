import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Qué decir (y qué NO decir) a alguien en duelo | ColorMe',
  description: 'Guía para acompañar a alguien que perdió un ser querido con empatía y respeto. Frases que ayudan y frases que es mejor evitar.',
  keywords: [
    'qué decir duelo',
    'cómo acompañar duelo',
    'frases duelo',
    'acompañar pérdida',
    'qué no decir duelo',
    'ayudar alguien duelo',
  ],
  alternates: {
    canonical: '/blog/que-decir-duelo',
  },
  openGraph: {
    title: 'Qué decir (y qué NO decir) a alguien en duelo | ColorMe',
    description: 'Guía para acompañar a alguien que perdió un ser querido con empatía y respeto.',
    url: `${siteConfig.url}/blog/que-decir-duelo`,
    siteName: siteConfig.name,
    locale: 'es_MX',
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/como-acompanar-duelo.webp`,
        width: 1200,
        height: 630,
        alt: 'Cómo acompañar a alguien en duelo',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Qué decir (y qué NO decir) a alguien en duelo',
            description: 'Guía para acompañar a alguien que perdió un ser querido con empatía y respeto.',
            image: `${siteConfig.url}/como-acompanar-duelo.webp`,
            author: {
              '@type': 'Person',
              name: siteConfig.author,
              url: siteConfig.url,
            },
            publisher: {
              '@type': 'Organization',
              name: siteConfig.name,
              logo: {
                '@type': 'ImageObject',
                url: `${siteConfig.url}/COLORME_logonegro.webp`,
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `${siteConfig.url}/blog/que-decir-duelo`,
            },
          }),
        }}
      />
      {children}
    </>
  )
}
