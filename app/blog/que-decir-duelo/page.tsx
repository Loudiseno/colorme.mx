'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function QueDecirDueloPage() {
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
            Qué decir (y qué NO decir) a alguien en duelo
          </h1>
          <p className="text-black/60">
            Por Lourdes Carrillo · Tanatóloga y Arteterapeuta
          </p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/como-acompanar-duelo.webp"
            alt="Cómo acompañar a alguien en duelo"
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-black/80 italic mb-8">
            Guía para acompañar con empatía y respeto.
          </p>

          <p>Tu amigo perdió a su papá. Tu compañera de trabajo perdió un embarazo. Tu vecina enviudó.</p>

          <p>Y tú no sabes qué decir.</p>

          <p>Te quedas sin palabras. Quieres ayudar, pero tienes miedo de decir algo que empeore las cosas.</p>

          <p>Ese miedo es comprensible. Pero el silencio también puede doler.</p>

          <h2>Lo primero que necesitas entender</h2>

          <p>La persona en duelo no necesita que la "arregles". No necesita que le quites el dolor, porque eso no es posible.</p>

          <p>Lo que necesita es sentirse acompañada, saber que puede hablar de su pérdida sin incomodarte, no ser olvidada después de los primeros días, y que su dolor sea reconocido como real y válido.</p>

          <h2>Frases que es mejor evitar</h2>

          <p>Aunque se digan con buena intención, estas frases pueden lastimar:</p>

          <p><strong>"Está en un lugar mejor."</strong> — Esta frase puede minimizar el dolor de quien se quedó. La persona no quiere que su ser querido esté "en otro lugar", lo quiere aquí.</p>

          <p><strong>"Al menos ya no sufre."</strong> — Puede que sea cierto, pero el doliente no siempre está listo para buscar consuelos.</p>

          <p><strong>"Dios tiene un plan" / "Todo pasa por algo."</strong> — Buscar significado es algo que cada persona hará a su tiempo, si lo desea. No es algo que debamos imponer.</p>

          <p><strong>"Tienes que ser fuerte."</strong> — Esta frase presiona a la persona a reprimir sus emociones. No necesita ser fuerte. Necesita poder ser vulnerable.</p>

          <p><strong>"Ya deberías estar mejor."</strong> — El duelo no tiene fecha de caducidad.</p>

          <p><strong>"Sé cómo te sientes, a mí también..."</strong> — Aunque hayas pasado por una pérdida similar, cada duelo es único.</p>

          <p><strong>"Llámame si necesitas algo."</strong> — El problema es que pone la responsabilidad en la persona que está sufriendo.</p>

          <h2>Frases que sí pueden ayudar</h2>

          <p><strong>"No tengo palabras, pero aquí estoy."</strong> — La honestidad de admitir que no sabes qué decir puede ser más reconfortante que una frase hecha.</p>

          <p><strong>"Siento mucho tu pérdida."</strong> — Simple, directa, sin intentar explicar o minimizar.</p>

          <p><strong>"No tienes que hablar si no quieres, pero puedo acompañarte."</strong> — Ofreces presencia sin presión.</p>

          <p><strong>"¿Te gustaría contarme algo sobre él/ella?"</strong> — Esta pregunta es un regalo. Le das permiso para hablar de su ser querido.</p>

          <p><strong>"Tu dolor tiene sentido."</strong> — Validar. Solo reconocer que lo que siente es real y comprensible.</p>

          <p><strong>"Estoy aquí, hoy y en las semanas que vienen."</strong> — Comunicar que estarás presente a largo plazo es valioso.</p>

          <h2>Acciones que acompañan</h2>

          <p>A veces lo que haces importa tanto como lo que dices.</p>

          <p><strong>Lleva comida sin esperar que te lo pidan.</strong> Algo preparado que solo necesite calentarse.</p>

          <p><strong>Ayuda con tareas prácticas.</strong> Ofrece ir al supermercado, acompañar en trámites, ayudar con los niños.</p>

          <p><strong>Manda mensajes sin esperar respuesta.</strong> "Pensando en ti hoy" es suficiente.</p>

          <p><strong>Recuerda las fechas importantes.</strong> El aniversario de la muerte, el cumpleaños del fallecido. Un mensaje ese día significa mucho.</p>

          <p><strong>Menciona a la persona fallecida.</strong> Di su nombre. Comparte recuerdos. Los dolientes a menudo temen que su persona sea olvidada.</p>

          <p><strong>Sigue presente después de las primeras semanas.</strong> El duelo no termina cuando termina el funeral.</p>

          <h2>Cuando no sabes qué decir</h2>

          <p>Si la persona te cuenta algo doloroso y tu mente se queda en blanco, puedes decir:</p>

          <p><em>"No sé qué decir, pero me importa lo que me estás contando."</em></p>

          <p><em>"Gracias por compartir esto conmigo."</em></p>

          <p><em>"Estoy aquí."</em></p>

          <p>No necesitas resolver nada. Solo estar presente.</p>

          <h2>Si tú eres quien está de duelo</h2>

          <p>Esto también es para ti.</p>

          <p>Es válido establecer límites. Puedes decir:</p>
          <ul>
            <li>"Ahora no puedo hablar de esto."</li>
            <li>"Prefiero no recibir consejos, solo necesito que me escuches."</li>
            <li>"Hoy necesito estar solo/a."</li>
          </ul>

          <p>También es válido alejarte de personas que consistentemente minimizan tu dolor o te presionan.</p>

          <p>Tu duelo, tu proceso.</p>

          <h2>En resumen</h2>

          <p><strong>Lo que la persona en duelo necesita escuchar:</strong></p>
          <ul>
            <li>"Tu dolor es real."</li>
            <li>"No tienes que estar bien."</li>
            <li>"No vas a atravesar esto solo/a."</li>
          </ul>

          <p><strong>Lo que no necesita escuchar:</strong></p>
          <ul>
            <li>Explicaciones sobre por qué pasó</li>
            <li>Comparaciones con otros duelos</li>
            <li>Fechas límite para su dolor</li>
            <li>Presión para ser fuerte</li>
          </ul>

          <p>Acompañar a alguien en duelo no requiere tener las palabras perfectas. Requiere estar presente, escuchar más de lo que hablas, y acompañar desde la empatía.</p>

          <p>El dolor no necesita ser solucionado. Solo necesita ser acompañado.</p>

          <p className="text-xl italic mt-12">
            A veces, el regalo más grande que puedes dar es quedarte cuando todo parece difícil.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/20 rounded-2xl">
          <h3 className="text-2xl text-black mb-4">¿Necesitas acompañamiento?</h3>
          <p className="text-black/70 mb-6">
            Si estás atravesando un duelo, puedo acompañarte en este proceso.
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
