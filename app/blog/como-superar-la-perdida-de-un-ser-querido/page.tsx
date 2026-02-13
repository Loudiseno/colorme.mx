'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloSuperarPerdida() {
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
            Cómo Superar la Pérdida de un Ser Querido: 12 Claves Prácticas
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/superar-perdida-ser-querido.webp"
            alt="Cómo superar la pérdida de un ser querido - Acompañamiento en el duelo"
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
            <strong>Superar la pérdida de un ser querido</strong> no significa dejar de extrañarlo. Significa aprender a vivir con su ausencia mientras recuperas, poco a poco, la capacidad de encontrar momentos de paz. Si llegaste aquí buscando respuestas, probablemente estés en ese punto donde el dolor parece ocuparlo todo y te preguntas si algún día volverás a sentirte tú mismo.
          </p>

          <p>
            No voy a darte fórmulas mágicas porque no existen. Lo que sí puedo ofrecerte son herramientas concretas que pueden ayudarte a transitar este camino. No tienes que aplicarlas todas ni hacerlo en orden. Toma lo que resuene contigo y deja lo demás.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">1. No necesitas una crisis para pedir ayuda</h2>

          <p>
            Existe la idea de que solo deberías buscar apoyo profesional cuando &quot;ya no puedes más&quot; o cuando la situación se ha vuelto insostenible. Pero la realidad es diferente: a veces simplemente necesitas un lugar seguro donde poder expresar lo que sientes sin filtros, sin tener que cuidar las palabras para no preocupar a tu familia, sin sentir que estás cargando a otros con tu dolor.
          </p>

          <p>
            Buscar acompañamiento no significa que estés &quot;mal&quot; o que no puedas solo. Significa que reconoces el valor de tener un espacio dedicado exclusivamente a ti y a lo que estás viviendo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">2. Busca pequeños momentos de paz</h2>

          <p>
            No se trata de &quot;estar bien&quot; de un día para otro. Se trata de encontrar pequeñas pausas en medio del dolor. Momentos donde respiras un poco más ligero, aunque sea por cinco minutos.
          </p>

          <p>Puede ser:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Un café caliente en la mañana, tomado con calma.</li>
            <li>Sentarte al sol un rato sin hacer nada.</li>
            <li>Escuchar una canción que te guste.</li>
            <li>Caminar sin rumbo fijo.</li>
            <li>Ver algo que te haga sonreír, aunque sea brevemente.</li>
          </ul>

          <p>
            Estos momentos no significan que estés &quot;superando&quot; nada ni que el dolor haya desaparecido. Son pausas. Pequeños descansos que tu mente y tu cuerpo necesitan para no colapsar. No te sientas culpable por permitírtelos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">3. Haz cosas que disfrutes, sin forzar nada</h2>

          <p>
            Quizás ahora mismo no tengas ganas de nada. Quizás las cosas que antes te gustaban ya no te generan lo mismo. Eso es normal. Pero cuando sientas un pequeño impulso de hacer algo —aunque sea mínimo— permítetelo.
          </p>

          <p>Algunas ideas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cocinar algo que te guste, aunque sea simple.</li>
            <li>Ver una película o serie sin expectativas.</li>
            <li>Salir a caminar o hacer ejercicio suave.</li>
            <li>Retomar un hobby que tenías abandonado.</li>
            <li>Leer algo que no requiera mucha concentración.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">4. Habla de tu ser querido cuando quieras</h2>

          <p>
            A veces el entorno, con buena intención, evita mencionar a la persona que falleció para &quot;no hacerte sentir mal&quot;. Pero muchas veces lo que necesitas es exactamente lo contrario: hablar de ella, contar anécdotas, recordar cómo era, qué le gustaba, qué cosas hacían juntos.
          </p>

          <p>
            Hablar de quien ya no está no prolonga el dolor. Puede ser parte de cómo lo procesas. Si sientes ganas de mencionar a tu ser querido en una conversación, hazlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">5. Deja que tu cuerpo también procese</h2>

          <p>
            El duelo no solo ocurre en tu mente. Tu cuerpo también lo está viviendo. Por eso es común sentir fatiga aunque no hayas hecho nada físicamente demandante, o tener el sueño alterado, o notar cambios en el apetito.
          </p>

          <p>Algunas cosas que pueden ayudar:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Muévete:</strong> Caminar, estirarte, bailar en tu sala. El movimiento ayuda a liberar tensión acumulada.</li>
            <li><strong>Descansa cuando lo necesites:</strong> Si tu cuerpo te pide dormir, escúchalo.</li>
            <li><strong>Come aunque no tengas hambre:</strong> Algo simple que nutra tu cuerpo es suficiente.</li>
            <li><strong>Llora si necesitas llorar:</strong> El llanto es una forma de liberar. No lo contengas.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">6. Acepta que habrá días difíciles</h2>

          <p>
            El proceso no es lineal. Puedes tener un día donde te sientas relativamente bien y al siguiente despertar con el dolor a flor de piel. Fechas especiales, canciones, olores, lugares: cualquier cosa puede desencadenar una oleada de tristeza cuando menos lo esperas.
          </p>

          <p>
            Esto no significa que hayas retrocedido. Significa que sigues procesando. Cuando lleguen esos días difíciles, no te juzgues.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">7. Crea tus propios rituales de conexión</h2>

          <p>
            No tienen que ser grandes ceremonias. Pueden ser pequeños gestos que te permitan sentir que mantienes un vínculo con quien ya no está.
          </p>

          <p>Algunas personas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encienden una vela en ciertos momentos.</li>
            <li>Visitan un lugar que era especial para ambos.</li>
            <li>Escriben cartas que nunca enviarán.</li>
            <li>Preparan la comida favorita de esa persona en fechas significativas.</li>
            <li>Guardan un objeto pequeño que les recuerda a ella.</li>
            <li>Hablan con la persona en voz alta o en su mente.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">8. No te compares con nadie</h2>

          <p>
            Cada persona vive el duelo de manera diferente. Que alguien &quot;parezca&quot; estar bien no significa que su pérdida haya sido menor o que tú deberías estar en el mismo punto.
          </p>

          <p>Evita pensamientos como:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>&quot;Mi amiga perdió a su mamá y ya está haciendo su vida normal.&quot;</li>
            <li>&quot;Ya pasaron X meses, debería estar mejor.&quot;</li>
            <li>&quot;Otros han pasado por cosas peores y no les afectó tanto.&quot;</li>
          </ul>

          <p>Tu proceso es tuyo. Tu relación con esa persona era única. Tu manera de vivir la pérdida también lo es.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">9. Permite que otros te acompañen</h2>

          <p>
            A veces queremos proteger a los demás de nuestro dolor, o sentimos que cargamos a otros si compartimos cómo nos sentimos. Pero los vínculos humanos existen precisamente para momentos así.
          </p>

          <p>
            No tienes que contarle todo a todos. Pero permite que al menos una o dos personas cercanas sepan realmente cómo estás. Déjate cuidar. Pedir ayuda no es debilidad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">10. Cuida las decisiones importantes</h2>

          <p>
            Los primeros meses después de una pérdida no son el mejor momento para tomar decisiones grandes: vender la casa, mudarte a otra ciudad, cambiar de trabajo, terminar o iniciar una relación.
          </p>

          <p>
            El duelo altera tu percepción y tu capacidad de evaluar las cosas con claridad. Si es posible, pospón las decisiones importantes. Dale tiempo a tu mente para asentarse.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">11. Reconoce cuándo necesitas un espacio seguro</h2>

          <p>
            A veces el apoyo de familia y amigos no es suficiente. No porque no te quieran, sino porque ellos también están afectados, o porque no saben cómo acompañarte.
          </p>

          <p>Buscar un espacio profesional de acompañamiento puede darte:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Libertad para expresar todo sin filtros.</li>
            <li>Herramientas concretas para los momentos más difíciles.</li>
            <li>Un lugar donde el foco está exclusivamente en ti.</li>
            <li>La posibilidad de explorar emociones que no te atreves a mostrar a otros (rabia, alivio, culpa, contradicciones).</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">12. Dale tiempo al tiempo, pero tiempo activo</h2>

          <p>
            &quot;El tiempo lo cura todo&quot; es una frase que escuchamos mucho, pero no es del todo precisa. El tiempo solo no cura. Lo que cura es lo que haces con ese tiempo.
          </p>

          <p>Tiempo activo significa:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Permitirte sentir en lugar de evitar.</li>
            <li>Buscar momentos de conexión y de paz.</li>
            <li>Cuidar tu cuerpo y tu mente.</li>
            <li>Aceptar apoyo cuando lo necesitas.</li>
            <li>Ser paciente contigo mismo.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Cuánto tiempo tardaré en sentirme mejor?</h3>
          <p>
            No hay una respuesta única. Cada persona y cada pérdida son diferentes. Lo que sí puedo decirte es que gradualmente, si te permites vivir el proceso, los momentos de dolor intenso se irán espaciando y los momentos de paz serán más frecuentes.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Está mal sentir alivio después de que alguien muere?</h3>
          <p>
            No. Especialmente si la persona estuvo enferma mucho tiempo o si la relación era complicada, sentir alivio es una reacción humana. Eso no significa que no la quisieras ni que tu duelo sea menos válido.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Qué hago si siento que mi familia no entiende mi dolor?</h3>
          <p>
            Busca a alguien fuera de tu círculo inmediato: un amigo, un grupo de apoyo, un profesional. A veces las personas más cercanas están tan afectadas por la misma pérdida que no tienen capacidad de sostenerte.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Debería evitar los lugares y cosas que me recuerdan a esa persona?</h3>
          <p>
            No necesariamente. Al principio puede ser instintivo evitarlos. Pero con el tiempo, esos lugares y objetos pueden convertirse en una forma de conexión en lugar de una fuente de dolor.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">¿Es normal sentir enojo hacia la persona que murió?</h3>
          <p>
            Sí. Es más común de lo que se habla. Puedes sentir enojo porque &quot;te dejó&quot;, porque no se cuidó, porque hay cosas que quedaron sin resolver. Ese enojo es parte del proceso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Conclusión</h2>

          <p>
            Superar la pérdida de un ser querido es un camino largo que no tiene atajos, pero tampoco tiene que recorrerse en soledad. Los pequeños momentos de paz, las cosas que disfrutas, los rituales que creas, las personas que te acompañan: todo eso va construyendo, poco a poco, una nueva forma de vivir que incluye la ausencia sin que el dolor lo ocupe todo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Lo que puedes recordar:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>No necesitas una crisis para buscar apoyo.</li>
            <li>Los pequeños momentos de paz son valiosos y permitidos.</li>
            <li>Hacer cosas que disfrutes no es traicionar tu dolor.</li>
            <li>Hablar de tu ser querido es parte de mantener su memoria viva.</li>
            <li>Tu proceso es único y no tiene que parecerse al de nadie.</li>
          </ul>

          <p className="italic text-black/60 mt-8">
            En ColorMe creo que el dolor compartido pesa menos. Estoy aquí si me necesitas.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que te beneficiaría tener un espacio seguro donde expresar lo que vives sin filtros ni juicios, puedo acompañarte.
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
