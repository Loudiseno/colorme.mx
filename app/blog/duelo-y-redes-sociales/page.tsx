'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import RelatedArticles from '@/components/RelatedArticles'
import { siteConfig } from '@/lib/seo'

export default function ArticuloDueloYRedesSociales() {
  return (
    <article className="pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-black hover:text-black/70 transition-colors mb-8">
          <ArrowLeft size={18} />
          Volver al blog
        </Link>

        <header className="mb-8">
          <span className="text-xs text-black font-medium uppercase tracking-wider">Tanatología</span>
          <h1 className="text-3xl md:text-5xl text-black mt-3 mb-6 leading-tight font-semibold">
            Duelo y Redes Sociales: Cuando el Mundo Digital Complica el Proceso de Despedida
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatóloga</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image src="/duelo en redes.jpeg" alt="Duelo y redes sociales" width={1200} height={675} className="w-full h-auto" />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="text-xl leading-relaxed">
            Son las once de la noche. Estás en la cama, el teléfono en la mano. Y sin pensarlo demasiado, entras al perfil de quien ya no está.
          </p>

          <p>
            Ahí está su foto de portada. Sus últimas publicaciones. Los comentarios que le dejaron antes de morir. La última vez que alguien le escribió un "feliz cumpleaños" sin saber que ya no podría leerlo. Y tú, del otro lado de la pantalla, atrapado entre el dolor de su ausencia y la extraña sensación de que, de alguna manera, todavía está ahí.
          </p>

          <p>
            El duelo en la era digital es uno de los temas más complejos y menos explorados en el acompañamiento tanatológico. Porque las redes sociales no desaparecen cuando alguien muere. Y eso cambia todo lo que sabíamos sobre cómo nos despedimos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo digital: una experiencia nueva sin manuales</h2>

          <p>
            Durante miles de años, la humanidad desarrolló rituales para enfrentar la muerte: velorios, entierros, ceremonias, períodos de luto reconocidos socialmente. Estos rituales existían -y existen- porque cumplían una función psicológica esencial: ayudar a la mente a registrar que algo ha terminado.
          </p>

          <p>
            Pero hoy vivimos algo sin precedente en la historia: las personas que amamos dejan huellas digitales permanentes. Fotos, videos, mensajes de voz guardados en el teléfono, estados de WhatsApp, publicaciones en Instagram, hilos de conversación que puedes releer cuantas veces quieras.
          </p>

          <p>
            Esta permanencia digital puede ser, simultáneamente, un consuelo y un obstáculo para el proceso de duelo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Cuando la despedida no tiene cierre</h3>

          <p>
            Uno de los elementos fundamentales del proceso de duelo es la confirmación de la pérdida -la aceptación, a nivel profundo, de que esa persona ya no está. Las redes sociales complican esto de maneras que no siempre reconocemos.
          </p>

          <p>
            Mientras el perfil siga activo, mientras puedas escuchar su voz en un audio de WhatsApp, mientras sus fotos aparezcan en las "memorias" que te propone el algoritmo... una parte de tu mente puede quedarse atrapada en un limbo. La persona no está, pero tampoco se fue del todo. Y eso puede volver muy difícil el trabajo de aceptación.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Las notificaciones que duelen</h3>

          <p>
            El algoritmo no sabe que alguien murió. Facebook puede seguir enviando recordatorios de su cumpleaños. Instagram puede mostrar sus fotos como "recuerdo de hoy". LinkedIn puede sugerir que lo felicites por un aniversario laboral. YouTube puede recomendar sus videos como si fueran novedades.
          </p>

          <p>
            Cada una de estas notificaciones puede convertirse en un golpe inesperado. Un recordatorio súbito en un día en que quizás estabas bien, que te regresa de golpe al dolor más agudo. El duelo, que de por sí viene en olas, se vuelve todavía más impredecible cuando el mundo digital no ha procesado -porque no puede procesar- lo que ocurrió.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El duelo en red: compartir el dolor públicamente</h2>

          <p>
            Las redes sociales también han transformado la forma en que expresamos el duelo colectivamente. Publicar una foto del difunto, escribir un mensaje en su muro, compartir recuerdos con quienes lo conocieron -todo esto puede tener un valor genuino de comunidad y de memoria compartida.
          </p>

          <p>
            Pero también puede generar dinámicas complicadas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">La performance del duelo</h3>

          <p>
            Vivimos en una cultura donde lo que no se publica a veces no parece real. Algunos deudos sienten -consciente o inconscientemente- una presión para demostrar públicamente cuánto sufren, para rendir homenaje de formas visibles, para que el mundo digital confirme que su pérdida fue grande.
          </p>

          <p>
            Esto puede llevar a una situación paradójica: estar más pendiente de cómo estás comunicando tu dolor que de realmente sentirlo y procesarlo. El duelo auténtico ocurre hacia adentro. Las redes pueden, sin intención, sacarlo hacia afuera antes de que esté listo.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Los comentarios que lastiman sin querer</h3>

          <p>
            Cuando alguien fallece, la gente comenta en sus redes con toda la buena intención del mundo. Pero los comentarios no siempre ayudan. "Está en un mejor lugar." "Dios sabe por qué hace las cosas." "Hay que ser fuerte." Estos mensajes, que buscan consolar, pueden en realidad invalidar el dolor o acelerar artificialmente la resolución del duelo.
          </p>

          <p>
            Y exponerse a ellos repetidamente -volviendo al perfil del difunto, leyendo los mensajes de condolencia- puede interrumpir el proceso interno que necesita su propio ritmo y silencio.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Los perfiles de personas fallecidas: ¿qué hacemos con ellos?</h2>

          <p>
            Esta es una pregunta que muchas familias enfrentan y para la que rara vez están preparadas. ¿Se elimina la cuenta? ¿Se convierte en memorial? ¿Se deja tal cual?
          </p>

          <p>
            Plataformas como Facebook ofrecen la posibilidad de convertir un perfil en cuenta de conmemoración, donde se deshabilitan ciertas funciones pero el contenido permanece accesible. Instagram permite algo similar. Pero no todas las plataformas tienen políticas claras, y no todas las familias llegan a un acuerdo sobre qué hacer.
          </p>

          <p>
            No hay una respuesta correcta universal. Lo importante es que la decisión se tome de forma consciente y considerando el impacto emocional en las personas que más la necesitan. Mantener el perfil activo puede ser fuente de consuelo para algunos y de tormento para otros. Y ambas respuestas son válidas.
          </p>

          <h3 className="text-xl md:text-2xl text-black font-semibold mt-6 mb-3">Los mensajes que nunca se enviaron</h3>

          <p>
            Uno de los aspectos más íntimos y dolorosos del duelo digital es encontrar conversaciones pendientes: mensajes que nunca se enviaron, chats que quedaron a medias, la última conversación que tuviste con esa persona guardada para siempre en tu teléfono.
          </p>

          <p>
            Hay personas que siguen escribiéndoles mensajes a quienes murieron, sabiendo que no serán leídos. Hay algo en ese gesto que habla de la dificultad de soltar la conexión, de la necesidad humana de seguir comunicándonos con quienes amamos aun cuando ya no sea posible de forma física. Desde la tanatología, esto no es patológico. Es una forma de transitar el duelo. El problema surge cuando se convierte en el único canal de contacto con el dolor, impidiendo buscar apoyo en el mundo real.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Límites saludables con la tecnología durante el duelo</h2>

          <p>
            No se trata de demonizar las redes sociales ni de borrar de un golpe toda la presencia digital de quien perdiste. Se trata de desarrollar una relación más consciente con la tecnología durante un proceso que requiere toda tu energía interna.
          </p>

          <p>
            Algunas pautas que pueden ayudarte:
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Silencia o desactiva notificaciones.</strong> Puedes silenciar temporalmente las cuentas que te envían recordatorios automáticos, o activar filtros para ciertos tipos de contenido. No tienes que estar disponible para los golpes del algoritmo.</li>
            <li><strong>Define tus propios tiempos de visita digital.</strong> Si sientes que necesitas visitar el perfil de quien falleció, hazlo de manera intencional -no impulsiva. Elige un momento, un límite de tiempo, y sé consciente de cómo te sientes antes y después.</li>
            <li><strong>Habla con tu familia sobre el perfil.</strong> Tomar decisiones colectivas sobre qué hacer con la presencia digital del difunto puede convertirse en un ritual de despedida en sí mismo.</li>
            <li><strong>Cuida tu consumo general de redes durante el duelo.</strong> El scroll infinito no nutre el dolor -lo anestesia momentáneamente y luego lo intensifica. Reducir el tiempo en redes en general puede ser un acto de cuidado propio.</li>
            <li><strong>Guarda lo que quieres guardar, conscientemente.</strong> Si hay fotos, audios o conversaciones que quieres conservar, hazlo de forma intencional: descárgalos, guárdalos en un lugar propio. No dejes que el algoritmo sea el custodio de tus recuerdos.</li>
            <li><strong>Busca apoyo en espacios presenciales.</strong> El duelo necesita cuerpo, presencia, contacto. Las redes pueden ser un complemento, pero no pueden reemplazar el acompañamiento real -de personas cercanas o de un profesional.</li>
          </ul>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Preguntas frecuentes sobre duelo y redes sociales</h2>

          <div className="space-y-6">
            <div>
              <p className="font-semibold text-black">¿Es malo seguir visitando el perfil de alguien que murió?</p>
              <p>
                No necesariamente. Visitar el perfil puede ser una forma de sentir cercanía y de honrar la memoria de quien se fue. El problema surge cuando se convierte en algo compulsivo, cuando impide el proceso de aceptación de la pérdida o cuando genera más angustia que consuelo. Obsérvate con honestidad: ¿cómo te sientes después de visitar ese perfil?
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Debo eliminar sus fotos de mis redes para poder sanar?</p>
              <p>
                No existe una regla universal. Algunas personas necesitan tomar distancia del contenido digital para poder procesar la pérdida. Otras encuentran consuelo en tener esas imágenes accesibles. Lo importante es que la decisión sea tuya, tomada con consciencia y no por presión externa.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Es normal seguir escribiéndole mensajes a alguien que ya murió?</p>
              <p>
                Sí. Es una forma que tiene la mente de mantener el vínculo mientras procesa la pérdida. Muchos terapeutas incluso lo usan como herramienta: escribirle cartas o mensajes a quien se fue puede ayudar a expresar lo no dicho. Lo que importa es que no sea el único espacio donde llevas tu dolor.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Cómo le digo a mi familia que quiero desactivar el perfil de la persona que murió?</p>
              <p>
                Esta conversación es difícil porque toca el duelo de todos. No hay una forma perfecta. Lo más importante es reconocer que cada persona tiene una relación diferente con esa presencia digital, y que cualquier decisión debería tomarse con respeto por todos los procesos. Si la conversación se siente imposible, puede ser útil tenerla con el acompañamiento de un profesional.
              </p>
            </div>

            <div>
              <p className="font-semibold text-black">¿Las redes sociales pueden retrasar el duelo?</p>
              <p>
                Pueden complicarlo. Si el uso de redes se convierte en una forma de evitar el dolor -revisando compulsivamente el perfil del difunto, buscando recuerdos digitales en lugar de procesar la ausencia- puede dificultar el trabajo de aceptación que es central en el duelo. No es que las redes sean malas: es que la evasión, en cualquier forma, prolonga el sufrimiento.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">El duelo necesita más que una pantalla</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si sientes que el mundo digital está complicando tu proceso de duelo, o simplemente que necesitas un espacio seguro y presencial para procesar lo que estás viviendo, aquí estoy para acompañarte.
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

        {/* Related Articles */}
        <RelatedArticles currentSlug="duelo-y-redes-sociales" category="tanatologia" />
      </div>
    </article>
  )
}
