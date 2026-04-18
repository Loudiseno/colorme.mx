'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import RelatedArticles from '@/components/RelatedArticles'
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            La tristeza no vino a destruirte
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/tristeza.webp"
            alt="Tristeza emocional, procesar tristeza, emociones dificiles, inteligencia emocional."
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
            Apenas aparece, buscamos como deshacernos de ella. Distracciones, consejos para animarse, frases motivacionales, cualquier cosa que nos saque de ese estado incomodo lo mas rapido posible.
          </p>

          <p>
            Pero la tristeza no es el enemigo que nos han hecho creer.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La emocion que nadie quiere sentir</h2>

          <p>
            Desde pequenos recibimos mensajes claros sobre la tristeza. &quot;No llores.&quot; &quot;No te pongas asi.&quot; &quot;Animate.&quot; &quot;Mira el lado positivo.&quot;
          </p>

          <p>
            Estos mensajes, aunque bienintencionados, transmiten una idea problematica: que la tristeza es algo malo que hay que evitar o superar rapidamente.
          </p>

          <p>
            Y asi aprendemos a desconfiar de una de las emociones mas naturales y necesarias que tenemos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Para que sirve la tristeza</h2>

          <p>
            La tristeza, como todas las emociones basicas, cumple funciones importantes.
          </p>

          <p>
            <strong>Procesa las perdidas.</strong> La tristeza es la respuesta natural ante lo que perdemos: personas, relaciones, etapas, expectativas, versiones de nosotros mismos. Sin ella, no podriamos integrar las perdidas y seguir adelante.
          </p>

          <p>
            <strong>Nos conecta con otros.</strong> La expresion de tristeza comunica que necesitamos apoyo. Es una senal social que invita al consuelo y la cercania. Llorar frente a alguien crea intimidad.
          </p>

          <p>
            <strong>Nos humaniza.</strong> La capacidad de sentir tristeza esta conectada con la capacidad de amar, de valorar, de darle importancia a las cosas. Una persona que nunca se entristece probablemente tampoco puede conectar profundamente.
          </p>

          <p>
            <strong>Precede transformaciones.</strong> Muchos momentos de crecimiento personal estan precedidos por periodos de tristeza. El dolor puede ser el terreno donde germinan cambios importantes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tristeza versus depresion</h2>

          <p>
            Es importante distinguir entre tristeza y depresion. No son lo mismo.
          </p>

          <p>
            La tristeza es una emocion temporal que responde a circunstancias especificas. Viene, se siente, y eventualmente pasa. Puedes estar triste y aun asi funcionar en tu vida diaria, encontrar momentos de alivio, conectar con otros.
          </p>

          <p>
            La depresion es una condicion clinica que persiste mas alla de las circunstancias. Afecta el funcionamiento diario de manera significativa. Incluye sintomas como perdida de interes en actividades que antes disfrutabas, cambios importantes en sueno y apetito, fatiga constante, dificultad para concentrarte, sentimientos de inutilidad, y en casos graves, pensamientos de hacerte dano.
          </p>

          <p>
            Si lo que sientes se parece mas a la segunda descripcion, especialmente si persiste por mas de dos semanas, considera buscar evaluacion profesional. La depresion es tratable.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que hacemos para evitar sentir</h2>

          <p>
            Hemos desarrollado multiples estrategias para huir de la tristeza.
          </p>

          <p>
            <strong>Distraccion constante.</strong> Llenar cada momento de estimulos: redes sociales, series, trabajo excesivo. Cualquier cosa que mantenga la mente ocupada para no sentir.
          </p>

          <p>
            <strong>Positividad forzada.</strong> Obligarnos a ver el lado bueno antes de haber procesado el lado dificil. Sonreir cuando por dentro estamos rotos.
          </p>

          <p>
            <strong>Sustancias.</strong> Alcohol, comida, compras, cualquier cosa que ofrezca un alivio temporal y evite el contacto con lo que duele.
          </p>

          <p>
            <strong>Racionalizacion.</strong> Explicar intelectualmente por que no deberiamos sentirnos asi. &quot;Otros estan peor.&quot; &quot;No es para tanto.&quot; &quot;Deberia ser mas fuerte.&quot;
          </p>

          <p>
            Ninguna de estas estrategias funciona a largo plazo. El dolor evitado no desaparece. Se acumula, se transforma, emerge de otras formas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como acompanar tu propia tristeza</h2>

          <p>
            En lugar de huir, puedes aprender a estar con la tristeza.
          </p>

          <p>
            <strong>Reconocela.</strong> El primer paso es admitir que estas triste. Sin juzgarte, sin buscar inmediatamente la solucion. Solo reconocer: &quot;Esto que siento es tristeza.&quot;
          </p>

          <p>
            <strong>Dale espacio.</strong> La tristeza necesita tiempo y lugar. Permitete momentos donde no tengas que estar bien, donde puedas simplemente sentir lo que sientes.
          </p>

          <p>
            <strong>Expresala de alguna forma.</strong> Llorar, escribir, hablar con alguien de confianza, crear arte. La tristeza que encuentra expresion se procesa mejor que la que se guarda.
          </p>

          <p>
            <strong>No la apresures.</strong> La tristeza tiene su propio ritmo. Intentar acelerarla generalmente la prolonga. Confia en que pasara cuando haya hecho su trabajo.
          </p>

          <p>
            <strong>Cuida tu cuerpo.</strong> Cuando estas triste, las necesidades basicas importan mas que nunca. Duerme. Come aunque no tengas hambre. Sal a caminar. El cuerpo sostiene a la mente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El llanto como liberacion</h2>

          <p>
            Llorar tiene beneficios fisiologicos documentados. Investigaciones de la Universidad de Minnesota encontraron que las lagrimas emocionales contienen hormonas de estres que se liberan del cuerpo al llorar. Literalmente, lloramos para sacar algo.
          </p>

          <p>
            Despues de llorar, muchas personas reportan sentirse mas aliviadas, mas claras, menos tensas. No es imaginacion. Es biologia.
          </p>

          <p>
            Sin embargo, muchos adultos han olvidado como llorar. Les da verguenza, lo consideran debilidad, lo reprimen automaticamente.
          </p>

          <p>
            Si esto te pasa, no te fuerces. Pero tampoco te juzgues si las lagrimas aparecen. Estan haciendo su trabajo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La tristeza y el arte</h2>

          <p>
            El arte ha sido historicamente un canal para la tristeza.
          </p>

          <p>
            La musica en tonos menores, la poesia del dolor, las pinturas de melancolia. Los artistas siempre han sabido que la tristeza necesita expresion y que esa expresion puede transformarse en algo significativo.
          </p>

          <p>
            No necesitas ser artista profesional para usar la creatividad como canal. Pintar lo que sientes, aunque sean solo colores y formas. Escribir sin editar. Crear un collage de lo que llevas dentro.
          </p>

          <p>
            El acto creativo permite darle forma a lo informe, exteriorizar lo interno, hacer visible lo invisible.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando la tristeza necesita ayuda profesional</h2>

          <p>
            La tristeza normal es parte de la vida. Pero hay senales de que algo mas esta pasando:
          </p>

          <p>
            La tristeza no responde a ninguna circunstancia identificable y persiste por semanas.
          </p>

          <p>
            Interfiere significativamente con tu capacidad de trabajar, cuidarte o relacionarte.
          </p>

          <p>
            Viene acompanada de pensamientos de hacerte dano o de que las cosas serian mejor sin ti.
          </p>

          <p>
            Se siente completamente diferente a cualquier tristeza que hayas sentido antes.
          </p>

          <p>
            No puedes encontrar ningun momento de alivio, por breve que sea.
          </p>

          <p>
            Si algo de esto resuena, buscar ayuda no es debilidad. Es cuidado propio.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            La tristeza es una de las emociones mas malinterpretadas. Le tememos porque duele. La evitamos porque nos hace sentir vulnerables.
          </p>

          <p>
            Pero la tristeza tambien es prueba de que algo importo. No puedes entristecerte por lo que no valoras. El dolor es proporcional al amor.
          </p>

          <p>
            Aprender a estar triste, sin huir y sin ahogarte, es una habilidad que se desarrolla. Y esa habilidad te hace mas capaz de vivir una vida plena, no menos.
          </p>

          <p>
            Porque una vida sin tristeza no es una vida sin dolor. Es una vida desconectada.
          </p>

          <p className="italic text-black/60 mt-8">
            Sentir tristeza no es un problema a resolver. Es una parte de estar vivo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompanamiento para procesar tus emociones, estoy aqui para ti.
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

        {/* Related Articles */}
        <RelatedArticles currentSlug="tristeza-como-maestra" category="emociones" />
      </div>
    </article>
  )
}
