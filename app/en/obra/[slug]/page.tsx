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
  const expo = getExpo(slug, true)
  if (!expo) return {}
  return {
    title: `${expo.title} | Artwork`,
    description: expo.statement[0],
    alternates: { canonical: `/en/obra/${expo.slug}` },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      title: `${expo.title} | ColorMe`,
      description: expo.statement[0],
      url: `/en/obra/${expo.slug}`,
      images: expo.cover ? [{ url: expo.cover }] : undefined,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const expo = getExpo(slug, true)
  if (!expo) notFound()
  return <ExpoPage expo={expo} backHref="/en/obra" labels={{ back: 'Back to Artwork', works: 'Works', close: 'Close', prev: 'Previous', next: 'Next' }} />
}
