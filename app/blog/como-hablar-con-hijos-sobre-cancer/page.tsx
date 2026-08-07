'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function ComoHablarConHijosSobreCancerPage() {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Cómo hablar con tus hijos sobre el cáncer: la verdad dicha con amor
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/como-hablar-con-hijos-sobre-cancer.jpeg" alt="Cómo hablar con tus hijos sobre el cáncer" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Decirles o no decirles</h2>

          <p className="text-xl leading-relaxed">
            Cuando alguien en la familia recibe un diagnóstico de cáncer, una de las primeras preguntas que surge es qué decirles a los niños. El instinto de protegerlos puede llevarnos a pensar que es mejor no decir nada, inventar una historia, minimizar lo que pasa.
          </p>

          <p>
            Pero los niños perciben más de lo que creemos. Notan la tensión, las conversaciones en voz baja, las ausencias, los cambios de rutina, las caras de preocupación. Cuando no les damos información, llenan los vacíos con su imaginación, y lo que imaginan suele ser peor que la realidad.
          </p>

          <p>
            Decir la verdad, adaptada a su edad y a su capacidad de comprensión, les permite entender lo que está pasando, sentirse incluidos, y procesar la situación de manera más sana que si los dejamos en la oscuridad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué es importante no mentir</h2>

          <p>
            Los niños confían en los adultos que los cuidan. Cuando les mentimos sobre algo importante, aunque sea con la intención de protegerlos, esa confianza se fractura.
          </p>

          <p>
            Si les decimos que mamá solo está cansada cuando en realidad tiene cáncer, eventualmente la verdad saldrá. Y entonces el niño no solo tendrá que procesar la enfermedad, sino también la mentira. Se preguntará en qué más le han mentido. Puede sentirse traicionado justamente por las personas en quienes más confía.
          </p>

          <p>
            Además, mentir les quita la oportunidad de procesar lo que está pasando en tiempo real. Los niños son más resilientes de lo que pensamos, pero necesitan información para poder adaptarse. Sin ella, quedan atrapados en la confusión y la ansiedad.
          </p>

          <p>
            Decir la verdad no significa dar todos los detalles ni abrumarlos con información que no pueden procesar. Significa no inventar historias falsas, responder honestamente a sus preguntas, y darles la información que necesitan según su edad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo hablar del cáncer según la edad</h2>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Niños de 2 a 5 años</h3>
          <p>
            A esta edad, los niños piensan de manera muy concreta. No entienden conceptos abstractos como "enfermedad grave" o "tratamiento". Su mundo gira alrededor de lo inmediato y lo tangible.
          </p>
          <p>
            Usa palabras simples y concretas. Nombra la enfermedad, explica que los doctores están ayudando, y prepáralos para los cambios que van a notar en la rutina.
          </p>
          <p>
            <strong>Qué necesitan saber:</strong> Quién los va a cuidar, qué va a cambiar en su rutina, que ellos no hicieron nada para causar la enfermedad, que los siguen queriendo igual.
          </p>
          <p>
            <strong>Cómo pueden reaccionar:</strong> Pueden hacer la misma pregunta muchas veces. Pueden parecer que no les afecta y seguir jugando. Pueden tener cambios en el sueño, en el apetito, o volver a conductas que ya habían superado. Todo esto es normal.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Niños de 6 a 8 años</h3>
          <p>
            A esta edad empiezan a entender causa y efecto. Pueden preocuparse de que ellos causaron la enfermedad con algo que hicieron o pensaron. Necesitan que les asegures que no es así.
          </p>
          <p>
            Puedes dar un poco más de información. Explicar de manera sencilla qué es el cáncer, que no es contagioso, que hay tratamientos.
          </p>
          <p>
            <strong>Qué necesitan saber:</strong> Que no es su culpa. Que no se van a contagiar. Que está bien sentir miedo o tristeza. Que pueden hacer preguntas cuando quieran.
          </p>
          <p>
            <strong>Cómo pueden reaccionar:</strong> Pueden tener muchas preguntas. Pueden preocuparse por la muerte, aunque no lo digan directamente. Pueden estar irritables o tener dificultades en la escuela. Pueden querer ayudar de alguna manera.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Niños de 9 a 12 años</h3>
          <p>
            A esta edad ya pueden entender conceptos más complejos. Probablemente han escuchado sobre el cáncer en la escuela, en películas, o en conversaciones. Pueden tener información incorrecta que necesita corregirse.
          </p>
          <p>
            Puedes ser más directo y dar más detalles. Explicar qué tipo de cáncer es, qué tratamiento van a dar, cuáles son los efectos secundarios esperados. Reconocer que hay cosas que no sabes, que los doctores están haciendo todo lo posible.
          </p>
          <p>
            <strong>Qué necesitan saber:</strong> Información real sobre lo que está pasando. Que pueden preguntar lo que quieran. Que está bien sentir muchas emociones diferentes. Que su vida va a cambiar en algunas cosas pero que van a atravesar esto juntos.
          </p>
          <p>
            <strong>Cómo pueden reaccionar:</strong> Pueden buscar información por su cuenta en internet, no siempre de fuentes confiables. Pueden alternar entre querer hablar mucho y no querer hablar nada. Pueden preocuparse por cosas prácticas como el dinero o quién los va a llevar a sus actividades.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Adolescentes de 13 años en adelante</h3>
          <p>
            Los adolescentes pueden entender la situación con toda su complejidad, incluyendo la posibilidad de la muerte. Están en una etapa donde buscan independencia, pero una crisis familiar puede hacerlos sentir atrapados entre sus propias necesidades y las de la familia.
          </p>
          <p>
            Habla con ellos como hablarías con un adulto, con honestidad y respeto. Comparte la información médica real. Reconoce la incertidumbre cuando la haya. Pregúntales qué quieren saber.
          </p>
          <p>
            <strong>Qué necesitan saber:</strong> La verdad completa, incluyendo el pronóstico cuando sea apropiado. Que sus sentimientos importan aunque no sean el paciente. Que pueden seguir teniendo su propia vida aunque la familia esté pasando por esto. Que no tienen que ser los fuertes ni hacerse cargo de todo.
          </p>
          <p>
            <strong>Cómo pueden reaccionar:</strong> Pueden parecer distantes o desinteresados cuando en realidad están procesando mucho. Pueden enojarse, a veces dirigiendo ese enojo hacia ti. Pueden asumir responsabilidades que no les corresponden. Pueden buscar escape en amigos, actividades, o a veces en conductas de riesgo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Incluirlos en las emociones de la familia</h2>

          <p>
            Cuando un padre tiene cáncer, el instinto puede ser esconder las emociones difíciles de los hijos. No quieres que te vean llorar, no quieres asustarlos con tu miedo, no quieres que sientan la pesadez de lo que estás viviendo.
          </p>

          <p>
            Pero esconder completamente tus emociones les envía un mensaje: que las emociones difíciles son algo que hay que ocultar, que no es seguro sentir.
          </p>

          <p>
            Permitir que te vean triste o preocupado, de manera dosificada y contenida, les enseña que está bien sentir. Que las emociones difíciles son parte de la vida. Que se puede estar triste y seguir funcionando.
          </p>

          <p>
            Esto no significa desmoronarte frente a ellos o hacerlos responsables de tu bienestar emocional. Significa mostrar que eres humano, que esta situación es difícil, y que está bien que todos sientan cosas intensas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Responder a las preguntas difíciles</h2>

          <p>
            Los niños van a hacer preguntas que no quieres escuchar. "¿Se va a morir?" "¿Te vas a morir tú también?" "¿Por qué le pasó esto?"
          </p>

          <p>
            <strong>No mientas.</strong> Si el pronóstico es malo, no digas que todo va a estar bien. Pero tampoco tienes que dar más información de la que el niño puede procesar. Puedes decir: "Los doctores están haciendo todo lo que pueden. No sabemos qué va a pasar, pero vamos a estar juntos pase lo que pase."
          </p>

          <p>
            <strong>Está bien decir que no sabes.</strong> "No sé por qué le pasó esto. A veces las enfermedades pasan y no es culpa de nadie."
          </p>

          <p>
            <strong>Pregunta qué hay detrás de la pregunta.</strong> A veces "¿se va a morir?" en realidad significa "¿quién me va a cuidar a mí?" Entender qué les preocupa realmente ayuda a dar una respuesta que los tranquilice.
          </p>

          <p>
            <strong>Deja la puerta abierta.</strong> "Puedes preguntarme lo que quieras, cuando quieras. Y si no sé la respuesta, te lo voy a decir."
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Mantener la rutina cuando es posible</h2>

          <p>
            En medio del caos que trae una enfermedad grave, la rutina es un ancla para los niños. Saber que van a ir a la escuela, que van a tener su clase de fútbol, que la hora de dormir sigue siendo la misma, les da una sensación de normalidad y seguridad.
          </p>

          <p>
            No siempre es posible mantener todo igual. Habrá cambios inevitables. Pero donde se pueda preservar la rutina, vale la pena hacerlo.
          </p>

          <p>
            Y cuando la rutina tenga que cambiar, avísales con anticipación. "Esta semana la abuela te va a llevar a la escuela porque mamá tiene cita con el doctor." Saber qué esperar reduce la ansiedad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Buscar apoyo</h2>

          <p>
            No tienes que hacer esto solo. Hay profesionales que se especializan en acompañar a familias que atraviesan enfermedades graves.
          </p>

          <p>
            También puedes apoyarte en la escuela. Avisar a los maestros lo que está pasando les permite estar atentos a cambios en el niño y responder con sensibilidad.
          </p>

          <p>
            Y busca apoyo para ti también. Acompañar a tus hijos en esto mientras tú mismo estás procesando la enfermedad de alguien que amas es agotador. Necesitas tu propio espacio para sentir y procesar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cierre</h2>

          <p>
            Hablar con tus hijos sobre el cáncer es difícil. No hay palabras perfectas ni forma de evitarles el dolor de lo que está pasando.
          </p>

          <p>
            Pero puedes darles algo valioso: la verdad dicha con amor, la seguridad de que pueden preguntar y sentir, y la certeza de que van a atravesar esto juntos, como familia.
          </p>

          <p>
            No tienes que tener todas las respuestas. Solo tienes que estar presente, ser honesto, y dejarles saber que pase lo que pase, no están solos.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Necesitas orientación para hablar con tus hijos?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas acompañamiento para preparar estas conversaciones difíciles, estoy aquí para ayudarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="como-hablar-con-hijos-sobre-cancer" category="tanatologia" />
      </div>
    </article>
  )
}
