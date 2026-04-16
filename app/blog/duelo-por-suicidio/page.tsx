'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function DueloPorSuicidioPage() {
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
            Duelo por suicidio: el dolor de los que se quedan
          </h1>
          <p className="text-black/60">
            Por Lourdes Pérez · Tanatóloga y Arteterapeuta
          </p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-por-suicidio.jpeg"
            alt="Duelo por suicidio - Acompañamiento para sobrevivientes"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>Hay pérdidas que rompen. Y luego está esta.</p>

          <p>
            La muerte por suicidio deja a quienes se quedan en un lugar donde pocas personas saben llegar. Un lugar de preguntas sin respuesta. De culpa que no se va. De un dolor que no sabe cómo expresarse porque la sociedad tampoco sabe cómo recibirlo.
          </p>

          <p>
            Si estás leyendo esto porque perdiste a alguien por suicidio, quiero que sepas algo desde ahora: lo que sientes es válido. Y no estás solo.
          </p>

          <h2>Los que se quedan: los sobrevivientes</h2>

          <p>
            En el campo de la salud mental existe un término para quienes han perdido a un ser querido por suicidio: <strong>sobrevivientes</strong>.
          </p>

          <p>
            No porque hayan sobrevivido a un intento propio. Sino porque sobrevivir a esta pérdida es, en sí mismo, un acto de resistencia.
          </p>

          <h2>Un duelo diferente a todos los demás</h2>

          <p>El duelo por suicidio no es como otros duelos.</p>

          <p>Hay confusión porque no se entiende qué llevó a esa persona a tomar esa decisión.</p>

          <p>Hay culpa porque aparece la pregunta inevitable: ¿pude haber hecho algo para evitarlo?</p>

          <p>Hay vergüenza porque el suicidio todavía carga un estigma social.</p>

          <p>Hay enojo hacia la persona que se fue, hacia uno mismo, hacia el mundo.</p>

          <h2>Las preguntas que no te dejan en paz</h2>

          <h3>"¿Por qué lo hizo?"</h3>
          <p>
            Es la primera pregunta. Y muchas veces no tiene una respuesta clara. El suicidio rara vez tiene una sola causa.
          </p>

          <h3>"¿Pude haberlo evitado?"</h3>
          <p>
            Esta es la pregunta que más duele. Pero necesitas escuchar esto: <strong>no podías controlar la decisión de otra persona</strong>. Hiciste lo mejor que pudiste con lo que sabías.
          </p>

          <p>No es tu culpa. Por más que tu mente insista en que sí lo es.</p>

          <h2>La culpa: la compañera más pesada</h2>

          <p>
            La culpa aparece porque el cerebro necesita encontrar una explicación. Y la explicación más fácil es culparse a uno mismo.
          </p>

          <p>
            Pero la realidad es que no tenías ese control. La decisión de terminar con la propia vida es profundamente personal.
          </p>

          <p>Cargar con la culpa no va a traer a esa persona de vuelta. Solo va a destruirte a ti.</p>

          <h2>El enojo que nadie quiere admitir</h2>

          <p>Hay algo que muchos sobrevivientes sienten pero que les da vergüenza admitir: enojo hacia la persona que se fue.</p>

          <p>Pero el enojo es normal. Es parte del duelo. Y necesita salir.</p>

          <p>
            Puedes estar enojado y al mismo tiempo amar profundamente a esa persona. Las emociones no son blanco y negro.
          </p>

          <h2>Cuándo buscar ayuda profesional</h2>

          <p>Considera buscar apoyo si:</p>

          <ul>
            <li>La culpa no disminuye con el tiempo, sino que aumenta.</li>
            <li>Tienes pensamientos recurrentes de que podrías haber evitado la muerte.</li>
            <li>Te sientes completamente aislado.</li>
            <li>Has empezado a tener pensamientos de hacerte daño.</li>
            <li>El dolor está afectando seriamente tu capacidad de funcionar.</li>
          </ul>

          <h2>Lo que necesitas escuchar</h2>

          <p><strong>No es tu culpa.</strong> Hiciste lo que pudiste.</p>

          <p><strong>No tienes que tener todas las respuestas.</strong> Tal vez nunca entiendas completamente por qué pasó.</p>

          <p><strong>El enojo es válido.</strong> La tristeza es válida. Todo lo que sientes es válido.</p>

          <p><strong>Puedes honrar su memoria y al mismo tiempo vivir tu vida.</strong></p>

          <p><strong>No estás solo.</strong> Aunque a veces se sienta así.</p>

          <div className="bg-gray-100 p-6 rounded-xl mt-8">
            <p className="text-black/80 italic">
              Si en algún momento sientes que el dolor es demasiado, busca ayuda. En México puedes llamar a la Línea de la Vida: <strong>800 911 2000</strong>, disponible las 24 horas.
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/20 rounded-2xl">
          <h3 className="text-2xl text-black mb-4">¿Necesitas acompañamiento?</h3>
          <p className="text-black/70 mb-6">
            El duelo por suicidio merece un espacio seguro y sin juicios. Puedo acompañarte.
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
