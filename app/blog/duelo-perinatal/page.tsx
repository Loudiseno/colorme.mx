'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DueloPerinatallPage() {
  return (
    <article className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black/60 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al blog
        </Link>

        <header className="mb-12">
          <span className="text-sm text-gray-500 uppercase tracking-wider">
            Tanatología
          </span>
          <h1 className="text-4xl md:text-5xl text-black mt-2 mb-4">
            Duelo perinatal: el dolor que la sociedad no ve
          </h1>
          <p className="text-black/60">
            Por Lourdes Carrillo · Tanatóloga y Arteterapeuta
          </p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-perinatal.webp"
            alt="Duelo perinatal - Acompañamiento en la pérdida de un bebé"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-black/80 italic mb-8">
            Para las madres y padres que perdieron a un bebé.
          </p>

          <p>Tu bebé existió.</p>

          <p>No importa si fueron semanas o meses de embarazo. No importa si nunca lo viste respirar fuera de tu cuerpo. No importa que otros no lo hayan conocido.</p>

          <p>Tu bebé existió. Y tu dolor es real.</p>

          <p>El duelo perinatal es uno de los más silenciados y minimizados. Porque la sociedad no siempre sabe cómo hablar de bebés que mueren antes de vivir. Porque la gente no sabe qué decir, entonces a veces no dice nada.</p>

          <h2>¿Qué es el duelo perinatal?</h2>

          <p>El duelo perinatal es el proceso de duelo que ocurre por la pérdida de un bebé durante el embarazo, el parto, o los primeros días de vida.</p>

          <p>Incluye:</p>
          <ul>
            <li><strong>Aborto espontáneo</strong> (pérdida temprana del embarazo)</li>
            <li><strong>Muerte fetal intrauterina</strong> (pérdida más avanzada en el embarazo)</li>
            <li><strong>Muerte durante el parto</strong></li>
            <li><strong>Muerte neonatal</strong> (en los primeros días de vida)</li>
            <li><strong>Interrupción del embarazo por razones médicas</strong></li>
          </ul>

          <p>Todas estas pérdidas son duelos legítimos. Todas duelen. Todas merecen ser reconocidas.</p>

          <h2>Por qué este duelo es tan difícil</h2>

          <h3>Perdiste un futuro completo</h3>

          <p>No solo perdiste a tu bebé. Perdiste todo lo que imaginabas: la primera sonrisa, los primeros pasos, los cumpleaños, la persona que hubiera sido.</p>

          <p>Estás en duelo por alguien que nunca conociste de la manera tradicional y al mismo tiempo conocías íntimamente. Vivía dentro de ti.</p>

          <h3>La sociedad puede minimizar tu dolor</h3>

          <p>Frases bien intencionadas pero dolorosas son comunes en este tipo de pérdida. Te hacen sentir que no tienes "derecho" a tu duelo.</p>

          <p>Pero sí lo tienes.</p>

          <h3>El trauma físico se suma al emocional</h3>

          <p>Si pasaste por procedimientos médicos, tu cuerpo también está en recuperación. El dolor físico y el emocional se entrelazan.</p>

          <h2>Lo que puedes estar sintiendo</h2>

          <p><strong>Tristeza profunda.</strong> Un vacío que es difícil de explicar.</p>

          <p><strong>Culpa.</strong> "¿Hice algo mal? ¿Mi cuerpo falló?"</p>

          <p><strong>Enojo.</strong> Con la situación, con tu cuerpo, con la injusticia de todo esto.</p>

          <p><strong>Envidia.</strong> Ver a otras madres con sus bebés puede ser difícil.</p>

          <p><strong>Aislamiento.</strong> No querer ver a nadie, no querer explicar.</p>

          <p>Todas estas emociones pueden coexistir. El duelo perinatal es complejo.</p>

          <h2>Frases que es mejor evitar</h2>

          <p>Estas son frases que, aunque se dicen con buena intención, pueden lastimar:</p>

          <p><em>"Eres joven, puedes tener más hijos."</em> — Un hijo no reemplaza a otro.</p>

          <p><em>"Al menos no lo conociste."</em> — Lo conocí. Vivió dentro de mí.</p>

          <p><em>"Por algo pasan las cosas."</em> — No hay razón que haga esto menos doloroso.</p>

          <h2>Lo que sí puede ayudar</h2>

          <h3>Nombrar a tu bebé</h3>
          <p>Si quieres darle un nombre, hazlo. Tener un nombre hace que la pérdida sea más concreta.</p>

          <h3>Crear memorias tangibles</h3>
          <p>Aunque haya poco tiempo físico compartido, puedes crear objetos de recuerdo: una caja con pruebas de embarazo, ultrasonidos, cartas. Una pieza de joyería. Un árbol o planta en su honor.</p>

          <h3>Permitir el ritual</h3>
          <p>Aunque no haya funeral tradicional, puedes crear tu propia forma de despedida: una ceremonia íntima, encender una vela en fechas significativas.</p>

          <h3>Buscar comunidad</h3>
          <p>Hay grupos de apoyo específicos para duelo perinatal. Conectar con otras madres y padres que han vivido lo mismo puede ser muy sanador.</p>

          <h3>Expresión creativa</h3>
          <p>El arte puede ayudarte a procesar lo que las palabras no alcanzan: pintar, hacer collages, crear algo en honor a tu bebé.</p>

          <h2>El cuerpo también hace duelo</h2>

          <p>Tu cuerpo estaba preparándose para nutrir una vida. Ahora tiene que readaptarse.</p>

          <p>Puedes experimentar cambios hormonales, fatiga, alteraciones del sueño, y otras manifestaciones físicas.</p>

          <p>Date tiempo para recuperarte físicamente. No te exijas volver a la normalidad rápidamente.</p>

          <h2>Un mensaje para ti</h2>

          <p>Tu bebé existió. Aunque el mundo no lo conoció, tú sí. Aunque no hay fotos de cumpleaños, hay latidos que escuchaste. Aunque no hay una tumba tradicional que visitar, hay un espacio en tu corazón que siempre será suyo.</p>

          <p>No tienes que "superarlo". No tienes que minimizar tu dolor porque otros no lo entienden.</p>

          <p>Puedes llorar. Puedes nombrarlo. Puedes honrarlo. Puedes recordarlo siempre.</p>

          <p>Porque fuiste madre o padre. Aunque sea por poco tiempo. Aunque el mundo no lo reconozca de la misma manera.</p>

          <p>Lo fuiste.</p>

          <p className="text-xl italic mt-12">
            Tu bebé no está aquí de la manera que esperabas, pero estuvo aquí. Y eso cuenta. Eso siempre contará.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/20 rounded-2xl">
          <h3 className="text-2xl text-black mb-4">¿Necesitas acompañamiento?</h3>
          <p className="text-black/70 mb-6">
            El duelo perinatal merece un espacio seguro. Puedo acompañarte en este proceso.
          </p>
          <a
            href="https://calendly.com/colormemx/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 transition-colors"
          >
            Agenda una sesión de orientación
          </a>
        </div>
      </div>
    </article>
  )
}
