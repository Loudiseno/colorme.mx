import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import WorkGallery from '@/components/WorkGallery'
import ObraCTA from '@/components/ObraCTA'
import ImageCopyright from '@/components/ImageCopyright'
import type { Expo } from '@/lib/exposiciones'

interface ExpoPageProps {
  expo: Expo
  backHref: string
  labels: {
    back: string
    works: string
    views: string
    close: string
    prev: string
    next: string
    reference: string
  }
}

// Exposición: portada moderada junto al texto, y las obras en cuadrícula.
export default function ExpoPage({ expo, backHref, labels }: ExpoPageProps) {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} />
          {labels.back}
        </Link>

        {/* Encabezado */}
        <header className="mt-10 md:mt-14">
          <p className="text-xs text-black/40 uppercase tracking-[0.25em] mb-4">{expo.date}</p>
          <h1 className="text-4xl md:text-5xl text-black leading-tight mb-3">{expo.title}</h1>
          <p className="text-black/50">{expo.place}</p>
        </header>

        {/* Portada + statement, lado a lado */}
        <div className="mt-8 md:mt-10 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {expo.cover && (
            <div className="md:col-span-5">
              <Image
                src={expo.cover}
                alt={expo.coverAlt ?? expo.title}
                width={900}
                height={700}
                sizes="(max-width: 768px) 100vw, 420px"
                priority
                className="w-full h-auto"
              />
            </div>
          )}
          <div className={expo.cover ? 'md:col-span-7' : 'md:col-span-12 max-w-2xl'}>
            <div className="space-y-4 text-black/75 leading-relaxed">
              {expo.statement.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Obras en cuadrícula */}
        {expo.works && expo.works.length > 0 && (
          <section className="mt-14 md:mt-20">
            <h2 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-8">
              {labels.works}
            </h2>
            <WorkGallery
              works={expo.works}
              labels={{
                close: labels.close,
                prev: labels.prev,
                next: labels.next,
                reference: labels.reference,
              }}
            />
          </section>
        )}

        {expo.views && expo.views.length > 0 && (
          <section className="mt-14 md:mt-20">
            <h2 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-8">
              {labels.views}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {expo.views.map((v) => (
                <Image
                  key={v.src}
                  src={v.src}
                  alt={v.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 640px) 90vw, 460px"
                  className="w-full h-auto"
                />
              ))}
            </div>
          </section>
        )}

        <div className="mt-14 md:mt-16 pt-6 border-t border-black/10">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm text-black/50 hover:text-black transition-colors"
          >
            <ArrowLeft size={16} />
            {labels.back}
          </Link>
        </div>
      </div>

      <ObraCTA en={backHref.startsWith('/en')} />
      <ImageCopyright en={backHref.startsWith('/en')} />
    </article>
  )
}
