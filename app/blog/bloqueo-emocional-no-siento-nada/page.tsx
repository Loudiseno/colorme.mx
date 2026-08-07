'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function BloqueoEmocionalPage() {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">EMOCIONES</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            No siento nada: cuando las emociones se apagan
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/bloqueo-emocional-no-siento-nada.jpeg"
            alt="Bloqueo emocional - No siento nada, anestesia emocional"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed italic">
            Para quienes buscan desesperadamente sentir algo, lo que sea.
          </p>

          <p>
            No es que no te importe. No es que seas frío. No es que no quieras.
          </p>

          <p>
            Es que por más que lo intentas, no logras sentir.
          </p>

          <p>
            Ni alegría, ni tristeza, ni enojo, ni amor. Solo un vacío extraño, una especie de anestesia que te hace observar tu propia vida como si fuera una película de otra persona.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La anestesia emocional</h2>

          <p>
            Hay un nombre para lo que te pasa: bloqueo emocional. También se le llama embotamiento afectivo o anestesia emocional.
          </p>

          <p>
            No es lo mismo que la indiferencia. No es que no te interese nada. Es que algo en tu interior se desconectó de la capacidad de sentir.
          </p>

          <p>
            Este fenómeno funciona como un mecanismo de defensa del cerebro. Cuando el dolor emocional es demasiado intenso o prolongado, el sistema nervioso puede responder apagando temporalmente la capacidad de sentir. Es como si el cerebro dijera: "Esto es demasiado. Mejor no sentir nada."
          </p>

          <p>
            El problema es que este mecanismo no distingue entre emociones. Al bloquear el dolor, también bloquea la alegría, el amor, la conexión.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo se siente no sentir nada</h2>

          <p>
            Las personas que experimentan bloqueo emocional describen sensaciones particulares.
          </p>

          <p>
            <strong>Ver la vida como espectador.</strong> Como si estuvieras detrás de un vidrio, observando todo pero sin participar realmente. Los días pasan y tú simplemente los miras pasar.
          </p>

          <p>
            <strong>No poder llorar aunque quieras.</strong> Sabes que deberías sentir tristeza, que la situación lo amerita, pero las lágrimas no salen. Hay algo seco por dentro que no responde.
          </p>

          <p>
            <strong>No emocionarte con lo que antes te emocionaba.</strong> La música que te conmovía ahora suena vacía. Las personas que amas se sienten distantes aunque estén frente a ti. Los logros no generan satisfacción.
          </p>

          <p>
            <strong>Sentirte desconectado de tu propio cuerpo.</strong> Como si habitaras un cuerpo que no es del todo tuyo. Los abrazos no se sienten. El placer físico se vuelve mecánico.
          </p>

          <p>
            <strong>Cansancio inexplicable.</strong> Aunque no haces nada, estás agotado. Mantener ese muro emocional consume una cantidad enorme de energía psíquica.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué se bloquean las emociones</h2>

          <p>
            El bloqueo emocional no aparece sin razón. Es una respuesta a algo que el sistema nervioso percibió como amenazante.
          </p>

          <p>
            <strong>Experiencias traumáticas.</strong> Cuando vivimos algo que nos sobrepasa, ya sea un evento único o un estrés prolongado, el cerebro puede activar este mecanismo de protección. El trauma activa respuestas de disociación que pueden persistir mucho después del evento original.
          </p>

          <p>
            <strong>Duelo no procesado.</strong> La pérdida de un ser querido, especialmente si fue súbita o traumática, puede generar un bloqueo. El dolor es tan grande que el sistema se apaga para poder seguir funcionando.
          </p>

          <p>
            <strong>Acumulación de emociones reprimidas.</strong> Si durante años aprendiste a no mostrar lo que sientes, a tragarte el enojo, a no llorar, eventualmente el sistema se satura. Ya no puede contener más, así que se desconecta.
          </p>

          <p>
            <strong>Estrés crónico.</strong> Vivir bajo presión constante agota los recursos emocionales. Llega un punto donde ya no hay capacidad de respuesta. El cuerpo entra en modo supervivencia.
          </p>

          <p>
            <strong>Mensajes de la infancia.</strong> Si creciste escuchando que llorar era de débiles, que el enojo era malo, que mostrar emociones era peligroso, internalizaste que sentir no es seguro. Tu cerebro aprendió a protegerte apagando las emociones.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El costo del bloqueo emocional</h2>

          <p>
            Aunque el bloqueo puede sentirse como alivio temporal, tiene consecuencias importantes.
          </p>

          <p>
            <strong>Las relaciones se deterioran.</strong> Sin acceso a las emociones, es difícil conectar genuinamente con otros. Las personas pueden percibir tu distancia y alejarse. El aislamiento aumenta.
          </p>

          <p>
            <strong>El cuerpo paga el precio.</strong> Las emociones no expresadas no desaparecen. Se manifiestan como síntomas físicos: dolores de cabeza, problemas digestivos, tensión muscular, fatiga crónica, sistema inmune debilitado.
          </p>

          <p>
            <strong>Las decisiones se complican.</strong> Las emociones son información. Sin acceso a ellas, es difícil saber qué quieres, qué necesitas, qué es importante para ti. La vida se vuelve mecánica.
          </p>

          <p>
            <strong>La depresión puede aparecer.</strong> El embotamiento prolongado puede evolucionar hacia estados depresivos. La ausencia de emociones positivas genera un vacío que se convierte en desesperanza.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Esto no significa que seas insensible</h2>

          <p>
            Muchas personas con bloqueo emocional se juzgan duramente. "Soy frío." "No tengo corazón." "Algo está mal conmigo."
          </p>

          <p>
            Pero el bloqueo emocional es lo opuesto a la insensibilidad. Generalmente ocurre en personas que sienten demasiado, no demasiado poco. El sistema se apagó precisamente porque había demasiada sensibilidad, demasiado dolor, demasiada intensidad.
          </p>

          <p>
            No eres insensible. Eres alguien cuyo sistema de protección se activó con fuerza. Eso habla de cuánto has tenido que cargar, no de falta de capacidad de sentir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo empezar a reconectarte</h2>

          <p>
            El proceso de desbloqueo no es inmediato. Requiere paciencia y, frecuentemente, acompañamiento profesional. Pero hay pasos que puedes empezar a dar.
          </p>

          <p>
            <strong>Reconoce que esto está pasando.</strong> El primer paso es nombrar lo que sientes, o lo que no sientes. Reconocer que hay un bloqueo ya es un avance significativo.
          </p>

          <p>
            <strong>No te fuerces a sentir.</strong> Presionarte para experimentar emociones que no aparecen solo genera más frustración. El bloqueo se levantará cuando tu sistema se sienta seguro, no cuando lo demandes.
          </p>

          <p>
            <strong>Conecta con el cuerpo.</strong> Las emociones tienen manifestaciones físicas. A veces el camino de regreso a las emociones es a través del cuerpo. Movimiento, respiración consciente, contacto con la naturaleza. Actividades que te anclen en el presente físico.
          </p>

          <p>
            <strong>Crea espacios seguros.</strong> El sistema nervioso necesita percibir seguridad para soltar sus defensas. Busca momentos de quietud, lugares donde te sientas protegido, personas con quienes no tengas que fingir.
          </p>

          <p>
            <strong>Permite las emociones pequeñas.</strong> No necesitas tener un gran desahogo. Observa los pequeños movimientos emocionales: un momento de ternura, un instante de irritación, una chispa de interés. Esas pequeñas señales son el comienzo.
          </p>

          <p>
            <strong>Considera apoyo profesional.</strong> Un terapeuta especializado puede ayudarte a entender qué activó el bloqueo y a crear las condiciones para que el sistema se sienta seguro para volver a sentir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte como puerta de entrada</h2>

          <p>
            Cuando las palabras no alcanzan y las emociones están bloqueadas, el arte puede ser un camino alternativo.
          </p>

          <p>
            Pintar sin objetivo, solo dejando que los colores y las formas emerjan. Escribir sin estructura, solo vaciando lo que hay dentro. Escuchar música que alguna vez te conmovió. Crear algo con las manos.
          </p>

          <p>
            Estas actividades pueden atravesar las defensas conscientes y permitir que algo empiece a moverse. No se trata de producir nada bello. Se trata de crear un canal por donde algo pueda empezar a fluir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las emociones van a volver</h2>

          <p>
            El bloqueo emocional no es permanente. Con el tiempo, con seguridad, con trabajo consciente o terapéutico, las emociones van volviendo.
          </p>

          <p>
            Cuando vuelvan, puede que lleguen con intensidad. Puede que primero vuelvan las difíciles: la tristeza, el enojo, el miedo. Esto es normal. Es el sistema procesando lo que quedó pendiente.
          </p>

          <p>
            Permite que eso suceda. No lo apagues de nuevo. Cada emoción que dejas pasar es evidencia de que el bloqueo se está levantando.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            No poder sentir es una forma de sufrimiento silencioso que pocos entienden.
          </p>

          <p>
            Desde afuera puede parecer que estás bien, que eres fuerte, que nada te afecta. Pero por dentro hay un vacío que nadie ve.
          </p>

          <p>
            Tu sistema hizo lo que pudo con lo que tenía. Te protegió de la mejor manera que supo. Ahora, cuando estés listo, puedes empezar a abrirte de nuevo.
          </p>

          <p>
            Las emociones volverán. Y con ellas, la vida.
          </p>

          <p className="italic text-black/60 mt-8">
            No sentir nada también es un tipo de dolor. Y merece atención.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda una sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que tus emociones están bloqueadas y necesitas un espacio seguro para empezar a moverte, estoy aquí.
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

        <RelatedArticles currentSlug="bloqueo-emocional-no-siento-nada" category="emociones" />
      </div>
    </article>
  )
}
