'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloArteterapiaAnsiedad() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">ARTETERAPIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Arteterapia para la Ansiedad: Cómo el Arte Puede Ayudarte
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/arteterapia-ansiedad.webp"
            alt="Arteterapia para la ansiedad - Expresión a través del arte"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Introducción</h2>

          <p>
            Si vives con ansiedad, sabes que a veces las palabras no alcanzan para explicar lo que sientes. Esa opresión en el pecho, los pensamientos que no paran, la sensación de que algo malo va a pasar aunque no sepas qué. La <strong>arteterapia para la ansiedad</strong> ofrece algo diferente: un camino donde no necesitas encontrar las palabras correctas, porque el color, la forma y el movimiento se convierten en tu lenguaje.
          </p>

          <p>
            En este artículo no voy a darte una lista de ejercicios para hacer en casa. Quiero explicarte cómo funciona la arteterapia, qué sucede cuando creas en un espacio terapéutico y por qué puede ser una herramienta poderosa para ti.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué hace la arteterapia con tu ansiedad</h2>

          <p>
            La ansiedad vive en el cuerpo tanto como en la mente. Esa tensión en los hombros, el estómago revuelto, la mandíbula apretada. La arteterapia trabaja en ambos niveles porque crear arte involucra tu cuerpo y tu mente simultáneamente.
          </p>

          <p>Cuando pintas, moldeas, dibujas o construyes algo, estás haciendo varias cosas a la vez:</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Sacas afuera lo que está adentro</h3>
          <p>
            La ansiedad tiene mucho de acumulación. Pensamientos que dan vueltas, emociones que no encuentran salida, tensiones que se guardan. Cuando creas, le das una forma externa a eso que estaba atrapado dentro de ti. No tienes que entenderlo ni explicarlo. Solo tiene que salir.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Le das forma a lo que no tiene forma</h3>
          <p>
            La ansiedad muchas veces es difusa. Un malestar general, una inquietud sin nombre. Cuando plasmas eso en un papel o en un material, empieza a tener contornos. Y lo que tiene contornos es más fácil de mirar, de entender, de manejar.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Te anclas al presente</h3>
          <p>
            La ansiedad suele llevarte al futuro: anticipar peligros, imaginar escenarios, prepararte para lo que podría salir mal. Cuando estás creando, tu atención se centra en lo que tienes frente a ti: el color que estás mezclando, la textura que estás tocando, el trazo que estás haciendo. Eso te trae de vuelta al ahora.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Liberas tensión física</h3>
          <p>
            El movimiento de crear —amasar, pintar, cortar, pegar— involucra tu cuerpo. Esa energía ansiosa que a veces no sabes dónde poner encuentra un canal. Tus manos están ocupadas, tu cuerpo está en movimiento, y eso tiene un efecto calmante que va más allá de lo mental.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo funciona: lo que pasa mientras creas</h2>

          <p>
            La arteterapia no es simplemente sentarte a pintar. Es un proceso acompañado por un profesional que sabe observar, contener y facilitar lo que surge mientras creas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El espacio seguro</h3>
          <p>
            Una de las claves de la arteterapia es el espacio que se construye. Un lugar donde puedes crear sin juicio, donde no hay &quot;bien&quot; o &quot;mal&quot;, donde lo que hagas tiene valor porque es tuyo. Para alguien con ansiedad, que frecuentemente se juzga y se exige, este espacio puede ser profundamente reparador.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El material como intermediario</h3>
          <p>
            A veces es más fácil hablar de lo que creaste que hablar directamente de ti. El dibujo, la escultura, el collage funcionan como un puente. Puedes decir &quot;este color me genera angustia&quot; o &quot;esta forma se siente atrapada&quot; sin tener que decir &quot;yo estoy angustiado&quot; o &quot;yo me siento atrapado&quot;. Ese paso intermedio puede hacer la expresión más accesible.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El acompañamiento</h3>
          <p>
            El arteterapeuta no te dice qué crear ni interpreta tu obra sin ti. Te acompaña en el proceso, te hace preguntas que te ayudan a explorar lo que surge, y te sostiene si aparecen emociones difíciles. No estás solo con tu ansiedad ni con lo que creas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que emerge</h3>
          <p>
            Muchas veces, mientras creas, aparecen cosas que no esperabas. Emociones que no sabías que estaban ahí, conexiones que no habías hecho, imágenes que te sorprenden. La creación artística tiene una manera de acceder a partes de ti que la conversación directa no siempre alcanza.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El proceso importa más que el resultado</h2>

          <p>
            Esto es fundamental y vale la pena repetirlo: en arteterapia, lo que importa es el proceso, no el producto final.
          </p>

          <p>
            No estás ahí para crear algo bonito, ni para demostrar habilidades, ni para llevar a casa una obra de arte. Estás ahí para expresarte, para explorar, para liberar.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que esto significa para ti</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No necesitas saber dibujar.</strong> No necesitas ninguna habilidad artística previa. Garabatos, manchas de color, formas abstractas: todo sirve.</li>
            <li><strong>No hay forma correcta de hacerlo.</strong> Puedes trabajar en silencio o hablando. Puedes hacer algo figurativo o completamente abstracto.</li>
            <li><strong>El &quot;error&quot; no existe.</strong> Si algo no sale como esperabas, eso también es información. Quizás incluso más valiosa que si todo saliera &quot;perfecto&quot;.</li>
            <li><strong>Puedes destruir lo que creas.</strong> A veces la liberación está en romper, en tachar, en empezar de nuevo. Eso también es parte del proceso.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Por qué esto es especialmente importante si tienes ansiedad</h3>
          <p>
            La ansiedad frecuentemente viene acompañada de perfeccionismo, de miedo a equivocarse, de la sensación de que todo tiene que estar bajo control. Un espacio donde nada de eso aplica puede ser profundamente liberador. Un lugar donde puedes soltar el control y ver qué pasa.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que la arteterapia puede darte</h2>

          <p>
            No voy a hacer promesas sobre resultados específicos, porque cada persona es diferente y cada proceso es único. Pero sí puedo contarte lo que muchas personas experimentan:
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Una forma de expresión cuando las palabras fallan</h3>
          <p>
            A veces la ansiedad es difícil de describir. &quot;Estoy ansioso&quot; puede sentirse insuficiente para capturar la complejidad de lo que vives. El arte te da otro lenguaje, uno que no depende de encontrar las palabras exactas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Momentos de calma en medio del ruido mental</h3>
          <p>
            Mientras creas, tu mente se enfoca en algo concreto. Esos pensamientos que no paran pueden bajar de volumen, al menos temporalmente. No es una solución permanente, pero esos momentos de respiro tienen valor.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Mayor conciencia de lo que sientes</h3>
          <p>
            La ansiedad puede ser tan constante que dejas de notar sus matices. A través de la creación, puedes empezar a distinguir: ¿es miedo? ¿es agotamiento? ¿es frustración? ¿es todo junto? Esta conciencia es el primer paso para manejarla mejor.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Herramientas que quedan contigo</h3>
          <p>
            Lo que aprendes en arteterapia —la capacidad de expresarte creativamente, de tolerar la incertidumbre, de soltar el control— son habilidades que puedes llevar a tu vida cotidiana. No desaparecen cuando termina la sesión.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Un espacio que es solo tuyo</h3>
          <p>
            En un mundo donde probablemente pasas mucho tiempo atendiendo responsabilidades y expectativas de otros, la arteterapia es un espacio dedicado exclusivamente a ti. A lo que sientes, a lo que necesitas, a lo que quieres expresar.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Conexión con partes de ti que habías olvidado</h3>
          <p>
            La creatividad es algo que todos tenemos, pero que muchos adultos dejamos de lado. Reconectar con esa parte creativa puede traer una sensación de vitalidad y de juego que la ansiedad suele apagar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando las palabras no son suficientes</h2>

          <p>
            Hay momentos en la vida donde hablar no alcanza. Donde has contado tu historia tantas veces que ya no sabes qué más decir. Donde el problema no es falta de insight sino falta de otra cosa: de expresión, de liberación, de conexión con algo más profundo.
          </p>

          <p>La arteterapia puede ser especialmente útil cuando:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Has hecho terapia verbal y sientes que necesitas algo diferente.</strong> No para reemplazarla, sino para complementarla o para probar otro camino.</li>
            <li><strong>Te cuesta identificar o nombrar lo que sientes.</strong> Si cuando te preguntan &quot;¿cómo te sientes?&quot; tu respuesta es &quot;no sé&quot; o &quot;mal&quot;, el arte puede ayudarte a explorar sin necesidad de etiquetas.</li>
            <li><strong>Tu ansiedad tiene un componente muy físico.</strong> Si tu ansiedad se manifiesta mucho en el cuerpo, trabajar con materiales físicos puede ser un camino más directo.</li>
            <li><strong>Necesitas una salida que no sea verbal.</strong> A veces simplemente necesitas hacer algo con las manos, mover el cuerpo, crear algo tangible.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Arteterapia y otras formas de terapia</h2>

          <p>
            La arteterapia no tiene que ser un camino solitario. Puede funcionar muy bien en combinación con otras formas de tratamiento.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Como complemento de la terapia verbal</h3>
          <p>
            Muchas personas combinan sesiones de arteterapia con psicoterapia tradicional. Lo que surge en la creación artística puede convertirse en material para explorar en la terapia verbal, y viceversa.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Junto con tratamiento médico</h3>
          <p>
            Si tu ansiedad requiere medicación, la arteterapia no la reemplaza. Pero puede ser un complemento valioso que trabaja aspectos que la medicación no aborda: la expresión emocional, el autoconocimiento, las estrategias de afrontamiento.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Como parte de un enfoque integral</h3>
          <p>
            Ejercicio, meditación, alimentación, sueño, conexión social, terapia, arteterapia: todos estos elementos pueden formar parte de un abordaje integral de la ansiedad. No hay una sola respuesta correcta.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que no es arteterapia</h2>

          <p>Para que tengas expectativas claras, es importante aclarar lo que la arteterapia no es:</p>

          <p><strong>No es una clase de arte.</strong> No vas a aprender técnicas ni a mejorar tus habilidades artísticas. El objetivo es terapéutico, no educativo.</p>

          <p><strong>No es manualidades para relajarse.</strong> Aunque crear puede ser relajante, la arteterapia va más allá. Implica un proceso acompañado de exploración emocional.</p>

          <p><strong>No es una solución mágica.</strong> No va a hacer desaparecer tu ansiedad de un día para otro. Es un proceso que requiere tiempo, compromiso y disposición.</p>

          <p><strong>No requiere talento.</strong> Lo repito porque es importante: cualquier persona puede beneficiarse de la arteterapia, independientemente de su habilidad artística.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿La arteterapia funciona para todo tipo de ansiedad?</h3>
          <p>
            Puede ser útil para diferentes manifestaciones de ansiedad: ansiedad generalizada, ansiedad social, ataques de pánico, ansiedad relacionada con situaciones específicas. Sin embargo, cada persona es diferente. La mejor manera de saber si es adecuada para ti es probarla.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Cuántas sesiones necesito para ver resultados?</h3>
          <p>
            No hay un número fijo. Algunas personas sienten alivio desde las primeras sesiones; otras necesitan más tiempo para conectar con el proceso. Lo que sí es común es que los beneficios se acumulan con la práctica regular.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Puedo hacer arteterapia si nunca he hecho arte en mi vida?</h3>
          <p>
            Sí. De hecho, a veces las personas sin formación artística se benefician especialmente porque no tienen expectativas de cómo &quot;debería&quot; quedar su trabajo. Llegan sin juicios preconcebidos.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Es lo mismo que pintar en casa para relajarme?</h3>
          <p>
            No exactamente. Pintar en casa puede ser relajante y valioso, pero la arteterapia incluye el acompañamiento de un profesional que sabe cómo facilitar el proceso, contener lo que surge y ayudarte a profundizar en la exploración.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Qué pasa si lo que creo me genera más ansiedad?</h3>
          <p>
            Es posible que durante el proceso surjan emociones intensas. Para eso está el acompañamiento: el arteterapeuta está ahí para ayudarte a sostener lo que aparece y procesarlo de manera segura. No estás solo con lo que surge.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Conclusión</h2>

          <p>
            La arteterapia ofrece un camino diferente para trabajar con la ansiedad. Un camino donde no dependes solo de las palabras, donde tu cuerpo y tu creatividad se involucran, donde puedes expresar lo que sientes aunque no sepas cómo nombrarlo.
          </p>

          <p>
            No es para todos, y no es la única opción. Pero para muchas personas, especialmente aquellas que sienten que hablar no es suficiente, puede abrir puertas que otras formas de terapia no alcanzan.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que puedes recordar:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>La arteterapia te permite expresar lo que las palabras no capturan.</li>
            <li>El proceso de crear importa más que el resultado final.</li>
            <li>No necesitas ninguna habilidad artística para beneficiarte.</li>
            <li>Es un espacio acompañado, no simplemente pintar solo en casa.</li>
            <li>Puede combinarse con otras formas de tratamiento.</li>
          </ul>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que hay muchas formas de expresar lo que sentimos. A veces, la más poderosa no tiene palabras.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes curiosidad por explorar la arteterapia como parte de tu camino para manejar la ansiedad, puedo orientarte.
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
