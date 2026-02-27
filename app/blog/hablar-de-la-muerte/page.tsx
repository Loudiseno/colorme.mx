'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloHablarDeLaMuerte() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Por qué nos incomoda hablar de la muerte
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/hablar-de-la-muerte.webp"
            alt="Hablar de la muerte, tabú de la muerte, miedo a morir, conversaciones sobre muerte."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Y por qué deberíamos empezar a hacerlo.
          </p>

          <p>
            Usamos eufemismos. Cambiamos de tema. Bajamos la voz. Miramos hacia otro lado.
          </p>

          <p>
            La muerte es quizás el único tema verdaderamente universal, el único destino que compartimos todos los seres humanos, y sin embargo actuamos como si nombrarla fuera peligroso.
          </p>

          <p>
            ¿Por qué nos cuesta tanto hablar de lo único que sabemos con certeza que va a pasar?
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El silencio que nos rodea</h2>

          <p>
            Observa cómo hablamos de la muerte. O más bien, cómo evitamos hacerlo.
          </p>

          <p>
            &quot;Se nos fue.&quot; &quot;Ya no está con nosotros.&quot; &quot;Pasó a mejor vida.&quot; &quot;Descansa en paz.&quot; &quot;Lo perdimos.&quot;
          </p>

          <p>
            Rara vez decimos simplemente: murió.
          </p>

          <p>
            Estas frases no son malas en sí mismas. Pero revelan algo importante: nos resulta difícil nombrar la muerte directamente. Como si las palabras pudieran invocar lo que tememos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cuándo se convirtió la muerte en tabú?</h2>

          <p>
            La muerte no siempre fue un tema prohibido.
          </p>

          <p>
            El historiador Philippe Ariès documentó cómo la relación occidental con la muerte cambió drásticamente en los últimos dos siglos. Antes, la muerte era parte visible de la vida cotidiana. Las personas morían en casa, rodeadas de familia. Los niños presenciaban el proceso. Los cuerpos se velaban en el hogar. La comunidad participaba en los rituales.
          </p>

          <p>
            A partir del siglo XX, la muerte se trasladó del hogar al hospital. Se convirtió en un evento médico más que en un evento humano. Los moribundos fueron aislados. Los niños fueron &quot;protegidos&quot; de la realidad. Los rituales se acortaron.
          </p>

          <p>
            Ariès llamó a este fenómeno &quot;la muerte prohibida&quot; o &quot;la muerte invertida&quot;: pasamos de una aceptación natural a un rechazo cultural.
          </p>

          <p>
            La medicina moderna también contribuyó a este cambio. Con los avances en salud, comenzamos a ver la muerte como un fracaso, como algo que debería poder evitarse. Esta ilusión de control hace que enfrentar la realidad de la mortalidad sea aún más difícil.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué evitamos hablar de ella</h2>

          <p>
            El silencio sobre la muerte tiene raíces profundas.
          </p>

          <p>
            <strong>Nos causa dolor.</strong> Pensar en la muerte, propia o de quienes amamos, activa emociones difíciles. Tristeza, miedo, ansiedad. Es natural querer evitar lo que duele.
          </p>

          <p>
            <strong>No queremos entristecer a otros.</strong> Tememos que hablar de la muerte arruine el momento, incomode a quienes nos rodean, traiga pesimismo a la conversación.
          </p>

          <p>
            <strong>Miedo a lo desconocido.</strong> La muerte es el misterio más grande. No sabemos qué hay después, si hay algo. Esa incertidumbre puede ser aterradora.
          </p>

          <p>
            <strong>La ilusión de que evitarla nos protege.</strong> Si no hablamos de ella, quizás no sucederá. Si no pensamos en ella, quizás se mantendrá lejos. Por supuesto, esto no funciona. Pero el pensamiento mágico es difícil de abandonar.
          </p>

          <p>
            <strong>Falta de práctica.</strong> Simplemente no sabemos cómo hablar de la muerte. Nadie nos enseñó. No tenemos el vocabulario ni los espacios para hacerlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las consecuencias del silencio</h2>

          <p>
            Evitar hablar de la muerte tiene costos reales.
          </p>

          <p>
            <strong>Llegamos al momento sin preparación.</strong> Cuando la muerte toca nuestra puerta, nos encuentra desarmados. No hemos pensado en lo que queremos, no hemos hablado con nuestros seres queridos, no tenemos herramientas emocionales para enfrentarla.
          </p>

          <p>
            <strong>No sabemos acompañar a otros.</strong> Cuando alguien cercano está muriendo o ha perdido a alguien, no sabemos qué decir. Nuestra incomodidad puede hacer que evitemos a quienes más necesitan compañía.
          </p>

          <p>
            <strong>El duelo se vuelve más difícil.</strong> Según investigaciones de la Asociación Americana de Psicología, las personas que han tenido conversaciones abiertas sobre la muerte antes de una pérdida tienden a tener procesos de duelo más saludables.
          </p>

          <p>
            <strong>Los niños crecen sin herramientas.</strong> Al &quot;proteger&quot; a los niños de la realidad de la muerte, les negamos la oportunidad de desarrollar comprensión y resiliencia. Cuando inevitablemente la enfrenten, estarán más desprotegidos que si hubieran crecido con conversaciones honestas.
          </p>

          <p>
            <strong>Se toman decisiones sin información.</strong> Testamentos no escritos, voluntades anticipadas inexistentes, deseos no comunicados. El silencio sobre la muerte deja a las familias tomando decisiones difíciles sin saber qué habría querido la persona.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Beneficios de hablar de la muerte</h2>

          <p>
            Romper el silencio tiene efectos positivos documentados.
          </p>

          <p>
            <strong>Vivir con más intensidad.</strong> La conciencia de la mortalidad puede hacer que valoremos más el tiempo presente. Investigaciones del psicólogo Irvin Yalom han mostrado que confrontar la realidad de la muerte puede reducir la ansiedad existencial y aumentar la gratitud.
          </p>

          <p>
            <strong>Tomar decisiones importantes a tiempo.</strong> Conversaciones sobre el final de la vida permiten expresar preferencias sobre cuidados médicos, rituales funerarios, distribución de bienes. Esto reduce la carga para quienes quedan.
          </p>

          <p>
            <strong>Despedirse adecuadamente.</strong> Cuando la muerte está cerca, quienes han podido hablar abiertamente tienen más oportunidad de cerrar ciclos, decir lo que necesitan decir, pedir perdón y perdonar.
          </p>

          <p>
            <strong>Acompañar mejor a quien está muriendo.</strong> Estar presente con alguien que muere requiere haber hecho cierta paz con la propia mortalidad. Sin eso, la incomodidad puede hacer que abandonemos a quien más nos necesita.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo empezar a hablar de la muerte</h2>

          <p>
            No es necesario tener una conversación perfecta. Es necesario empezar.
          </p>

          <p>
            <strong>Con uno mismo.</strong> Reflexiona sobre tus propios miedos y creencias. ¿Qué te asusta de la muerte? ¿Qué desearías que sucediera al final de tu vida? ¿Qué quisieras que supieran quienes te sobrevivan?
          </p>

          <p>
            <strong>Con la familia.</strong> Estas conversaciones pueden surgir naturalmente después de una pérdida cercana, una película, una noticia. No tienen que ser solemnes. Pueden ser breves. Lo importante es abrir la puerta.
          </p>

          <p>
            <strong>Con los niños.</strong> Adapta el lenguaje a su edad, pero no evites el tema. Los niños hacen preguntas sobre la muerte naturalmente. Responderlas con honestidad, sin dramatismo y sin exceso de detalle, les ayuda a integrar esta realidad.
          </p>

          <p>
            <strong>Sobre decisiones prácticas.</strong> Testamento, voluntades anticipadas, preferencias sobre el final de la vida. Estos documentos facilitan momentos muy difíciles para quienes quedan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un cambio necesario</h2>

          <p>
            La muerte no va a desaparecer porque dejemos de hablar de ella.
          </p>

          <p>
            Pero nuestra relación con ella puede cambiar. Podemos pasar del silencio incómodo a una aceptación más serena. No significa que deje de doler. Significa que dejamos de cargar el peso adicional del tabú.
          </p>

          <p>
            Hablar de la muerte es, paradójicamente, hablar de la vida. De lo que valoramos, de quienes amamos, de cómo queremos vivir el tiempo que tenemos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            La muerte es parte de la vida. La única parte que está garantizada.
          </p>

          <p>
            Ignorarla no la previene. Nombrarla no la invoca. Hablar de ella nos prepara mejor para cuando llegue, sea a nuestra puerta o a la de alguien que amamos.
          </p>

          <p>
            El silencio no protege. La conversación sí puede.
          </p>

          <p className="italic text-black/60 mt-8">
            Hablar de la muerte no es mórbido. Es profundamente humano.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompañamiento para atravesar conversaciones difíciles sobre la muerte, estoy aquí para ti.
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
