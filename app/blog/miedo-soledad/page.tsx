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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            El miedo a quedarte solo
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
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
            Y por que huir de el empeora todo.
          </p>

          <p>
            Hay un miedo que muchas personas cargan en silencio.
          </p>

          <p>
            El miedo a quedarse sin nadie. A que todos se vayan. A terminar la vida en soledad.
          </p>

          <p>
            Este miedo puede ser tan intenso que moldea decisiones importantes: con quien te relacionas, que toleras, que sacrificas para no estar solo.
          </p>

          <p>
            Pero huir de la soledad no la previene. Y temerla no te protege de ella.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El terror a quedarse sin nadie</h2>

          <p>
            El miedo a la soledad es profundamente humano.
          </p>

          <p>
            Somos seres sociales. Nuestros ancestros sobrevivian en grupos. El aislamiento, en terminos evolutivos, significaba peligro. Esa programacion todavia esta en nosotros.
          </p>

          <p>
            Pero en la vida moderna, este miedo puede desproporcionarse. Ya no se trata solo de supervivencia fisica. Se trata de un terror existencial a no importarle a nadie, a no tener conexion, a enfrentar la vida sin compania.
          </p>

          <p>
            Segun datos de la Organizacion Mundial de la Salud, aproximadamente una de cada cuatro personas en el mundo experimenta soledad significativa. El miedo, entonces, no es irracional. Pero las respuestas que genera muchas veces causan mas problemas de los que resuelven.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">De donde viene este miedo</h2>

          <p>
            El miedo a la soledad tiene multiples origenes posibles.
          </p>

          <p>
            <strong>Experiencias tempranas de abandono.</strong> Si durante la infancia experimentaste ausencia emocional o fisica de figuras de cuidado, es probable que cargaras la sensacion de que las personas importantes se van. Ese miedo puede persistir en la vida adulta aunque las circunstancias hayan cambiado.
          </p>

          <p>
            <strong>Perdidas significativas.</strong> La muerte de alguien cercano, el fin de una relacion importante, cualquier perdida que te haya dejado sintiendote solo puede activar el miedo de que vuelva a suceder.
          </p>

          <p>
            <strong>Mensajes culturales.</strong> Vivimos en una cultura que presenta la soledad como fracaso. El valor de una persona parece medirse por sus relaciones. No tener pareja, no tener muchos amigos, pasar tiempo solo se interpreta como senal de que algo esta mal contigo.
          </p>

          <p>
            <strong>Falta de relacion contigo mismo.</strong> Para muchas personas, la idea de estar a solas consigo mismas es aterradora porque no saben como estar con ellas mismas. Nunca aprendieron. Siempre hubo distracciones, otras personas, ruido que llenaba el vacio.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que hacemos para evitar la soledad</h2>

          <p>
            El miedo intenso a la soledad genera conductas que muchas veces nos danan.
          </p>

          <p>
            <strong>Relaciones que no queremos.</strong> Quedarse en relaciones que ya no funcionan, que son daninas, o que simplemente no deseas, solo por no estar solo. El costo de esta decision se paga en bienestar, en autenticidad, en tiempo de vida.
          </p>

          <p>
            <strong>Tolerar lo intolerable.</strong> Aceptar maltratos, faltas de respeto, condiciones que no aceptarias si no tuvieras tanto miedo de quedarte sin nadie. El miedo a la soledad puede mantenerte atrapado en situaciones que te destruyen.
          </p>

          <p>
            <strong>Nunca estar contigo mismo.</strong> Llenar cada momento con compania, con ruido, con actividad. No soportar el silencio. No poder estar en tu propia presencia sin sentir urgencia de escapar.
          </p>

          <p>
            <strong>Dependencia emocional.</strong> Necesitar a otra persona para sentirte completo, para regular tus emociones, para saber quien eres. Cuando esa persona no esta disponible, el panico aparece.
          </p>

          <p>
            <strong>Complacer compulsivamente.</strong> Decir que si a todo, adaptarte a lo que otros quieren, perderte a ti mismo con tal de que te acepten. Si dices que no, si eres autentico, quizas te rechacen. Y el rechazo es el camino a la soledad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Soledad elegida versus aislamiento impuesto</h2>

          <p>
            Es importante distinguir entre dos experiencias muy diferentes.
          </p>

          <p>
            <strong>La soledad elegida</strong> es pasar tiempo contigo mismo por eleccion, disfrutando de tu propia compania, usando ese tiempo para reflexion, creatividad, descanso. Es una forma de conexion contigo mismo.
          </p>

          <p>
            <strong>El aislamiento impuesto</strong> es estar solo cuando no quieres estarlo, carecer de conexiones significativas, sentirte desconectado de otros sin que sea tu eleccion.
          </p>

          <p>
            La primera es saludable y necesaria. La segunda es dolorosa y tiene efectos negativos documentados en la salud mental y fisica.
          </p>

          <p>
            El miedo a la soledad muchas veces no distingue entre ambas. Le teme a cualquier forma de estar solo, incluyendo la soledad elegida que podria ser nutritiva.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Aprender a estar contigo mismo</h2>

          <p>
            La capacidad de estar solo sin sentir panico es una habilidad que se desarrolla.
          </p>

          <p>
            <strong>Empieza gradualmente.</strong> Si nunca pasas tiempo solo, no necesitas saltar directamente a un retiro de silencio. Comienza con momentos breves: una caminata sin auriculares, media hora sin distracciones, una comida contigo mismo.
          </p>

          <p>
            <strong>Observa que aparece.</strong> Cuando estas solo y sin distracciones, que pensamientos y emociones surgen? Esa informacion es valiosa. Te dice que hay dentro de ti que normalmente evitas.
          </p>

          <p>
            <strong>Encuentra actividades que disfrutes solo.</strong> Leer, caminar, crear arte, cocinar, lo que sea que te de satisfaccion sin necesitar compania. Desarrollar una relacion con tu propia compania.
          </p>

          <p>
            <strong>Cuestiona los mensajes culturales.</strong> Estar solo no significa que nadie te quiera. Puede significar que te valoras lo suficiente como para elegir bien con quien pasas tu tiempo. Puede significar independencia, no fracaso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La soledad despues de una perdida</h2>

          <p>
            Hay momentos de la vida donde la soledad es inevitable.
          </p>

          <p>
            Despues de la muerte de alguien cercano. Despues del fin de una relacion. Cuando los hijos se van. Cuando te mudas a un lugar nuevo.
          </p>

          <p>
            En estos momentos, el miedo a la soledad puede intensificarse porque la soledad se hace muy real.
          </p>

          <p>
            Atravesar estos momentos requiere tanto tolerancia a la soledad como busqueda activa de conexion. No una cosa o la otra, sino ambas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Actividades que transforman la soledad en conexion contigo</h2>

          <p>
            El tiempo solo no tiene que ser tiempo vacio.
          </p>

          <p>
            El arte puede ser una forma de compania contigo mismo. Pintar, dibujar, escribir. Estas actividades te conectan con tu mundo interno de maneras que otras distracciones no permiten.
          </p>

          <p>
            La meditacion o contemplacion. Aprender a estar en quietud, a observar tu mente, a encontrar cierta paz en tu propia presencia.
          </p>

          <p>
            El movimiento. Caminar, hacer ejercicio, bailar. El cuerpo en movimiento puede procesar emociones y generar bienestar sin necesitar compania externa.
          </p>

          <p>
            El contacto con la naturaleza. Estar solo en la naturaleza es diferente a estar solo en cuatro paredes. Muchas personas encuentran que la soledad en espacios naturales es nutritiva mas que aterradora.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            El miedo a la soledad es comprensible. Nadie quiere sentirse abandonado, invisible, sin conexion.
          </p>

          <p>
            Pero cuando ese miedo controla tus decisiones, el remedio puede ser peor que la enfermedad. Relaciones daninas, perdida de ti mismo, incapacidad de estar en tu propia compania.
          </p>

          <p>
            Aprender a tolerar la soledad, incluso a encontrar valor en ella, no significa que debas vivir aislado. Significa que puedes elegir tus relaciones desde la libertad, no desde el panico.
          </p>

          <p>
            Y eso cambia todo.
          </p>

          <p className="italic text-black/60 mt-8">
            La soledad no es el enemigo. El miedo a ella puede serlo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si el miedo a la soledad te esta afectando y necesitas acompanamiento, estoy aqui para ti.
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
