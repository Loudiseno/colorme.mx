import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'colorme.mx',
      },
    ],
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
