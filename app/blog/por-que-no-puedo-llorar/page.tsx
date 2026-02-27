'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloPorQueNoPuedoLlorar() {
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
            ¿Por qué no puedo llorar? El duelo seco y sin lágrimas
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/porque-no-puedo-llorar.webp"
            alt="Por qué no puedo llorar en el duelo."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Hay una pregunta que aparece una y otra vez en las personas que atraviesan una pérdida: <em>&quot;¿Por qué no puedo llorar?&quot;</em>
          </p>

          <p>
            Lo primero que quiero decirte es esto: no estás roto. No eres frío. No amas menos.
          </p>

          <p>
            Muchas personas llegan a sentirse profundamente culpables porque las lágrimas simplemente no aparecen. Ven a otros llorar en el funeral, observan cómo su familia se desahoga, y ellos... nada. Un vacío seco que no entienden. Y entonces empieza la pregunta más dolorosa de todas: <em>&quot;¿Qué me pasa?&quot;</em>
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El llanto no es la única forma de sentir</h2>

          <p>
            Hemos crecido con la idea de que el duelo se mide en lágrimas. Mientras más lloras, más duele. Mientras más duele, más amas. Pero eso no es verdad.
          </p>

          <p>
            El duelo tiene mil rostros. Y no todos incluyen lágrimas.
          </p>

          <p>
            Algunas personas experimentan lo que se conoce como <strong>bloqueo emocional</strong>. Esto sucede cuando el cerebro, ante una pérdida tan grande, activa una especie de mecanismo de protección. Ante una pérdida significativa, el cerebro puede entrar en un estado de &quot;entumecimiento emocional&quot; —una forma de shock que permite a la persona seguir funcionando mientras procesa lo que ha sucedido. Es como si tu mente dijera: <em>&quot;Esto es demasiado. Voy a dosificarlo.&quot;</em>
          </p>

          <p>
            Pero también es importante reconocer algo: <strong>no todas las personas necesitan llorar para procesar su dolor</strong>. Cada quien tiene su propia forma de expresar las emociones. Hay quienes lloran, hay quienes escriben, hay quienes necesitan moverse, hay quienes procesan en silencio. Ninguna forma es mejor que otra.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué puede estar pasando contigo?</h2>

          <p>No hay una sola razón por la que no puedes llorar. Estas son algunas de las más comunes:</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">1. Estás en shock</h3>
          <p>
            El shock es una de las primeras respuestas al duelo. Tu mente todavía no ha logrado procesar completamente lo que pasó. Es como si vivieras la realidad de la pérdida, pero una parte de ti todavía no se lo cree del todo. La negación actúa como un mecanismo de defensa temporal para amortiguar el impacto emocional. Esto es normal. Es temporal. Y no significa que no sientas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">2. Te da vergüenza</h3>
          <p>
            Hay algo dentro de ti que siente que llorar está mal. Que es vergonzoso. Que si alguien te ve llorar, van a pensar que eres débil, dramático o exagerado.
          </p>
          <p>
            Esta vergüenza puede ser tan fuerte que bloquea las lágrimas incluso cuando estás solo. Porque ya no se trata de que otros te vean. Se trata de que tú mismo te juzgas por necesitar llorar. La vergüenza aprendida funciona como un candado interno.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">3. Estás tratando de ser fuerte</h3>
          <p>
            &quot;Tengo que mantenerme entero.&quot; &quot;Si me derrumbo, ¿quién va a sostener a los demás?&quot; &quot;No puedo darme el lujo de caer ahora.&quot;
          </p>
          <p>
            Muchas personas bloquean sus lágrimas porque sienten que tienen que ser el pilar. Pero ser fuerte no significa no sentir. Contener todo el tiempo tiene un costo en el cuerpo y en la mente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">4. Puede ser un tema cultural</h3>
          <p>
            Desde niños, a muchas personas se les enseñó que llorar es de débiles. Frases como &quot;los hombres no lloran&quot;, &quot;no seas llorón&quot; o &quot;tienes que aguantar&quot; se repiten generación tras generación.
          </p>
          <p>
            El resultado: personas que no saben cómo conectar con sus emociones. Esto no es solo un tema de hombres. Muchas mujeres también crecieron en familias donde llorar estaba mal visto. La cultura en la que creciste moldeó tu relación con las lágrimas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">5. Tu tipo de personalidad</h3>
          <p>
            Hay personas que naturalmente procesan el mundo más desde la lógica que desde la emoción. Si eres de los que analiza todo, que busca explicaciones, que prefiere pensar a sentir, es posible que tu mente haya desarrollado el hábito de racionalizar las emociones en lugar de vivirlas.
          </p>
          <p>
            Las personalidades más racionales pueden tener más dificultad para acceder al llanto. No porque no sientan, sino porque su mente procesa las emociones de otra manera.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">6. Tu estilo de apego</h3>
          <p>
            La forma en que te relacionaste con tus cuidadores en la infancia dejó una huella en cómo manejas las emociones hoy.
          </p>
          <p>
            <strong>Apego evitativo:</strong> Si creciste con padres que no respondían a tus necesidades emocionales, que te decían &quot;deja de llorar&quot; cuando estabas triste, probablemente aprendiste que expresar emociones no era seguro. Los niños con este tipo de apego aprenden temprano que llorar no trae consuelo, sino rechazo.
          </p>
          <p>
            <strong>Apego desorganizado:</strong> Si tus cuidadores eran impredecibles —a veces cariñosos, a veces distantes o incluso aterradores— tu sistema emocional puede haberse confundido. Las emociones se sienten caóticas, así que es más fácil desconectarse completamente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">7. Experiencias traumáticas</h3>
          <p>
            El trauma cambia la forma en que el cerebro procesa las emociones. Cuando vivimos algo que nos sobrepasa —abuso, violencia, pérdidas traumáticas, accidentes— el sistema nervioso puede activar un mecanismo de defensa: la disociación.
          </p>
          <p>
            Es como si una parte de ti se separara del resto. Sabes que algo pasó, pero no lo sientes. Cuando hay trauma no procesado, el sistema se desconecta de las emociones para protegerse.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">8. Tu mente está distraída o en modo automático</h3>
          <p>
            A veces no podemos llorar porque literalmente no estamos prestando atención a lo que sentimos. Vivimos en piloto automático. Corremos de una tarea a otra. Llenamos cada momento con ruido: redes sociales, trabajo, series, distracciones constantes.
          </p>
          <p>
            No es que no sientas nada. Es que no te detienes lo suficiente para notarlo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">9. Estás procesando otras emociones primero</h3>
          <p>
            A veces la rabia, la culpa o la confusión ocupan tanto espacio que no dejan lugar para la tristeza. Cuando la ira se convierte en la emoción dominante, puede actuar como una barrera que dificulta el acceso a la tristeza.
          </p>
          <p>
            Esto no significa que la tristeza no esté ahí. Solo que está esperando su turno detrás de otras emociones que necesitan salir primero.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">10. Simplemente tienes otra forma de expresar tus emociones</h3>
          <p>
            No todo el mundo procesa el dolor de la misma manera. Y eso está bien. Hay personas que lloran. Hay personas que escriben. Hay personas que hablan. Hay personas que necesitan estar solas. Hay personas que procesan moviéndose, creando, trabajando con las manos.
          </p>
          <p>
            No necesitas forzosamente llorar porque así lo hace la mayoría. Tu forma de expresar el dolor es válida aunque no se parezca a la de otros.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Formas de expresar el duelo sin lágrimas</h2>

          <p>Si las lágrimas no llegan, eso no significa que no puedas procesar tu dolor. Hay muchas otras formas de hacerlo:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Escribe.</strong> Un diario, cartas que nunca enviarás, notas en tu teléfono. Escribir es una forma de poner afuera lo que llevas dentro.</li>
            <li><strong>Mueve el cuerpo.</strong> El duelo se queda en el cuerpo. Caminar, bailar, hacer ejercicio, estirar... todo esto ayuda a liberar tensión acumulada.</li>
            <li><strong>Habla.</strong> Con alguien de confianza, con un profesional, con un grupo de apoyo. A veces, las palabras hacen el trabajo que las lágrimas no pueden hacer.</li>
            <li><strong>Crea.</strong> Pinta, cocina, arma algo con las manos. La creatividad es una forma de procesar emociones que a veces no tienen palabras.</li>
            <li><strong>Respira.</strong> Prácticas como la meditación o ejercicios de respiración pueden ayudarte a reconectar con lo que sientes, sin forzar nada.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo buscar ayuda profesional</h2>

          <p>El duelo sin lágrimas es normal. Pero hay algunas señales que indican que podría ser bueno hablar con un profesional:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Si llevas mucho tiempo sintiéndote completamente desconectado de tus emociones (no solo la tristeza, sino todas).</li>
            <li>Si además de no llorar, sientes que &quot;no sientes nada&quot; —como si vivieras en automático.</li>
            <li>Si esto está afectando tu vida diaria: tu trabajo, tus relaciones, tu capacidad de funcionar.</li>
            <li>Si aparecen pensamientos de hacerte daño o de que la vida no tiene sentido.</li>
          </ul>

          <p>Un psicólogo especializado puede ayudarte a explorar qué está pasando y a encontrar formas saludables de procesar tu pérdida.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Esto no te hace menos humano</h2>

          <p>
            No llorar no significa que no amas. No llorar no significa que eres frío. No llorar no significa que hay algo mal en ti.
          </p>

          <p>
            El duelo es profundamente personal. Y tu forma de vivirlo es válida, aunque no se parezca a lo que ves en las películas o a lo que hacen los demás.
          </p>

          <p>
            Las lágrimas son <em>una</em> forma de expresar el dolor. Pero no son la única.
          </p>

          <p>
            Tu amor por esa persona no se mide en cuánto lloras. Se mide en cómo la recuerdas, en cómo honras su memoria, en cómo sigues adelante cargando su huella en tu corazón.
          </p>

          <p>
            Y si un día las lágrimas llegan —o si nunca llegan— está bien. Estás haciendo lo mejor que puedes. Y eso es suficiente.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que cada persona vive el duelo a su manera. Estoy aquí si necesitas acompañamiento.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que tu duelo te está sobrepasando, puedo acompañarte a encontrar formas de procesar tu dolor.
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
