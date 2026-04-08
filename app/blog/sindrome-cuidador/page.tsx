'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloSindromeCuidador() {
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
            El sindrome del cuidador primario
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/sindrome-cuidador.webp"
            alt="Sindrome del cuidador, burnout cuidador, agotamiento cuidador primario, autocuidado."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Para quienes dan tanto que se olvidan de si mismos.
          </p>

          <p>
            Llevas meses, quiza anos, cuidando a alguien que amas. Un padre con Alzheimer. Una madre que ya no puede valerse sola. Un hijo con una condicion cronica. Una pareja que enfrenta una enfermedad grave.
          </p>

          <p>
            Y en algun momento dejaste de preguntarte como estas tu.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Que es un cuidador primario</h2>

          <p>
            Un cuidador primario es la persona que asume la responsabilidad principal del cuidado de alguien que no puede valerse por si mismo. No es un titulo oficial. No hay diploma que lo certifique. Simplemente un dia te convertiste en esa persona porque alguien tenia que hacerlo.
          </p>

          <p>
            Segun datos de la Organizacion Mundial de la Salud, aproximadamente el 70% de los cuidadores primarios son mujeres, muchas de ellas hijas o esposas del paciente. La mayoria no recibe compensacion economica ni capacitacion formal para el rol que desempena.
          </p>

          <p>
            El cuidador primario se encarga de tareas que van desde la higiene personal del paciente hasta la administracion de medicamentos, las citas medicas, la alimentacion, el acompanamiento emocional y la toma de decisiones. Todo esto, frecuentemente, mientras mantiene un trabajo, una familia propia y una vida que cada vez tiene menos espacio para si mismo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Que es el sindrome del cuidador</h2>

          <p>
            El sindrome del cuidador, tambien llamado burnout del cuidador, es un estado de agotamiento fisico, emocional y mental que resulta del estres prolongado de cuidar a otra persona.
          </p>

          <p>
            No es debilidad. No es falta de amor. Es la respuesta natural del cuerpo y la mente cuando se les exige mas de lo que pueden dar durante demasiado tiempo.
          </p>

          <p>
            Un estudio publicado en el Journal of the American Medical Association encontro que los cuidadores de personas con demencia tienen un 63% mas de riesgo de mortalidad que los no cuidadores de la misma edad. El cuidado cronico sin descanso tiene consecuencias reales en la salud.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Senales de que estas llegando al limite</h2>

          <p>
            El agotamiento del cuidador no aparece de un dia para otro. Se acumula gradualmente, muchas veces sin que lo notes porque estas demasiado ocupado atendiendo a otra persona.
          </p>

          <p>
            <strong>Sintomas fisicos.</strong> Fatiga constante que no mejora con el descanso. Dolores de cabeza frecuentes. Problemas de sueno. Cambios en el apetito. Enfermarte mas seguido porque tu sistema inmune esta debilitado. Tension muscular cronica, especialmente en cuello y espalda.
          </p>

          <p>
            <strong>Sintomas emocionales.</strong> Irritabilidad que antes no tenias. Tristeza persistente. Ansiedad por lo que pueda pasar. Sentirte atrapado sin salida. Resentimiento hacia la persona que cuidas, seguido de culpa por sentir ese resentimiento. Sensacion de vacio o de haber perdido tu identidad.
          </p>

          <p>
            <strong>Sintomas sociales.</strong> Aislarte de amigos y familia. Abandonar actividades que antes disfrutabas. Sentir que nadie entiende lo que estas viviendo. Dejar de pedir ayuda porque crees que nadie puede hacerlo como tu o porque ya te cansaste de que no aparezcan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por que ocurre el agotamiento</h2>

          <p>
            El burnout del cuidador no sucede porque hagas algo mal. Sucede porque la situacion es objetivamente dificil y porque el sistema de apoyo suele ser insuficiente.
          </p>

          <p>
            <strong>La carga es demasiada para una sola persona.</strong> Cuidar a alguien es un trabajo de tiempo completo, pero raramente se distribuye equitativamente entre los miembros de la familia. Un estudio de AARP revelo que el 53% de los cuidadores familiares en Estados Unidos sienten que no tienen opcion respecto a asumir ese rol.
          </p>

          <p>
            <strong>No hay descanso real.</strong> A diferencia de un trabajo, no hay hora de salida. No hay vacaciones. Incluso cuando no estas fisicamente cuidando, tu mente sigue pendiente. La hipervigilancia constante agota el sistema nervioso.
          </p>

          <p>
            <strong>Las expectativas son imposibles.</strong> Muchos cuidadores sienten que deben hacerlo todo perfectamente, que pedir ayuda es abandonar a su ser querido, que sus propias necesidades son egoistas. Estas creencias conducen directamente al agotamiento.
          </p>

          <p>
            <strong>El duelo anticipado.</strong> Si la persona que cuidas tiene una enfermedad degenerativa o terminal, estas viviendo un duelo mientras todavia esta presente. Pierdes a la persona que conocias poco a poco. Esto anade una capa emocional que rara vez se reconoce.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las fases del agotamiento</h2>

          <p>
            El burnout del cuidador suele desarrollarse en etapas.
          </p>

          <p>
            <strong>Fase de entrega total.</strong> Al principio hay energia, dedicacion y esperanza. Asumes el rol con determinacion. Crees que puedes con todo.
          </p>

          <p>
            <strong>Fase de sobrecarga.</strong> Empiezas a notar el cansancio. Aparecen los primeros sintomas fisicos y emocionales. Pero los ignoras porque hay demasiado que hacer.
          </p>

          <p>
            <strong>Fase de burnout.</strong> El agotamiento se vuelve cronico. Puedes sentir desapego emocional, cinismo o incluso resentimiento. Tu salud se deteriora. Ya no puedes seguir asi, pero tampoco ves como parar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como cuidarte mientras cuidas</h2>

          <p>
            No puedes cuidar a nadie si te destruyes en el proceso. Esto no es egoismo. Es sentido comun.
          </p>

          <p>
            <strong>Pide ayuda sin culpa.</strong> Aceptar que necesitas apoyo no significa que ames menos a la persona que cuidas. Significa que eres humano. Involucra a otros familiares. Investiga servicios de respiro o cuidadores profesionales aunque sea por algunas horas a la semana.
          </p>

          <p>
            <strong>Establece limites claros.</strong> No todo es tu responsabilidad. Aprende a decir no cuando algo excede tu capacidad. Establece horarios aunque el cuidado sea en casa. Tu disponibilidad no puede ser infinita.
          </p>

          <p>
            <strong>Manten espacios propios.</strong> Necesitas momentos que sean solo tuyos. Una caminata. Un cafe con un amigo. Una hora de lectura. No son lujos, son necesidades basicas para tu salud mental.
          </p>

          <p>
            <strong>Busca apoyo profesional.</strong> Un terapeuta puede ayudarte a procesar las emociones complejas del cuidado: la culpa, el resentimiento, el duelo anticipado, la perdida de identidad. Los grupos de apoyo para cuidadores tambien ofrecen un espacio donde sentirte comprendido.
          </p>

          <p>
            <strong>Cuida tu cuerpo.</strong> Come aunque no tengas hambre. Duerme aunque cueste. Muevete aunque sea poco. Tu salud fisica sostiene todo lo demas.
          </p>

          <p>
            <strong>Encuentra formas de expresion.</strong> El arte, la escritura, la musica pueden ser canales para liberar emociones que no sabes como nombrar. Pintar o colorear durante unos minutos al dia puede funcionar como una pausa activa que descomprime el estres acumulado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El permiso que necesitas escuchar</h2>

          <p>
            Estas haciendo algo extraordinariamente dificil. El trabajo del cuidador es agotador, invisible y poco valorado socialmente.
          </p>

          <p>
            No tienes que ser perfecto. No tienes que hacerlo todo solo. No tienes que sacrificar tu salud y tu vida por completo.
          </p>

          <p>
            Sentir cansancio no significa que no ames lo suficiente. Sentir frustracion no significa que seas mala persona. Necesitar un descanso no significa que estes abandonando a nadie.
          </p>

          <p>
            El agotamiento del cuidador es prevenible y tratable. Reconocerlo es el primer paso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuando buscar ayuda profesional</h2>

          <p>
            Si experimentas varios de estos sintomas de manera persistente, considera buscar apoyo:
          </p>

          <p>
            Tristeza o ansiedad que no cede.
          </p>

          <p>
            Pensamientos de hacerte dano o de que todo seria mas facil si no estuvieras.
          </p>

          <p>
            Incapacidad para dormir o descansar aunque tengas oportunidad.
          </p>

          <p>
            Resentimiento constante hacia la persona que cuidas.
          </p>

          <p>
            Uso de alcohol u otras sustancias para sobrellevar el dia.
          </p>

          <p>
            Sensacion de que ya no puedes continuar.
          </p>

          <p>
            No tienes que llegar al colapso para pedir ayuda. Hacerlo antes es mas inteligente, no mas debil.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            Cuidar a alguien que amas es un acto profundo de amor y compromiso. Pero ese amor no requiere que te destruyas en el proceso.
          </p>

          <p>
            Eres mas que un cuidador. Eres una persona con necesidades, limites y un valor que no depende de cuanto das.
          </p>

          <p>
            El mejor regalo que puedes darle a la persona que cuidas es un cuidador que tambien esta cuidado.
          </p>

          <p className="italic text-black/60 mt-8">
            Tu bienestar importa. No es opcional.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si eres cuidador y necesitas apoyo emocional, estoy aqui para acompanarte.
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
