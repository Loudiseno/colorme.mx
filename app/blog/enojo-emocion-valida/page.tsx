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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            El enojo que no expresas se convierte en otra cosa
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
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
            Por que necesitas darle espacio a tu rabia.
          </p>

          <p>
            Desde pequenos nos ensenaron que el enojo es malo. Que las personas buenas no se enojan. Que hay que controlarse, calmarse, tragarse lo que sentimos.
          </p>

          <p>
            Y aprendimos tan bien la leccion que ahora no sabemos que hacer cuando la rabia aparece.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La emocion que nos ensenaron a esconder</h2>

          <p>
            El enojo tiene mala reputacion. Se asocia con perdida de control, con violencia, con algo que hay que evitar a toda costa.
          </p>

          <p>
            Pero el enojo es una emocion humana basica. Aparece en todas las culturas, en todas las edades, en todas las personas. Existe porque cumple una funcion.
          </p>

          <p>
            El problema nunca fue sentir enojo. El problema es lo que hacemos con el cuando no sabemos procesarlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Para que sirve el enojo?</h2>

          <p>
            El enojo es una senal de alarma. Aparece cuando algo amenaza algo que valoras: tu dignidad, tus limites, tu seguridad, tus seres queridos, tu sentido de justicia.
          </p>

          <p>
            Es una emocion protectora. Te indica que algo esta mal y te moviliza para hacer algo al respecto.
          </p>

          <p>
            Sin enojo, no habria limites. No habria defensa ante el abuso. No habria indignacion ante la injusticia. No habria impulso para cambiar lo que necesita cambiar.
          </p>

          <p>
            El enojo no es tu enemigo. Es un mensajero.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Que pasa cuando reprimimos el enojo?</h2>

          <p>
            Cuando aprendes que el enojo es inaceptable, no dejas de sentirlo. Simplemente lo escondes. Y la energia emocional que no se expresa no desaparece, se transforma.
          </p>

          <p>
            <strong>Se convierte en ansiedad.</strong> Esa irritabilidad constante, esa sensacion de estar al borde, esa tension que no puedes explicar. Muchas veces es enojo sin salida que se manifiesta como nerviosismo cronico.
          </p>

          <p>
            <strong>Se convierte en depresion.</strong> Sigmund Freud describio la depresion como &quot;ira vuelta hacia adentro.&quot; Cuando no puedes enojarte con quien o lo que te lastimo, te enojas contigo mismo. Aparece la autocritica feroz, el sentimiento de no valer nada, el agotamiento profundo.
          </p>

          <p>
            <strong>Se convierte en enfermedad fisica.</strong> Investigaciones publicadas en la revista Psychosomatic Medicine han encontrado correlacion entre la supresion cronica de emociones y problemas cardiovasculares, trastornos digestivos, dolores de cabeza y tension muscular. El cuerpo guarda lo que la mente no procesa.
          </p>

          <p>
            <strong>Explota en el momento equivocado.</strong> Cuando reprimes el enojo repetidamente, se acumula. Y eventualmente sale, muchas veces en situaciones que no lo justifican, con personas que no lo merecen, de formas que despues lamentas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Enojo versus violencia</h2>

          <p>
            Esto es fundamental: el enojo y la violencia no son lo mismo.
          </p>

          <p>
            El enojo es una emocion. La violencia es una conducta.
          </p>

          <p>
            Puedes sentir enojo intenso sin agredir a nadie. Puedes estar furioso y elegir como expresarlo. La emocion es involuntaria. La accion es una eleccion.
          </p>

          <p>
            Las personas que agreden cuando se enojan no tienen un problema de enojo. Tienen un problema de regulacion emocional y de conducta. La solucion no es dejar de sentir enojo, sino aprender a manejarlo de formas que no danen.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Formas saludables de expresar la rabia</h2>

          <p>
            El enojo necesita salida. Pero esa salida puede ser constructiva.
          </p>

          <p>
            <strong>Movimiento fisico.</strong> El enojo genera energia que pide moverse. Correr, caminar rapido, golpear un saco de boxeo, bailar con intensidad. El cuerpo puede descargar lo que la mente acumula.
          </p>

          <p>
            <strong>Expresion verbal segura.</strong> Hablar de tu enojo con alguien de confianza. No para recibir consejo, sino para ser escuchado. Nombrar lo que sientes reduce su intensidad.
          </p>

          <p>
            <strong>Escritura sin filtro.</strong> Escribe lo que sientes sin censurarte. Puedes destruir el papel despues. El objetivo no es crear literatura, sino vaciar lo que llevas dentro.
          </p>

          <p>
            <strong>Gritar en un lugar seguro.</strong> En el auto con las ventanas cerradas. En una almohada. En el campo donde nadie escucha. A veces la voz necesita soltar lo que las palabras ordenadas no pueden.
          </p>

          <p>
            <strong>Crear y destruir.</strong> El arte puede ser un canal poderoso para el enojo. Pintar con fuerza, con colores intensos, sin preocuparte por el resultado. Hacer un collage y despues romperlo. El acto creativo puede contener emociones que de otra forma desbordan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El enojo en el duelo</h2>

          <p>
            El enojo es una parte normal del proceso de duelo que muchas veces se juzga o se esconde.
          </p>

          <p>
            Puedes estar enojado con quien murio por haberte dejado. Puedes estar enojado con los medicos, con el destino, con Dios, contigo mismo. Puedes estar enojado sin saber exactamente con quien o por que.
          </p>

          <p>
            Este enojo no significa que ames menos. Significa que estas procesando una perdida que duele.
          </p>

          <p>
            Darle espacio al enojo en el duelo no lo prolonga. Reprimirlo si puede hacerlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Darte permiso para estar enojado</h2>

          <p>
            No necesitas justificar tu enojo ante nadie. No tienes que demostrar que es &quot;razonable&quot; para que sea valido.
          </p>

          <p>
            A veces las emociones no son proporcionales a la situacion. A veces estas mas enojado de lo que la logica indicaria. Eso no significa que tu emocion sea incorrecta. Significa que hay algo mas debajo que necesita atencion.
          </p>

          <p>
            El enojo puede ser una puerta de entrada a emociones mas vulnerables: el miedo, la tristeza, la decepcion, el dolor. A veces es mas facil sentir rabia que sentir vulnerabilidad. Y eso tambien es humano.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando el enojo necesita atencion profesional</h2>

          <p>
            El enojo saludable viene y va. Se siente, se expresa de alguna forma, y eventualmente se disipa.
          </p>

          <p>
            Considera buscar apoyo si:
          </p>

          <p>
            Tu enojo es constante y no parece tener relacion con situaciones especificas.
          </p>

          <p>
            Pierdes el control regularmente y haces o dices cosas que despues lamentas.
          </p>

          <p>
            Tu enojo esta danando tus relaciones importantes.
          </p>

          <p>
            Sientes que vives en un estado de irritabilidad permanente.
          </p>

          <p>
            Recurres a sustancias para calmarte cuando estas enojado.
          </p>

          <p>
            El enojo cronico o descontrolado es tratable. No tienes que vivir asi.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            El enojo no es tu enemigo. Es informacion. Te dice que algo importa, que algo duele, que algo necesita cambiar.
          </p>

          <p>
            Aprender a sentirlo sin destruir y sin destruirte es un proceso. Requiere practica, paciencia contigo mismo y a veces ayuda profesional.
          </p>

          <p>
            Pero el primer paso es simple: reconocer que tienes derecho a enojarte.
          </p>

          <p>
            Tus emociones no son errores. Son parte de ser humano.
          </p>

          <p className="italic text-black/60 mt-8">
            El enojo no te hace mala persona. Lo que haces con el es lo que importa.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si el enojo te esta desbordando y necesitas acompanamiento, estoy aqui para ti.
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
