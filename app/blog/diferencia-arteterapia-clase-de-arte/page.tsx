'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function DiferenciaArteterapiaPage() {
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
            Diferencia entre arteterapia y clase de arte: no es lo mismo crear para aprender que crear para sanar
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/anagaby-final.jpeg"
            alt="Diferencia entre arteterapia y clase de arte"
            width={800}
            height={450}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una confusión muy común</h2>

          <p className="text-xl leading-relaxed">
            Cuando hablo de lo que hago, muchas personas asumen que doy clases de pintura o que enseño técnicas artísticas. Y aunque la arteterapia usa materiales como pinceles, pinturas, arcilla o colores, no tiene nada que ver con una clase de arte tradicional.
          </p>

          <p>
            Son dos cosas completamente distintas. Con objetivos diferentes, estructuras diferentes, y formas de acompañar el proceso que no se parecen en nada.
          </p>

          <p>
            Entender esta diferencia es importante, porque si buscas una cosa y encuentras la otra, la experiencia puede no cumplir tus expectativas. Y porque hay valor en ambas, solo que responden a necesidades distintas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es una clase de arte</h2>

          <p>
            Una clase de arte tiene como objetivo principal enseñar. Enseñar técnicas, enseñar el uso de materiales, enseñar principios de composición, color, forma. El profesor comparte conocimientos y el alumno los aprende y practica.
          </p>

          <p>
            En una clase de arte: el enfoque está en el resultado. Se busca que la obra quede bien, que demuestre el dominio de la técnica que se está aprendiendo. Hay una forma correcta de hacer las cosas. Existen técnicas específicas para mezclar colores, para dar volumen, para crear perspectiva. El profesor corrige y guía hacia esa forma correcta.
          </p>

          <p>
            Se evalúa la calidad artística. El producto final importa. Se observa si el alumno logró aplicar lo que se enseñó. La relación es de maestro-alumno. El profesor tiene el conocimiento, el alumno lo recibe.
          </p>

          <p>
            Las clases de arte son valiosas. Desarrollan habilidades, despiertan la creatividad técnica, permiten explorar diferentes medios artísticos. Muchas personas encuentran satisfacción y bienestar al aprender a pintar, dibujar o esculpir. Pero eso es diferente de un proceso terapéutico.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es una sesión de arteterapia</h2>

          <p>
            La arteterapia es una forma de acompañamiento terapéutico que usa la creación artística como medio de expresión y comunicación. El arte no es el fin, es el camino. Lo que importa no es la obra que resulta, sino lo que sucede mientras se crea.
          </p>

          <p>
            En una sesión de arteterapia: el enfoque está en el proceso. Lo que importa es lo que la persona siente, descubre, expresa mientras trabaja con los materiales. El resultado estético es secundario. No hay una forma correcta de hacer las cosas. No se enseña técnica. No se corrige. La persona crea desde su propia expresión, sin reglas que seguir.
          </p>

          <p>
            No se evalúa la calidad artística. Nadie juzga si el dibujo está "bonito" o si los colores combinan. La creación no se mide con criterios estéticos. La relación es terapéutica. Hay un encuadre específico: confidencialidad, regularidad en las sesiones, objetivos terapéuticos definidos. El arteterapeuta acompaña un proceso que va más allá de la creación artística.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El encuadre terapéutico: la estructura que sostiene el proceso</h2>

          <p>
            Una de las diferencias más importantes entre una clase de arte y la arteterapia es el encuadre. En arteterapia, cada sesión tiene una estructura que sostiene el proceso:
          </p>

          <p>
            Hay un inicio. Un momento de llegada, de conexión, de transición desde el afuera hacia el espacio terapéutico. Hay un desarrollo. El tiempo de creación, donde la persona trabaja con los materiales. El arteterapeuta acompaña, observa, a veces interviene, siempre respetando el proceso de quien crea. Hay un cierre. Un momento para mirar lo que se hizo, para nombrar lo que surgió, para integrar la experiencia antes de volver al mundo exterior.
          </p>

          <p>
            Esta estructura no es un capricho. Crea un contenedor seguro donde la persona puede explorar aspectos de sí misma que quizás no exploraría en otro contexto. El encuadre terapéutico permite que emerjan emociones, recuerdos, conflictos, sabiendo que hay un espacio y un tiempo definidos para sostenerlos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El proceso versus el resultado</h2>

          <p>
            Esta es quizás la diferencia más fundamental. En una clase de arte, el resultado importa. Estás aprendiendo una técnica, y la forma de saber si la aprendiste es ver si puedes aplicarla en una obra. El producto final es evidencia del aprendizaje.
          </p>

          <p>
            En arteterapia, el resultado es casi irrelevante. Lo que importa es lo que sucedió mientras creabas. ¿Qué sentiste al elegir ese color? ¿Qué pasó cuando el material no respondió como esperabas? ¿Qué emergió mientras tus manos trabajaban?
          </p>

          <p>
            La obra que queda al final de una sesión de arteterapia puede ser un dibujo desordenado, una mancha de colores, una figura sin forma reconocible. Y puede haber sido una sesión profundamente transformadora. Porque el valor no está en lo que se ve, sino en lo que se vivió.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Se necesita saber dibujar para hacer arteterapia?</h2>

          <p>
            No. Esta es una de las preguntas más frecuentes, y la respuesta es un rotundo no.
          </p>

          <p>
            En arteterapia no se necesitan conocimientos artísticos previos. No importa si nunca tomaste una clase de dibujo, si no sabes mezclar colores, si sientes que "no tienes talento" para el arte. Nada de eso importa.
          </p>

          <p>
            Lo que se pide es disposición a explorar, a jugar con los materiales, a permitir que algo se exprese a través de las manos. Y eso puede hacerlo cualquier persona, independientemente de su formación artística.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo considerar la arteterapia</h2>

          <p>
            La arteterapia puede ser una buena opción cuando: tienes dificultad para expresar lo que sientes con palabras, estás atravesando un momento difícil como duelos, crisis o transiciones, quieres conocerte mejor, buscas una forma de terapia que no dependa solo de la conversación, has vivido experiencias que son difíciles de poner en palabras, o quieres trabajar tu regulación emocional.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Pueden complementarse?</h2>

          <p>
            Sí. No son excluyentes. Una persona puede tomar clases de arte para desarrollar sus habilidades técnicas y al mismo tiempo hacer arteterapia para trabajar aspectos emocionales.
          </p>

          <p>
            Lo importante es tener claro qué ofrece cada espacio. La clase de arte enseña. La arteterapia acompaña un proceso terapéutico. Confundir una con otra puede generar frustración.
          </p>

          <p>
            Cada espacio tiene su valor. Saber cuál necesitas en cada momento es parte de cuidarte bien.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Quieres explorar la arteterapia?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás buscando un espacio donde el arte te ayude a conectar contigo, a expresar lo que no puedes decir con palabras, agenda una sesión de orientación gratuita.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu sesión gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
