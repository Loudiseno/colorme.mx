'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloRitualesDespedida() {
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
            Rituales de despedida: cómo crear el tuyo
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/rituales-despedida.webp"
            alt="Rituales de despedida - Cómo crear el tuyo."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            A veces no pudimos despedirnos. La muerte llegó de golpe, estuvimos lejos, o el funeral fue tan abrumador que no sentimos que realmente dijimos adiós.
          </p>

          <p>
            Esa sensación de despedida inconclusa puede pesar durante años. Por eso los rituales de despedida son tan importantes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Por qué importan los rituales?</h2>

          <p>Los rituales cumplen funciones profundas en el proceso de duelo:</p>

          <p><strong>Hacen real la pérdida.</strong> Cuando participas en un acto concreto de despedida, tu mente comienza a aceptar que la persona ya no está.</p>

          <p><strong>Permiten expresar emociones.</strong> Crean un espacio donde el dolor puede salir sin que nadie lo juzgue.</p>

          <p><strong>Conectan con otros.</strong> Nos recuerdan que no estamos solos en el dolor.</p>

          <p><strong>Honran la memoria.</strong> Despedirse es una forma de decir &quot;tu vida importó&quot;.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cuándo se puede hacer un ritual?</h2>

          <p>
            No hay un momento correcto. Puedes crear un ritual días después de la muerte, meses después cuando puedas participar más conscientemente, en el primer aniversario, o años después si sientes que nunca cerraste ese ciclo.
          </p>

          <p>Nunca es demasiado tarde para despedirse.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tipos de rituales</h2>

          <p>
            <strong>Con palabras:</strong> Escribir una carta con todo lo que quisieras haberle dicho. Puedes guardarla, quemarla como acto de liberación, o leerla en voz alta en un lugar significativo.
          </p>

          <p>
            <strong>Con objetos:</strong> Crear una caja de recuerdos, plantar un árbol en su honor, o soltar flores al agua.
          </p>

          <p>
            <strong>Con acciones:</strong> Encender una vela, visitar un lugar especial, hacer algo que la persona amaba, o crear un homenaje con fotos y recuerdos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo diseñar tu ritual</h2>

          <p>
            <strong>Pregúntate qué necesitas:</strong> ¿Decir adiós? ¿Pedir perdón? ¿Dar gracias? ¿Expresar tu amor? La respuesta te guiará.
          </p>

          <p>
            <strong>Elige el momento y lugar.</strong> Puede ser en casa, en un lugar significativo, o en la naturaleza. Busca un momento donde puedas estar tranquilo.
          </p>

          <p>
            <strong>Decide si será solo o acompañado.</strong> Algunos rituales son más íntimos, otros se enriquecen al ser compartidos.
          </p>

          <p>
            <strong>Prepara los elementos que vas a usar:</strong> fotos, una vela, música, objetos significativos.
          </p>

          <p>
            <strong>Permite que las emociones fluyan.</strong> El ritual puede traer emociones intensas. Eso es exactamente lo que tiene que pasar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">No necesitas seguir reglas</h2>

          <p>
            No hay rituales correctos o incorrectos. Lo que importa es que tenga significado para ti. Puede ser algo elaborado o muy simple. Puede seguir tradiciones o ser completamente personal.
          </p>

          <p>Lo único necesario es que surja desde el corazón.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Despedirse no es olvidar</h2>

          <p>
            Hacer un ritual de despedida no significa dejar ir a la persona ni cerrar el capítulo como si nada.
          </p>

          <p>
            Significa honrar lo que vivieron juntos. Darle un lugar digno en tu historia. Transformar el dolor en algo que puedas cargar de forma más ligera.
          </p>

          <p>
            Tu ser querido siempre será parte de ti. El ritual te ayuda a encontrar una nueva forma de relacionarte con su memoria.
          </p>

          <p className="italic text-black/60 mt-8">
            Los rituales de despedida son herramientas poderosas para procesar el duelo. No hay una forma correcta de hacerlos; lo importante es que tengan significado para ti.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas ayuda para crear un ritual de despedida significativo, puedo acompañarte en el proceso.
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
