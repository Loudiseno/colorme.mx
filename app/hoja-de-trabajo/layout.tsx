import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exploraciones Creativas | Ejercicios de Arteterapia',
  description: 'Ejercicios creativos personalizados de arteterapia para explorar emociones, procesar duelos y fomentar el autoconocimiento. Herramientas gratuitas.',
  keywords: ['ejercicios arteterapia', 'exploraciones creativas', 'mapa interior', 'ejercicio creativo personalizado', 'herramientas emocionales', 'arteterapia gratis'],
  alternates: {
    canonical: '/hoja-de-trabajo',
  },
  openGraph: {
    title: 'Exploraciones Creativas | Ejercicios de Arteterapia | ColorMe',
    description: 'Ejercicios creativos personalizados de arteterapia para explorar emociones, procesar duelos y fomentar el autoconocimiento.',
    url: '/hoja-de-trabajo',
  },
}

export default function HojaDeTrabajoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
