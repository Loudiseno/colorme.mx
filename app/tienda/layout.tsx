import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Productos | El Arte de Habitar tu Duelo, Indeleble y Paquetes | ColorMe',
  description: 'Recursos para acompañar tu proceso: El arte de habitar tu duelo (diario terapéutico en PDF), el libro Indeleble en español e inglés, y paquete de diario + 2 consultas individuales.',
  keywords: ['el arte de habitar tu duelo', 'diario de duelo', 'diario terapéutico', 'libro Indeleble', 'arte como terapia', 'tanatología', 'recursos para el duelo', 'consultas de duelo'],
  alternates: {
    canonical: '/tienda',
  },
  openGraph: {
    title: 'Productos | ColorMe',
    description: 'Diario terapéutico de duelo, el libro Indeleble y paquetes con consultas individuales.',
    url: '/tienda',
  },
}

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
