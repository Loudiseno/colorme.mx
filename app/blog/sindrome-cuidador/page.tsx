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
          <span className="text-xs text-black font-medium uppercase tracking-wider">TANATOLOGÍA</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            El síndrome del cuidador primario
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/sindrome-cuidador.webp"
            alt="Síndrome del cuidador, burnout cuidador, agotamiento cuidador primario, autocuidado."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Para quienes dan tanto que se olvidan de sí mismos.
          </p>

          <p>
            Llevas meses, quizá años, cuidando a alguien que amas. Un padre con Alzheimer. Una madre que ya no puede valerse sola. Un hijo con una condición crónica. Una pareja que enfrenta una enfermedad grave.
          </p>

          <p>
            Y en algún momento dejaste de preguntarte cómo estás tú.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es un cuidador primario</h2>

          <p>
            Un cuidador primario es la persona que asume la responsabilidad principal del cuidado de alguien que no puede valerse por sí mismo. No es un título oficial. No hay diploma que lo certifique. Simplemente un día te convertiste en esa persona porque alguien tenía que hacerlo.
          </p>

          <p>
            Según datos de la Organización Mundial de la Salud, aproximadamente el 70% de los cuidadores primarios son mujeres, muchas de ellas hijas o esposas del paciente. La mayoría no recibe compensación económica ni capacitación formal para el rol que desempeña.
          </p>

          <p>
            El cuidador primario se encarga de tareas que van desde la higiene personal del paciente hasta la administración de medicamentos, las citas médicas, la alimentación, el acompañamiento emocional y la toma de decisiones. Todo esto, frecuentemente, mientras mantiene un trabajo, una familia propia y una vida que cada vez tiene menos espacio para sí mismo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Qué es el síndrome del cuidador</h2>

          <p>
            El síndrome del cuidador, también llamado burnout del cuidador, es un estado de agotamiento físico, emocional y mental que resulta del estrés prolongado de cuidar a otra persona.
          </p>

          <p>
            No es debilidad. No es falta de amor. Es la respuesta natural del cuerpo y la mente cuando se les exige más de lo que pueden dar durante demasiado tiempo.
          </p>

          <p>
            Un estudio publicado en el Journal of the American Medical Association encontró que los cuidadores de personas con demencia tienen un 63% más de riesgo de mortalidad que los no cuidadores de la misma edad. El cuidado crónico sin descanso tiene consecuencias reales en la salud.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Señales de que estás llegando al límite</h2>

          <p>
            El agotamiento del cuidador no aparece de un día para otro. Se acumula gradualmente, muchas veces sin que lo notes porque estás demasiado ocupado atendiendo a otra persona.
          </p>

          <p>
            <strong>Síntomas físicos.</strong> Fatiga constante que no mejora con el descanso. Dolores de cabeza frecuentes. Problemas de sueño. Cambios en el apetito. Enfermarte más seguido porque tu sistema inmune está debilitado. Tensión muscular crónica, especialmente en cuello y espalda.
          </p>

          <p>
            <strong>Síntomas emocionales.</strong> Irritabilidad que antes no tenías. Tristeza persistente. Ansiedad por lo que pueda pasar. Sentirte atrapado sin salida. Resentimiento hacia la persona que cuidas, seguido de culpa por sentir ese resentimiento. Sensación de vacío o de haber perdido tu identidad.
          </p>

          <p>
            <strong>Síntomas sociales.</strong> Aislarte de amigos y familia. Abandonar actividades que antes disfrutabas. Sentir que nadie entiende lo que estás viviendo. Dejar de pedir ayuda porque crees que nadie puede hacerlo como tú o porque ya te cansaste de que no aparezcan.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Por qué ocurre el agotamiento</h2>

          <p>
            El burnout del cuidador no sucede porque hagas algo mal. Sucede porque la situación es objetivamente difícil y porque el sistema de apoyo suele ser insuficiente.
          </p>

          <p>
            <strong>La carga es demasiada para una sola persona.</strong> Cuidar a alguien es un trabajo de tiempo completo, pero raramente se distribuye equitativamente entre los miembros de la familia. Un estudio de AARP reveló que el 53% de los cuidadores familiares en Estados Unidos sienten que no tienen opción respecto a asumir ese rol.
          </p>

          <p>
            <strong>No hay descanso real.</strong> A diferencia de un trabajo, no hay hora de salida. No hay vacaciones. Incluso cuando no estás físicamente cuidando, tu mente sigue pendiente. La hipervigilancia constante agota el sistema nervioso.
          </p>

          <p>
            <strong>Las expectativas son imposibles.</strong> Muchos cuidadores sienten que deben hacerlo todo perfectamente, que pedir ayuda es abandonar a su ser querido, que sus propias necesidades son egoístas. Estas creencias conducen directamente al agotamiento.
          </p>

          <p>
            <strong>El duelo anticipado.</strong> Si la persona que cuidas tiene una enfermedad degenerativa o terminal, estás viviendo un duelo mientras todavía está presente. Pierdes a la persona que conocías poco a poco. Esto añade una capa emocional que rara vez se reconoce.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Las fases del agotamiento</h2>

          <p>
            El burnout del cuidador suele desarrollarse en etapas.
          </p>

          <p>
            <strong>Fase de entrega total.</strong> Al principio hay energía, dedicación y esperanza. Asumes el rol con determinación. Crees que puedes con todo.
          </p>

          <p>
            <strong>Fase de sobrecarga.</strong> Empiezas a notar el cansancio. Aparecen los primeros síntomas físicos y emocionales. Pero los ignoras porque hay demasiado que hacer.
          </p>

          <p>
            <strong>Fase de burnout.</strong> El agotamiento se vuelve crónico. Puedes sentir desapego emocional, cinismo o incluso resentimiento. Tu salud se deteriora. Ya no puedes seguir así, pero tampoco ves cómo parar.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cómo cuidarte mientras cuidas</h2>

          <p>
            No puedes cuidar a nadie si te destruyes en el proceso. Esto no es egoísmo. Es sentido común.
          </p>

          <p>
            <strong>Pide ayuda sin culpa.</strong> Aceptar que necesitas apoyo no significa que ames menos a la persona que cuidas. Significa que eres humano. Involucra a otros familiares. Investiga servicios de respiro o cuidadores profesionales aunque sea por algunas horas a la semana.
          </p>

          <p>
            <strong>Establece límites claros.</strong> No todo es tu responsabilidad. Aprende a decir no cuando algo excede tu capacidad. Establece horarios aunque el cuidado sea en casa. Tu disponibilidad no puede ser infinita.
          </p>

          <p>
            <strong>Mantén espacios propios.</strong> Necesitas momentos que sean solo tuyos. Una caminata. Un café con un amigo. Una hora de lectura. No son lujos, son necesidades básicas para tu salud mental.
          </p>

          <p>
            <strong>Busca apoyo profesional.</strong> Un terapeuta puede ayudarte a procesar las emociones complejas del cuidado: la culpa, el resentimiento, el duelo anticipado, la pérdida de identidad. Los grupos de apoyo para cuidadores también ofrecen un espacio donde sentirte comprendido.
          </p>

          <p>
            <strong>Cuida tu cuerpo.</strong> Come aunque no tengas hambre. Duerme aunque cueste. Muévete aunque sea poco. Tu salud física sostiene todo lo demás.
          </p>

          <p>
            <strong>Encuentra formas de expresión.</strong> El arte, la escritura, la música pueden ser canales para liberar emociones que no sabes cómo nombrar. Pintar o colorear durante unos minutos al día puede funcionar como una pausa activa que descomprime el estrés acumulado.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El permiso que necesitas escuchar</h2>

          <p>
            Estás haciendo algo extraordinariamente difícil. El trabajo del cuidador es agotador, invisible y poco valorado socialmente.
          </p>

          <p>
            No tienes que ser perfecto. No tienes que hacerlo todo solo. No tienes que sacrificar tu salud y tu vida por completo.
          </p>

          <p>
            Sentir cansancio no significa que no ames lo suficiente. Sentir frustración no significa que seas mala persona. Necesitar un descanso no significa que estés abandonando a nadie.
          </p>

          <p>
            El agotamiento del cuidador es prevenible y tratable. Reconocerlo es el primer paso.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Cuándo buscar ayuda profesional</h2>

          <p>
            Si experimentas varios de estos síntomas de manera persistente, considera buscar apoyo:
          </p>

          <p>
            Tristeza o ansiedad que no cede.
          </p>

          <p>
            Pensamientos de hacerte daño o de que todo sería más fácil si no estuvieras.
          </p>

          <p>
            Incapacidad para dormir o descansar aunque tengas oportunidad.
          </p>

          <p>
            Resentimiento constante hacia la persona que cuidas.
          </p>

          <p>
            Uso de alcohol u otras sustancias para sobrellevar el día.
          </p>

          <p>
            Sensación de que ya no puedes continuar.
          </p>

          <p>
            No tienes que llegar al colapso para pedir ayuda. Hacerlo antes es más inteligente, no más débil.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexión</h2>

          <p>
            Cuidar a alguien que amas es un acto profundo de amor y compromiso. Pero ese amor no requiere que te destruyas en el proceso.
          </p>

          <p>
            Eres más que un cuidador. Eres una persona con necesidades, límites y un valor que no depende de cuánto das.
          </p>

          <p>
            El mejor regalo que puedes darle a la persona que cuidas es un cuidador que también está cuidado.
          </p>

          <p className="italic text-black/60 mt-8">
            Tu bienestar importa. No es opcional.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesión de orientación gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si eres cuidador y necesitas apoyo emocional, estoy aquí para acompañarte.
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
