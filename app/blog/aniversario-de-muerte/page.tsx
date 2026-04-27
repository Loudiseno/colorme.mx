'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import RelatedArticles from '@/components/RelatedArticles'
import { siteConfig } from '@/lib/seo'

export default function ArticuloAniversarioDeMuerte() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link href="/#blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">Emociones Rituales en el mundo</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            El Aniversario de una Muerte: Por Qué Duele Tanto y Cómo Honrar Ese Día
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/aniversario muerte.jpeg" alt="Vela encendida en memoria de un ser querido fallecido" width={600} height={400} className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay fechas que el cuerpo recuerda antes que la mente.
          </p>

          <p>
            Quizás llevas días sintiéndote extrañamente irritable, o con un cansancio que no tiene explicación lógica. Tal vez dormiste mal sin saber por qué, o de pronto te sorprendiste pensando en esa persona con una intensidad que creías haber dejado atrás. Y entonces miras el calendario y lo entiendes todo: se acerca -o ya llegó- el aniversario.
          </p>

          <p>
            Ese día en que, hace uno, tres, cinco o diez años, el mundo cambió para siempre.
          </p>

          <p>
            El aniversario de una muerte es uno de los momentos más difíciles dentro del proceso de duelo. Y sin embargo, pocos hablan de él con la profundidad que merece. Hoy quiero acompañarte a entender por qué este día despierta tanto dolor, y cómo puedes transitarlo con cuidado y amor propio.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué el aniversario reactiva el duelo</h2>

          <p>
            El cerebro humano tiene una memoria emocional extraordinariamente precisa. No solo recuerda los hechos -recuerda cómo te sentiste, los olores del momento, la temperatura del aire, las palabras que se dijeron o las que nunca pudiste decir. Y cuando se acerca una fecha que está profundamente marcada en esa memoria, el cuerpo comienza a prepararse.
          </p>

          <p>
            En tanatología llamamos a este fenómeno "reactivación de duelo". No significa que hayas retrocedido en tu proceso ni que estés haciendo algo mal. Significa que el vínculo con esa persona fue real, profundo y significativo. Que el amor no desaparece con la muerte.
          </p>

          <p>
            La reactivación puede comenzar días o incluso semanas antes de la fecha. El cuerpo es sabio: anticipa lo que sabe que viene. Puedes experimentar tristeza difusa, sueños más vívidos, menor tolerancia al estrés, ganas de estar solo o, paradójicamente, de estar rodeado de personas. También pueden aparecer síntomas físicos: fatiga, dolor de cabeza, tensión muscular, cambios en el apetito.
          </p>

          <p>
            Todo eso es tu duelo hablándote. No lo ignores. Escúchalo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que nadie te dice sobre los primeros aniversarios</h2>

          <p>
            Existe una creencia muy extendida -y muy dañina- de que con el paso del tiempo los aniversarios se vuelven más fáciles de forma lineal y progresiva. La realidad es más compleja y más humana que eso.
          </p>

          <p>
            Hay personas para quienes el primer aniversario está aún envuelto en una especie de entumecimiento, ese estado casi anestésico en que el duelo temprano nos sumerge para protegernos. El golpe más brutal llega en el segundo o tercer aniversario, cuando la vida "ha vuelto a la normalidad" para todos menos para ti.
          </p>

          <p>
            En los primeros años, cada aniversario también carga algo que no siempre nombramos: la sensación de que estás "dejando atrás" a quien perdiste. Como si avanzar en el tiempo fuera una traición. Como si recordar menos claramente el sonido de su voz fuera olvidarla.
          </p>

          <p>
            No es traición. Es la naturaleza del tiempo y de la memoria. Y honrar el aniversario es precisamente una forma de decirle a esa persona: sigues importándome, sigues siendo parte de mí.
          </p>

          <p>
            Con los años, muchas personas describen que el aniversario se transforma. El dolor agudo de los primeros tiempos da paso a algo más suave -no menos profundo, sino diferente. Una melancolía que convive con la gratitud por haber tenido esa persona en la vida. Una tristeza que ya no paraliza sino que simplemente pide ser sentida.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Rituales para honrar la memoria en el aniversario</h2>

          <p>
            Una de las cosas que más me ha enseñado mi camino como tanatóloga -y también como sobreviviente de cáncer- es el poder de los rituales. No los rituales vacíos o impuestos, sino los que nacen de un lugar genuino de amor y necesidad.
          </p>

          <p>
            Un ritual es cualquier acción intencional que hacemos para conectarnos con algo significativo. No tiene que ser religioso ni elaborado. Solo tiene que ser tuyo, auténtico, y hecho con presencia.
          </p>

          <p>
            Algunas ideas que puedes adaptar a tu historia y a quien estás recordando:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Encender una vela</strong> y sentarte en silencio con ella unos minutos. La luz es símbolo universal de vida y presencia.</li>
            <li><strong>Visitar un lugar significativo</strong> que compartieron: ese café, ese parque, esa playa, esa ciudad que tanto amaban.</li>
            <li><strong>Preparar su platillo favorito</strong> y comerlo pensando en él o en ella, con sus canciones de fondo.</li>
            <li><strong>Escribirle una carta</strong>. Dile todo lo que necesitas decirle. Lo que quedó pendiente, lo que has aprendido desde que se fue, cómo te está cambiando su ausencia.</li>
            <li><strong>Crear algo con tus manos</strong>: una pintura, un collage, un bordado, un jardín. La arteterapia nos enseña que hacer con las manos sana lo que las palabras no alcanzan.</li>
            <li><strong>Reunirte con quienes también la extrañan</strong>, no para fingir que están bien, sino para recordarla juntos, reírse de las anécdotas, llorar si es necesario.</li>
            <li><strong>Hacer algo que esa persona hubiera amado</strong> o que nunca pudo hacer: ver esa película, escuchar ese concierto, visitar ese lugar que tenían pendiente.</li>
            <li><strong>Tomarte el día libre</strong> si puedes. El aniversario merece atención, no ignorarse entre juntas y pendientes.</li>
          </ul>

          <p>
            No todos los rituales tienen que ser solemnes. Puedes reír mientras recuerdas. Puedes bailar su canción favorita. El duelo y la alegría no son opuestos -pueden coexistir en el mismo momento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuidado personal antes, durante y después del aniversario</h2>

          <p>
            El aniversario no es solo ese día. Es un período que puede comenzar semanas antes y extenderse días después. Merecen tu atención y cuidado todos esos momentos.
          </p>

          <p>
            Antes del aniversario, date permiso de anticiparlo. Si sabes que se acerca una fecha difícil, puedes prepararte con intención: dormir un poco más, bajar el ritmo de compromisos sociales o laborales, hablar con alguien de confianza sobre lo que estás sintiendo. No se trata de anticipar el dolor con angustia, sino de hacer espacio para él con consciencia.
          </p>

          <p>
            Durante el aniversario mismo, suelta las expectativas de cómo "deberías" sentirte. Hay quienes lloran inconsolablemente y quienes sienten un día tranquilo. Hay quienes necesitan soledad total y quienes necesitan compañía. Hay quienes hacen un ritual elaborado y quienes simplemente colocan una foto en la mesa y siguen su día. Todo es válido. Tu duelo, tus reglas.
          </p>

          <p>
            Después del aniversario, date unos días de aterrizaje. Como cuando termina un momento muy intenso emocionalmente, el cuerpo necesita tiempo para procesar. Sé amable contigo mismo. No saltes de inmediato al modo productivo. Permítete integrar lo que viviste.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando el entorno no comprende</h2>

          <p>
            Una de las partes más dolorosas del aniversario suele ser la invisibilidad social. El mundo sigue girando. Las personas a tu alrededor tienen sus propias vidas y, a menos que sean muy cercanas, probablemente no recordarán la fecha ni sabrán lo que estás atravesando.
          </p>

          <p>
            Esto puede generar una sensación de soledad intensa, incluso de enojo: "¿Cómo puede todo seguir normal cuando para mí este día lo cambia todo?"
          </p>

          <p>
            Ese enojo es completamente válido. Y al mismo tiempo, no tienes que esperar a que otros recuerden para darte el permiso de honrar ese día. Puedes hacerlo por ti mismo, en silencio si es necesario, en compañía si tienes con quién.
          </p>

          <p>
            Si hay personas en tu vida que no comprenden la importancia del aniversario -que te dicen frases como "ya deberías haberlo superado" o "no te pongas así"- recuerda que esas palabras nacen de su propia incomodidad con el dolor, no de una verdad sobre lo que estás sintiendo. Tu duelo no tiene fecha de vencimiento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes sobre el aniversario de una muerte</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-black">¿Es normal sentir el aniversario con más intensidad que otros días?</p>
              <p>
                Completamente normal. Las fechas activadoras -aniversarios, cumpleaños, días festivos- tienen el poder de reactivar el duelo con intensidad. El cuerpo y la mente asocian esa fecha con la pérdida, y esa asociación genera una respuesta emocional más fuerte que en días ordinarios.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Qué hago si ese día tengo que trabajar o cumplir con responsabilidades?</p>
              <p>
                Si no puedes tomarte el día, intenta hacer aunque sea un pequeño ritual antes o después: encender una vela, escribir unas líneas, mirar una foto. Dar aunque sea cinco minutos de atención intencional al recuerdo puede marcar una diferencia en cómo transitas el día.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿El aniversario siempre va a doler igual de fuerte?</p>
              <p>
                Para la mayoría de las personas, la intensidad del dolor en los aniversarios cambia con el tiempo. No desaparece, pero se transforma. Lo que antes era una herida abierta puede convertirse en una cicatriz que a veces duele, pero que también cuenta la historia de un amor real.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Qué pasa si ese día no siento nada?</p>
              <p>
                También es posible y válido. El duelo no siempre se expresa como llanto o tristeza visible. A veces el cuerpo se protege con entumecimiento. No significa que no extrañes a esa persona -significa que estás procesando de una forma diferente.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Tengo que hacer algo especial obligatoriamente?</p>
              <p>
                No existe ninguna obligación. Si los rituales no resuenan contigo o si prefieres dejar pasar ese día en silencio, eso también está bien. Lo más importante es que te cuides, que no te exijas funcionar al cien cuando por dentro estás transitando algo intenso.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">No tienes que atravesar estas fechas en soledad</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si el aniversario -u otra fecha difícil- te está pesando demasiado, estoy aquí para acompañarte. Juntas podemos crear un espacio seguro para sentir, honrar y seguir caminando.
          </p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-black/60 text-sm italic">
            Lourdes es arteterapeuta, tanatóloga, diseñadora, fotógrafa y sobreviviente de cáncer. Su formación integra técnicas de México, Bali, Tailandia, Malasia e India. Es autora de "Indeleble".
          </p>
        </div>

        {/* Related Articles */}
        <RelatedArticles currentSlug="aniversario-de-muerte" category="tanatologia" />
      </div>
    </article>
  )
}
