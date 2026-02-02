import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'colorme.mx',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/arteterapia', destination: '/arteterapia-mexico', permanent: true },
      { source: '/tanatologia', destination: '/tanatologia-acompanamiento-duelo', permanent: true },
      { source: '/blog/que-es-arteterapia', destination: '/blog/que-es-la-arteterapia-beneficios', permanent: true },
      { source: '/sobre-mi', destination: '/sobre-mi-lou-arteterapeuta-tanatologa', permanent: true },
      { source: '/privacidad', destination: '/politica-de-privacidad', permanent: true },
    ]
  },
}

export default nextConfig
