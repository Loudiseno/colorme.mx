import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Brush, Layers, ImageIcon, Award } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Obra | Fotografía, pintura y técnicas mixtas',
  description:
    'La obra artística de Lou: fotografía, fotografía intervenida, pintura y técnicas mixtas. Statement, galerías, exposiciones y reconocimientos.',
  alternates: { canonical: '/obra' },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    title: 'Obra | ColorMe',
    description:
      'Fotografía, fotografía intervenida, pintura y técnicas mixtas — la obra artística de Lou.',
    url: '/obra',
  },
  robots: { index: true, follow: true },
}

// ============================================================================
// DATOS DE LA SECCIÓN OBRA
// (Editar aquí. Las galerías usan marcadores de posición hasta que se agreguen
//  las fotos reales: coloca los archivos en /public y reemplaza <Placeholder />
//  por <Image src="/tu-foto.webp" ... /> en cada galería.)
// ============================================================================

const clientes = [
  'Studio Ceri',
  'Scatena Inox',
  'Casa Dragones en Pujol',
  'Quintonil',
  'Garum',
  'Hotel St. Regis',
]

const exposicionesIndividuales = [
  { title: 'Luces de existencia', place: 'Galería Aguafuerte, CDMX', date: '2016' },
  { title: 'Reinterpretando', place: 'Restaurante Pizza Local, CDMX', date: '2017' },
  { title: 'Memorias', place: 'Cafetería Healthy Nutrition, CDMX', date: '2018' },
]

const exposicionesColectivas = [
  { title: 'Secretos escondidos', place: 'Galería Saúl Serrano, CDMX', date: '2015' },
  { title: 'Amén sin tilde', place: 'Galería Fotográfica, CDMX', date: '2016' },
  { title: 'Expo Subasta', place: 'Galería Aguafuerte, CDMX', date: '2016' },
  { title: 'El Arca', place: 'Rio de Janeiro 9, CDMX', date: '2016' },
  { title: 'El Arca', place: 'Plaza Tudor 275-7, CDMX', date: '2016' },
  { title: 'El Arca', place: 'Restaurante Paris 16, CDMX', date: '2017' },
  { title: 'Habit-Art', place: 'Corredor Cultural Roma-Condesa, CDMX', date: '2017' },
  { title: 'Homenaje a José Luis Ruissó', place: 'Restaurante Paris 16, CDMX', date: '2017' },
  {
    title: 'Déjame ayudARTE',
    place: 'Obras con causa para fundación COPARMEX, CDMX',
    date: '2017',
    note: 'Reconstrucción de viviendas en México por el sismo',
  },
  { title: 'Se la echó al plato', place: 'FloraLounge, CDMX', date: '2018' },
]

const reconocimientos = [
  {
    title: 'Captura el espíritu de la celebración',
    place: 'Primer lugar en fotografía de paisaje y arquitectura · Olympus y Palacio de Hierro, CDMX',
    date: '2010',
  },
]

// Marcador de posición para una foto aún no cargada
function Placeholder({ ratio = 'aspect-[4/5]' }: { ratio?: string }) {
  return (
    <div
      className={`${ratio} w-full rounded-2xl bg-gradient-to-br from-[#B2F7EF]/30 to-[#F0F7F6] border border-[#B2F7EF]/60 flex flex-col items-center justify-center text-black/30`}
    >
      <ImageIcon size={28} strokeWidth={1.5} />
      <span className="text-[11px] mt-2 uppercase tracking-wider">Foto próximamente</span>
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

// Fila editorial minimalista para exposiciones y reconocimientos
function ExpoRow({ item }: { item: { title: string; place: string; date: string; note?: string } }) {
  return (
    <div className="group flex items-baseline justify-between gap-6 py-5 border-t border-black/10 transition-colors duration-300 hover:border-[#0D9488]">
      <div className="min-w-0">
        <p className="text-lg md:text-xl text-black leading-snug transition-colors duration-300 group-hover:text-[#0D9488]">
          {item.title}
        </p>
        <p className="text-black/50 text-sm mt-1">{item.place}</p>
        {item.note && <p className="text-black/40 text-sm italic mt-1">{item.note}</p>}
      </div>
      <span className="shrink-0 text-sm text-black/40 tabular-nums whitespace-nowrap tracking-wide">
        {item.date}
      </span>
    </div>
  )
}

function ExhibitionList({
  items,
}: {
  items: { title: string; place: string; date: string; note?: string }[]
}) {
  return (
    <div className="border-b border-black/10">
      {items.map((e, i) => (
        <ExpoRow key={i} item={e} />
      ))}
    </div>
  )
}

export default function ObraPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-8 md:pt-36 md:pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-black/50 uppercase tracking-wider mb-3">Portafolio</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-black mb-4">Obra</h1>
          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto">
            Fotografía, fotografía intervenida, pintura y técnicas mixtas: una manera de mirar,
            sentir y resignificar la experiencia humana a través del color.
          </p>
          <Link
            href="/en/obra"
            className="inline-block mt-4 text-xs text-black/40 hover:text-[#0D9488] transition-colors underline underline-offset-2"
          >
            Read in English
          </Link>
        </div>
      </section>

      {/* Statement de artista */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-md mx-auto w-full">
            <Placeholder ratio="aspect-[4/5]" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl text-black mb-6">Statement de artista</h2>
            <div className="space-y-4 text-black/75 leading-relaxed">
              <p>
                Mi trayectoria artística es una forma de mirar, sentir, resignificar la experiencia
                humana y compartir mi manera de ver el mundo.
              </p>
              <p>
                La pintura y la fotografía son mis medios para expresar mi visión del mundo a través
                del color, las emociones y las experiencias. Mi inspiración nace de la naturaleza,
                los lugares, las personas, las culturas y la belleza de lo cotidiano, de esos
                instantes que, aunque parezcan simples, nunca vuelven a repetirse.
              </p>
              <p>
                Mi práctica artística se desarrolla principalmente a través de tres técnicas:
                fotografía, fotografía intervenida y pintura. Trabajo con acuarela, óleo y acrílico,
                así como con distintos materiales y elementos cotidianos que, al integrarse en cada
                pieza, la transforman en una obra única que conserva una historia propia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fotografía */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Camera size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Fotografía</h2>
          </div>
          <div className="max-w-3xl space-y-4 text-black/75 leading-relaxed mb-6">
            <p>
              La fotografía es mi manera de detener el tiempo. Me inspira lo cotidiano, los viajes,
              la gente, la arquitectura, los paisajes y esos momentos reales que suceden sin
              preparación. Busco conservar instantes que existen una sola vez y que, al ser
              observados nuevamente, despiertan nuevas emociones y recuerdos.
            </p>
            <p>
              He realizado fotografía social, arquitectónica, gastronómica y de producto para
              distintos sectores, con clientes como:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {clientes.map((c) => (
              <span
                key={c}
                className="text-sm text-black/70 border border-black/15 rounded-full px-4 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Subsecciones: gente, paisaje, arquitectura */}
          <div className="space-y-10">
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-4">Gente</h3>
              <Gallery count={3} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-4">Paisaje</h3>
              <Gallery count={3} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl text-black mb-4">Arquitectura</h3>
              <Gallery count={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Fotografía intervenida */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <ImageIcon size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Fotografía intervenida</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-8">
            Una fotografía puede reproducirse infinitas veces, pero cuando la intervengo deja de ser
            una imagen repetible para convertirse en una pieza única. Me gusta jugar con los colores
            y adaptar el momento a mi experiencia y a mi manera de percibirlo.
          </p>
          <Gallery count={3} />
        </div>
      </section>

      {/* Pintura */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Brush size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Pintura</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-8">
            La pintura es el espacio donde puedo alejarme de la realidad y dejar que el color, las
            formas y las texturas hablen por sí mismas. Trabajo principalmente con acuarela, óleo y
            acrílico, desarrollando composiciones abstractas que nacen de la emoción más que de la
            representación. Me interesa la libertad del proceso creativo, experimentar con las capas,
            los materiales y los contrastes, permitiendo que cada obra encuentre su propio camino
            mientras el color se convierte en el principal protagonista.
          </p>
          <Gallery count={4} />
        </div>
      </section>

      {/* Técnicas mixtas */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Layers size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Técnicas mixtas</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-8">
            Disfruto incorporar materiales cotidianos como mapas, revistas, folletos, publicidad,
            servilletas y objetos encontrados durante mis viajes. Me interesa especialmente trabajar
            con periódicos locales porque narran la memoria de un lugar y un momento específico. Al
            integrarlos en la obra, esos fragmentos adquieren un nuevo significado y se convierten en
            parte de una historia distinta.
          </p>
          <Gallery count={3} />
        </div>
      </section>

      {/* Exposiciones — sección destacada */}
      <section className="py-16 md:py-24 bg-canvas">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="text-xs text-[#0D9488] uppercase tracking-[0.2em] mb-4">Trayectoria</p>
            <h2 className="text-4xl md:text-6xl text-black mb-6 leading-[1.05]">Exposiciones</h2>
            <p className="text-black/60 leading-relaxed">
              He participado en exposiciones individuales y colectivas que dan forma a mi búsqueda de
              conexión y reflexión, principalmente a través de la fotografía, la pintura y sus
              intervenciones.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-x-14 gap-y-16">
            {/* Individuales */}
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <h3 className="text-2xl md:text-3xl text-black mb-2">Individuales</h3>
                <p className="text-black/40 text-sm mb-6">Muestras en solitario</p>
                <div className="mb-8 max-w-xs">
                  <Placeholder ratio="aspect-[4/5]" />
                </div>
                <ExhibitionList items={exposicionesIndividuales} />
              </div>
            </div>

            {/* Colectivas */}
            <div className="md:col-span-7">
              <h3 className="text-2xl md:text-3xl text-black mb-2">Colectivas</h3>
              <p className="text-black/40 text-sm mb-6">Muestras en conjunto</p>
              <ExhibitionList items={exposicionesColectivas} />
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-12 md:py-16 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Award size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Reconocimientos</h2>
          </div>
          <div className="max-w-3xl">
            <ExhibitionList items={reconocimientos} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl text-black mb-3">¿Colaboraciones o adquirir obra?</h2>
          <p className="text-black/70 mb-6">
            Para exposiciones, comisiones, prensa o adquirir una pieza, escríbeme.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D9488] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#0D9488]/90 transition-all"
            >
              Escríbeme por WhatsApp
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
