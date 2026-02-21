'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloAniversariosDificiles() {
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
            Aniversarios difíciles: cómo atravesar las fechas dolorosas
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/aniversarios-dificiles.webp"
            alt="Aniversarios difíciles - Cómo atravesar las fechas dolorosas."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p>
            Lo sabes desde que abres los ojos.
          </p>

          <p>
            Hoy es ese día. El aniversario de la pérdida. Un cumpleaños que ya no puedes celebrar igual. Una fecha que solía ser especial y ahora duele.
          </p>

          <p>
            El calendario se convierte en un recordatorio constante. Las fechas que antes tenían un significado ahora se sienten como obstáculos que tienes que atravesar.
          </p>

          <p>
            Y a veces, el mundo sigue girando como si fuera un día cualquiera. Mientras tú apenas puedes con el peso de la fecha.
          </p>

          <p>
            Si estás aquí porque se acerca una fecha difícil (o porque ya llegó y no sabes cómo manejarla), este artículo es para ti.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué los aniversarios duelen tanto</h2>

          <p>Tu dolor es real. Hay razones por las que estas fechas son tan difíciles.</p>

          <p><strong>La anticipación puede intensificar el dolor.</strong> Muchas veces, los días previos al aniversario son más difíciles que el día mismo. Tu cuerpo y tu mente recuerdan.</p>

          <p><strong>El contraste con el pasado.</strong> Comparas cómo eran antes esos días con cómo son ahora. La ausencia se siente más presente.</p>

          <p><strong>Las expectativas sociales.</strong> Algunas fechas &quot;tienen que ser&quot; alegres según la cultura. Y tú no puedes sentir eso, y eso está bien.</p>

          <p><strong>El duelo no es lineal.</strong> Puedes haber tenido meses tranquilos y de pronto el aniversario te devuelve a la intensidad del inicio. Esto no es retroceso, es parte del proceso.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tipos de fechas difíciles</h2>

          <p>No solo es el aniversario de la pérdida. Hay muchas fechas que pueden activar el dolor:</p>

          <p>La fecha de la pérdida.</p>
          <p>El cumpleaños de la persona o lo que perdiste.</p>
          <p>Tu propio cumpleaños.</p>
          <p>Festividades: Navidad, Año Nuevo, Día de las Madres o Padres, y otras celebraciones familiares.</p>
          <p>Aniversarios significativos.</p>
          <p>Fechas inesperadas que te conectan con recuerdos.</p>

          <p>Todas estas fechas son válidas. No hay jerarquía del dolor.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo prepararte para una fecha difícil</h2>

          <p>La preparación no elimina el dolor, pero puede ayudarte a sentirte menos abrumado.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Reconoce la fecha</h3>
          <p>
            Fingir que es un día normal generalmente no funciona. Tu cuerpo va a recordar aunque tu mente intente ignorarlo.
          </p>
          <p>Es mejor reconocer: &quot;Este día va a ser difícil. Y eso es válido.&quot;</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Ajusta las expectativas</h3>
          <p>
            No tienes que &quot;superar&quot; el día. No tienes que estar bien. No tienes que fingir para que otros se sientan cómodos.
          </p>
          <p>Tu único objetivo es atravesar el día. Eso es suficiente.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Haz un plan flexible</h3>
          <p>Algunas preguntas que pueden ayudarte:</p>
          <p>¿Quiero estar acompañado o solo?</p>
          <p>¿Quiero hacer algo especial para honrar lo que perdí o prefiero distracción?</p>
          <p>¿Qué necesito evitar?</p>
          <p>¿A quién puedo contactar si necesito apoyo?</p>
          <p>Ten un plan, pero date permiso de cambiarlo si ese día sientes diferente.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Comunica lo que necesitas</h3>
          <p>
            Si hay personas que van a estar contigo, puedes decirles qué te ayuda y qué no.
          </p>
          <p>Las personas que te quieren quieren ayudarte, pero no siempre saben cómo si no les dices.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ideas para honrar tu pérdida en fechas difíciles</h2>

          <p>Para algunas personas, hacer algo activo ayuda más que simplemente &quot;aguantar&quot; el día.</p>

          <p><strong>Rituales de recuerdo:</strong></p>
          <p>Encender una vela.</p>
          <p>Visitar un lugar significativo.</p>
          <p>Preparar una comida especial.</p>
          <p>Ver fotos o videos.</p>
          <p>Escribir una carta.</p>

          <p><strong>Actos de servicio:</strong></p>
          <p>Donar a una causa significativa.</p>
          <p>Hacer una buena acción en honor a tu pérdida.</p>
          <p>Ayudar a otros que estén pasando por algo similar.</p>

          <p><strong>Expresión creativa:</strong></p>
          <p>Pintar o dibujar algo que represente lo que sientes.</p>
          <p>Hacer un collage.</p>
          <p>Escribir un poema o texto.</p>
          <p>Crear algo con tus manos.</p>

          <p><strong>Nuevas tradiciones:</strong></p>
          <p>Plantar algo vivo.</p>
          <p>Crear un álbum de recuerdos.</p>
          <p>Reunir a personas significativas para compartir historias.</p>

          <p>No tienes que hacer nada de esto. Pero si sientes la necesidad de &quot;hacer algo&quot;, estas opciones pueden ayudar.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo atravesar el día cuando llega</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Por la mañana</h3>
          <p>
            Despiértate sin exigirte nada. Este día no tienes que ser productivo. Si necesitas quedarte en cama un rato más, hazlo.
          </p>
          <p>Come algo. Tu cuerpo necesita energía.</p>
          <p>Muévete un poco si puedes. Aunque sea estirarte o dar una vuelta corta.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Durante el día</h3>
          <p><strong>Permítete sentir.</strong> No reprimas las emociones.</p>
          <p><strong>Toma descansos.</strong> Si estás en una reunión, está bien salir a respirar. Si estás solo, está bien distraerte si lo necesitas.</p>
          <p><strong>Evita las decisiones importantes.</strong> Este no es el momento para tomar decisiones significativas.</p>
          <p><strong>Cuida lo que consumes.</strong> Las redes sociales pueden intensificar emociones difíciles.</p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Por la noche</h3>
          <p>Reconoce que atravesaste el día. Eso es un logro.</p>
          <p>Haz algo que te reconforte.</p>
          <p>Descansa sin culpa por cómo fue el día.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los días después del aniversario</h2>

          <p>A veces los días posteriores son más difíciles que el aniversario mismo.</p>

          <p>
            La tensión acumulada, la energía de &quot;aguantar&quot; el día, puede soltarse cuando &quot;ya pasó&quot;.
          </p>

          <p>Date espacio también para esos días. No te exijas volver a la normalidad inmediatamente.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo los aniversarios se vuelven más manejables</h2>

          <p>
            No hay regla universal. Para algunas personas, el primer aniversario es el más difícil y cada año se suaviza un poco. Para otras, ciertos años son más difíciles que otros.
          </p>

          <p>Lo que suele pasar con el tiempo:</p>
          <p>La anticipación puede acortarse.</p>
          <p>Puedes recordar con más ternura y menos dolor agudo.</p>
          <p>Desarrollas rituales que te ayudan.</p>
          <p>Encuentras maneras de honrar la pérdida que se sienten bien.</p>

          <p>Pero &quot;más manejable&quot; no significa &quot;sin dolor&quot;. Es posible que estos días siempre tengan una carga emocional. Y eso no está mal.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Permisos que necesitas darte</h2>

          <p><strong>Permiso para no estar bien.</strong> Este día no tienes que ser fuerte.</p>

          <p><strong>Permiso para estar bien.</strong> Si tienes un momento de alegría, no significa que no ames lo que perdiste.</p>

          <p><strong>Permiso para cambiar de planes.</strong> Si dijiste que ibas a ir a algún lugar y ahora no puedes, está bien.</p>

          <p><strong>Permiso para pedir ayuda.</strong> Contacta a alguien de confianza si lo necesitas.</p>

          <p><strong>Permiso para hacer el día diferente.</strong> No tienes que seguir las tradiciones de antes si ya no funcionan para ti.</p>

          <p><strong>Permiso para crear nuevas tradiciones.</strong> El duelo cambia. Tus formas de recordar pueden cambiar también.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Si estás acompañando a alguien en una fecha difícil</h2>

          <p>Si alguien que quieres va a enfrentar un aniversario doloroso:</p>

          <p><strong>Marca la fecha en tu calendario.</strong> Envía un mensaje: &quot;Sé que hoy es un día significativo. Estoy pensando en ti.&quot;</p>

          <p><strong>Menciona lo que perdieron.</strong> Reconocer la pérdida es valioso.</p>

          <p><strong>Ofrece presencia.</strong> &quot;¿Te gustaría compañía?&quot; puede ser suficiente.</p>

          <p><strong>Pregunta qué necesita.</strong> No asumas. A veces quieren compañía, a veces soledad.</p>

          <p><strong>Sigue presente después.</strong> Los días siguientes también importan.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un recordatorio</h2>

          <p>
            Los aniversarios no son una prueba que tienes que pasar. No hay forma correcta de vivirlos.
          </p>

          <p>El único objetivo es atravesar el día cuidándote lo mejor que puedas.</p>

          <p>Y eso ya lo estás haciendo.</p>

          <p className="italic text-black/60 mt-8">
            Cada fecha difícil que atraviesas es parte de tu camino.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si se acerca una fecha difícil y necesitas apoyo para atravesarla, puedo acompañarte.
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
