'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export interface ObraImage {
  src: string
  alt: string
  /** Pie de foto: lugar o ficha técnica, en gris y alineado a la derecha */
  caption?: string
}

interface ObraCarouselProps {
  images: ObraImage[]
  /** Texto de accesibilidad para los botones (ES por defecto) */
  prevLabel?: string
  nextLabel?: string
  closeLabel?: string
}

// Carrusel horizontal con flechas y visor a pantalla completa al hacer clic.
export default function ObraCarousel({
  images,
  prevLabel = 'Anterior',
  nextLabel = 'Siguiente',
  closeLabel = 'Cerrar',
}: ObraCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const isOpen = lightboxIndex !== null

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))
  }, [images.length])

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? i : (i + 1) % images.length))
  }, [images.length])

  // Teclado: Esc cierra, flechas navegan
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, showPrev, showNext])

  if (!images.length) return null

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, i) => (
          <div key={img.src} className="flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] snap-start">
            <button
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={img.alt}
              className="group relative block w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
            {img.caption && (
              <p className="mt-2 text-right text-xs text-black/40 leading-snug whitespace-pre-line">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={() => scroll('left')}
          className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all"
          aria-label={prevLabel}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all"
          aria-label={nextLabel}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Visor a pantalla completa */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label={closeLabel}
            className="absolute top-4 right-4 z-10 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label={prevLabel}
            className="absolute left-2 md:left-6 z-10 p-3 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative w-full h-full max-w-6xl max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label={nextLabel}
            className="absolute right-2 md:right-6 z-10 p-3 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
            {lightboxIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  )
}
