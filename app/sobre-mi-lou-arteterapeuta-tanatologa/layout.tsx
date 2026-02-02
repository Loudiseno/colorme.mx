import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Mí | Lou - Arteterapeuta y Tanatóloga',
  description: 'Conoce a Lou, arteterapeuta, tanatóloga, diseñadora, artista y sobreviviente de cáncer. Formación en México, Bali, Tailandia, Malasia e India.',
  keywords: ['arteterapeuta', 'tanatóloga', 'Lou ColorMe', 'sobreviviente cáncer', 'terapeuta México', 'arteterapia México', 'formación internacional'],
  alternates: {
    canonical: '/sobre-mi-lou-arteterapeuta-tanatologa',
  },
  openGraph: {
    title: 'Sobre Mí | Lou - Arteterapeuta y Tanatóloga | ColorMe',
    description: 'Conoce a Lou, arteterapeuta, tanatóloga, diseñadora, artista y sobreviviente de cáncer. Formación en México, Bali, Tailandia, Malasia e India.',
    url: '/sobre-mi-lou-arteterapeuta-tanatologa',
  },
}

export default function SobreMiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
