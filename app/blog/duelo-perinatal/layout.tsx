import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelo perinatal: el dolor que la sociedad no ve | ColorMe',
  description: 'Tu bebé existió y tu dolor es real. Guía para madres y padres que perdieron un bebé durante el embarazo o poco después.',
  keywords: [
    'duelo perinatal',
    'pérdida de bebé',
    'aborto espontáneo duelo',
    'muerte fetal',
    'pérdida embarazo',
    'duelo neonatal',
    'muerte bebé',
  ],
  alternates: {
    canonical: '/blog/duelo-perinatal',
  },
  openGraph: {
    title: 'Duelo perinatal: el dolor que la sociedad no ve | ColorMe',
    description: 'Tu bebé existió y tu dolor es real. Guía para madres y padres que perdieron un bebé.',
    url: `${siteConfig.url}/blog/duelo-perinatal`,
    siteName: siteConfig.name,
    locale: 'es_MX',
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/duelo-perinatal.webp`,
        width: 1200,
        height: 630,
        alt: 'Duelo perinatal - Acompañamiento en la pérdida de un bebé',
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
            headline: 'Duelo perinatal: el dolor que la sociedad no ve',
            description: 'Tu bebé existió y tu dolor es real. Guía para madres y padres que perdieron un bebé.',
            image: `${siteConfig.url}/duelo-perinatal.webp`,
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
              '@id': `${siteConfig.url}/blog/duelo-perinatal`,
            },
          }),
        }}
      />
      {children}
    </>
  )
}
