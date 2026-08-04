'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ExpoWork } from '@/lib/exposiciones'

interface WorkGalleryProps {
  works: ExpoWork[]
  labels?: { close: string; prev: string; next: string }
}

const defaults = { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente' }

// Galería de obras: imagen sin recorte, sin marcos, con ficha discreta.
export default function WorkGallery({ works, labels = defaults }: WorkGalleryProps) {
  const shown = works.filter((w) => w.image)
  const [zoom, setZoom] = useState<number | null>(null)

  const prev = useCallback(
    () => setZoom((z) => (z === null ? z : (z - 1 + shown.length) % shown.length)),
    [shown.length]
  )
  const next = useCallback(
    () => setZoom((z) => (z === null ? z : (z + 1) % shown.length)),
    [shown.length]
  )

  useEffect(() => {
    if (zoom === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoom, prev, next])

  if (!shown.length) return null

  return (
    <>
      <div className="space-y-24 md:space-y-32">
        {shown.map((w, i) => (
          <figure key={w.image}>
            <button
              type="button"
              onClick={() => setZoom(i)}
              aria-label={w.title}
              className="block w-full cursor-zoom-in group"
            >
              <Image
                src={w.image!}
                alt={`${w.title} — ${w.technique}`}
                width={1600}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="w-full h-auto transition-opacity duration-300 group-hover:opacity-90"
              />
            </button>

            {/* Ficha: discreta, jerarquía clara, alineada a la derecha */}
            <figcaption className="mt-4 text-right">
              <p className="text-base text-black leading-snug">{w.title}</p>
              <p className="text-xs text-black/40 mt-1 leading-relaxed">
                {w.technique}
                {w.dimensions ? ` · ${w.dimensions}` : ''}
              </p>
              {w.location && w.location !== w.title && (
                <p className="text-xs text-black/40 leading-relaxed">{w.location}</p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Visor a pantalla completa */}
      {zoom !== null && shown[zoom] && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setZoom(null)}
        >
          <button
            onClick={() => setZoom(null)}
            aria-label={labels.close}
            className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={28} />
          </button>

          {shown.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              aria-label={labels.prev}
              className="absolute left-2 md:left-6 z-10 p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <figure
            className="relative w-full max-w-6xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={shown[zoom].image!}
                alt={shown[zoom].title}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-white/60 text-xs leading-relaxed">
              <span className="text-white/90 text-sm">{shown[zoom].title}</span>
              <br />
              {shown[zoom].technique}
              {shown[zoom].dimensions ? ` · ${shown[zoom].dimensions}` : ''}
            </figcaption>
          </figure>

          {shown.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              aria-label={labels.next}
              className="absolute right-2 md:right-6 z-10 p-3 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tabular-nums">
            {zoom + 1} / {shown.length}
          </span>
        </div>
      )}
    </>
  )
}
