import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ExpoPage from '@/components/ExpoPage'
import { getExpo, allExpoSlugs } from '@/lib/exposiciones'

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return allExpoSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const expo = getExpo(slug)
  if (!expo) return {}
  return {
    title: `${expo.title} | Obra`,
    description: expo.statement[0],
    alternates: { canonical: `/obra/${expo.slug}` },
    openGraph: {
      type: 'article',
      locale: 'es_MX',
      title: `${expo.title} | ColorMe`,
      description: expo.statement[0],
      url: `/obra/${expo.slug}`,
      images: expo.cover ? [{ url: expo.cover }] : undefined,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const expo = getExpo(slug)
  if (!expo) notFound()
  return (
    <ExpoPage
      expo={expo}
      backHref="/obra"
      labels={{
        back: 'Volver a Obra',
        works: 'Obras',
        close: 'Cerrar',
        prev: 'Anterior',
        next: 'Siguiente',
        reference: 'Fotografía de referencia',
      }}
    />
  )
}
