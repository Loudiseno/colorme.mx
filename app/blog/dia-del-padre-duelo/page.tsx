'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import RelatedArticles from '@/components/RelatedArticles'
import { siteConfig } from '@/lib/seo'

export default function DiadelPadreDuelo() {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8">
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
            Día del Padre cuando tu papá ya no está (o cuando la relación nunca fue lo que esperabas)
          </h1>
          <p className="text-black/60 italic">Por Lourdes Pérez | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-por-padre.jpeg"
            alt="Día del Padre en duelo — ColorMe"
            width={800}
            height={500}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Junio llega y con él las publicaciones en redes sociales, los comerciales de regalos, las fotos de padres e hijos sonriendo. Todo el mundo parece tener algo que celebrar.
          </p>

          <p>Y tú no sabes qué hacer con lo que sientes.</p>

          <p>
            Tal vez tu papá murió y este es el primer Día del Padre sin él, o el décimo, y sigue doliendo de formas que te sorprenden. Tal vez está vivo pero la relación está rota, o nunca existió realmente. O tienes sentimientos tan mezclados hacia él que no sabes si lo que sientes es duelo, enojo, alivio o todo junto.
          </p>

          <p>
            Este día puede ser particularmente difícil cuando tu experiencia no encaja en la narrativa de celebración que está por todas partes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando tu papá murió</h2>

          <p>
            La muerte de un padre marca un antes y un después. No importa la edad que tengas cuando sucede, no importa si la relación era cercana o distante, perder a tu papá cambia algo fundamental en cómo te ubicas en el mundo.
          </p>

          <p>
            El Día del Padre después de esa pérdida puede activar el duelo de maneras inesperadas. Aunque hayas avanzado, aunque la vida haya continuado, esta fecha tiene la capacidad de traer todo de vuelta. El cuerpo recuerda antes que la mente. Puedes despertar ese domingo sintiéndote extraño sin saber por qué, hasta que recuerdas qué día es.
          </p>

          <p>Y luego está el mundo afuera, celebrando. Recordándote en cada esquina lo que ya no tienes.</p>

          <p>Algunas cosas que puedes sentir:</p>

          <p>
            <strong>Tristeza.</strong> Por su ausencia, por las conversaciones que ya no tendrán, por los momentos que no compartirán. Por todo lo que quedó sin decir.
          </p>

          <p>
            <strong>Nostalgia.</strong> Por los buenos recuerdos, por la versión de él que más quieres recordar, por los Días del Padre anteriores cuando todavía estaba.
          </p>

          <p>
            <strong>Enojo.</strong> Por que se fue, por que no está aquí, por la injusticia de la pérdida. El enojo es parte del duelo aunque no siempre se reconozca.
          </p>

          <p>
            <strong>Soledad.</strong> Especialmente intensa cuando ves a otros celebrando con sus padres. La soledad de pertenecer a un club al que nadie quiere entrar.
          </p>

          <p>
            <strong>Culpa.</strong> Por lo que no dijiste, por lo que no hiciste, por las llamadas que no contestaste, por el tiempo que no pasaron juntos.
          </p>

          <p>
            No hay forma correcta de pasar este día. Puedes honrar su memoria, puedes ignorar la fecha, puedes llorar, puedes recordar con una sonrisa. Lo que necesites está bien.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando la relación era complicada</h2>

          <p>
            No todos los padres fueron buenos padres. No todas las relaciones padre-hijo fueron de amor incondicional y presencia constante. Hay padres ausentes, padres negligentes, padres abusivos, padres que simplemente no supieron o no pudieron estar.
          </p>

          <p>
            Cuando tu experiencia con tu padre fue difícil, el Día del Padre puede traer emociones que son difíciles de ubicar.
          </p>

          <p>
            Si tu papá sigue vivo pero la relación está rota, este día puede recordarte la distancia. La expectativa social de que llames, felicites, celebres, cuando lo que sientes no se parece en nada a eso.
          </p>

          <p>
            Si tu papá murió y la relación era complicada, el duelo se vuelve más complejo. Puedes estar de luto no solo por la persona que murió, sino por el padre que nunca tuviste. Por la relación que esperabas y que nunca llegó. Por la posibilidad de reconciliación que ya no existe.
          </p>

          <p>Algunas cosas que puedes sentir:</p>

          <p>
            <strong>Alivio mezclado con culpa.</strong> Si la relación era dolorosa o dañina, puede haber alivio en la distancia o en la muerte. Y ese alivio puede traer una culpa enorme, porque se supone que deberías sentir otra cosa.
          </p>

          <p>
            <strong>Enojo.</strong> Por lo que no te dio, por lo que te hizo, por las formas en que te falló. El enojo hacia un padre, especialmente uno que murió, puede sentirse prohibido.
          </p>

          <p>
            <strong>Tristeza por lo que nunca fue.</strong> El duelo por el padre que necesitabas y no tuviste es real. Puedes llorar a alguien que nunca existió realmente, y ese duelo es válido.
          </p>

          <p>
            <strong>Confusión.</strong> Sentimientos contradictorios que coexisten: amor y resentimiento, tristeza y alivio, extrañar y al mismo tiempo estar en paz con la distancia.
          </p>

          <p>
            <strong>Envidia.</strong> Hacia quienes tuvieron padres presentes, amorosos, protectores. Hacia quienes pueden celebrar este día sin complicaciones.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo por el padre que no tuviste</h2>

          <p>
            Hay un tipo de duelo del que se habla poco: el duelo por alguien que sigue vivo, o el duelo por una relación que nunca existió.
          </p>

          <p>
            Puedes hacer duelo por el padre que necesitabas en la infancia y que no estuvo. Por la protección que no recibiste. Por las palabras de afirmación que nunca llegaron. Por el modelo de hombre que no tuviste. Por la relación padre-hijo que veías en otros y que anhelabas para ti.
          </p>

          <p>
            Este duelo es tan real como el duelo por una muerte física. Y muchas veces es más confuso, porque no hay un momento claro de pérdida, no hay funeral, no hay permiso social para estar de luto por algo que nunca se tuvo.
          </p>

          <p>
            El Día del Padre puede activar este duelo de maneras intensas. Ver a otros celebrar lo que tú no tuviste puede abrir heridas que creías cerradas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando eres padre y también hijo huérfano</h2>

          <p>
            Hay una complejidad adicional cuando eres padre y tu propio padre murió. Este día te ubica en dos lugares al mismo tiempo.
          </p>

          <p>
            Por un lado, es tu día. Tus hijos te celebran, te abrazan, te hacen sentir querido. Hay alegría genuina en eso.
          </p>

          <p>
            Por otro lado, la ausencia de tu padre está presente. Piensas en él cuando juegas con tus hijos. Te preguntas si estaría orgulloso. Lo extrañas de maneras que no esperabas.
          </p>

          <p>
            Puedes sentir alegría y tristeza el mismo día, a veces en el mismo momento. Puedes recibir el amor de tus hijos mientras extrañas dar ese amor a tu padre. La paternidad y la orfandad coexisten.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Navegar el día</h2>

          <p>No hay receta para pasar un Día del Padre difícil, pero hay algunas cosas que pueden ayudar:</p>

          <p>
            <strong>Reduce la exposición si la necesitas.</strong> Las redes sociales están llenas de celebraciones que pueden doler. No tienes obligación de verlas. Puedes silenciar, desconectarte, protegerte.
          </p>

          <p>
            <strong>Decide cómo quieres pasar el día.</strong> Algunas personas prefieren honrar la memoria de su padre con algún ritual. Otras prefieren tratar el día como cualquier otro. Otras necesitan espacio para llorar. Ninguna opción es incorrecta.
          </p>

          <p>
            <strong>Habla con alguien que entienda.</strong> Si tienes personas cercanas que han pasado por algo similar, puede ayudar compartir. La soledad de este día se alivia cuando alguien más entiende sin que tengas que explicar demasiado.
          </p>

          <p>
            <strong>Permite la complejidad.</strong> No tienes que resolver tus sentimientos hacia tu padre para poder sentirlos. Puedes extrañarlo y estar enojado con él. Puedes amarlo y reconocer que te hizo daño. Puedes sentir alivio y tristeza. Todo puede coexistir.
          </p>

          <p>
            <strong>Sé compasivo contigo mismo.</strong> Si el día resulta más difícil de lo que esperabas, no te juzgues. El duelo no sigue calendarios predecibles. Que te afecte no significa que no hayas avanzado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Para quienes acompañan</h2>

          <p>Si conoces a alguien para quien este día es difícil, hay formas de estar presente:</p>

          <p>
            No asumas que todos tienen algo que celebrar. Un mensaje simple reconociendo que el día puede ser complicado puede significar mucho.
          </p>

          <p>
            No minimices relaciones complicadas. Frases como &quot;pero era tu papá&quot; o &quot;deberías perdonar&quot; no ayudan. Las relaciones difíciles son difíciles, y el duelo que traen es legítimo.
          </p>

          <p>
            Ofrece compañía sin expectativas. A veces lo que alguien necesita es no estar solo, sin tener que hablar o explicar.
          </p>

          <p className="italic text-black/60 mt-8">
            El Día del Padre puede ser un día de celebración para muchos. Pero para otros, es un día de duelo, de ausencia, de emociones complicadas que no encajan en una tarjeta de felicitación. Si este día es difícil para ti, lo que sientes tiene sentido. No estás solo, aunque a veces lo parezca.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si este día activa algo en ti, ya sea una pérdida, una relación complicada o un duelo que no sabías que cargabas, estoy aquí para acompañarte.
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

        <RelatedArticles currentSlug="dia-del-padre-duelo" category="tanatologia" />
      </div>
    </article>
  )
}
