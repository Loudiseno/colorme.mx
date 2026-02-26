'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloBeneficiosArte() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">ARTETERAPIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Cómo el arte sana: lo que sucede en tu cerebro cuando creas
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/beneficios-del-arte.webp"
            alt="Beneficios del arte para la salud mental y el bienestar."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            ¿Alguna vez te has preguntado por qué colorear un mandala te relaja tanto? ¿O por qué después de pintar te sientes más ligero, aunque no hayas &quot;hablado&quot; de nada?
          </p>

          <p>
            No es magia. Es neurociencia. Y hoy quiero contarte lo que realmente sucede en tu cerebro cuando creas arte, porque entenderlo puede cambiar la forma en que te cuidas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte activa el sistema de recompensa</h2>

          <p>
            Cuando creas algo —ya sea un dibujo, una pintura o simplemente garabatos en una hoja— tu cerebro libera <strong>dopamina</strong>, el neurotransmisor del placer y la motivación.
          </p>

          <p>
            Es el mismo sistema que se activa cuando comes algo delicioso, cuando recibes un abrazo o cuando logras algo importante. La diferencia es que con el arte, tú controlas el proceso. Tú decides cuándo y cómo acceder a esa sensación de bienestar.
          </p>

          <p>
            No necesitas ser bueno. No necesitas que el resultado sea &quot;bonito&quot;. El simple acto de crear es suficiente para activar este sistema.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El cortisol baja cuando creas</h2>

          <p>
            Un estudio publicado en <em>Art Therapy: Journal of the American Art Therapy Association</em> demostró que solo 45 minutos de actividad creativa reducen significativamente los niveles de <strong>cortisol</strong>, la hormona del estrés.
          </p>

          <p>
            Lo más interesante es que esto sucede independientemente de la experiencia artística previa. No importa si nunca has tomado una clase de arte. Tu cuerpo responde igual.
          </p>

          <p>
            Cuando estás estresado, ansioso o abrumado, crear arte es una forma tangible de darle a tu cuerpo lo que necesita para regularse.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El estado de flujo: cuando el tiempo desaparece</h2>

          <p>
            ¿Has notado cómo cuando estás concentrado en algo creativo, el tiempo parece detenerse? Eso se llama <strong>estado de flujo</strong>, y es uno de los estados mentales más beneficiosos que existen.
          </p>

          <p>
            En el estado de flujo, la corteza prefrontal —la parte del cerebro responsable de la autocrítica, la preocupación y el análisis excesivo— se calma. Dejas de juzgarte. Dejas de pensar en el pasado o en el futuro. Solo estás presente.
          </p>

          <p>
            Este estado es similar al que se alcanza con la meditación, pero para muchas personas es más fácil de acceder a través del arte que sentándose en silencio.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte procesa lo que las palabras no pueden</h2>

          <p>
            Las experiencias traumáticas, el duelo y las emociones intensas muchas veces se almacenan en partes del cerebro que no tienen acceso directo al lenguaje. Por eso a veces sabes que algo te duele, pero no puedes explicarlo.
          </p>

          <p>
            El arte ofrece un camino diferente. Al crear imágenes, formas y colores, puedes expresar y procesar lo que las palabras no alcanzan. No necesitas entender lo que estás creando para que te ayude. El proceso mismo es terapéutico.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La conexión mente-cuerpo</h2>

          <p>
            Cuando dibujas, pintas o moldeas, estás usando tus manos de manera intencional. Este movimiento físico activa la conexión entre tu cuerpo y tu mente, ayudándote a salir de pensamientos repetitivos y a anclarte en el presente.
          </p>

          <p>
            Para personas que viven con ansiedad o que tienden a &quot;vivir en su cabeza&quot;, esta reconexión con el cuerpo puede ser profundamente sanadora.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No necesitas ser artista</h2>

          <p>
            Este es quizás el punto más importante: todos estos beneficios están disponibles para ti, exactamente como eres ahora.
          </p>

          <p>
            No necesitas talento. No necesitas experiencia. No necesitas que el resultado sea digno de una galería. De hecho, cuando soltamos la expectativa del resultado y nos enfocamos en el proceso, los beneficios se multiplican.
          </p>

          <p>
            El arte como herramienta terapéutica no se trata de crear obras maestras. Se trata de usar la creatividad como un camino hacia el bienestar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo empezar</h2>

          <p>
            Si quieres experimentar estos beneficios, aquí hay algunas ideas simples:
          </p>

          <p>
            <strong>Colorear.</strong> Sí, colorear libros para adultos. Es accesible, relajante y no requiere ninguna habilidad previa.
          </p>

          <p>
            <strong>Garabatear.</strong> Mientras hablas por teléfono, mientras piensas, mientras esperas. Los garabatos también cuentan.
          </p>

          <p>
            <strong>Pintar sin objetivo.</strong> Toma colores que te atraigan y ponlos en el papel. Sin plan. Sin expectativa. Solo observa qué sucede.
          </p>

          <p>
            <strong>Crear un diario visual.</strong> En lugar de escribir cómo te sientes, dibújalo. Puede ser abstracto, puede ser simple. Lo que importa es el proceso.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe uso el arte como herramienta terapéutica porque he visto su poder transformador una y otra vez. Si quieres explorar cómo el proceso creativo puede ayudarte en tu propio camino de sanación, estoy aquí para acompañarte.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si quieres descubrir cómo el arte puede ayudarte a sanar, estoy aquí para guiarte en el proceso.
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
