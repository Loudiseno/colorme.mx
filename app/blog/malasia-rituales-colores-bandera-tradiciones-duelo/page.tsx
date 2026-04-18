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
            Malasia, el cruce de tres almas: rituales, colores sagrados y la sabiduría de despedirse en comunidad
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/malasia .jpeg"
            alt="Rituales de Malasia - Tres culturas espirituales"
            width={800}
            height={450}
            priority
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Malasia descubrí que un mismo cielo puede sostener muchas formas de creer. Que las oraciones musulmanas, los altares chinos y las procesiones hindúes pueden compartir las mismas calles sin disputarse el espacio. La diversidad no es un eslogan moderno. Es un acuerdo antiguo entre culturas que aprendieron a respetarse en silencio.
          </p>

          <p>
            Cierra los ojos en cualquier ciudad malaya y escucharás tres oraciones distintas elevándose al mismo tiempo. La voz del muecín llamando desde una mezquita, el sonido de un gong en un templo chino y las campanas dulces de un templo tamil anunciando su primer rito del día. Tres lenguas hablándole al mismo silencio, y ese silencio escuchándolas a todas con igual ternura.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tres formas de honrar lo invisible</h2>

          <p>
            Los malayos rezan cinco veces al día mirando hacia La Meca, y cada gesto del cuerpo se convierte en un recordatorio de que existe algo más grande que las preocupaciones del mundo. Las familias chinas honran a sus ancestros encendiendo velas rojas frente a altares cuidados con devoción, ofreciendo frutas, té y oraciones diarias. Los tamiles hindúes celebran sus fiestas con flores, música y procesiones que llenan las ciudades de color.
          </p>

          <p>
            Uno de los rituales más impresionantes que he conocido es el Thaipusam, una peregrinación hindú que se celebra cada año durante la luna llena del mes tamil de Thai. Miles de devotos suben descalzos los doscientos setenta y dos escalones que conducen a las cuevas de Batu, en las afueras de Kuala Lumpur, para rendir homenaje al dios Murugan. Algunos cargan kavadis, estructuras decoradas con plumas de pavo real, flores y pequeñas vasijas de leche que ofrecen como promesa cumplida. Es uno de los actos de fe más conmovedores del planeta. Una multitud entera caminando junta para agradecer.
          </p>

          <p>
            Y a lo largo del año la magia se multiplica en celebraciones que iluminan las calles. El Hari Raya Aidilfitri marca el final del Ramadán con visitas familiares, ropa nueva y comida compartida. El Año Nuevo Chino llena los barrios de farolas rojas, dragones de papel y deseos escritos en pequeños papeles dorados. El Deepavali enciende los hogares hindúes con lámparas de aceite y rangolis pintados en el suelo, esos diseños hermosos hechos con polvos de colores que dan la bienvenida a los dioses.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma malaya de despedirse</h2>

          <p>
            En Malasia la muerte se vive de tres maneras distintas según la fe que la acompañe.
          </p>

          <p>
            Para los malayos musulmanes, el cuerpo del ser querido se lava con agua perfumada, se envuelve en una mortaja blanca llamada kafan y se entierra el mismo día o al día siguiente, mirando hacia La Meca. La sencillez es parte del respeto. No hay flores extravagantes ni tumbas ostentosas. La idea es que todos los seres humanos, ricos o pobres, regresen a la tierra de la misma manera. Iguales ante lo eterno.
          </p>

          <p>
            Para las familias chinas, el duelo se vive con incienso, ropas blancas y altares llenos de fotografías del ser amado. Se queman papeles votivos en forma de casas, ropa y dinero, como ofrenda para que el alma tenga todo lo que necesita en su nueva existencia. Durante cuarenta y nueve días se rezan oraciones especiales para acompañar el tránsito. La memoria del difunto se honra cada año durante el festival de Qingming, cuando familias enteras limpian las lápidas de sus ancestros y comparten comida frente a ellas.
          </p>

          <p>
            Para los hindúes tamiles, la despedida se enfrenta con fuego. El cuerpo es cremado y las cenizas se entregan al mar o a un río sagrado para que el alma quede libre y pueda continuar su camino. La familia guarda un período de luto en el que se evitan las celebraciones y se ofrecen oraciones diarias.
          </p>

          <p>
            Tres maneras distintas. Una sola verdad: que despedir con respeto y amor es uno de los actos más humanos que existen.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Malasia</h2>

          <p>
            La bandera malaya se llama Jalur Gemilang, que significa rayas de gloria. El rojo y el blanco se alternan en catorce franjas horizontales que representan a los trece estados del país y al gobierno federal. El rojo simboliza el coraje, la fuerza y la vida que late en su gente. El blanco habla de pureza, honestidad y armonía entre las distintas comunidades que comparten esta tierra.
          </p>

          <p>
            En la esquina superior izquierda, sobre un fondo azul oscuro, descansan una luna creciente y una estrella amarilla de catorce puntas. La luna representa al islam, religión oficial del país. La estrella, con sus catorce puntos, vuelve a recordar la unidad de los estados y del pueblo. El azul evoca la unión del pueblo malayo y su lazo con la mancomunidad internacional. El amarillo es el tono tradicional de la realeza, símbolo de la soberanía de los antiguos sultanes.
          </p>

          <p>
            Más allá de la bandera, los colores también viven en cada festividad. El rojo aparece en las decoraciones del Año Nuevo Chino como invocación de buena fortuna. El amarillo dorado adorna los altares hindúes durante los festivales. El verde llena las mezquitas como tono sagrado del islam. El blanco viste a quienes acompañan los ritos funerarios, sin importar la religión.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Malasia enseña sobre el duelo</h2>

          <p>
            Aprendí que ninguna tradición tiene la verdad completa. Cada cultura sostiene una parte del misterio, y cuando todas conviven en paz, el alma humana respira con más profundidad.
          </p>

          <p>
            Aprendí también que no existe una forma única de despedir a quien amamos. Hay quienes necesitan tierra y silencio. Hay quienes necesitan fuego y oraciones. Hay quienes necesitan altares y papeles que viajen con el humo. Todas son válidas. Todas son sagradas. Todas son medicinas distintas para la misma herida.
          </p>

          <p>
            Los pueblos que aprenden a convivir con quienes piensan distinto descubren algo precioso. Que la muerte, vista desde muchos ángulos, deja de ser un enemigo. Se vuelve un puente que une a las familias, a las generaciones y a veces hasta a religiones que parecían muy lejanas.
          </p>

          <p>
            Hay culturas que te enseñan una sola verdad. Malasia te enseña a respetar todas.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el aroma del incienso compartido entre tres templos vecinos y en la certeza silenciosa de que el amor por quienes se fueron no necesita un solo idioma para ser eterno.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando un duelo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompañamiento desde una mirada cálida, cercana y respetuosa de tu propio ritmo, estoy aquí para ti.
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
