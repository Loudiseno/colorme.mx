'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloEnfermedad() {
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
            Cuando el cuerpo cambia las reglas: navegar el duelo por enfermedad o diagnóstico
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/hombre en duelo.webp"
            alt="Hombre atravesando un proceso de duelo por enfermedad"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una pérdida que nadie te enseñó a nombrar</h2>

          <p>
            Existe un tipo de duelo que rara vez se menciona en las conversaciones sobre pérdida. No involucra funerales ni condolencias formales. No hay flores ni tarjetas de &quot;lo siento mucho&quot;. Sin embargo, puede ser tan devastador como cualquier otro: el duelo que surge cuando recibimos un diagnóstico médico que transforma nuestra vida o la de alguien cercano.
          </p>

          <p>
            Cuando un médico pronuncia ciertas palabras —diabetes, esclerosis múltiple, cáncer, enfermedad de Crohn, lupus, fibromialgia, o cualquier otra condición crónica o grave— algo se quiebra silenciosamente en nuestro interior. En ese instante, la persona que creíamos ser comienza a desdibujarse, y nos encontramos frente a una versión de nosotros mismos que jamás imaginamos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El diagnóstico como punto de inflexión</h2>

          <p>
            Recibir un diagnóstico médico significativo funciona como una línea divisoria en nuestra historia personal. De pronto existe un &quot;antes&quot; y un &quot;después&quot;, y ese después se extiende hacia un futuro que ahora luce completamente diferente a lo que habíamos planeado.
          </p>

          <p>
            La primera reacción suele ser incredulidad. &quot;Debe haber un error&quot;, pensamos. &quot;Los resultados se confundieron con los de otra persona&quot;. Esta negación inicial cumple una función protectora: nos da tiempo para procesar una realidad que aún no podemos absorber por completo. El cerebro humano necesita dosificar las noticias devastadoras para no colapsar bajo su peso.
          </p>

          <p>
            Después llega la búsqueda desesperada de información. Pasamos horas investigando en internet, buscando testimonios, tratamientos alternativos, segundas opiniones. Queremos encontrar algo que nos devuelva el control que sentimos haber perdido. Esta fase puede ser útil cuando nos ayuda a tomar decisiones informadas, pero también puede convertirse en una espiral de ansiedad si no encontramos límites saludables.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las múltiples capas de la pérdida</h2>

          <p>
            Lo que hace particularmente complejo este tipo de duelo es que no lloramos una sola cosa. Lloramos muchas pérdidas simultáneas, algunas evidentes y otras tan sutiles que nos cuesta identificarlas.
          </p>

          <p>
            <strong>La pérdida de la salud que dábamos por sentada.</strong> Durante años, nuestro cuerpo funcionó sin que tuviéramos que prestarle demasiada atención. Ahora cada síntoma, cada sensación, adquiere un significado diferente. La relación con nuestro propio cuerpo se transforma en algo que requiere vigilancia constante.
          </p>

          <p>
            <strong>La pérdida de planes y proyectos.</strong> Quizás teníamos pensado correr una maratón, viajar a lugares remotos, o simplemente envejecer sin preocupaciones médicas. Un diagnóstico puede obligarnos a replantear metas que considerábamos seguras.
          </p>

          <p>
            <strong>La pérdida de espontaneidad.</strong> Vivir con una condición crónica implica planificación: medicamentos, citas médicas, ajustes en la dieta, limitaciones físicas. La vida se vuelve menos improvisada y más estructurada alrededor de las necesidades de salud.
          </p>

          <p>
            <strong>La pérdida de identidad.</strong> &quot;Soy una persona con diabetes&quot; suena muy diferente a cómo nos describíamos antes. Integrar una condición médica a nuestra identidad sin que nos defina por completo es un proceso que lleva tiempo y trabajo emocional.
          </p>

          <p>
            <strong>La pérdida de relaciones tal como las conocíamos.</strong> Algunas personas no sabrán cómo reaccionar ante nuestra situación. Otras se alejarán por incomodidad o miedo. Las dinámicas familiares pueden alterarse cuando alguien asume el rol de cuidador o cuando las responsabilidades se redistribuyen.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo no sigue un calendario</h2>

          <p>
            Una de las frustraciones más comunes en este proceso es la expectativa —propia y ajena— de que deberíamos &quot;superarlo&quot; en cierto tiempo. Pero el duelo por enfermedad no funciona así. Es un proceso ondulante que puede reactivarse en momentos inesperados.
          </p>

          <p>
            Un aniversario del diagnóstico, ver a otros disfrutando actividades que ya no podemos realizar, enfrentar una recaída o un empeoramiento, o simplemente tener un día particularmente difícil puede traer de vuelta emociones que creíamos procesadas. Esto no significa retroceso; significa que somos humanos navegando una situación extraordinariamente compleja.
          </p>

          <p>
            Además, a diferencia de otros duelos donde la pérdida ocurrió en un momento específico, vivir con una enfermedad crónica implica enfrentar pequeñas pérdidas continuamente. Cada nueva limitación, cada ajuste de tratamiento, cada efecto secundario puede desencadenar un nuevo ciclo de duelo. Aprender a movernos entre estos ciclos sin juzgarnos duramente es parte fundamental del proceso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La soledad particular de este duelo</h2>

          <p>
            Quienes atraviesan un duelo por diagnóstico frecuentemente reportan sentirse profundamente solos, incluso cuando están rodeados de personas que los quieren. Esta soledad tiene varias fuentes.
          </p>

          <p>
            Por un lado, existe una brecha experiencial difícil de salvar. Por más empáticos que sean nuestros seres queridos, no pueden comprender completamente lo que significa habitar un cuerpo que ya no responde como antes o vivir con la incertidumbre constante sobre el futuro de nuestra salud.
          </p>

          <p>
            Por otro lado, muchas personas evitan hablar de enfermedad porque les genera incomodidad. Prefieren cambiar de tema, ofrecer frases hechas como &quot;todo va a estar bien&quot; o contar historias de conocidos que &quot;se curaron milagrosamente&quot;. Aunque bien intencionadas, estas respuestas pueden hacernos sentir invisibles en nuestro dolor.
          </p>

          <p>
            También existe presión social para mantener una actitud positiva. Nos bombardean con mensajes sobre &quot;guerreros&quot; que &quot;vencen&quot; la enfermedad, como si la recuperación dependiera exclusivamente de nuestra actitud. Esta narrativa, además de ser inexacta, puede generar culpa cuando tenemos días difíciles o cuando la enfermedad progresa a pesar de nuestros esfuerzos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando el diagnóstico es de alguien que amamos</h2>

          <p>
            El duelo por enfermedad no afecta únicamente a quien recibe el diagnóstico. Familiares, parejas y amigos cercanos también atraviesan su propio proceso, que incluye elementos particulares.
          </p>

          <p>
            Existe la pérdida de la relación tal como era. Si nuestra pareja desarrolla una enfermedad degenerativa, los roles pueden invertirse gradualmente. Si un hijo recibe un diagnóstico crónico, los sueños que teníamos para su futuro requieren recalibrarse.
          </p>

          <p>
            También aparece la culpa en múltiples formas: culpa por estar sanos mientras ellos sufren, culpa por los momentos en que nos sentimos agotados o frustrados, culpa por desear secretamente que las cosas fueran diferentes.
          </p>

          <p>
            El agotamiento del cuidador es real y merece reconocimiento. Acompañar a alguien en su enfermedad requiere recursos emocionales, físicos y a veces económicos significativos. Admitir que estamos cansados no nos convierte en malas personas; nos convierte en personas honestas que necesitan apoyo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Herramientas para transitar el camino</h2>

          <p>
            Aunque no existe una fórmula mágica para atravesar este duelo, ciertas prácticas pueden facilitar el trayecto.
          </p>

          <p>
            <strong>Permitirse todas las emociones.</strong> Tristeza, rabia, miedo, frustración, envidia hacia quienes están sanos, momentos de esperanza seguidos de momentos de desesperanza. Todas estas emociones son válidas y tienen derecho a existir. Negarlas solo las intensifica.
          </p>

          <p>
            <strong>Buscar comunidad.</strong> Conectar con otras personas que viven situaciones similares puede romper el aislamiento. Grupos de apoyo, foros en línea o asociaciones de pacientes ofrecen espacios donde no necesitamos explicar lo básico porque los demás ya lo comprenden.
          </p>

          <p>
            <strong>Redefinir en lugar de renunciar.</strong> Quizás no podamos hacer las cosas exactamente como antes, pero eso no significa abandonar todo lo que nos importa. Un corredor que ya no puede competir podría descubrir pasión por entrenar a otros. Un músico con artritis podría explorar la composición o la enseñanza. La creatividad para adaptar nuestras pasiones a nuestras nuevas circunstancias puede sorprendernos.
          </p>

          <p>
            <strong>Establecer límites claros.</strong> No tenemos obligación de educar a todos sobre nuestra condición ni de tolerar comentarios insensibles con una sonrisa. Está bien decir &quot;prefiero no hablar de esto ahora&quot; o alejarnos de personas que drenan nuestra energía.
          </p>

          <p>
            <strong>Celebrar los días buenos sin presión.</strong> Cuando tengamos un buen día, disfrutémoslo plenamente sin pensar que debemos aprovechar para hacer todo lo pendiente. Un buen día es valioso en sí mismo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La posibilidad de una nueva narrativa</h2>

          <p>
            Con el tiempo, muchas personas descubren que es posible construir una vida significativa que incluya la enfermedad sin estar dominada por ella. Esto no significa ignorar las dificultades ni forzar una actitud falsamente optimista. Significa encontrar espacio para otras cosas además del dolor.
          </p>

          <p>
            Algunas personas reportan que su diagnóstico, paradójicamente, les enseñó a priorizar lo verdaderamente importante. Relaciones que antes descuidaban se volvieron centrales. Pasatiempos que postergaban indefinidamente finalmente recibieron atención. La urgencia de vivir plenamente se agudizó.
          </p>

          <p>
            Otros descubren fortalezas que desconocían tener. La capacidad de adaptación humana es notable, y frecuentemente nos sorprendemos manejando situaciones que creíamos imposibles de enfrentar.
          </p>

          <p>
            También hay quienes encuentran propósito en ayudar a otros que atraviesan situaciones similares. Compartir experiencias, ofrecer orientación práctica o simplemente acompañar a alguien en sus primeros días post-diagnóstico puede dar sentido al propio sufrimiento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un duelo legítimo que merece reconocimiento</h2>

          <p>
            Si estás atravesando un duelo por enfermedad —propia o de alguien querido— permítete reconocer la magnitud de lo que enfrentas. No estás exagerando. No deberías &quot;estar mejor&quot; a estas alturas. No tienes que comparar tu situación con la de otros ni minimizar tu dolor porque &quot;hay gente que está peor&quot;.
          </p>

          <p>
            Tu duelo es real. Tu dolor es válido. Y aunque el camino es difícil, no tienes que recorrerlo en absoluta soledad.
          </p>

          <p>
            Busca apoyo profesional si lo necesitas. Un terapeuta especializado en duelo o en psico-oncología puede ofrecer herramientas específicas para tu situación. No es señal de debilidad; es reconocer que algunas cargas son demasiado pesadas para llevarlas solos.
          </p>

          <p>
            Y recuerda: aprender a vivir con una nueva realidad no significa traicionar a la persona que eras antes. Significa honrarla encontrando maneras de seguir adelante, un día a la vez, con toda la compasión que mereces.
          </p>

          <p className="italic text-black/60 mt-8">
            En colorMe creemos que todas las formas de duelo merecen espacio y reconocimiento. Si este artículo resonó contigo, te invitamos a compartirlo con alguien que pueda necesitarlo.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">No tienes que atravesar el duelo en soledad</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás atravesando un duelo por enfermedad o diagnóstico y necesitas un espacio seguro para procesar lo que sientes, estoy aquí para acompañarte.
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
