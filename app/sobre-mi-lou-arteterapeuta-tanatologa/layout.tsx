import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Mí | Lou - Tanatóloga y Arteterapeuta',
  description: 'Conoce a Lou, tanatóloga, arteterapeuta, diseñadora, artista y sobreviviente de cáncer. Formación en México, Bali, Tailandia, Malasia, India y Reino Unido.',
  keywords: ['arteterapeuta', 'tanatóloga', 'Lou ColorMe', 'sobreviviente cáncer', 'terapeuta México', 'arte como terapia México', 'formación internacional'],
  alternates: {
    canonical: '/sobre-mi-lou-arteterapeuta-tanatologa',
  },
  openGraph: {
    title: 'Sobre Mí | Lou - Tanatóloga y Arteterapeuta | ColorMe',
    description: 'Conoce a Lou, tanatóloga, arteterapeuta, diseñadora, artista y sobreviviente de cáncer. Formación en México, Bali, Tailandia, Malasia, India y Reino Unido.',
    url: '/sobre-mi-lou-arteterapeuta-tanatologa',
  },
}

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
