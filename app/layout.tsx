import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppPopup from '@/components/WhatsAppPopup'
import { siteConfig, generateBusinessSchema, generatePersonSchema } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Arteterapia y Tanatología | Acompañamiento Emocional | ColorMe',
    template: '%s | ColorMe',
  },
  description: 'Acompañamiento emocional con arteterapia y tanatología para sanar duelos, transitar cambios y gestionar emociones. Sesión de primera gratis.',
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
    title: 'Arteterapia y Tanatología | Acompañamiento Emocional | ColorMe',
    description: 'Acompañamiento emocional con arteterapia y tanatología para sanar duelos, transitar cambios y gestionar emociones. Sesión de primera gratis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ColorMe - Arteterapia y Tanatología - Acompañamiento emocional para sanar duelos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arteterapia y Tanatología | Acompañamiento Emocional | ColorMe',
    description: 'Acompañamiento emocional con arteterapia y tanatología para sanar duelos, transitar cambios y gestionar emociones. Sesión de primera gratis.',
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
        <WhatsAppPopup />

        {/* Google Analytics */}
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

        {/* Meta Pixel — retargeting de visitantes del blog y sitio */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'REEMPLAZAR_CON_TU_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}
