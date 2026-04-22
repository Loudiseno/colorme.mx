'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function GreciaRitualesPage() {
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
            Grecia, la cuna donde el mar guarda la memoria del alma: rituales, colores sagrados y la sabiduría de honrar a los que se fueron
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/grecia-athenas.jpeg"
            alt="Grecia - Rituales y espiritualidad griega"
            width={800}
            height={450}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            En Grecia comprendí que el mar también reza. Lo escuché al amanecer, cuando las olas rompían contra los acantilados blancos como si repitieran una oración que nadie les enseñó. Lo sentí en los puertos pequeños, donde los pescadores encienden una vela a su santo protector antes de soltar las redes. Lo respiré en las costas del sur, donde las familias bajan a la orilla a despedir a sus muertos con flores lanzadas al agua.
          </p>

          <p>
            Grecia es la tierra donde nació la filosofía, la democracia y la tragedia. Pero antes de todo eso, fue la tierra donde los seres humanos aprendieron a hacerse preguntas frente al mar y a buscar respuestas mirando las estrellas. Esa búsqueda sigue viva en las iglesias ortodoxas pintadas de azul y blanco, en los monasterios suspendidos sobre las rocas y en la forma tan sentida con la que este pueblo acompaña a los suyos hasta el final.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los monasterios de Meteora: la oración que toca el cielo</h2>

          <p>
            En el centro de Grecia, sobre pilares de roca que se elevan cientos de metros hacia el cielo, descansan los monasterios de Meteora. Su nombre significa suspendidos en el aire, y cuando los vi por primera vez entendí por qué los monjes eligieron ese lugar para orar. Están tan cerca de las nubes que parece que el cielo escucha sin esfuerzo.
          </p>

          <p>
            Allí la vida se reduce a lo esencial. Silencio, oración, trabajo manual, contemplación. Los monjes ortodoxos que habitan estos monasterios desde el siglo XIV creen que la cercanía con lo alto no es solo geográfica. Es espiritual. Subir a la roca es soltar el peso del mundo. Es recordar que la vida terrena es breve y que el alma merece un lugar alto desde donde mirar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las islas que guardan rituales ancestrales</h2>

          <p>
            Las islas griegas no son solo postales de agua turquesa y casas blancas. Son guardianas de tradiciones funerarias y espirituales que sobreviven desde hace siglos.
          </p>

          <p>
            En las regiones del sur, las plañideras entonan lamentos fúnebres llamados miroloi. Son cantos improvisados que narran la vida del difunto, sus virtudes, sus amores y sus dolores. Las mujeres cantan durante horas al lado del cuerpo, transformando el dolor en poesía y la tristeza en belleza. En algunas islas se lanzan jarrones de barro desde los balcones durante la Pascua ortodoxa, un gesto que simboliza dejar caer lo viejo para recibir la vida nueva. En los pueblos del interior, las familias preparan koliva, un plato ritual hecho con trigo cocido, nueces, granada y azúcar que se ofrece en las ceremonias de los cuarenta días y del aniversario de la muerte como símbolo de resurrección.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La forma griega de despedirse</h2>

          <p>
            En la tradición ortodoxa griega, el cuerpo del difunto se lava, se viste con ropa limpia y se coloca en un ataúd abierto para que la familia y los amigos puedan despedirse. Se encienden velas alrededor y se coloca un icono sobre el pecho. El sacerdote recita oraciones y canta himnos funerarios en una ceremonia llamada kideia.
          </p>

          <p>
            Después del entierro, la familia ofrece una comida fúnebre llamada makaria, que significa bendición. Es una mesa generosa donde se comparten historias del que se fue mientras se come pan, queso, aceitunas y vino. No hay silencio pesado. Hay memoria compartida.
          </p>

          <p>
            A los cuarenta días se celebra el mnimosyno, una misa especial en la iglesia donde se ofrece koliva y se reza por el descanso del alma. Esta ceremonia se repite a los tres meses, a los seis meses, al año y a los tres años. El pueblo griego no olvida deprisa. Le da al duelo un calendario largo y generoso, como el mar que rodea sus islas: amplio, constante, lleno de ritmo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los colores sagrados de Grecia</h2>

          <p>
            La bandera griega alterna nueve franjas horizontales azules y blancas, con una cruz blanca sobre fondo azul en la esquina superior izquierda. El azul representa el mar y el cielo que abrazan al país desde todos los ángulos. Es el color de la profundidad, de la fe ortodoxa y de la inmensidad del alma griega. El blanco simboliza la pureza, la paz y las olas que rompen sobre las costas desde tiempos inmemoriales.
          </p>

          <p>
            La cruz recuerda la fe cristiana ortodoxa que sostiene la vida espiritual del pueblo. Las nueve franjas corresponden a las nueve sílabas de la frase griega Elefthería í Thánatos, que significa libertad o muerte. Un pueblo que lleva la palabra muerte cosida en su propia bandera es un pueblo que no le tiene miedo. La mira de frente, como se mira al mar en la tormenta.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que Grecia enseña sobre el duelo</h2>

          <p>
            Aprendí que el duelo puede cantarse. Que ponerle palabras al dolor, aunque sea con la voz quebrada, es una forma de honrar al que se fue que no se parece a ninguna otra.
          </p>

          <p>
            Aprendí también que el mar es el mejor maestro del soltar. Va y viene sin aferrarse a nada. Trae y lleva sin preguntar. Rompe y se reconstruye sin quejarse. Los griegos lo saben porque viven rodeados de él, porque le confían sus penas, sus flores y sus despedidas.
          </p>

          <p>
            Grecia me enseñó que recordar no es quedarse atrapado en el pasado. Es preparar koliva con las manos, encender una vela a los cuarenta días, cantar un miroloi con las amigas y decirle al alma del que amaste: sigo cuidando tu nombre con la misma devoción con la que cuido el fuego de esta vela.
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
