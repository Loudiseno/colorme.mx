'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function IndiaRitualesPage() {
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
            India, el pais de los mil colores: rituales, simbolos y la sabiduria de soltar en comunidad
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/rituales de india.jpeg"
            alt="Rituales de India - Espiritualidad y colores sagrados"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En la India, el color no es solo una experiencia visual. Es un lenguaje que vibra en cada rincon de la vida cotidiana, en los saris de las mujeres que caminan por mercados bulliciosos, en las guirnaldas de cempasuchil que adornan los altares, en el polvo rojo que marca la frente de quienes buscan lo sagrado.
          </p>

          <p>
            En este pais, cada color cuenta una historia. Y cada ritual es una forma de dialogar con lo invisible, de honrar lo que se fue y lo que vendr.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de la India</h2>

          <p>
            La bandera de la India es un mapa de significados. El azafran representa el coraje y el sacrificio. El blanco simboliza la paz y la verdad. El verde encarna la fe y la fertilidad. Y en el centro, el chakra azul marino, la rueda del dharma, recuerda que todo esta en constante movimiento, que nada permanece igual para siempre.
          </p>

          <p>
            Pero mas alla de la bandera, los colores en la India tienen un poder que trasciende lo decorativo. El rojo es el color del amor y del matrimonio, pero tambien de la fuerza vital. El amarillo invoca la sabiduria y el aprendizaje. El naranja es el color de los renunciantes, de quienes han decidido soltar las ataduras del mundo material.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El Holi: el festival que celebra el color y la renovacion</h2>

          <p>
            Cada primavera, la India se cubre de polvos de colores durante el Holi, el festival que celebra el triunfo del bien sobre el mal, de la luz sobre la oscuridad. Durante dos dias, las calles se convierten en lienzos vivientes donde las personas se lanzan gulal, polvo de colores, mientras rien, bailan y se abrazan.
          </p>

          <p>
            Pero el Holi es mucho mas que una fiesta. Es un ritual de renovacion donde las diferencias sociales se disuelven, donde los enemigos se reconcilian, donde el pasado se suelta para dar paso a un nuevo comienzo. Es una leccion de vida pintada en mil colores.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo en la India: un proceso comunitario</h2>

          <p>
            En la tradicion hindu, la muerte no es un final sino una transicion. El alma, o atman, continua su viaje hacia una nueva forma de existencia. Por eso, los rituales funerarios estan disenados para facilitar ese transito, para liberar al alma de sus ataduras terrenales.
          </p>

          <p>
            La cremacion a orillas del Ganges es uno de los rituales mas conocidos. En Varanasi, la ciudad sagrada, las llamas consumen el cuerpo mientras la familia observa y reza. Las cenizas se esparcen en el rio, devolviendo a la naturaleza lo que de ella vino. No hay lapidas ni cementerios. El cuerpo se disuelve, pero el vinculo permanece en el corazon de quienes aman.
          </p>

          <p>
            Lo que mas me conmueve de esta tradicion es el papel de la comunidad. El duelo no se vive en soledad. Los vecinos traen comida, los familiares se turnan para acompanar, los rituales se repiten durante trece dias para dar tiempo al alma de completar su transicion. Nadie se queda solo con su dolor.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que la India ensena sobre el duelo</h2>

          <p>
            Aprendi que soltar no significa olvidar. Significa confiar en que lo que amamos sigue existiendo en otra forma, en otro plano, en otro ritmo del universo.
          </p>

          <p>
            Como tanatologa, encuentro en la India una sabiduria que a veces olvidamos en Occidente. El duelo necesita comunidad. Necesita rituales que le den forma al dolor. Necesita tiempo, no prisas. Necesita colores que expresen lo que las palabras no alcanzan a decir.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el aroma del incienso que sube hacia el cielo, en el sonido de los mantras que acompanan el amanecer, en los mil colores que recuerdan que la vida, incluso cuando duele, sigue siendo sagrada.
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
