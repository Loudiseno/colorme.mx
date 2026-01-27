'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloArteterapia() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <span className="text-xs text-black font-medium uppercase tracking-wider">Arteterapia</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            ¿Qué es la Arteterapia? Guía para Entender la Terapia a Través del Arte
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Hay momentos en la vida en los que las palabras simplemente no alcanzan.
          </p>

          <p>
            Quizás estás atravesando una pérdida y no sabes cómo explicar ese vacío que sientes en el pecho. O tal vez llevas semanas con una ansiedad que no logras nombrar, una inquietud que aparece sin aviso y que no sabes de dónde viene. Puede ser que alguien te pregunte "¿cómo estás?" y te descubras diciendo "bien", cuando por dentro sabes que la respuesta es mucho más compleja.
          </p>

          <p>
            Si alguna vez te has sentido así —atrapado entre lo que sientes y lo que puedes expresar— quiero que sepas que no estás solo. Y quiero contarte sobre una herramienta que puede ayudarte a tender un puente entre esas dos orillas: la arteterapia.
          </p>

          <p>
            No, no necesitas saber dibujar. No necesitas ser artista. Solo necesitas estar dispuesto a explorar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué es exactamente la arteterapia?</h2>

          <p>
            La arteterapia es una forma de acompañamiento terapéutico que utiliza el proceso creativo como vehículo para la expresión emocional, el autoconocimiento y la sanación. A través del dibujo, la pintura, el collage, el modelado con arcilla y otras técnicas artísticas, puedes explorar y comunicar experiencias que a veces resultan difíciles —o incluso imposibles— de poner en palabras.
          </p>

          <p>
            En arteterapia, <strong>no importa cómo se ve lo que creas</strong>. No estamos buscando hacer una obra de arte bonita ni técnicamente perfecta. El foco está en el proceso, no en el resultado. Lo que importa es lo que surge mientras creas: las emociones que emergen, los pensamientos que aparecen, los descubrimientos que haces sobre ti mismo.
          </p>

          <p>
            La historia de la arteterapia es fascinante. Aunque el arte siempre ha tenido un papel sanador en las culturas humanas, fue Adrian Hill, un artista británico, quien formalizó el concepto durante la Segunda Guerra Mundial. Mientras se recuperaba de tuberculosis en un hospital, Hill descubrió que pintar le ayudaba a procesar sus emociones y sobrellevar la enfermedad. Comenzó a compartir esta práctica con otros pacientes —muchos de ellos soldados traumatizados por la guerra— y observó cómo el arte les permitía expresar lo que las palabras no podían.
          </p>

          <p>
            Desde entonces, la arteterapia se ha desarrollado como una disciplina profesional con fundamentos en la psicología, el arte y la neurociencia. Hoy sabemos que la expresión creativa activa áreas del cerebro relacionadas con la regulación emocional, la memoria y la resiliencia.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Para quién es la arteterapia?</h2>

          <p>
            Una de las preguntas que más escucho es: "¿La arteterapia es para mí?" La respuesta corta es: probablemente sí. La arteterapia puede beneficiar a prácticamente cualquier persona que esté buscando una forma diferente de conectar consigo misma.
          </p>

          <p>
            Dicho esto, hay algunas situaciones donde la arteterapia resulta especialmente valiosa:
          </p>

          <p>
            <strong>Personas atravesando procesos de duelo.</strong> La pérdida de un ser querido, una relación, un trabajo, la salud... El duelo tiene muchas formas, y no siempre encontramos las palabras para describir lo que sentimos. El arte ofrece un lenguaje diferente, uno que puede contener la complejidad de la pérdida sin necesidad de explicarla.
          </p>

          <p>
            <strong>Quienes viven con ansiedad o estrés crónico.</strong> El proceso creativo tiene un efecto casi meditativo: te ancla en el presente, te saca de la espiral de pensamientos y le da a tu sistema nervioso un respiro. Estudios han demostrado que actividades artísticas pueden reducir los niveles de cortisol, la hormona del estrés.
          </p>

          <p>
            <strong>Personas que han vivido experiencias traumáticas.</strong> El trauma a menudo se almacena en el cuerpo de formas que el lenguaje verbal no puede alcanzar. El arte permite acceder a esas memorias y procesarlas de manera segura, sin necesidad de narrar los eventos con palabras.
          </p>

          <p>
            <strong>Quienes enfrentan enfermedades crónicas o graves.</strong> Un diagnóstico de enfermedad puede generar un torbellino de emociones: miedo, enojo, tristeza, incertidumbre. La arteterapia ofrece un espacio para procesar todo eso, para recuperar un sentido de control cuando el cuerpo se siente fuera de control.
          </p>

          <p>
            <strong>Personas que buscan autoconocimiento y crecimiento personal.</strong> No necesitas estar en crisis para beneficiarte de la arteterapia. Muchas personas la utilizan como una herramienta de exploración personal, una forma de conocerse más profundamente y de cultivar su bienestar emocional.
          </p>

          <p>
            <strong>Quienes tienen dificultad para expresarse verbalmente.</strong> Ya sea por personalidad, por cultura, por experiencias pasadas o simplemente porque las palabras no son tu medio natural, la arteterapia te ofrece otra vía de expresión.
          </p>

          <p>
            Y quiero repetirlo porque es importante: <strong>no necesitas saber dibujar, pintar ni tener ninguna habilidad artística</strong>. En mis sesiones he acompañado a personas que no habían tocado un pincel desde la primaria, y han tenido experiencias profundamente significativas. El arte en arteterapia no se juzga por su estética, sino por lo que te permite explorar y expresar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los beneficios de la arteterapia</h2>

          <p>
            A lo largo de mis años de práctica, he sido testigo de transformaciones que me siguen conmoviendo. Pero más allá de mi experiencia personal, la investigación científica respalda los beneficios de la arteterapia:
          </p>

          <p>
            <strong>Facilita la expresión de emociones complejas.</strong> Hay sentimientos que son difíciles de nombrar: esa mezcla de tristeza y alivio cuando muere un ser querido que estaba sufriendo, la culpa entrelazada con el enojo, el miedo disfrazado de irritabilidad. El arte puede contener estas contradicciones sin necesidad de resolverlas con lógica.
          </p>

          <p>
            <strong>Reduce el estrés y la ansiedad.</strong> Múltiples estudios han demostrado que el proceso creativo disminuye los niveles de cortisol en el cuerpo. Un estudio de la American Art Therapy Association encontró que el 75% de los participantes reportaron una reducción significativa del estrés después de sesiones de arteterapia.
          </p>

          <p>
            <strong>Mejora la autoestima y la confianza.</strong> Crear algo con tus propias manos —sin importar cómo se vea— genera una sensación de logro. Con el tiempo, esto se traduce en mayor confianza en tu capacidad de enfrentar desafíos.
          </p>

          <p>
            <strong>Promueve el autoconocimiento.</strong> El arte funciona como un espejo: te devuelve imágenes de tu mundo interior que quizás no conocías. A través de lo que creas, puedes descubrir patrones, deseos, miedos y fortalezas que estaban ocultos.
          </p>

          <p>
            <strong>Ayuda a procesar experiencias difíciles.</strong> Ya sea un trauma del pasado, una crisis actual o una transición de vida, el arte te permite trabajar con esas experiencias de manera gradual y segura, a tu propio ritmo.
          </p>

          <p>
            <strong>Ofrece un sentido de control.</strong> Cuando la vida se siente caótica o impredecible, el acto de crear te devuelve agencia. Tú decides los colores, las formas, el ritmo. En el espacio del arte, tú tienes el control.
          </p>

          <p>
            <strong>Conecta mente y cuerpo.</strong> La arteterapia es una práctica encarnada: involucra tus manos, tu vista, tu postura, tu respiración. Esta conexión mente-cuerpo puede ser especialmente sanadora para quienes tienden a vivir "de la cabeza para arriba".
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cómo es una sesión de arteterapia?</h2>

          <p>
            Entiendo que dar el primer paso puede generar nervios. No saber qué esperar hace todo más difícil. Por eso quiero describir cómo son las sesiones conmigo, para que puedas imaginarte en ese espacio.
          </p>

          <p>
            <strong>La primera consulta es gratuita y dura 30 minutos.</strong> Es una conversación breve donde me cuentas qué te trae, qué estás buscando, y juntos exploramos si la arteterapia es el camino adecuado para ti. No hay presión ni compromiso. Es simplemente un espacio para conocernos.
          </p>

          <p>
            <strong>Las sesiones regulares duran 50 minutos.</strong> Pueden ser presenciales u online, según lo que funcione mejor para ti. El espacio está preparado con diversos materiales: papel, pinturas, crayones, revistas para collage, arcilla, telas...
          </p>

          <p>
            <strong>Cada sesión tiene su propio ritmo.</strong> A veces comenzamos conversando sobre cómo llegaste, qué está presente para ti ese día. Otras veces, si las palabras no fluyen, empezamos directamente con los materiales. No hay una fórmula fija.
          </p>

          <p>
            <strong>El material lo iremos definiendo de acuerdo a los ejercicios que necesites y tambien puedo ajustar las sesiones a lo que puedas conseguir en caso de que sean en línea.</strong>
          </p>

          <p>
            <strong>Al final, reflexionamos juntos.</strong> Miramos lo que creaste —no para juzgarlo estéticamente, sino para explorar qué surgió. ¿Qué colores elegiste? ¿Qué formas aparecieron? ¿Cómo te sentiste mientras lo hacías? A veces las respuestas vienen; a veces quedan preguntas. Ambas son valiosas.
          </p>

          <p>
            <strong>Lo que sucede en la sesión es confidencial.</strong> Este es un espacio seguro donde puedes expresarte sin miedo al juicio. Todo lo que compartas queda entre nosotros.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Arteterapia vs otras terapias: ¿cuál elegir?</h2>

          <p>
            Esta es otra pregunta frecuente, y la respuesta es: depende de ti y de lo que necesites.
          </p>

          <p>
            La terapia verbal tradicional (como la psicoterapia o el psicoanálisis) trabaja principalmente con la palabra. Es excelente para quienes se sienten cómodos expresándose verbalmente y para explorar patrones de pensamiento.
          </p>

          <p>
            La arteterapia, en cambio, trabaja con imágenes, colores, texturas y formas. Es especialmente útil cuando:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>Las palabras se sienten insuficientes o inaccesibles</li>
            <li>Necesitas una forma diferente de procesar experiencias</li>
            <li>Te sientes "atorado" en terapia verbal</li>
            <li>Quieres explorar tu mundo emocional de manera más intuitiva</li>
            <li>Buscas una práctica que involucre el cuerpo, no solo la mente</li>
          </ul>

          <p>
            <strong>Lo importante: no tienes que elegir una u otra.</strong> Muchas personas combinan arteterapia con terapia verbal, y los dos procesos se enriquecen mutuamente. Lo que descubres en arteterapia puede alimentar tus sesiones de psicoterapia, y viceversa.
          </p>

          <p>
            En mi práctica, también integro la arteterapia con la tanatología cuando es apropiado. Si estás atravesando un proceso de duelo o pérdida, podemos trabajar tanto con la palabra como con el arte, según lo que necesites en cada momento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes sobre la arteterapia</h2>

          <p>
            <strong>¿De verdad no necesito saber dibujar?</strong><br />
            De verdad. La arteterapia no es una clase de arte. No hay "bien" ni "mal", no hay calificaciones, no hay expectativas técnicas. Lo único que necesitas es disposición para explorar.
          </p>

          <p>
            <strong>¿Cuántas sesiones voy a necesitar?</strong><br />
            Esto varía mucho de persona a persona. Algunas personas vienen por unas pocas sesiones para trabajar algo específico; otras mantienen un proceso más largo de acompañamiento. En nuestra primera conversación podemos hablar de tus expectativas y diseñar un plan que funcione para ti.
          </p>

          <p>
            <strong>¿La arteterapia funciona online?</strong><br />
            Sí. Las sesiones online pueden ser igual de efectivas que las presenciales. Trabajamos con materiales que tengas en casa (cosas simples: papel, lápices de colores, revistas viejas) y el proceso es el mismo. La pantalla no impide la conexión.
          </p>

          <p>
            <strong>¿Qué pasa si no me gusta lo que creo?</strong><br />
            Eso es parte del proceso. A veces lo que creamos nos incomoda, nos sorprende o nos confronta. Esas reacciones son información valiosa. Recuerda: no estamos buscando crear algo "bonito", sino algo auténtico.
          </p>

          <p>
            <strong>¿Puedo hacer arteterapia si ya estoy en otro tipo de terapia?</strong><br />
            Por supuesto. La arteterapia complementa otros procesos terapéuticos. El acompañamiento que ofrezco no es un tratamiento clínico, médico ni psiquiátrico. Mi práctica no realiza diagnósticos, evaluaciones de trastornos mentales, mediciones psicológicas estandarizadas ni prescripción de medicamentos.
          </p>

          <p>
            <strong>¿Es lo mismo arteterapia que pintar para relajarme en casa?</strong><br />
            No exactamente. Pintar en casa puede ser relajante y valioso, pero la arteterapia incluye el acompañamiento de un profesional capacitado que te ayuda a explorar lo que surge, a hacer conexiones y a profundizar en tu proceso. Es la diferencia entre escribir un diario y trabajar con un terapeuta.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Te gustaría explorar la arteterapia?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si algo de lo que leíste resonó contigo, te invito a dar el primer paso. Agenda una consulta gratuita de 30 minutos donde podemos conversar sobre lo que estás buscando.
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

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-black/60 text-sm italic">
            Lourdes es arteterapeuta, tanatóloga, diseñadora y fotógrafa. Después de atravesar su propio proceso de sanación a través del arte, se dedica a acompañar a otras personas en sus caminos de transformación. Es autora del libro "Indeleble", donde comparte su historia de resiliencia.
          </p>
        </div>
      </div>
    </article>
  )
}
