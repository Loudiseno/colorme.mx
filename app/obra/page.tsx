import type { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Brush, Layers, ImageIcon, Award } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import Image from 'next/image'
import ObraPreview from '@/components/ObraPreview'
import PageHero from '@/components/PageHero'
import { lugares, gente, intervenida, producto, pinturas, mixtas, localize, localizePieces } from '@/lib/obra'
import ExhibitionList from '@/components/ExhibitionList'
import ExpoCards from '@/components/ExpoCards'
import ObraCTA from '@/components/ObraCTA'
import ImageCopyright from '@/components/ImageCopyright'
import { exposicionesEs } from '@/lib/exposiciones'

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
// Para añadir fotos: coloca los archivos en /public (nombres sin espacios ni
// acentos) y agrégalos al arreglo correspondiente. Mantener en paralelo con
// app/en/obra/page.tsx.
// ============================================================================

const clientes = [
  'Studio Ceri',
  'Scatena Inox',
  'Casa Dragones en Pujol',
  'Quintonil',
  'Garum',
  'Hotel St. Regis',
]

const exposicionesColectivas = [
  { title: 'Secretos escondidos', place: 'Galería Saúl Serrano, CDMX', date: '2015' },
  { title: 'Amén sin tilde', place: 'Galería Fotográfica, CDMX', date: '2016' },
  {
    title: 'XI Subasta de Arte',
    place: 'Galería Aguafuerte, CDMX',
    date: '2016',
    poster: '/expo-xi-subasta-de-arte.jpeg',
    posterAlt: 'Cartel de la XI Subasta de Arte, Galería Aguafuerte',
  },
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

export default function ObraPage() {
  return (
    <>
      <PageHero title="Obra" />

      {/* Statement de artista */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-sm mx-auto w-full">
            <Image
              src="/sobre-la-artista.jpeg"
              alt="Lourdes Pérez, autora de la obra"
              width={1000}
              height={1250}
              sizes="(max-width: 768px) 90vw, 384px"
              priority
              className="w-full h-auto"
            />
          </div>
          <div>
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
      <section className="py-8 md:py-10 bg-white">
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
          <div className="flex flex-wrap gap-2 mb-8">
            {clientes.map((c) => (
              <span
                key={c}
                className="text-sm text-black/70 border border-black/15 rounded-full px-4 py-1.5"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Subsecciones: gente, lugares, producto */}
          <div className="space-y-10 md:space-y-12">
            <div>
              <h3 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-6">Lugares</h3>
              <ObraPreview images={localize(lugares)} href="/obra/galeria/lugares" moreLabel="Ver más" />
            </div>
            <div>
              <h3 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-6">Gente</h3>
              <ObraPreview images={localize(gente)} href="/obra/galeria/gente" moreLabel="Ver más" />
            </div>
            <div>
              <h3 className="text-xs text-black/40 uppercase tracking-[0.25em] mb-6">Producto</h3>
              <ObraPreview images={localizePieces(producto)} href="/obra/galeria/producto" moreLabel="Ver más" />
            </div>
          </div>
        </div>
      </section>

      {/* Fotografía intervenida */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <ImageIcon size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Fotografía intervenida</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-6">
            Una fotografía puede reproducirse infinitas veces, pero cuando la intervengo deja de ser
            una imagen repetible para convertirse en una pieza única. Me gusta jugar con los colores
            y adaptar el momento a mi experiencia y a mi manera de percibirlo.
          </p>
          <ObraPreview images={localizePieces(intervenida)} href="/obra/galeria/intervenida" moreLabel="Ver más" />
        </div>
      </section>

      {/* Pintura */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Brush size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Pintura</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-6">
            La pintura es el espacio donde exploro una manera distinta de comprender y
            expresar la experiencia humana. Trabajo principalmente con acuarela, óleo y acrílico,
            desarrollando composiciones en las que el color, las formas y las texturas se convierten
            en un lenguaje propio. Me interesa la libertad del proceso creativo, experimentar con las
            capas, los materiales y los contrastes, permitiendo que cada obra encuentre su propio
            camino. A través del color y las formas busco expresar mi manera de experimentar, sentir
            e interpretar el mundo.
          </p>
          <ObraPreview images={localizePieces(pinturas)} href="/obra/galeria/pintura" moreLabel="Ver más" />
        </div>
      </section>

      {/* Técnicas mixtas */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-[#B2F7EF] flex items-center justify-center text-black">
              <Layers size={20} strokeWidth={1.5} />
            </span>
            <h2 className="text-3xl md:text-4xl text-black">Técnicas mixtas</h2>
          </div>
          <p className="max-w-3xl text-black/75 leading-relaxed mb-6">
            Disfruto incorporar materiales cotidianos como mapas, revistas, folletos, publicidad,
            servilletas y objetos encontrados durante mis viajes. Me interesa especialmente trabajar
            con periódicos locales porque narran la memoria de un lugar y un momento específico. Al
            integrarlos en la obra, esos fragmentos adquieren un nuevo significado y se convierten en
            parte de una historia distinta.
          </p>
          <ObraPreview images={localizePieces(mixtas)} href="/obra/galeria/tecnicas-mixtas" moreLabel="Ver más" />
        </div>
      </section>

      {/* Exposiciones — sección destacada */}
      <section className="py-8 md:py-10 bg-canvas">
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

          {/* Individuales — tarjetas con portada */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl text-black mb-2">Individuales</h3>
            <p className="text-black/40 text-sm mb-8">Exposiciones individuales</p>
            <ExpoCards items={exposicionesEs} basePath="/obra" />
          </div>

          {/* Colectivas */}
          <div>
            <h3 className="text-2xl md:text-3xl text-black mb-2">Colectivas</h3>
            <p className="text-black/40 text-sm mb-6">Muestras en conjunto</p>
            <ExhibitionList items={exposicionesColectivas} />
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-8 md:py-10 bg-[#B2F7EF]/10">
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

      <ObraCTA />
      <ImageCopyright />
    </>
  )
}
