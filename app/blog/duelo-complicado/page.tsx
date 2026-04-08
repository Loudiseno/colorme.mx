'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloComplicado() {
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
            Duelo complicado: qué es y cuándo buscar ayuda
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-complicado.webp"
            alt="Duelo complicado - Cuándo el duelo necesita atención profesional."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            El duelo duele. Eso es normal, esperado, y hasta necesario. Pero hay veces en que el duelo se estanca, se complica, y lo que debería ser un proceso —aunque doloroso— de sanación, se convierte en un lugar donde quedamos atrapados.
          </p>

          <p>
            Si llevas tiempo sintiéndote perdido en tu dolor y te preguntas si lo que vives es &quot;normal&quot;, este artículo es para ti.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué es el duelo complicado?</h2>

          <p>
            El duelo complicado —también llamado duelo prolongado o trastorno de duelo persistente— ocurre cuando el proceso de duelo no avanza de la manera esperada. La persona queda atrapada en un estado de dolor intenso que no disminuye con el tiempo.
          </p>

          <p>
            En el duelo &quot;normal&quot;, aunque el dolor es intenso al principio, gradualmente la persona comienza a adaptarse a la pérdida. Hay días difíciles, sí. Hay oleadas de dolor que regresan. Pero también comienzan a aparecer momentos de calma, de reconexión con la vida, de nuevos significados.
          </p>

          <p>
            En el duelo complicado, esto no sucede. El dolor permanece tan intenso como el primer día, meses o incluso años después de la pérdida. La persona siente que no puede avanzar, que está atrapada en un ciclo que no termina.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Señales de que tu duelo puede estar complicado</h2>

          <p>
            Es importante aclarar que cada duelo es único, y no hay un tiempo &quot;correcto&quot; para superarlo. Sin embargo, hay algunas señales que pueden indicar que el proceso se ha complicado:
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El dolor no disminuye con el tiempo</h3>
          <p>
            Han pasado meses —o años— y el dolor sigue siendo tan intenso como al principio. No hay días mejores. No hay momentos de respiro. El dolor es constante y abrumador.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">No puedes aceptar la muerte</h3>
          <p>
            Una parte de ti sigue sin creer que realmente pasó. Sigues esperando que esa persona regrese, que todo haya sido un error, que despiertes de esta pesadilla.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Evitas todo lo que te recuerde a la persona</h3>
          <p>
            O, por el contrario, te aferras de manera intensa a todo lo que te conecta con ella. Ambos extremos pueden ser señales de que algo se ha complicado.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Has perdido tu sentido de identidad</h3>
          <p>
            Sientes que una parte de ti murió con esa persona. No sabes quién eres sin ella. Tu vida ha perdido todo significado y propósito.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Te has aislado completamente</h3>
          <p>
            Te has desconectado de amigos, familia, actividades. No puedes —o no quieres— relacionarte con otros. El mundo se siente ajeno y lejano.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Tienes pensamientos de hacerte daño</h3>
          <p>
            Si tienes pensamientos de que la vida no vale la pena o de hacerte daño, busca ayuda inmediata. Esto es una señal urgente de que necesitas apoyo profesional.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">No puedes funcionar en tu vida diaria</h3>
          <p>
            El dolor te impide trabajar, cuidar de ti mismo, mantener relaciones, realizar actividades básicas. Tu vida se ha detenido por completo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Por qué el duelo se complica?</h2>

          <p>
            No hay una sola razón. El duelo puede complicarse por una combinación de factores:
          </p>

          <p>
            <strong>La naturaleza de la pérdida.</strong> Muertes súbitas, violentas, por suicidio o de hijos tienden a complicar el duelo más frecuentemente.
          </p>

          <p>
            <strong>La relación con la persona.</strong> Relaciones ambivalentes, dependientes o con asuntos sin resolver pueden hacer más difícil el proceso.
          </p>

          <p>
            <strong>Pérdidas acumuladas.</strong> Cuando no hemos procesado duelos anteriores, una nueva pérdida puede destapar todo el dolor acumulado.
          </p>

          <p>
            <strong>Falta de apoyo.</strong> No tener una red de contención, o tener personas alrededor que invaliden el dolor, dificulta el proceso.
          </p>

          <p>
            <strong>Historia personal.</strong> Trauma previo, depresión, ansiedad o dificultades de apego pueden hacer más vulnerable a la persona.
          </p>

          <p>
            <strong>Circunstancias de la muerte.</strong> No poder despedirse, no ver el cuerpo, o circunstancias traumáticas alrededor de la muerte.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La diferencia entre duelo normal y duelo complicado</h2>

          <p>
            Es importante no patologizar el duelo. El dolor intenso, la tristeza profunda, las oleadas de emoción... todo esto es parte normal del proceso. No significa que tu duelo esté &quot;mal&quot;.
          </p>

          <p>
            La diferencia clave está en si hay movimiento o no. En el duelo normal, aunque hay retrocesos, hay un proceso. Gradualmente, la persona comienza a adaptarse. Encuentra momentos de paz. Retoma actividades. Construye nuevos significados.
          </p>

          <p>
            En el duelo complicado, no hay movimiento. La persona está atrapada. El tiempo pasa, pero el dolor no cambia. No hay adaptación, solo supervivencia.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo buscar ayuda profesional</h2>

          <p>
            No necesitas esperar a que tu duelo &quot;se complique&quot; para buscar ayuda. Cualquier momento es un buen momento para pedir apoyo.
          </p>

          <p>Sin embargo, te recomiendo buscar ayuda profesional si:</p>

          <p>
            <strong>Han pasado varios meses y no hay ninguna mejoría.</strong> No tiene que ser una mejoría dramática, pero debería haber algún movimiento.
          </p>

          <p>
            <strong>No puedes funcionar.</strong> Si el dolor te impide realizar actividades básicas de la vida diaria de manera sostenida.
          </p>

          <p>
            <strong>Tienes pensamientos de hacerte daño.</strong> Esto es una emergencia. Busca ayuda inmediata.
          </p>

          <p>
            <strong>Estás usando sustancias para lidiar con el dolor.</strong> Alcohol, drogas, medicamentos sin prescripción.
          </p>

          <p>
            <strong>Te sientes completamente solo.</strong> No tienes a nadie con quien hablar de lo que sientes.
          </p>

          <p>
            <strong>Tu intuición te dice que necesitas ayuda.</strong> Si sientes que algo no está bien, hazle caso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué tipo de ayuda buscar</h2>

          <p>
            <strong>Tanatología.</strong> Un tanatólogo es un profesional especializado en duelo y pérdida. Puede ayudarte a procesar tu duelo de manera segura y acompañada.
          </p>

          <p>
            <strong>Psicoterapia.</strong> Un psicólogo o psicoterapeuta puede ayudarte, especialmente si hay trauma, depresión o ansiedad involucrados.
          </p>

          <p>
            <strong>Grupos de apoyo.</strong> Estar con otras personas que han vivido pérdidas similares puede ser profundamente sanador.
          </p>

          <p>
            <strong>Arteterapia.</strong> Para muchas personas, el arte ofrece una forma de expresar lo que las palabras no pueden. Puede ser especialmente útil cuando el duelo se ha estancado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No tienes que hacerlo solo</h2>

          <p>
            Si reconoces algunas de estas señales en ti, quiero que sepas algo importante: no hay nada malo en ti. El duelo complicado no es una debilidad. No es un fracaso. Es una señal de que tu sistema necesita apoyo adicional para procesar algo muy grande.
          </p>

          <p>
            Pedir ayuda no significa que estés &quot;mal&quot;. Significa que estás siendo responsable contigo mismo. Que reconoces que algunas cargas son demasiado pesadas para llevarlas solo.
          </p>

          <p>
            El duelo complicado tiene tratamiento. Con el apoyo adecuado, es posible desatorarse, procesar el dolor, y encontrar un camino hacia adelante. No un camino que olvide a quien perdiste, sino uno que te permita vivir y honrar su memoria al mismo tiempo.
          </p>

          <p className="italic text-black/60 mt-8">
            En ColorMe acompaño a personas que están atravesando duelos difíciles. Si sientes que tu proceso se ha complicado y necesitas apoyo, estoy aquí para ti.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que tu duelo necesita atención profesional, estoy aquí para acompañarte.
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
