'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloArteterapiaNinos() {
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
            Arteterapia para Niños: Guía por Edades de 3 a 12 Años
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/arteterapia-ninos.webp"
            alt="Arteterapia para niños - Expresión emocional a través del arte"
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
            La <strong>arteterapia para niños</strong> es una herramienta poderosa que les permite expresar lo que sienten cuando las palabras no alcanzan. Pintar, modelar, dibujar o crear collages se convierte en un lenguaje propio donde pueden mostrar su mundo interno de manera natural. A diferencia de los adultos, los niños no necesitan &quot;aprender&quot; a crear: ya lo hacen de forma instintiva. Lo que necesitan es un espacio seguro donde esa creatividad sea respetada y acompañada.
          </p>

          <p>
            En este artículo te comparto cómo funciona la arteterapia según la edad de tu hijo, qué actividades son más adecuadas para cada etapa y cómo puede beneficiarle en su desarrollo emocional.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Por qué funciona la arteterapia en niños?</h2>

          <p>
            Los niños no siempre pueden decir con palabras lo que les pasa. A veces ni siquiera saben exactamente qué sienten. Pero cuando les das un papel y colores, o plastilina, o materiales para construir algo, pueden mostrar lo que está dentro de ellos sin necesidad de explicarlo verbalmente.
          </p>

          <p>La arteterapia funciona porque:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Es su lenguaje natural.</strong> El juego y la creación son las formas principales de expresión en la infancia.</li>
            <li><strong>No hay forma correcta o incorrecta de hacerlo.</strong> No se evalúa el resultado estético, lo que elimina la presión de &quot;hacerlo bien&quot;.</li>
            <li><strong>Permite externalizar emociones difíciles.</strong> Miedos, enojos, tristezas o confusiones pueden tomar forma en una imagen o un objeto, lo que ayuda a procesarlos.</li>
            <li><strong>El proceso importa más que el producto.</strong> Lo terapéutico está en crear, no en lo que queda al final.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Beneficios observados en niños que participan en arteterapia</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mayor capacidad para identificar y expresar emociones.</li>
            <li>Reducción de ansiedad y estrés.</li>
            <li>Mejora en la autoestima y la confianza.</li>
            <li>Desarrollo de habilidades para resolver problemas.</li>
            <li>Mejor concentración y atención.</li>
            <li>Fortalecimiento de la motricidad fina.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Arteterapia de 3 a 5 años: el mundo del juego y los sentidos</h2>

          <p>
            En esta etapa, los niños están descubriendo el mundo a través de sus sentidos. Tocar, oler, ver, mezclar: todo es exploración. La arteterapia en preescolares se basa principalmente en experiencias sensoriales y en el juego libre.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Características de esta edad</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>El lenguaje verbal aún está en desarrollo, por lo que la expresión no verbal es fundamental.</li>
            <li>No distinguen claramente entre jugar y crear: para ellos es lo mismo.</li>
            <li>Necesitan mucha libertad y pocos límites técnicos.</li>
            <li>La atención es breve, por lo que las actividades deben ser cortas y variadas.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Actividades adecuadas para niños de 3 a 5 años</h3>

          <p><strong>Pintura con dedos y manos</strong></p>
          <p>Sumergir las manos en pintura y dejar huellas en el papel permite una conexión directa con el material. No hay pinceles de por medio, solo ellos y el color. Es una experiencia sensorial intensa que les ayuda a liberar tensiones.</p>

          <p><strong>Modelado con plastilina o masa</strong></p>
          <p>Amasar, aplastar, crear figuras y destruirlas para volver a empezar. Este proceso les permite experimentar el control sobre algo, lo cual puede ser muy reparador para niños que sienten que no controlan otras áreas de su vida.</p>

          <p><strong>Collage con materiales diversos</strong></p>
          <p>Pegar papeles de colores, telas, botones, hojas secas. La variedad de texturas estimula sus sentidos y les permite crear sin necesidad de &quot;saber dibujar&quot;.</p>

          <p><strong>Garabateo libre con música</strong></p>
          <p>Poner música y dejar que dibujen lo que la música les hace sentir. No hay instrucciones, solo movimiento y color.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que trabaja la arteterapia a esta edad</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Expresión emocional básica (alegría, enojo, miedo).</li>
            <li>Tolerancia a la frustración (cuando algo no sale como esperaban).</li>
            <li>Autonomía en la toma de decisiones (elegir colores, materiales).</li>
            <li>Habilidades sociales básicas (compartir materiales, respetar turnos).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Arteterapia de 6 a 8 años: explorando emociones con más detalle</h2>

          <p>
            Entre los 6 y los 8 años, los niños ya tienen mayor dominio del lenguaje y pueden empezar a reflexionar sobre lo que crean. La arteterapia en esta etapa combina la creación libre con momentos de conversación sobre las obras.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Características de esta edad</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Empiezan a ser más conscientes de cómo los perciben los demás.</li>
            <li>Pueden sentir frustración si su creación no se parece a lo que tenían en mente.</li>
            <li>Ya pueden mantener la atención por períodos más largos.</li>
            <li>Comienzan a entender conceptos como &quot;emoción&quot;, &quot;sentimiento&quot; o &quot;problema&quot;.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Actividades adecuadas para niños de 6 a 8 años</h3>

          <p><strong>Dibujo de emociones</strong></p>
          <p>Se les pide que dibujen cómo se sienten hoy, o cómo se sintieron en una situación específica. No tienen que explicarlo mientras dibujan; la conversación viene después, si quieren.</p>

          <p><strong>Autorretrato</strong></p>
          <p>Dibujarse a sí mismos puede revelar cómo se perciben. Un niño que se dibuja muy pequeño en una esquina del papel puede estar expresando algo diferente a uno que ocupa todo el espacio con colores brillantes.</p>

          <p><strong>Creación de títeres o marionetas</strong></p>
          <p>Construir un personaje con materiales reciclados y luego &quot;darle voz&quot; permite a los niños proyectar emociones en un objeto externo. A veces es más fácil que el títere hable sobre sus miedos que hablar directamente.</p>

          <p><strong>Mandalas para colorear</strong></p>
          <p>Los mandalas tienen un efecto calmante. Colorear formas repetitivas ayuda a reducir la ansiedad y a centrar la atención en el momento presente.</p>

          <p><strong>Cajas de emociones</strong></p>
          <p>Decorar una caja que represente una emoción específica (la caja de la tristeza, la caja de la alegría, la caja de los miedos) y decidir qué cosas simbólicas irían dentro.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que trabaja la arteterapia a esta edad</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identificación y vocabulario emocional.</li>
            <li>Autoconcepto y autoestima.</li>
            <li>Manejo de la frustración cuando las cosas no salen perfectas.</li>
            <li>Resolución de conflictos a través de la reflexión.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Arteterapia de 9 a 12 años: mayor complejidad y autoconocimiento</h2>

          <p>
            En esta etapa, los niños están desarrollando un pensamiento más complejo y una identidad más definida. La arteterapia puede abordar temas más profundos y utilizar técnicas que requieren mayor planificación.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Características de esta edad</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mayor capacidad de introspección y reflexión.</li>
            <li>Más conscientes de sus emociones y de las de otros.</li>
            <li>Pueden sentir vergüenza de su trabajo artístico si creen que no es &quot;bueno&quot;.</li>
            <li>Empiezan a enfrentar presiones sociales y académicas.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Actividades adecuadas para niños de 9 a 12 años</h3>

          <p><strong>Diario visual</strong></p>
          <p>Un cuaderno donde pueden expresar sus días a través de dibujos, collages, palabras sueltas o cualquier forma visual. No es para mostrarlo a nadie, es un espacio privado de expresión.</p>

          <p><strong>Escultura con materiales reciclados</strong></p>
          <p>Construir algo tridimensional a partir de objetos que ya no se usan les permite explorar la transformación: algo que parecía inservible puede convertirse en algo nuevo. Esto tiene un valor simbólico importante.</p>

          <p><strong>Mapas emocionales</strong></p>
          <p>Dibujar un mapa que represente su mundo emocional: ¿dónde están los lugares seguros? ¿Qué zonas son difíciles? ¿Hay puentes entre una emoción y otra?</p>

          <p><strong>Collage de identidad</strong></p>
          <p>Recortar imágenes de revistas que representen quiénes son, qué les gusta, qué sueñan, qué les da miedo. Crear un collage que hable de ellos sin necesidad de escribir ni hablar directamente.</p>

          <p><strong>Creación de historias ilustradas</strong></p>
          <p>Inventar una historia con personajes y situaciones que, aunque ficticias, pueden reflejar aspectos de su propia vida. Ilustrarla les permite procesar mientras crean.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que trabaja la arteterapia a esta edad</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Autoconocimiento más profundo.</li>
            <li>Gestión de la presión social y académica.</li>
            <li>Exploración de la identidad.</li>
            <li>Desarrollo de estrategias de afrontamiento.</li>
            <li>Expresión de temas que pueden resultarles difíciles de hablar.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Señales de que tu hijo podría beneficiarse de arteterapia</h2>

          <p>
            La arteterapia no es solo para niños con diagnósticos específicos. Cualquier niño puede beneficiarse de un espacio creativo y seguro. Sin embargo, hay situaciones donde puede ser especialmente útil:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dificultades para expresar emociones verbalmente.</strong> Niños que se guardan todo, que no saben cómo decir lo que sienten, o que explotan sin poder explicar por qué.</li>
            <li><strong>Cambios importantes en su vida.</strong> Mudanzas, separación de los padres, llegada de un hermano, cambio de escuela, pérdida de un ser querido o una mascota.</li>
            <li><strong>Ansiedad o miedos que interfieren con su día a día.</strong> Dificultad para dormir, resistencia a ir a la escuela, preocupaciones excesivas.</li>
            <li><strong>Problemas de conducta.</strong> Agresividad, berrinches frecuentes, dificultad para relacionarse con otros niños.</li>
            <li><strong>Baja autoestima.</strong> Niños que se sienten &quot;menos que&quot; los demás, que evitan intentar cosas nuevas por miedo a fallar, que hablan negativamente de sí mismos.</li>
            <li><strong>Traumas o situaciones difíciles.</strong> Pérdidas, accidentes, hospitalizaciones, situaciones familiares complicadas.</li>
            <li><strong>Niños con dificultades en el lenguaje o la comunicación.</strong> Retrasos del lenguaje, timidez extrema, trastorno del espectro autista, TDAH.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que no es arteterapia</h2>

          <p>Es importante distinguir la arteterapia de otras actividades artísticas:</p>

          <p><strong>No es una clase de arte.</strong></p>
          <p>En una clase de arte el objetivo es aprender técnicas y mejorar habilidades artísticas. En arteterapia el objetivo es la expresión emocional y el bienestar. No se evalúa ni se corrige el resultado.</p>

          <p><strong>No es manualidades con fines decorativos.</strong></p>
          <p>Aunque las actividades pueden parecer similares, en arteterapia el foco está en el proceso interno del niño, no en producir algo bonito para llevar a casa.</p>

          <p><strong>No es solo &quot;pintar para relajarse&quot;.</strong></p>
          <p>La arteterapia implica un acompañamiento profesional que observa, contiene y facilita el proceso. No es lo mismo que darle materiales a un niño y dejarlo crear solo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El papel de los padres en el proceso</h2>

          <p>Si decides que tu hijo participe en sesiones de arteterapia, tu rol como padre o madre es importante:</p>

          <p><strong>Respeta el proceso.</strong></p>
          <p>Es posible que tu hijo no quiera contarte todo lo que hizo o habló en la sesión. Eso está bien. El espacio terapéutico es suyo.</p>

          <p><strong>No juzgues sus creaciones.</strong></p>
          <p>Evita comentarios como &quot;¿qué es eso?&quot; o &quot;podrías hacerlo más bonito&quot;. Lo que crea tiene valor porque es su expresión, no porque sea estéticamente agradable.</p>

          <p><strong>Facilita la continuidad.</strong></p>
          <p>Llegar a tiempo, mantener la regularidad de las sesiones y mostrar interés genuino (sin presionar) ayuda a que el proceso sea más efectivo.</p>

          <p><strong>Comunícate con el terapeuta.</strong></p>
          <p>Comparte información relevante sobre lo que está pasando en casa o en la escuela. El terapeuta puede integrar esa información en el trabajo con tu hijo.</p>

          <p><strong>Confía en el proceso.</strong></p>
          <p>Los cambios no siempre son inmediatos ni visibles. A veces el trabajo más importante ocurre internamente y toma tiempo manifestarse.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿A partir de qué edad puede un niño participar en arteterapia?</h3>
          <p>
            Generalmente desde los 3 años, cuando ya tienen cierta capacidad de manipular materiales y de sostener la atención por períodos breves. Las sesiones se adaptan a la edad y las necesidades de cada niño.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Mi hijo necesita saber dibujar o tener habilidades artísticas?</h3>
          <p>
            No. La arteterapia no requiere ninguna habilidad previa. Lo importante es el proceso de crear, no el resultado. Cualquier niño puede participar independientemente de su nivel artístico.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Cuánto dura una sesión de arteterapia para niños?</h3>
          <p>
            Depende de la edad. Para niños pequeños (3-5 años) las sesiones suelen durar entre 30 y 45 minutos. Para niños mayores (6-12 años) pueden extenderse a 50 o 60 minutos.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Cuántas sesiones necesita mi hijo?</h3>
          <p>
            No hay un número fijo. Depende de lo que se esté trabajando, de las necesidades del niño y de su ritmo. Algunos niños se benefician de procesos cortos; otros necesitan acompañamiento más prolongado.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Puedo hacer arteterapia con mi hijo en casa?</h3>
          <p>
            Puedes ofrecer actividades artísticas en casa que favorezcan la expresión emocional, pero la arteterapia como tal requiere de un profesional formado que sepa acompañar el proceso. Las actividades en casa son un complemento, no un sustituto.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Conclusión</h2>

          <p>
            La arteterapia ofrece a los niños un espacio donde pueden expresar lo que sienten de manera natural, sin la presión de encontrar las palabras correctas. Cada edad tiene sus propias características y necesidades, y las actividades se adaptan para que sean significativas y accesibles.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que puedes recordar:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Los niños se expresan mejor a través del juego y la creación que a través de las palabras.</li>
            <li>No necesitan habilidades artísticas para beneficiarse de la arteterapia.</li>
            <li>Las actividades varían según la edad, pero el objetivo siempre es el bienestar emocional.</li>
            <li>Tu rol como padre es facilitar y respetar el proceso sin juzgar las creaciones.</li>
            <li>Cualquier niño puede beneficiarse, no solo aquellos con diagnósticos específicos.</li>
          </ul>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que todos los niños merecen un espacio donde su voz —aunque no sea verbal— sea escuchada.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que tu hijo podría beneficiarse de un espacio donde expresarse libremente y trabajar sus emociones a través del arte, puedo orientarte.
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
