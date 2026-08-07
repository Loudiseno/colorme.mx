import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Brush, Layers, ImageIcon, Award } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import Image from 'next/image'
import ObraPreview from '@/components/ObraPreview'
import { lugares, gente, intervenida, producto, pinturas, mixtas, localize, localizePieces } from '@/lib/obra'
import ExhibitionList from '@/components/ExhibitionList'
import ExpoCards from '@/components/ExpoCards'
import ObraCTA from '@/components/ObraCTA'
import ImageCopyright from '@/components/ImageCopyright'
import { exposicionesEn } from '@/lib/exposiciones'

export const metadata: Metadata = {
  title: 'Artwork | Photography, Painting & Mixed Media',
  description:
    "Lou's artistic work: photography, intervened photography, painting, and mixed media. Artist statement, galleries, exhibitions, and awards.",
  alternates: { canonical: '/en/obra' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Artwork | ColorMe',
    description:
      "Photography, intervened photography, painting, and mixed media — Lou's artistic work.",
    url: '/en/obra',
  },
  robots: { index: true, follow: true },
}

// ============================================================================
// ARTWORK SECTION DATA (English)
// Mirrors app/obra/page.tsx — edit both when content changes.
// To add photos: drop the files in /public (no spaces or accents in the name)
// and add them to the matching array.
// ============================================================================

const clients = [
  'Studio Ceri',
  'Scatena Inox',
  'Casa Dragones en Pujol',
  'Quintonil',
  'Garum',
  'Hotel St. Regis',
]

const groupExhibitions = [
  { title: 'Secretos escondidos', place: 'Galería Saúl Serrano, Mexico City', date: '2015' },
  { title: 'Amén sin tilde', place: 'Galería Fotográfica, Mexico City', date: '2016' },
  {
    title: 'XI Subasta de Arte',
    place: 'Galería Aguafuerte, Mexico City',
    date: '2016',
    poster: '/expo-xi-subasta-de-arte.jpeg',
    posterAlt: 'Poster for the XI Subasta de Arte, Galería Aguafuerte',
  },
  { title: 'El Arca', place: 'Rio de Janeiro 9, Mexico City', date: '2016' },
  { title: 'El Arca', place: 'Plaza Tudor 275-7, Mexico City', date: '2016' },
  { title: 'El Arca', place: 'Restaurante Paris 16, Mexico City', date: '2017' },
  { title: 'Habit-Art', place: 'Corredor Cultural Roma-Condesa, Mexico City', date: '2017' },
  { title: 'Homenaje a José Luis Ruissó', place: 'Restaurante Paris 16, Mexico City', date: '2017' },
  {
    title: 'Déjame ayudARTE',
    place: 'Works for a cause, COPARMEX foundation, Mexico City',
    date: '2017',
    note: 'Rebuilding homes in Mexico after the earthquake',
  },
  { title: 'Se la echó al plato', place: 'FloraLounge, Mexico City', date: '2018' },
]

const awards = [
  {
    title: 'Captura el espíritu de la celebración',
    place: 'First place, landscape & architecture photography · Olympus and Palacio de Hierro, Mexico City',
    date: '2010',
  },
]

export default function ObraEnPage() {
  return (
    <>
      {/* Artist statement */}
      <section className="pt-28 pb-8 md:pt-32 md:pb-10 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="order-2">
            <div className="inline-block bg-[#B2F7EF] px-8 py-3 rounded-xl mb-6 relative">
              <div className="absolute inset-0 bg-[#B2F7EF] opacity-40 rounded-xl blur-sm"></div>
              <h1 className="text-4xl md:text-5xl text-black relative z-10">Artwork</h1>
            </div>
            <div className="space-y-4 text-black/75 leading-relaxed">
              <p>
                My artistic path is a way of looking, feeling, reframing the human experience, and
                sharing my own way of seeing the world.
              </p>
              <p>
                Painting and photography are my mediums for expressing my vision of the world
                through colour, emotion, and experience. My inspiration comes from nature, places,
                people, cultures, and the beauty of the everyday — those moments that, however
                simple they may seem, never repeat themselves.
              </p>
              <p>
                My practice unfolds mainly through three techniques: photography, intervened
                photography, and painting. I work with watercolour, oil, and acrylic, along with
                everyday materials and objects that, once integrated into each piece, transform it
                into a unique work carrying its own story.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-3 max-w-sm w-full md:ml-auto">
            <Image
              src="/sobre-la-artista.jpeg"
              alt="Lourdes Pérez, author of the work"
              width={1000}
              height={1250}
              sizes="(max-width: 768px) 90vw, 384px"
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Photography */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Camera size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Photography</h2>
          </div>
          <div className="max-w-3xl space-y-4 text-black/75 leading-relaxed mb-6">
            <p>
              Photography is my way of stopping time. I am inspired by the everyday, travel,
              people, architecture, landscapes, and those real, unstaged moments. I seek to hold
              onto instants that exist only once and, when seen again, awaken new emotions and
              memories.
            </p>
            <p>
              I have shot social, architectural, culinary, and product photography for a range of
              clients, including:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {clients.map((c) => (
              <span
                key={c}
                className="text-sm text-black/70 border border-black/15 rounded-full px-4 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Subsections: people, landscape, architecture */}
          <div className="space-y-10 md:space-y-12">
            <div>
              <h3 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-6">Places</h3>
              <ObraPreview images={localize(lugares, true)} href="/en/obra/galeria/lugares" moreLabel="See more" />
            </div>
            <div>
              <h3 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-6">People</h3>
              <ObraPreview images={localize(gente, true)} href="/en/obra/galeria/gente" moreLabel="See more" />
            </div>
            <div>
              <h3 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-6">Product</h3>
              <ObraPreview images={localizePieces(producto, true)} href="/en/obra/galeria/producto" moreLabel="See more" />
            </div>
          </div>
        </div>
      </section>

      {/* Intervened photography */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <ImageIcon size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Intervened Photography</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-6">
            A photograph can be reproduced endlessly, but once I intervene it, it stops being a
            repeatable image and becomes a one-of-a-kind piece. I like to play with colour and
            adapt the moment to my own experience and way of perceiving it.
          </p>
          <ObraPreview images={localizePieces(intervenida, true)} href="/en/obra/galeria/intervenida" moreLabel="See more" />
        </div>
      </section>

      {/* Painting */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Brush size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Painting</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-6">
            Painting is the space where I explore a different way of understanding and
            expressing the human experience. I work mainly with watercolour, oil and acrylic,
            developing compositions in which colour, shape and texture become a language of their
            own. I am drawn to the freedom of the creative process — experimenting with layers,
            materials and contrasts — letting each piece find its own path. Through colour and form
            I seek to express my way of experiencing, feeling and interpreting the world.
          </p>
          <ObraPreview images={localizePieces(pinturas, true)} href="/en/obra/galeria/pintura" moreLabel="See more" />
        </div>
      </section>

      {/* Mixed media */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Layers size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Mixed Media</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-6">
            I enjoy incorporating everyday materials — maps, magazines, brochures, ads, napkins,
            and objects found during my travels. I am especially drawn to working with local
            newspapers, since they carry the memory of a place and a specific moment. Once woven
            into the work, these fragments take on new meaning and become part of a different
            story.
          </p>
          <ObraPreview images={localizePieces(mixtas, true)} href="/en/obra/galeria/tecnicas-mixtas" moreLabel="See more" />
        </div>
      </section>

      {/* Exhibitions — featured section */}
      <section className="py-8 md:py-10 bg-canvas">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="text-xs text-[#0D9488] uppercase tracking-[0.2em] mb-4">Trajectory</p>
            <h2 className="text-4xl md:text-6xl text-black mb-6 leading-[1.05]">Exhibitions</h2>
            <p className="text-black/60 leading-relaxed">
              I have taken part in solo and group exhibitions that shape my ongoing search for
              connection and reflection, mainly through photography, painting, and their
              interventions.
            </p>
          </div>

          {/* Solo — cards with cover */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-black mb-2">Solo</h3>
            <p className="text-black/40 text-sm mb-8">Solo exhibitions</p>
            <ExpoCards items={exposicionesEn} basePath="/en/obra" labels={{ view: 'View exhibition', soon: 'Photo coming soon' }} />
          </div>

          {/* Group */}
          <div>
            <h3 className="text-2xl md:text-3xl text-black mb-2">Group</h3>
            <p className="text-black/40 text-sm mb-6">Collective shows</p>
            <ExhibitionList items={groupExhibitions} closeLabel="Close" />
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Award size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Awards</h2>
          </div>
          <div className="max-w-3xl">
            <ExhibitionList items={awards} closeLabel="Close" />
          </div>
        </div>
      </section>

      <ObraCTA en />
      <ImageCopyright en />
    </>
  )
}
