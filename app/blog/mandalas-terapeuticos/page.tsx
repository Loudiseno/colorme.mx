'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloMandalasTerapeuticos() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">ARTETERAPIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Mandalas terapéuticos: qué son y cómo crearlos
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/mandalas-terapeuticos.webp"
            alt="Mandalas terapéuticos para la salud mental y el bienestar."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Hay algo hipnótico en un mandala. Esos círculos llenos de patrones, formas que se repiten, colores que fluyen desde el centro hacia afuera. Algo en ellos nos atrae, nos calma, nos invita a quedarnos.
          </p>

          <p>
            No es casualidad. Los mandalas han sido usados durante miles de años en diferentes culturas como herramientas de meditación y sanación. Y hoy, la ciencia confirma lo que las tradiciones antiguas ya sabían: crear y colorear mandalas tiene beneficios reales para nuestra salud mental.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué es un mandala?</h2>

          <p>
            La palabra &quot;mandala&quot; viene del sánscrito y significa &quot;círculo&quot;. En su forma más simple, un mandala es un diseño circular con patrones que se repiten desde un punto central.
          </p>

          <p>
            Pero un mandala es mucho más que una figura geométrica. En las tradiciones hinduistas y budistas, representa el universo, la totalidad, la conexión entre lo interno y lo externo. Carl Jung, el famoso psicólogo, los usaba con sus pacientes y los creaba él mismo como herramienta de autoconocimiento.
          </p>

          <p>
            Jung creía que el mandala era una representación del yo, y que crearlos ayudaba a integrar diferentes aspectos de nuestra psique.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los beneficios de crear mandalas</h2>

          <p>
            La investigación moderna ha confirmado lo que muchos intuíamos: trabajar con mandalas tiene efectos medibles en nuestro bienestar.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Reducción del estrés y la ansiedad</h3>
          <p>
            Un estudio publicado en <em>Art Therapy</em> encontró que colorear mandalas reduce significativamente los síntomas de ansiedad. La estructura repetitiva y predecible del mandala tiene un efecto calmante en el sistema nervioso.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Estado meditativo</h3>
          <p>
            La concentración que requiere crear o colorear un mandala nos lleva naturalmente a un estado similar a la meditación. La mente se aquieta, los pensamientos repetitivos se calman, y entramos en el momento presente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Expresión emocional</h3>
          <p>
            Los colores que elegimos, las formas que creamos, la presión con la que coloreamos... todo esto refleja nuestro estado interno. El mandala se convierte en un espejo de lo que sentimos, muchas veces revelando emociones que no sabíamos que estaban ahí.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Sensación de logro</h3>
          <p>
            Completar un mandala nos da una sensación tangible de haber creado algo. En momentos difíciles, cuando todo parece caótico o fuera de control, esta pequeña victoria puede ser profundamente reconfortante.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo crear tu propio mandala</h2>

          <p>
            No necesitas ser artista. No necesitas herramientas especiales. Solo necesitas un momento de quietud y la disposición de dejarte llevar.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Materiales básicos</h3>
          <p>
            <strong>Papel.</strong> Puede ser cualquier tipo, aunque el papel más grueso es mejor si vas a usar acuarelas o marcadores.<br />
            <strong>Algo para dibujar.</strong> Lápices de colores, crayones, marcadores, lo que tengas a mano.<br />
            <strong>Un compás o algo circular.</strong> Un plato, una taza, cualquier objeto redondo sirve para hacer el círculo inicial.<br />
            <strong>Una regla</strong> (opcional). Para dividir el círculo en secciones.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El proceso paso a paso</h3>

          <p>
            <strong>1. Crea tu círculo.</strong> Dibuja un círculo en el centro de tu papel. Este será el contenedor de tu mandala.
          </p>

          <p>
            <strong>2. Marca el centro.</strong> Coloca un punto en el centro exacto. Todo en el mandala irradiará desde este punto.
          </p>

          <p>
            <strong>3. Divide el espacio.</strong> Puedes dividir el círculo en 4, 6, 8 o más secciones. Esto crea una guía para tus patrones, pero no es obligatorio.
          </p>

          <p>
            <strong>4. Empieza desde el centro.</strong> Comienza a crear formas desde el punto central hacia afuera. Pueden ser círculos, pétalos, triángulos, líneas onduladas... lo que surja.
          </p>

          <p>
            <strong>5. Repite y expande.</strong> La magia del mandala está en la repetición. Repite las formas en cada sección, creando simetría. Ve añadiendo capas hacia el exterior.
          </p>

          <p>
            <strong>6. Añade color.</strong> Cuando estés satisfecho con las formas, llena los espacios con color. Deja que tu intuición guíe tus elecciones.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Mandalas para momentos difíciles</h2>

          <p>
            Los mandalas son especialmente poderosos durante el duelo, la ansiedad o cualquier momento de turbulencia emocional.
          </p>

          <p>
            Cuando las palabras no alcanzan, cuando la mente no para, cuando el cuerpo está tenso... sentarse a crear un mandala ofrece un ancla. Un lugar seguro donde estar. Un espacio donde no tienes que explicar nada, solo crear.
          </p>

          <p>
            He visto a personas procesar pérdidas profundas a través de mandalas. He visto la ansiedad disolverse lentamente mientras los colores llenan los espacios. He visto la sorpresa en los ojos de alguien que descubre lo que sale de su interior cuando se da permiso de crear.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No existe el mandala &quot;mal hecho&quot;</h2>

          <p>
            Esto es importante: no hay forma correcta o incorrecta de crear un mandala. No tiene que ser perfecto. No tiene que ser simétrico. No tiene que parecerse a nada que hayas visto antes.
          </p>

          <p>
            Tu mandala es tuyo. Es una expresión de quién eres en este momento. Y eso, por definición, no puede estar mal.
          </p>

          <p>
            Si sale &quot;imperfecto&quot;, está bien. Si los colores no combinan, está bien. Si se ve diferente a lo que imaginabas, está bien. El valor está en el proceso, no en el resultado.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe uso los mandalas como una de las herramientas principales en mis sesiones de arteterapia. Si quieres explorar esta práctica conmigo, ya sea para el manejo del estrés, el procesamiento del duelo o simplemente para reconectarte contigo mismo, estoy aquí para acompañarte.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si quieres descubrir el poder terapéutico de los mandalas, estoy aquí para guiarte en el proceso.
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
