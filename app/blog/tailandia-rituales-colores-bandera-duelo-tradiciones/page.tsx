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
            Tailandia, la tierra de la sonrisa eterna: rituales, colores y la sabiduría de soltar con gratitud
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/thailand rituals.jpeg"
            alt="Rituales de Tailandia - Templos y espiritualidad budista"
            width={800}
            height={450}
            priority
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay países que te enseñan con palabras y otros que te enseñan con presencia. Tailandia pertenece al segundo grupo. Aquí no necesitas que nadie te explique nada. Basta con sentarte en silencio bajo la sombra de un templo dorado, escuchar el sonido lejano de las campanas y sentir cómo algo dentro de ti se acomoda sin permiso.
          </p>

          <p>
            El nombre del país significa, literalmente, tierra de los libres. Y esa libertad no es solo histórica, también es un estado del alma. Hay una ligereza en la mirada de su gente que parece decir: nada es tan grave, todo está pasando, y lo que tenga que ser, será.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La magia que se respira al amanecer</h2>

          <p>
            Antes de que el sol asome del todo, las calles de cada pueblo y de cada ciudad guardan una escena tan antigua como hermosa. Los monjes vestidos con túnicas color azafrán salen descalzos de sus templos en silencio absoluto. Llevan consigo un cuenco de bronce que reciben sin pedir. Las familias los esperan arrodilladas frente a sus puertas con arroz, frutas, dulces y flores. Esta práctica se llama tak bat, y es uno de los gestos más tiernos que un ser humano puede presenciar. La gente ofrece sin esperar nada. Los monjes reciben sin agradecer con palabras, porque su sola presencia ya es bendición.
          </p>

          <p>
            En cada hogar, en cada negocio y en cada esquina hay también una pequeña construcción elevada sobre una columna. Es la san phra phum, una casita en miniatura donde habita el espíritu guardián del lugar. Frente a ella se colocan flores frescas, vasos de agua, frutas e incienso. Es una tradición tan antigua que vino antes del budismo y que sigue viva en el corazón del pueblo tailandés. Una forma silenciosa de pedirle a lo invisible que cuide lo visible.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Festivales que iluminan el agua y limpian el alma</h2>

          <p>
            Hay dos celebraciones que dibujan el corazón espiritual del país. La primera es Loi Krathong, el festival de las luces. En la noche de luna llena del duodécimo mes lunar, miles de personas bajan hasta los ríos sosteniendo pequeñas balsas hechas con hojas de plátano, flores de loto, velas e incienso. Cada quien deposita su krathong sobre el agua, hace una oración silenciosa y lo deja partir. En esa balsa va lo que quieres soltar: un dolor, una culpa, un pensamiento que ya no cabe. La diosa Phra Mae Khongkha, madre de las aguas, recibe la ofrenda y se la lleva río abajo, junto con todo lo que pesaba.
          </p>

          <p>
            La segunda es Songkran, el año nuevo tailandés que se celebra en abril. Durante tres días, las calles se transforman en un festival de agua donde las personas se rocían unas a otras como acto de purificación. Lavar el cuerpo es lavar el alma. Empezar el año nuevo mojado es empezarlo limpio, ligero, dispuesto. Los más jóvenes vierten agua perfumada sobre las manos de sus mayores como gesto de respeto, y los monjes bendicen a los visitantes con agua sagrada que cae lentamente desde sus dedos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las islas que susurran al alma</h2>

          <p>
            El sur del país guarda otro tipo de templo. Uno hecho de arena blanca, palmeras, agua turquesa y silencio. Las islas tailandesas no son solo destinos. Son maestras.
          </p>

          <p>
            Koh Samui guarda templos antiguos donde la estatua del Big Buddha contempla el horizonte con calma infinita. Koh Phangan esconde monasterios en la selva donde monjes y viajeros meditan juntos durante días enteros. Koh Tao enseña la quietud bajo el mar a quienes se atreven a sumergirse. Koh Lanta acompaña con la lentitud de sus atardeceres color mango. Las Phi Phi cantan con olas que parecen mantras. Koh Lipe susurra al amanecer.
          </p>

          <p>
            En muchas de estas islas, los monjes locales atan a los visitantes un hilo blanco en la muñeca llamado sai sin. Es un cordón sagrado bendecido con oraciones que se lleva durante semanas hasta que se cae solo. Mientras descansa sobre la piel, recuerda quién eres y de qué estás hecho.
          </p>

          <p>
            Lo que enseñan las islas no se aprende en ningún libro. Soltar lo que ya cumplió su tiempo. Confiar en el ritmo de la marea. Aceptar que todo regresa al mar y que ese regreso no es pérdida, es retorno.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma tailandesa de despedirse</h2>

          <p>
            Cuando alguien parte, las familias del país practican una ceremonia tan íntima como sanadora. Se llama rod nam sop. Cada ser querido vierte agua perfumada sobre las manos del difunto, le pide perdón por cualquier herida del pasado y le agradece los días compartidos. Es una conversación final hecha de gestos en lugar de palabras. Una despedida limpia, sin asuntos pendientes, sin culpas guardadas.
          </p>

          <p>
            Después llega el velorio, que puede extenderse entre tres y siete días. El cuerpo descansa en un ataúd dentro del templo o en el hogar familiar. Los monjes acuden cada noche a recitar mantras antiguos para acompañar el tránsito del alma. La familia recibe a las visitas con comida, conversaciones suaves y recuerdos compartidos. No hay luto pesado ni silencio incómodo. Hay calma. Hay agradecimiento.
          </p>

          <p>
            La cremación llega como último gesto de amor. Para el budismo, el fuego libera al alma de su envoltura terrena y la deja libre para continuar su próximo camino, ya sea hacia una nueva existencia o hacia la liberación final. Las cenizas se entregan al río, al mar o se guardan en un templo cuidado por generaciones.
          </p>

          <p>
            En los días que siguen, las familias ofrecen comida a los monjes en honor del ser amado. Cada plato compartido genera lo que el budismo llama mérito espiritual, una forma de bondad que viaja con el alma del difunto y la acompaña como una mano invisible en su nuevo recorrido.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores del alma tailandesa</h2>

          <p>
            La bandera del país se llama Trairanga, que significa tres colores. Cada franja guarda un mensaje sagrado.
          </p>

          <p>
            El rojo, presente en las dos franjas exteriores, simboliza la sangre y la vida del pueblo, la fuerza de quienes han defendido esta tierra a lo largo de los siglos. El blanco, en las franjas que lo abrazan por dentro, representa la pureza del budismo y la espiritualidad que guía la nación entera. Es el color de la fe, de la mente clara y del corazón en paz. El azul, en la franja central más ancha, honra a la monarquía profundamente amada por su gente y simboliza la unidad de todos los tailandeses bajo un mismo cielo.
          </p>

          <p>
            Más allá de la bandera, los colores tienen vida propia en cada rincón del país. El azafrán de los monjes recuerda la búsqueda de la luz interior. El dorado de los templos refleja la iluminación que el alma busca despertar. El verde y el rosa de las flores de loto enseñan que la belleza puede nacer incluso del lugar más oscuro. El blanco viste a quienes acompañan los ritos funerarios como señal de paz y entrega.
          </p>

          <p>
            Hay también una creencia muy hermosa que atraviesa la cultura del país. Cada día de la semana tiene un color asociado, y muchas personas visten ese tono en su día correspondiente para atraer protección y bendición. Amarillo el lunes, rosa el martes, verde el miércoles, naranja el jueves, azul el viernes, morado el sábado y rojo el domingo. La vida entera se convierte en una rueda luminosa donde cada amanecer trae un color distinto.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Tailandia enseña sobre el duelo</h2>

          <p>
            Aprendí que sonreír no es esconder el dolor. Es reconocer que la vida sigue ofreciendo motivos para agradecer incluso cuando algo se va.
          </p>

          <p>
            Como tanatóloga, encuentro en la cultura tailandesa una verdad que acompaño todos los días. El duelo no necesita gritar para ser profundo. Puede vivirse entre incienso, agua perfumada y manos que se juntan en señal de respeto. La calma no es indiferencia. A veces es la forma más alta del amor que sigue cuidando incluso después de la despedida.
          </p>

          <p>
            También aprendí que transformar el dolor en bondad hacia otros es una de las medicinas más antiguas del mundo. Las familias tailandesas honran a quien partió ofreciendo comida, ayudando a sus comunidades y generando mérito espiritual. No se quedan paralizadas. Se mueven hacia los demás, convirtiendo la pérdida en algo que también nutre la vida que continúa.
          </p>

          <p>
            Hay culturas que te enseñan a llorar. Tailandia te enseña a despedirte sonriendo, no porque no duela, sino porque la gratitud por lo vivido es más grande que el peso de la ausencia.
          </p>

          <p>
            Hay verdades que no se explican. Solo se sienten en el aroma del incienso al amanecer, en el sonido del mar abrazando una isla y en la certeza silenciosa de que cada despedida también puede ser un acto de gratitud.
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
