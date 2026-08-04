'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

export interface ExpoDetailData {
  title: string
  place: string
  date: string
  /** Opcional: si no hay foto, el statement ocupa todo el ancho */
  image?: string
  imageAlt?: string
  /** Párrafos del statement de la exposición */
  statement: string[]
}

interface ExpoDetailProps {
  expo: ExpoDetailData | null
  onClose: () => void
  closeLabel?: string
}

// Ventana de detalle de una exposición: foto grande + statement.
export default function ExpoDetail({ expo, onClose, closeLabel = 'Cerrar' }: ExpoDetailProps) {
  useEffect(() => {
    if (!expo) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [expo, onClose])

  if (!expo) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-start md:items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-5xl w-full my-8 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-black/70 hover:text-black hover:bg-white transition-colors shadow-sm"
        >
          <X size={22} />
        </button>

        <div className={expo.image ? 'grid md:grid-cols-2' : ''}>
          {/* Imagen */}
          {expo.image && (
            <div className="relative bg-gray-100 min-h-[280px] md:min-h-[520px]">
              <Image
                src={expo.image}
                alt={expo.imageAlt ?? expo.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Texto */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs text-[#0D9488] uppercase tracking-[0.2em] mb-3">{expo.date}</p>
            <h3 className="font-display text-3xl md:text-4xl text-black mb-2 leading-tight">
              {expo.title}
            </h3>
            <p className="text-black/50 text-sm mb-6">{expo.place}</p>
            <div className="space-y-4 text-black/75 leading-relaxed">
              {expo.statement.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
