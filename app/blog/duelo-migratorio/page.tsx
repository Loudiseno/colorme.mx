'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DueloMigratorioPage() {
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
            Duelo migratorio: cuando dejas atrás mucho más que un lugar
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo migratorio .jpeg" alt="Duelo migratorio" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una pérdida que pocos reconocen</h2>

          <p className="text-xl leading-relaxed">
            Migrar es empezar de nuevo. Es oportunidad, es aventura, es a veces la única opción. Pero también es pérdida. Y esa pérdida muchas veces no se nombra, no se reconoce, no se permite.
          </p>

          <p>
            Porque cuando migras, se supone que debes estar agradecido. Que lograste algo. Que estás mejor. Y quizás todo eso sea cierto. Pero también es cierto que dejaste atrás un mundo entero. Y eso duele.
          </p>

          <p>
            El duelo migratorio es el proceso de elaborar todas las pérdidas que implica dejar tu lugar de origen. No es debilidad, no es ingratitud, no es que hayas tomado una mala decisión. Es la respuesta natural a una pérdida múltiple y profunda.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que se pierde al migrar</h2>

          <p>
            Cuando migras, no solo dejas un país. Dejas muchas cosas al mismo tiempo:
          </p>

          <p>
            <strong>La familia.</strong> Las personas que conoces de toda la vida. Los abrazos que ahora son videollamadas. Las celebraciones donde tu lugar queda vacío. Los momentos cotidianos que ya no compartirás: un café con tu mamá, una comida del domingo, ver crecer a tus sobrinos.
          </p>

          <p>
            <strong>Los amigos.</strong> Las personas con quienes construiste historia. Los que entienden tus referencias, tus chistes, tu forma de ser sin que tengas que explicarla. Esa red de afecto que tardaste años en tejer y que ahora está del otro lado del mundo.
          </p>

          <p>
            <strong>El idioma.</strong> Aunque hables la lengua del nuevo lugar, no es lo mismo. Hay matices que se pierden, expresiones que no existen, formas de decir las cosas que solo tienen sentido en tu idioma. Y el esfuerzo constante de comunicarte en otra lengua agota de maneras que nadie te advierte.
          </p>

          <p>
            <strong>La cultura.</strong> Los códigos que conocías sin pensar. Saber cómo funcionan las cosas, qué se espera de ti, cómo comportarte en cada situación. En el nuevo lugar, todo eso hay que aprenderlo desde cero. Y mientras tanto, te sientes fuera de lugar.
          </p>

          <p>
            <strong>Los olores, los sabores, los sonidos.</strong> El olor de la tierra mojada después de la lluvia. El sabor de la comida de tu abuela. El sonido de las voces en la calle. Cosas que no sabías que extrañarías hasta que dejaste de tenerlas.
          </p>

          <p>
            <strong>Tu identidad.</strong> En tu país eras alguien. Tenías una historia, un contexto, un lugar en el mundo. En el nuevo lugar eres "el extranjero". Tienes que construir de nuevo quién eres, explicarte constantemente, demostrar lo que en tu país era evidente.
          </p>

          <p>
            <strong>Tu estatus.</strong> Quizás tenías una profesión, un reconocimiento, una posición. En el nuevo lugar, tus títulos no valen igual, tu experiencia no cuenta, tienes que empezar desde abajo. Esa pérdida de estatus duele, aunque no se hable de ella.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo que no se permite</h2>

          <p>
            Una de las cosas más difíciles del duelo migratorio es que muchas veces no se permite. Ni los demás te lo permiten, ni tú mismo te lo permites.
          </p>

          <p>
            Los que se quedaron pueden no entender. Piensan que te fuiste porque quisiste, que estás viviendo una aventura, que deberías estar feliz. No ven el costo emocional de la migración. A veces incluso hay resentimiento: te fuiste, los dejaste.
          </p>

          <p>
            Los del nuevo lugar tampoco entienden. Para ellos eres un recién llegado más. No conocen tu historia, no saben lo que dejaste atrás, no dimensionan el esfuerzo que haces cada día para adaptarte.
          </p>

          <p>
            Y tú mismo puedes no permitírtelo. Porque elegiste migrar, porque hay personas que están peor, porque se supone que deberías estar agradecido. Minimizas tu dolor, lo guardas, sigues adelante como si nada.
          </p>

          <p>
            Pero el duelo no elaborado no desaparece. Se queda ahí, manifestándose de otras formas: irritabilidad, tristeza persistente, sensación de vacío, dificultad para conectar con el nuevo lugar, idealización del país de origen, o al revés, rechazo total de todo lo que dejaste.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las etapas del duelo migratorio</h2>

          <p>
            El duelo migratorio no es lineal. No tiene un orden fijo ni un tiempo determinado. Pero hay experiencias que son comunes:
          </p>

          <p>
            <strong>La euforia inicial.</strong> Al principio todo es nuevo, emocionante, lleno de posibilidades. Estás ocupado resolviendo cosas prácticas, descubriendo el lugar, adaptándote. No hay tiempo ni espacio para el duelo.
          </p>

          <p>
            <strong>El choque con la realidad.</strong> Pasada la novedad, empiezan a pesar las dificultades. Las barreras del idioma, la soledad, la burocracia, el frío o el calor extremo, las diferencias culturales. Lo que antes era aventura empieza a sentirse como obstáculo.
          </p>

          <p>
            <strong>La nostalgia.</strong> Empiezas a extrañar con intensidad. Idealizas lo que dejaste. Todo lo del país de origen parece mejor que lo que tienes ahora. Quieres volver, aunque a veces ni siquiera sepas a qué volverías.
          </p>

          <p>
            <strong>La negociación interna.</strong> Empiezas a preguntarte si tomaste la decisión correcta. Comparas constantemente. Piensas en volver, pero sabes que tampoco sería lo mismo. Ya no perteneces completamente a ningún lugar.
          </p>

          <p>
            <strong>La adaptación gradual.</strong> Poco a poco empiezas a encontrar tu lugar en el nuevo contexto. Haces amigos, entiendes mejor la cultura, te sientes menos extraño. No significa que dejes de extrañar, pero aprendes a vivir con eso.
          </p>

          <p>
            <strong>La integración.</strong> Llegas a un punto donde puedes valorar lo bueno de ambos mundos. Construyes una identidad que incorpora tu origen y tu presente. Ya no eres solo de allá ni solo de aquí. Eres de los dos lugares, o de ninguno, o de un lugar nuevo que creaste tú.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo que se repite</h2>

          <p>
            A diferencia de otros duelos, el duelo migratorio no se cierra. Se reactiva constantemente:
          </p>

          <p>
            Cada vez que hablas con tu familia y sientes la distancia. Cada vez que te pierdes una boda, un cumpleaños, un funeral. Cada vez que alguien del nuevo lugar no entiende algo que para ti es obvio. Cada vez que regresas de visita y te das cuenta de que ya no encajas como antes. Cada vez que vuelves al país donde vives ahora y sientes que tampoco perteneces del todo.
          </p>

          <p>
            Esta característica del duelo migratorio puede ser agotadora. Justo cuando crees que ya lo superaste, algo lo activa de nuevo. Y eso está bien. No significa que no hayas avanzado. Significa que la pérdida sigue siendo real.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Vivir entre dos mundos</h2>

          <p>
            Una de las experiencias más particulares del migrante es sentirse entre dos mundos. Ya no eres completamente de allá, pero tampoco eres completamente de aquí.
          </p>

          <p>
            Cuando vuelves a tu país de origen, notas que cambiaste. Hay referencias que ya no entiendes, expresiones que suenan raras, costumbres que ahora te parecen extrañas. La gente te ve diferente. Quizás ya no te sientes tan cómodo como antes.
          </p>

          <p>
            Cuando estás en el país donde vives, tampoco perteneces del todo. Hay cosas que nunca vas a entender desde adentro. Hay historias compartidas que no tienes. Hay formas de ser que no son las tuyas.
          </p>

          <p>
            Esta sensación de no pertenecer a ningún lugar puede ser dolorosa. Pero también puede convertirse en una riqueza: la capacidad de ver dos culturas desde adentro y desde afuera, de moverte entre mundos, de construir una identidad propia que no depende de un solo lugar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Atravesar el duelo migratorio</h2>

          <p>
            No hay fórmula para "superar" el duelo migratorio. Pero hay cosas que pueden ayudar a atravesarlo:
          </p>

          <p>
            <strong>Permitirte sentir.</strong> No minimices tu dolor. No te compares con otros. Lo que sientes es válido, aunque hayas elegido migrar, aunque otros estén peor, aunque tengas cosas buenas en tu vida.
          </p>

          <p>
            <strong>Nombrar las pérdidas.</strong> A veces ayuda hacer el ejercicio consciente de identificar todo lo que dejaste atrás. No para quedarte atrapado ahí, sino para reconocer la magnitud de lo que atravesaste.
          </p>

          <p>
            <strong>Buscar comunidad.</strong> Conectar con otras personas que migraron puede ser muy valioso. Ellos entienden sin que tengas que explicar. Compartir la experiencia ayuda a sentirte menos solo.
          </p>

          <p>
            <strong>Mantener conexión con tu origen.</strong> Llamar a tu familia, cocinar comida de tu país, celebrar tus tradiciones, hablar tu idioma. Estas cosas no te impiden integrarte al nuevo lugar, te ayudan a mantener tu identidad mientras lo haces.
          </p>

          <p>
            <strong>Construir vida en el nuevo lugar.</strong> Al mismo tiempo, darte permiso de echar raíces. Hacer amigos, conocer lugares, participar en la vida local. No se trata de reemplazar lo que dejaste, sino de construir algo nuevo.
          </p>

          <p>
            <strong>Buscar acompañamiento si lo necesitas.</strong> Si el duelo se siente demasiado pesado, si interfiere con tu vida, si sientes que no puedes solo, buscar ayuda profesional no es debilidad. Es cuidarte.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cierre</h2>

          <p>
            El duelo migratorio es real, es profundo, y muchas veces es invisible. Migrar implica pérdidas que van mucho más allá de dejar un lugar geográfico. Implica dejar personas, costumbres, certezas, una versión de ti mismo.
          </p>

          <p>
            Atravesar este duelo no significa dejar de extrañar ni olvidar de dónde vienes. Significa encontrar la forma de cargar tu historia contigo mientras construyes una vida nueva.
          </p>

          <p>
            Si migraste y sientes ese peso que no sabes cómo nombrar, si extrañas con una intensidad que a veces te sorprende, si te sientes entre dos mundos sin pertenecer a ninguno: lo que sientes tiene sentido. No estás exagerando. Estás atravesando un duelo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás viviendo un duelo migratorio?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas acompañamiento para procesar todas estas pérdidas, estoy aquí para escucharte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="duelo-migratorio" category="tanatologia" />
      </div>
    </article>
  )
}
