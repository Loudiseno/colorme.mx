import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes | ColorMe',
  description: 'Respuestas a las preguntas más comunes sobre tanatología, arte como terapia, duración de sesiones y cómo agendar una cita.',
  keywords: ['preguntas frecuentes', 'FAQ', 'arte como terapia', 'tanatología', 'sesiones', 'consultas'],
  alternates: {
    canonical: '/preguntas-frecuentes',
  },
  openGraph: {
    type: 'website',
    title: 'Preguntas frecuentes | ColorMe',
    description: 'Respuestas a las preguntas más comunes sobre tanatología y arte como terapia.',
    url: '/preguntas-frecuentes',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
