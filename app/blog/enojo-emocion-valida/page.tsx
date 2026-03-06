'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloEnojoEmocionValida() {
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
            El enojo que no expresas se convierte en otra cosa
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/enojo-emocion-valida.webp"
            alt="Enojo reprimido, rabia contenida, expresar emociones, enojo en el duelo, manejar la ira."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Por qué necesitas darle espacio a tu rabia.
          </p>

          <p>
            Desde pequeños nos enseñaron que el enojo es malo. Que las personas buenas no se enojan. Que hay que controlarse, calmarse, tragarse lo que sentimos.
          </p>

          <p>
            Y aprendimos tan bien la lección que ahora no sabemos qué hacer cuando la rabia aparece.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La emoción que nos enseñaron a esconder</h2>

          <p>
            El enojo tiene mala reputación. Se asocia con pérdida de control, con violencia, con algo que hay que evitar a toda costa.
          </p>

          <p>
            Pero el enojo es una emoción humana básica. Aparece en todas las culturas, en todas las edades, en todas las personas. Existe porque cumple una función.
          </p>

          <p>
            El problema nunca fue sentir enojo. El problema es lo que hacemos con él cuando no sabemos procesarlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Para qué sirve el enojo?</h2>

          <p>
            El enojo es una señal de alarma. Aparece cuando algo amenaza algo que valoras: tu dignidad, tus límites, tu seguridad, tus seres queridos, tu sentido de justicia.
          </p>

          <p>
            Es una emoción protectora. Te indica que algo está mal y te moviliza para hacer algo al respecto.
          </p>

          <p>
            Sin enojo, no habría límites. No habría defensa ante el abuso. No habría indignación ante la injusticia. No habría impulso para cambiar lo que necesita cambiar.
          </p>

          <p>
            El enojo no es tu enemigo. Es un mensajero.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué pasa cuando reprimimos el enojo?</h2>

          <p>
            Cuando aprendes que el enojo es inaceptable, no dejas de sentirlo. Simplemente lo escondes. Y la energía emocional que no se expresa no desaparece, se transforma.
          </p>

          <p>
            <strong>Se convierte en ansiedad.</strong> Esa irritabilidad constante, esa sensación de estar al borde, esa tensión que no puedes explicar. Muchas veces es enojo sin salida que se manifiesta como nerviosismo crónico.
          </p>

          <p>
            <strong>Se convierte en depresión.</strong> Sigmund Freud describió la depresión como &quot;ira vuelta hacia adentro.&quot; Cuando no puedes enojarte con quien o lo que te lastimó, te enojas contigo mismo. Aparece la autocrítica feroz, el sentimiento de no valer nada, el agotamiento profundo.
          </p>

          <p>
            <strong>Se convierte en enfermedad física.</strong> Investigaciones publicadas en la revista Psychosomatic Medicine han encontrado correlación entre la supresión crónica de emociones y problemas cardiovasculares, trastornos digestivos, dolores de cabeza y tensión muscular. El cuerpo guarda lo que la mente no procesa.
          </p>

          <p>
            <strong>Explota en el momento equivocado.</strong> Cuando reprimes el enojo repetidamente, se acumula. Y eventualmente sale, muchas veces en situaciones que no lo justifican, con personas que no lo merecen, de formas que después lamentas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Enojo versus violencia</h2>

          <p>
            Esto es fundamental: el enojo y la violencia no son lo mismo.
          </p>

          <p>
            El enojo es una emoción. La violencia es una conducta.
          </p>

          <p>
            Puedes sentir enojo intenso sin agredir a nadie. Puedes estar furioso y elegir cómo expresarlo. La emoción es involuntaria. La acción es una elección.
          </p>

          <p>
            Las personas que agreden cuando se enojan no tienen un problema de enojo. Tienen un problema de regulación emocional y de conducta. La solución no es dejar de sentir enojo, sino aprender a manejarlo de formas que no dañen.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Formas saludables de expresar la rabia</h2>

          <p>
            El enojo necesita salida. Pero esa salida puede ser constructiva.
          </p>

          <p>
            <strong>Movimiento físico.</strong> El enojo genera energía que pide moverse. Correr, caminar rápido, golpear un saco de boxeo, bailar con intensidad. El cuerpo puede descargar lo que la mente acumula.
          </p>

          <p>
            <strong>Expresión verbal segura.</strong> Hablar de tu enojo con alguien de confianza. No para recibir consejo, sino para ser escuchado. Nombrar lo que sientes reduce su intensidad.
          </p>

          <p>
            <strong>Escritura sin filtro.</strong> Escribe lo que sientes sin censurarte. Puedes destruir el papel después. El objetivo no es crear literatura, sino vaciar lo que llevas dentro.
          </p>

          <p>
            <strong>Gritar en un lugar seguro.</strong> En el auto con las ventanas cerradas. En una almohada. En el campo donde nadie escucha. A veces la voz necesita soltar lo que las palabras ordenadas no pueden.
          </p>

          <p>
            <strong>Crear y destruir.</strong> El arte puede ser un canal poderoso para el enojo. Pintar con fuerza, con colores intensos, sin preocuparte por el resultado. Hacer un collage y después romperlo. El acto creativo puede contener emociones que de otra forma desbordan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El enojo en el duelo</h2>

          <p>
            El enojo es una parte normal del proceso de duelo que muchas veces se juzga o se esconde.
          </p>

          <p>
            Puedes estar enojado con quien murió por haberte dejado. Puedes estar enojado con los médicos, con el destino, con Dios, contigo mismo. Puedes estar enojado sin saber exactamente con quién o por qué.
          </p>

          <p>
            Este enojo no significa que ames menos. Significa que estás procesando una pérdida que duele.
          </p>

          <p>
            Darle espacio al enojo en el duelo no lo prolonga. Reprimirlo sí puede hacerlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Darte permiso para estar enojado</h2>

          <p>
            No necesitas justificar tu enojo ante nadie. No tienes que demostrar que es &quot;razonable&quot; para que sea válido.
          </p>

          <p>
            A veces las emociones no son proporcionales a la situación. A veces estás más enojado de lo que la lógica indicaría. Eso no significa que tu emoción sea incorrecta. Significa que hay algo más debajo que necesita atención.
          </p>

          <p>
            El enojo puede ser una puerta de entrada a emociones más vulnerables: el miedo, la tristeza, la decepción, el dolor. A veces es más fácil sentir rabia que sentir vulnerabilidad. Y eso también es humano.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo el enojo necesita atención profesional</h2>

          <p>
            El enojo saludable viene y va. Se siente, se expresa de alguna forma, y eventualmente se disipa.
          </p>

          <p>
            Considera buscar apoyo si:
          </p>

          <p>
            Tu enojo es constante y no parece tener relación con situaciones específicas.
          </p>

          <p>
            Pierdes el control regularmente y haces o dices cosas que después lamentas.
          </p>

          <p>
            Tu enojo está dañando tus relaciones importantes.
          </p>

          <p>
            Sientes que vives en un estado de irritabilidad permanente.
          </p>

          <p>
            Recurres a sustancias para calmarte cuando estás enojado.
          </p>

          <p>
            El enojo crónico o descontrolado es tratable. No tienes que vivir así.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            El enojo no es tu enemigo. Es información. Te dice que algo importa, que algo duele, que algo necesita cambiar.
          </p>

          <p>
            Aprender a sentirlo sin destruir y sin destruirte es un proceso. Requiere práctica, paciencia contigo mismo y a veces ayuda profesional.
          </p>

          <p>
            Pero el primer paso es simple: reconocer que tienes derecho a enojarte.
          </p>

          <p>
            Tus emociones no son errores. Son parte de ser humano.
          </p>

          <p className="italic text-black/60 mt-8">
            El enojo no te hace mala persona. Lo que haces con él es lo que importa.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si el enojo te está desbordando y necesitas acompañamiento, estoy aquí para ti.
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
