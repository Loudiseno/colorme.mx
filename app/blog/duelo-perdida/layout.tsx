import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Duelo y Pérdida | Cómo Transitar el Proceso de Duelo',
  description: 'Guía sobre el proceso de duelo y pérdida. Aprende a transitar el dolor, identificar las etapas del duelo y cuándo buscar acompañamiento profesional.',
  alternates: {
    canonical: '/blog/duelo-perdida',
  },
  openGraph: {
    title: 'Duelo y Pérdida | Cómo Transitar el Proceso de Duelo | ColorMe',
    description: 'Guía sobre el proceso de duelo y pérdida. Aprende a transitar el dolor y cuándo buscar acompañamiento profesional.',
    url: '/blog/duelo-perdida',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
