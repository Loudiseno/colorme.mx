'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function TailandiaRitualesPage() {
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
            Tailandia, la tierra de la sonrisa eterna: rituales, colores y la sabiduria de soltar con gratitud
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/thailand rituals.jpeg"
            alt="Rituales de Tailandia - Templos y espiritualidad budista"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay paises que te ensenan con palabras y otros que te ensenan con presencia. Tailandia pertenece al segundo grupo. Aqui no necesitas que nadie te explique nada. Basta con sentarte en silencio bajo la sombra de un templo dorado, escuchar el sonido lejano de las campanas y sentir como algo dentro de ti se acomoda sin permiso.
          </p>

          <p>
            El nombre del pais significa, literalmente, tierra de los libres. Y esa libertad no es solo historica, tambien es un estado del alma. Hay una ligereza en la mirada de su gente que parece decir: nada es tan grave, todo esta pasando, y lo que tenga que ser, sera.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La magia que se respira al amanecer</h2>

          <p>
            Antes de que el sol asome del todo, las calles de cada pueblo y de cada ciudad guardan una escena tan antigua como hermosa. Los monjes vestidos con tunicas color azafran salen descalzos de sus templos en silencio absoluto. Llevan consigo un cuenco de bronce que reciben sin pedir. Las familias los esperan arrodilladas frente a sus puertas con arroz, frutas, dulces y flores. Esta practica se llama tak bat, y es uno de los gestos mas tiernos que un ser humano puede presenciar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Festivales que iluminan el agua y limpian el alma</h2>

          <p>
            Hay dos celebraciones que dibujan el corazon espiritual del pais. La primera es Loi Krathong, el festival de las luces. En la noche de luna llena del duodecimo mes lunar, miles de personas bajan hasta los rios sosteniendo pequenas balsas hechas con hojas de platano, flores de loto, velas e incienso. Cada quien deposita su krathong sobre el agua, hace una oracion silenciosa y lo deja partir. En esa balsa va lo que quieres soltar: un dolor, una culpa, un pensamiento que ya no cabe.
          </p>

          <p>
            La segunda es Songkran, el ano nuevo tailandes que se celebra en abril. Durante tres dias, las calles se transforman en un festival de agua donde las personas se rocian unas a otras como acto de purificacion. Lavar el cuerpo es lavar el alma. Empezar el ano nuevo mojado es empezarlo limpio, ligero, dispuesto.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma tailandesa de despedirse</h2>

          <p>
            Cuando alguien parte, las familias del pais practican una ceremonia tan intima como sanadora. Se llama rod nam sop. Cada ser querido vierte agua perfumada sobre las manos del difunto, le pide perdon por cualquier herida del pasado y le agradece los dias compartidos. Es una conversacion final hecha de gestos en lugar de palabras. Una despedida limpia, sin asuntos pendientes, sin culpas guardadas.
          </p>

          <p>
            La cremacion llega como ultimo gesto de amor. Para el budismo, el fuego libera al alma de su envoltura terrena y la deja libre para continuar su proximo camino. Las cenizas se entregan al rio, al mar o se guardan en un templo cuidado por generaciones.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores del alma tailandesa</h2>

          <p>
            La bandera del pais se llama Trairanga, que significa tres colores. Cada franja guarda un mensaje sagrado. El rojo simboliza la sangre y la vida del pueblo. El blanco representa la pureza del budismo. El azul honra a la monarquia y simboliza la unidad de todos los tailandeses bajo un mismo cielo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Tailandia ensena sobre el duelo</h2>

          <p>
            Aprendi que sonreir no es esconder el dolor. Es reconocer que la vida sigue ofreciendo motivos para agradecer incluso cuando algo se va.
          </p>

          <p>
            Como tanatologa, encuentro en la cultura tailandesa una verdad que acompano todos los dias. El duelo no necesita gritar para ser profundo. Puede vivirse entre incienso, agua perfumada y manos que se juntan en senal de respeto. La calma no es indiferencia. A veces es la forma mas alta del amor que sigue cuidando incluso despues de la despedida.
          </p>

          <p>
            Hay culturas que te ensenan a llorar. Tailandia te ensena a despedirte sonriendo, no porque no duela, sino porque la gratitud por lo vivido es mas grande que el peso de la ausencia.
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
