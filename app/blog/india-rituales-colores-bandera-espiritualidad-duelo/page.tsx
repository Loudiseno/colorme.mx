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
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay tierras que se visitan y tierras que te visitan a ti. India pertenece al segundo grupo. No importa cuánto creas conocerla antes de pisarla, una vez que sus aromas, sus colores y sus oraciones te tocan, ya nunca regresas igual. Algo se queda dentro, despierto, mirándolo todo desde un lugar más antiguo.
          </p>

          <p>
            India es el corazón espiritual del planeta. La cuna del hinduismo, del budismo, del jainismo, del sijismo. Una tierra donde los dioses no están en el cielo, sino en cada gesto cotidiano. Una civilización que lleva más de cinco mil años respirando hacia adentro y enseñándole al mundo que la vida es mucho más vasta de lo que cabe en los ojos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Rituales hindúes que sostienen cada amanecer</h2>

          <p>
            En India, lo sagrado no se separa de la rutina. Es la rutina misma. Cada hogar guarda un pequeño altar donde las familias realizan la puja al despertar. Encienden incienso, ofrecen flores frescas a las imágenes de las deidades y pronuncian oraciones en sánscrito. Es una conversación íntima entre lo humano y lo divino que ocurre en millones de casas a la misma hora, antes de que el sol haya terminado de salir.
          </p>

          <p>
            Los hombres santos, llamados sadhus, eligen la renuncia total. Visten túnicas color azafrán, viajan sin pertenencias y dedican sus días a la búsqueda de la iluminación. Para los hindúes son recordatorios vivos de que nada en este mundo es realmente nuestro.
          </p>

          <p>
            Y al caer la tarde, en la ciudad sagrada de Varanasi, sucede uno de los rituales más conmovedores del planeta. Se llama Ganga Aarti. Cinco brahmanes vestidos con túnicas color azafrán encienden grandes lámparas de bronce y las hacen girar en círculos lentos frente al río Ganges, mientras el aire se llena con el humo del sándalo, los cantos védicos y el sonido de las campanas. La palabra Aarti significa iluminar la oscuridad. Y eso es exactamente lo que ocurre cuando miles de personas dejan flotar pequeñas velas hechas con hojas y caléndulas sobre la corriente para honrar a Maa Ganga, la diosa madre que desciende del cielo para purificar la tierra.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma india de despedirse</h2>

          <p>
            Para el pueblo indio, la muerte no es un final. Es una pausa entre dos canciones. El alma vuelve a nacer una y otra vez hasta alcanzar el moksha, esa palabra hermosa que significa liberación final del ciclo de las reencarnaciones.
          </p>

          <p>
            Cuando alguien fallece, su cuerpo se lava con agua perfumada, se unge con aceites sagrados y se envuelve en una tela. La familia lo lleva en procesión hasta los ghats, las escalinatas de piedra que descienden hasta el río Ganges. Allí, sobre una pira de madera, el cuerpo es entregado al fuego. Las llamas no destruyen. Liberan. Le devuelven al alma la libertad de continuar su viaje hacia la próxima existencia.
          </p>

          <p>
            Después de la cremación, las cenizas se entregan al río sagrado. Para los hindúes, morir en Varanasi y ser ofrecido al Ganges es la mayor bendición que un ser humano puede recibir. Por eso muchas personas viajan hasta esta ciudad en sus últimos días, esperando que sus restos encuentren el descanso eterno entre las aguas que un día les enseñaron a vivir.
          </p>

          <p>
            Durante los trece días siguientes, la familia guarda un período de luto en el que se realizan oraciones diarias y se ofrece comida en honor del difunto. Al treceavo día se celebra una ceremonia que cierra el duelo y devuelve a los vivos a su rutina, pero con la certeza tierna de que el alma del que partió ya está en camino.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de la India</h2>

          <p>
            La bandera de India se llama Tiranga, que significa tres colores. Cada franja guarda un mensaje sagrado.
          </p>

          <p>
            El azafrán, ese tono cálido que mezcla el naranja con el dorado, simboliza el coraje, el sacrificio y la búsqueda espiritual. Es el color que visten los sadhus y los monjes. El blanco que ocupa el centro representa la verdad, la paz y la pureza del corazón. El verde habla de la fe, la fertilidad y la prosperidad de la tierra que alimenta a su pueblo.
          </p>

          <p>
            En medio del blanco gira el chakra de Ashoka, una rueda azul con veinticuatro radios que recuerda el dharma, la ley universal que sostiene el orden del mundo. Es el símbolo del movimiento eterno, del avance constante del alma a lo largo de muchas vidas.
          </p>

          <p>
            Pero los colores indios viven mucho más allá de los símbolos nacionales. El rojo aparece en los saris de las novias, en el polvo bermellón que las mujeres casadas llevan en la raya del cabello y en las flores que se ofrecen a los dioses. El amarillo de la cúrcuma cubre la piel de los novios antes del matrimonio como bendición de luz y fertilidad. El blanco se convierte en el color del duelo, vestido por las viudas como señal de renuncia y paz interior.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que India enseña sobre el duelo</h2>

          <p>
            Aprendí que la muerte deja de ser enemiga cuando se la mira con los ojos del alma. Es un paso, un umbral, una transformación dentro del río inmenso de la existencia.
          </p>

          <p>
            Como tanatóloga, encuentro en la cultura hindú una verdad que acompaño todos los días. El duelo no se vive a solas. Necesita comunidad, ceremonia y tiempo. Necesita rituales que le digan al cuerpo cuándo soltar y al corazón cuándo descansar. India lo entiende profundamente. Por eso ofrece trece días de oración, fuego que transforma, agua que recibe y mantras que acompañan al alma en su tránsito.
          </p>

          <p>
            También aprendí que despedir no es perder. Es entregar a alguien al cuidado de algo más grande. Cuando una persona deposita una pequeña vela sobre la corriente del Ganges y la mira alejarse, no está diciendo adiós. Está diciendo: confío en que el río te lleve hasta donde tu alma necesita ir.
          </p>

          <p>
            Hay culturas que te enseñan a vivir. India te enseña a soltar con devoción.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el reflejo de una llama sobre el río al anochecer y en la certeza silenciosa de que cada despedida también es un acto de amor.
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
