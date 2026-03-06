'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloCulpaQueCargamos() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            La culpa que llevas a todas partes
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/culpa-que-cargamos.webp"
            alt="Culpa emocional, duelo y culpa, perdonarse a sí mismo, culpa excesiva, liberarse de la culpa."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Y cómo soltar lo que no te corresponde.
          </p>

          <p>
            La culpa es una compañera persistente.
          </p>

          <p>
            Te sigue cuando descansas en lugar de trabajar. Aparece cuando dices que no a algo. Te visita en la madrugada recordándote todo lo que pudiste hacer diferente.
          </p>

          <p>
            Pero no toda culpa es igual. Y no toda culpa te corresponde.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una emoción útil que puede volverse dañina</h2>

          <p>
            La culpa tiene una función original: señalar cuando hemos actuado en contra de nuestros valores o hemos causado daño.
          </p>

          <p>
            Es un mecanismo de regulación social. Nos ayuda a vivir en comunidad, a considerar el impacto de nuestras acciones en otros, a reparar cuando hemos fallado.
          </p>

          <p>
            El problema surge cuando la culpa se desconecta de sus causas reales. Cuando aparece sin motivo proporcional. Cuando se convierte en un estado permanente más que en una señal ocasional.
          </p>

          <p>
            En ese punto, la culpa deja de ser útil y se convierte en una carga que arrastramos sin saber cómo soltar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tipos de culpa</h2>

          <p>
            No toda culpa funciona de la misma manera.
          </p>

          <p>
            <strong>Culpa real o proporcional.</strong> Hiciste algo que genuinamente causó daño o violó tus valores. La emoción es proporcional a la acción. Esta culpa tiene información valiosa: te indica que necesitas reparar, disculparte o cambiar tu comportamiento.
          </p>

          <p>
            <strong>Culpa heredada.</strong> Cargas con responsabilidades que no son tuyas. Sientes que debes compensar los errores de tus padres, que eres responsable de la felicidad de otros, que las desgracias de tu familia de alguna manera te corresponden. Esta culpa no te pertenece.
          </p>

          <p>
            <strong>Culpa irracional.</strong> La emoción no corresponde con ninguna acción real. Te sientes culpable por descansar, por decir que no, por cuidarte, por existir. Esta culpa está desconectada de la realidad y generalmente tiene raíces profundas en mensajes de la infancia.
          </p>

          <p>
            <strong>Culpa sobreviviente.</strong> Aparece cuando algo malo le sucede a otros y a ti no. Sobrevivir a un accidente, a una enfermedad, a una pérdida que tocó a otros pero no a ti. &quot;¿Por qué yo me salvé y ellos no?&quot;
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">De dónde viene la culpa excesiva</h2>

          <p>
            La culpa desproporcionada generalmente tiene historia.
          </p>

          <p>
            <strong>Mensajes de la infancia.</strong> Si creciste escuchando que eras demasiado, que nunca hacías suficiente, que tus necesidades eran una carga, es probable que internalizaras la idea de que tu existencia misma es problemática.
          </p>

          <p>
            <strong>Familias con dinámicas disfuncionales.</strong> En algunas familias, los niños asumen responsabilidades emocionales que no les corresponden. Aprenden que deben mantener la paz, cuidar a los adultos, no causar problemas. Esa carga se convierte en culpa crónica.
          </p>

          <p>
            <strong>Tradiciones religiosas punitivas.</strong> Algunas formas de educación religiosa enfatizan el pecado, la indignidad y el castigo de maneras que generan culpa constante. La sensación de nunca ser suficientemente bueno puede persistir incluso después de abandonar esas creencias.
          </p>

          <p>
            <strong>Trauma.</strong> Las personas que han vivido eventos traumáticos frecuentemente experimentan culpa irracional. &quot;Debí haber hecho algo diferente.&quot; &quot;Si yo no hubiera estado ahí...&quot; Esta culpa es un intento de la mente de encontrar control en situaciones que fueron incontrolables.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Culpa y duelo</h2>

          <p>
            La culpa es una de las emociones más comunes en el proceso de duelo.
          </p>

          <p>
            &quot;Debí haber pasado más tiempo con él.&quot; &quot;Si lo hubiera llevado al médico antes.&quot; &quot;Nuestras últimas palabras fueron una discusión.&quot; &quot;No estuve ahí cuando murió.&quot;
          </p>

          <p>
            Esta culpa del duelo puede ser particularmente torturante porque ya no hay oportunidad de reparar, de decir lo que no se dijo, de hacer lo que no se hizo.
          </p>

          <p>
            Sin embargo, la mayoría de las veces esta culpa es desproporcionada. Magnificamos nuestras fallas y minimizamos todo lo que sí hicimos. Nos juzgamos con información que no teníamos en el momento. Asumimos un control sobre la vida y la muerte que ningún ser humano tiene.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo saber si tu culpa es proporcional</h2>

          <p>
            Hacerte algunas preguntas puede ayudar a evaluar si la culpa que sientes corresponde con la realidad.
          </p>

          <p>
            ¿Hubo realmente una acción dañina de tu parte, o te sientes culpable por algo que estaba fuera de tu control?
          </p>

          <p>
            ¿Otras personas razonables considerarían que hiciste algo malo, o sólo tú te juzgas tan duramente?
          </p>

          <p>
            ¿La intensidad de tu culpa corresponde con la gravedad de lo sucedido?
          </p>

          <p>
            ¿Estás asumiendo responsabilidad por las decisiones o emociones de otras personas adultas?
          </p>

          <p>
            ¿Te sientes culpable por cuidarte, por tener necesidades, por existir?
          </p>

          <p>
            Si la culpa persiste sin proporción con los hechos, probablemente estás cargando algo que no te corresponde.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Pasos para procesar la culpa</h2>

          <p>
            <strong>Nombra lo que sientes.</strong> Reconocer la culpa, sacarla del fondo y mirarla directamente, es el primer paso. &quot;Estoy sintiendo culpa por esto.&quot;
          </p>

          <p>
            <strong>Evalúa la proporcionalidad.</strong> Con honestidad, pregúntate si tu culpa corresponde con una acción real y con la gravedad de esa acción.
          </p>

          <p>
            <strong>Distingue responsabilidad de culpa.</strong> Puedes asumir responsabilidad por tus acciones sin destruirte con culpa. Reconocer que fallaste y buscar reparar es diferente a castigarte indefinidamente.
          </p>

          <p>
            <strong>Repara si es posible.</strong> Si hiciste algo que genuinamente causó daño, busca formas de reparar: disculparte, cambiar tu comportamiento, hacer algo que compense. La acción puede aliviar la culpa de maneras que la rumiación no puede.
          </p>

          <p>
            <strong>Cuestiona los mensajes heredados.</strong> Si tu culpa tiene raíces en mensajes de la infancia o creencias que internalizaste, puedes trabajar conscientemente en desmontar esas creencias. Esto generalmente requiere tiempo y puede beneficiarse de apoyo terapéutico.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Perdonarte a ti mismo</h2>

          <p>
            El perdón propio es uno de los trabajos más difíciles de la vida emocional.
          </p>

          <p>
            Perdonarte no significa minimizar lo que hiciste o negar el impacto de tus acciones. Significa reconocer que eres humano, que los humanos fallamos, y que cargar culpa eternamente no ayuda a nadie.
          </p>

          <p>
            El perdón propio es un proceso, no un evento. Puede requerir tiempo, trabajo interno, a veces apoyo profesional. No sucede de un día para otro porque decidiste que ya era suficiente.
          </p>

          <p>
            Pero es posible. Y es necesario para poder vivir con cierta paz.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte como canal para la culpa</h2>

          <p>
            Expresar la culpa creativamente puede ser parte del proceso de liberación.
          </p>

          <p>
            Escribir cartas que nunca enviarás: a ti mismo, a la persona a quien sientes que fallaste, a quien te hizo sentir que nunca eras suficiente.
          </p>

          <p>
            Pintar o dibujar lo que sientes sin preocuparte por el resultado. El acto de exteriorizar puede sacar del cuerpo y la mente algo que estaba atrapado.
          </p>

          <p>
            Crear rituales simbólicos de liberación: escribir la culpa en papel y quemarlo, enterrar algo que represente lo que sueltas, cualquier acto que marque la intención de dejar ir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            La culpa tiene su lugar. Nos ayuda a ser personas responsables y consideradas.
          </p>

          <p>
            Pero la culpa excesiva, la culpa heredada, la culpa por existir, esa no tiene lugar. Sólo pesa sin servir.
          </p>

          <p>
            No todo lo que sientes como tu responsabilidad lo es. No todo lo que cargas te corresponde.
          </p>

          <p>
            Aprender a distinguir qué culpa es información útil y qué culpa es una carga innecesaria puede cambiar significativamente la calidad de tu vida.
          </p>

          <p className="italic text-black/60 mt-8">
            No eres mala persona por fallar. Eres humano. Y los humanos fallamos.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si la culpa te está pesando y necesitas acompañamiento, estoy aquí para ti.
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
