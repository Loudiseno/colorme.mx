'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DueloPorTuCuerpoPage() {
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
            Duelo por tu cuerpo: cuando pierdes una versión de ti que no va a volver
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo por tu cuerpo.jpeg" alt="Duelo por tu cuerpo" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El cuerpo que ya no es</h2>

          <p className="text-xl leading-relaxed">
            Hay un duelo del que casi nadie habla: el duelo por tu propio cuerpo. No hablo de la muerte. Hablo de cuando tu cuerpo cambia de una forma que no puedes revertir. Cuando pierdes una capacidad que tenías. Cuando el cuerpo que conocías deja de existir y tienes que aprender a vivir en uno diferente.
          </p>

          <p>
            Este duelo puede venir de muchas formas: una enfermedad, un accidente, una cirugía, el envejecimiento, un cambio hormonal. El detonante varía, pero la experiencia tiene algo en común: el cuerpo que tenías ya no existe, y con él se fue una parte de tu identidad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las muchas formas de perder el cuerpo que tenías</h2>

          <p>
            No todas las pérdidas corporales son iguales, pero todas implican un duelo:
          </p>

          <p>
            <strong>La pérdida de una función.</strong> Dejar de poder caminar, de ver, de escuchar, de usar una mano. Perder la capacidad de hacer algo que antes hacías sin pensar.
          </p>

          <p>
            <strong>La pérdida de un órgano o una parte del cuerpo.</strong> Una mastectomía, una amputación, la extracción de un órgano. La ausencia de algo que antes estaba ahí.
          </p>

          <p>
            <strong>La pérdida de la fertilidad.</strong> Ya sea por menopausia, por una cirugía, por tratamientos médicos. El cuerpo ya no puede hacer algo que antes podía, aunque no lo hubieras usado.
          </p>

          <p>
            <strong>La pérdida de la apariencia.</strong> Cicatrices que cambian cómo te ves, cambios de peso que no elegiste, efectos de tratamientos que alteran tu aspecto. El espejo te devuelve una imagen que no reconoces.
          </p>

          <p>
            <strong>La pérdida de la salud.</strong> Una enfermedad crónica que llegó para quedarse. El cuerpo que antes funcionaba sin que tuvieras que pensar en él ahora requiere atención constante.
          </p>

          <p>
            <strong>La pérdida de la juventud.</strong> El envejecimiento trae cambios que, aunque naturales, implican dejar ir una versión de ti que ya no va a volver.
          </p>

          <p>
            <strong>La pérdida de la energía.</strong> Ya no puedes hacer lo que antes hacías. El cuerpo se cansa más rápido, necesita más tiempo para recuperarse, tiene límites que antes no tenía.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué este duelo es tan difícil</h2>

          <p>
            El duelo por el cuerpo tiene características que lo hacen particularmente desafiante:
          </p>

          <p>
            <strong>Es un duelo constante.</strong> A diferencia de otras pérdidas donde puedes alejarte del recordatorio, tú vives en tu cuerpo. Cada día, cada momento, estás en contacto con lo que perdiste. No puedes tomar distancia.
          </p>

          <p>
            <strong>Es un duelo que afecta tu identidad.</strong> Gran parte de quiénes somos está ligada a lo que nuestro cuerpo puede hacer, a cómo se ve, a cómo se siente. Cuando el cuerpo cambia, la pregunta "¿quién soy ahora?" puede volverse muy presente.
          </p>

          <p>
            <strong>Es un duelo poco validado.</strong> La gente espera que "te adaptes", que "lo superes", que "veas el lado positivo". Hay poca paciencia para el dolor que implica perder una versión de ti mismo.
          </p>

          <p>
            <strong>Es un duelo que puede implicar dependencia.</strong> Cuando pierdes capacidades físicas, puedes necesitar ayuda para cosas que antes hacías solo. Esa pérdida de autonomía añade otra capa al duelo.
          </p>

          <p>
            <strong>Es un duelo que afecta todos los ámbitos de la vida.</strong> Tu trabajo, tus relaciones, tu tiempo libre, tu sexualidad, tu forma de moverte por el mundo. Todo puede verse afectado por cambios en el cuerpo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que se pierde cuando el cuerpo cambia</h2>

          <p>
            Cuando tu cuerpo cambia de forma significativa, no solo pierdes una función o una apariencia. Pierdes mucho más:
          </p>

          <p>
            <strong>Pierdes una forma de estar en el mundo.</strong> La manera en que caminabas, en que te sentabas, en que hacías las cosas. Esos patrones de movimiento que eran tan tuyos que ni siquiera los notabas.
          </p>

          <p>
            <strong>Pierdes actividades que disfrutabas.</strong> Deportes que practicabas, hobbies que tenías, formas de divertirte que dependían de un cuerpo que ya no tienes.
          </p>

          <p>
            <strong>Pierdes una imagen de ti mismo.</strong> La forma en que te veías al espejo, la ropa que te quedaba, la imagen mental que tenías de tu propio cuerpo.
          </p>

          <p>
            <strong>Pierdes planes y proyectos.</strong> Cosas que ibas a hacer "cuando tuviera tiempo", "el próximo año", "más adelante". Planes que asumían un cuerpo que ya no existe.
          </p>

          <p>
            <strong>Pierdes una sensación de control.</strong> La ilusión de que tu cuerpo te obedece, de que puedes confiar en él, de que va a responder cuando lo necesites.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La ambivalencia del duelo corporal</h2>

          <p>
            El duelo por el cuerpo a menudo viene acompañado de emociones contradictorias:
          </p>

          <p>
            Puedes estar agradecido de estar vivo y furioso por lo que perdiste. Puedes aceptar intelectualmente tu nueva realidad y rechazarla emocionalmente. Puedes sentir alivio porque un tratamiento terminó y dolor porque tu cuerpo quedó diferente. Puedes admirar tu propia fortaleza y sentirte completamente vulnerable.
          </p>

          <p>
            Estas contradicciones son normales. No tienes que elegir una sola emoción. Puedes sentir varias cosas al mismo tiempo, incluso cuando parecen incompatibles.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La relación con el espejo</h2>

          <p>
            Uno de los aspectos más difíciles puede ser la relación con el espejo. Ver tu cuerpo y no reconocerlo. Ver las marcas, los cambios, las ausencias.
          </p>

          <p>
            Algunas personas evitan los espejos. Otras se quedan mirando, tratando de procesar lo que ven. Otras oscilan entre ambas cosas.
          </p>

          <p>
            No hay forma correcta de manejar esto. Algunos encuentran útil mirarse gradualmente, en pequeñas dosis, hasta que la imagen nueva deja de ser tan impactante. Otros necesitan tiempo antes de poder mirarse sin dolor.
          </p>

          <p>
            Lo que sí ayuda es recordar que la imagen del espejo no define tu valor. Tu cuerpo cambió, pero tú sigues siendo tú. Eso suena simple, pero en los momentos difíciles puede ser fácil olvidarlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Reconstruir la relación con tu cuerpo</h2>

          <p>
            Atravesar el duelo por el cuerpo implica, eventualmente, construir una nueva relación con el cuerpo que tienes ahora. Esto no significa "superar" la pérdida ni olvidar el cuerpo que tenías. Significa aprender a vivir en este cuerpo, con todo lo que implica.
          </p>

          <p>
            <strong>Conocer tu cuerpo nuevo.</strong> Aprender qué puede hacer, qué necesita, cuáles son sus límites y sus posibilidades. Esta exploración lleva tiempo.
          </p>

          <p>
            <strong>Encontrar formas nuevas de disfrutar.</strong> Quizás no puedas hacer lo que hacías antes, pero puede haber otras cosas que sí puedas hacer y disfrutar. Descubrir esas posibilidades es parte del proceso.
          </p>

          <p>
            <strong>Ajustar tus expectativas.</strong> No para resignarte, sino para vivir en la realidad de lo que es, no en la fantasía de lo que era o de lo que debería ser.
          </p>

          <p>
            <strong>Cuidar el cuerpo que tienes.</strong> No como castigo ni como obligación, sino como forma de relacionarte con él. El cuidado puede ser una forma de hacer las paces con tu cuerpo.
          </p>

          <p>
            <strong>Integrar la pérdida en tu historia.</strong> El cuerpo que tenías antes fue parte de ti. El cuerpo que tienes ahora también es parte de ti. Tu historia incluye ambos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cierre</h2>

          <p>
            Perder una versión de tu cuerpo es un duelo real. No importa si otros no lo entienden, no importa si se supone que deberías "adaptarte", no importa si el cambio era "esperado" o "por tu bien".
          </p>

          <p>
            Tu cuerpo cambió. Perdiste algo. Y esa pérdida merece ser reconocida, sentida, atravesada.
          </p>

          <p>
            No hay prisa para hacer las paces con tu cuerpo nuevo. No hay forma correcta de hacerlo. Lo que sí hay es la posibilidad de aprender a vivir en este cuerpo, con todo lo que trae, incluyendo el dolor de lo que ya no está.
          </p>

          <p>
            Si estás atravesando este duelo y sientes que necesitas acompañamiento, no tienes que hacerlo solo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando un duelo por tu cuerpo?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas acompañamiento para procesar estos cambios, estoy aquí para escucharte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="duelo-por-tu-cuerpo" category="tanatologia" />
      </div>
    </article>
  )
}
