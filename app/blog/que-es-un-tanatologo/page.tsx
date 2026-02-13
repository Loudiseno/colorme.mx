'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloQueEsUnTanatologo() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            ¿Qué es un tanatólogo? Funciones, beneficios y cuándo consultar
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/que-es-un-tanatologo.webp"
            alt="Qué es un tanatólogo - Acompañamiento profesional en el duelo"
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
            ¿Alguna vez te has preguntado <strong>qué es un tanatólogo</strong> y cómo puede ayudarte durante uno de los momentos más difíciles de tu vida? Cuando enfrentamos cualquier tipo de pérdida significativa —ya sea la muerte de un ser querido, una mascota que nos acompañó por años, un trabajo que definía parte de nuestra identidad, un diagnóstico que cambia todo, o incluso un cambio de ciudad que nos aleja de lo conocido— este profesional especializado puede convertirse en un aliado fundamental para nuestra recuperación emocional.
          </p>

          <p>
            El <strong>tanatólogo</strong> es mucho más que un experto en temas relacionados con la muerte. Es un acompañante capacitado que nos guía a través del proceso de duelo, brindándonos herramientas para transformar el dolor en un camino hacia la sanación.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué es la tanatología?</h2>

          <p>
            La <strong>tanatología</strong> es una disciplina científica que estudia todo lo relacionado con la muerte y los procesos de pérdida desde una perspectiva integral. Su nombre proviene del griego <em>thanatos</em> (muerte) y <em>logos</em> (estudio), pero su enfoque va mucho más allá de la muerte física.
          </p>

          <p>Esta disciplina aborda:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>El sufrimiento psicológico ante las pérdidas.</li>
            <li>El acompañamiento a pacientes terminales.</li>
            <li>El apoyo a familias en proceso de duelo.</li>
            <li>La preparación emocional ante la propia muerte.</li>
            <li>El manejo de pérdidas significativas no relacionadas con fallecimientos.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Origen histórico de la tanatología</h3>

          <p>
            La tanatología moderna nació formalmente en la década de 1960, impulsada por la psiquiatra suiza <strong>Elisabeth Kübler-Ross</strong>. Su libro <em>On Death and Dying</em> (1969) transformó la manera en que la medicina y la psicología abordan el tema de la muerte, sacándolo del tabú y convirtiéndolo en objeto de estudio científico.
          </p>

          <p>Desde entonces, la tanatología ha evolucionado para integrar conocimientos de:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Psicología clínica.</li>
            <li>Medicina paliativa.</li>
            <li>Filosofía existencial.</li>
            <li>Trabajo social.</li>
            <li>Espiritualidad (sin vinculación a religiones específicas).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Quién es el tanatólogo y cuáles son sus funciones?</h2>

          <p>
            El <strong>tanatólogo</strong> es el profesional especializado en acompañar a personas que atraviesan procesos de pérdida y duelo. Su labor consiste en brindar un espacio seguro donde puedas expresar tus emociones sin juicio, mientras te proporciona herramientas concretas para transitar el dolor.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Funciones principales del tanatólogo</h3>

          <p>
            <strong>Acompañamiento emocional:</strong> Ofrece presencia compasiva y escucha activa durante el proceso de duelo.
          </p>
          <p>
            <strong>Educación sobre el duelo:</strong> Explica las reacciones normales ante la pérdida para reducir la angustia.
          </p>
          <p>
            <strong>Facilitación de la expresión:</strong> Ayuda a identificar y expresar emociones difíciles como culpa, rabia o miedo.
          </p>
          <p>
            <strong>Desarrollo de estrategias:</strong> Enseña técnicas de afrontamiento adaptadas a cada persona.
          </p>
          <p>
            <strong>Apoyo en rituales de despedida:</strong> Acompaña en la creación de ceremonias significativas de cierre.
          </p>
          <p>
            <strong>Orientación familiar:</strong> Trabaja con el sistema familiar para mejorar la comunicación y el apoyo mutuo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Técnicas que utiliza el tanatólogo</h3>

          <p>El profesional emplea diversas herramientas terapéuticas según las necesidades de cada persona:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Escucha activa y validación emocional:</strong> Fundamental para crear un espacio de confianza.</li>
            <li><strong>Terapia narrativa:</strong> Reconstrucción de la historia de vida y la relación con lo perdido.</li>
            <li><strong>Mindfulness y relajación:</strong> Manejo de la ansiedad y conexión con el presente.</li>
            <li><strong>Terapia cognitivo-conductual:</strong> Identificación y modificación de pensamientos que obstaculizan la recuperación.</li>
            <li><strong>Trabajo con rituales:</strong> Creación de ceremonias personalizadas de despedida.</li>
            <li><strong>Grupos de apoyo:</strong> Espacios compartidos con otras personas en situaciones similares.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tipos de pérdidas que atiende un tanatólogo</h2>

          <p>
            Contrario a lo que muchos piensan, el tanatólogo no trabaja únicamente con personas que han perdido a un ser querido. Su campo de acción abarca múltiples tipos de pérdidas significativas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Pérdidas relacionadas con la muerte</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fallecimiento de familiares cercanos (padres, hijos, hermanos, pareja).</li>
            <li>Muerte de amigos significativos.</li>
            <li>Pérdida de mascotas queridas.</li>
            <li>Duelos por muertes traumáticas, súbitas o violentas.</li>
            <li>Acompañamiento a pacientes terminales.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Pérdidas no relacionadas con la muerte</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Rupturas amorosas:</strong> Divorcios, separaciones, fin de relaciones.</li>
            <li><strong>Pérdidas laborales:</strong> Despido, jubilación, cambio de carrera.</li>
            <li><strong>Pérdidas de salud:</strong> Diagnósticos crónicos, discapacidades adquiridas.</li>
            <li><strong>Pérdidas de etapas vitales:</strong> Nido vacío, fin de la juventud, menopausia.</li>
            <li><strong>Pérdidas materiales significativas:</strong> Hogar, patrimonio, objetos con valor sentimental.</li>
            <li><strong>Pérdidas de identidad:</strong> Cambios de país, de rol social, de estatus.</li>
          </ul>

          <p className="bg-[#B2F7EF]/20 p-4 rounded-lg border-l-4 border-[#B2F7EF]">
            <strong>¿Sabías que...?</strong> Según el Instituto Mexicano de Tanatología, todas estas pérdidas pueden desencadenar un proceso de duelo tan intenso como el provocado por una muerte, y merecen atención especializada.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las 5 etapas del duelo según Kübler-Ross</h2>

          <p>
            Elisabeth Kübler-Ross identificó cinco etapas que atraviesan las personas durante el proceso de duelo. Es importante entender que <strong>estas etapas no son lineales ni obligatorias</strong>: cada persona puede experimentarlas en diferente orden, repetir algunas o no pasar por todas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">1. Negación</h3>
          <p>
            La primera reacción suele ser rechazar la realidad de la pérdida. Funciona como un mecanismo de defensa que nos protege del impacto inicial.
          </p>
          <p><strong>Manifestaciones comunes:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>&quot;Esto no puede estar pasando.&quot;</li>
            <li>Sensación de irrealidad o adormecimiento emocional.</li>
            <li>Búsqueda de evidencia de que el diagnóstico es un error.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">2. Ira</h3>
          <p>
            Cuando la negación se desvanece, aparece el enojo. La persona puede sentir rabia hacia sí misma, hacia otros, hacia la vida o incluso hacia quien falleció.
          </p>
          <p><strong>Manifestaciones comunes:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>&quot;¿Por qué a mí?&quot;</li>
            <li>Irritabilidad constante.</li>
            <li>Búsqueda de culpables.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">3. Negociación</h3>
          <p>
            Se intenta hacer pactos (con Dios, con el universo, con uno mismo) para revertir o posponer la pérdida.
          </p>
          <p><strong>Manifestaciones comunes:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>&quot;Si hubiera hecho algo diferente...&quot;</li>
            <li>Pensamientos de &quot;qué hubiera pasado si...&quot;</li>
            <li>Promesas de cambio a cambio de recuperar lo perdido.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">4. Depresión</h3>
          <p>
            La tristeza profunda emerge cuando comprendemos la magnitud de la pérdida. Esta etapa, aunque dolorosa, es necesaria para el proceso de sanación.
          </p>
          <p><strong>Manifestaciones comunes:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tristeza intensa y llanto frecuente.</li>
            <li>Aislamiento social.</li>
            <li>Pérdida de interés en actividades habituales.</li>
            <li>Alteraciones del sueño y apetito.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">5. Aceptación</h3>
          <p>
            No significa &quot;estar bien&quot; con la pérdida, sino reconocer la nueva realidad y aprender a vivir con ella.
          </p>
          <p><strong>Manifestaciones comunes:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Capacidad de recordar sin dolor abrumador.</li>
            <li>Retorno gradual a las actividades cotidianas.</li>
            <li>Apertura hacia el futuro.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Diferencia entre tanatólogo y psicólogo</h2>

          <p>
            Una duda frecuente es si conviene acudir a un tanatólogo o a un psicólogo. Aunque sus campos pueden superponerse, existen diferencias importantes.
          </p>

          <p>
            <strong>Enfoque:</strong> El tanatólogo está especializado en pérdidas y duelo, mientras que el psicólogo abarca múltiples trastornos y situaciones.
          </p>
          <p>
            <strong>Formación:</strong> El tanatólogo tiene especialización en tanatología; el psicólogo tiene licenciatura en psicología.
          </p>
          <p>
            <strong>Perspectiva:</strong> El tanatólogo tiene una visión holística que integra aspectos emocionales, sociales y espirituales; el psicólogo tiene un enfoque principalmente clínico.
          </p>
          <p>
            <strong>Diagnóstico:</strong> El tanatólogo no realiza diagnósticos clínicos; el psicólogo puede diagnosticar trastornos mentales.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Cuál elegir?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Elige un tanatólogo</strong> si tu principal necesidad es procesar una pérdida específica y deseas un enfoque que integre aspectos espirituales.</li>
            <li><strong>Elige un psicólogo</strong> si además del duelo presentas síntomas de trastornos como depresión clínica o ansiedad severa que requieren diagnóstico y tratamiento especializado.</li>
            <li><strong>Ideal:</strong> Muchos profesionales tienen formación en ambas áreas, y tanatólogos y psicólogos frecuentemente trabajan de manera colaborativa.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cuándo deberías consultar a un tanatólogo?</h2>

          <p>
            No todas las personas necesitan ayuda profesional para atravesar un duelo. Muchos logran procesar sus pérdidas con el apoyo de su red cercana. Sin embargo, hay señales que indican que sería beneficioso buscar acompañamiento especializado.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Señales de alerta que indican que necesitas apoyo</h3>

          <p><strong>Consulta a un tanatólogo si experimentas:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li>El dolor te impide realizar actividades cotidianas (trabajo, cuidado personal, responsabilidades).</li>
            <li>Han pasado varios meses y no observas ninguna mejoría.</li>
            <li>Sientes culpa intensa que no disminuye con el tiempo.</li>
            <li>Tienes pensamientos recurrentes de que la vida no tiene sentido.</li>
            <li>Has recurrido al alcohol, drogas u otras conductas de riesgo para evadir el dolor.</li>
            <li>Te aíslas completamente de familiares y amigos.</li>
            <li>Experimentas síntomas físicos persistentes (insomnio severo, pérdida significativa de peso, dolores crónicos).</li>
            <li>Enfrentas una pérdida traumática (muerte violenta, suicidio, accidente).</li>
            <li>Necesitas acompañamiento ante una enfermedad terminal (propia o de un ser querido).</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Situaciones donde la tanatología es especialmente útil</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Familias con un miembro terminal:</strong> Para prepararse emocionalmente y acompañar dignamente.</li>
            <li><strong>Duelo anticipado:</strong> Cuando se sabe que la pérdida ocurrirá próximamente.</li>
            <li><strong>Pérdida de un hijo:</strong> Uno de los duelos más complejos que existen.</li>
            <li><strong>Muertes súbitas o violentas:</strong> Accidentes, homicidios, suicidios.</li>
            <li><strong>Duelos no reconocidos socialmente:</strong> Pérdida de mascotas, rupturas de relaciones no formalizadas, abortos.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Beneficios del acompañamiento tanatológico</h2>

          <p>
            Quienes reciben apoyo profesional durante su proceso de duelo reportan mejoras significativas en múltiples áreas de su vida.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Beneficios emocionales</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Reducción del estrés y la ansiedad:</strong> Al expresar emociones en un espacio seguro.</li>
            <li><strong>Disminución de sentimientos de culpa:</strong> Trabajo específico para procesar la culpa irracional.</li>
            <li><strong>Prevención de duelo patológico:</strong> Intervención oportuna que evita complicaciones.</li>
            <li><strong>Mayor claridad emocional:</strong> Comprensión de las propias reacciones.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Beneficios prácticos</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Herramientas de afrontamiento:</strong> Técnicas concretas para los días difíciles.</li>
            <li><strong>Mejor comunicación familiar:</strong> Apoyo para hablar del tema con seres queridos.</li>
            <li><strong>Toma de decisiones:</strong> Orientación para decisiones importantes post-pérdida.</li>
            <li><strong>Prevención de conductas de riesgo:</strong> Alternativas saludables al dolor.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Beneficios a largo plazo</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Reconstrucción del sentido de vida:</strong> Encontrar nuevos propósitos.</li>
            <li><strong>Crecimiento post-traumático:</strong> Fortalecimiento personal tras la adversidad.</li>
            <li><strong>Mejores recursos para futuras pérdidas:</strong> Herramientas que permanecen.</li>
            <li><strong>Relación más sana con la memoria del ser querido:</strong> Recordar sin dolor abrumador.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cómo es una sesión con un tanatólogo?</h2>

          <p>
            Si nunca has asistido a una sesión de tanatología, es normal tener dudas sobre qué esperar. Aquí te explicamos cómo suele desarrollarse el proceso.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Primera sesión</h3>
          <p>La sesión inicial tiene como objetivo:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Conocerse mutuamente:</strong> El tanatólogo te hará preguntas sobre tu historia y tu situación actual.</li>
            <li><strong>Establecer confianza:</strong> Crear un espacio seguro donde te sientas cómodo/a.</li>
            <li><strong>Definir objetivos:</strong> Identificar qué esperas lograr con el acompañamiento.</li>
            <li><strong>Explicar el proceso:</strong> Aclarar dudas sobre la metodología y frecuencia de sesiones.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Sesiones posteriores</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Duración típica:</strong> 50-60 minutos.</li>
            <li><strong>Frecuencia:</strong> Generalmente semanal, puede ajustarse según necesidades.</li>
            <li><strong>Duración del proceso:</strong> Se define de acuerdo a los avances y el ritmo de cada persona.</li>
          </ul>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Qué harás durante las sesiones?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Hablar libremente sobre tus emociones y pensamientos.</li>
            <li>Realizar ejercicios de expresión emocional.</li>
            <li>Aprender técnicas de manejo del dolor.</li>
            <li>Trabajar con recuerdos y significados.</li>
            <li>Planificar rituales de despedida si lo deseas.</li>
            <li>Desarrollar estrategias para situaciones específicas (fechas difíciles, lugares que evitas, etc.).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes sobre tanatología</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿El tanatólogo puede recetar medicamentos?</h3>
          <p>
            <strong>No.</strong> El tanatólogo no es médico y no puede prescribir medicamentos. Si durante el proceso se detecta la necesidad de apoyo farmacológico (por ejemplo, para ansiedad severa o depresión), el tanatólogo te referirá a un psiquiatra que trabaje de manera coordinada.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Cuánto tiempo dura un proceso de tanatología?</h3>
          <p>
            <strong>Depende de cada persona.</strong> La duración se determina según los avances y el ritmo individual. Algunos duelos más complejos requieren más tiempo, mientras que situaciones puntuales pueden resolverse en menos sesiones.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Es normal sentirse peor al inicio del proceso?</h3>
          <p>
            <strong>Puede ocurrir.</strong> Al comenzar a hablar sobre la pérdida y permitirte sentir emociones que quizás habías evitado, es posible que temporalmente el dolor se intensifique. Esto es parte del proceso y suele ser señal de que estás trabajando genuinamente. Tu tanatólogo te acompañará durante esta fase.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Puedo ir a tanatología aunque la pérdida haya ocurrido hace años?</h3>
          <p>
            <strong>Absolutamente sí.</strong> No hay fecha de caducidad para buscar ayuda. Muchas personas cargan con duelos no resueltos durante años o décadas. La tanatología puede ayudarte a procesar pérdidas antiguas que siguen afectando tu presente.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿La tanatología tiene orientación religiosa?</h3>
          <p>
            <strong>No necesariamente.</strong> Aunque la tanatología puede integrar aspectos espirituales, no está vinculada a ninguna religión específica. El profesional respetará tus creencias (o ausencia de ellas) y adaptará el trabajo a tu marco de referencia personal.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Conclusión</h2>

          <p>
            El <strong>tanatólogo</strong> es un profesional especializado que puede convertirse en un aliado invaluable cuando enfrentamos pérdidas significativas. Su labor va más allá de la muerte: abarca todo tipo de duelos que afectan nuestra vida y bienestar emocional.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Puntos clave para recordar:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>La tanatología es una disciplina científica que estudia la muerte y los procesos de pérdida.</li>
            <li>El tanatólogo acompaña en duelos por muerte, pero también por divorcios, enfermedades, pérdidas laborales y más.</li>
            <li>Las etapas del duelo no son lineales: cada persona vive su proceso de manera única.</li>
            <li>No necesitas estar en crisis para consultar; buscar apoyo es un acto de autocuidado.</li>
            <li>El acompañamiento tanatológico ofrece beneficios emocionales, prácticos y a largo plazo.</li>
          </ul>

          <p>
            Si estás atravesando un proceso de pérdida y sientes que podrías beneficiarte de apoyo profesional, <strong>no tienes que hacerlo solo/a</strong>. El primer paso puede ser simplemente conversar sobre tu situación.
          </p>

          <p className="italic text-black/60 mt-8">
            En colorMe creemos que nadie debería atravesar el dolor en soledad. Estamos aquí para acompañarte.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            En ColorMe entendemos lo difícil que puede ser dar el primer paso. Por eso ofrecemos una sesión de orientación gratuita donde podrás compartir tu situación en un espacio seguro y confidencial.
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
