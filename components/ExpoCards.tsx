'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

export interface ExpoCardItem {
  title: string
  place: string
  date: string
  /** Foto de portada de la exposición */
  cover?: string
  coverAlt?: string
  /** Párrafos del statement */
  statement: string[]
  /** Fotos adicionales que se muestran dentro del detalle */
  gallery?: { src: string; alt: string }[]
  /** Obras de la exposición: cuadro + fotografía de referencia */
  works?: ExpoWork[]
}

export interface ExpoWork {
  /** Nombre de la obra */
  title: string
  /** Lugar donde fue tomada la fotografía de referencia */
  location: string
  /** Material y técnica */
  technique: string
  /** Medidas, si se conocen */
  dimensions?: string
  /** Imagen del cuadro */
  image?: string
  /** Fotografía que sirvió de referencia */
  reference?: string
}

interface ExpoCardsProps {
  items: ExpoCardItem[]
  labels?: {
    view: string
    close: string
    prev: string
    next: string
    soon: string
    reference: string
  }
}

const defaultLabels = {
  view: 'Ver exposición',
  close: 'Cerrar',
  prev: 'Anterior',
  next: 'Siguiente',
  soon: 'Foto próximamente',
  reference: 'Fotografía de referencia',
}

export default function ExpoCards({ items, labels = defaultLabels }: ExpoCardsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [zoom, setZoom] = useState<number | null>(null)
  const expo = openIndex !== null ? items[openIndex] : null

  // Todas las fotos del detalle: portada + galería
  const photos = expo
    ? [
        ...(expo.cover ? [{ src: expo.cover, alt: expo.coverAlt ?? expo.title }] : []),
        ...(expo.gallery ?? []),
        ...(expo.works ?? []).flatMap((w) => [
          ...(w.image ? [{ src: w.image, alt: `${w.title} — ${w.technique}` }] : []),
          ...(w.reference ? [{ src: w.reference, alt: `Referencia — ${w.location}` }] : []),
        ]),
      ]
    : []

  const closeAll = useCallback(() => {
    setZoom(null)
    setOpenIndex(null)
  }, [])

  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoom !== null) setZoom(null)
        else closeAll()
      }
      if (zoom !== null && photos.length > 1) {
        if (e.key === 'ArrowLeft') setZoom((z) => (z === null ? z : (z - 1 + photos.length) % photos.length))
        if (e.key === 'ArrowRight') setZoom((z) => (z === null ? z : (z + 1) % photos.length))
      }
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openIndex, zoom, photos.length, closeAll])

  return (
    <>
      {/* Tarjetas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group text-left rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all bg-white flex flex-col"
          >
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
              {item.cover ? (
                <Image
                  src={item.cover}
                  alt={item.coverAlt ?? item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#B2F7EF]/30 to-[#F0F7F6] flex flex-col items-center justify-center text-black/30">
                  <ImageIcon size={26} strokeWidth={1.5} />
                  <span className="text-[11px] mt-2 uppercase tracking-wider">{labels.soon}</span>
                </div>
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="text-xs text-black/40 uppercase tracking-wider">{item.date}</span>
              <h4 className="text-xl text-black mt-1 mb-1 leading-snug transition-colors group-hover:text-[#0D9488]">
                {item.title}
              </h4>
              <p className="text-black/50 text-sm flex-1">{item.place}</p>
              <span className="inline-block mt-3 text-sm font-medium text-[#0D9488]">
                {labels.view} →
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Detalle */}
      {expo && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start md:items-center justify-center p-4 overflow-y-auto"
          onClick={closeAll}
        >
          <div
            className="relative bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAll}
              aria-label={labels.close}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-black/70 hover:text-black hover:bg-white transition-colors shadow-sm"
            >
              <X size={22} />
            </button>

            {/* Imagen principal de la exposición */}
            {expo.cover && (
              <button
                type="button"
                onClick={() => setZoom(0)}
                className="relative block w-full aspect-[16/9] bg-gray-100 overflow-hidden rounded-t-3xl cursor-zoom-in group"
              >
                <Image
                  src={expo.cover}
                  alt={expo.coverAlt ?? expo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            )}

            <div className="p-8 md:p-10">
              <p className="text-xs text-[#0D9488] uppercase tracking-[0.2em] mb-3">{expo.date}</p>
              <h3 className="font-display text-3xl md:text-4xl text-black mb-1 leading-tight">
                {expo.title}
              </h3>
              <p className="text-black/50 text-sm mb-6">{expo.place}</p>

              <div className="space-y-4 text-black/75 leading-relaxed mb-8">
                {expo.statement.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {expo.works && expo.works.length > 0 && (
                <div className="space-y-14 border-t border-black/10 pt-10">
                  {expo.works.map((w) => {
                    const workIdx = w.image ? photos.findIndex((ph) => ph.src === w.image) : -1
                    const refIdx = w.reference ? photos.findIndex((ph) => ph.src === w.reference) : -1
                    return (
                      <figure key={w.title} className="text-center">
                        {/* La obra: protagonista */}
                        {w.image ? (
                          <button
                            type="button"
                            onClick={() => workIdx >= 0 && setZoom(workIdx)}
                            className="relative block w-full max-w-2xl mx-auto rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in group"
                            style={{ aspectRatio: '4 / 3' }}
                          >
                            <Image
                              src={w.image}
                              alt={`${w.title} — ${w.technique}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 672px"
                              className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                          </button>
                        ) : (
                          <div className="w-full max-w-2xl mx-auto aspect-[4/3] rounded-xl bg-gradient-to-br from-[#B2F7EF]/30 to-[#F0F7F6] flex flex-col items-center justify-center text-black/30">
                            <ImageIcon size={24} strokeWidth={1.5} />
                            <span className="text-[11px] mt-2 uppercase tracking-wider">{labels.soon}</span>
                          </div>
                        )}

                        <figcaption className="mt-4">
                          <h5 className="font-display text-xl text-black leading-snug">{w.title}</h5>
                          <p className="text-black/70 text-sm mt-1 leading-snug max-w-xl mx-auto">
                            {w.technique}
                          </p>
                          {w.dimensions && (
                            <p className="text-black/40 text-sm mt-0.5 tabular-nums">{w.dimensions}</p>
                          )}
                        </figcaption>

                        {/* Fotografía de referencia: pequeña y centrada */}
                        <div className="mt-5 flex flex-col items-center">
                          <p className="text-[11px] text-[#0D9488] uppercase tracking-[0.18em] mb-2">
                            {labels.reference}
                          </p>
                          {w.reference ? (
                            <button
                              type="button"
                              onClick={() => refIdx >= 0 && setZoom(refIdx)}
                              className="relative w-32 h-24 sm:w-40 sm:h-28 rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in group ring-1 ring-black/10"
                            >
                              <Image
                                src={w.reference}
                                alt={`${labels.reference} — ${w.location}`}
                                fill
                                sizes="160px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </button>
                          ) : (
                            <div className="w-32 h-24 sm:w-40 sm:h-28 rounded-lg bg-gradient-to-br from-[#B2F7EF]/20 to-[#F0F7F6] flex items-center justify-center text-black/30">
                              <ImageIcon size={18} strokeWidth={1.5} />
                            </div>
                          )}
                          <p className="text-black/60 text-sm mt-2">{w.location}</p>
                        </div>
                      </figure>
                    )
                  })}
                </div>
              )}

              {!expo.works && photos.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {photos.map((ph, i) => (
                    <button
                      key={ph.src}
                      type="button"
                      onClick={() => setZoom(i)}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in group"
                    >
                      <Image
                        src={ph.src}
                        alt={ph.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Foto a pantalla completa */}
      {expo && zoom !== null && photos[zoom] && (
        <div
          className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setZoom(null)}
        >
          <button
            onClick={() => setZoom(null)}
            aria-label={labels.close}
            className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={28} />
          </button>

          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setZoom((z) => (z === null ? z : (z - 1 + photos.length) % photos.length))
              }}
              aria-label={labels.prev}
              className="absolute left-2 md:left-6 z-10 p-3 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div className="relative w-full h-full max-w-6xl max-h-[88vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[zoom].src}
              alt={photos[zoom].alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setZoom((z) => (z === null ? z : (z + 1) % photos.length))
              }}
              aria-label={labels.next}
              className="absolute right-2 md:right-6 z-10 p-3 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {photos.length > 1 && (
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
              {zoom + 1} / {photos.length}
            </span>
          )}
        </div>
      )}
    </>
  )
}
