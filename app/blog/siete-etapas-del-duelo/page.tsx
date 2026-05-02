'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function SieteEtapasDueloPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Las siete etapas del duelo: un modelo para entender, no una receta para seguir
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/siete etapas del duelo.jpeg" alt="Las siete etapas del duelo" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Para qué sirve un modelo</h2>

          <p className="text-xl leading-relaxed">
            Cuando atravesamos un duelo, todo puede sentirse caótico. Las emociones van y vienen sin orden aparente. Un día estás furioso, al siguiente estás entumecido, al otro lloras sin parar. Es fácil preguntarse si lo que sientes es normal, si estás "avanzando" o "retrocediendo", si hay algo mal contigo.
          </p>

          <p>
            Los modelos de duelo existen para dar un marco de referencia. Para ayudarnos a entender que las experiencias que tenemos, por intensas o confusas que sean, son parte de un proceso humano que otros han atravesado antes.
          </p>

          <p>
            Pero es fundamental entender algo desde el principio: los modelos son mapas, no el territorio. Describen posibilidades, no prescripciones. No hay una forma correcta de hacer duelo, y ningún modelo puede capturar la complejidad de lo que cada persona vive.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El modelo de siete etapas</h2>

          <p>
            El modelo más conocido de etapas del duelo es el de Elisabeth Kübler-Ross, que propone cinco etapas. Una versión expandida, desarrollada posteriormente por otros autores como Parkes y Prigerson, propone siete etapas que intentan capturar la complejidad del proceso con mayor detalle:
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">1. Shock y negación</h3>
          <p>
            Al principio puede haber una sensación de irrealidad, de que esto no puede estar pasando. Un entumecimiento que funciona como protección inicial. Puedes sentir que estás en piloto automático, haciendo lo que hay que hacer sin sentir realmente.
          </p>
          <p>
            Esta etapa es una respuesta del cuerpo y la mente ante algo demasiado grande para procesar de golpe. El entumecimiento no significa que no te importe. Significa que tu sistema necesita tiempo para absorber lo que pasó.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">2. Dolor y culpa</h3>
          <p>
            Cuando la realidad empieza a asentarse, el dolor emocional puede ser intenso. La pérdida se siente en el cuerpo, en el pecho, en el estómago. Pueden aparecer sentimientos de culpa por cosas hechas o no hechas, por palabras dichas o calladas.
          </p>
          <p>
            Esta etapa puede sentirse abrumadora. El dolor parece no tener fin. La culpa puede ser irracional, pero eso no la hace menos real.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">3. Ira y negociación</h3>
          <p>
            Puede haber frustración, enojo, búsqueda de culpables. El enojo puede dirigirse hacia la persona que murió, hacia los médicos, hacia Dios, hacia ti mismo, hacia cualquiera. También pueden aparecer pensamientos de "si hubiera hecho algo diferente" o intentos de negociar con el destino.
          </p>
          <p>
            La ira es una respuesta natural a la impotencia. Algo terrible pasó y no pudiste evitarlo. Esa impotencia se convierte en enojo porque el enojo se siente menos vulnerable que el dolor puro.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">4. Depresión y soledad</h3>
          <p>
            Una tristeza profunda, a veces acompañada de aislamiento. Puedes sentir que nadie entiende, que estás solo con tu dolor, que la vida perdió sentido. Puede haber dificultad para hacer las cosas cotidianas, para levantarte, para conectar con otros.
          </p>
          <p>
            Esta no es la depresión clínica que requiere tratamiento, aunque a veces puede convertirse en eso. Es una respuesta natural a la magnitud de lo que perdiste. Es el alma reconociendo que algo importante ya no está.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">5. Giro ascendente</h3>
          <p>
            Gradualmente pueden aparecer días un poco mejores. No significa que el dolor desapareció, pero hay momentos donde respiras un poco más fácil. Quizás puedes reír de un recuerdo en lugar de solo llorar. Quizás hay un día donde no piensas en la pérdida constantemente.
          </p>
          <p>
            Este giro no es lineal. Puedes tener un día mejor y al siguiente volver a caer. Eso no significa que retrocediste. Significa que el duelo tiene su propio ritmo.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">6. Reconstrucción</h3>
          <p>
            Empiezas a buscar cómo reorganizar tu vida sin la persona que perdiste. Decisiones prácticas, nuevas rutinas, ajustes en cómo funciona el día a día. También hay una reconstrucción interna: quién eres ahora que esta persona ya no está.
          </p>
          <p>
            Esta etapa implica trabajo activo. No es que el duelo simplemente pase; es que empiezas a construir una vida que incorpora la pérdida en lugar de negarla.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">7. Aceptación y esperanza</h3>
          <p>
            Algunas personas llegan a un lugar donde la pérdida se integra en su historia sin dominarla por completo. Pueden recordar a la persona con tristeza pero también con gratitud. Pueden experimentar alegría sin sentir culpa por ello. Pueden mirar hacia adelante con algo parecido a la esperanza.
          </p>
          <p>
            Aceptación no significa que ya no duele. No significa que olvidaste. Significa que aprendiste a vivir con la pérdida como parte de quien eres.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que el modelo no dice</h2>

          <p>
            Este modelo, como cualquier modelo de duelo, tiene limitaciones importantes que hay que entender:
          </p>

          <p>
            <strong>El duelo no es lineal.</strong> No vas pasando de una etapa a la siguiente como si subieras una escalera. Puedes estar en la aceptación un día y volver al enojo al siguiente. Puedes saltarte etapas completamente. Puedes estar en varias al mismo tiempo.
          </p>

          <p>
            <strong>No todas las etapas aplican a todas las personas.</strong> Quizás nunca sientas ira. Quizás nunca llegues a algo que puedas llamar aceptación. Quizás tu experiencia no encaje en ninguna de estas descripciones. Eso no significa que estés haciendo el duelo mal.
          </p>

          <p>
            <strong>No hay tiempos establecidos.</strong> El modelo no dice cuánto debe durar cada etapa ni cuánto debe durar el duelo en total. Cada persona tiene su propio ritmo, y ese ritmo depende de muchos factores: quién murió, cómo murió, qué tipo de relación tenían, qué otros apoyos tienes, tu historia personal.
          </p>

          <p>
            <strong>El modelo describe, no prescribe.</strong> No es una lista de cosas que tienes que sentir ni un camino que tienes que recorrer. Es una descripción de experiencias comunes, nada más.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que sí necesitas en el duelo</h2>

          <p>
            Más allá de cualquier modelo, lo que las personas en duelo necesitan es bastante simple, aunque no siempre fácil de encontrar:
          </p>

          <p>
            <strong>Espacio para sentir lo que sientas.</strong> Sin juicio, sin prisa, sin que te digan cómo deberías estar.
          </p>

          <p>
            <strong>Acompañamiento de personas que puedan estar presentes.</strong> No que arreglen nada, solo que estén ahí.
          </p>

          <p>
            <strong>Tiempo.</strong> El duelo no se apura. Necesita el tiempo que necesita.
          </p>

          <p>
            <strong>Permiso para seguir viviendo.</strong> Para reír, para disfrutar, para construir una vida nueva sin sentir que eso es traición.
          </p>

          <p>
            <strong>Ayuda profesional si el duelo se complica.</strong> Si el dolor no disminuye con el tiempo, si no puedes funcionar, si piensas en hacerte daño, buscar ayuda es importante.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cierre</h2>

          <p>
            Los modelos de duelo son herramientas para entender, no reglas para seguir. Las siete etapas describen experiencias comunes, pero tu duelo es tuyo y no tiene que parecerse al de nadie más.
          </p>

          <p>
            Puedes atravesar todas las etapas, algunas, o ninguna. Puedes ir y venir entre ellas. Puedes inventar tu propio camino. Todo eso es válido.
          </p>

          <p>
            Lo que importa no es seguir un modelo, sino darte permiso de sentir lo que sientas, buscar el apoyo que necesites, y confiar en que eventualmente, aunque parezca imposible, aprenderás a vivir con esta pérdida.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando un duelo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas acompañamiento en tu proceso, sin importar en qué etapa estés, estoy aquí.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="siete-etapas-del-duelo" category="tanatologia" />
      </div>
    </article>
  )
}
