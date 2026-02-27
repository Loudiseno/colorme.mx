'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloMiedoSoledad() {
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
            El miedo a quedarte solo
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/miedo-soledad.webp"
            alt="Miedo a la soledad, miedo a estar solo, soledad emocional, dependencia emocional, superar el miedo."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Y por qué huir de él empeora todo.
          </p>

          <p>
            Hay un miedo que muchas personas cargan en silencio.
          </p>

          <p>
            El miedo a quedarse sin nadie. A que todos se vayan. A terminar la vida en soledad.
          </p>

          <p>
            Este miedo puede ser tan intenso que moldea decisiones importantes: con quién te relacionas, qué toleras, qué sacrificas para no estar solo.
          </p>

          <p>
            Pero huir de la soledad no la previene. Y temerla no te protege de ella.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El terror a quedarse sin nadie</h2>

          <p>
            El miedo a la soledad es profundamente humano.
          </p>

          <p>
            Somos seres sociales. Nuestros ancestros sobrevivían en grupos. El aislamiento, en términos evolutivos, significaba peligro. Esa programación todavía está en nosotros.
          </p>

          <p>
            Pero en la vida moderna, este miedo puede desproporcionarse. Ya no se trata solo de supervivencia física. Se trata de un terror existencial a no importarle a nadie, a no tener conexión, a enfrentar la vida sin compañía.
          </p>

          <p>
            Según datos de la Organización Mundial de la Salud, aproximadamente una de cada cuatro personas en el mundo experimenta soledad significativa. El miedo, entonces, no es irracional. Pero las respuestas que genera muchas veces causan más problemas de los que resuelven.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">De dónde viene este miedo</h2>

          <p>
            El miedo a la soledad tiene múltiples orígenes posibles.
          </p>

          <ul>
            <li><strong>Experiencias tempranas de abandono.</strong> Si durante la infancia experimentaste ausencia emocional o física de figuras de cuidado, es probable que cargaras la sensación de que las personas importantes se van. Ese miedo puede persistir en la vida adulta aunque las circunstancias hayan cambiado.</li>
            <li><strong>Pérdidas significativas.</strong> La muerte de alguien cercano, el fin de una relación importante, cualquier pérdida que te haya dejado sintiéndote solo puede activar el miedo de que vuelva a suceder.</li>
            <li><strong>Mensajes culturales.</strong> Vivimos en una cultura que presenta la soledad como fracaso. El valor de una persona parece medirse por sus relaciones. No tener pareja, no tener muchos amigos, pasar tiempo solo se interpreta como señal de que algo está mal contigo.</li>
            <li><strong>Falta de relación contigo mismo.</strong> Para muchas personas, la idea de estar a solas consigo mismas es aterradora porque no saben cómo estar con ellas mismas. Nunca aprendieron. Siempre hubo distracciones, otras personas, ruido que llenaba el vacío.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que hacemos para evitar la soledad</h2>

          <p>
            El miedo intenso a la soledad genera conductas que muchas veces nos dañan.
          </p>

          <ul>
            <li><strong>Relaciones que no queremos.</strong> Quedarse en relaciones que ya no funcionan, que son dañinas, o que simplemente no deseas, solo por no estar solo. El costo de esta decisión se paga en bienestar, en autenticidad, en tiempo de vida.</li>
            <li><strong>Tolerar lo intolerable.</strong> Aceptar maltratos, faltas de respeto, condiciones que no aceptarías si no tuvieras tanto miedo de quedarte sin nadie. El miedo a la soledad puede mantenerte atrapado en situaciones que te destruyen.</li>
            <li><strong>Nunca estar contigo mismo.</strong> Llenar cada momento con compañía, con ruido, con actividad. No soportar el silencio. No poder estar en tu propia presencia sin sentir urgencia de escapar.</li>
            <li><strong>Dependencia emocional.</strong> Necesitar a otra persona para sentirte completo, para regular tus emociones, para saber quién eres. Cuando esa persona no está disponible, el pánico aparece.</li>
            <li><strong>Complacer compulsivamente.</strong> Decir que sí a todo, adaptarte a lo que otros quieren, perderte a ti mismo con tal de que te acepten. Si dices que no, si eres auténtico, quizás te rechacen. Y el rechazo es el camino a la soledad.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Soledad elegida versus aislamiento impuesto</h2>

          <p>
            Es importante distinguir entre dos experiencias muy diferentes.
          </p>

          <p>
            <strong>La soledad elegida</strong> es pasar tiempo contigo mismo por elección, disfrutando de tu propia compañía, usando ese tiempo para reflexión, creatividad, descanso. Es una forma de conexión contigo mismo.
          </p>

          <p>
            <strong>El aislamiento impuesto</strong> es estar solo cuando no quieres estarlo, carecer de conexiones significativas, sentirte desconectado de otros sin que sea tu elección.
          </p>

          <p>
            La primera es saludable y necesaria. La segunda es dolorosa y tiene efectos negativos documentados en la salud mental y física.
          </p>

          <p>
            El miedo a la soledad muchas veces no distingue entre ambas. Le teme a cualquier forma de estar solo, incluyendo la soledad elegida que podría ser nutritiva.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Aprender a estar contigo mismo</h2>

          <p>
            La capacidad de estar solo sin sentir pánico es una habilidad que se desarrolla.
          </p>

          <ul>
            <li><strong>Empieza gradualmente.</strong> Si nunca pasas tiempo solo, no necesitas saltar directamente a un retiro de silencio. Comienza con momentos breves: una caminata sin auriculares, media hora sin distracciones, una comida contigo mismo.</li>
            <li><strong>Observa qué aparece.</strong> Cuando estás solo y sin distracciones, ¿qué pensamientos y emociones surgen? Esa información es valiosa. Te dice qué hay dentro de ti que normalmente evitas.</li>
            <li><strong>Encuentra actividades que disfrutes solo.</strong> Leer, caminar, crear arte, cocinar, lo que sea que te dé satisfacción sin necesitar compañía. Desarrollar una relación con tu propia compañía.</li>
            <li><strong>Cuestiona los mensajes culturales.</strong> Estar solo no significa que nadie te quiera. Puede significar que te valoras lo suficiente como para elegir bien con quién pasas tu tiempo. Puede significar independencia, no fracaso.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La soledad después de una pérdida</h2>

          <p>
            Hay momentos de la vida donde la soledad es inevitable.
          </p>

          <p>
            Después de la muerte de alguien cercano. Después del fin de una relación. Cuando los hijos se van. Cuando te mudas a un lugar nuevo.
          </p>

          <p>
            En estos momentos, el miedo a la soledad puede intensificarse porque la soledad se hace muy real.
          </p>

          <p>
            Atravesar estos momentos requiere tanto tolerancia a la soledad como búsqueda activa de conexión. No una cosa o la otra, sino ambas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Actividades que transforman la soledad en conexión contigo</h2>

          <p>
            El tiempo solo no tiene que ser tiempo vacío.
          </p>

          <p>
            El arte puede ser una forma de compañía contigo mismo. Pintar, dibujar, escribir. Estas actividades te conectan con tu mundo interno de maneras que otras distracciones no permiten.
          </p>

          <p>
            La meditación o contemplación. Aprender a estar en quietud, a observar tu mente, a encontrar cierta paz en tu propia presencia.
          </p>

          <p>
            El movimiento. Caminar, hacer ejercicio, bailar. El cuerpo en movimiento puede procesar emociones y generar bienestar sin necesitar compañía externa.
          </p>

          <p>
            El contacto con la naturaleza. Estar solo en la naturaleza es diferente a estar solo en cuatro paredes. Muchas personas encuentran que la soledad en espacios naturales es nutritiva más que aterradora.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            El miedo a la soledad es comprensible. Nadie quiere sentirse abandonado, invisible, sin conexión.
          </p>

          <p>
            Pero cuando ese miedo controla tus decisiones, el remedio puede ser peor que la enfermedad. Relaciones dañinas, pérdida de ti mismo, incapacidad de estar en tu propia compañía.
          </p>

          <p>
            Aprender a tolerar la soledad, incluso a encontrar valor en ella, no significa que debas vivir aislado. Significa que puedes elegir tus relaciones desde la libertad, no desde el pánico.
          </p>

          <p>
            Y eso cambia todo.
          </p>

          <p className="italic text-black/60 mt-8">
            La soledad no es el enemigo. El miedo a ella puede serlo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si el miedo a la soledad te está afectando y necesitas acompañamiento, estoy aquí para ti.
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
