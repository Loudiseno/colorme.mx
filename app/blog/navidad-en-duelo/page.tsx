'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import RelatedArticles from '@/components/RelatedArticles'
import { siteConfig } from '@/lib/seo'

export default function ArticuloNavidadEnDuelo() {
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
            Navidad en Duelo: Cómo Sobrevivir las Fiestas Cuando el Corazón Está de Luto
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/navidad en duelo.jpeg" alt="Navidad en duelo" width={600} height={400} className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Nadie te avisa que la Navidad puede romperte de una manera completamente distinta.
          </p>

          <p>
            Las luces, las canciones, los anuncios de familias sonrientes reunidas alrededor de la mesa -todo eso que en otros años era festivo- de pronto se convierte en un recordatorio constante de todo lo que falta. De la silla vacía. De la llamada que ya no llegará. De la tradición que era su tradición y que ahora no sabes si mantener o dejar ir.
          </p>

          <p>
            Si estás atravesando unas fiestas en duelo, quiero que sepas algo fundamental desde el inicio: el contraste entre la alegría que el mundo espera y el dolor que tú sientes no significa que algo está mal contigo. Significa que amaste profundamente. Y que el amor no desaparece solo porque el calendario diga que es diciembre.
          </p>

          <p>
            Desde mi experiencia como tanatóloga y como sobreviviente de cáncer -que también ha tenido que aprender a encontrar su camino en fiestas que se sienten imposibles- sé que transitar la Navidad en duelo es posible. No sin dolor, pero sí con más compasión, más consciencia, y más espacio para lo que realmente estás sintiendo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué la Navidad puede intensificar el duelo</h2>

          <p>
            Las fiestas navideñas están diseñadas alrededor de la reunión, la familia y la continuidad de las tradiciones. Cada elemento de la época -los adornos, los villancicos, los platillos especiales- está cargado de memoria y de presencia. Cuando hay una pérdida, esas memorias se convierten en disparadores de dolor.
          </p>

          <p>
            Ver el adorno que esa persona colgaba cada año. Cocinar la receta que era suya. Sentarse a la mesa y notar el espacio donde solía estar. Escuchar su canción favorita de navidad en el supermercado. Pequeñas cosas cotidianas que de pronto pesan toneladas.
          </p>

          <p>
            Además, existe una presión social invisible pero muy poderosa: la expectativa de "estar bien en Navidad". Las fiestas son culturalmente obligatorias para la alegría. Y si tú estás de duelo -si el año pasado fue devastador y las fiestas lo hacen más evidente- puede sentirse como una doble carga: cargas el dolor y cargas la expectativa de ocultarlo para no arruinar el ambiente.
          </p>

          <p>
            Esa presión puede manifestarse en frases que, aunque bien intencionadas, duelen: "Ya deberías estar mejor", "Por lo menos estamos todos juntos", "Ella no querría verte así". Esas palabras nacen del incómodo que el entorno siente frente al dolor, no de una verdad sobre lo que tú deberías sentir.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Permiso para sentir lo que sea que estés sintiendo</h2>

          <p>
            Lo primero que quiero darte hoy no es un consejo ni una técnica. Es permiso.
          </p>

          <p>
            Permiso para no sentirte festiva. Permiso para llorar en la cena de Navidad si eso es lo que necesitas. Permiso para declinar invitaciones sin sentirte culpable. Permiso para cambiar las tradiciones o cancelarlas completamente este año. Permiso para que esta Navidad sea diferente, sin que eso signifique que siempre lo será.
          </p>

          <p>
            El duelo no toma vacaciones en diciembre. Y tú no tienes que fingir que sí.
          </p>

          <p>
            También quiero decirte algo sobre la culpa, porque aparece mucho en estas fechas. Muchas personas sienten culpa por reírse en un momento de la reunión y luego "acordarse" de que deberían estar tristes. Otras sienten culpa por estar tristes cuando "deberían" aprovechar la celebración. El duelo y la alegría pueden coexistir en el mismo espacio, incluso en la misma tarde. Eso no es incoherencia -es ser humano.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Estrategias concretas para atravesar las fiestas con más compasión</h2>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Decide con antelación qué quieres hacer y qué no</h3>

          <p>
            No esperes a que lleguen los días de fiesta para tomar decisiones. Con tiempo, pregúntate qué tradiciones quieres mantener porque te conectan con quien perdiste, y cuáles preferirias suspender porque el dolor es demasiado fresco. Tomar esas decisiones con anticipación reduce el impacto emocional del momento y te da sensación de control.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Comunica tus necesidades al entorno</h3>

          <p>
            Las personas que te rodean probablemente quieren ayudarte pero no saben cómo. Puedes decirles algo tan sencillo como: "Sé que estas fiestas van a ser difíciles para mí. No necesito que me animen -necesito que me permitan estar triste si llego a ese punto, y que no hagan como si todo estuviera bien." Darles instrucciones concretas les quita la presión de adivinar qué hacer, y a ti te protege de respuestas bienintencionadas que igual duelen.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Crea un espacio para honrar la ausencia</h3>

          <p>
            Algunas familias encuentran mucho consuelo en incluir a quien falleció dentro de las tradiciones de manera simbólica: encender una vela en su memoria antes de cenar, dejar una flor en el lugar donde solía sentarse, compartir un recuerdo favorito de esa persona como parte de la reunión. Honrar la ausencia explícitamente -en lugar de ignorarla- puede hacer que el dolor sea más integrable para todos.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Ten un plan de salida si lo necesitas</h3>

          <p>
            Si vas a una reunión familiar o social, saber que puedes irte cuando lo necesites reduce enormemente la ansiedad anticipatoria. No tienes que quedarte hasta el final. Puedes llegar, honrar el compromiso, y retirarte cuando sientas que ya fue suficiente. Tener esa opción disponible -aunque no la uses- cambia cómo vives el momento.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Cuida tu cuerpo especialmente durante esta época</h3>

          <p>
            El duelo es agotador a nivel físico, y las fiestas navideñas tienden a alterar los horarios de sueño, la alimentación y el movimiento. Pequeños esfuerzos por mantener rutinas básicas -dormir suficiente, comer de manera regular, salir a caminar aunque sea quince minutos- pueden marcar una diferencia real en cómo te sientes emocional y cognitivamente durante esta temporada.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Crear nuevas tradiciones: ni olvidar ni congelarse</h2>

          <p>
            Una de las preguntas más frecuentes que recibo en esta época es: "¿Tengo que seguir con las tradiciones de siempre o puedo cambiarlas?" La respuesta es que puedes hacer cualquiera de las dos -o una mezcla de ambas. No existe una respuesta universal.
          </p>

          <p>
            Hay tradiciones que se vuelven más significativas después de una pérdida, porque al hacerlas sientes la presencia de quien ya no está. Y hay tradiciones que se vuelven imposibles de sostener, porque el dolor que activan es demasiado fresco. Ambas experiencias son válidas.
          </p>

          <p>
            Crear una nueva tradición no significa borrar a quien perdiste. Puede ser, de hecho, una forma de honrarlo. Una vela encendida en su nombre. Un platillo que antes hacía él o ella, ahora preparado por ti por primera vez. Una ofrenda pequeña en un rincón de la casa. Un paseo por un lugar que le gustaba.
          </p>

          <p>
            El objetivo no es que estas fiestas sean perfectas ni que estés bien en ellas. El objetivo es que puedas transitarlas de una manera que sea auténtica para ti, que no te lastime más de lo necesario y que incluya, cuando puedas, pequeños momentos de calidez y conexión.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Si la Navidad era la temporada favorita de quien perdiste</h2>

          <p>
            Hay algo particularmente doloroso cuando la persona que falleció amaba la Navidad con intensidad. Su energía al decorar, su entusiasmo al comprar regalos, sus canciones favoritas de la época -todo eso ahora es una ausencia que tiene forma y textura específicas.
          </p>

          <p>
            Una pregunta que puede ayudarte en esos momentos: ¿qué querría esa persona para ti en estas fiestas? Muy probablemente, no querría verte sufriendo en silencio. Muy probablemente, querría que encontraras algún momento de paz, de calidez, de conexión genuina con las personas que te rodean.
          </p>

          <p>
            Cuidarte no es traicionarla. Puede ser, de hecho, una de las formas más profundas de honrar su amor por ti.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes sobre el duelo en temporada navideña</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-black">¿Es normal que la segunda Navidad sea igual o más difícil que la primera?</p>
              <p>
                Sí, y es más común de lo que se piensa. Muchas personas reportan que el segundo año puede ser más intenso en ciertas fechas porque el shock inicial se ha disipado y el dolor se siente más "real" y permanente. No significa que estés retrocediendo en tu proceso -significa que estás procesando a un nivel más profundo.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Tengo que ir a las reuniones familiares aunque no quiera?</p>
              <p>
                No hay ninguna obligación. Puedes elegir qué eventos atender y cuáles no, y esa decisión puede cambiar de año en año según cómo te sientas. Si decidir no ir genera culpa, recuerda que cuidarte emocionalmente también es una responsabilidad, no solo un lujo.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Qué hago si en la reunión familiar nadie menciona a la persona que falleció?</p>
              <p>
                Tú puedes romper ese silencio si lo necesitas. Puedes decir su nombre, compartir un recuerdo, proponer un brindis en su memoria. Muchas veces el silencio familiar no es por falta de amor sino por miedo a causarte más dolor. Dar el primer paso puede liberar a toda la familia de ese peso no dicho.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Tengo que poner el árbol o decorar la casa si no quiero?</p>
              <p>
                No. Y si decides no hacerlo, no necesitas justificarlo ante nadie. Hay años en que decorar es imposible o simplemente innecesario. Hay otros en que decorar es un acto de amor hacia ti misma y hacia quienes viven contigo. Tú decides cuándo y cómo.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Cómo ayudo a mis hijos a vivir la Navidad cuando estoy en duelo?</p>
              <p>
                Con honestidad y desde tu propio nivel de capacidad. Los niños necesitan más que protección de la tristeza: necesitan modelar que los adultos pueden sentir dolor y seguir funcionando. Puedes decirles que extrañas a quien perdiste y que eso es normal, mientras también les ofreces momentos de calidez y conexión. No tienes que ser perfecta -tienes que ser honesta y estar presente.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Esta temporada no tiene que atravesarse en soledad</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si las fiestas se sienten abrumadoras, un acompañamiento tanatológico puede ayudarte a prepararte emocionalmente y encontrar tu propio camino a través de ellas, a tu ritmo y desde tu historia.
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
        <RelatedArticles currentSlug="navidad-en-duelo" category="tanatologia" />
      </div>
    </article>
  )
}
