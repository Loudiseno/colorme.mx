'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

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
            width={600}
            height={400}
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

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es una clase de arte</h2>

          <p>
            Una clase de arte tiene como objetivo principal enseñar. Enseñar técnicas, enseñar el uso de materiales, enseñar principios de composición, color, forma. El profesor comparte conocimientos y el alumno los aprende y practica.
          </p>

          <p>
            En una clase de arte el enfoque está en el resultado. Se busca que la obra quede bien, que demuestre el dominio de la técnica. Hay una forma correcta de hacer las cosas. Se evalúa la calidad artística.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es una sesión de arteterapia</h2>

          <p>
            La arteterapia es una forma de acompañamiento terapéutico que usa la creación artística como medio de expresión y comunicación. El arte no es el fin, es el camino. Lo que importa no es la obra que resulta, sino lo que sucede mientras se crea.
          </p>

          <p>
            En una sesión de arteterapia el enfoque está en el proceso. No hay una forma correcta de hacer las cosas. No se enseña técnica. No se corrige. La persona crea desde su propia expresión, sin reglas que seguir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Se necesita saber dibujar para hacer arteterapia?</h2>

          <p>
            No. Esta es una de las preguntas más frecuentes, y la respuesta es un rotundo no. En arteterapia no se necesitan conocimientos artísticos previos. No importa si nunca tomaste una clase de dibujo, si no sabes mezclar colores, si sientes que no tienes talento para el arte.
          </p>

          <p>
            Lo que se pide es disposición a explorar, a jugar con los materiales, a permitir que algo se exprese a través de las manos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo considerar la arteterapia</h2>

          <p>
            La arteterapia puede ser una buena opción cuando tienes dificultad para expresar lo que sientes con palabras, estás atravesando un momento difícil como duelos, crisis o transiciones, quieres conocerte mejor, buscas una forma de terapia que no dependa solo de la conversación.
          </p>

          <p>
            Cada espacio tiene su valor. Saber cuál necesitas en cada momento es parte de cuidarte bien.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Quieres explorar la arteterapia?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás buscando un espacio donde el arte te ayude a conectar contigo, agenda una sesión de orientación gratuita.
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

        <RelatedArticles currentSlug="diferencia-arteterapia-clase-de-arte" category="arteterapia" />
      </div>
    </article>
  )
}
