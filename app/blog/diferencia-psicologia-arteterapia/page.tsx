'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDiferenciaPsicologiaArteterapia() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">Arteterapia</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Psicología y Arteterapia: ¿En Qué se Diferencian y Cuándo Elegir Cada Una?
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/diferencia psicologia y arteterapia.jpeg" alt="Diferencia entre psicología y arteterapia" width={1200} height={675} className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Cuando decidimos buscar ayuda emocional, la primera pregunta que aparece casi siempre es: "¿Con quién voy? ¿A un psicólogo o a un terapeuta?"
          </p>

          <p>
            Y si además alguien te menciona la arteterapia, la confusión puede crecer. ¿Qué es exactamente? ¿Es lo mismo que ir a un taller de manualidades? ¿O es una especie de psicología disfrazada con pinturas?
          </p>

          <p>
            En este artículo quiero aclarar estas diferencias de manera honesta y sin tecnicismos. No porque una disciplina sea mejor que la otra —no lo es— sino porque entender qué ofrece cada una te ayuda a elegir el acompañamiento que realmente necesitas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué hace un psicólogo o psicoterapeuta?</h2>

          <p>
            La psicología y la psicoterapia trabajan principalmente desde el lenguaje verbal. En una sesión típica, hablas: describes lo que sientes, lo que piensas, lo que te preocupa. El terapeuta escucha, hace preguntas, señala patrones y te ayuda a generar insight sobre tus experiencias.
          </p>

          <p>
            Dependiendo del enfoque, un psicólogo puede ayudarte a identificar pensamientos automáticos que te afectan (como en la terapia cognitivo-conductual), a explorar cómo tus experiencias tempranas moldean tus relaciones actuales (como en el psicoanálisis), o a desarrollar habilidades de regulación emocional.
          </p>

          <p>
            Los psicólogos clínicos están formados para diagnosticar trastornos mentales, hacer evaluaciones psicológicas y, en muchos contextos, trabajar en coordinación con psiquiatras cuando se requiere medicación. La psicoterapia es el camino indicado cuando necesitas diagnóstico, evaluación clínica formal, o cuando tienes síntomas que requieren intervención especializada.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Qué hace un arteterapeuta y en qué se diferencia?</h2>

          <p>
            La arteterapia es una disciplina de acompañamiento que utiliza el proceso creativo —pintura, dibujo, collage, arcilla, escritura creativa, entre otros— como lenguaje principal para explorar el mundo emocional y promover el bienestar.
          </p>

          <p>
            La diferencia fundamental no es que "en psicología hablas y en arteterapia pintas". Es mucho más profunda:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>En psicoterapia, el lenguaje verbal es el medio central para acceder a la experiencia interna.</li>
            <li>En arteterapia, el proceso creativo es el medio. Las imágenes, los colores y las texturas comunican lo que las palabras aún no pueden nombrar.</li>
            <li>La arteterapia trabaja con la experiencia sensorial y corporal, no solo con el pensamiento.</li>
            <li>No se realizan diagnósticos clínicos, ni evaluaciones psicológicas estandarizadas, ni prescripción de medicamentos.</li>
          </ul>

          <p>
            Mi formación como arteterapeuta integra técnicas de distintas tradiciones: México, Bali, Tailandia, Malasia e India. Eso significa que trabajo con una paleta muy amplia de recursos expresivos, adaptados a cada persona y a cada momento del proceso.
          </p>

          <p>
            Como sobreviviente de cáncer que ha atravesado sus propios procesos de duelo, pérdida y reconstrucción de identidad, también traigo algo que los libros no enseñan: sé desde adentro lo que se siente cuando el cuerpo te traiciona, cuando la vida se reorganiza sin pedirte permiso. Eso informa mi manera de acompañar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los mitos más comunes sobre la arteterapia</h2>

          <p>
            Antes de hablar de cuándo elegir cada disciplina, quiero desmentir algunos malentendidos que escucho constantemente:
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Mito 1: "La arteterapia es para niños"</h3>
          <p>
            Completamente falso. Trabajo con adultos de todas las edades: personas en duelo, sobrevivientes de enfermedades graves, personas en transiciones de vida, profesionistas con burnout, cuidadores agotados. El arte no tiene edad. La expresión creativa es una necesidad humana que persiste toda la vida.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Mito 2: "Tienes que saber dibujar o pintar"</h3>
          <p>
            En arteterapia no importa el resultado estético, importa el proceso. Muchas de las personas más transformadas que he acompañado se presentaron diciéndome "es que yo no sé ni hacer un palito". Lo que creamos en sesión no va a una galería; va a nuestro interior.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Mito 3: "Es solo relajación, no es terapia de verdad"</h3>
          <p>
            Este es quizás el mito más persistente. La arteterapia tiene fundamentos sólidos en neurociencia, psicología del desarrollo y trauma. Diversos estudios documentan sus efectos en la reducción de estrés, el procesamiento de trauma y el bienestar en pacientes oncológicos. Relajarse puede ser un efecto secundario bienvenido, pero el proceso va mucho más allá.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Mito 4: "Si ya voy con un psicólogo, no necesito arteterapia"</h3>
          <p>
            Las dos disciplinas no se excluyen, se complementan. Muchas personas hacen psicoterapia y arteterapia al mismo tiempo, y reportan que lo que exploran en una enriquece la otra. Los registros no compiten; se dialogan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">¿Cuándo elegir psicología y cuándo arteterapia?</h2>

          <p>
            Esta orientación no es absoluta —cada persona es única— pero puede ayudarte a decidir:
          </p>

          <p>
            <strong>Considera psicología/psicoterapia cuando:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Sientes que tus síntomas interfieren de manera significativa con tu vida diaria (trabajo, relaciones, funciones básicas).</li>
            <li>Sospechas que puedes tener un trastorno mental que requiere diagnóstico formal.</li>
            <li>Necesitas apoyo para evaluar si requieres medicación.</li>
            <li>Tienes pensamientos de hacerte daño o de hacerle daño a alguien más.</li>
            <li>Estás trabajando con trauma severo o complejo y necesitas un marco clínico especializado.</li>
          </ul>

          <p>
            <strong>Considera arteterapia cuando:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Sientes que las palabras no alcanzan para expresar lo que vives.</li>
            <li>Estás en un proceso de duelo, pérdida o transición y buscas un espacio diferente para procesarlo.</li>
            <li>Sientes que estás "atorado/a" y necesitas otro lenguaje para moverte.</li>
            <li>Quieres reconectar con tu creatividad como parte de tu bienestar.</li>
            <li>Estás en tratamiento médico (por ejemplo, oncológico) y buscas acompañamiento emocional complementario.</li>
            <li>Buscas autoconocimiento y crecimiento personal, no necesariamente desde una crisis.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo se complementan: el valor de integrar ambas</h2>

          <p>
            En mi práctica he visto una y otra vez cómo la arteterapia puede abrir puertas que la psicoterapia verbal, por sí sola, no encontraba. El trauma, por ejemplo, a menudo se almacena en el cuerpo y en imágenes, no en narrativas verbales ordenadas. La neurociencia nos enseña que las memorias traumáticas se procesan de manera diferente a los recuerdos ordinarios. El arte puede acceder a esas capas que la conversación no siempre alcanza.
          </p>

          <p>
            Cuando yo viví mi propio diagnóstico de cáncer, la terapia verbal me ayudó a estructurar pensamientos y a comunicarme con mi entorno. Pero fue el arte el que me permitió habitar el miedo, la rabia y la incertidumbre de una manera que las palabras no podían contener. Aprendí en carne propia que estas herramientas no compiten: se necesitan.
          </p>

          <p>
            Por eso, si tienes la posibilidad, no te plantees la pregunta como "¿psicología o arteterapia?" sino como "¿qué combinación de acompañamiento necesito en este momento de mi vida?"
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes</h2>

          <p>
            <strong>¿Un arteterapeuta puede darme un diagnóstico?</strong><br />
            No. El diagnóstico de trastornos mentales corresponde a psicólogos clínicos y psiquiatras. Un arteterapeuta no diagnostica, no evalúa clínicamente ni prescribe. Lo que hace es acompañar procesos emocionales y expresivos desde el arte.
          </p>

          <p>
            <strong>¿Puedo ir a arteterapia si tengo ansiedad o depresión diagnosticada?</strong><br />
            Sí, y puede ser muy beneficioso como complemento a tu tratamiento principal. Es importante que tu psicólogo o psiquiatra esté al tanto, y que la arteterapia no reemplace el acompañamiento clínico que tu condición requiere.
          </p>

          <p>
            <strong>¿La arteterapia sirve para el duelo?</strong><br />
            Es una de las aplicaciones donde más claramente se observan sus beneficios. El duelo tiene dimensiones que difícilmente caben en palabras: la ausencia que se siente en el cuerpo, los recuerdos que aparecen como imágenes, las emociones que se contradicen. El arte puede contener todo eso.
          </p>

          <p>
            <strong>¿En qué se parece la arteterapia a la psicología?</strong><br />
            Ambas buscan el bienestar emocional de la persona. Ambas crean un espacio seguro, confidencial y de escucha. Ambas trabajan con la experiencia interna. La diferencia principal está en el medio: verbal versus creativo.
          </p>

          <p>
            <strong>¿Puedo hacer arteterapia sin haber ido nunca al psicólogo?</strong><br />
            Por supuesto. La arteterapia no requiere experiencia previa en psicoterapia. Muchas personas llegan directamente, sin ningún tipo de acompañamiento emocional anterior, y el proceso es igualmente valioso.
          </p>

          <p>
            <strong>¿La arteterapia online funciona igual que presencial?</strong><br />
            En su mayor parte, sí. El proceso creativo y la reflexión que lo acompaña pueden darse con la misma profundidad en formato online. Los materiales se adaptan a lo que tengas en casa. La pantalla no impide la conexión ni el proceso terapéutico.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">¿No sabes por dónde empezar?</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si después de leer esto sigues sin saber si la arteterapia es para ti, una conversación de 30 minutos puede aclararlo. La primera consulta es gratuita y sin compromiso.
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
      </div>
    </article>
  )
}
