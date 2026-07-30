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
