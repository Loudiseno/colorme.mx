import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import WorkGallery from '@/components/WorkGallery'
import type { Expo } from '@/lib/exposiciones'

interface ExpoPageProps {
  expo: Expo
  backHref: string
  labels: {
    back: string
    works: string
    close: string
    prev: string
    next: string
  }
}

// Página de exposición: la obra manda, el texto acompaña.
export default function ExpoPage({ expo, backHref, labels }: ExpoPageProps) {
  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-32 bg-white">
      {/* Volver */}
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          {labels.back}
        </Link>
      </div>

      {/* Título */}
      <header className="max-w-5xl mx-auto px-6 mt-12 md:mt-16">
        <p className="text-xs text-black/40 uppercase tracking-[0.25em] mb-5">{expo.date}</p>
        <h1 className="text-5xl md:text-7xl text-black leading-[1.02] mb-5">{expo.title}</h1>
        <p className="text-black/50">{expo.place}</p>
      </header>

      {/* Portada a lo ancho */}
      {expo.cover && (
        <div className="max-w-6xl mx-auto px-6 mt-14 md:mt-20">
          <Image
            src={expo.cover}
            alt={expo.coverAlt ?? expo.title}
            width={1800}
            height={1200}
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Statement — columna angosta para lectura cómoda */}
      <div className="max-w-2xl mx-auto px-6 mt-16 md:mt-24">
        <div className="space-y-6 text-lg md:text-xl text-black/75 leading-relaxed">
          {expo.statement.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Obras */}
      {expo.works && expo.works.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 mt-24 md:mt-36">
          <h2 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-14 md:mb-20">
            {labels.works}
          </h2>
          <WorkGallery
            works={expo.works}
            labels={{ close: labels.close, prev: labels.prev, next: labels.next }}
          />
        </section>
      )}

      <div className="max-w-5xl mx-auto px-6 mt-24 md:mt-32 pt-10 border-t border-black/10">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          {labels.back}
        </Link>
      </div>
    </article>
  )
}
