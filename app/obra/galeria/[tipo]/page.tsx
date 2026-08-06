import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GaleriaPage from '@/components/GaleriaPage'
import { getGaleria, allGaleriaSlugs } from '@/lib/obraGalerias'

interface Props { params: Promise<{ tipo: string }> }

export function generateStaticParams() {
  return allGaleriaSlugs().map((tipo) => ({ tipo }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tipo } = await params
  const g = getGaleria(tipo)
  if (!g) return {}
  return {
    title: `${g.title} | Obra`,
    description: g.intro,
    alternates: { canonical: `/obra/galeria/${g.slug}` },
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      title: `${g.title} | ColorMe`,
      description: g.intro,
      url: `/obra/galeria/${g.slug}`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { tipo } = await params
  if (!getGaleria(tipo)) notFound()
  return <GaleriaPage slug={tipo} />
}
