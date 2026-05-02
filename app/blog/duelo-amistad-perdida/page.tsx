'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'
import RelatedArticles from '@/components/RelatedArticles'

export default function DueloAmistadPerdidaPage() {
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
            Duelo por una amistad perdida: cuando alguien deja de estar sin haberse ido
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo amistad perdida.jpeg" alt="Duelo por una amistad perdida" width={300} height={200} priority className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una pérdida que no tiene nombre</h2>

          <p className="text-xl leading-relaxed">
            Hay pérdidas que no tienen funeral. No hay rituales, no hay condolencias, no hay permiso social para llorar. La pérdida de una amistad es una de ellas.
          </p>

          <p>
            Cuando una amistad termina, ya sea de golpe o poco a poco, el dolor puede ser tan intenso como cualquier otro duelo. Pero nadie te pregunta cómo estás. Nadie te da días de descanso. Nadie entiende por qué sigues triste semanas después.
          </p>

          <p>
            Y sin embargo, perdiste a alguien importante. Alguien que conocía partes de ti que otros no conocen. Alguien con quien compartiste momentos, secretos, etapas de tu vida. Esa pérdida merece ser reconocida.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué duele tanto perder una amistad</h2>

          <p>
            Las amistades profundas son relaciones elegidas. No te unen lazos de sangre ni contratos legales. Te une algo más frágil y a la vez más poderoso: la decisión mutua de estar presentes en la vida del otro.
          </p>

          <p>
            Esa elección mutua hace que la pérdida duela de una manera particular. Si la amistad termina, significa que alguien dejó de elegirte. O que tú dejaste de elegir. O que la vida los llevó por caminos diferentes y ninguno de los dos pudo evitarlo.
          </p>

          <p>
            Además, con un amigo cercano compartes cosas que a veces no compartes ni con tu pareja ni con tu familia. Hay partes de ti que solo ese amigo conoce. Cuando la amistad termina, esas partes de ti se quedan sin testigo.
          </p>

          <p>
            Y luego está la historia compartida. Los años de conocerse, las anécdotas, los recuerdos. ¿Qué pasa con todo eso cuando la amistad ya no existe? ¿A dónde va?
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las formas en que una amistad puede terminar</h2>

          <p>
            No todas las amistades terminan igual. La forma en que se pierde una amistad afecta cómo se vive el duelo:
          </p>

          <p>
            <strong>La ruptura abrupta.</strong> Una pelea, una traición, un conflicto que no se pudo resolver. La amistad termina de golpe, con palabras dichas o con silencios que lo dicen todo. Este tipo de ruptura deja preguntas, enojo, a veces la fantasía de que todo podría arreglarse.
          </p>

          <p>
            <strong>El distanciamiento gradual.</strong> Nadie peleó, nadie dijo nada. Simplemente dejaron de buscarse. Las llamadas se espaciaron, los mensajes se volvieron esporádicos, un día te diste cuenta de que ya no sabías nada de su vida. Este tipo de pérdida es confusa: ¿en qué momento terminó? ¿Todavía son amigos o ya no?
          </p>

          <p>
            <strong>El cambio de circunstancias.</strong> Una migración, un cambio de trabajo, una nueva pareja, hijos. La vida los puso en lugares diferentes y la amistad no sobrevivió la distancia o los nuevos contextos. Nadie tuvo la culpa, pero la pérdida es real.
          </p>

          <p>
            <strong>La incompatibilidad que emerge.</strong> A veces las personas cambian y descubren que ya no son compatibles. Lo que antes los unía ya no está. Los valores, los intereses, las formas de ver la vida se volvieron demasiado diferentes. La amistad muere no por conflicto sino por falta de conexión.
          </p>

          <p>
            <strong>La traición.</strong> Uno de los dos hizo algo que rompió la confianza. Un secreto revelado, una deslealtad, una mentira importante. Este tipo de ruptura deja heridas profundas porque viene de alguien en quien confiabas completamente.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que se pierde con una amistad</h2>

          <p>
            Cuando una amistad termina, no solo pierdes a la persona. Pierdes muchas cosas:
          </p>

          <p>
            <strong>Un testigo de tu vida.</strong> Alguien que sabía tu historia, que recordaba cosas que tú olvidaste, que podía decirte "¿te acuerdas cuando...?" y llevarte a un momento que solo ustedes dos conocían.
          </p>

          <p>
            <strong>Una fuente de apoyo.</strong> Alguien a quien podías llamar cuando las cosas iban mal. Alguien que te conocía lo suficiente para saber qué necesitabas sin que tuvieras que explicarlo.
          </p>

          <p>
            <strong>Una parte de tu identidad.</strong> Las amistades nos moldean. La persona que eres hoy tiene la huella de esa amistad. Cuando termina, una parte de ti queda huérfana.
          </p>

          <p>
            <strong>Planes y proyectos compartidos.</strong> Quizás tenían planes de viajar juntos, de ser testigos en las bodas del otro, de que sus hijos crecieran juntos. Esos futuros imaginados ya no van a suceder.
          </p>

          <p>
            <strong>Un espacio de pertenencia.</strong> Con un buen amigo te sentías en casa. Podías ser tú mismo sin esfuerzo. Ese espacio de pertenencia desaparece con la amistad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo complicado de las amistades</h2>

          <p>
            El duelo por una amistad tiene características que lo hacen particularmente difícil:
          </p>

          <p>
            <strong>No hay cierre claro.</strong> Muchas veces no hay una conversación final, una explicación, un punto donde puedas decir "aquí terminó". La ambigüedad hace difícil el duelo.
          </p>

          <p>
            <strong>No hay validación social.</strong> Nadie te da el pésame por una amistad perdida. La gente puede minimizar tu dolor: "ya harás otros amigos", "no era para ti", "quizás es lo mejor". Estas frases, aunque bien intencionadas, invalidan lo que sientes.
          </p>

          <p>
            <strong>Puedes seguir viendo a la persona.</strong> A diferencia de una muerte, la persona sigue existiendo. Puedes verla en redes sociales, encontrártela en la calle, saber de su vida a través de otros. Esa presencia ausente complica el duelo.
          </p>

          <p>
            <strong>Puede haber culpa.</strong> Quizás sientes que hiciste algo mal, que no fuiste suficiente, que podrías haber evitado la ruptura. La culpa se mezcla con el dolor y lo hace más pesado.
          </p>

          <p>
            <strong>Puede haber enojo.</strong> Si hubo traición o injusticia, el enojo puede ser intenso. Ese enojo es parte del duelo, pero a veces cuesta permitírselo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Atravesar el duelo por una amistad</h2>

          <p>
            No hay forma de acelerar el duelo ni de evitarlo. Pero hay cosas que pueden ayudar a atravesarlo:
          </p>

          <p>
            <strong>Permitirte el dolor.</strong> Tu pérdida es real. No la minimices porque otros no la entiendan. Perdiste a alguien importante y tienes derecho a sentir el dolor de esa pérdida.
          </p>

          <p>
            <strong>Nombrar lo que perdiste.</strong> A veces ayuda hacer el ejercicio de reconocer todo lo que esa amistad significaba para ti. No para quedarte atrapado en el dolor, sino para honrar lo que existió.
          </p>

          <p>
            <strong>Aceptar la ambigüedad.</strong> Muchas veces no vas a tener respuestas claras sobre por qué terminó. Aprender a vivir con esa incertidumbre es parte del proceso.
          </p>

          <p>
            <strong>No buscar reemplazos inmediatos.</strong> Cada amistad es única. Intentar llenar el vacío rápidamente con otra persona rara vez funciona. Date tiempo.
          </p>

          <p>
            <strong>Cuidar las amistades que siguen.</strong> La pérdida de una amistad puede hacerte valorar más las que tienes. También puede hacerte desconfiar. Trata de no cerrarte por completo.
          </p>

          <p>
            <strong>Buscar acompañamiento si lo necesitas.</strong> Si el dolor es muy intenso, si afecta tu vida cotidiana, si sientes que no puedes solo, buscar ayuda profesional es una forma válida de cuidarte.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que queda cuando la amistad termina</h2>

          <p>
            Una amistad que termina no se borra. Existió. Fue real. Te marcó.
          </p>

          <p>
            Puedes estar triste por el final y agradecido por lo que hubo. Puedes sentir rabia y extrañar. Puedes saber que fue lo mejor que terminara y aún así llorar lo que perdiste.
          </p>

          <p>
            Con el tiempo, quizás puedas mirar esa amistad con más perspectiva. Ver lo que te aportó, lo que aprendiste, cómo te ayudó a ser quien eres hoy. El final no borra todo lo anterior.
          </p>

          <p>
            Y también es posible que algunas amistades vuelvan. Que el tiempo y la vida los reencuentre. No hay garantía, pero tampoco es imposible. Lo que sí puedes hacer ahora es atravesar este duelo con la honestidad que merece.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cierre</h2>

          <p>
            El duelo por una amistad perdida es un duelo real. No importa que no haya muerto nadie, no importa que otros no lo entiendan, no importa que no haya rituales para marcarlo. Perdiste a alguien importante y eso duele.
          </p>

          <p>
            Date permiso de sentir esa pérdida. No la minimices ni la escondas. Y si necesitas acompañamiento para atravesarla, búscalo. No tienes que hacerlo solo.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿Estás atravesando la pérdida de una amistad?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">Si necesitas acompañamiento para procesar este duelo, estoy aquí para escucharte.</p>
          <a href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-[#B2F7EF] text-black rounded-full font-medium hover:bg-[#B2F7EF]/80 transition-all">Agenda tu sesión gratuita</a>
        </div>

        <RelatedArticles currentSlug="duelo-amistad-perdida" category="tanatologia" />
      </div>
    </article>
  )
}
