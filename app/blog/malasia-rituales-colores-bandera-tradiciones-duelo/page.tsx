'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function MalasiaRitualesPage() {
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
            Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduria de despedirse en comunidad
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/malasia .jpeg"
            alt="Rituales de Malasia - Tres culturas espirituales"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Malasia es un pais donde tres mundos conviven en un mismo territorio. Malayos musulmanes, chinos budistas e indios hindues han tejido juntos una nacion donde las mezquitas, los templos y los santuarios comparten el mismo horizonte.
          </p>

          <p>
            En este cruce de culturas, cada comunidad ha conservado sus propios rituales, sus propios colores sagrados, sus propias formas de honrar la vida y la muerte. Y sin embargo, hay algo que los une: la certeza de que nadie deberia atravesar el dolor en soledad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores de la bandera malaya</h2>

          <p>
            La bandera de Malasia, conocida como Jalur Gemilang (Franjas de Gloria), cuenta la historia de un pais que aprendio a tejer la diversidad. El rojo y el blanco de sus franjas simbolizan el coraje y la pureza del pueblo. El azul del canton representa la unidad de la nacion. El amarillo de la luna creciente y la estrella honra a los sultanes, guardianes de la tradicion.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El Thaipusam: cuando el dolor se transforma en devocion</h2>

          <p>
            Cada ano, durante el Thaipusam, miles de devotos hindues suben las 272 escaleras de las Cuevas Batu en Kuala Lumpur. Algunos cargan kavadis, estructuras decoradas con plumas de pavo real y flores que se sostienen con ganchos atravesados en la piel. Otros perforan sus mejillas con varillas de metal en un acto de penitencia y entrega.
          </p>

          <p>
            A los ojos occidentales, el Thaipusam puede parecer extremo. Pero quienes lo practican hablan de un estado de trance donde el dolor fisico se disuelve, donde el cuerpo se convierte en ofrenda, donde la devocion transforma el sufrimiento en luz.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo en las tres tradiciones</h2>

          <p>
            En la comunidad malaya musulmana, el cuerpo se lava con agua perfumada, se envuelve en tela blanca y se entierra mirando hacia La Meca antes de que pase un dia. Los familiares se reunen para rezar durante siete noches consecutivas. El duelo se vive en comunidad, con vecinos que traen comida y companeros que acompanan.
          </p>

          <p>
            En la comunidad china, los rituales funerarios pueden durar entre tres y siete dias. Se quema papel moneda para que el difunto tenga recursos en el mas alla. Los colores blanco y amarillo predominan, simbolizando el luto y el respeto. La familia se viste de blanco y guarda luto formal durante cien dias.
          </p>

          <p>
            En la comunidad india, la cremacion libera al alma de su envoltura terrenal. Las cenizas se esparcen en un rio o en el mar. Durante trece dias, los familiares realizan rituales diarios para acompanar el transito del alma hacia su siguiente existencia.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Malasia ensena sobre el duelo</h2>

          <p>
            Aprendi que el duelo puede tener muchas formas, pero el corazon de todas ellas es el mismo: la necesidad de sentirse acompanado, de tener rituales que den forma al dolor, de saber que la comunidad estara ahi cuando las fuerzas flaqueen.
          </p>

          <p>
            Como tanatologa, encuentro en Malasia una leccion valiosa. No importa cual sea tu tradicion o tu creencia. Lo que importa es que tengas un espacio para despedirte, un ritual que honre lo que fue, una comunidad que sostenga lo que viene.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el incienso que sube hacia el cielo de tres templos distintos, en los colores que pintan las calles de un pais que aprendio a abrazar la diferencia, en el silencio compartido de quienes saben que el amor no termina con la muerte.
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
