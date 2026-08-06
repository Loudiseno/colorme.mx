'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import ExpoDetail, { type ExpoDetailData } from './ExpoDetail'

export interface ExhibitionItem {
  title: string
  place: string
  date: string
  note?: string
  /** Cartel o registro de la exposición, en miniatura junto a la fila */
  poster?: string
  posterAlt?: string
  /** Si existe, la fila es clicable y abre el detalle */
  detail?: {
    image?: string
    imageAlt?: string
    statement: string[]
  }
}

interface ExhibitionListProps {
  items: ExhibitionItem[]
  closeLabel?: string
}

// Lista editorial de exposiciones. Las que tienen detalle se pueden abrir.
export default function ExhibitionList({ items, closeLabel }: ExhibitionListProps) {
  const [active, setActive] = useState<ExpoDetailData | null>(null)

  return (
    <>
      <div className="border-b border-black/10">
        {items.map((item, i) => {
          const content = (
            <>
              {item.poster && (
                <Image
                  src={item.poster}
                  alt={item.posterAlt ?? item.title}
                  width={480}
                  height={640}
                  sizes="72px"
                  className="shrink-0 w-[72px] h-auto self-center"
                />
              )}
              <div className="min-w-0 text-left">
                <p className="text-lg md:text-xl text-black leading-snug transition-colors duration-300 group-hover:text-[#0D9488]">
                  {item.title}
                  {item.detail && (
                    <Plus
                      size={16}
                      className="inline-block ml-2 -mt-0.5 text-[#0D9488] opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </p>
                <p className="text-black/50 text-sm mt-1">{item.place}</p>
                {item.note && <p className="text-black/40 text-sm italic mt-1">{item.note}</p>}
              </div>
              <span className="shrink-0 text-sm text-black/40 tabular-nums whitespace-nowrap tracking-wide">
                {item.date}
              </span>
            </>
          )

          const rowClass =
            'group w-full flex items-center justify-between gap-5 py-5 border-t border-black/10 transition-colors duration-300 hover:border-[#0D9488]'

          if (!item.detail) {
            return (
              <div key={i} className={rowClass}>
                {content}
              </div>
            )
          }

          return (
            <button
              key={i}
              type="button"
              className={`${rowClass} cursor-pointer text-left`}
              onClick={() =>
                setActive({
                  title: item.title,
                  place: item.place,
                  date: item.date,
                  image: item.detail!.image,
                  imageAlt: item.detail!.imageAlt,
                  statement: item.detail!.statement,
                })
              }
            >
              {content}
            </button>
          )
        })}
      </div>

      <ExpoDetail expo={active} onClose={() => setActive(null)} closeLabel={closeLabel} />
    </>
  )
}
