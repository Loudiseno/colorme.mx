import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ObraGallery from '@/components/ObraGallery'
import ObraCTA from '@/components/ObraCTA'
import ImageCopyright from '@/components/ImageCopyright'
import { getGaleria, galeriaGroups } from '@/lib/obraGalerias'

interface GaleriaPageProps {
  slug: string
  en?: boolean
}

// Galería completa de una sección de Obra.
export default function GaleriaPage({ slug, en = false }: GaleriaPageProps) {
  const g = getGaleria(slug)
  if (!g) return null

  const backHref = en ? '/en/obra' : '/obra'
  const groups = galeriaGroups(slug, en)
  const images = groups ? undefined : g.images(en)
  const labels = en
    ? { close: 'Close', prev: 'Previous', next: 'Next' }
    : { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente' }

  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          {en ? 'Back to Artwork' : 'Volver a Obra'}
        </Link>

        <header className="mt-8 md:mt-10 mb-8 md:mb-10">
          <h1 className="text-4xl md:text-5xl text-black leading-tight mb-3">
            {en ? g.titleEn : g.title}
          </h1>
          <p className="max-w-2xl text-black/70 leading-relaxed">{en ? g.introEn : g.intro}</p>
        </header>

        <ObraGallery images={images} groups={groups} labels={labels} />

        <div className="mt-12 md:mt-16 pt-6 border-t border-black/10">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            {en ? 'Back to Artwork' : 'Volver a Obra'}
          </Link>
        </div>
      </div>

      <ObraCTA en={en} />
      <ImageCopyright en={en} />
    </article>
  )
}
