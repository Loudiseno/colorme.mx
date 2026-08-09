'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { ObraImage } from '@/components/ObraCarousel'

export interface GalleryGroup {
  title: string
  items: ObraImage[]
}

interface ObraGalleryProps {
  /** Galería plana */
  images?: ObraImage[]
  /** Galería en columnas verticales, una por grupo (por ejemplo, por país) */
  groups?: GalleryGroup[]
  labels?: { close: string; prev: string; next: string }
}

const defaults = { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente' }

export default function ObraGallery({ images, groups, labels = defaults }: ObraGalleryProps) {
  // Índice global: el visor recorre todas las fotos, agrupadas o no.
  const flat: ObraImage[] = groups ? groups.flatMap((g) => g.items) : (images ?? [])
  const [zoom, setZoom] = useState<number | null>(null)
  // Con ?ids=1 en la URL aparece el nombre de archivo bajo cada foto, para
  // poder señalar exactamente cuál conservar o quitar. No se ve en la web normal.
  const [showIds, setShowIds] = useState(false)
  const [columnas, setColumnas] = useState(3)

  useEffect(() => {
    setShowIds(new URLSearchParams(window.location.search).get('ids') === '1')
    const medir = () => setColumnas(window.innerWidth >= 1024 ? 3 : 2)
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [])

  const prev = useCallback(
    () => setZoom((z) => (z === null ? z : (z - 1 + flat.length) % flat.length)),
    [flat.length]
  )
  const next = useCallback(
    () => setZoom((z) => (z === null ? z : (z + 1) % flat.length)),
    [flat.length]
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

  if (!flat.length) return null

  const Photo = ({ img, index }: { img: ObraImage; index: number }) => (
    <figure>
      <button
        type="button"
        onClick={() => setZoom(index)}
        aria-label={img.alt}
        className="group block w-full cursor-zoom-in"
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={1200}
          height={1500}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
          className="w-full h-auto transition-opacity duration-300 group-hover:opacity-90"
        />
      </button>
      {img.caption && (
        <figcaption className="mt-2 text-right text-xs text-black/40 leading-relaxed whitespace-pre-line">
          {img.caption}
        </figcaption>
      )}
      {showIds && (
        <p className="mt-1 text-right text-[10px] text-[#0D9488] font-mono break-all">
          {img.src.replace('/', '')}
        </p>
      )}
    </figure>
  )

  // Las columnas CSS llenan la primera de arriba abajo antes de pasar a la
  // siguiente, así que la foto 30 acababa apareciendo más alta que la 10.
  // Repartiéndolas una a una, la primera fila es 1, 2 y 3, y la jerarquía
  // baja por filas sin que aparezcan huecos entre fotos.
  const enColumnas = Array.from({ length: columnas }, (_, c) =>
    flat.map((img, i) => ({ img, i })).filter(({ i }) => i % columnas === c)
  )

  let cursor = -1

  return (
    <>
      {groups ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 md:gap-10">
          {groups.map((g) => (
            <section key={g.title} className="break-inside-avoid mb-10 md:mb-12">
              <h2 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-4">{g.title}</h2>
              <div className="space-y-6">
                {g.items.map((img) => {
                  cursor += 1
                  return <Photo key={img.src} img={img} index={cursor} />
                })}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="flex gap-6 md:gap-8 items-start">
          {enColumnas.map((columna, c) => (
            <div key={c} className="flex-1 min-w-0 space-y-6 md:space-y-8">
              {columna.map(({ img, i }) => (
                <Photo key={img.src} img={img} index={i} />
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Visor a pantalla completa */}
      {zoom !== null && flat[zoom] && (
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

          <figure
            className="relative w-full max-w-6xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[78vh]">
              <Image
                src={flat[zoom].src}
                alt={flat[zoom].alt}
                fill
                sizes="100vw"
                priority
                className="object-contain"
              />
            </div>
            {flat[zoom].caption && (
              <figcaption className="mt-4 text-center text-white/60 text-xs leading-relaxed whitespace-pre-line">
                {flat[zoom].caption}
              </figcaption>
            )}
          </figure>

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

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs tabular-nums">
            {zoom + 1} / {flat.length}
          </span>
        </div>
      )}
    </>
  )
}
