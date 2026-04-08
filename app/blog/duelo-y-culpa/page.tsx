'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloYCulpa() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">Tanatología</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Culpa y Duelo: Por Qué Nos Sentimos Culpables Después de una Pérdida
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo-y-culpa.jpeg" alt="Duelo y culpa" width={1200} height={675} className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            "Debí haberle dicho que lo amaba más seguido." "¿Por qué no insistí en que fuera al médico?" "Si yo hubiera estado ahí, quizás las cosas habrían sido distintas."
          </p>

          <p>
            Si alguna vez te has dicho algo parecido después de una pérdida, quiero que sepas que no estás solo. La culpa es una de las emociones más comunes —y también más silenciosas— del duelo. Se instala en los rincones del pensamiento, a veces en susurros, a veces con una claridad brutal que no te deja descansar.
          </p>

          <p>
            Desde mi experiencia como tanatóloga y como alguien que ha atravesado sus propias pérdidas, puedo decirte algo: la culpa en el duelo no significa que hayas fallado. Significa que amaste. Pero también necesita ser trabajada, porque cuando no la atendemos, puede convertirse en una cadena que nos impide sanar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Por qué sentimos culpa después de una pérdida?</h2>

          <p>
            La culpa en el duelo nace de una ilusión muy humana: la de que teníamos el control. Nuestra mente, al no poder aceptar la impotencia que viene con la pérdida, busca explicaciones. Y muchas veces, la explicación más accesible —aunque dolorosa— es encontrar qué hicimos o dejamos de hacer.
          </p>

          <p>
            Desde la perspectiva psicológica, la culpa es en parte un mecanismo de defensa ante el caos. Si yo fui responsable, entonces el mundo sigue teniendo sentido, sigue siendo predecible. La alternativa —aceptar que la vida puede romperse sin razón, sin aviso— es mucho más aterradora.
          </p>

          <p>
            También interviene nuestra cultura. En México, hay mensajes implícitos muy fuertes sobre el deber: "debiste haber estado", "los hijos siempre cuidan a sus padres", "una buena madre nunca abandona". Cuando la pérdida llega, esos mandatos se convierten en jueces implacables.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El "hubiera": la trampa del tiempo que ya pasó</h3>

          <p>
            El "hubiera" es el idioma de la culpa. "Hubiera llamado más." "Hubiera perdonado antes." "Hubiera pasado más tiempo." Este modo condicional nos coloca en una realidad paralela que nunca existió, y desde ahí nos juzgamos con una dureza que jamás aplicaríamos a otra persona.
          </p>

          <p>
            Nadie toma decisiones con la información del futuro. Tomamos decisiones con lo que sabemos, sentimos y podemos en ese momento. Reconocer esto no borra el dolor, pero sí desmonta la lógica cruel que nos hace responsables de lo que no podíamos controlar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Tipos de culpa en el duelo</h2>

          <p>
            No toda culpa se siente igual. Identificar qué tipo de culpa estás cargando puede ser el primer paso para comenzar a soltarla.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Culpa del sobreviviente</h3>

          <p>
            "¿Por qué yo sigo aquí y ellos no?" Esta culpa aparece con mucha frecuencia en personas que han sobrevivido una enfermedad grave —como el cáncer—, un accidente, una tragedia colectiva, o simplemente en quienes han vivido más que sus padres, hermanos o amigos.
          </p>

          <p>
            Yo misma he transitado algo de esto como sobreviviente de cáncer. Seguir viva cuando otros no lo lograron genera una mezcla de alivio y vergüenza que puede resultar muy difícil de nombrar. Pero sobrevivir no es una traición. Es simplemente lo que pasó.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Culpa por lo no dicho o no hecho</h3>

          <p>
            Peleas sin resolver. Conversaciones pospuestas indefinidamente. "Te quiero" que se quedaron en el pensamiento. Esta culpa surge cuando la muerte llega antes de que pudiéramos cerrar ciclos, pedir perdón, o simplemente decir lo que sentíamos.
          </p>

          <p>
            El trabajo en este tipo de culpa pasa por reconocer que las relaciones humanas siempre son incompletas. Ninguna despedida es perfecta. Y que el amor que sentiste fue real, aunque no lo hayas expresado de todas las formas que hubieras querido.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Culpa por sentir alivio</h3>

          <p>
            Cuando alguien ha sufrido mucho —por una enfermedad larga, una relación difícil, años de dolor— es muy común que después de su muerte sintamos alivio. Y ese alivio nos genera una culpa enorme. "¿Cómo puedo sentirme aliviado si supuestamente los amaba?"
          </p>

          <p>
            El alivio no contradice el amor. El alivio dice: "No soportaba verles sufrir." Es una forma de amor también, aunque la culpa intente convencernos de lo contrario.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Culpa por seguir viviendo con alegría</h3>

          <p>
            Meses o años después de la pérdida, te descubres riendo con genuinas ganas en una reunión. Disfrutas una comida. Te enamoras de nuevo. Y de inmediato aparece la voz: "¿Cómo puedes ser feliz si ellos ya no están?"
          </p>

          <p>
            Continuar viviendo —y hacerlo con plenitud— no es una falta de respeto hacia quienes perdiste. Es lo que ellos, en su amor por ti, probablemente más habrían deseado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo la culpa complica el proceso de duelo</h2>

          <p>
            Cuando la culpa no se trabaja, puede convertirse en uno de los factores que llevan al duelo complicado o duelo patológico. Veamos de qué maneras interviene:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Obstaculiza la aceptación.</strong> Si seguimos creyendo que podríamos haber cambiado lo que pasó, nos quedamos atascados en la etapa de negociación del duelo, dando vueltas en círculos sin avanzar.</li>
            <li><strong>Genera autocastigo.</strong> La culpa sin procesar a veces se convierte en conductas de autopunición: descuidarse, aislarse, sabotear la propia felicidad como forma inconsciente de "pagar" por lo que creemos haber hecho mal.</li>
            <li><strong>Alimenta la depresión.</strong> La culpa crónica es uno de los elementos que pueden profundizar un episodio depresivo en el contexto del duelo.</li>
            <li><strong>Rompe relaciones.</strong> A veces la culpa se proyecta hacia afuera y buscamos "culpables" externos —médicos, familiares, amigos— lo cual daña vínculos importantes en un momento en que más los necesitamos.</li>
            <li><strong>Bloquea el recuerdo amoroso.</strong> Si cada vez que pensamos en quien perdimos lo primero que aparece es la culpa, acabamos evitando el recuerdo —y con eso, perdemos también los momentos hermosos que compartimos.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Herramientas para trabajar la culpa en el duelo</h2>

          <p>
            Trabajar la culpa no significa hacerla desaparecer de un día para otro. Significa llevarla a la luz, examinarla, y poco a poco transformar la relación que tienes con ella. Algunas herramientas que acompañamos en el proceso tanatológico:
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">La carta que no se envía</h3>

          <p>
            Escribirle a quien perdiste. Decirle todo lo que quedó pendiente: lo que lamentas, lo que no pudiste decir, las disculpas que nunca llegaron. No para recibir una respuesta —sino para dar salida a lo que llevas dentro. Esta carta es tuya; nadie más necesita leerla.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">La arteterapia como lenguaje para lo que no tiene palabras</h3>

          <p>
            A veces la culpa vive en capas tan profundas que las palabras no alcanzan. El trabajo expresivo —pintar, modelar, collage— permite que esas emociones encuentren una salida sin necesidad de verbalizarlas primero. En arteterapia, la imagen puede decir lo que la voz todavía no puede.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Cuestionar la narrativa de la culpa</h3>

          <p>
            En el acompañamiento tanatológico exploramos las creencias que sostienen la culpa. ¿Es verdad que podías haber evitado lo que pasó? ¿Qué información tenías en ese momento? ¿Qué harías tú si alguien que amas cometiera el mismo "error" que te atribuyes? Esta recontextualización compasiva no borra el dolor, pero afloja los nudos.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El ritual de despedida</h3>

          <p>
            Crear un ritual intencional —encender una vela, plantar algo, crear una pieza de arte en honor a quien se fue— puede ser una forma poderosa de cerrar ciclos que quedaron abiertos. No necesita ser elaborado; necesita ser auténtico.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes sobre la culpa en el duelo</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-black">¿Es normal sentir culpa después de la muerte de alguien?</p>
              <p>
                Sí, es una de las emociones más comunes del duelo. Prácticamente todas las personas que han perdido a alguien experimentan algún grado de culpa. No significa que hayas actuado mal —significa que eras humano en una relación humana, imperfecta y real.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Cuánto tiempo dura la culpa en el duelo?</p>
              <p>
                Varía mucho según la persona, el tipo de pérdida y si recibe acompañamiento o no. Sin trabajarse, la culpa puede cronificarse durante años. Con un proceso de acompañamiento adecuado, puede comenzar a transformarse en unas pocas semanas o meses.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Puedo perdonarme a mí mismo por cosas que hice o dejé de hacer?</p>
              <p>
                Sí, y ese es precisamente uno de los objetivos del trabajo tanatológico. El autoperdón no significa que lo que pasó estuvo bien —significa reconocer que eras humano, con límites, con miedo, con lo que sabías en ese momento. Y que mereces seguir viviendo sin esa carga.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿La culpa significa que no amaba lo suficiente?</p>
              <p>
                Todo lo contrario. La culpa generalmente es proporcional al amor. Cuanto más profundo era el vínculo, más posibilidades hay de que aparezca la culpa. Es una muestra de que esa relación importaba.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Necesito hablar con un profesional para trabajar la culpa del duelo?</p>
              <p>
                Si la culpa interfiere con tu vida cotidiana, te impide dormir, te aísla o persiste por muchos meses, buscar acompañamiento profesional es una decisión muy sabia. No tienes que cargar este peso solo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">La culpa no tiene que ser tu compañera permanente</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si cargas con culpa después de una pérdida y sientes que ya no puedes seguir cargándola solo, hay un espacio seguro esperándote para comenzar a soltarla.
          </p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">
            Agenda tu primera consulta gratuita
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-black/10">
          <p className="text-black/60 text-sm italic">
            Lourdes es arteterapeuta, tanatóloga, diseñadora, fotógrafa y sobreviviente de cáncer. Su formación integra técnicas de México, Bali, Tailandia, Malasia e India. Es autora de "Indeleble".
          </p>
        </div>
      </div>
    </article>
  )
}
