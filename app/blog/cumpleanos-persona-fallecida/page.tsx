'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloCumpleanosPersonaFallecida() {
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
            El Cumpleaños de Alguien que Ya No Está: Cómo Enfrentar Esa Fecha con el Corazón Abierto
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/cumpleanos persona fallecida.jpeg" alt="Cumpleaños de persona fallecida" width={1200} height={675} className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hoy debería ser un día de celebración. Y, sin embargo, duele.
          </p>

          <p>
            Es el cumpleaños de alguien que amas y que ya no está. Y hay algo particularmente cruel en que el calendario siga marcando esa fecha con la misma exactitud de siempre, mientras el mundo que conocías ya no es el mismo.
          </p>

          <p>
            Quizás revolviste los contactos de tu teléfono y por un segundo buscaste su número para escribirle "feliz cumpleaños" —como hacías cada año. O te encontraste pensando qué regalo le hubieras dado. O simplemente la tristeza llegó sin avisar, pesada y silenciosa, acompañada de memorias que duelen porque son demasiado hermosas para soportarlas.
          </p>

          <p>
            Hoy quiero hablarte de ese día. De cómo transitarlo sin anestesiarte, sin huir del dolor, pero también sin quedarte atrapada en él.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué el cumpleaños de alguien fallecido duele de una manera particular</h2>

          <p>
            La muerte nos roba mucho. Nos roba la presencia física, la voz, el abrazo. Pero hay algo que los cumpleaños evidencian de forma especialmente cruda: nos roba el futuro compartido. Cada cumpleaños que esa persona ya no celebrará es un recordatorio de todos los años que no habrá.
          </p>

          <p>
            A diferencia del aniversario de la muerte —que marca el día de la pérdida—, el cumpleaños estaba asociado a la vida, a la alegría, a las ganas de celebrar. Era un día de llamadas, de reuniones, de pasteles, de canciones. Y ahora ese mismo día llega vacío de todo eso, y el contraste es devastador.
          </p>

          <p>
            Hay también una dimensión del cumpleaños que pocas personas nombran: la pregunta de cuántos años tendría. "Hoy cumpliría cuarenta años." "Hoy serían sus ochenta." Esa pregunta nos confronta con una versión de esa persona que nunca existirá, con una vida que quedó incompleta, y eso activa una forma de duelo que llamamos duelo por el futuro no vivido.
          </p>

          <p>
            En el contexto de mis acompañamientos, he conocido a muchas personas que sienten culpa en el cumpleaños de quien perdieron. Culpa por sentirse tristes cuando "deberían" celebrar su vida. Culpa por querer olvidarse de la fecha para no sufrir. Culpa por seguir vivas cuando la otra persona no está.
          </p>

          <p>
            Quiero decirte algo muy claramente: no hay forma correcta ni incorrecta de vivir ese día. Lo que sientes —tristeza, nostalgia, amor, enojo, alivio, incluso alegría— es tuyo y es válido.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Honrar su memoria: crear rituales de cumpleaños llenos de significado</h2>

          <p>
            Uno de los aprendizajes más poderosos que me han dado el trabajo tanatológico y la arteterapia es este: los rituales son puentes. Nos conectan con quienes ya no están de una manera que las palabras solas no logran.
          </p>

          <p>
            Un ritual de cumpleaños para alguien fallecido no tiene que ser solemne ni religioso. Puede ser tan sencillo o tan elaborado como necesites. Lo único que importa es que venga del corazón y que sea intencional.
          </p>

          <p>
            Algunas formas de honrar ese día:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Preparar o comer su platillo favorito</strong>. La comida tiene una conexión profunda con la memoria y el afecto. Cocinar lo que a esa persona le encantaba es un acto de amor concreto.</li>
            <li><strong>Escuchar su música</strong>. Arma una lista de reproducción con las canciones que amaba y déjate llevar por los recuerdos que despiertan.</li>
            <li><strong>Hacer un álbum o collage de fotos</strong>. Reúne imágenes de diferentes épocas de su vida y permítete recordar con todos los sentidos.</li>
            <li><strong>Encender una vela y escribirle</strong>. Cuéntale cómo va tu vida, qué ha cambiado, qué extrañas, qué aprendiste de ella. Las cartas son un recurso poderoso en arteterapia para mantener el vínculo.</li>
            <li><strong>Hacer algo que ella hubiera querido hacer</strong>: ese viaje pendiente, esa actividad que siempre mencionaba, ese lugar que nunca visitaron juntos.</li>
            <li><strong>Reunirte con quienes también la querían</strong> —hijos, amigos, hermanos— no para llorar obligatoriamente, sino para compartir recuerdos y mantener viva su historia.</li>
            <li><strong>Donar o hacer una buena acción en su nombre</strong>. Ayudar a alguien como un acto de amor dedicado a quien ya no está puede ser profundamente sanador.</li>
            <li><strong>Visitar su lugar favorito</strong>: ese parque, esa ciudad, esa playa donde era más ella que en cualquier otro lado.</li>
          </ul>

          <p>
            También puedes crear tu propio ritual completamente nuevo. No tienes que seguir ninguna tradición ni hacer lo que hacen los demás. Tu relación con esa persona era única, y la manera de recordarla también puede serlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando el cumpleaños llega en medio de un duelo reciente</h2>

          <p>
            Si perdiste a esa persona hace poco y este es el primer cumpleaños sin ella, prepárate para que sea intenso. El primer año está lleno de "primeras veces": primera navidad, primera reunión familiar, primer cumpleaños. Cada una de esas primeras veces activa el duelo con fuerza.
          </p>

          <p>
            No tienes que hacerlo perfecto. No tienes que estar bien. Puedes permitirte estar completamente destrozada ese día si eso es lo que hay. Puedes llorar, puedes quedarte en casa, puedes cancelar planes. Puedes también salir y distraerte si eso te ayuda. No hay una forma correcta.
          </p>

          <p>
            Lo que sí te recomiendo —con toda la delicadeza y la firmeza que tengo— es que no estés completamente sola si puedes evitarlo. No porque necesites que te rescaten del dolor, sino porque el dolor compartido es más ligero. Busca a alguien que también la haya querido, o a alguien que te quiera a ti. La presencia humana, aunque sea silenciosa, hace diferencia.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Construir nuevas tradiciones: el cumpleaños como celebración de su vida</h2>

          <p>
            Hay familias que, con el paso de los años, transforman el cumpleaños de quien perdieron en una celebración genuina. No de su muerte, sino de su vida. Se reúnen a contar historias, a ver fotos, a reír de sus ocurrencias, a honrar lo que esa persona les dio.
          </p>

          <p>
            Esta transformación no sucede de un día para otro. Toma tiempo, y los primeros años puede sentirse forzada o dolorosa. Pero para muchas personas llega un momento en que el cumpleaños de quien se fue deja de ser solo un día de tristeza y se convierte en un espacio para la memoria viva.
          </p>

          <p>
            Eso no significa que el dolor desaparezca. Significa que el amor es más grande que el dolor. Que recordar también puede ser un acto de gratitud por todo lo que esa persona fue en tu vida.
          </p>

          <p>
            Algunas familias crean tradiciones anuales muy específicas: plantar una flor el día de su cumpleaños, soltar un globo, preparar una mesa con sus cosas favoritas, o simplemente reunirse a cenar. Estas tradiciones crean un contenedor —un tiempo y un espacio— donde el recuerdo tiene lugar legítimo, lo cual puede ser enormemente liberador.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-black">¿Es sano seguir celebrando el cumpleaños de alguien que murió?</p>
              <p>
                Sí, y en muchos casos es muy sano. Honrar esa fecha es una forma de mantener vivo el vínculo afectivo, lo cual es parte natural del duelo. No se trata de negar la muerte, sino de celebrar que esa persona existió y dejó una huella en tu vida.
              </p>
            </div>

            <div>
              <p className="font-semibold text="text-black">¿Qué hago si siento culpa por no pensar en esa persona ese día?</p>
              <p>
                La culpa es una emoción muy común en el duelo, pero en este caso no tiene base real. Olvidar momentáneamente no significa amar menos. La vida cotidiana nos absorbe, y eso es completamente humano. Si recordaste después, eso también cuenta.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Cómo le explico a mis hijos que es el cumpleaños de su abuela que falleció?</p>
              <p>
                Con honestidad y calidez. Puedes decirles que es un día especial para recordar a la abuela, ver sus fotos, contar historias sobre ella. Los niños necesitan que los adultos les den permiso de hablar de quienes perdieron —no protegerlos del recuerdo, sino acompañarlos en él.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Qué hago si ese día me siento bien y no triste?</p>
              <p>
                Permítete estar bien. El duelo no obliga a sufrir en fechas específicas. Sentirte en paz o incluso alegre ese día no significa que no quisieras a esa persona —puede significar que tu proceso de duelo está avanzando de forma saludable.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Puedo publicar algo en redes sociales sobre esa persona en su cumpleaños?</p>
              <p>
                Si eso te ayuda a honrar su memoria y a sentirte conectada con ella, adelante. No hay reglas. Algunas personas encuentran en esos gestos públicos una forma de mantener vivo el recuerdo; otras prefieren la intimidad. Haz lo que sea auténtico para ti.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Acompañamiento para transitar las fechas difíciles</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si el cumpleaños de alguien que perdiste te está resultando demasiado difícil de cargar, no tienes que hacerlo sola. Estoy aquí para acompañarte a honrar esa memoria y a cuidarte en el proceso.
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
      </div>
    </article>
  )
}
