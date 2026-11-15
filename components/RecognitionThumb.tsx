'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

type Props = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
  openLabel: string
  closeLabel: string
}

export default function RecognitionThumb({ src, alt, caption, width, height, openLabel, closeLabel }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <figure className="not-prose my-4 ml-0 sm:ml-6 max-w-[340px]">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        className="block w-full rounded-lg overflow-hidden border border-black/10 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B2F7EF] cursor-zoom-in"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="340px"
          className="w-full h-auto"
        />
      </button>
      <figcaption className="mt-2 text-sm text-black/60 leading-snug">{caption}</figcaption>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={closeLabel}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            autoFocus
          >
            <X className="w-7 h-7" />
          </button>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 1024px) 95vw, 1000px"
            className="max-h-[90vh] w-auto h-auto max-w-full rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </figure>
  )
}
