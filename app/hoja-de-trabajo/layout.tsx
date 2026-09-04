import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exploraciones Creativas | Ejercicios de Arte como terapia',
  description: 'Ejercicios creativos personalizados de arte como terapia para explorar emociones, procesar duelos y fomentar el autoconocimiento. Herramientas gratuitas.',
  keywords: ['ejercicios arte como terapia', 'exploraciones creativas', 'mapa interior', 'ejercicio creativo personalizado', 'herramientas emocionales', 'arte como terapia gratis'],
  alternates: {
    canonical: '/hoja-de-trabajo',
  },
  openGraph: {
    title: 'Exploraciones Creativas | Ejercicios de Arte como terapia | ColorMe',
    description: 'Ejercicios creativos personalizados de arte como terapia para explorar emociones, procesar duelos y fomentar el autoconocimiento.',
    url: '/hoja-de-trabajo',
  },
}

export default function HojaDeTrabajoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
