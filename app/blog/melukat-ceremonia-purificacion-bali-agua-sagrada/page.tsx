'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function MelukatBaliPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">RITUALES Y COLORES DEL MUNDO</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Melukat, la ceremonia balinesa donde el agua limpia el dolor del alma
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/melukat-bali.jpeg"
            alt="Ceremonia Melukat en Bali - Purificacion con agua sagrada"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Bali hay verdades que no entran por los ojos. Se deslizan suavemente hacia adentro, como una corriente invisible que encuentra el lugar exacto donde algo pesa. Asi es el Melukat. Una ceremonia que no se entiende con la mente, se recibe con el cuerpo.
          </p>

          <p>
            Su nombre guarda un secreto tierno. Viene de la palabra balinesa lukat, que significa purificar, y se entrelaza con luka, que en ese idioma quiere decir dolor. En esa union vive todo su sentido. Sanar lo que duele. Devolverle al alma su textura original.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El origen sagrado del ritual</h2>

          <p>
            Hace mas de mil anos, los antiguos balineses descubrieron que ciertos manantiales guardaban una fuerza distinta. Los llamaron tirtas, que significa bendicion liquida. Alrededor de esos nacimientos construyeron templos para proteger su esencia.
          </p>

          <p>
            El mas famoso de todos es Tirta Empul, fundado en el ano 962 d.C., muy cerca de Ubud. Segun la mitologia hindu balinesa, el dios Indra hizo brotar ese manantial de la tierra como un elixir de claridad para devolver la vida a quienes la habian perdido.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El corazon de la ceremonia</h2>

          <p>
            Todo comienza con una ofrenda. El canang sari, esa pequena cesta tejida con hojas de coco joven, se llena de flores, arroz e incienso y se coloca en el altar del templo. Es una forma de pedir permiso, de anunciarse ante lo sagrado.
          </p>

          <p>
            Despues llega la oracion. Un sacerdote balines guia el momento con mantras antiguos. Ahi, en ese espacio suspendido, cada persona nombra en su corazon lo que desea soltar. Una tristeza guardada. Un duelo que no termina de cerrar. Un miedo que se volvio pesado.
          </p>

          <p>
            Y entonces sucede lo mas hermoso. La persona entra en las piscinas sagradas y pasa por cada fuente en un orden preciso. Inclina la cabeza bajo cada chorro y recibe la bendicion liquida sobre el rostro, el cabello y los hombros. Cada manantial representa una capa del alma que se renueva.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores del ritual</h2>

          <p>
            En el Melukat, los colores hablan su propio idioma. El blanco viste a quienes llegan al templo con devocion. El rojo, el blanco y el negro del hilo sagrado forman juntos una trinidad que recuerda el ciclo eterno de todo lo que existe: crear, sostener, transformar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Melukat ensena sobre el duelo</h2>

          <p>
            Aprendi que soltar no es perder. Es hacer espacio. Es permitir que lo nuevo entre.
          </p>

          <p>
            Como tanatologa, encuentro en el Melukat una verdad que acompano todos los dias. El dolor necesita un lugar donde descansar. Necesita un gesto, un ritual, un simbolo que le diga al cuerpo: ya puedes dejar ir.
          </p>

          <p>
            El duelo tambien puede purificarse. No se olvida a quien se ama, pero el peso del dolor puede transformarse en ternura, en memoria luminosa, en gratitud por haber compartido el camino.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en la piel mojada por lo sagrado y en ese silencio que aparece cuando el alma por fin descansa.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estas atravesando un duelo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompanamiento desde una mirada calida, cercana y respetuosa de tu propio ritmo, estoy aqui para ti.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
