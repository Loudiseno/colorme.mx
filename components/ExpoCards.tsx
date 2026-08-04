import Link from 'next/link'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import type { Expo } from '@/lib/exposiciones'

interface ExpoCardsProps {
  items: Expo[]
  /** Base de la ruta: /obra o /en/obra */
  basePath: string
  labels?: {
    view: string
    soon: string
  }
}

const defaultLabels = {
  view: 'Ver exposición',
  soon: 'Foto próximamente',
}

// Tarjetas de exposición: imagen limpia, sin marcos, texto discreto.
export default function ExpoCards({ items, basePath, labels = defaultLabels }: ExpoCardsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {items.map((item) => (
        <Link key={item.slug} href={`${basePath}/${item.slug}`} className="group block">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F8F6F3]">
            {item.cover ? (
              <Image
                src={item.cover}
                alt={item.coverAlt ?? item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-black/25">
                <ImageIcon size={24} strokeWidth={1.5} />
                <span className="text-[11px] mt-2 uppercase tracking-wider">{labels.soon}</span>
              </div>
            )}
          </div>

          <div className="mt-4">
            <p className="text-[11px] text-black/40 uppercase tracking-[0.18em]">{item.date}</p>
            <h4 className="font-display text-2xl text-black mt-1.5 leading-snug transition-colors group-hover:text-[#0D9488]">
              {item.title}
            </h4>
            <p className="text-black/45 text-sm mt-1">{item.place}</p>
            <span className="inline-block mt-3 text-sm text-[#0D9488] opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {labels.view} →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
