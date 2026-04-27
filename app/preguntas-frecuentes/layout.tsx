import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes | ColorMe',
  description: 'Respuestas a las preguntas más comunes sobre arteterapia, tanatología, duración de sesiones y cómo agendar una cita.',
  keywords: ['preguntas frecuentes', 'FAQ', 'arteterapia', 'tanatología', 'sesiones', 'consultas'],
  alternates: {
    canonical: '/preguntas-frecuentes',
  },
  openGraph: {
    type: 'website',
    title: 'Preguntas frecuentes | ColorMe',
    description: 'Respuestas a las preguntas más comunes sobre arteterapia y tanatología.',
    url: '/preguntas-frecuentes',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
