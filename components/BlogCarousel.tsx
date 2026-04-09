'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

interface Article {
  href: string
  image: string
  alt: string
  title: string
  description: string
}

interface BlogCarouselProps {
  title: string
  articles: Article[]
}

export default function BlogCarousel({ title, articles }: BlogCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="inline-block bg-[#B2F7EF] px-6 py-2 rounded-xl relative">
          <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
          <h3 className="text-2xl text-black font-semibold relative z-10">{title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-[#B2F7EF] hover:bg-[#B2F7EF]/20 transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((article) => (
          <Link key={article.href} href={article.href} className="group flex-shrink-0 w-72">
            <article className="bg-white rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all h-full">
              <div className="aspect-[16/10] relative overflow-hidden bg-gray-100">
                <Image src={article.image} alt={article.alt} fill className="object-cover grayscale mix-blend-luminosity" />
                <div className="absolute inset-0 bg-[#B2F7EF]/10 mix-blend-overlay"></div>
              </div>
              <div className="p-5">
                <h4 className="text-lg text-black mb-2 leading-tight">{article.title}</h4>
                <p className="text-black/70 text-sm leading-relaxed mb-3">{article.description}</p>
                <span className="inline-flex items-center gap-2 text-black text-sm font-medium">Leer más <ArrowRight size={14} /></span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
