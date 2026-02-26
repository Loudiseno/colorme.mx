'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloSucio() {
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
            El duelo sucio: cuando te sientes aliviado de que alguien murió
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-sucio-alivio.webp"
            alt="Duelo sucio - El alivio en el duelo es válido."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Hay algo de lo que nadie habla. Algo que muchas personas sienten, pero que guardan en el rincón más oscuro de su corazón porque les da vergüenza. Porque creen que los hace malas personas. Porque piensan que si alguien lo supiera, los juzgaría sin piedad.
          </p>

          <p>Es el alivio. El alivio que a veces llega cuando alguien muere.</p>

          <p>
            Si estás leyendo esto porque sentiste —o estás sintiendo— alivio después de la muerte de alguien, quiero decirte algo importante: <strong>No eres un monstruo. Eres humano.</strong>
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El tabú más grande del duelo</h2>

          <p>
            El duelo tiene un guion social muy claro: se supone que debes estar devastado. Que debes llorar. Que debes extrañar con todo tu ser a la persona que se fue. Y sí, muchas veces eso es exactamente lo que pasa.
          </p>

          <p>
            Pero otras veces... no. Otras veces, junto con la tristeza —o incluso en lugar de ella— aparece el alivio. Y con el alivio, casi siempre, viene la culpa.
          </p>

          <p>
            <em>&quot;¿Cómo puedo sentir alivio de que mi padre murió?&quot;</em><br />
            <em>&quot;¿Qué clase de persona se siente mejor después de que alguien muere?&quot;</em><br />
            <em>&quot;¿Por qué no estoy más triste?&quot;</em>
          </p>

          <p>
            Estas preguntas te atormentan. Y como no puedes hablarlas con nadie, te las guardas. Y el peso se hace más grande cada día.
          </p>

          <p>Pero aquí estoy para decirte: el alivio es una respuesta humana normal. Y tiene explicaciones que no tienen nada que ver con que seas mala persona.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Por qué aparece el alivio?</h2>

          <p>El alivio puede aparecer por muchas razones. Y ninguna de ellas te hace malo o insensible.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">1. La persona estaba sufriendo</h3>
          <p>
            Si cuidaste a alguien con una enfermedad larga —cáncer, Alzheimer, una condición terminal— probablemente viste ese sufrimiento de cerca. Día tras día. Los dolores. El deterioro. La pérdida de dignidad.
          </p>
          <p>
            Desear que ese sufrimiento termine no es egoísmo. Es compasión. El alivio que sientes no es porque esa persona murió. Es porque esa persona ya no sufre. Y eso es amor, no crueldad.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">2. Tú estabas agotado</h3>
          <p>
            Ser cuidador de alguien enfermo es una de las tareas más demandantes que existen. Física, emocional y mentalmente agotadora.
          </p>
          <p>
            Cuando un cuidador se alegra de que su rol terminó, no significa que se arrepiente de haber decidido cuidar de un ser querido. Significa que está contento por haber llegado al final de una maratón extenuante, una que no estaba seguro de tener la entereza y la fortaleza para poder terminar.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">3. La relación era difícil</h3>
          <p>
            Este es el terreno más complicado. Pero es real. No todas las relaciones son amorosas y sanas. Algunas personas que mueren fueron padres ausentes, parejas difíciles, familiares con quienes la relación era tensa.
          </p>
          <p>
            Y cuando mueren, el alivio que sientes puede ser por el fin de esa dinámica dolorosa. Esto no significa que celebras su muerte. Significa que tu sistema nervioso finalmente puede relajarse. Y eso también es una respuesta válida.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La culpa que acompaña al alivio</h2>

          <p>Lo más difícil del alivio no es sentirlo. Es la culpa que viene después.</p>

          <p>
            <em>&quot;No debería sentir esto.&quot;</em><br />
            <em>&quot;Soy una mala persona.&quot;</em><br />
            <em>&quot;Si alguien supiera lo que siento, me odiaría.&quot;</em>
          </p>

          <p>
            Pero aquí está la verdad: las emociones no son buenas ni malas. Simplemente son. Llegan sin que las invitemos. Y juzgarte por lo que sientes solo añade más sufrimiento a una situación que ya es difícil.
          </p>

          <p>Lo que importa no es lo que sientes, sino lo que haces con eso.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo procesar estas emociones</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">1. Nómbralo</h3>
          <p>El primer paso es reconocer lo que sientes. Sin juzgarte. Sin castigarte. Simplemente decir: &quot;Siento alivio. Y está bien sentirlo.&quot;</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">2. Entiende de dónde viene</h3>
          <p>Pregúntate: ¿por qué siento esto? ¿Es porque la persona ya no sufre? ¿Porque yo estaba agotado? ¿Porque la relación era difícil? Entender el origen de la emoción te ayuda a procesarla sin culpa.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">3. Separa el alivio del amor</h3>
          <p>Puedes sentir alivio y seguir amando a esa persona. Puedes sentir alivio y seguir extrañándola. Las emociones no son excluyentes. Pueden convivir.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">4. Habla con alguien que no te juzgue</h3>
          <p>Un amigo de confianza. Un profesional de salud mental. Un grupo de apoyo. Alguien que pueda escucharte sin horrorizarse. Porque te sorprendería saber cuántas personas han sentido exactamente lo mismo que tú.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">5. Perdónate</h3>
          <p>Esto es lo más importante. Date permiso para ser humano. Para tener emociones complicadas. Para no encajar en el molde de cómo &quot;debería&quot; verse el duelo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No estás solo</h2>

          <p>
            El &quot;duelo sucio&quot; —como lo llamo yo— es el duelo que no es limpio ni presentable. El que no cabe en una tarjeta de condolencias. El que te hace sentir que algo está mal contigo.
          </p>

          <p>Pero no hay nada mal contigo.</p>

          <p>
            El duelo es complicado porque el amor es complicado. Porque las relaciones son complicadas. Porque la vida es complicada. Y en medio de toda esa complejidad, tú estás haciendo lo mejor que puedes. Sintiendo lo que sientes. Tratando de entenderte. Tratando de sanar.
          </p>

          <p>Eso es suficiente. Eso es más que suficiente.</p>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que todas las emociones del duelo merecen espacio. Estoy aquí si necesitas hablar sin ser juzgado.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás luchando con emociones difíciles después de una pérdida, puedo acompañarte a procesarlas sin juicio.
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
