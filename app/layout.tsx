import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { siteConfig, generateBusinessSchema, generatePersonSchema } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Color Me | Arteterapia y Tanatología en México - Acompañamiento en Duelo',
    template: '%s | Color Me - Arteterapia y Tanatología',
  },
  description: siteConfig.description,
  keywords: [
    'arteterapia',
    'tanatología',
    'duelo',
    'terapia de duelo',
    'acompañamiento emocional',
    'arte terapia México',
    'tanatología México',
    'superar pérdida',
    'terapia online México',
    'sanación emocional',
    'duelo por muerte',
    'duelo por pérdida',
    'terapia grupal',
    'talleres arteterapia',
  ],
  authors: [{ name: 'Lourdes', url: siteConfig.url }],
  creator: 'Lourdes',
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Color Me | Arteterapia y Tanatología en México',
    description: siteConfig.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Color Me - Arteterapia y Tanatología - Acompañamiento para sanar el duelo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Me | Arteterapia y Tanatología en México',
    description: siteConfig.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have the verification codes
    // google: 'your-google-verification-code',
  },
  category: 'health',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        {/* Structured Data - Business */}
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBusinessSchema()),
          }}
        />
        {/* Structured Data - Person */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()),
          }}
        />
      </head>
      <body className="bg-cream text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
        
        {/* Google Analytics - Replace with actual ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JK0WQBHTQ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JK0WQBHTQ3');
          `}
        </Script>
      </body>
    </html>
  )
}
