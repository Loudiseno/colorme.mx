'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloPerdida() {
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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            ¿Qué es el Duelo? Guía para Entender y Atravesar el Proceso de Pérdida
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            La vida cambia en un segundo.
          </p>

          <p>
            Un diagnóstico inesperado. Una llamada que nunca imaginaste recibir. El silencio donde antes había una voz. De pronto, el mundo que conocías se fractura y quedas parado frente a un vacío que no sabes cómo nombrar.
          </p>

          <p>
            Quizás llevas días sin dormir bien. O te descubres llorando sin razón aparente en medio del día. Tal vez sientes un peso en el pecho que no se va, una mezcla de emociones que te confunde: tristeza, rabia, culpa, miedo. Todo junto. Todo revuelto.
          </p>

          <p>
            Si reconoces algo de esto, probablemente estás atravesando un duelo. Y necesito que entiendas algo fundamental: lo que sientes es completamente válido. No estás exagerando. No estás siendo débil. Estás siendo humano.
          </p>

          <p>
            Hoy quiero acompañarte a entender qué es realmente el duelo, por qué duele tanto y cómo puedes transitarlo sin perderte en el camino.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué significa hacer duelo?</h2>

          <p>
            El duelo es la respuesta emocional, física y psicológica que experimentamos cuando perdemos algo significativo en nuestra vida. Es el proceso interno que nos permite procesar esa ausencia, reorganizar nuestra realidad y eventualmente encontrar una nueva forma de vivir.
          </p>

          <p>
            La palabra "duelo" viene del latín "dolus" (dolor) y "duellum" (combate). Y eso describe perfectamente lo que sucede: es una batalla interna contra el dolor de la ausencia. Una lucha que nadie más puede pelear por ti, aunque sí pueden acompañarte mientras la atraviesas.
          </p>

          <p>
            Contrario a lo que muchos creen, el duelo no es una enfermedad ni un signo de debilidad. Es una respuesta adaptativa, una función natural de nuestra psique para integrar las pérdidas y seguir adelante. Sin duelo, no habría sanación posible.
          </p>

          <p>
            Y algo crucial: el duelo no tiene fecha de caducidad. No existe un momento en que "deberías" estar mejor. Cada organismo, cada historia, cada vínculo requiere su propio tiempo de procesamiento.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Más allá de la muerte: los duelos invisibles</h2>

          <p>
            Cuando escuchamos "duelo", pensamos automáticamente en la muerte de un ser querido. Y sí, perder a alguien que amas es devastador. Pero el duelo tiene muchas más caras de las que solemos reconocer.
          </p>

          <p>
            Existen pérdidas que la sociedad no valida, que el entorno minimiza, que incluso nosotros mismos nos negamos a reconocer. Son los duelos invisibles, y duelen igual o más porque los cargamos en silencio.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Pérdidas relacionales</h3>

          <p>
            La muerte de un familiar, sí. Pero también la muerte de tu mascota —ese compañero que estuvo contigo cada día durante años. La ruptura de una pareja con quien construiste una vida. El divorcio que partió tu mundo en dos. El distanciamiento de un hijo, un padre, un amigo que ya no responde tus mensajes.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Pérdidas de identidad</h3>

          <p>
            Hay duelos que suceden dentro de ti. Perder el trabajo que te definía. Atravesar una crisis donde ya no reconoces quién eres. Soltar sueños que llevabas años alimentando. Enfrentar la sensación de fracaso cuando la vida tomó un rumbo diferente al que planeaste.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Pérdidas de salud</h3>

          <p>
            Recibir un diagnóstico que cambia todo. Aprender a vivir con una enfermedad crónica. Enfrentar una discapacidad nueva. Descubrir que no podrás tener hijos de forma biológica. Tu cuerpo ya no es el que era, y eso también se llora.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Pérdidas materiales</h3>

          <p>
            Perder el empleo que daba estabilidad a tu familia. Ver cómo la crisis económica arrasa con lo que construiste. Perder tu casa, ese espacio que guardaba tus recuerdos. Incluso perder un objeto que tenía un valor sentimental profundo.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Pérdidas evolutivas</h3>

          <p>
            Las transiciones naturales también implican despedidas. La jubilación después de décadas de trabajo. El envejecimiento que te confronta con el paso del tiempo. El nido vacío cuando tus hijos se van. El fin de una etapa que definió tu vida.
          </p>

          <h3 className="text-xl text-black font-semibold mt-6 mb-3">Pérdidas ambiguas</h3>

          <p>
            Aquellas sin cierre, sin despedida clara. Una desaparición sin respuestas. Un aborto que nadie menciona. Una relación que debías ocultar y ahora terminó. Una mudanza forzada que te arrancó de tu tierra. El duelo migratorio de dejar tu país sin saber si volverás.
          </p>

          <p>
            Todas estas pérdidas merecen ser nombradas. Todas merecen espacio para el dolor.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El camino del duelo: ¿realmente hay etapas?</h2>

          <p>
            Probablemente conoces el modelo de las cinco etapas del duelo de Elisabeth Kübler-Ross: negación, ira, negociación, depresión y aceptación. Este modelo ha ayudado a millones de personas a entender que el duelo tiene diferentes momentos emocionales.
          </p>

          <p>
            Pero necesito ser clara contigo: el duelo no funciona como una escalera.
          </p>

          <p>
            No vas a subir ordenadamente de un peldaño al siguiente hasta llegar a la cima llamada "superación". El duelo es más bien como el mar: tiene olas que van y vienen. Algunos días te sientes en calma y al siguiente una ola te arrastra de vuelta a la tristeza más profunda.
          </p>

          <p>
            Puedes sentir aceptación por la mañana y rabia por la noche. Puedes tener una semana entera de paz y de pronto derrumbarte por una canción, un olor, una fecha. Puedes experimentar alivio y culpa al mismo tiempo —especialmente si quien partió estaba sufriendo.
          </p>

          <p>
            Todo eso es normal. No significa que estés retrocediendo ni que lo estés haciendo mal. Significa que eres humano procesando algo enorme.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las señales del cuerpo: el duelo también es físico</h2>

          <p>
            El duelo no vive solo en tu mente. Se instala en tu cuerpo con síntomas que pueden confundirte o asustarte.
          </p>

          <p>
            Es común experimentar alteraciones del sueño —dormir demasiado o no poder conciliar el sueño. Cambios en el apetito, ya sea comer en exceso o perder todo interés por la comida. Fatiga extrema aunque no hayas hecho nada físicamente demandante. Dolor en el pecho, opresión en la garganta, sensación de vacío en el estómago.
          </p>

          <p>
            También pueden aparecer dolores musculares, tensión, dolores de cabeza frecuentes. Tu sistema inmune se debilita durante el duelo, lo que te hace más susceptible a enfermarte.
          </p>

          <p>
            Cuidar tu cuerpo durante este proceso no es un lujo —es una necesidad. Descansar aunque el sueño sea difícil. Comer aunque no tengas hambre. Moverte aunque solo sea caminar unos minutos. Tu cuerpo necesita recursos para atravesar esta tormenta.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cuándo el duelo necesita ayuda profesional?</h2>

          <p>
            El duelo es un proceso natural, pero hay momentos en que se complica y requiere acompañamiento especializado. Reconocer estas señales puede marcar una diferencia enorme en tu recuperación.
          </p>

          <p>
            Considera buscar ayuda si:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>El dolor no disminuye con el tiempo, sino que se intensifica cada vez más.</li>
            <li>Te resulta imposible realizar las actividades básicas de tu vida cotidiana.</li>
            <li>Has dejado de cuidarte: no comes, no duermes, has abandonado tu higiene personal.</li>
            <li>Te has aislado completamente de las personas que te quieren.</li>
            <li>Sientes que la vida no tiene sentido o tienes pensamientos de hacerte daño.</li>
            <li>Han pasado muchos meses y sientes que sigues exactamente igual que el primer día.</li>
            <li>No tienes a nadie con quien hablar de tu dolor, o sientes que nadie entiende lo que atraviesas.</li>
          </ul>

          <p>
            Pedir ayuda no es rendirse. Es reconocer que algunas cargas son demasiado pesadas para llevarlas solo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El acompañamiento tanatológico: un espacio para tu dolor</h2>

          <p>
            La tanatología es la disciplina que se especializa en acompañar a personas que atraviesan procesos de pérdida, duelo y final de la vida. Como tanatóloga, mi trabajo consiste en ofrecerte un espacio seguro donde tu dolor tenga lugar.
          </p>

          <p>
            No se trata de que "superes" tu pérdida lo más rápido posible ni de que dejes de sentir. Se trata de que puedas transitar lo que estás viviendo de manera saludable, con herramientas concretas, a tu propio ritmo.
          </p>

          <p>
            En el acompañamiento trabajamos con lo que necesites: la tristeza que te desborda, el enojo que no sabes dónde poner, la culpa por cosas dichas o calladas, los "hubiera" que te persiguen, las despedidas que quedaron pendientes.
          </p>

          <p>
            No necesitas llegar con las ideas claras ni saber exactamente qué sientes. Parte del proceso es justamente ir descubriendo y nombrando eso que llevas dentro.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que nadie te dice sobre el duelo</h2>

          <p>
            El duelo te cambia. No vas a volver a ser quien eras antes de la pérdida, y eso está bien. La meta no es regresar a tu vida anterior sino construir una vida nueva que integre lo que sucedió.
          </p>

          <p>
            Vas a tener días buenos y días terribles. Vas a reírte y después sentirte culpable por haberte permitido un momento de alegría. Vas a olvidar por unos segundos que la persona ya no está, y el golpe de recordar será brutal cada vez.
          </p>

          <p>
            Con el tiempo, el dolor no desaparece —se transforma. Deja de ocupar cada rincón de tu mente y empieza a convivir con otras emociones. Aprendes a cargar esa ausencia de una forma diferente.
          </p>

          <p>
            Y un día, sin darte cuenta, descubrirás que puedes recordar sin derrumbarte. Que la tristeza sigue ahí pero ya no te ahoga. Que honrar a quien perdiste también puede incluir seguir viviendo tu propia vida.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-black">
                ¿Cuánto dura el duelo?
              </p>
              <p>
                No hay una respuesta universal. Puede tomar meses o años, dependiendo del tipo de pérdida y de tus circunstancias personales. Lo importante no es el tiempo sino cómo lo transitas.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">
                ¿Es normal sentir alivio cuando alguien muere?
              </p>
              <p>
                Completamente. Especialmente cuando esa persona sufría por una enfermedad. El alivio no contradice el amor —conviven.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">
                ¿Puedo hacer duelo por mi mascota?
              </p>
              <p>
                Por supuesto. Los animales de compañía generan vínculos profundos y su pérdida deja un vacío real. Tu dolor es legítimo.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">
                ¿El duelo puede hacerme enfermar físicamente?
              </p>
              <p>
                Sí. El estrés del duelo afecta tu sistema inmune y puede manifestarse en síntomas físicos diversos. Cuidar tu cuerpo es parte del proceso.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">
                ¿Necesito terapia para superar un duelo?
              </p>
              <p>
                No siempre es necesario, pero el acompañamiento profesional puede ayudarte a procesar de forma más saludable y evitar complicaciones.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">No tienes que atravesar el duelo en soledad</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás atravesando una pérdida y necesitas un espacio seguro para procesar lo que sientes, estoy aquí para acompañarte.
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
