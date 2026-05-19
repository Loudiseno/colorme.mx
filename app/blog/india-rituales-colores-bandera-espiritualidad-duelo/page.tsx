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
            India, el país donde el alma camina descalza: rituales, colores sagrados y la sabiduría del adiós
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/ofrendas india.jpeg"
            alt="India - Rituales sagrados y colores espirituales"
            width={800}
            height={450}
            priority
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En India aprendí que lo divino no vive en el cielo. Vive en los pies descalzos que tocan la tierra cada mañana, en la frente marcada con polvo bermellón, en la flor que se ofrece sin esperar nada a cambio. Para este pueblo los dioses no se buscan. Se reconocen.
          </p>

          <p>
            La espiritualidad india es la respiración de un pueblo entero. Más de cinco mil años de civilización tejiendo oraciones en el aire, encendiendo lámparas al amanecer y al atardecer, repitiendo mantras que han atravesado generaciones sin perder su fuerza. La fe no se enseña. Se hereda como se hereda el color de los ojos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Rituales que sostienen el día</h2>

          <p>
            Cada mañana, antes de que el sol termine de salir, millones de hogares realizan la puja. Una pequeña ofrenda íntima frente al altar familiar, donde se enciende incienso, se colocan flores frescas y se pronuncian oraciones en sánscrito. Es una conversación silenciosa entre lo humano y lo divino que ocurre en todo el país a la misma hora.
          </p>

          <p>
            En las calles caminan los sadhus, hombres santos vestidos con túnicas color naranja que renunciaron a todo lo material para buscar la iluminación. No tienen casa, ni dinero, ni planes. Son recordatorios vivos de que nada en este mundo nos pertenece realmente.
          </p>

          <p>
            Y al caer la tarde, en la ciudad sagrada de Varanasi, se enciende uno de los rituales más conmovedores del planeta. Se llama Ganga Aarti. Cinco brahmanes vestidos de azafrán giran grandes lámparas de bronce frente al río Ganges, mientras el aire se llena con el humo del sándalo y el sonido de las campanas. La palabra Aarti significa iluminar la oscuridad. Y eso es justamente lo que ocurre cuando miles de personas dejan flotar pequeñas velas hechas de hojas y caléndulas sobre la corriente, honrando a Maa Ganga, la diosa madre que desciende del cielo para purificar la tierra.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma india de despedirse</h2>

          <p>
            Para los hindúes, la muerte no es un final. Es una pausa entre dos canciones. El alma vuelve a nacer una y otra vez hasta alcanzar el moksha, esa palabra hermosa que significa liberación final del ciclo de las reencarnaciones.
          </p>

          <p>
            Cuando alguien parte, su cuerpo se lava con agua perfumada, se unge con aceites sagrados y se envuelve en una tela. La familia lo lleva en procesión hasta los ghats, las escalinatas de piedra que descienden hasta el río sagrado. Allí, sobre una pira de madera, se entrega al fuego. Las llamas no destruyen. Liberan. Le devuelven al alma la libertad de continuar su viaje.
          </p>

          <p>
            Después, las cenizas se entregan al Ganges. Morir en Varanasi y ser ofrecido a este río se considera la mayor bendición que un ser humano puede recibir. Por eso muchas personas viajan hasta esta ciudad en sus últimos días, esperando que sus restos encuentren el descanso eterno entre las aguas que un día les enseñaron a vivir.
          </p>

          <p>
            Durante los trece días siguientes, la familia guarda un período de luto con oraciones diarias y comida ofrecida en honor del difunto. Al treceavo día se cierra el duelo y la vida regresa a su ritmo, pero con la certeza tierna de que el alma ya está en camino.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de la India</h2>

          <p>
            La bandera india se llama Tiranga, que significa tres colores. El azafrán habita la franja superior y simboliza el coraje, el sacrificio y la búsqueda espiritual. Es el tono que visten los sadhus y los monjes. El blanco ocupa el centro y representa la verdad, la paz y la pureza del corazón. El verde corona la franja inferior y habla de la fe, la fertilidad y la prosperidad de la tierra.
          </p>

          <p>
            En medio del blanco gira el chakra de Ashoka, una rueda azul con veinticuatro radios que recuerda el dharma, la ley universal que sostiene el orden del mundo. Es el símbolo del avance constante del alma a lo largo de muchas vidas.
          </p>

          <p>
            Más allá de la bandera, los colores indios viven en cada detalle cotidiano. El rojo aparece en los saris de las novias, en el polvo bermellón que las mujeres casadas llevan en la raya del cabello y en las flores ofrecidas a los dioses. El amarillo de la cúrcuma cubre la piel de los novios antes del matrimonio como bendición de luz. El blanco se convierte en el color del duelo, vestido por las viudas como señal de renuncia y paz interior.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que India enseña sobre el duelo</h2>

          <p>
            Aprendí que la muerte deja de ser enemiga cuando se la mira con los ojos del alma. Es un paso, un umbral, una transformación dentro del río inmenso de la existencia.
          </p>

          <p>
            Aprendí también que el duelo no se vive en soledad. Necesita comunidad, ceremonia y tiempo. Necesita rituales que le digan al cuerpo cuándo soltar y al corazón cuándo descansar. India lo entiende profundamente. Por eso ofrece trece días de oración, fuego que transforma, agua que recibe y mantras que acompañan al alma en su tránsito.
          </p>

          <p>
            Despedir no es perder. Es entregar a alguien al cuidado de algo más grande. Cuando una persona deposita una pequeña vela sobre el Ganges y la mira alejarse, no está diciendo adiós. Está diciendo: confío en que el río te lleve hasta donde tu alma necesita ir.
          </p>

          <p>
            Hay culturas que te enseñan a vivir. India te enseña a soltar con devoción.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el reflejo de una llama sobre el río al anochecer y en el silencio sagrado que aparece cuando el alma reconoce que está en presencia de algo más grande que ella.
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
