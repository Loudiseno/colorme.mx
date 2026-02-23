'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/lib/seo'

export default function ArticuloVerguenzaDuelo() {
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
            La verguenza: la emocion que te hace esconderte
          </h1>
          <p className="text-black/60 italic">Por Lourdes | Arteterapeuta y Tanatologa</p>
        </header>

        <div className="mb-12 rounded-2xl overflow-hidden">
          <Image
            src="/verguenza-duelo.webp"
            alt="Verguenza emocional, duelo silenciado, emociones ocultas, miedo al juicio."
            width={1200}
            height={675}
            priority
            className="w-full h-auto"
          />
        </div>

        <div className="prose prose-lg max-w-none text-black/80">
          <p className="italic">
            Lo que callamos por miedo a ser juzgados.
          </p>

          <p>
            Hay una emocion de la que casi nadie habla. Precisamente porque hablar de ella la activa.
          </p>

          <p>
            La verguenza.
          </p>

          <p>
            Es la emocion que te hace querer desaparecer. Que te convence de que si alguien viera quien eres realmente, te rechazaria. Que te mantiene en silencio sobre las cosas mas importantes.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">La emocion que no queremos admitir que sentimos</h2>

          <p>
            La verguenza tiene una caracteristica peculiar: sentir verguenza da verguenza.
          </p>

          <p>
            Por eso permanece oculta. Por eso no la nombramos. Por eso cargamos con ella en silencio mientras pretendemos que no existe.
          </p>

          <p>
            Pero esta ahi. En las cosas que no contamos a nadie. En los recuerdos que nos despiertan en la madrugada. En la sensacion de que hay algo fundamentalmente malo en nosotros.
          </p>

          <p>
            Segun investigaciones de la psicologa Brene Brown, quien ha estudiado la verguenza durante mas de dos decadas, esta emocion es universal. Todos la sentimos. La unica diferencia es que tanto control tiene sobre nuestras vidas.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Verguenza versus culpa</h2>

          <p>
            Aunque a menudo se confunden, verguenza y culpa son emociones diferentes.
          </p>

          <p>
            La culpa dice: &quot;Hice algo malo.&quot;
          </p>

          <p>
            La verguenza dice: &quot;Soy algo malo.&quot;
          </p>

          <p>
            La culpa se enfoca en el comportamiento. Puede motivar cambios, disculpas, reparacion. Tiene una funcion util.
          </p>

          <p>
            La verguenza se enfoca en la identidad. No dice que fallaste; dice que eres un fracaso. No senala algo que puedes cambiar; te define como defectuoso en tu esencia.
          </p>

          <p>
            Esta diferencia es crucial. La culpa, cuando es proporcional, puede ser constructiva. La verguenza rara vez lo es.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Lo que la verguenza nos hace creer</h2>

          <p>
            La verguenza tiene mensajes caracteristicos.
          </p>

          <p>
            &quot;Soy defectuoso.&quot; No que cometi un error, sino que soy un error. Hay algo mal en mi nucleo, algo que no se puede arreglar.
          </p>

          <p>
            &quot;Si me conocieran de verdad, me rechazarian.&quot; La verguenza crea una separacion entre el yo que mostramos y el yo que escondemos. Vivimos con el terror de que la mascara caiga.
          </p>

          <p>
            &quot;No merezco amor ni pertenencia.&quot; La verguenza nos convence de que el amor que recibimos es condicional, basado en una version editada de nosotros. El verdadero yo no seria amado.
          </p>

          <p>
            &quot;Soy el unico que se siente asi.&quot; Parte del poder de la verguenza es hacernos creer que nuestra experiencia es unica, que nadie mas tiene estos secretos o defectos.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">De donde viene la verguenza</h2>

          <p>
            La verguenza se aprende. Generalmente temprano.
          </p>

          <p>
            <strong>Mensajes familiares.</strong> Padres que avergonzaban como forma de disciplina. Comparaciones con hermanos o con otros ninos. Mensajes explicitos o implicitos de que no eras suficiente.
          </p>

          <p>
            <strong>Experiencias de humillacion.</strong> Momentos donde fuiste expuesto, ridiculizado, rechazado publicamente. Estas experiencias pueden marcar profundamente, especialmente en la infancia y adolescencia.
          </p>

          <p>
            <strong>Fracasos que se convirtieron en identidad.</strong> En lugar de aprender que a veces fallamos, aprendiste que eres un fracaso. La experiencia se generalizo a la identidad.
          </p>

          <p>
            <strong>Secretos familiares.</strong> Crecer en familias donde habia cosas de las que no se podia hablar: adicciones, abusos, enfermedades mentales, situacion economica. El silencio ensena que ciertas realidades son vergonzosas.
          </p>

          <p>
            <strong>Mensajes culturales.</strong> La cultura transmite que es vergonzoso: ciertos cuerpos, ciertas orientaciones, ciertas condiciones de vida, ciertas emociones. Internalizamos esos mensajes aunque no los hayamos elegido.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Verguenza en el duelo</h2>

          <p>
            La verguenza aparece frecuentemente en el proceso de duelo, aunque rara vez se menciona.
          </p>

          <p>
            Verguenza por como murio la persona: suicidio, sobredosis, causas estigmatizadas.
          </p>

          <p>
            Verguenza por la relacion que tenias: conflictos no resueltos, distancia, ambivalencia.
          </p>

          <p>
            Verguenza por lo que sientes: alivio, enojo con quien murio, culpa por seguir vivo.
          </p>

          <p>
            Verguenza por como estas llevando el duelo: si lloras demasiado o demasiado poco, si no puedes funcionar o si funcionas &quot;demasiado bien.&quot;
          </p>

          <p>
            Esta verguenza anade una capa de sufrimiento al duelo y puede hacer que las personas se aislen justamente cuando mas necesitan conexion.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Como la verguenza nos aisla</h2>

          <p>
            La verguenza prospera en el secreto y el silencio.
          </p>

          <p>
            Cuando sentimos verguenza, nuestro impulso es escondernos. No hablar. No dejar que nadie vea. Creemos que el silencio nos protege.
          </p>

          <p>
            Pero el aislamiento alimenta la verguenza. Sin el reflejo de otros, sin escuchar &quot;yo tambien me he sentido asi,&quot; quedamos atrapados en la creencia de que somos los unicos, de que nuestro defecto es unico e imperdonable.
          </p>

          <p>
            El aislamiento tambien nos impide cuestionar los mensajes de la verguenza. Sin perspectivas externas, las distorsiones de la verguenza pasan por verdad.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">El antidoto: conexion y vulnerabilidad</h2>

          <p>
            Si la verguenza prospera en el silencio, el antidoto es la conexion.
          </p>

          <p>
            Esto no significa contarle todo a todos. Significa encontrar personas seguras con quienes puedas ser honesto. Personas que respondan con empatia, no con juicio.
          </p>

          <p>
            Cuando compartes algo que te averguenza y la otra persona responde con comprension, algo cambia. La creencia de que serias rechazado si alguien supiera se confronta con la realidad de que alguien sabe y sigue ahi.
          </p>

          <p>
            La vulnerabilidad es el camino, aunque se sienta aterrador. Brene Brown la define como &quot;incertidumbre, riesgo y exposicion emocional.&quot; No es comoda. Pero es la puerta de salida de la verguenza.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Expresar lo que averguenza a traves del arte</h2>

          <p>
            No todo necesita ser dicho en voz alta a otra persona.
          </p>

          <p>
            El arte puede ser un espacio intermedio. Un lugar donde expresas lo que sientes sin necesidad de mostrarlo a nadie.
          </p>

          <p>
            Escribir lo que te averguenza, para ti mismo. El acto de poner palabras a lo que guardas en silencio ya tiene poder.
          </p>

          <p>
            Pintar o dibujar las emociones sin preocuparte por el resultado. El proceso importa mas que el producto.
          </p>

          <p>
            Crear algo y despues destruirlo si lo necesitas. El arte no tiene que ser permanente ni publico para ser terapeutico.
          </p>

          <p>
            Estos actos creativos pueden ser pasos hacia nombrar lo que sientes, sacar del interior lo que has cargado solo.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Trabajar con la verguenza</h2>

          <p>
            La verguenza profunda generalmente requiere trabajo consciente, muchas veces con apoyo profesional.
          </p>

          <p>
            <strong>Reconocer la verguenza.</strong> Identificar cuando esta presente, que la activa, que mensajes trae. Esto ya es un paso significativo porque la verguenza opera mejor cuando permanece invisible.
          </p>

          <p>
            <strong>Cuestionar los mensajes.</strong> Es verdad que soy defectuoso. Es verdad que seria rechazado. De donde vienen estas creencias. Siguen siendo validas.
          </p>

          <p>
            <strong>Practicar la autocompasion.</strong> Tratarte con la misma amabilidad que tratarias a un amigo que te contara lo que tu te juzgas tan duramente.
          </p>

          <p>
            <strong>Buscar conexiones seguras.</strong> Personas, grupos o terapeutas donde puedas practicar la vulnerabilidad y recibir aceptacion.
          </p>

          <h2 className="text-2xl md:text-3xl text-black font-semibold mt-8 mb-4">Una reflexion</h2>

          <p>
            La verguenza es una de las emociones mas dolorosas que existen. Y tambien una de las mas comunes.
          </p>

          <p>
            Lo que sientes no te hace raro ni defectuoso. Te hace humano.
          </p>

          <p>
            Los secretos que crees que te harian inaceptable probablemente son mas comunes de lo que imaginas. Y las personas que vale la pena tener en tu vida no te rechazarian por ellos.
          </p>

          <p>
            La verguenza pierde poder cuando se nombra, cuando se comparte, cuando se expone a la luz.
          </p>

          <p>
            No tienes que seguir cargando esto en silencio.
          </p>

          <p className="italic text-black/60 mt-8">
            Lo que escondes por verguenza no te define. Pero guardarlo te limita.
          </p>
        </div>

        <div className="mt-16 p-8 bg-[#B2F7EF]/10 rounded-2xl border border-[#B2F7EF] text-center">
          <h3 className="text-2xl text-black mb-4 font-semibold">Agenda tu sesion de orientacion gratuita</h3>
          <p className="text-black/70 mb-6 max-w-xl mx-auto">
            Si cargas con emociones dificiles y necesitas un espacio seguro para expresarlas, estoy aqui para ti.
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
