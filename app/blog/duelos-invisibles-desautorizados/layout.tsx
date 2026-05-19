import type { Metadata } from 'next'
import Script from 'next/script'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Duelos invisibles: las pérdidas que nadie reconoce | ColorMe',
  description: 'Los duelos desautorizados son pérdidas reales que el mundo no valida. Aprende a reconocerlos y a darte permiso de sentir.',
  keywords: ['duelos invisibles', 'duelo desautorizado', 'pérdidas no reconocidas', 'duelo mascota', 'duelo aborto', 'duelo Kenneth Doka', 'tanatología'],
  alternates: { canonical: '/blog/duelos-invisibles-desautorizados' },
  openGraph: { type: 'article', title: 'Duelos invisibles | ColorMe', url: '/blog/duelos-invisibles-desautorizados' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Duelos invisibles: las pérdidas que nadie reconoce pero que duelen igual',
  author: { '@type': 'Person', name: 'Lourdes', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'ColorMe', url: siteConfig.url },
  mainEntityOfPage: `${siteConfig.url}/blog/duelos-invisibles-desautorizados`,
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (<><Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />{children}</>)
}
