'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ExplicarMuerteNinoPage() {
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
            Cómo explicar la muerte a un niño
          </h1>
          <p className="text-black/60">
            Por Lourdes Carrillo · Tanatóloga y Arteterapeuta
          </p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/explicar-muerte-nino.webp"
            alt="Cómo explicar la muerte a un niño - Guía para padres"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-black/80 italic mb-8">
            Guía para tener esta conversación difícil con amor y claridad.
          </p>

          <p>Nadie nos prepara para esto.</p>

          <p>No hay un manual que te enseñe cómo decirle a tu hijo que el abuelo ya no va a volver. No hay un guion para explicar una pérdida significativa.</p>

          <p>Y sin embargo, los niños necesitan saber. Necesitan entender. Y necesitan escucharlo de ti, con honestidad y cariño.</p>

          <h2>Por qué es importante hablar de la muerte con los niños</h2>

          <p>Muchos adultos evitan el tema para "proteger" a los niños. Pero el silencio no protege, confunde.</p>

          <p>Cuando no explicamos lo que pasó, los niños crean sus propias teorías, que a veces son más aterradoras que la realidad. Pueden sentir que hicieron algo malo. Perciben que el tema es "prohibido" y guardan sus miedos en silencio.</p>

          <p>Cuando sí hablamos honestamente, los niños entienden lo que pasó dentro de sus capacidades. Se sienten incluidos, no excluidos. Aprenden que las emociones difíciles son normales y se pueden compartir.</p>

          <h2>Principios generales para todas las edades</h2>

          <p><strong>Habla con la verdad, con delicadeza.</strong> Adapta el lenguaje a lo que puedan comprender, pero no mientas ni uses eufemismos confusos.</p>

          <p><strong>Evita frases que puedan crear confusión.</strong> "Se fue a dormir" puede crear miedo a dormir. "Lo perdimos" puede hacer que piensen que hay que buscarlo. "Se fue de viaje" genera expectativa de que regrese.</p>

          <p><strong>Asegúrales que ellos no causaron lo que pasó.</strong> Los niños pueden pensar mágicamente y creer que algo que pensaron o dijeron provocó la muerte.</p>

          <h2>Según la edad del niño</h2>

          <h3>Niños de 2 a 5 años</h3>

          <p>A esta edad piensan de manera muy concreta. No comprenden que la muerte es permanente. Pueden preguntar lo mismo muchas veces porque están procesando.</p>

          <p>Usa palabras simples y directas: "El abuelo murió. Eso significa que su cuerpo dejó de funcionar. No va a regresar, y no lo vamos a volver a ver. Pero lo podemos recordar y lo vamos a extrañar mucho."</p>

          <h3>Niños de 6 a 9 años</h3>

          <p>Empiezan a comprender que la muerte es permanente. Pueden tener curiosidad sobre los detalles. Pueden tener miedo de que otros seres queridos mueran.</p>

          <p>Puedes ser un poco más detallado. Explica con claridad qué pasó y responde sus preguntas con honestidad. Si preguntan si tú vas a morir, puedes decir: "Todos morimos algún día, pero la mayoría de las personas viven muchos años."</p>

          <h3>Niños de 9 a 12 años</h3>

          <p>Comprenden la permanencia de la muerte. Pueden entender causas más complejas. Empiezan a reflexionar sobre su propia mortalidad.</p>

          <p>Puedes ser directo y responder preguntas con honestidad. Invítalos a preguntar lo que necesiten.</p>

          <h3>Adolescentes</h3>

          <p>Comprenden la muerte como los adultos. Pueden tener reacciones emocionales muy intensas. Pueden alejarse de la familia.</p>

          <p>Habla con ellos con honestidad y respeto. No asumas que porque "ya son grandes" van a procesar solos. Ofrece tu presencia, pero respeta si necesitan espacio.</p>

          <h2>Preguntas frecuentes de los niños</h2>

          <p><strong>"¿Tú también te vas a morir?"</strong></p>
          <p>"Algún día, sí. Pero espero vivir muchos años más y estar contigo mientras creces."</p>

          <p><strong>"¿Por qué lloras?"</strong></p>
          <p>"Lloro porque estoy triste. Extraño mucho al abuelo. Llorar es una forma de sacar la tristeza, y está bien llorar cuando estamos tristes."</p>

          <h2>Cómo ayudar a un niño a procesar el duelo</h2>

          <p><strong>Mantén las rutinas.</strong> La estabilidad es reconfortante cuando todo parece incierto.</p>

          <p><strong>Permite la expresión.</strong> Llorar, dibujar, escribir, jugar a temas relacionados es normal y saludable.</p>

          <p><strong>Habla de la persona fallecida.</strong> Di su nombre, comparte recuerdos, mira fotos juntos.</p>

          <p><strong>El arte puede ayudar.</strong> Dibujar lo que sienten, crear una caja de recuerdos, hacer un collage son formas de procesar sin necesidad de palabras.</p>

          <h2>Lo que necesitas recordar</h2>

          <p>Los niños son más resilientes de lo que pensamos, pero también más sensibles.</p>

          <p>No los vas a dañar hablando de la muerte con honestidad y amor. Los confundes más con el silencio, las evasiones y la exclusión.</p>

          <p>Está bien no tener todas las respuestas. Está bien mostrar tus emociones frente a ellos. Está bien decir "no sé".</p>

          <p>Lo que importa es que sepan que pueden contar contigo, que sus sentimientos son válidos, y que no están solos.</p>

          <p className="text-xl italic mt-12">
            La conversación más difícil puede ser también un acto de amor profundo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/20 rounded-2xl">
          <h3 className="text-2xl text-black mb-4">¿Necesitas orientación?</h3>
          <p className="text-black/70 mb-6">
            Si necesitas ayuda para hablar con tus hijos sobre una pérdida, puedo acompañarte en este proceso.
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
