import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tienda | Diario de Duelo, Libro Indeleble y Paquetes | ColorMe',
  description: 'Recursos para acompañar tu proceso: diario terapéutico de duelo en PDF, el libro Indeleble en español e inglés, y paquete de diario + 2 consultas individuales.',
  keywords: ['diario de duelo', 'diario terapéutico', 'libro Indeleble', 'arteterapia', 'tanatología', 'recursos para el duelo', 'consultas de duelo'],
  alternates: {
    canonical: '/tienda',
  },
  openGraph: {
    title: 'Tienda | ColorMe',
    description: 'Diario terapéutico de duelo, el libro Indeleble y paquetes con consultas individuales.',
    url: '/tienda',
  },
}

export default function TiendaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
