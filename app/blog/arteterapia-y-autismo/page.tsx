'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArteterapiaAutismoPage() {
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
            Arteterapia y autismo: cuando el arte abre caminos que las palabras no encuentran
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/Ana Gaby Figueroa. 9.04.2026.jpeg"
            alt="Arteterapia y autismo - Arte como comunicacion"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay ninos que piensan en imagenes. Que procesan el mundo a traves de lo visual, lo tactil, lo sensorial, antes de que las palabras lleguen. Para muchos ninos dentro del espectro autista, el lenguaje verbal puede ser un camino dificil, insuficiente para expresar lo que sucede por dentro.
          </p>

          <p>
            La arteterapia ofrece otro camino. Un espacio donde la comunicacion puede suceder a traves de colores, texturas, formas, movimientos. Donde no hace falta encontrar la palabra exacta para decir lo que sientes, porque el material lo dice por ti.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por que el arte conecta con ninos con autismo</h2>

          <p>
            El trastorno del espectro autista (TEA) se caracteriza por diferencias en la comunicacion social, patrones de comportamiento e intereses particulares, y formas distintas de procesar la informacion sensorial. Cada nino dentro del espectro es unico, con sus propias fortalezas y sus propios desafios.
          </p>

          <p>
            El arte funciona porque habla otro idioma. No depende del lenguaje verbal, que puede ser precisamente el area donde el nino tiene mas dificultades. En cambio, usa imagenes, sensaciones, movimientos. Muchos ninos con autismo tienen fortalezas visuales notables, y la arteterapia aprovecha esas fortalezas en lugar de insistir en las areas de mayor dificultad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Beneficios de la arteterapia en ninos con TEA</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Comunicacion no verbal</h3>

          <p>
            El nino puede expresar emociones, experiencias y estados internos sin necesidad de verbalizarlos. Un dibujo, una escultura de plastilina, una pintura pueden comunicar lo que las palabras no alcanzan a decir.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Regulacion emocional</h3>

          <p>
            El proceso de crear algo con las manos tiene un efecto regulador en el sistema nervioso. Amasar arcilla, pintar con los dedos, rasgar papel: estas acciones ayudan al cuerpo a liberar tension y a encontrar calma.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Exploracion sensorial en un entorno seguro</h3>

          <p>
            Muchos ninos con autismo tienen particularidades sensoriales. La arteterapia ofrece un espacio controlado para explorar diferentes materiales. La suavidad de la acuarela, la resistencia de la arcilla, la textura del papel de lija: cada material ofrece una experiencia sensorial distinta.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Desarrollo de habilidades sociales</h3>

          <p>
            En sesiones grupales, el arte se convierte en un puente para la interaccion. Compartir materiales, trabajar en proyectos conjuntos, observar lo que otros crean: todo esto facilita el contacto social de una manera menos demandante que la conversacion directa.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Tolerancia a la frustracion</h3>

          <p>
            Los materiales artisticos tienen su propia realidad fisica. La torre de bloques se cae, la pintura se escurre, el dibujo no queda como se imaginaba. Aprender a trabajar con estas limitaciones fortalece la capacidad de tolerar la frustracion.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como funciona una sesion de arteterapia</h2>

          <p>
            El entorno se prepara considerando las necesidades sensoriales del nino. Iluminacion, sonidos, organizacion del espacio: todo se cuida para crear un ambiente predecible y seguro.
          </p>

          <p>
            Los materiales estan organizados y visibles. El nino sabe donde encontrar lo que necesita. Esta predictibilidad reduce la ansiedad y permite que la energia se enfoque en el proceso creativo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Que pueden observar los padres con el tiempo</h2>

          <p>
            La arteterapia no produce cambios de un dia para otro. Es un proceso que requiere constancia. Lo que los padres suelen observar gradualmente incluye mayor disposicion a explorar materiales nuevos, momentos de conexion durante la creacion, uso espontaneo del arte como comunicacion, y mayor capacidad de permanecer en una actividad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que hace diferente a la arteterapia de una clase de arte</h2>

          <p>
            En una clase de arte, el objetivo es aprender tecnicas y crear productos artisticos. En arteterapia, el objetivo es terapeutico: usar el proceso creativo como herramienta para trabajar objetivos especificos relacionados con la comunicacion, la regulacion emocional, las habilidades sociales o el procesamiento sensorial.
          </p>

          <p>
            La arteterapia ofrece a los ninos con autismo un espacio donde pueden comunicarse, regularse y expresarse sin depender exclusivamente del lenguaje verbal. Aprovecha sus fortalezas visuales y sensoriales, respeta su ritmo, y trabaja desde donde el nino esta.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Tienes un hijo con autismo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si quieres explorar si la arteterapia podria ayudarlo, estoy aqui para orientarte. Agenda una sesion de orientacion gratuita.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu sesion gratuita
          </a>
        </div>
      </div>
    </article>
  )
}
