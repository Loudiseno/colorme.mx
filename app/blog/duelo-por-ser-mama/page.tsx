'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DueloPorSerMamaPage() {
  return (
    <article className="pt-28 pb-6 md:pt-32 md:pb-8">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Duelo por ser mamá: las pérdidas que nadie nombra dentro de la maternidad
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/duelo-maternidad.jpeg"
            alt="Duelo por ser mamá y las pérdidas dentro de la maternidad"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La felicidad y la pérdida pueden coexistir</h2>

          <p className="text-xl leading-relaxed">
            Ser mamá puede ser una de las experiencias más significativas de la vida. También puede ser una de las más transformadoras. Y toda transformación profunda implica dejar algo atrás.
          </p>

          <p>
            Pero de eso no se habla. Se habla de la alegría, del amor incondicional, del privilegio de ser madre. Y todo eso existe. Pero también existe otra cosa: un duelo silencioso por la vida que tenías antes, por la persona que eras, por las cosas que dejaste de lado.
          </p>

          <p>
            Este duelo es invisible porque está mal visto nombrarlo. Decir que extrañas tu vida anterior puede sonar como si no quisieras a tus hijos. Decir que a veces te sientes perdida puede parecer ingratitud. Entonces muchas madres guardan silencio y se sienten culpables por sentir lo que sienten.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El cuerpo que cambió y que nadie te explicó</h2>

          <p>
            Empecemos por lo más concreto: tu cuerpo.
          </p>

          <p>
            El embarazo, el parto y la lactancia transforman el cuerpo de maneras que nadie te explica con honestidad. No hablo solo de las marcas visibles. Hablo de un cuerpo que respondía de cierta manera y que ahora responde diferente. De hormonas que alteran tu estado de ánimo, tu sueño, tu deseo, tu energía.
          </p>

          <p>
            La caída de estrógenos y progesterona después del parto genera cambios emocionales intensos. Y si amamantas, los niveles hormonales siguen alterados durante meses. La prolactina, necesaria para producir leche, puede afectar el deseo sexual. La falta de sueño acumulada impacta la memoria, la concentración, la paciencia.
          </p>

          <p>
            El cuerpo tarda en recuperar algo parecido a su equilibrio anterior. Y a veces no lo recupera: queda un cuerpo diferente, con nuevas sensaciones, nuevos límites, nuevas necesidades.
          </p>

          <p>
            Mirarte al espejo y no reconocerte. Sentir que habitas un cuerpo ajeno. Extrañar cómo te sentías antes, aunque ese cuerpo haya dado vida a tus hijos. Eso también es duelo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El cambio de identidad</h2>

          <p>
            Antes de ser mamá eras muchas cosas. Tenías un nombre que no era "la mamá de". Tenías intereses, proyectos, una forma de ocupar tu tiempo que era tuya. Tenías una identidad construida a lo largo de años.
          </p>

          <p>
            Cuando nace un hijo, esa identidad no desaparece, pero sí se transforma de manera radical. De pronto hay alguien que te necesita de forma absoluta. Tus necesidades pasan a segundo plano. Tu tiempo ya no te pertenece. Quien eras antes tiene que hacerse a un lado para darle espacio a quien eres ahora.
          </p>

          <p>
            Este cambio de identidad puede sentirse como una pérdida. No porque ser madre sea malo, sino porque implica soltar una versión de ti que conocías bien para convertirte en alguien que todavía estás descubriendo.
          </p>

          <p>
            Algunas mujeres hacen esta transición con relativa facilidad. Otras sienten que perdieron algo fundamental y no saben cómo recuperarlo. Ambas experiencias son válidas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que se deja en el camino</h2>

          <p>La maternidad implica dejar cosas. No siempre se nombran, pero están ahí:</p>

          <p>
            <strong>La carrera profesional.</strong> Quizás dejaste de trabajar, quizás redujiste tus horas, quizás sigues trabajando pero dividida entre dos mundos. El ritmo profesional cambia, las oportunidades se ven diferentes, y a veces hay que elegir entre crecimiento laboral y presencia con los hijos.
          </p>

          <p>
            <strong>La independencia económica.</strong> Si dejaste de trabajar o redujiste tus ingresos, la relación con el dinero cambia. Depender económicamente de otra persona, aunque sea tu pareja, puede sentirse incómodo.
          </p>

          <p>
            <strong>El tiempo propio.</strong> El tiempo para ti, para hacer lo que quieras sin coordinar con nadie, se reduce drásticamente. A veces desaparece por completo. Y cuando aparece, muchas veces estás tan agotada que no sabes qué hacer con él.
          </p>

          <p>
            <strong>Las amistades.</strong> Las relaciones cambian cuando eres mamá. Algunas amistades se fortalecen, otras se distancian porque ya no comparten la misma etapa de vida. El tiempo para cultivar amistades se reduce.
          </p>

          <p>
            <strong>La relación de pareja.</strong> La dinámica con tu pareja se transforma por completo. Ya no son solo dos personas que se eligieron; ahora son padres juntos. La atención que antes era mutua ahora se divide. La intimidad, las conversaciones, los planes: todo se reorganiza alrededor de los hijos.
          </p>

          <p>
            <strong>El sueño, la energía, la calma.</strong> Cosas tan básicas como dormir suficiente o tener un momento de silencio se convierten en lujos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La culpa de sentir</h2>

          <p>
            Una de las cosas más difíciles de este duelo es la culpa que lo acompaña.
          </p>

          <p>
            Sentir cansancio extremo y pensar que no deberías quejarte porque tener hijos es un privilegio. Extrañar tu vida anterior y sentir que eso te hace mala madre. Necesitar tiempo sola y sentir que estás abandonando a tus hijos. Llorar de agotamiento y preguntarte qué está mal contigo.
          </p>

          <p>
            Esta culpa viene de un mandato cultural que dice que la maternidad debe ser pura felicidad y entrega total. Que una buena madre no se queja, no se cansa, no extraña su vida de antes. Que el amor por los hijos debe borrar cualquier otra necesidad.
          </p>

          <p>
            Pero eso no es realista. Puedes amar a tus hijos profundamente y también extrañar tu libertad. Puedes sentirte agradecida por tu familia y también agotada hasta los huesos. Puedes no cambiar esta vida por nada y aún así necesitar llorar a veces.
          </p>

          <p>Sentir no te hace mala madre. Te hace humana.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los cambios en la pareja</h2>

          <p>
            La llegada de los hijos transforma la relación de pareja de maneras que pocas personas anticipan.
          </p>

          <p>
            La atención que antes era para el otro ahora se divide. Las conversaciones giran alrededor de los niños. El tiempo juntos como pareja, sin hijos, se vuelve escaso. La intimidad física cambia, a veces drásticamente.
          </p>

          <p>
            También puede haber desbalances. Quizás una persona asume más peso que la otra en el cuidado de los hijos. Quizás hay resentimientos acumulados que no se expresan. Quizás la imagen que tenías de tu pareja como padre o madre no coincide con la realidad.
          </p>

          <p>
            Muchas parejas atraviesan crisis importantes en los primeros años de crianza. No porque el amor se haya acabado, sino porque la relación tiene que reinventarse y eso es difícil.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando crecen y empiezan a soltar tu mano</h2>

          <p>
            La maternidad temprana es intensa. Los primeros años son de entrega casi total, de noches sin dormir, de un niño que te necesita para todo.
          </p>

          <p>
            Pero los hijos crecen. Y eso también trae sus propios duelos.
          </p>

          <p>
            Empiezan a necesitarte menos. Pueden vestirse solos, comer solos, entretenerse solos. Tu presencia, que antes era indispensable, se vuelve menos central.
          </p>

          <p>
            Empiezan a tener su propia vida. Amigos, actividades, intereses que no te incluyen. Secretos que no te cuentan. Una intimidad propia que es sana pero que puede dolerte.
          </p>

          <p>
            Y aquí viene uno de los trabajos más difíciles de la maternidad: soltar. Confiar en las bases que les diste y dejarlos ser quienes ellos elijan ser, no quienes tú imaginaste que serían. Soltar las expectativas de qué carrera van a estudiar, con quién van a estar, cómo van a vivir. Aceptar que su camino es suyo, aunque no se parezca a lo que habías soñado para ellos.
          </p>

          <p>
            Cada etapa que dejan atrás es una pequeña despedida. El bebé que sostenías ya no existe. El niño que te pedía que lo acompañaras a todos lados ahora prefiere ir solo. Y aunque el adolescente o el adulto que tienes enfrente sea maravilloso, hay algo que se fue y no va a volver.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El nido vacío</h2>

          <p>
            Eventualmente, los hijos se van. A estudiar, a trabajar, a formar sus propias familias. La casa que estaba llena de ruido se queda en silencio.
          </p>

          <p>
            El síndrome del nido vacío es un duelo reconocido, pero eso no lo hace más fácil. Pasaste años organizando tu vida alrededor de tus hijos, y de pronto ese centro ya no está.
          </p>

          <p>
            Puede haber alivio, sí. Más tiempo, más libertad, menos responsabilidades cotidianas. Pero también puede haber una sensación profunda de vacío. De no saber quién eres ahora que ya no eres la mamá de tiempo completo. De tener que reinventarte otra vez.
          </p>

          <p>
            Algunas mujeres atraviesan esta etapa con entusiasmo, recuperando proyectos que habían dejado de lado. Otras se sienten perdidas, sin saber cómo llenar el espacio que dejaron los hijos. Muchas sienten ambas cosas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Reinventarte en cada etapa</h2>

          <p>
            La maternidad no es una sola cosa. Es una serie de etapas, cada una con sus propios desafíos y sus propias pérdidas.
          </p>

          <p>
            En cada transición hay una oportunidad de preguntarte quién eres ahora, qué quieres, qué necesitas. No para volver a ser quien eras antes, porque eso ya no es posible. Sino para construir una versión de ti que integre todo lo que has vivido.
          </p>

          <p>
            Esto puede incluir recuperar espacios propios, renegociar con tu pareja los acuerdos que ya no sirven, reconectar con tu cuerpo de formas que no sean solo funcionales, retomar proyectos profesionales o creativos que quedaron en pausa, y sobre todo, permitirte el duelo sin culpa ni vergüenza.
          </p>

          <p>
            Ser mamá es muchas cosas al mismo tiempo. Es amor y agotamiento. Es plenitud y pérdida. Es elegir a tus hijos una y otra vez y también extrañar la vida que tenías antes.
          </p>

          <p>
            Estos sentimientos no son contradictorios. Son humanos. Y nombrarlos no te hace peor madre. Te hace una persona real, que está atravesando una de las transformaciones más profundas que existen.
          </p>

          <p>
            Si sientes que necesitas espacio para procesar todo esto, para hablar de lo que no se habla, para darle lugar a tu propio duelo dentro de la maternidad, ese espacio existe.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda una sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            En ColorMe sé que la maternidad tiene luces y sombras. Aquí hay espacio para hablar de ambas.
          </p>
          <a
            href={siteConfig.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all"
          >
            Agenda tu sesión gratuita
          </a>
        </div>

        <RelatedArticles currentSlug="duelo-por-ser-mama" category="tanatologia" />
      </div>
    </article>
  )
}
