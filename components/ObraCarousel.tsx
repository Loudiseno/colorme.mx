'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface ObraImage {
  src: string
  alt: string
}

interface ObraCarouselProps {
  images: ObraImage[]
  /** Texto de accesibilidad para los botones (ES por defecto) */
  prevLabel?: string
  nextLabel?: string
}

// Carrusel horizontal con flechas para las galerías de Obra.
export default function ObraCarousel({
  images,
  prevLabel = 'Anterior',
  nextLabel = 'Siguiente',
}: ObraCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = scrollRef.current.clientWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      })
    }
  }

  if (!images.length) return null

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="relative flex-shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 snap-start"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
              className="object-cover"
            />
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
    </div>
  )
}
