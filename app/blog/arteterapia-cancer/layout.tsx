import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arteterapia y Cáncer | Sanación a Través del Arte',
  description: 'Cómo la arteterapia ayuda a pacientes con cáncer a procesar emociones, reducir estrés y encontrar bienestar durante el tratamiento oncológico.',
  alternates: {
    canonical: '/blog/arteterapia-cancer',
  },
  openGraph: {
    title: 'Arteterapia y Cáncer | Sanación a Través del Arte | ColorMe',
    description: 'Cómo la arteterapia ayuda a pacientes con cáncer a procesar emociones, reducir estrés y encontrar bienestar.',
    url: '/blog/arteterapia-cancer',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
