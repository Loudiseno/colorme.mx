'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Img {
  src: string
  alt: string
}

export default function DiarioCarousel({ images }: { images: Img[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    // Avanza el ancho visible (dos imágenes)
    el.scrollBy({ left: dir === 'left' ? -el.clientWidth : el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img) => (
          <div
            key={img.src}
            className="snap-start shrink-0 basis-[calc(50%-0.5rem)] rounded-xl overflow-hidden border border-[#B2F7EF]/40"
          >
            <Image src={img.src} alt={img.alt} width={700} height={906} className="w-full h-auto" />
          </div>
        ))}
      </div>

      {/* Flechas */}
      <button
        type="button"
        onClick={() => scroll('left')}
        aria-label="Anterior"
        className="absolute left-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#B2F7EF] flex items-center justify-center shadow-md hover:bg-[#B2F7EF]/30 transition-all"
      >
        <ChevronLeft size={18} className="text-black" />
      </button>
      <button
        type="button"
        onClick={() => scroll('right')}
        aria-label="Siguiente"
        className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-[#B2F7EF] flex items-center justify-center shadow-md hover:bg-[#B2F7EF]/30 transition-all"
      >
        <ChevronRight size={18} className="text-black" />
      </button>
    </div>
  )
}
