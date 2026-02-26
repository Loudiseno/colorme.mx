'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ExplicarMuerteNinoPage() {
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
            Como hablar con ninos sobre la muerte sin mentir ni traumatizar
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/explicar-muerte-nino.webp"
            alt="Como hablar de la muerte con ninos, duelo infantil, explicar muerte a ninos, acompanamiento en duelo infantil."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Recomendaciones para padres y cuidadores que enfrentan la conversacion mas dificil.
          </p>

          <p>
            Murio el abuelo. O la mascota. O un companero de clase. Y ahora tienes que explicarle a un nino algo que ni siquiera tu entiendes completamente.
          </p>

          <p>
            El impulso natural es proteger. Suavizar. Evitar el tema. Pero los ninos perciben mas de lo que creemos. Y el silencio puede ser mas danino que la verdad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que NO debes decir</h2>

          <p>
            Antes de hablar sobre que decir, es importante saber que evitar.
          </p>

          <ul>
            <li><strong>"Esta dormido."</strong> Este eufemismo puede generar terror al sueno. Si morir es como dormir, que pasa si me duermo?</li>
            <li><strong>"Se fue de viaje."</strong> Genera esperanza de que regresara y enojo cuando no lo hace. Tambien puede crear ansiedad cada vez que alguien viaje.</li>
            <li><strong>"Dios se lo llevo porque era muy bueno."</strong> Puede generar miedo a ser bueno, o enojo con Dios.</li>
            <li><strong>"Esta en un lugar mejor."</strong> Para un nino pequeno, esto no tiene sentido. Si el lugar es mejor, por que no puedo ir?</li>
            <li><strong>"Lo perdimos."</strong> Los ninos son literales. Pueden pensar que la persona esta perdida y hay que buscarla.</li>
          </ul>

          <p>
            Los eufemismos, aunque bien intencionados, generan confusion y ansiedad a largo plazo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Primero entiende que entiende el nino</h2>

          <p>
            Antes de explicar la muerte, es importante saber que entiende el nino por muerte.
          </p>

          <p>
            Los ninos pueden tener ideas confusas sobre la muerte, influenciadas por cuentos, peliculas o dibujos animados donde los personajes "mueren" y luego vuelven a aparecer. Preguntale que sabe o que piensa sobre la muerte antes de explicar. Esto te dara informacion sobre que mitos o confusiones necesitas aclarar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Que decir en su lugar</h2>

          <p>
            Usa palabras claras y simples. La palabra "muerte" y "murio" son mas seguras que los eufemismos.
          </p>

          <ul>
            <li>Explica de manera concreta: "Cuando alguien muere, su cuerpo deja de funcionar. Ya no respira, no come, no siente. Y no va a volver."</li>
            <li>Valida las emociones: "Cuando alguien muere, es normal sentirse triste, enojado o asustado. Yo tambien me siento asi."</li>
            <li>Abre espacio para preguntas: "Puedes preguntarme lo que quieras. Si no se la respuesta, te lo dire."</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Recomendaciones por edades</h2>

          <p>
            Los ninos entienden la muerte de manera diferente segun su edad.
          </p>

          <h3 className="text-2xl text-black font-semibold mt-6 mb-3">De 3 a 5 anos</h3>

          <p>
            A esta edad, los ninos no comprenden que la muerte es permanente. Pueden preguntar cuando va a volver el abuelo, o si pueden llamarlo por telefono.
          </p>

          <ul>
            <li>Usar explicaciones muy concretas. El cuerpo dejo de funcionar y no puede volver a funcionar.</li>
            <li>Repetir la informacion. Necesitaran escucharla varias veces para procesarla.</li>
            <li>Permitir que sigan jugando normalmente despues de la noticia. Esto no significa que no les importa. Es su forma de procesar.</li>
            <li>Mantener rutinas. La estabilidad es especialmente importante a esta edad.</li>
          </ul>

          <h3 className="text-2xl text-black font-semibold mt-6 mb-3">De 6 a 9 anos</h3>

          <p>
            Comienzan a entender que la muerte es permanente, pero pueden tener preguntas muy concretas y a veces desconcertantes.
          </p>

          <ul>
            <li>Responder sus preguntas con honestidad. "Que pasa con el cuerpo?" es una pregunta normal.</li>
            <li>Validar sus emociones. Pueden sentir culpa pensando que algo que dijeron o hicieron causo la muerte. Aclara que nada de lo que ellos hicieron tuvo que ver.</li>
            <li>Permitir que participen en rituales si lo desean. Respetar su decision si prefieren no ir al funeral.</li>
          </ul>

          <h3 className="text-2xl text-black font-semibold mt-6 mb-3">De 10 a 12 anos</h3>

          <p>
            Entienden la muerte de manera similar a los adultos. Pueden tener preguntas filosoficas o existenciales.
          </p>

          <ul>
            <li>Tener conversaciones mas profundas sobre el sentido de la vida y la injusticia de lo ocurrido.</li>
            <li>Respetar si no quieren hablar. Hazles saber que estas disponible cuando quieran.</li>
            <li>Estar atento a cambios de comportamiento: problemas en la escuela, aislamiento o irritabilidad.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como responder preguntas dificiles</h2>

          <p>
            Los ninos hacen preguntas que pueden dejarte sin palabras.
          </p>

          <ul>
            <li><strong>"Tu tambien te vas a morir?"</strong> Se honesto pero tranquilizador: "Si, algun dia todos morimos. Pero planeo estar aqui por mucho tiempo para cuidarte."</li>
            <li><strong>"Que pasa despues de morir?"</strong> Esta bien decir: "Nadie sabe exactamente que pasa. Lo que si se es que el amor que sentimos por esa persona sigue con nosotros."</li>
            <li><strong>"Puedo morir yo?"</strong> "Casi todas las personas viven hasta ser muy viejas. Tu eres joven y saludable. Mi trabajo es cuidarte y mantenerte seguro."</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Senales de que un nino necesita apoyo profesional</h2>

          <p>
            El duelo infantil es normal y la mayoria de los ninos lo atraviesan sin complicaciones. Pero hay senales que indican que se necesita ayuda adicional.
          </p>

          <ul>
            <li>Regresiones prolongadas: volver a mojar la cama, chuparse el dedo durante semanas.</li>
            <li>Problemas severos de sueno o pesadillas constantes.</li>
            <li>Negarse a ir a la escuela o caida significativa del rendimiento academico.</li>
            <li>Aislamiento extremo o perdida de interes en actividades que antes disfrutaba.</li>
            <li>Hablar de querer morirse para estar con la persona fallecida.</li>
            <li>Sintomas fisicos persistentes sin causa medica.</li>
          </ul>

          <p>
            Si observas varias de estas senales durante mas de unas semanas, considera buscar un psicologo especializado en duelo infantil.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como cuidarte mientras acompanas</h2>

          <p>
            No puedes acompanar el duelo de un nino si el tuyo te esta desbordando.
          </p>

          <p>
            Esta bien llorar frente a tus hijos. Les ensena que las emociones son normales y que los adultos tambien sienten tristeza. Pero si sientes que no puedes sostenerlos porque tu propio dolor es demasiado intenso, busca apoyo. Los ninos necesitan ver que los adultos pueden sentir dolor y seguir funcionando. Eso les da seguridad de que ellos tambien podran.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Libros que pueden ayudar</h2>

          <p>
            Los cuentos pueden ser herramientas poderosas para procesar el duelo.
          </p>

          <ul>
            <li><strong>"El pato y la muerte"</strong> de Wolf Erlbruch. Para ninos de 4 anos en adelante. Aborda la muerte con naturalidad y ternura.</li>
            <li><strong>"Jack y la muerte"</strong> de Tim Bowley. Para ninos de 6 anos en adelante. Explora que pasaria si intentaramos evitar la muerte.</li>
            <li><strong>"Vacio"</strong> de Anna Llenas. Para ninos de 4 anos en adelante. Sobre el vacio que deja la perdida y como aprender a vivir con el.</li>
            <li><strong>"Para siempre"</strong> de Camino Garcia. Para ninos de 3 anos en adelante. Sobre como el amor permanece despues de la muerte.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            Hablar con ninos sobre la muerte no es facil. No existe un libreto perfecto ni palabras magicas que quiten el dolor.
          </p>

          <p>
            Pero la verdad, dicha con amor, es menos danina que el silencio o la mentira. Los ninos pueden manejar mas de lo que creemos cuando tienen adultos que los acompanan con honestidad y presencia.
          </p>

          <p>
            No tienes que tener todas las respuestas. Solo tienes que estar disponible, ser honesto, y dejarles saber que no estan solos.
          </p>

          <p className="italic text-black/60 mt-8">
            Los ninos no necesitan que los protejas de la verdad. Necesitan que los acompanes a atravesarla.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si necesitas apoyo para hablar con tus hijos sobre una perdida, estoy aqui para acompanarte.
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
