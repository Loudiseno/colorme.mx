import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelos invisibles: las pérdidas que nadie reconoce pero que duelen igual | ColorMe',
  description: 'Los duelos desautorizados son pérdidas reales que la sociedad no valida. La mascota, el embarazo, el trabajo, la identidad. Tu dolor es legítimo aunque nadie lo nombre.',
  keywords: ['duelos invisibles', 'duelo desautorizado', 'pérdidas no reconocidas', 'duelo sin funeral', 'Kenneth Doka', 'pérdida mascota', 'pérdida embarazo', 'tanatología'],
  alternates: { canonical: '/blog/duelos-invisibles-desautorizados' },
  openGraph: {
    type: 'article',
    title: 'Duelos invisibles: las pérdidas que nadie reconoce pero que duelen igual | ColorMe',
    description: 'Los duelos desautorizados son pérdidas reales que la sociedad no valida. Tu dolor es legítimo aunque nadie lo nombre.',
    url: '/blog/duelos-invisibles-desautorizados',
    images: [{ url: '/duelos-invisibles.jpeg', alt: 'Duelos invisibles y pérdidas desautorizadas' }],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Duelos invisibles: las pérdidas que nadie reconoce pero que duelen igual',
  description: 'Los duelos desautorizados son pérdidas reales que la sociedad no valida. Tu dolor es legítimo aunque nadie lo nombre.',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelos-invisibles-desautorizados`,
  inLanguage: 'es-MX',
  about: { '@type': 'Thing', name: 'Duelo desautorizado' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  )
}
