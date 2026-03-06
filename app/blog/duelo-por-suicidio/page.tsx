'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloPorSuicidio() {
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
            Duelo por suicidio: el dolor de los que se quedan
          </h1>
          <p className="text-black/60 italic">Por Lourdes Perez | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-por-suicidio.jpeg"
            alt="Duelo por suicidio - El dolor de los que se quedan"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>Hay perdidas que rompen. Y luego esta esta.</p>

          <p>
            La muerte por suicidio deja a quienes se quedan en un lugar donde pocas personas saben llegar. Un lugar de preguntas sin respuesta. De culpa que no se va. De un dolor que no sabe como expresarse porque la sociedad tampoco sabe como recibirlo.
          </p>

          <p>
            Si estas leyendo esto porque perdiste a alguien por suicidio, quiero que sepas algo desde ahora: lo que sientes es valido. Y no estas solo, aunque a veces se sienta exactamente asi.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los que se quedan: los sobrevivientes</h2>

          <p>
            En el campo de la salud mental existe un termino para quienes han perdido a un ser querido por suicidio: <strong>sobrevivientes</strong>.
          </p>

          <p>
            No porque hayan sobrevivido a un intento propio. Sino porque sobrevivir a esta perdida es, en si mismo, un acto de resistencia.
          </p>

          <p>
            Cada ano, mas de 700,000 personas en el mundo mueren por suicidio. Y detras de cada una de esas muertes hay familias, parejas, hijos, padres, amigos, companeros de trabajo que quedan marcados para siempre.
          </p>

          <p>
            En Mexico, segun datos del INEGI, en 2024 se registraron 8,856 suicidios. Eso significa que miles de familias mexicanas estan atravesando este duelo en este momento.
          </p>

          <p>
            Pero las cifras no cuentan lo que realmente pasa. No cuentan las noches sin dormir. Las preguntas que dan vueltas en la cabeza. La culpa que pesa como una piedra en el pecho.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un duelo diferente a todos los demas</h2>

          <p>El duelo por suicidio no es como otros duelos.</p>

          <p>
            Cuando alguien muere por enfermedad, hay un proceso. Cuando alguien muere en un accidente, hay una explicacion externa. Pero cuando alguien decide terminar con su vida, los que quedan se enfrentan a algo que no pueden procesar de la misma manera.
          </p>

          <p>Hay confusion porque no se entiende que llevo a esa persona a tomar esa decision.</p>

          <p>Hay culpa porque aparece la pregunta inevitable: pude haber hecho algo para evitarlo?</p>

          <p>Hay verguenza porque el suicidio todavia carga un estigma social que hace dificil hablar de el abiertamente.</p>

          <p>Hay enojo hacia la persona que se fue, hacia uno mismo, hacia los demas, hacia el mundo.</p>

          <p>Y hay un silencio enorme porque muchas veces el entorno no sabe que decir, como actuar, como acompanar.</p>

          <p>Este duelo es diferente. Y necesita ser tratado de manera diferente.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las preguntas que no te dejan en paz</h2>

          <p>Si perdiste a alguien por suicidio, es probable que estas preguntas te persigan:</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">&quot;Por que lo hizo?&quot;</h3>
          <p>
            Es la primera pregunta. Y muchas veces no tiene una respuesta clara. El suicidio rara vez tiene una sola causa. Es el resultado de una acumulacion de factores: dolor emocional, desesperanza, a veces enfermedad mental, a veces circunstancias que se sintieron imposibles de manejar.
          </p>
          <p>
            La persona que decidio terminar con su vida no estaba pensando con claridad. Estaba atrapada en una vision de tunel donde no veia otra salida. Eso no significa que no te amara. Significa que su sufrimiento era mas grande de lo que podia soportar.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">&quot;Pude haberlo evitado?&quot;</h3>
          <p>Esta es la pregunta que mas duele. Y la que mas culpa genera.</p>
          <p>
            &quot;Si hubiera estado mas atento...&quot;<br />
            &quot;Si hubiera llamado ese dia...&quot;<br />
            &quot;Si hubiera dicho algo diferente...&quot;<br />
            &quot;Si hubiera visto las senales...&quot;
          </p>
          <p>Los &quot;y si...&quot; pueden ser interminables. Y cada uno es un golpe.</p>
          <p>
            Pero necesitas escuchar esto: <strong>no podias controlar la decision de otra persona</strong>. Hiciste lo mejor que pudiste con lo que sabias en ese momento. No tienes la capacidad de predecir el futuro ni de estar en la mente de otra persona.
          </p>
          <p>
            Muchas personas que mueren por suicidio no dan senales claras. O las dan, pero son tan sutiles que es casi imposible detectarlas. Incluso profesionales de salud mental entrenados para esto no siempre pueden evitar un suicidio.
          </p>
          <p>No es tu culpa. Por mas que tu mente insista en que si lo es.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">&quot;Debi haber visto las senales?&quot;</h3>
          <p>
            A veces si habia senales. A veces no. A veces las senales estaban ahi pero eran tan ambiguas que nadie podria haberlas interpretado correctamente.
          </p>
          <p>
            Nadie te enseno a detectar senales de suicidio. No es algo que se aprende en la escuela, en la familia, en ningun lado. Y aunque lo hubieras sabido, no significa que hubieras podido evitarlo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">&quot;Que van a pensar los demas?&quot;</h3>
          <p>
            El estigma es real. Todavia hay quienes juzgan a las familias de personas que murieron por suicidio. Todavia hay miradas incomodas, preguntas invasivas, comentarios torpes.
          </p>
          <p>
            Esto no deberia ser asi. Pero lo es. Y parte del dolor de este duelo es tener que cargar tambien con la verguenza que la sociedad impone.
          </p>
          <p>No tienes que dar explicaciones a nadie. No tienes que contar mas de lo que quieras contar. Tu dolor es tuyo y merece respeto.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La culpa: la companera mas pesada</h2>

          <p>De todas las emociones que aparecen en este duelo, la culpa suele ser la mas persistente.</p>

          <p>
            &quot;Debi haber hecho mas.&quot;<br />
            &quot;Debi haberme dado cuenta.&quot;<br />
            &quot;Si no hubieramos discutido...&quot;<br />
            &quot;Si le hubiera dicho que lo amaba mas seguido...&quot;
          </p>

          <p>
            La culpa aparece porque el cerebro necesita encontrar una explicacion. Y la explicacion mas facil es culparse a uno mismo. Porque si fue tu culpa, entonces tenias control. Y tener control significa que podrias haberlo evitado.
          </p>

          <p>
            Pero la realidad es que no tenias ese control. La decision de terminar con la propia vida es profundamente personal. Es el resultado de un sufrimiento interno que muchas veces ni siquiera la persona misma entendia completamente.
          </p>

          <p>Cargar con la culpa no va a traer a esa persona de vuelta. Solo va a destruirte a ti.</p>

          <p>
            No estoy diciendo que dejes de sentir culpa de un dia para otro. Eso seria imposible. Pero si te digo que la culpa no es la verdad. Es una emocion que necesita ser trabajada, no alimentada.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El enojo que nadie quiere admitir</h2>

          <p>Hay algo que muchos sobrevivientes sienten pero que les da verguenza admitir: enojo hacia la persona que se fue.</p>

          <p>
            &quot;Como pudo hacerme esto?&quot;<br />
            &quot;No penso en nosotros?&quot;<br />
            &quot;Me abandono.&quot;<br />
            &quot;Fue egoista.&quot;
          </p>

          <p>
            Es dificil admitir que estas enojado con alguien que sufrio tanto que decidio terminar con su vida. Parece cruel. Parece injusto.
          </p>

          <p>Pero el enojo es normal. Es parte del duelo. Y necesita salir.</p>

          <p>
            Puedes estar enojado y al mismo tiempo amar profundamente a esa persona. Puedes sentir rabia y tambien compasion. Las emociones no son blanco y negro. Y en este duelo, menos que en ningun otro.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que no ayuda (aunque venga con buenas intenciones)</h2>

          <p>
            Cuando alguien muere por suicidio, el entorno muchas veces no sabe como reaccionar. Y en ese no saber, a veces dicen cosas que duelen mas de lo que ayudan:
          </p>

          <ul>
            <li>&quot;Tu debias saberlo...&quot;</li>
            <li>&quot;Habian discutido?&quot;</li>
            <li>&quot;Por que no lo llevaron al psicologo?&quot;</li>
            <li>&quot;Es que el/ella siempre fue muy dificil...&quot;</li>
          </ul>

          <p>
            Estas preguntas y comentarios, aunque no tengan mala intencion, aumentan la culpa y el dolor de quienes ya estan sufriendo demasiado.
          </p>

          <p>
            Si alguien de tu entorno esta atravesando este duelo, lo mejor que puedes hacer es estar presente sin juzgar. Escuchar sin intentar dar explicaciones. Acompanar sin presionar.
          </p>

          <p>
            Y si tu eres quien esta atravesando este duelo, date permiso de alejarte de las personas que te hacen sentir peor. Tu energia es limitada. Usala en quienes realmente te acompanan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo por suicidio en la familia</h2>

          <p>Cuando alguien de la familia muere por suicidio, todo el sistema familiar se desestabiliza.</p>

          <p>
            Cada miembro puede procesar el duelo de manera diferente. Unos quieren hablar, otros prefieren el silencio. Unos lloran, otros se enojan. Unos buscan explicaciones, otros solo quieren olvidar.
          </p>

          <p>
            Estas diferencias pueden generar conflictos. Puede haber reproches velados o explicitos. Puede haber distanciamiento.
          </p>

          <p>
            Lo mas importante es recordar que cada persona tiene su propio ritmo y su propia forma de procesar el dolor. No hay una manera correcta de atravesar este duelo.
          </p>

          <p>
            Tambien es importante saber que los familiares de personas que murieron por suicidio tienen un mayor riesgo de tener pensamientos suicidas ellos mismos. Esto no es para asustarte, sino para que estes atento. Si en algun momento sientes que el dolor es demasiado, busca ayuda.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando buscar ayuda profesional</h2>

          <p>
            El duelo por suicidio es uno de los mas complejos y prolongados que existen. Buscar ayuda profesional no es signo de debilidad. Es signo de que te tomas en serio tu bienestar.
          </p>

          <p>Considera buscar apoyo si:</p>

          <ul>
            <li>La culpa no disminuye con el tiempo, sino que aumenta.</li>
            <li>Tienes pensamientos recurrentes de que podrias haber evitado la muerte.</li>
            <li>Te sientes completamente aislado y no puedes hablar con nadie sobre lo que sientes.</li>
            <li>Has empezado a tener pensamientos de hacerte dano o de que la vida no tiene sentido.</li>
            <li>El dolor esta afectando seriamente tu capacidad de funcionar: trabajo, relaciones, cuidado personal.</li>
            <li>Han pasado meses y sientes que no avanzas en absoluto.</li>
          </ul>

          <p>
            Un psicologo especializado en duelo puede ayudarte a procesar las emociones, trabajar la culpa y encontrar formas de seguir adelante sin dejar de honrar la memoria de quien se fue.
          </p>

          <p>
            Tambien existen grupos de apoyo especificos para sobrevivientes de suicidio. Conectar con personas que han vivido lo mismo puede ser muy sanador. Porque ahi nadie te juzga. Todos entienden.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que necesitas escuchar</h2>

          <p>Se que probablemente has escuchado muchas cosas. Algunas utiles, muchas no.</p>

          <p>Pero hay ciertas verdades que necesitas recordar:</p>

          <p>
            <strong>No es tu culpa.</strong> No importa cuantas veces tu mente te diga lo contrario. No pudiste evitarlo. Hiciste lo que pudiste.
          </p>

          <p>
            <strong>No tienes que tener todas las respuestas.</strong> Tal vez nunca entiendas completamente por que paso. Y eso esta bien. No necesitas entenderlo para seguir adelante.
          </p>

          <p>
            <strong>El enojo es valido.</strong> La tristeza es valida. La confusion es valida. Todo lo que sientes es valido.
          </p>

          <p>
            <strong>Puedes honrar su memoria y al mismo tiempo vivir tu vida.</strong> Seguir adelante no es traicionar a quien se fue. Es cuidarte a ti.
          </p>

          <p>
            <strong>El dolor no va a desaparecer, pero va a cambiar.</strong> Con el tiempo, aprenderas a cargar con el de otra manera. No sera tan pesado. No sera tan constante.
          </p>

          <p><strong>No estas solo.</strong> Aunque a veces se sienta asi.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Para quienes acompanan</h2>

          <p>
            Si estas leyendo esto porque alguien cercano a ti perdio a un ser querido por suicidio, hay algunas cosas que puedes hacer:
          </p>

          <p><strong>Esta presente.</strong> No necesitas decir nada brillante. Solo estar ahi es suficiente.</p>

          <p><strong>No juzgues.</strong> Ni a la persona que murio, ni a los que quedaron. No sabes lo que vivieron.</p>

          <p><strong>No busques explicaciones.</strong> Frases como &quot;seguro estaba deprimido&quot; o &quot;algo debio pasar&quot; no ayudan. Solo escucha.</p>

          <p><strong>Permite el silencio.</strong> A veces no hay palabras. Y eso esta bien.</p>

          <p><strong>Sigue presente despues del funeral.</strong> El duelo no termina cuando termina el entierro. Sigue llamando, sigue preguntando como esta, sigue ofreciendo tu compania semanas y meses despues.</p>

          <p><strong>Cuida tus palabras.</strong> Evita preguntar &quot;por que lo hizo?&quot; o &quot;no vieron las senales?&quot;. Esas preguntas solo aumentan la culpa.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Honrar la memoria sin quedarse atrapado</h2>

          <p>
            Llega un momento en el duelo en el que tienes que tomar una decision: quedarte atrapado en el dolor o encontrar una forma de seguir adelante honrando la memoria de quien se fue.
          </p>

          <p>Esto no significa olvidar. No significa dejar de extranar. No significa que el dolor desaparezca.</p>

          <p>
            Significa permitirte volver a vivir. Permitirte volver a sentir alegria sin culpa. Permitirte construir una vida que tenga sentido, aunque esa persona ya no este en ella.
          </p>

          <p>
            Algunas personas encuentran sentido ayudando a otros que atraviesan lo mismo. Otras encuentran consuelo en rituales de memoria. Otras simplemente siguen adelante un dia a la vez.
          </p>

          <p>No hay una forma correcta de hacerlo. Solo la tuya.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No estas solo</h2>

          <p>Si estas atravesando este duelo, te digo una ultima cosa:</p>

          <p>
            No tienes que cargar esto solo. No tienes que tener todas las respuestas. No tienes que sentirte mejor manana, ni la proxima semana, ni el proximo mes.
          </p>

          <p>
            Pero si tienes que saber que hay personas que entienden. Que han caminado este mismo camino. Que saben lo que se siente.
          </p>

          <p>
            Y que al final, aunque el dolor nunca desaparezca del todo, se puede seguir viviendo. Se puede encontrar paz. Se puede volver a respirar sin que duela tanto.
          </p>

          <p>No hoy. Tal vez no manana. Pero algun dia.</p>

          <p className="italic text-black/60 mt-8 p-4 bg-gray-100 rounded-lg">
            Si en algun momento sientes que el dolor es demasiado, busca ayuda. No tienes que atravesar esto solo. En Mexico puedes llamar a la Linea de la Vida: 800 911 2000, disponible las 24 horas.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estas atravesando un duelo por suicidio y necesitas acompanamiento, estoy aqui para ti.
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
