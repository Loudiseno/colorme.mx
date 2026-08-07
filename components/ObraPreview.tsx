import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import type { ObraImage } from '@/components/ObraCarousel'

interface ObraPreviewProps {
  images: ObraImage[]
  /** Página con la galería completa */
  href: string
  moreLabel: string
}

// Adelanto de una sección: cuatro obras y un enlace a la galería completa.
export default function ObraPreview({ images, href, moreLabel }: ObraPreviewProps) {
  const first = images.slice(0, 4)
  if (!first.length) return null

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {first.map((img) => (
          <Link key={img.src} href={href} className="group block">
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#F8F6F3]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 45vw, 23vw"
                style={img.focus ? { objectPosition: img.focus } : undefined}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            {img.caption && (
              <p className="mt-2 text-right text-xs text-black/40 leading-relaxed whitespace-pre-line">
                {img.caption}
              </p>
            )}
          </Link>
        ))}
      </div>

      <div className="mt-5 flex justify-end">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm text-black/60 hover:text-[#0D9488] transition-colors"
        >
          {moreLabel}
          <span className="text-black/30 tabular-nums">({images.length})</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
