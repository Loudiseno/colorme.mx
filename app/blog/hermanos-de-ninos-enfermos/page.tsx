'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function HermanosDeNinosEnfermosPage() {
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
            Los hermanos que no enferman: el duelo invisible de los niños sanos
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/hermanos de ninos enfermos.jpeg" alt="Hermanos de niños enfermos" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los que quedan en segundo plano</h2>

          <p className="text-xl leading-relaxed">
            Cuando un niño enferma gravemente, toda la atención de la familia se concentra en él. Es comprensible, es necesario, es inevitable. Los padres corren entre hospitales, tratamientos, citas médicas. La energía emocional está puesta en el hijo enfermo.
          </p>

          <p>
            Pero hay otros niños en la familia. Los hermanos sanos. Y ellos también están viviendo algo enorme, aunque nadie hable de ello.
          </p>

          <p>
            Estos niños ven cómo su mundo cambia de un día para otro. Ven a sus padres preocupados, agotados, ausentes. Ven a su hermano enfermo recibir toda la atención. Y muchas veces sienten que no tienen derecho a quejarse, porque ellos no son los que están enfermos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que viven los hermanos sanos</h2>

          <p>
            Los hermanos de niños con enfermedades graves atraviesan su propio proceso, aunque rara vez se reconozca:
          </p>

          <p>
            <strong>Pierden la rutina que conocían.</strong> La vida familiar cambia por completo. Los horarios, las actividades, las comidas en familia, los fines de semana. Todo se reorganiza alrededor de la enfermedad.
          </p>

          <p>
            <strong>Pierden la atención de sus padres.</strong> No porque los padres dejen de quererlos, sino porque simplemente no hay suficiente tiempo ni energía para todos. El hermano enfermo necesita más, y los padres dan lo que pueden.
          </p>

          <p>
            <strong>Pierden a su hermano como lo conocían.</strong> El niño enfermo puede cambiar físicamente, puede estar débil, puede no poder jugar como antes. La relación entre hermanos se transforma.
          </p>

          <p>
            <strong>Pierden la despreocupación de la infancia.</strong> De pronto están expuestos a hospitales, tratamientos, conversaciones sobre la muerte. Pierden la inocencia de creer que nada malo puede pasar.
          </p>

          <p>
            <strong>Pierden la posibilidad de quejarse.</strong> Sienten que sus problemas son insignificantes comparados con lo que vive su hermano. No se permiten estar tristes, enojados o frustrados porque "al menos ellos están sanos".
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las emociones que no saben nombrar</h2>

          <p>
            Los hermanos sanos viven emociones complejas y contradictorias que muchas veces no saben cómo expresar:
          </p>

          <p>
            <strong>Miedo.</strong> De que su hermano muera, de que ellos también se enfermen, de que sus padres no estén bien, de lo desconocido.
          </p>

          <p>
            <strong>Tristeza.</strong> Por todo lo que está pasando, por la familia que ya no es la misma, por su hermano que sufre.
          </p>

          <p>
            <strong>Enojo.</strong> Enojo con la enfermedad, con la situación, a veces con el hermano enfermo que "arruinó" todo, a veces con los padres que ya no tienen tiempo para ellos. Este enojo suele venir acompañado de culpa inmediata.
          </p>

          <p>
            <strong>Celos.</strong> Del hermano que recibe toda la atención, los regalos, el cuidado. Sentir celos de un hermano enfermo es confuso y vergonzoso, pero es una reacción humana.
          </p>

          <p>
            <strong>Culpa.</strong> Por estar sanos, por sentir enojo o celos, por no poder hacer nada para ayudar, por seguir queriendo vivir su propia vida.
          </p>

          <p>
            <strong>Soledad.</strong> Aunque haya gente alrededor, pueden sentirse profundamente solos. Nadie les pregunta cómo están. Nadie parece notar lo que ellos sienten.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo de los hermanos</h2>

          <p>
            Lo que viven los hermanos sanos es un duelo. Aunque nadie haya muerto, están perdiendo muchas cosas: la familia que conocían, la rutina, la atención, la relación con su hermano, la normalidad.
          </p>

          <p>
            Este duelo muchas veces no se reconoce. No hay rituales para él, no hay palabras para nombrarlo. Los adultos están tan enfocados en el niño enfermo que el duelo de los otros hijos pasa desapercibido.
          </p>

          <p>
            Pero el duelo no reconocido no desaparece. Se manifiesta de otras formas: cambios de conducta, problemas en la escuela, retraimiento, irritabilidad, síntomas físicos sin causa aparente, regresiones a etapas anteriores del desarrollo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que los hermanos necesitan</h2>

          <p>
            Aunque la situación sea difícil y los recursos de los padres sean limitados, hay cosas que pueden hacer diferencia para los hermanos sanos:
          </p>

          <p>
            <strong>Reconocer que ellos también lo están pasando mal.</strong> Decirles explícitamente: "Sé que esto es difícil para ti también. Lo que sientes importa." Ese reconocimiento puede ser muy poderoso.
          </p>

          <p>
            <strong>Darles información apropiada para su edad.</strong> Igual que con el hijo enfermo, los hermanos necesitan saber qué está pasando. La falta de información genera ansiedad.
          </p>

          <p>
            <strong>Permitirles sentir lo que sienten.</strong> Incluyendo el enojo y los celos. No hay emociones malas. Decirles que es normal sentir muchas cosas diferentes, incluso cosas que parecen contradictorias.
          </p>

          <p>
            <strong>Buscar momentos de atención individual.</strong> Aunque sean breves. Quince minutos de atención completa, sin hablar del hermano enfermo, pueden significar mucho.
          </p>

          <p>
            <strong>Mantener algo de su rutina.</strong> Que sigan yendo a la escuela, a sus actividades, viendo a sus amigos. Necesitan espacios donde la vida siga siendo normal.
          </p>

          <p>
            <strong>Incluirlos cuando sea apropiado.</strong> Dejarlos participar en el cuidado del hermano si quieren, llevarlos al hospital cuando sea posible, hacerlos sentir parte del equipo familiar.
          </p>

          <p>
            <strong>No pedirles que sean fuertes.</strong> No ponerlos en el rol de "el que no da problemas" o "el que tiene que ayudar". Siguen siendo niños con sus propias necesidades.
          </p>

          <p>
            <strong>Buscar apoyo externo.</strong> Un familiar, un padrino, un terapeuta, un grupo de apoyo para hermanos. Alguien que pueda darles atención cuando los padres no pueden.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando los padres no pueden más</h2>

          <p>
            Es importante reconocer que los padres de un niño gravemente enfermo están al límite. No tienen la energía ni el tiempo para atender todas las necesidades de todos sus hijos. Eso no los hace malos padres, los hace humanos en una situación imposible.
          </p>

          <p>
            Pedir ayuda no es falla, es necesidad. Abuelos, tíos, amigos, vecinos, profesionales: cualquiera que pueda darle a los hermanos sanos algo de la atención que necesitan es un recurso valioso.
          </p>

          <p>
            Y si eres uno de esos adultos en la vida de una familia con un niño enfermo, considera acercarte a los hermanos. Preguntarles cómo están. Llevarlos a hacer algo divertido. Ser un espacio donde puedan hablar de lo que sienten. Ese apoyo puede marcar la diferencia.
          </p>


          <p>
            Los hermanos de niños enfermos viven un duelo que pocas veces se nombra. Pierden la atención, la rutina, la normalidad, la relación con su hermano como la conocían. Y muchas veces lo viven en silencio, sintiéndose culpables por tener necesidades cuando "ellos no son los enfermos".
          </p>

          <p>
            Estos niños merecen ser vistos. Merecen que alguien les pregunte cómo están. Merecen espacio para sentir lo que sienten, incluyendo las emociones difíciles.
          </p>

          <p>
            Si tienes un hijo enfermo y otro sano, no puedes hacerlo todo. Pero puedes reconocer que el hijo sano también la está pasando difícil. Y buscar ayuda para que él también sea sostenido.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Tu familia está atravesando esta situación?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas orientación sobre cómo acompañar a todos tus hijos en este proceso, estoy aquí para ayudarte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="hermanos-de-ninos-enfermos" category="tanatologia" />
      </div>
    </article>
  )
}
