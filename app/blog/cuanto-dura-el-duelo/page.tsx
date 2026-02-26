'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloCuantoDuraElDuelo() {
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
            ¿Cuánto dura el duelo?
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/cuanto-dura-el-duelo.webp"
            alt="¿Cuánto dura el duelo? - La verdad sobre la duración del proceso de duelo."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            &quot;¿Cuándo voy a dejar de sentir este dolor?&quot;
          </p>

          <p>
            Es la pregunta que todos nos hacemos cuando atravesamos un duelo. Necesitamos saber que esto no va a durar para siempre. Necesitamos una luz al final del túnel.
          </p>

          <p>Voy a darte una respuesta honesta.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La respuesta corta</h2>

          <p>
            No hay una fecha de expiración para el duelo.
          </p>

          <p>
            No hay un día en el que te despiertes y digas &quot;listo, ya pasó&quot;. No existe una fórmula de X meses para procesar una pérdida.
          </p>

          <p>
            Pero hay algo importante que necesitas saber: <strong>el duelo no dura para siempre con la misma intensidad</strong>. Y eso sí es una promesa.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué es el duelo?</h2>

          <p>
            El duelo es la respuesta natural ante cualquier pérdida significativa. No se limita a la muerte de un ser querido. También podemos experimentar duelo por la pérdida de la salud, de un trabajo, de una relación, de un proyecto de vida, de la estabilidad económica, o de cualquier cosa que tenga un valor importante para nosotros.
          </p>

          <p>Cada pérdida merece ser reconocida y procesada.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué dice la ciencia sobre la duración del duelo?</h2>

          <p>
            Los estudios hablan de rangos, no de fechas exactas.
          </p>

          <p>
            La mayoría de las personas experimentan una disminución significativa de los síntomas más intensos entre los 6 y 12 meses después de la pérdida. Esto no significa que &quot;superen&quot; el duelo. Significa que el dolor más agudo comienza a ser más manejable.
          </p>

          <p>
            El duelo complicado o prolongado se diagnostica cuando los síntomas intensos persisten más allá de los 12 meses sin mostrar mejoría. Esto ocurre en aproximadamente el 10-15% de las personas en duelo.
          </p>

          <p>Cada persona y cada pérdida es diferente, por lo que estos rangos son solo referencias generales.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Factores que influyen en la duración del duelo</h2>

          <p>No todos los duelos son iguales. Estas variables afectan el proceso:</p>

          <p><strong>El tipo de pérdida.</strong> El impacto en tu vida cotidiana varía según lo que hayas perdido y el significado que tenía para ti.</p>

          <p><strong>Las circunstancias.</strong> Una pérdida súbita o traumática generalmente requiere más tiempo de procesamiento que una pérdida anticipada donde hubo oportunidad de prepararse.</p>

          <p><strong>Tu historia personal.</strong> Si has tenido pérdidas previas no resueltas, este duelo puede reactivarlas. Si tienes antecedentes de depresión o ansiedad, el proceso puede ser más complejo.</p>

          <p><strong>Tu red de apoyo.</strong> Las personas con apoyo social sólido tienden a procesar el duelo de manera más saludable. El aislamiento puede prolongar el dolor.</p>

          <p><strong>Si hubo oportunidad de cierre.</strong> Muchas personas que no pudieron despedirse o cerrar ciclos experimentan duelos más prolongados.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las fases del duelo</h2>

          <p>
            El modelo de las 5 etapas del duelo de Kübler-Ross (negación, ira, negociación, depresión y aceptación) es conocido, pero es importante entender que estas etapas no son lineales ni universales.
          </p>

          <p>El duelo real es más fluido.</p>

          <p>
            Puedes sentir aceptación un día y tristeza profunda al siguiente. Puedes estar bien por semanas y luego experimentar un momento difícil inesperadamente. Puedes tener emociones contradictorias en el mismo día.
          </p>

          <p>Esto es completamente normal. No significa que estés retrocediendo.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Señales de que tu duelo está avanzando</h2>

          <p>El duelo no avanza en línea recta, pero sí hay señales de progreso:</p>

          <p>Empiezas a tener más días tranquilos que días difíciles.</p>

          <p>Los recuerdos comienzan a traer ternura además de dolor.</p>

          <p>Puedes hablar de tu pérdida con más calma.</p>

          <p>Encuentras momentos de bienestar genuino sin sentirte culpable.</p>

          <p>Empiezas a imaginar un futuro, aunque sea diferente al que habías planeado.</p>

          <p>Tu cuerpo comienza a recuperar su ritmo: mejor sueño, mejor apetito, más energía.</p>

          <p>Ninguna de estas señales significa que hayas &quot;superado&quot; el duelo. Significa que estás aprendiendo a vivir con él.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cuándo el duelo necesita atención profesional?</h2>

          <p>El duelo normal es doloroso. El duelo complicado puede ser incapacitante.</p>

          <p><strong>Considera buscar ayuda profesional si después de varios meses experimentas:</strong></p>

          <p>Dificultad para realizar actividades básicas de tu vida diaria.</p>

          <p>Pensamientos persistentes de hacerte daño.</p>

          <p>Uso de alcohol o sustancias para aliviar el dolor.</p>

          <p>Deterioro significativo de tu salud física.</p>

          <p>Sensación de que el dolor no ha disminuido en intensidad.</p>

          <p>Aislamiento prolongado de todos tus vínculos.</p>

          <p>El duelo complicado es tratable. No tienes que quedarte atrapado en el dolor.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo también afecta tu cuerpo</h2>

          <p>Algo que no siempre se menciona: el duelo tiene manifestaciones físicas.</p>

          <p>
            Puedes experimentar fatiga, dolor en el pecho o sensación de opresión, problemas digestivos, dolores de cabeza, sistema inmune debilitado, cambios en el apetito, alteraciones del sueño.
          </p>

          <p>
            Esto es real. El duelo activa respuestas de estrés en tu cuerpo. La hormona cortisol se eleva, tu sistema nervioso está en alerta.
          </p>

          <p>Tu cuerpo también está procesando la pérdida. Cuídalo con amabilidad.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que puedes hacer mientras atraviesas el duelo</h2>

          <p>No puedes acelerar el proceso, pero sí puedes atravesarlo de manera más saludable.</p>

          <p><strong>Permite las emociones.</strong> Reprimir lo que sientes no lo hace desaparecer, solo lo pospone. Está bien no estar bien.</p>

          <p><strong>Cuida tu cuerpo.</strong> Come aunque no tengas hambre. Descansa aunque cueste. Mueve tu cuerpo aunque sea caminar un poco.</p>

          <p><strong>Habla de tu pérdida si lo necesitas.</strong> Expresar lo que sientes puede ayudar a procesarlo.</p>

          <p><strong>Busca formas de expresión.</strong> El arte, la escritura, la música pueden ayudarte a canalizar emociones que las palabras no alcanzan.</p>

          <p><strong>Acepta los altibajos.</strong> Las fechas especiales, los aniversarios, los lugares con recuerdos pueden reactivar el dolor. Esto es parte del proceso.</p>

          <p><strong>Respeta tu propio ritmo.</strong> El duelo de otra persona no tiene nada que ver con el tuyo. Cada quien procesa a su manera.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            El duelo es, en el fondo, una expresión de lo que amamos y valoramos. Con el tiempo, ese dolor encuentra nuevas formas de acomodarse. Los recuerdos pueden comenzar a nutrir más y a doler menos. La ausencia sigue presente, pero ya no consume todo el espacio.
          </p>

          <p>Aprender a vivir con la pérdida es un proceso que toma el tiempo que necesita tomar.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No tienes que hacer esto solo</h2>

          <p>El duelo no es un camino que debas recorrer en soledad.</p>

          <p>
            Busca apoyo: amigos, familia, grupos de duelo, profesionales de salud mental. El arte también puede ser un camino. Expresar lo que sientes a través de colores, formas y creación te permite procesar emociones que a veces no caben en palabras.
          </p>

          <p>No hay vergüenza en necesitar ayuda. Hay valentía en buscarla.</p>

          <p className="italic text-black/60 mt-8">
            El duelo toma el tiempo que necesita. Y ese tiempo es válido.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás atravesando un duelo y necesitas un espacio seguro para procesar lo que sientes, puedo acompañarte.
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
