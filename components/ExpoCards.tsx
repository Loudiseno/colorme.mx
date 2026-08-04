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

// Tarjetas de exposición: cada una lleva a su propia página.
export default function ExpoCards({ items, basePath, labels = defaultLabels }: ExpoCardsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`${basePath}/${item.slug}`}
          className="group rounded-2xl overflow-hidden border border-[#B2F7EF] hover:border-black transition-all bg-white flex flex-col"
        >
          <div className="relative w-full shrink-0 aspect-[4/3] bg-gray-100 overflow-hidden">
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
        </Link>
      ))}
    </div>
  )
}
