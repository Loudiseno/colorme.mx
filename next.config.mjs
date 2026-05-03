import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  // Enforce consistent URLs without trailing slash
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'colorme.mx',
      },
      {
        protocol: 'https',
        hostname: 'www.colorme.mx',
      },
    ],
  },
  // Redirect non-www to www for canonical consistency
  async redirects() {
    return [
      // Non-www to www redirect
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'colorme.mx',
          },
        ],
        destination: 'https://www.colorme.mx/:path*',
        permanent: true,
      },
      // Old URL redirects - fix 404s
      {
        source: '/blog/duelo',
        destination: '/blog/duelo-perdida',
        permanent: true,
      },
      {
        source: '/blog/arteterapia',
        destination: '/blog/que-es-la-arteterapia-beneficios',
        permanent: true,
      },
      {
        source: '/blog/tanatologia',
        destination: '/tanatologia-acompanamiento-duelo',
        permanent: true,
      },
      {
        source: '/arteterapia',
        destination: '/arteterapia-mexico',
        permanent: true,
      },
      {
        source: '/tanatologia',
        destination: '/tanatologia-acompanamiento-duelo',
        permanent: true,
      },
      {
        source: '/sobre-mi',
        destination: '/sobre-mi-lou-arteterapeuta-tanatologa',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/preguntas-frecuentes',
        permanent: true,
      },
      {
        source: '/privacidad',
        destination: '/politica-de-privacidad',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
