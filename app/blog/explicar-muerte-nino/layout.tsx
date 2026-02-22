import { Metadata } from 'next'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Cómo explicar la muerte a un niño | ColorMe',
  description: 'Guía para tener la conversación más difícil con amor y claridad. Cómo hablar de la muerte según la edad del niño.',
  keywords: [
    'explicar muerte a niños',
    'cómo hablar de la muerte con niños',
    'duelo infantil',
    'niños y muerte',
    'explicar pérdida a hijos',
    'muerte abuelo niños',
    'duelo niños por edad',
  ],
  alternates: {
    canonical: '/blog/explicar-muerte-nino',
  },
  openGraph: {
    title: 'Cómo explicar la muerte a un niño | ColorMe',
    description: 'Guía para tener la conversación más difícil con amor y claridad.',
    url: `${siteConfig.url}/blog/explicar-muerte-nino`,
    siteName: siteConfig.name,
    locale: 'es_MX',
    type: 'article',
    images: [
      {
        url: `${siteConfig.url}/explicar-muerte-nino.webp`,
        width: 1200,
        height: 630,
        alt: 'Cómo explicar la muerte a un niño',
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
            headline: 'Cómo explicar la muerte a un niño',
            description: 'Guía para tener la conversación más difícil con amor y claridad.',
            image: `${siteConfig.url}/explicar-muerte-nino.webp`,
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
              '@id': `${siteConfig.url}/blog/explicar-muerte-nino`,
            },
          }),
        }}
      />
      {children}
    </>
  )
}
