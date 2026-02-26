'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloEjerciciosArteterapia() {
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
            10 ejercicios de arteterapia que puedes hacer en casa
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/ejercicios-arteterapia.webp"
            alt="Ejercicios de arteterapia para hacer en casa."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            &quot;Pero yo no sé dibujar.&quot;
          </p>

          <p>
            Es lo primero que dice casi todo el mundo cuando escucha la palabra arteterapia.
          </p>

          <p>
            La realidad es diferente: la arteterapia no se trata de crear obras de arte. Se trata de usar la expresión creativa como un puente hacia tus emociones. No importa cómo quede el resultado. Lo que importa es lo que sientes mientras lo haces y lo que descubres sobre ti en el proceso.
          </p>

          <p>
            Para sanar a través del arte no necesitas ninguna formación artística. Solo necesitas disposición para explorar.
          </p>

          <p>
            Estos 10 ejercicios los puedes hacer en tu casa, con materiales simples, sin ninguna experiencia previa. Pueden ayudarte a procesar el duelo, la ansiedad, el estrés o cualquier emoción difícil que estés atravesando.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué sucede cuando haces arte?</h2>

          <p>
            Cuando creas algo con tus manos, tu cerebro activa la corteza prefrontal, la zona encargada de la regulación emocional y la toma de decisiones. Al mismo tiempo, libera dopamina y serotonina, neurotransmisores asociados con el bienestar.
          </p>

          <p>
            Estudios han demostrado que la actividad artística reduce los niveles de cortisol (la hormona del estrés), independientemente de la habilidad artística de quien la practica.
          </p>

          <p>Lo importante no es el resultado, sino el proceso.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 1: Pintar tu emoción actual</h2>

          <p><strong>Tiempo:</strong> 15-20 minutos.<br />
          <strong>Materiales:</strong> Papel, pinturas o crayones de colores.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Antes de empezar, cierra los ojos y respira profundo tres veces. Pregúntate: ¿qué estoy sintiendo ahora mismo?
          </p>

          <p>
            No pienses en dibujar &quot;algo&quot;. Solo elige colores que representen esa emoción y déjalos fluir sobre el papel. Pueden ser manchas, líneas, formas abstractas. No hay reglas.
          </p>

          <p>
            Cuando termines, observa lo que creaste. ¿Qué ves? ¿Hay algo que te sorprenda?
          </p>

          <p>
            <strong>Para qué sirve:</strong> Este ejercicio te ayuda a externalizar emociones que a veces no tienen palabras. Es especialmente útil cuando sientes &quot;algo&quot; pero no sabes exactamente qué.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 2: Mandala del momento presente</h2>

          <p><strong>Tiempo:</strong> 30-45 minutos.<br />
          <strong>Materiales:</strong> Papel, compás o plato para trazar círculo, colores.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Dibuja un círculo grande en el centro de tu hoja. Este círculo representa tu espacio interior en este momento.
          </p>

          <p>
            Desde el centro hacia afuera, comienza a crear patrones. Pueden ser geométricos, orgánicos, simétricos o libres. No hay forma correcta de hacer un mandala.
          </p>

          <p>
            Mientras coloreas, respira profundo. Enfócate solo en el trazo que estás haciendo. Si tu mente se va a otros pensamientos, gentilmente regresa al color que tienes en la mano.
          </p>

          <p>
            <strong>Para qué sirve:</strong> Los mandalas favorecen la atención plena y pueden ayudar a reducir la ansiedad. El proceso repetitivo de colorear tiene un efecto calmante en el sistema nervioso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 3: Carta ilustrada</h2>

          <p><strong>Tiempo:</strong> 30-60 minutos.<br />
          <strong>Materiales:</strong> Papel, colores, recortes de revistas, pegamento (opcional).</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Piensa en algo o alguien que hayas perdido: una persona, una mascota, una etapa de vida, una versión de ti.
          </p>

          <p>
            Escríbele una carta breve. Puede incluir cosas que no pudiste expresar, recuerdos que quieres honrar, preguntas, o simplemente lo que sientes.
          </p>

          <p>
            Ahora ilustra esa carta. Puedes dibujar alrededor de las palabras, usar colores significativos, pegar imágenes que representen lo que sientes.
          </p>

          <p>
            <strong>Para qué sirve:</strong> Ayuda a procesar pérdidas y despedidas. Muchas personas sienten alivio al poder expresar lo que no tuvieron oportunidad de decir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 4: El frasco de las emociones</h2>

          <p><strong>Tiempo:</strong> 20-30 minutos.<br />
          <strong>Materiales:</strong> Papel, colores.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>Dibuja un frasco grande en tu papel.</p>

          <p>
            Imagina que ese frasco contiene todas las emociones que estás sintiendo hoy. Usando diferentes colores, llena el frasco. Cada color representa una emoción diferente.
          </p>

          <p>No juzgues lo que aparece. Solo observa.</p>

          <p>
            Escribe al lado de cada color qué emoción representa y qué proporción del frasco ocupa.
          </p>

          <p>
            <strong>Para qué sirve:</strong> Te ayuda a identificar y nombrar tus emociones. A veces no sabemos qué sentimos hasta que lo vemos representado visualmente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 5: Dibujo bilateral (con ambas manos)</h2>

          <p><strong>Tiempo:</strong> 10-15 minutos.<br />
          <strong>Materiales:</strong> Papel grande, dos crayones o marcadores.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Toma un crayón en cada mano. Cierra los ojos si te sientes cómodo.
          </p>

          <p>
            Comienza a mover ambas manos simultáneamente sobre el papel. Pueden hacer movimientos en espejo o diferentes cada una.
          </p>

          <p>
            No intentes dibujar nada específico. Solo deja que las manos se muevan al ritmo de tu respiración.
          </p>

          <p>
            Haz esto durante 5-10 minutos. Luego abre los ojos y observa lo que creaste.
          </p>

          <p>
            <strong>Para qué sirve:</strong> El dibujo bilateral activa ambos hemisferios cerebrales y puede ayudar a procesar experiencias difíciles.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 6: Collage de tu mundo interior</h2>

          <p><strong>Tiempo:</strong> 45-60 minutos.<br />
          <strong>Materiales:</strong> Revistas, tijeras, pegamento, papel o cartulina.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Hojea las revistas sin un objetivo específico. Recorta imágenes, palabras, texturas o colores que te atraigan por cualquier razón. No analices por qué te llaman la atención.
          </p>

          <p>
            Cuando tengas suficientes recortes, comienza a pegarlos en tu cartulina. Organízalos como sientas: pueden superponerse, dejar espacios vacíos, crear una narrativa o ser completamente abstractos.
          </p>

          <p>
            Cuando termines, observa tu collage. ¿Qué historia cuenta? ¿Qué descubres?
          </p>

          <p>
            <strong>Para qué sirve:</strong> El collage permite explorar el mundo interno de manera indirecta y a menudo revela temas que no habíamos considerado conscientemente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 7: Pintar con música</h2>

          <p><strong>Tiempo:</strong> 20-30 minutos.<br />
          <strong>Materiales:</strong> Papel, pinturas o acuarelas, música.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Elige una pieza musical que te provoque emociones. Puede ser algo que te conecte con lo que estás procesando, algo que te calme, o algo que te permita liberar tensión.
          </p>

          <p>
            Prepara tu papel y pinturas. Cuando la música comience, deja que tu mano se mueva respondiendo a lo que escuchas.
          </p>

          <p>
            Los momentos suaves pueden ser trazos lentos y fluidos. Los momentos intensos pueden ser movimientos rápidos y enérgicos.
          </p>

          <p>
            <strong>Para qué sirve:</strong> La música accede a partes emocionales que las palabras no siempre alcanzan. Combinar música con arte amplifica la capacidad de expresión.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 8: Mi antes y mi después</h2>

          <p><strong>Tiempo:</strong> 30-45 minutos.<br />
          <strong>Materiales:</strong> Papel dividido a la mitad, colores.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>Divide tu papel en dos secciones con una línea vertical.</p>

          <p>
            En el lado izquierdo, representa cómo era tu vida ANTES de la pérdida o el momento difícil. Usa colores, símbolos, imágenes que capturen esa etapa.
          </p>

          <p>En el lado derecho, representa cómo es tu vida AHORA.</p>

          <p>
            No hay respuestas correctas. Puede que el &quot;después&quot; se sienta más oscuro o diferente. O puede que notes aspectos que no habías reconocido.
          </p>

          <p>
            <strong>Para qué sirve:</strong> Este ejercicio ayuda a visualizar el impacto de los cambios y también puede revelar recursos internos y aprendizajes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 9: Caja de memorias</h2>

          <p><strong>Tiempo:</strong> Varias sesiones.<br />
          <strong>Materiales:</strong> Caja de cartón o madera, pinturas, recortes, objetos pequeños, fotos.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Consigue una caja que puedas decorar. Puede ser una caja de zapatos, una caja de té, cualquier contenedor.
          </p>

          <p>
            Por fuera, decórala de manera que represente lo que estás procesando. Usa colores, imágenes, palabras significativas.
          </p>

          <p>
            Por dentro, coloca objetos que tengan valor: fotos, cartas, pequeños recuerdos, notas con memorias escritas.
          </p>

          <p>
            Esta caja se convierte en un espacio tangible para tu proceso. Puedes abrirla cuando necesites conectar con esos recuerdos y cerrarla cuando necesites descanso.
          </p>

          <p>
            <strong>Para qué sirve:</strong> Tener un lugar físico para el duelo ayuda a contenerlo. No necesitas cargar con el dolor todo el tiempo, pero sabes que está ahí cuando quieras visitarlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejercicio 10: Autorretrato emocional</h2>

          <p><strong>Tiempo:</strong> 45-60 minutos.<br />
          <strong>Materiales:</strong> Papel, colores.</p>

          <p><strong>Cómo hacerlo:</strong></p>

          <p>
            Este no es un autorretrato realista. No se trata de capturar tu apariencia física.
          </p>

          <p>
            Piensa en cómo te sientes por dentro en este momento de tu vida. ¿Qué colores representan tu estado emocional? ¿Qué formas?
          </p>

          <p>
            Dibuja una silueta o figura y llénala con todo eso. Puedes usar elementos simbólicos, colores que expresen tu verdad interior.
          </p>

          <p>
            <strong>Para qué sirve:</strong> Te permite observarte desde afuera. A veces necesitamos externalizar nuestra experiencia interna para poder comprenderla mejor y tratarnos con más compasión.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Recomendaciones para tu práctica</h2>

          <p><strong>Crea un espacio cómodo.</strong> No necesitas un lugar especial, pero sí un momento donde puedas concentrarte sin interrupciones.</p>

          <p><strong>No juzgues lo que creas.</strong> El objetivo nunca es que quede &quot;bonito&quot;. El objetivo es que te sirva.</p>

          <p><strong>Guarda tus creaciones.</strong> Con el tiempo, mirar hacia atrás puede mostrarte tu proceso.</p>

          <p><strong>Sé constante.</strong> Como cualquier práctica de bienestar, los beneficios se acumulan con el tiempo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Y si necesitas más apoyo?</h2>

          <p>
            Estos ejercicios pueden ser muy útiles, pero no reemplazan la terapia profesional si estás atravesando un momento muy difícil.
          </p>

          <p>
            Si sientes que el arte te ayuda pero necesitas guía más profunda, busca un arteterapeuta o un profesional que incorpore técnicas expresivas en su práctica.
          </p>

          <p>
            El arte puede ser un compañero en el camino de sanación. No va a quitar el dolor, pero puede ayudarte a transformarlo en algo que puedas sostener.
          </p>

          <p className="italic text-black/60 mt-8">
            Tu creatividad es un recurso valioso. Dale la oportunidad de acompañarte.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si quieres explorar la arteterapia como herramienta para procesar tus emociones, puedo acompañarte.
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
