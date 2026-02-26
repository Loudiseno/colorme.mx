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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGIA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Por que nos incomoda hablar de la muerte
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/hablar-de-la-muerte.webp"
            alt="Hablar de la muerte, tabu de la muerte, miedo a morir, conversaciones sobre muerte."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Y por que deberiamos empezar a hacerlo.
          </p>

          <p>
            Usamos eufemismos. Cambiamos de tema. Bajamos la voz. Miramos hacia otro lado.
          </p>

          <p>
            La muerte es quizas el unico tema verdaderamente universal, el unico destino que compartimos todos los seres humanos, y sin embargo actuamos como si nombrarla fuera peligroso.
          </p>

          <p>
            Por que nos cuesta tanto hablar de lo unico que sabemos con certeza que va a pasar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El silencio que nos rodea</h2>

          <p>
            Observa como hablamos de la muerte. O mas bien, como evitamos hacerlo.
          </p>

          <p>
            &quot;Se nos fue.&quot; &quot;Ya no esta con nosotros.&quot; &quot;Paso a mejor vida.&quot; &quot;Descansa en paz.&quot; &quot;Lo perdimos.&quot;
          </p>

          <p>
            Rara vez decimos simplemente: murio.
          </p>

          <p>
            Estas frases no son malas en si mismas. Pero revelan algo importante: nos resulta dificil nombrar la muerte directamente. Como si las palabras pudieran invocar lo que tememos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando se convirtio la muerte en tabu</h2>

          <p>
            La muerte no siempre fue un tema prohibido.
          </p>

          <p>
            El historiador Philippe Aries documento como la relacion occidental con la muerte cambio drasticamente en los ultimos dos siglos. Antes, la muerte era parte visible de la vida cotidiana. Las personas morian en casa, rodeadas de familia. Los ninos presenciaban el proceso. Los cuerpos se velaban en el hogar. La comunidad participaba en los rituales.
          </p>

          <p>
            A partir del siglo XX, la muerte se traslado del hogar al hospital. Se convirtio en un evento medico mas que en un evento humano. Los moribundos fueron aislados. Los ninos fueron &quot;protegidos&quot; de la realidad. Los rituales se acortaron.
          </p>

          <p>
            Aries llamo a este fenomeno &quot;la muerte prohibida&quot; o &quot;la muerte invertida&quot;: pasamos de una aceptacion natural a un rechazo cultural.
          </p>

          <p>
            La medicina moderna tambien contribuyo a este cambio. Con los avances en salud, comenzamos a ver la muerte como un fracaso, como algo que deberia poder evitarse. Esta ilusion de control hace que enfrentar la realidad de la mortalidad sea aun mas dificil.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por que evitamos hablar de ella</h2>

          <p>
            El silencio sobre la muerte tiene raices profundas.
          </p>

          <p>
            <strong>Nos causa dolor.</strong> Pensar en la muerte, propia o de quienes amamos, activa emociones dificiles. Tristeza, miedo, ansiedad. Es natural querer evitar lo que duele.
          </p>

          <p>
            <strong>No queremos entristecer a otros.</strong> Tememos que hablar de la muerte arruine el momento, incomode a quienes nos rodean, traiga pesimismo a la conversacion.
          </p>

          <p>
            <strong>Miedo a lo desconocido.</strong> La muerte es el misterio mas grande. No sabemos que hay despues, si hay algo. Esa incertidumbre puede ser aterradora.
          </p>

          <p>
            <strong>La ilusion de que evitarla nos protege.</strong> Si no hablamos de ella, quizas no sucedera. Si no pensamos en ella, quizas se mantendra lejos. Por supuesto, esto no funciona. Pero el pensamiento magico es dificil de abandonar.
          </p>

          <p>
            <strong>Falta de practica.</strong> Simplemente no sabemos como hablar de la muerte. Nadie nos enseno. No tenemos el vocabulario ni los espacios para hacerlo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las consecuencias del silencio</h2>

          <p>
            Evitar hablar de la muerte tiene costos reales.
          </p>

          <p>
            <strong>Llegamos al momento sin preparacion.</strong> Cuando la muerte toca nuestra puerta, nos encuentra desarmados. No hemos pensado en lo que queremos, no hemos hablado con nuestros seres queridos, no tenemos herramientas emocionales para enfrentarla.
          </p>

          <p>
            <strong>No sabemos acompanar a otros.</strong> Cuando alguien cercano esta muriendo o ha perdido a alguien, no sabemos que decir. Nuestra incomodidad puede hacer que evitemos a quienes mas necesitan compania.
          </p>

          <p>
            <strong>El duelo se vuelve mas dificil.</strong> Segun investigaciones de la Asociacion Americana de Psicologia, las personas que han tenido conversaciones abiertas sobre la muerte antes de una perdida tienden a tener procesos de duelo mas saludables.
          </p>

          <p>
            <strong>Los ninos crecen sin herramientas.</strong> Al &quot;proteger&quot; a los ninos de la realidad de la muerte, les negamos la oportunidad de desarrollar comprension y resiliencia. Cuando inevitablemente la enfrenten, estaran mas desprotegidos que si hubieran crecido con conversaciones honestas.
          </p>

          <p>
            <strong>Se toman decisiones sin informacion.</strong> Testamentos no escritos, voluntades anticipadas inexistentes, deseos no comunicados. El silencio sobre la muerte deja a las familias tomando decisiones dificiles sin saber que habria querido la persona.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Beneficios de hablar de la muerte</h2>

          <p>
            Romper el silencio tiene efectos positivos documentados.
          </p>

          <p>
            <strong>Vivir con mas intensidad.</strong> La conciencia de la mortalidad puede hacer que valoremos mas el tiempo presente. Investigaciones del psicologo Irvin Yalom han mostrado que confrontar la realidad de la muerte puede reducir la ansiedad existencial y aumentar la gratitud.
          </p>

          <p>
            <strong>Tomar decisiones importantes a tiempo.</strong> Conversaciones sobre el final de la vida permiten expresar preferencias sobre cuidados medicos, rituales funerarios, distribucion de bienes. Esto reduce la carga para quienes quedan.
          </p>

          <p>
            <strong>Despedirse adecuadamente.</strong> Cuando la muerte esta cerca, quienes han podido hablar abiertamente tienen mas oportunidad de cerrar ciclos, decir lo que necesitan decir, pedir perdon y perdonar.
          </p>

          <p>
            <strong>Acompanar mejor a quien esta muriendo.</strong> Estar presente con alguien que muere requiere haber hecho cierta paz con la propia mortalidad. Sin eso, la incomodidad puede hacer que abandonemos a quien mas nos necesita.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como empezar a hablar de la muerte</h2>

          <p>
            No es necesario tener una conversacion perfecta. Es necesario empezar.
          </p>

          <p>
            <strong>Con uno mismo.</strong> Reflexiona sobre tus propios miedos y creencias. Que te asusta de la muerte. Que desearias que sucediera al final de tu vida. Que quisieras que supieran quienes te sobrevivan.
          </p>

          <p>
            <strong>Con la familia.</strong> Estas conversaciones pueden surgir naturalmente despues de una perdida cercana, una pelicula, una noticia. No tienen que ser solemnes. Pueden ser breves. Lo importante es abrir la puerta.
          </p>

          <p>
            <strong>Con los ninos.</strong> Adapta el lenguaje a su edad, pero no evites el tema. Los ninos hacen preguntas sobre la muerte naturalmente. Responderlas con honestidad, sin dramatismo y sin exceso de detalle, les ayuda a integrar esta realidad.
          </p>

          <p>
            <strong>Sobre decisiones practicas.</strong> Testamento, voluntades anticipadas, preferencias sobre el final de la vida. Estos documentos facilitan momentos muy dificiles para quienes quedan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Un cambio necesario</h2>

          <p>
            La muerte no va a desaparecer porque dejemos de hablar de ella.
          </p>

          <p>
            Pero nuestra relacion con ella puede cambiar. Podemos pasar del silencio incomodo a una aceptacion mas serena. No significa que deje de doler. Significa que dejamos de cargar el peso adicional del tabu.
          </p>

          <p>
            Hablar de la muerte es, paradojicamente, hablar de la vida. De lo que valoramos, de quienes amamos, de como queremos vivir el tiempo que tenemos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            La muerte es parte de la vida. La unica parte que esta garantizada.
          </p>

          <p>
            Ignorarla no la previene. Nombrarla no la invoca. Hablar de ella nos prepara mejor para cuando llegue, sea a nuestra puerta o a la de alguien que amamos.
          </p>

          <p>
            El silencio no protege. La conversacion si puede.
          </p>

          <p className="italic text-black/60 mt-8">
            Hablar de la muerte no es morboso. Es profundamente humano.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas acompanamiento para atravesar conversaciones dificiles sobre la muerte, estoy aqui para ti.
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
