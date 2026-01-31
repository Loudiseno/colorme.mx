import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¿Qué es la Arteterapia? | Guía Completa',
  description: 'Descubre qué es la arteterapia, cómo funciona, sus beneficios y para quién es. Guía completa sobre terapia a través del arte para sanar emociones.',
  alternates: {
    canonical: '/blog/que-es-arteterapia',
  },
  openGraph: {
    title: '¿Qué es la Arteterapia? | Guía Completa | ColorMe',
    description: 'Descubre qué es la arteterapia, cómo funciona, sus beneficios y para quién es.',
    url: '/blog/que-es-arteterapia',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
