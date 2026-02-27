'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloTristezaComoMaestra() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            La tristeza no vino a destruirte
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/tristeza.webp"
            alt="Tristeza emocional, procesar tristeza, emociones difíciles, inteligencia emocional."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Aprender a estar triste sin huir.
          </p>

          <p>
            Vivimos en una cultura que le tiene terror a la tristeza.
          </p>

          <p>
            Apenas aparece, buscamos cómo deshacernos de ella. Distracciones, consejos para animarse, frases motivacionales, cualquier cosa que nos saque de ese estado incómodo lo más rápido posible.
          </p>

          <p>
            Pero la tristeza no es el enemigo que nos han hecho creer.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La emoción que nadie quiere sentir</h2>

          <p>
            Desde pequeños recibimos mensajes claros sobre la tristeza. &quot;No llores.&quot; &quot;No te pongas así.&quot; &quot;Anímate.&quot; &quot;Mira el lado positivo.&quot;
          </p>

          <p>
            Estos mensajes, aunque bienintencionados, transmiten una idea problemática: que la tristeza es algo malo que hay que evitar o superar rápidamente.
          </p>

          <p>
            Y así aprendemos a desconfiar de una de las emociones más naturales y necesarias que tenemos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Para qué sirve la tristeza</h2>

          <p>
            La tristeza, como todas las emociones básicas, cumple funciones importantes.
          </p>

          <p>
            <strong>Procesa las pérdidas.</strong> La tristeza es la respuesta natural ante lo que perdemos: personas, relaciones, etapas, expectativas, versiones de nosotros mismos. Sin ella, no podríamos integrar las pérdidas y seguir adelante.
          </p>

          <p>
            <strong>Nos conecta con otros.</strong> La expresión de tristeza comunica que necesitamos apoyo. Es una señal social que invita al consuelo y la cercanía. Llorar frente a alguien crea intimidad.
          </p>

          <p>
            <strong>Nos humaniza.</strong> La capacidad de sentir tristeza está conectada con la capacidad de amar, de valorar, de darle importancia a las cosas. Una persona que nunca se entristece probablemente tampoco puede conectar profundamente.
          </p>

          <p>
            <strong>Precede transformaciones.</strong> Muchos momentos de crecimiento personal están precedidos por períodos de tristeza. El dolor puede ser el terreno donde germinan cambios importantes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tristeza versus depresión</h2>

          <p>
            Es importante distinguir entre tristeza y depresión. No son lo mismo.
          </p>

          <p>
            La tristeza es una emoción temporal que responde a circunstancias específicas. Viene, se siente, y eventualmente pasa. Puedes estar triste y aún así funcionar en tu vida diaria, encontrar momentos de alivio, conectar con otros.
          </p>

          <p>
            La depresión es una condición clínica que persiste más allá de las circunstancias. Afecta el funcionamiento diario de manera significativa. Incluye síntomas como pérdida de interés en actividades que antes disfrutabas, cambios importantes en sueño y apetito, fatiga constante, dificultad para concentrarte, sentimientos de inutilidad, y en casos graves, pensamientos de hacerte daño.
          </p>

          <p>
            Si lo que sientes se parece más a la segunda descripción, especialmente si persiste por más de dos semanas, considera buscar evaluación profesional. La depresión es tratable.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que hacemos para evitar sentir</h2>

          <p>
            Hemos desarrollado múltiples estrategias para huir de la tristeza.
          </p>

          <p>
            <strong>Distracción constante.</strong> Llenar cada momento de estímulos: redes sociales, series, trabajo excesivo. Cualquier cosa que mantenga la mente ocupada para no sentir.
          </p>

          <p>
            <strong>Positividad forzada.</strong> Obligarnos a ver el lado bueno antes de haber procesado el lado difícil. Sonreír cuando por dentro estamos rotos.
          </p>

          <p>
            <strong>Sustancias.</strong> Alcohol, comida, compras, cualquier cosa que ofrezca un alivio temporal y evite el contacto con lo que duele.
          </p>

          <p>
            <strong>Racionalización.</strong> Explicar intelectualmente por qué no deberíamos sentirnos así. &quot;Otros están peor.&quot; &quot;No es para tanto.&quot; &quot;Debería ser más fuerte.&quot;
          </p>

          <p>
            Ninguna de estas estrategias funciona a largo plazo. El dolor evitado no desaparece. Se acumula, se transforma, emerge de otras formas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo acompañar tu propia tristeza</h2>

          <p>
            En lugar de huir, puedes aprender a estar con la tristeza.
          </p>

          <p>
            <strong>Reconócela.</strong> El primer paso es admitir que estás triste. Sin juzgarte, sin buscar inmediatamente la solución. Solo reconocer: &quot;Esto que siento es tristeza.&quot;
          </p>

          <p>
            <strong>Dale espacio.</strong> La tristeza necesita tiempo y lugar. Permítete momentos donde no tengas que estar bien, donde puedas simplemente sentir lo que sientes.
          </p>

          <p>
            <strong>Exprésala de alguna forma.</strong> Llorar, escribir, hablar con alguien de confianza, crear arte. La tristeza que encuentra expresión se procesa mejor que la que se guarda.
          </p>

          <p>
            <strong>No la apresures.</strong> La tristeza tiene su propio ritmo. Intentar acelerarla generalmente la prolonga. Confía en que pasará cuando haya hecho su trabajo.
          </p>

          <p>
            <strong>Cuida tu cuerpo.</strong> Cuando estás triste, las necesidades básicas importan más que nunca. Duerme. Come aunque no tengas hambre. Sal a caminar. El cuerpo sostiene a la mente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El llanto como liberación</h2>

          <p>
            Llorar tiene beneficios fisiológicos documentados. Investigaciones de la Universidad de Minnesota encontraron que las lágrimas emocionales contienen hormonas de estrés que se liberan del cuerpo al llorar. Literalmente, lloramos para sacar algo.
          </p>

          <p>
            Después de llorar, muchas personas reportan sentirse más aliviadas, más claras, menos tensas. No es imaginación. Es biología.
          </p>

          <p>
            Sin embargo, muchos adultos han olvidado cómo llorar. Les da vergüenza, lo consideran debilidad, lo reprimen automáticamente.
          </p>

          <p>
            Si esto te pasa, no te fuerces. Pero tampoco te juzgues si las lágrimas aparecen. Están haciendo su trabajo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La tristeza y el arte</h2>

          <p>
            El arte ha sido históricamente un canal para la tristeza.
          </p>

          <p>
            La música en tonos menores, la poesía del dolor, las pinturas de melancolía. Los artistas siempre han sabido que la tristeza necesita expresión y que esa expresión puede transformarse en algo significativo.
          </p>

          <p>
            No necesitas ser artista profesional para usar la creatividad como canal. Pintar lo que sientes, aunque sean solo colores y formas. Escribir sin editar. Crear un collage de lo que llevas dentro.
          </p>

          <p>
            El acto creativo permite darle forma a lo informe, exteriorizar lo interno, hacer visible lo invisible.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando la tristeza necesita ayuda profesional</h2>

          <p>
            La tristeza normal es parte de la vida. Pero hay señales de que algo más está pasando:
          </p>

          <p>
            La tristeza no responde a ninguna circunstancia identificable y persiste por semanas.
          </p>

          <p>
            Interfiere significativamente con tu capacidad de trabajar, cuidarte o relacionarte.
          </p>

          <p>
            Viene acompañada de pensamientos de hacerte daño o de que las cosas serían mejor sin ti.
          </p>

          <p>
            Se siente completamente diferente a cualquier tristeza que hayas sentido antes.
          </p>

          <p>
            No puedes encontrar ningún momento de alivio, por breve que sea.
          </p>

          <p>
            Si algo de esto resuena, buscar ayuda no es debilidad. Es cuidado propio.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            La tristeza es una de las emociones más malinterpretadas. Le tememos porque duele. La evitamos porque nos hace sentir vulnerables.
          </p>

          <p>
            Pero la tristeza también es prueba de que algo importó. No puedes entristecerte por lo que no valoras. El dolor es proporcional al amor.
          </p>

          <p>
            Aprender a estar triste, sin huir y sin ahogarte, es una habilidad que se desarrolla. Y esa habilidad te hace más capaz de vivir una vida plena, no menos.
          </p>

          <p>
            Porque una vida sin tristeza no es una vida sin dolor. Es una vida desconectada.
          </p>

          <p className="italic text-black/60 mt-8">
            Sentir tristeza no es un problema a resolver. Es una parte de estar vivo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompañamiento para procesar tus emociones, estoy aquí para ti.
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
