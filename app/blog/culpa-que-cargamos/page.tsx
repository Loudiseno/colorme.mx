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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            La culpa que llevas a todas partes
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/culpa-que-cargamos.webp"
            alt="Culpa emocional, duelo y culpa, perdonarse a si mismo, culpa excesiva, liberarse de la culpa."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Y como soltar lo que no te corresponde.
          </p>

          <p>
            La culpa es una companera persistente.
          </p>

          <p>
            Te sigue cuando descansas en lugar de trabajar. Aparece cuando dices que no a algo. Te visita en la madrugada recordandote todo lo que pudiste hacer diferente.
          </p>

          <p>
            Pero no toda culpa es igual. Y no toda culpa te corresponde.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una emocion util que puede volverse danina</h2>

          <p>
            La culpa tiene una funcion original: senalar cuando hemos actuado en contra de nuestros valores o hemos causado dano.
          </p>

          <p>
            Es un mecanismo de regulacion social. Nos ayuda a vivir en comunidad, a considerar el impacto de nuestras acciones en otros, a reparar cuando hemos fallado.
          </p>

          <p>
            El problema surge cuando la culpa se desconecta de sus causas reales. Cuando aparece sin motivo proporcional. Cuando se convierte en un estado permanente mas que en una senal ocasional.
          </p>

          <p>
            En ese punto, la culpa deja de ser util y se convierte en una carga que arrastramos sin saber como soltar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tipos de culpa</h2>

          <p>
            No toda culpa funciona de la misma manera.
          </p>

          <p>
            <strong>Culpa real o proporcional.</strong> Hiciste algo que genuinamente causo dano o violo tus valores. La emocion es proporcional a la accion. Esta culpa tiene informacion valiosa: te indica que necesitas reparar, disculparte o cambiar tu comportamiento.
          </p>

          <p>
            <strong>Culpa heredada.</strong> Cargas con responsabilidades que no son tuyas. Sientes que debes compensar los errores de tus padres, que eres responsable de la felicidad de otros, que las desgracias de tu familia de alguna manera te corresponden. Esta culpa no te pertenece.
          </p>

          <p>
            <strong>Culpa irracional.</strong> La emocion no corresponde con ninguna accion real. Te sientes culpable por descansar, por decir que no, por cuidarte, por existir. Esta culpa esta desconectada de la realidad y generalmente tiene raices profundas en mensajes de la infancia.
          </p>

          <p>
            <strong>Culpa sobreviviente.</strong> Aparece cuando algo malo le sucede a otros y a ti no. Sobrevivir a un accidente, a una enfermedad, a una perdida que toco a otros pero no a ti. &quot;Por que yo me salve y ellos no?&quot;
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">De donde viene la culpa excesiva</h2>

          <p>
            La culpa desproporcionada generalmente tiene historia.
          </p>

          <p>
            <strong>Mensajes de la infancia.</strong> Si creciste escuchando que eras demasiado, que nunca hacias suficiente, que tus necesidades eran una carga, es probable que internalizaras la idea de que tu existencia misma es problematica.
          </p>

          <p>
            <strong>Familias con dinamicas disfuncionales.</strong> En algunas familias, los ninos asumen responsabilidades emocionales que no les corresponden. Aprenden que deben mantener la paz, cuidar a los adultos, no causar problemas. Esa carga se convierte en culpa cronica.
          </p>

          <p>
            <strong>Tradiciones religiosas punitivas.</strong> Algunas formas de educacion religiosa enfatizan el pecado, la indignidad y el castigo de maneras que generan culpa constante. La sensacion de nunca ser suficientemente bueno puede persistir incluso despues de abandonar esas creencias.
          </p>

          <p>
            <strong>Trauma.</strong> Las personas que han vivido eventos traumaticos frecuentemente experimentan culpa irracional. &quot;Debi haber hecho algo diferente.&quot; &quot;Si yo no hubiera estado ahi...&quot; Esta culpa es un intento de la mente de encontrar control en situaciones que fueron incontrolables.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Culpa y duelo</h2>

          <p>
            La culpa es una de las emociones mas comunes en el proceso de duelo.
          </p>

          <p>
            &quot;Debi haber pasado mas tiempo con el.&quot; &quot;Si lo hubiera llevado al medico antes.&quot; &quot;Nuestras ultimas palabras fueron una discusion.&quot; &quot;No estuve ahi cuando murio.&quot;
          </p>

          <p>
            Esta culpa del duelo puede ser particularmente torturante porque ya no hay oportunidad de reparar, de decir lo que no se dijo, de hacer lo que no se hizo.
          </p>

          <p>
            Sin embargo, la mayoria de las veces esta culpa es desproporcionada. Magnificamos nuestras fallas y minimizamos todo lo que si hicimos. Nos juzgamos con informacion que no teniamos en el momento. Asumimos un control sobre la vida y la muerte que ningun ser humano tiene.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como saber si tu culpa es proporcional</h2>

          <p>
            Hacerte algunas preguntas puede ayudar a evaluar si la culpa que sientes corresponde con la realidad.
          </p>

          <p>
            Hubo realmente una accion danina de tu parte, o te sientes culpable por algo que estaba fuera de tu control?
          </p>

          <p>
            Otras personas razonables considerarian que hiciste algo malo, o solo tu te juzgas tan duramente?
          </p>

          <p>
            La intensidad de tu culpa corresponde con la gravedad de lo sucedido?
          </p>

          <p>
            Estas asumiendo responsabilidad por las decisiones o emociones de otras personas adultas?
          </p>

          <p>
            Te sientes culpable por cuidarte, por tener necesidades, por existir?
          </p>

          <p>
            Si la culpa persiste sin proporcion con los hechos, probablemente estas cargando algo que no te corresponde.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Pasos para procesar la culpa</h2>

          <p>
            <strong>Nombra lo que sientes.</strong> Reconocer la culpa, sacarla del fondo y mirarla directamente, es el primer paso. &quot;Estoy sintiendo culpa por esto.&quot;
          </p>

          <p>
            <strong>Evalua la proporcionalidad.</strong> Con honestidad, preguntate si tu culpa corresponde con una accion real y con la gravedad de esa accion.
          </p>

          <p>
            <strong>Distingue responsabilidad de culpa.</strong> Puedes asumir responsabilidad por tus acciones sin destruirte con culpa. Reconocer que fallaste y buscar reparar es diferente a castigarte indefinidamente.
          </p>

          <p>
            <strong>Repara si es posible.</strong> Si hiciste algo que genuinamente causo dano, busca formas de reparar: disculparte, cambiar tu comportamiento, hacer algo que compense. La accion puede aliviar la culpa de maneras que la rumiacion no puede.
          </p>

          <p>
            <strong>Cuestiona los mensajes heredados.</strong> Si tu culpa tiene raices en mensajes de la infancia o creencias que internalizaste, puedes trabajar conscientemente en desmontar esas creencias. Esto generalmente requiere tiempo y puede beneficiarse de apoyo terapeutico.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Perdonarte a ti mismo</h2>

          <p>
            El perdon propio es uno de los trabajos mas dificiles de la vida emocional.
          </p>

          <p>
            Perdonarte no significa minimizar lo que hiciste o negar el impacto de tus acciones. Significa reconocer que eres humano, que los humanos fallamos, y que cargar culpa eternamente no ayuda a nadie.
          </p>

          <p>
            El perdon propio es un proceso, no un evento. Puede requerir tiempo, trabajo interno, a veces apoyo profesional. No sucede de un dia para otro porque decidiste que ya era suficiente.
          </p>

          <p>
            Pero es posible. Y es necesario para poder vivir con cierta paz.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El arte como canal para la culpa</h2>

          <p>
            Expresar la culpa creativamente puede ser parte del proceso de liberacion.
          </p>

          <p>
            Escribir cartas que nunca enviaras: a ti mismo, a la persona a quien sientes que fallaste, a quien te hizo sentir que nunca eras suficiente.
          </p>

          <p>
            Pintar o dibujar lo que sientes sin preocuparte por el resultado. El acto de exteriorizar puede sacar del cuerpo y la mente algo que estaba atrapado.
          </p>

          <p>
            Crear rituales simbolicos de liberacion: escribir la culpa en papel y quemarlo, enterrar algo que represente lo que sueltas, cualquier acto que marque la intencion de dejar ir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            La culpa tiene su lugar. Nos ayuda a ser personas responsables y consideradas.
          </p>

          <p>
            Pero la culpa excesiva, la culpa heredada, la culpa por existir, esa no tiene lugar. Solo pesa sin servir.
          </p>

          <p>
            No todo lo que sientes como tu responsabilidad lo es. No todo lo que cargas te corresponde.
          </p>

          <p>
            Aprender a distinguir que culpa es informacion util y que culpa es una carga innecesaria puede cambiar significativamente la calidad de tu vida.
          </p>

          <p className="italic text-black/60 mt-8">
            No eres mala persona por fallar. Eres humano. Y los humanos fallamos.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si la culpa te esta pesando y necesitas acompanamiento, estoy aqui para ti.
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
