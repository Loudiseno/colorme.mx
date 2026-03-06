'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloPrimerosDiasMuerte() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">Los primeros días después de la muerte de un ser querido</h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/primeros-dias-despues-muerte.webp" alt="Primeros días después de la muerte, duelo agudo, shock por muerte, cómo sobrevivir el duelo." width={1200} height={675} priority className="w-full h-auto" />
        </div>
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">Sobrevivir cuando el mundo se derrumba.</p>

          <p>Hay momentos en la vida que dividen el tiempo en dos: antes y después.</p>

          <p>La muerte de alguien que amas es uno de esos momentos. Y los primeros días después de esa muerte son, para muchas personas, los más difíciles de su vida.</p>

          <p>Si estás en esos primeros días ahora mismo, este artículo es para ti.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que ocurre en el sistema nervioso</h2>

          <p>Cuando recibimos la noticia de una muerte, el cuerpo entra en estado de shock. Es una respuesta biológica, no una elección. El sistema nervioso activa mecanismos de protección que pueden hacer que todo se sienta irreal, distante, como si estuvieras viendo tu propia vida desde afuera.</p>

          <p>Puedes sentir que no puedes llorar aunque quieras. O puedes no parar de llorar. Puedes sentirte completamente paralizado o moverse de manera automática, haciendo trámites y llamadas y arreglos sin procesar nada.</p>

          <p>Todo eso es normal. El sistema nervioso está haciendo lo que puede con algo que no tiene precedente.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puedes estar viviendo</h2>

          <ul>
            <li><strong>Incredulidad.</strong> La sensación de que esto no puede ser real. De que en algún momento vas a despertar. De que quizás hay un error.</li>
            <li><strong>Confusión mental.</strong> No recordar cosas, no poder concentrarte, olvidar lo que ibas a hacer. El cerebro bajo shock no funciona como de costumbre.</li>
            <li><strong>Sensaciones físicas intensas.</strong> Un peso en el pecho, dificultad para respirar, náuseas, temblores. El cuerpo siente el dolor aunque la mente todavía no lo procese del todo.</li>
            <li><strong>Activación automática.</strong> Ir haciendo lo que hay que hacer, llamar a personas, hacer arreglos, sin sentir nada todavía. Es el sistema nervioso protegiéndote hasta que puedas procesar.</li>
            <li><strong>Momentos de total derrumbe.</strong> Y de repente, en medio de lo cotidiano, algo detona y el dolor llega con toda su intensidad.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La logística que nadie esperaba</h2>

          <p>Una de las crueldades de la muerte es que llega con un conjunto de trámites y decisiones urgentes que hay que atender justo cuando menos capacidad tienes.</p>

          <p>Funeral, entierro, acta de defunción, llamadas a familiares, avisos a instituciones. Todo ocurre en los primeros días, cuando el dolor está en su punto más agudo.</p>

          <p>Si puedes, pide ayuda con esas tareas. No tienes que hacerlo todo solo. Permite que personas de confianza tomen algunas cosas de tu lista.</p>

          <p>Y si no tienes quién te ayude, haz lo mínimo necesario. No tienes que hacer todo perfecto en este momento.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La gente que llega y la gente que no</h2>

          <p>En los primeros días llega mucha gente. Familia, amigos, conocidos. Algunos saben acompañar. Otros no saben qué decir y dicen cosas que duelen sin querer.</p>

          <p>Frases como todo pasa por una razón, ya está en un lugar mejor, hay que ser fuerte pueden sentirse como una minimización del dolor cuando lo que más necesitas es que alguien simplemente esté ahí.</p>

          <p>No tienes que responder a cada comentario. No tienes que consolar a los que vienen a consolarte. No tienes que gestionar las emociones de otros cuando las tuyas son más de lo que puedes cargar.</p>

          <p>Puedes pedir a alguien de confianza que actúe como filtro y gestione la comunicación por ti durante estos días.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que el cuerpo necesita aunque no quieras</h2>

          <p>El dolor profundo puede hacer que comer, dormir o moverse parezca imposible o innecesario. Pero el cuerpo sigue necesitando esas cosas, quizás más que nunca.</p>

          <ul>
            <li>Comer algo, aunque sea poco y sin apetito. El cerebro necesita combustible para funcionar bajo presión.</li>
            <li>Intentar descansar, aunque el sueño no llegue fácilmente. Acostarse, cerrar los ojos, dejar que el cuerpo repose.</li>
            <li>Beber agua. El llanto deshidrata.</li>
            <li>Salir un momento al aire libre si es posible. Unos minutos afuera pueden hacer una diferencia en el sistema nervioso.</li>
          </ul>

          <p>Cuidar el cuerpo en estos momentos no es ignorar el dolor. Es mantener la infraestructura que necesitas para atravesarlo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No hay una manera correcta de hacerlo</h2>

          <p>Alguien te puede decir que no has llorado suficiente. Otro puede decirte que ya es suficiente. Alguien puede pensar que debiste haber estado más presente en el funeral. Otro puede juzgar cómo estás llevando las cosas.</p>

          <p>No hay una manera correcta de vivir los primeros días de un duelo.</p>

          <p>Si llorar te ayuda, llora. Si no puedes llorar, eso también está bien. Si necesitas hablar de quien murió, hazlo. Si no puedes hablar de ello todavía, también está bien.</p>

          <p>Tu proceso es tuyo. Y nadie que no esté cargando lo que tú cargas tiene autoridad para juzgarlo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Después de los primeros días</h2>

          <p>Los primeros días eventualmente terminan. La gente regresa a sus vidas. Los trámites se terminan. Y entonces llega un silencio que a veces es más difícil que el caos inicial.</p>

          <p>Eso es cuando el duelo realmente comienza su trabajo. Y es importante saber que ese proceso puede tomar mucho tiempo, puede no verse como esperabas, y puede necesitar apoyo profesional.</p>

          <p>No tienes que saber todavía cómo vas a atravesarlo. Solo tienes que sobrevivir este día. Y luego el siguiente.</p>

          <p className="italic text-black/60 mt-8">Los primeros días son los más difíciles. No tienes que hacerlos bien. Solo tienes que atravesarlos.</p>
        </div>
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si estás en los primeros días de un duelo y necesitas apoyo, estoy aquí para ti.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
