import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  // Enforce consistent URLs without trailing slash
  trailingSlash: false,
  images: {
    // Solo WebP: con AVIF activado Vercel genera (y cobra) dos transformaciones
    // por cada ancho de cada imagen. La diferencia visual es imperceptible.
    formats: ['image/webp'],
    // El contenedor más ancho del sitio es max-w-6xl (1152 px), así que los
    // anchos de 2048 y 3840 nunca se aprovechan y sí se cobran.
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [96, 256, 384],
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
      // Artículo duplicado eliminado -> versión que conservamos (preserva SEO)
      {
        source: '/blog/superar-perdida-ser-querido',
        destination: '/blog/como-superar-la-perdida-de-un-ser-querido',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
