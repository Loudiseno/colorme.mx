'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DueloPerinatallPage() {
  return (
    <article className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <header className="mb-12">
          <span className="text-sm text-gray-500 uppercase tracking-wider">
            Tanatologia
          </span>
          <h1 className="text-4xl md:text-5xl text-black mt-2 mb-4">
            Duelo perinatal: el dolor que nadie ve
          </h1>
          <p className="text-black/60">
            Por Lourdes Carrillo · Tanatologa y Arteterapeuta
          </p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-perinatal.webp"
            alt="Duelo perinatal - Acompanamiento en la perdida de un bebe"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-black/80 italic mb-8">
            Para las madres y padres que perdieron a un bebe.
          </p>

          <p>Tu bebe existio.</p>

          <p>No importa si fueron semanas o meses de embarazo. No importa si nunca lo viste respirar fuera de tu cuerpo. No importa que otros no lo hayan conocido.</p>

          <p>Tu bebe existio. Y tu dolor es real.</p>

          <p>El duelo perinatal es uno de los mas silenciados y minimizados. Porque la sociedad no siempre sabe como hablar de bebes que mueren antes de vivir. Porque la gente no sabe que decir, entonces a veces no dice nada. Porque te dicen frases que intentan consolar pero terminan lastimando.</p>

          <p>Este articulo es para ti. Para validar tu experiencia, reconocer tu dolor, y ofrecerte algunas herramientas para atravesar este proceso.</p>

          <h2>¿Que es el duelo perinatal?</h2>

          <p>El duelo perinatal es el proceso de duelo que ocurre por la perdida de un bebe durante el embarazo, el parto, o los primeros dias de vida.</p>

          <p>Incluye:</p>
          <ul>
            <li><strong>Aborto espontaneo</strong> (perdida temprana del embarazo).</li>
            <li><strong>Muerte fetal intrauterina</strong> (perdida mas avanzada en el embarazo).</li>
            <li><strong>Muerte durante el parto.</strong></li>
            <li><strong>Muerte neonatal</strong> (en los primeros dias de vida).</li>
            <li><strong>Interrupcion del embarazo por razones medicas.</strong></li>
          </ul>

          <p>Todas estas perdidas son duelos legitimos. Todas duelen. Todas merecen ser reconocidas.</p>

          <h2>Por que este duelo es tan dificil</h2>

          <h3>Perdiste un futuro completo</h3>

          <p>No solo perdiste a tu bebe. Perdiste todo lo que imaginabas: la primera sonrisa, los primeros pasos, los cumpleanos, la persona que hubiera sido.</p>

          <p>Estas en duelo por alguien que nunca conociste de la manera tradicional y al mismo tiempo conocias intimamente. Vivia dentro de ti.</p>

          <h3>La sociedad puede minimizar tu dolor</h3>

          <p>Frases bien intencionadas pero dolorosas son comunes en este tipo de perdida. Te hacen sentir que no tienes &quot;derecho&quot; a tu duelo.</p>

          <p>Pero si lo tienes.</p>

          <h3>Puede faltar reconocimiento social</h3>

          <p>A veces no hay funeral. No hay licencia de duelo. No hay las mismas muestras de apoyo que con otras perdidas. El mundo puede seguir como si nada hubiera pasado.</p>

          <p>Mientras tanto, tu cuerpo sigue procesando el embarazo, y tu tienes que funcionar en medio del dolor.</p>

          <h3>El trauma fisico se suma al emocional</h3>

          <p>Si pasaste por procedimientos medicos, tu cuerpo tambien esta en recuperacion. El dolor fisico y el emocional se entrelazan.</p>

          <h2>Lo que puedes estar sintiendo</h2>

          <p><strong>Tristeza profunda.</strong> Un vacio que es dificil de explicar.</p>

          <p><strong>Culpa.</strong> &quot;¿Hice algo mal? ¿Mi cuerpo fallo?&quot;</p>

          <p><strong>Enojo.</strong> Con la situacion, con tu cuerpo, con la injusticia de todo esto.</p>

          <p><strong>Envidia.</strong> Ver a otras madres con sus bebes puede ser dificil.</p>

          <p><strong>Aislamiento.</strong> No querer ver a nadie, no querer explicar.</p>

          <p><strong>Ansiedad.</strong> Miedo a que vuelva a pasar. Miedo a intentarlo de nuevo.</p>

          <p><strong>Sensacion de vacio fisico.</strong> Tu cuerpo que estaba preparandose para otra cosa.</p>

          <p>Todas estas emociones pueden coexistir. Puedes sentir varias en el mismo dia. El duelo perinatal es complejo.</p>

          <h2>Lo que tu pareja puede estar sintiendo</h2>

          <p>Si tienes pareja, es importante entender que ambos estan en duelo, pero probablemente de maneras diferentes.</p>

          <p>La persona que estaba embarazada tiene el componente fisico anadido. Tenia una conexion corporal con el bebe que la otra persona no tuvo de la misma manera.</p>

          <p>La pareja puede sentir impotencia, presion de &quot;ser fuerte&quot;, y su propio duelo que no siempre sabe como expresar.</p>

          <p>Las parejas procesan el duelo a ritmos diferentes. Esto puede crear tension si no se habla abiertamente. Si sienten que no pueden comunicarse, buscar apoyo profesional juntos puede ayudar.</p>

          <h2>Frases que es mejor evitar</h2>

          <p>Estas son frases que, aunque se dicen con buena intencion, pueden lastimar:</p>

          <p><em>&quot;Eres joven, puedes tener mas hijos.&quot;</em> — Un hijo no reemplaza a otro.</p>

          <p><em>&quot;Al menos no lo conociste.&quot;</em> — Lo conoci. Vivio dentro de mi.</p>

          <p><em>&quot;Algo habra estado mal, es lo mejor.&quot;</em> — No me digas que perder a mi bebe es &quot;lo mejor&quot;.</p>

          <p><em>&quot;Por algo pasan las cosas.&quot;</em> — No hay razon que haga esto menos doloroso.</p>

          <p><em>&quot;Ya deberias estar mejor.&quot;</em> — El duelo no tiene fecha limite.</p>

          <p>Si alguien te dice estas cosas, puedes establecer un limite gentil si lo necesitas.</p>

          <h2>Lo que si puede ayudar</h2>

          <h3>Nombrar a tu bebe</h3>
          <p>Si quieres darle un nombre, hazlo. Tener un nombre hace que la perdida sea mas concreta. Ese nombre te da algo a que aferrarte.</p>

          <h3>Crear memorias tangibles</h3>
          <p>Aunque haya poco tiempo fisico compartido, puedes crear objetos de recuerdo: una caja con pruebas de embarazo, ultrasonidos, cartas. Una pieza de joyeria. Un arbol o planta en su honor.</p>

          <h3>Permitir el ritual</h3>
          <p>Aunque no haya funeral tradicional, puedes crear tu propia forma de despedida: una ceremonia intima, encender una vela en fechas significativas, visitar un lugar especial.</p>

          <h3>Buscar comunidad</h3>
          <p>Hay grupos de apoyo especificos para duelo perinatal. Conectar con otras madres y padres que han vivido lo mismo puede ser muy sanador.</p>
          <p>Saber que no estas sola, que otros entienden de verdad, marca una diferencia.</p>

          <h3>Expresion creativa</h3>
          <p>El arte puede ayudarte a procesar lo que las palabras no alcanzan: pintar, hacer collages, crear algo en honor a tu bebe.</p>

          <h3>Apoyo profesional</h3>
          <p>Busca un profesional con experiencia en duelo perinatal. No cualquier terapeuta entiende la especificidad de esta perdida.</p>

          <h2>El cuerpo tambien hace duelo</h2>

          <p>Tu cuerpo estaba preparandose para nutrir una vida. Ahora tiene que readaptarse.</p>

          <p>Puedes experimentar cambios hormonales, fatiga, alteraciones del sueno, y otras manifestaciones fisicas.</p>

          <p>Date tiempo para recuperarte fisicamente. No te exijas volver a la normalidad rapidamente. Tu cuerpo tambien necesita procesar.</p>

          <h2>¿Y si tienes otros hijos?</h2>

          <p>Si tienes otros hijos, puedes sentir:</p>
          <ul>
            <li>Dificultad para estar presente para ellos.</li>
            <li>Presion de &quot;seguir adelante&quot; por ellos.</li>
          </ul>

          <p>Los ninos pueden participar en el duelo de maneras apropiadas para su edad si tu lo decides. Puedes explicarles lo que paso en terminos que puedan entender e incluirlos en rituales de recuerdo si lo deseas.</p>

          <p>Cuidarte a ti no significa descuidarlos. Pero no tienes que fingir que estas bien cuando no lo estas.</p>

          <h2>¿Intentarlo de nuevo?</h2>

          <p>Esta pregunta puede generar emociones complejas:</p>
          <ul>
            <li>Miedo a que vuelva a pasar.</li>
            <li>Sensaciones dificiles sobre &quot;reemplazar&quot; al bebe perdido.</li>
            <li>Presion externa.</li>
            <li>Ansiedad ante la posibilidad de un nuevo embarazo.</li>
          </ul>

          <p>No hay respuesta correcta. Algunas personas quieren intentarlo pronto. Otras necesitan tiempo. Otras deciden no intentarlo mas.</p>

          <p>Todas las opciones son validas.</p>

          <p>Si decides intentar un nuevo embarazo, es normal que venga acompanado de ansiedad. Un embarazo despues de perdida tiene sus propios desafios emocionales.</p>

          <h2>Cuando buscar ayuda profesional</h2>

          <p>Considera buscar apoyo especializado si:</p>
          <ul>
            <li>Sientes que no puedes funcionar despues de varias semanas.</li>
            <li>Tienes pensamientos de hacerte dano.</li>
            <li>No puedes dejar de culparte.</li>
            <li>El dolor no muestra ninguna mejoria.</li>
            <li>Estas usando sustancias para aliviar el dolor.</li>
            <li>Tu relacion de pareja esta en crisis.</li>
          </ul>

          <p>El duelo perinatal complicado es real y es tratable.</p>

          <h2>Un mensaje para ti</h2>

          <p>Tu bebe existio. Aunque el mundo no lo conocio, tu si. Aunque no hay fotos de cumpleanos, hay latidos que escuchaste. Aunque no hay una tumba tradicional que visitar, hay un espacio en tu corazon que siempre sera suyo.</p>

          <p>No tienes que &quot;superarlo&quot;. No tienes que minimizar tu dolor porque otros no lo entienden.</p>

          <p>Puedes llorar. Puedes nombrarlo. Puedes honrarlo. Puedes recordarlo siempre.</p>

          <p>Porque fuiste madre o padre. Aunque sea por poco tiempo. Aunque el mundo no lo reconozca de la misma manera.</p>

          <p>Lo fuiste.</p>

          <p className="text-xl italic mt-12">
            Tu bebe no esta aqui de la manera que esperabas, pero estuvo aqui. Y eso cuenta. Eso siempre contara.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/20 rounded-2xl">
          <h3 className="text-2xl text-black mb-4">¿Necesitas acompanamiento?</h3>
          <p className="text-black/70 mb-6">
            El duelo perinatal merece un espacio seguro. Puedo acompanarte en este proceso.
          </p>
          <a
            href="https://calendly.com/colormemx/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-colors"
          >
            Agenda una sesion de orientacion
          </a>
        </div>
      </div>
    </article>
  )
}
