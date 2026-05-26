'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DuelosInvisiblesDesautorizadosPage() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Duelos invisibles: las pérdidas que nadie reconoce pero que duelen igual
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/hombre-en-duelo.webp"
            alt="Duelos invisibles y pérdidas desautorizadas"
            width={300}
            height={200}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Perdiste algo importante. Lo sientes en el cuerpo, en el ánimo, en esa tristeza que aparece sin aviso. Pero cuando intentas hablar de ello, la respuesta es un silencio incómodo, un cambio de tema, o peor: una frase que minimiza lo que sientes.
          </p>

          <p className="italic text-black/60">
            "Pero si era solo un perro."<br />
            "Ya tendrás otro trabajo."<br />
            "Al menos no llegaste a conocerlo."<br />
            "Deberías estar feliz, tienes hijos sanos."
          </p>

          <p>
            Y entonces guardas el dolor. Lo escondes porque aparentemente no es suficiente, no es válido, no merece el espacio que ocupa dentro de ti. Sigues adelante como si nada, mientras por dentro algo sigue roto.
          </p>

          <p>
            Eso es un duelo invisible. Una pérdida real que el mundo no reconoce como tal.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué hace que un duelo sea invisible</h2>

          <p>
            El concepto de duelo desautorizado fue desarrollado por el psicólogo Kenneth Doka en los años ochenta. Se refiere a aquellas pérdidas que la persona experimenta pero que no son abiertamente reconocidas, socialmente validadas o públicamente expresadas.
          </p>

          <p>
            En otras palabras: dueles, pero no tienes permiso para hacerlo.
          </p>

          <p>
            No hay funeral. No hay flores. No hay tarjetas de condolencia. No hay días de descanso en el trabajo. No hay un ritual que marque lo que pasó. La sociedad no tiene un protocolo para tu pérdida, entonces actúa como si no existiera.
          </p>

          <p>Pero existe. Y duele.</p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué la sociedad no valida ciertas pérdidas</h2>

          <p>
            <strong>La pérdida no involucra una muerte.</strong> Tendemos a asociar el duelo exclusivamente con la muerte de personas. Pero se puede perder mucho más: salud, relaciones, etapas, versiones de uno mismo. Estas pérdidas son reales, pero como no hay un cuerpo, no hay funeral, la sociedad no sabe cómo responder.
          </p>

          <p>
            <strong>La relación no se considera significativa.</strong> Cuando muere una mascota, cuando termina una amistad, cuando se pierde un embarazo temprano, la relación puede ser minimizada por otros. La profundidad del vínculo que tú sentías no es visible para los demás.
          </p>

          <p>
            <strong>La pérdida es ambigua.</strong> El deterioro cognitivo de un padre, una relación que se volvió irreconocible, la vida que imaginaste y que no sucedió. Estas pérdidas son difíciles de nombrar y por lo tanto difíciles de validar.
          </p>

          <p>
            <strong>La pérdida viene mezclada con algo positivo.</strong> La maternidad, una mudanza, un ascenso, una jubilación. Se supone que deberías estar feliz, entonces no hay espacio para reconocer lo que también perdiste en el proceso.
          </p>

          <p>
            <strong>La persona que perdió no se considera doliente legítimo.</strong> Ex parejas, amigos que no eran "tan cercanos", cuidadores que no eran familia. Hay personas cuyo dolor no se reconoce porque su relación con lo perdido no encaja en categorías socialmente aceptadas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Ejemplos de duelos que rara vez se nombran</h2>

          <p>
            <strong>La muerte de una mascota.</strong> Para muchas personas, una mascota es familia. Cuando muere, el dolor puede ser devastador. Pero socialmente se espera que lo superes rápido, que no exageres, que recuerdes que "era un animal".
          </p>

          <p>
            <strong>La pérdida de un embarazo.</strong> Un aborto espontáneo, especialmente en las primeras semanas, muchas veces se vive en silencio. El duelo se atraviesa a escondidas, sin reconocimiento, a veces con la expectativa de "intentarlo de nuevo" como si eso borrara lo que pasó.
          </p>

          <p>
            <strong>Los duelos de la maternidad.</strong> La pérdida de identidad, de tiempo propio, de libertad, de carrera. Estos duelos coexisten con el amor por los hijos, pero nombrarlos puede parecer ingratitud.
          </p>

          <p>
            <strong>Perder un trabajo.</strong> Especialmente si era un trabajo que te definía, que te daba propósito, que estructuraba tu vida. Un despido puede sentirse como perder una parte de ti mismo.
          </p>

          <p>
            <strong>El fin de una amistad.</strong> No hay rituales para esto, no hay palabras de consuelo. Simplemente alguien que era importante ya no está, y se supone que no debería doler tanto.
          </p>

          <p>
            <strong>El duelo migratorio.</strong> Dejar tu país, tu idioma, tu cultura, tu red de afectos. Se espera que estés agradecido por la oportunidad, no que llores por lo que dejaste atrás.
          </p>

          <p>
            <strong>La pérdida de la salud.</strong> Un diagnóstico que cambia todo. Un cuerpo que ya no responde como antes. Una vida que tiene que reorganizarse alrededor de limitaciones nuevas.
          </p>

          <p>
            <strong>El nido vacío.</strong> Cuando los hijos se van y la casa queda en silencio. Se supone que es lo natural, lo esperado, lo sano. Pero también es una pérdida de rol, de propósito, de compañía cotidiana.
          </p>

          <p>
            <strong>La jubilación.</strong> Dejar de trabajar después de décadas puede ser la pérdida de estructura, de identidad profesional, de un lugar en el mundo.
          </p>

          <p>
            <strong>La pérdida de un sueño.</strong> El negocio que no funcionó. La carrera que no despegó. El hijo que no llegó. La vida que imaginaste y que no va a suceder.
          </p>

          <p>
            <strong>El divorcio o la separación.</strong> No solo se pierde una pareja: se pierde una vida compartida, planes, rutinas, a veces amistades, a veces la convivencia diaria con los hijos.
          </p>

          <p>
            <strong>Cuando alguien cambia.</strong> Un padre con demencia que ya no te reconoce. Un hijo que tomó un camino que no entiendes. La persona sigue ahí, pero quien conocías ya no existe.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El costo de no poder expresar el duelo</h2>

          <p>
            Cuando un duelo no tiene espacio para expresarse, no desaparece. Se guarda. Y el dolor guardado encuentra otras formas de manifestarse.
          </p>

          <p>
            Puede aparecer como irritabilidad constante, como agotamiento que no se explica, como dificultad para conectar con otros. Puede aparecer como ansiedad, como insomnio, como síntomas físicos sin causa médica clara. Puede aparecer años después, activado por algo aparentemente pequeño que de pronto abre la compuerta de todo lo que no se procesó.
          </p>

          <p>
            El duelo necesita expresión. Necesita ser nombrado, sentido, acompañado. Cuando eso no sucede, el cuerpo y la mente pagan el precio.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Darte permiso</h2>

          <p>
            Si algo en este texto resonó contigo, quiero que sepas algo: tu pérdida es real.
          </p>

          <p>
            No importa que otros no la entiendan. No importa que no haya flores ni funeral. No importa que la sociedad no tenga un protocolo para lo que estás viviendo. Perdiste algo que importaba, y tienes derecho a sentir el dolor de esa pérdida.
          </p>

          <p>
            No necesitas justificar tu duelo ante nadie. No necesitas comparar tu pérdida con otras para decidir si merece espacio. No necesitas esperar a que alguien te dé permiso para sentir.
          </p>

          <p>El permiso te lo das tú.</p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda una sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            En ColorMe hay espacio para los duelos que el mundo no reconoce. Para las pérdidas que nadie acompaña. Aquí tienen lugar.
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

        <RelatedArticles currentSlug="duelos-invisibles-desautorizados" category="tanatologia" />
      </div>
    </article>
  )
}
