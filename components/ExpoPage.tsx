import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import type { Expo } from '@/lib/exposiciones'

interface ExpoPageProps {
  expo: Expo
  backHref: string
  labels: {
    back: string
    works: string
  }
}

// Página de una exposición: portada, statement y obras en grande.
export default function ExpoPage({ expo, backHref, labels }: ExpoPageProps) {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          {labels.back}
        </Link>

        {/* Encabezado */}
        <header className="mb-10">
          <p className="text-xs text-[#0D9488] uppercase tracking-[0.2em] mb-3">{expo.date}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-3 leading-tight">
            {expo.title}
          </h1>
          <p className="text-black/50">{expo.place}</p>
        </header>

        {/* Portada */}
        {expo.cover && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 mb-10">
            <Image
              src={expo.cover}
              alt={expo.coverAlt ?? expo.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Statement */}
        <div className="space-y-5 text-lg text-black/75 leading-relaxed mb-16">
          {expo.statement.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Obras — a lo ancho, en grande */}
      {expo.works && expo.works.length > 0 && (
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl text-black mb-10 text-center">{labels.works}</h2>
          <div className="space-y-16">
            {expo.works.map((w) => (
              <figure key={w.title + (w.image ?? '')}>
                {w.image && (
                  <div className="relative w-full bg-[#F8F6F3] rounded-2xl overflow-hidden">
                    <Image
                      src={w.image}
                      alt={`${w.title} — ${w.technique}`}
                      width={1400}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                )}
                <figcaption className="mt-5 text-center max-w-2xl mx-auto">
                  <h3 className="font-display text-2xl text-black leading-snug">{w.title}</h3>
                  <p className="text-black/70 mt-2 leading-snug">{w.technique}</p>
                  {w.dimensions && (
                    <p className="text-black/40 text-sm mt-1 tabular-nums">{w.dimensions}</p>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[#0D9488] hover:text-[#0D9488]/70 transition-colors"
        >
          <ArrowLeft size={18} />
          {labels.back}
        </Link>
      </div>
    </article>
  )
}
