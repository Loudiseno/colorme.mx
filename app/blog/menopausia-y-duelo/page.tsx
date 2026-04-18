'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import RelatedArticles from '@/components/RelatedArticles'
import { siteConfig } from '@/lib/seo'

export default function ArticuloMenopausiaYDuelo() {
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
            Menopausia y Duelo: Cómo Transitar el Fin de una Etapa con Compasión
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/menopausia-yduelo.jpeg" alt="Menopausia y duelo" width={1200} height={675} className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Nadie te avisa que la menopausia también es un duelo.
          </p>

          <p>
            Te hablan de los bochornos, del insomnio, de los cambios hormonales. Te dan nombres clínicos y listas de síntomas. Pero muy pocas personas te dicen que en algún punto del camino vas a sentarte a llorar sin saber muy bien por qué, o que vas a mirarte al espejo y sentir que la mujer que te devuelve la mirada es conocida pero ya no del todo familiar.
          </p>

          <p>
            Como tanatóloga, he acompañado a muchas mujeres a través de este proceso. Y como mujer que ha atravesado sus propias transiciones de vida -incluyendo la experiencia de enfrentar el cáncer y preguntarme qué quedaba de mí del otro lado- puedo decirte que lo que sientes en la menopausia tiene nombre: es duelo. Y merece ser tratado como tal.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La menopausia como proceso de pérdida</h2>

          <p>
            Desde la tanatología, entendemos el duelo como la respuesta emocional ante cualquier pérdida significativa, no solo la muerte. Y la menopausia implica varias pérdidas al mismo tiempo, muchas de ellas profundamente entretejidas con la identidad de la mujer.
          </p>

          <p>
            Está la pérdida de la fertilidad, claro. Pero no solo como capacidad reproductiva -sino como símbolo. Para muchas mujeres, independientemente de si quisieron tener hijos o no, la fertilidad está conectada a una sensación de posibilidad, de apertura hacia el futuro, de juventud. Cuando esa etapa cierra, algo se mueve en un lugar muy profundo.
          </p>

          <p>
            También está la pérdida del cuerpo conocido. El cuerpo que habitaste durante décadas empieza a responder de maneras distintas. Cambia su ritmo, su temperatura, su forma. No es el mismo cuerpo, y adaptarse a eso lleva tiempo y trabajo emocional real.
          </p>

          <p>
            Y quizás la pérdida más invisible: la de cierta versión de ti misma. La mujer que eras antes de este umbral. Esa identidad que, consciente o inconscientemente, estaba ligada a una etapa de vida que ahora termina.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">El duelo que nadie valida</h3>

          <p>
            Una de las cosas más difíciles del duelo de la menopausia es que suele ser invisible para el entorno. "Es natural", dicen. "Todas las mujeres pasan por esto." Y sí -pero que algo sea natural no significa que no duela. Que sea universal no significa que sea fácil.
          </p>

          <p>
            Cuando una persona pierde a un ser querido, el mundo la rodea, le lleva comida, le dice "cuenta con nosotros". Cuando una mujer atraviesa la menopausia, muchas veces se enfrenta a chistes, a minimizaciones o simplemente al silencio. No hay rituales colectivos para este tránsito. No hay espacio social para llorar lo que se va.
          </p>

          <p>
            Eso hace que muchas mujeres lleguen a esta etapa sintiéndose solas, avergonzadas de su propio dolor, preguntándose si están exagerando. No están exagerando. Están transitando uno de los cambios más profundos de su vida.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las emociones del tránsito: lo que puedes estar sintiendo</h2>

          <p>
            El duelo de la menopausia tiene muchas capas emocionales. Reconocerlas puede ser el primer paso para relacionarte con ellas de una manera más compasiva.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Tristeza y nostalgia</h3>

          <p>
            Una tristeza difusa que no siempre tiene un objeto claro. Momentos de nostalgia por una versión de ti misma, por una etapa que se va, por la sensación de que el tiempo avanza más rápido de lo que quisieras. Esta tristeza es válida. No tienes que combatirla -puedes acompañarla.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Enojo e irritabilidad</h3>

          <p>
            El enojo es parte del duelo, y en la menopausia a veces llega con fuerza. Puede ser enojo con tu cuerpo que "ya no te obedece", con una cultura que no valora el envejecimiento femenino, con la sensación de haber llegado a un punto de no retorno. Ese enojo merece ser escuchado -no reprimido ni medicalizado sin más.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Miedo e incertidumbre</h3>

          <p>
            "¿Qué viene ahora?" "¿Quién soy yo sin esta parte de mí?" El miedo al futuro, al envejecimiento, a perder la vitalidad, a volverse invisible en una sociedad que no sabe ver a las mujeres mayores. Estos miedos son comprensibles. Y también pueden ser trabajados.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Alivio y libertad</h3>

          <p>
            No todo es pérdida. Muchas mujeres también experimentan -a veces con culpa- una sensación de alivio: el fin de los ciclos menstruales, la liberación de ciertos miedos reproductivos, la sensación de que llegan a una etapa más libre. Ese alivio también tiene lugar. No lo traiciones.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La arteterapia como herramienta para este tránsito</h2>

          <p>
            Cuando el lenguaje no alcanza para describir lo que estamos viviendo -y en la menopausia muchas veces no alcanza- el arte puede ser un puente extraordinario hacia nuestro mundo interior.
          </p>

          <p>
            En el proceso de arteterapia, no se trata de crear obras maestras. Se trata de dar forma a lo que sientes: el caos, la melancolía, la transformación, la incertidumbre. Pintar, modelar, hacer collage con imágenes que resonan contigo, escribir sin censura. Cada una de estas acciones activa en el cerebro vías distintas a las del pensamiento racional, permitiendo que emerja lo que normalmente queda guardado.
          </p>

          <p>
            He acompañado a mujeres que llegaron a una sesión sin palabras para describir su experiencia y que, después de trabajar con arcilla o con color, pudieron ver en su creación algo que reconocieron inmediatamente: "Así es exactamente como me siento."
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Ejercicios expresivos para este momento</h3>

          <p>
            Algunos puntos de partida que puedes explorar por tu cuenta:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><strong>El mapa de tu cuerpo.</strong> Dibuja la silueta de tu cuerpo y colorea las zonas que sientes de manera diferente. Sin juicio, solo con presencia.</li>
            <li><strong>Collage de la transición.</strong> Recorta imágenes de revistas que representen lo que estás dejando ir y lo que estás recibiendo. Ponlas en un mismo espacio visual.</li>
            <li><strong>La carta a tu cuerpo.</strong> Escríbele a tu cuerpo. Cuéntale lo que sientes hacia él. Agradécele. Reclamadle si necesitas. Reconcíliate con él.</li>
            <li><strong>Color libre.</strong> Elige colores sin pensar y píntalos en papel. Sin forma, sin plan. Solo el movimiento de la mano y el color. Observa qué emerge.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Navegar esta etapa con autocompasión</h2>

          <p>
            La autocompasión no es autoindulgencia. Es la práctica de tratarte a ti misma con la misma amabilidad que le ofrecerías a una amiga que está pasando por algo difícil.
          </p>

          <p>
            La menopausia merece ser recibida con compasión, no con guerra. No como un enemigo al que hay que vencer, sino como un umbral que hay que atravesar. Y cruzar un umbral requiere que te detengas un momento, que mires lo que dejas atrás, que te permitas el duelo -y que también empieces a ver lo que está al otro lado.
          </p>

          <p>
            En muchas culturas del mundo, la etapa que sigue a la menopausia es reconocida como un tiempo de sabiduría, de autoridad femenina, de libertad. No todas las narrativas de esta transición son de pérdida. Algunas -las más antiguas- la celebran como un paso hacia una versión más plena de la mujer.
          </p>

          <p>
            Eso no niega el duelo. Pero sí lo acompaña. Y te da algo hacia dónde mirar cuando el peso de lo que se va se sienta demasiado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-black">¿Es normal sentir duelo durante la menopausia?</p>
              <p>
                Completamente. La menopausia implica pérdidas reales -de fertilidad, de cierta identidad, del cuerpo conocido- y el duelo es la respuesta natural a esas pérdidas. No estás exagerando. Lo que sientes es una respuesta humana válida ante un cambio profundo.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿La tristeza en la menopausia es solo hormonal?</p>
              <p>
                Las hormonas influyen, sí. Pero reducir toda la experiencia emocional de la menopausia a un desequilibrio hormonal es quedarse con una parte muy pequeña del cuadro. Hay una dimensión psicológica, identitaria y existencial que merece atención por sí misma, no solo tratamiento médico.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Puedo hacer arteterapia si nunca he hecho arte antes?</p>
              <p>
                Sí, y es precisamente para ti. La arteterapia no requiere habilidades artísticas previas. El proceso creativo en un contexto terapéutico tiene objetivos muy diferentes a producir "buen arte". Lo que importa es el proceso, no el resultado.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Qué diferencia hay entre acompañamiento tanatológico y psicoterapia para este tema?</p>
              <p>
                La tanatología se especializa específicamente en los procesos de pérdida y tránsito. No trabaja desde la patología sino desde la normalización del dolor y el acompañamiento en el proceso de duelo. Es especialmente útil cuando la experiencia que estás viviendo está marcada por el cambio, la pérdida de identidad y la búsqueda de sentido.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Hay algo al otro lado de este duelo?</p>
              <p>
                Sí. Muchas mujeres describen la etapa post-menopausia como un tiempo de mayor claridad, menos necesidad de aprobación externa y una conexión más honesta con sus propios deseos. El duelo no es el final del camino. Es el umbral hacia una versión diferente -y con frecuencia más libre- de ti misma.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Este tránsito merece acompañamiento</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si estás atravesando la menopausia y sientes que hay algo más que síntomas físicos, que hay un duelo que necesita espacio, estoy aquí para acompañarte con arteterapia y tanatología.
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

        {/* Related Articles */}
        <RelatedArticles currentSlug="menopausia-y-duelo" category="tanatologia" />
      </div>
    </article>
  )
}
