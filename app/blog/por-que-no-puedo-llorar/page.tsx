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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            ¿Por que no puedo llorar? El duelo seco y sin lagrimas
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/porque-no-puedo-llorar.webp"
            alt="Por que no puedo llorar en el duelo."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Hay una pregunta que aparece una y otra vez en las personas que atraviesan una perdida: <em>&quot;¿Por que no puedo llorar?&quot;</em>
          </p>

          <p>
            Lo primero que quiero decirte es esto: no estas roto. No eres frio. No amas menos.
          </p>

          <p>
            Muchas personas llegan a sentirse profundamente culpables porque las lagrimas simplemente no aparecen. Ven a otros llorar en el funeral, observan como su familia se desahoga, y ellos... nada. Un vacio seco que no entienden. Y entonces empieza la pregunta mas dolorosa de todas: <em>&quot;¿Que me pasa?&quot;</em>
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El llanto no es la unica forma de sentir</h2>

          <p>
            Hemos crecido con la idea de que el duelo se mide en lagrimas. Mientras mas lloras, mas duele. Mientras mas duele, mas amas. Pero eso no es verdad.
          </p>

          <p>
            El duelo tiene mil rostros. Y no todos incluyen lagrimas.
          </p>

          <p>
            Algunas personas experimentan lo que se conoce como <strong>bloqueo emocional</strong>. Esto sucede cuando el cerebro, ante una perdida tan grande, activa una especie de mecanismo de proteccion. Ante una perdida significativa, el cerebro puede entrar en un estado de &quot;entumecimiento emocional&quot; —una forma de shock que permite a la persona seguir funcionando mientras procesa lo que ha sucedido. Es como si tu mente dijera: <em>&quot;Esto es demasiado. Voy a dosificarlo.&quot;</em>
          </p>

          <p>
            Pero tambien es importante reconocer algo: <strong>no todas las personas necesitan llorar para procesar su dolor</strong>. Cada quien tiene su propia forma de expresar las emociones. Hay quienes lloran, hay quienes escriben, hay quienes necesitan moverse, hay quienes procesan en silencio. Ninguna forma es mejor que otra.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Que puede estar pasando contigo?</h2>

          <p>No hay una sola razon por la que no puedes llorar. Estas son algunas de las mas comunes:</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">1. Estas en shock</h3>
          <p>
            El shock es una de las primeras respuestas al duelo. Tu mente todavia no ha logrado procesar completamente lo que paso. Es como si vivieras la realidad de la perdida, pero una parte de ti todavia no se lo cree del todo. La negacion actua como un mecanismo de defensa temporal para amortiguar el impacto emocional. Esto es normal. Es temporal. Y no significa que no sientas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">2. Te da verguenza</h3>
          <p>
            Hay algo dentro de ti que siente que llorar esta mal. Que es vergonzoso. Que si alguien te ve llorar, van a pensar que eres debil, dramatico o exagerado.
          </p>
          <p>
            Esta verguenza puede ser tan fuerte que bloquea las lagrimas incluso cuando estas solo. Porque ya no se trata de que otros te vean. Se trata de que tu mismo te juzgas por necesitar llorar. La verguenza aprendida funciona como un candado interno.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">3. Estas tratando de ser fuerte</h3>
          <p>
            &quot;Tengo que mantenerme entero.&quot; &quot;Si me derrumbo, ¿quien va a sostener a los demas?&quot; &quot;No puedo darme el lujo de caer ahora.&quot;
          </p>
          <p>
            Muchas personas bloquean sus lagrimas porque sienten que tienen que ser el pilar. Pero ser fuerte no significa no sentir. Contener todo el tiempo tiene un costo en el cuerpo y en la mente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">4. Puede ser un tema cultural</h3>
          <p>
            Desde ninos, a muchas personas se les enseno que llorar es de debiles. Frases como &quot;los hombres no lloran&quot;, &quot;no seas lloron&quot; o &quot;tienes que aguantar&quot; se repiten generacion tras generacion.
          </p>
          <p>
            El resultado: personas que no saben como conectar con sus emociones. Esto no es solo un tema de hombres. Muchas mujeres tambien crecieron en familias donde llorar estaba mal visto. La cultura en la que creciste moldeo tu relacion con las lagrimas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">5. Tu tipo de personalidad</h3>
          <p>
            Hay personas que naturalmente procesan el mundo mas desde la logica que desde la emocion. Si eres de los que analiza todo, que busca explicaciones, que prefiere pensar a sentir, es posible que tu mente haya desarrollado el habito de racionalizar las emociones en lugar de vivirlas.
          </p>
          <p>
            Las personalidades mas racionales pueden tener mas dificultad para acceder al llanto. No porque no sientan, sino porque su mente procesa las emociones de otra manera.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">6. Tu estilo de apego</h3>
          <p>
            La forma en que te relacionaste con tus cuidadores en la infancia dejo una huella en como manejas las emociones hoy.
          </p>
          <p>
            <strong>Apego evitativo:</strong> Si creciste con padres que no respondian a tus necesidades emocionales, que te decian &quot;deja de llorar&quot; cuando estabas triste, probablemente aprendiste que expresar emociones no era seguro. Los ninos con este tipo de apego aprenden temprano que llorar no trae consuelo, sino rechazo.
          </p>
          <p>
            <strong>Apego desorganizado:</strong> Si tus cuidadores eran impredecibles —a veces carinosos, a veces distantes o incluso aterradores— tu sistema emocional puede haberse confundido. Las emociones se sienten caoticas, asi que es mas facil desconectarse completamente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">7. Experiencias traumaticas</h3>
          <p>
            El trauma cambia la forma en que el cerebro procesa las emociones. Cuando vivimos algo que nos sobrepasa —abuso, violencia, perdidas traumaticas, accidentes— el sistema nervioso puede activar un mecanismo de defensa: la disociacion.
          </p>
          <p>
            Es como si una parte de ti se separara del resto. Sabes que algo paso, pero no lo sientes. Cuando hay trauma no procesado, el sistema se desconecta de las emociones para protegerse.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">8. Tu mente esta distraida o en modo automatico</h3>
          <p>
            A veces no podemos llorar porque literalmente no estamos prestando atencion a lo que sentimos. Vivimos en piloto automatico. Corremos de una tarea a otra. Llenamos cada momento con ruido: redes sociales, trabajo, series, distracciones constantes.
          </p>
          <p>
            No es que no sientas nada. Es que no te detienes lo suficiente para notarlo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">9. Estas procesando otras emociones primero</h3>
          <p>
            A veces la rabia, la culpa o la confusion ocupan tanto espacio que no dejan lugar para la tristeza. Cuando la ira se convierte en la emocion dominante, puede actuar como una barrera que dificulta el acceso a la tristeza.
          </p>
          <p>
            Esto no significa que la tristeza no este ahi. Solo que esta esperando su turno detras de otras emociones que necesitan salir primero.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">10. Simplemente tienes otra forma de expresar tus emociones</h3>
          <p>
            No todo el mundo procesa el dolor de la misma manera. Y eso esta bien. Hay personas que lloran. Hay personas que escriben. Hay personas que hablan. Hay personas que necesitan estar solas. Hay personas que procesan moviendose, creando, trabajando con las manos.
          </p>
          <p>
            No necesitas forzosamente llorar porque asi lo hace la mayoria. Tu forma de expresar el dolor es valida aunque no se parezca a la de otros.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Formas de expresar el duelo sin lagrimas</h2>

          <p>Si las lagrimas no llegan, eso no significa que no puedas procesar tu dolor. Hay muchas otras formas de hacerlo:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Escribe.</strong> Un diario, cartas que nunca enviaras, notas en tu telefono. Escribir es una forma de poner afuera lo que llevas dentro.</li>
            <li><strong>Mueve el cuerpo.</strong> El duelo se queda en el cuerpo. Caminar, bailar, hacer ejercicio, estirar... todo esto ayuda a liberar tension acumulada.</li>
            <li><strong>Habla.</strong> Con alguien de confianza, con un profesional, con un grupo de apoyo. A veces, las palabras hacen el trabajo que las lagrimas no pueden hacer.</li>
            <li><strong>Crea.</strong> Pinta, cocina, arma algo con las manos. La creatividad es una forma de procesar emociones que a veces no tienen palabras.</li>
            <li><strong>Respira.</strong> Practicas como la meditacion o ejercicios de respiracion pueden ayudarte a reconectar con lo que sientes, sin forzar nada.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando buscar ayuda profesional</h2>

          <p>El duelo sin lagrimas es normal. Pero hay algunas senales que indican que podria ser bueno hablar con un profesional:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Si llevas mucho tiempo sintiendote completamente desconectado de tus emociones (no solo la tristeza, sino todas).</li>
            <li>Si ademas de no llorar, sientes que &quot;no sientes nada&quot; —como si vivieras en automatico.</li>
            <li>Si esto esta afectando tu vida diaria: tu trabajo, tus relaciones, tu capacidad de funcionar.</li>
            <li>Si aparecen pensamientos de hacerte dano o de que la vida no tiene sentido.</li>
          </ul>

          <p>Un psicologo especializado puede ayudarte a explorar que esta pasando y a encontrar formas saludables de procesar tu perdida.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Esto no te hace menos humano</h2>

          <p>
            No llorar no significa que no amas. No llorar no significa que eres frio. No llorar no significa que hay algo mal en ti.
          </p>

          <p>
            El duelo es profundamente personal. Y tu forma de vivirlo es valida, aunque no se parezca a lo que ves en las peliculas o a lo que hacen los demas.
          </p>

          <p>
            Las lagrimas son <em>una</em> forma de expresar el dolor. Pero no son la unica.
          </p>

          <p>
            Tu amor por esa persona no se mide en cuanto lloras. Se mide en como la recuerdas, en como honras su memoria, en como sigues adelante cargando su huella en tu corazon.
          </p>

          <p>
            Y si un dia las lagrimas llegan —o si nunca llegan— esta bien. Estas haciendo lo mejor que puedes. Y eso es suficiente.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que cada persona vive el duelo a su manera. Estoy aqui si necesitas acompanamiento.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que tu duelo te esta sobrepasando, puedo acompanarte a encontrar formas de procesar tu dolor.
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
