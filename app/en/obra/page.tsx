import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Brush, Layers, ImageIcon, Award } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import ObraCarousel from '@/components/ObraCarousel'
import ExhibitionList from '@/components/ExhibitionList'

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
// Galleries use placeholders until real photos are added: drop files in
// /public and replace <Placeholder /> with <Image src="/your-photo.webp" ... />
// ============================================================================

// Intervened photography (numeric order 1-11)
const intervenedPhotography = [
  { src: '/foto-intervenida-1.jpg', alt: 'Intervened photography 1 — artwork by Lou' },
  { src: '/foto-intervenida-2.jpg', alt: 'Intervened photography 2 — artwork by Lou' },
  { src: '/foto-intervenida-3.jpg', alt: 'Intervened photography 3 — artwork by Lou' },
  { src: '/foto-intervenida-4.jpg', alt: 'Intervened photography 4 — artwork by Lou' },
  { src: '/foto-intervenida-5.jpg', alt: 'Intervened photography 5 — artwork by Lou' },
  { src: '/foto-intervenida-6.jpg', alt: 'Intervened photography 6 — artwork by Lou' },
  { src: '/foto-intervenida-7.jpg', alt: 'Intervened photography 7 — artwork by Lou' },
  { src: '/foto-intervenida-8.jpg', alt: 'Intervened photography 8 — artwork by Lou' },
  { src: '/foto-intervenida-9.jpg', alt: 'Intervened photography 9 — artwork by Lou' },
  { src: '/foto-intervenida-10.jpg', alt: 'Intervened photography 10 — artwork by Lou' },
  { src: '/foto-intervenida-11.jpg', alt: 'Intervened photography 11 — artwork by Lou' },
]

// Product photography (numeric order 1-5)
const productPhotography = [
  { src: '/foto-producto-1.jpeg', alt: 'Product photography 1 — artwork by Lou' },
  { src: '/foto-producto-2.jpeg', alt: 'Product photography 2 — artwork by Lou' },
  { src: '/foto-producto-3.jpeg', alt: 'Product photography 3 — artwork by Lou' },
  { src: '/foto-producto-4.jpeg', alt: 'Product photography 4 — artwork by Lou' },
  { src: '/foto-producto-5.jpeg', alt: 'Product photography 5 — artwork by Lou' },
]

const clients = [
  'Studio Ceri',
  'Scatena Inox',
  'Casa Dragones en Pujol',
  'Quintonil',
  'Garum',
  'Hotel St. Regis',
]

const soloExhibitions = [
  {
    title: 'Luces de existencia',
    place: 'Galería Aguafuerte, Mexico City',
    date: '2016',
    detail: {
      image: '/expo-luces-de-existencia.jpg',
      imageAlt: 'Lights of Existence — solo exhibition at Galería Aguafuerte, Mexico City',
      statement: [
        'This series grew out of the stir that colour in landscapes provokes in me. When you take them in, you carry away the image and the mood of the place.',
        'Tones are the soul of places: they tell you stories, they are the evidence of what happens, they are reflections that create a whole.',
        'The aim of this project is to reduce the places I have visited and photographed to their essence, through the abstraction of the colours perceived in that moment, to set their existence down on a canvas.',
      ],
    },
  },
  { title: 'Reinterpretando', place: 'Restaurante Pizza Local, Mexico City', date: '2017' },
  { title: 'Memorias', place: 'Cafetería Healthy Nutrition, Mexico City', date: '2018' },
]

const groupExhibitions = [
  { title: 'Secretos escondidos', place: 'Galería Saúl Serrano, Mexico City', date: '2015' },
  { title: 'Amén sin tilde', place: 'Galería Fotográfica, Mexico City', date: '2016' },
  { title: 'Expo Subasta', place: 'Galería Aguafuerte, Mexico City', date: '2016' },
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

// Placeholder for a photo not yet uploaded
function Placeholder({ ratio = 'aspect-[4/5]' }: { ratio?: string }) {
  return (
    <div
      className={`${ratio} w-full rounded-2xl bg-gradient-to-br from-[#B2F7EF]/30 to-[#F0F7F6] border border-[#B2F7EF]/60 flex flex-col items-center justify-center text-black/30`}
    >
      <ImageIcon size={28} strokeWidth={1.5} />
      <span className="text-[11px] mt-2 uppercase tracking-wider">Photo coming soon</span>
    </div>
  )
}

function Gallery({ count, ratio }: { count: number; ratio?: string }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Placeholder key={i} ratio={ratio} />
      ))}
    </div>
  )
}

export default function ObraEnPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-black/50 uppercase tracking-wider mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Artwork</h1>
          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto">
            Photography, intervened photography, painting, and mixed media: a way of looking,
            feeling, and reframing the human experience through colour.
          </p>
          <Link
            href="/obra"
            className="inline-block mt-4 text-xs text-black/40 hover:text-[#0D9488] transition-colors underline underline-offset-2"
          >
            Leer en español
          </Link>
        </div>
      </section>

      {/* Artist statement */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-md mx-auto w-full">
            <Placeholder ratio="aspect-[4/5]" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-black mb-6">Artist Statement</h2>
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
        </div>
      </section>

      {/* Photography */}
      <section className="py-12 md:py-16 bg-white">
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
          <div className="flex flex-wrap gap-2 mb-10">
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
          <div className="space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-4">People</h3>
              <Gallery count={3} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-4">Landscape</h3>
              <Gallery count={3} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-4">Architecture</h3>
              <Gallery count={3} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-4">Product</h3>
              <ObraCarousel images={productPhotography} prevLabel="Previous" nextLabel="Next" closeLabel="Close" />
            </div>
          </div>
        </div>
      </section>

      {/* Intervened photography */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <ImageIcon size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Intervened Photography</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-8">
            A photograph can be reproduced endlessly, but once I intervene it, it stops being a
            repeatable image and becomes a one-of-a-kind piece. I like to play with colour and
            adapt the moment to my own experience and way of perceiving it.
          </p>
          <ObraCarousel images={intervenedPhotography} prevLabel="Previous" nextLabel="Next" />
        </div>
      </section>

      {/* Painting */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Brush size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Painting</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-8">
            Painting is the space where I can step away from reality and let colour, shape, and
            texture speak for themselves. I work mainly with watercolour, oil, and acrylic,
            developing abstract compositions born from emotion rather than representation. I am
            drawn to the freedom of the creative process — experimenting with layers, materials,
            and contrasts — letting each piece find its own path while colour becomes the main
            protagonist.
          </p>
          <Gallery count={4} />
        </div>
      </section>

      {/* Mixed media */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Layers size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Mixed Media</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-8">
            I enjoy incorporating everyday materials — maps, magazines, brochures, ads, napkins,
            and objects found during my travels. I am especially drawn to working with local
            newspapers, since they carry the memory of a place and a specific moment. Once woven
            into the work, these fragments take on new meaning and become part of a different
            story.
          </p>
          <Gallery count={3} />
        </div>
      </section>

      {/* Exhibitions — featured section */}
      <section className="py-16 md:py-24 bg-canvas">
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

          <div className="grid md:grid-cols-12 gap-x-14 gap-y-16">
            {/* Solo */}
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <h3 className="text-2xl md:text-3xl text-black mb-2">Solo</h3>
                <p className="text-black/40 text-sm mb-6">Individual shows</p>
                <div className="mb-8 max-w-xs">
                  <Placeholder ratio="aspect-[4/5]" />
                </div>
                <ExhibitionList items={soloExhibitions} closeLabel="Close" />
              </div>
            </div>

            {/* Group */}
            <div className="md:col-span-7">
              <h3 className="text-2xl md:text-3xl text-black mb-2">Group</h3>
              <p className="text-black/40 text-sm mb-6">Collective shows</p>
              <ExhibitionList items={groupExhibitions} closeLabel="Close" />
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
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

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-black mb-3">Collaborations or acquiring a piece?</h2>
          <p className="text-black/70 mb-6">
            For exhibitions, commissions, press, or acquiring a piece, get in touch.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D9488] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all"
            >
              Message me on WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium border border-black/10 hover:bg-[#B2F7EF]/20 transition-all"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
