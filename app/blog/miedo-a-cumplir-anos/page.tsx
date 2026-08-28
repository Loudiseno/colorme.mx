'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function MiedoCumplirAnosPage() {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">EMOCIONES</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Miedo a cumplir años: cuando los cumpleaños dejan de ser celebración
          </h1>
          <p className="text-black/60 italic">Por Lourdes Pérez | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/miedo-a-cumplir-anos.jpeg" alt="Miedo a cumplir años" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando llega una fecha que preferirías ignorar</h2>

          <p className="text-xl leading-relaxed">
            Para muchas personas, el cumpleaños es un día de fiesta. Globos, pastel, felicitaciones, celebrar estar vivos un año más. Pero para otras, la llegada del cumpleaños trae algo muy diferente: ansiedad, tristeza, una sensación de peso que no saben bien cómo explicar.
          </p>

          <p>
            El miedo a cumplir años existe. Es más común de lo que parece. Y no tiene nada que ver con ser dramático o negativo. Tiene que ver con todo lo que un cumpleaños puede significar más allá de la celebración.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué hay detrás del miedo a cumplir años</h2>

          <p>
            El miedo a cumplir años rara vez es miedo al número en sí. Es miedo a lo que ese número representa. Y eso puede ser muchas cosas:
          </p>

          <p>
            <strong>El paso del tiempo.</strong> Cada cumpleaños es evidencia irrefutable de que el tiempo avanza. Que la vida tiene un límite. Que cada año que pasa es un año menos por delante. Para algunas personas, esta conciencia de la finitud se vuelve muy presente en los cumpleaños.
          </p>

          <p>
            <strong>Las expectativas no cumplidas.</strong> Quizás pensabas que a esta edad ya tendrías ciertas cosas: una pareja, una casa, un trabajo que te apasionara, hijos, estabilidad económica, un cuerpo diferente. Cada cumpleaños se convierte en un recordatorio de la distancia entre donde estás y donde pensabas que estarías.
          </p>

          <p>
            <strong>La presión de los hitos.</strong> La sociedad tiene una línea de tiempo implícita para la vida. A los 30 deberías tener esto, a los 40 aquello, a los 50 lo otro. Esos números redondos pueden generar una presión enorme, como si tuvieras que rendir cuentas ante un juez invisible.
          </p>

          <p>
            <strong>El miedo al envejecimiento.</strong> Vivimos en una cultura que celebra la juventud y teme la vejez. Cumplir años puede sentirse como perder valor, como volverse invisible, como acercarse a algo que la sociedad presenta como terrible.
          </p>

          <p>
            <strong>La pérdida de posibilidades.</strong> Cuando eres joven, el futuro parece infinito. Todo es posible. Con cada año que pasa, algunas puertas se cierran. Hay cosas que ya no vas a hacer, caminos que ya no vas a tomar. Esa reducción de posibilidades puede generar angustia.
          </p>

          <p>
            <strong>La cercanía de la muerte.</strong> No siempre se nombra, pero muchas veces está ahí. Cada cumpleaños es un paso más hacia el final. Para algunas personas, especialmente después de cierta edad o después de perder a alguien cercano, esta conciencia se vuelve difícil de ignorar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los cumpleaños que pesan más</h2>

          <p>
            No todos los cumpleaños generan la misma reacción. Algunos pesan más que otros:
          </p>

          <p>
            <strong>Los números redondos.</strong> Los 30, los 40, los 50. Estos cumpleaños cargan con significados culturales pesados. Se supone que marcan etapas, que definen quién eres y qué has logrado.
          </p>

          <p>
            <strong>La edad a la que murió alguien cercano.</strong> Si tu madre murió a los 52, cumplir 52 puede ser aterrador. Si tu amigo murió a los 35, acercarte a esa edad puede despertar una angustia particular.
          </p>

          <p>
            <strong>La edad a la que te diagnosticaron algo.</strong> O a la que tuviste un accidente, o a la que pasó algo que marcó tu vida. Esa edad queda cargada de significado.
          </p>

          <p>
            <strong>La edad que asocias con "ser viejo".</strong> Esa edad varía según la persona y según la etapa de vida. A los 20, los 40 pueden parecer viejísimos. A los 40, los 60. Cuando te acercas a la edad que asociabas con la vejez, puede haber un choque.
          </p>

          <p>
            <strong>El primer cumpleaños después de una pérdida.</strong> Cumplir años cuando alguien importante ya no está para felicitarte. Ese cumpleaños marca la ausencia de una manera particularmente dolorosa.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La comparación que hace daño</h2>

          <p>
            Parte del sufrimiento alrededor de los cumpleaños viene de la comparación. Te comparas con otros de tu edad que parecen tener la vida resuelta. Te comparas con versiones de ti mismo que imaginaste en el pasado. Te comparas con una línea de tiempo que alguien inventó y que no tiene por qué aplicar a ti.
          </p>

          <p>
            Las redes sociales hacen esto peor. Ves a personas de tu edad celebrando logros, mostrando sus vidas aparentemente perfectas. Lo que no ves es su dolor, sus miedos, sus propias comparaciones. Solo ves la superficie brillante mientras tú sientes todo el peso de lo que no has logrado.
          </p>

          <p>
            Esta comparación es una trampa. Cada vida tiene su propio ritmo. Los logros de otros no dicen nada sobre tu valor. Y la línea de tiempo que la sociedad propone es arbitraria, no una ley natural.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo que se esconde en los cumpleaños</h2>

          <p>
            Detrás del miedo a cumplir años muchas veces hay un duelo no reconocido. Duelo por:
          </p>

          <p>
            La juventud que se va. Y con ella, ciertas posibilidades, cierta energía, cierta forma de estar en el mundo.
          </p>

          <p>
            Los sueños que no se cumplieron. Las versiones de tu vida que imaginaste y que no sucedieron.
          </p>

          <p>
            Las personas que ya no están. Cada cumpleaños sin ellas es un recordatorio de su ausencia.
          </p>

          <p>
            El tiempo que sientes que perdiste. Años que pasaron sin que hicieras lo que querías hacer, sin que vivieras como querías vivir.
          </p>

          <p>
            La ilusión de control. La fantasía de que el tiempo no pasa, de que siempre habrá más adelante, de que la muerte es algo lejano.
          </p>

          <p>
            Nombrar estos duelos puede ayudar. No para quedarse atrapado en ellos, sino para entender qué es lo que realmente duele cuando llega el cumpleaños.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Repensar lo que significa cumplir años</h2>

          <p>
            Una posibilidad es cambiar el significado que le das a los cumpleaños. En lugar de verlos como una cuenta regresiva hacia el final, o como una evaluación de logros, puedes verlos de otras formas:
          </p>

          <p>
            <strong>Como evidencia de que sigues aquí.</strong> No es poca cosa. Estar vivo un año más, con todo lo que implica, es algo.
          </p>

          <p>
            <strong>Como una oportunidad de pausa.</strong> Un momento para mirar hacia atrás y hacia adelante. No para juzgarte, sino para hacer balance con curiosidad.
          </p>

          <p>
            <strong>Como un día que es tuyo.</strong> Que puedes usar como quieras. Para celebrar, para descansar, para llorar, para lo que necesites.
          </p>

          <p>
            <strong>Como un recordatorio de que el tiempo pasa.</strong> Y que por lo tanto vale la pena preguntarte si estás viviendo como quieres vivir.
          </p>

          <p>
            Esto no significa que tengas que sentirte feliz por cumplir años. Pero quizás puedas encontrar una forma de estar con ese día que no sea puro sufrimiento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cierre</h2>

          <p>
            El miedo a cumplir años es más común de lo que se habla. Detrás de él suelen esconderse duelos, miedos y presiones que merecen ser mirados con cuidado.
          </p>

          <p>
            Si los cumpleaños son difíciles para ti, no tienes que fingir que no lo son. No tienes que celebrar si no quieres. No tienes que sentirte agradecido a la fuerza.
          </p>

          <p>
            Lo que sí puedes hacer es preguntarte qué hay detrás de ese miedo. Qué estás perdiendo, qué estás temiendo, qué necesitas. Y si el peso es demasiado, buscar acompañamiento.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Te angustian los cumpleaños?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas trabajar tu relación con el tiempo y la edad, puedo acompañarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="miedo-a-cumplir-anos" category="emociones" />
      </div>
    </article>
  )
}
